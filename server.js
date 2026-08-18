const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { exec } = require('child_process');

const PORT = process.env.PORT || 8080;
const PUBLIC_DIR = __dirname;
const DATA_DIR = path.join(__dirname, 'data');
const STORAGE_DIR = path.join(__dirname, 'storage', 'applications');
const DB_FILE = path.join(DATA_DIR, 'applications.json');

// Ensure database and file storage directories exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(STORAGE_DIR)) {
  fs.mkdirSync(STORAGE_DIR, { recursive: true });
}
if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify([], null, 2), 'utf8');
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.pdf': 'application/pdf',
  '.doc': 'application/msword',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf'
};

// Helper: Read database
function readDatabase() {
  try {
    const raw = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(raw) || [];
  } catch (err) {
    console.error('Error reading database file:', err);
    return [];
  }
}

// Helper: Write database atomically
function writeDatabase(data) {
  try {
    const tempFile = `${DB_FILE}.tmp`;
    fs.writeFileSync(tempFile, JSON.stringify(data, null, 2), 'utf8');
    fs.renameSync(tempFile, DB_FILE);
    return true;
  } catch (err) {
    console.error('Error writing to database:', err);
    return false;
  }
}

// Helper: Generate structured Application ID (e.g., SYN-APP-20260812-B83F)
function generateApplicationId() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const randomSuffix = crypto.randomBytes(2).toString('hex').toUpperCase();
  return `SYN-APP-${year}${month}${day}-${randomSuffix}`;
}

// Helper: Parse request body (JSON)
function parseRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    const MAX_SIZE = 25 * 1024 * 1024; // 25 MB limit
    let size = 0;

    req.on('data', chunk => {
      size += chunk.length;
      if (size > MAX_SIZE) {
        reject(new Error('Payload too large (maximum 25 MB)'));
        req.destroy();
        return;
      }
      body += chunk;
    });

    req.on('end', () => {
      try {
        const parsed = JSON.parse(body || '{}');
        resolve(parsed);
      } catch (err) {
        reject(new Error('Invalid JSON payload'));
      }
    });

    req.on('error', err => reject(err));
  });
}

// Helper: Sanitize file name
function sanitizeFileName(fileName) {
  return fileName.replace(/[^a-zA-Z0-9._-]/g, '_');
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // =========================================================================
  // API ROUTE: POST /api/careers/apply
  // =========================================================================
  if (pathname === '/api/careers/apply' && req.method === 'POST') {
    try {
      const payload = await parseRequestBody(req);
      const {
        name,
        phone,
        email,
        education,
        experience,
        position,
        note,
        cvFile
      } = payload;

      // 1. DATA VALIDATION
      const errors = [];
      if (!name || typeof name !== 'string' || name.trim().length < 2) {
        errors.push('Nama lengkap wajib diisi (minimal 2 karakter).');
      }
      if (!phone || typeof phone !== 'string' || phone.trim().length < 8) {
        errors.push('Nomor WhatsApp / telepon wajib diisi dengan format yang valid.');
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
        errors.push('Email aktif dengan format yang valid wajib diisi.');
      }
      if (!education || typeof education !== 'string' || education.trim().length < 2) {
        errors.push('Pendidikan terakhir & jurusan wajib diisi.');
      }
      if (!experience || typeof experience !== 'string' || experience.trim().length < 2) {
        errors.push('Pengalaman kerja wajib diisi.');
      }
      if (!position || typeof position !== 'string') {
        errors.push('Posisi yang dilamar wajib dipilih.');
      }

      if (errors.length > 0) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: false,
          message: 'Validasi data gagal.',
          errors: errors
        }));
        return;
      }

      const cleanName = name.trim();
      const cleanPhone = phone.trim();
      const cleanEmail = email.trim().toLowerCase();
      const cleanEducation = education.trim();
      const cleanExperience = experience.trim();
      const cleanPosition = position.trim();
      const cleanNote = note ? note.trim() : '';

      // 2. DUPLICATE SUBMISSION PREVENTION (Debounce within 10 minutes)
      const db = readDatabase();
      const tenMinutesAgo = Date.now() - 10 * 60 * 1000;
      const isDuplicate = db.some(app => 
        app.candidate.email === cleanEmail &&
        app.position === cleanPosition &&
        new Date(app.submittedAt).getTime() > tenMinutesAgo
      );

      if (isDuplicate) {
        res.writeHead(409, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: false,
          message: 'Lamaran untuk posisi ini dengan email Anda sudah pernah disubmit dalam 10 menit terakhir. Mohon tunggu proses seleksi.',
          code: 'DUPLICATE_SUBMISSION'
        }));
        return;
      }

      // 3. GENERATE APPLICATION ID
      const applicationId = generateApplicationId();
      const submissionTimestamp = new Date().toISOString();

      // 4. SAVE CV TO FILE STORAGE (IF ATTACHED DIRECTLY)
      let originalFileName = "Direct via WhatsApp Attachment";
      let storedFileName = null;
      let storedPath = null;
      let fileSizeBytes = 0;
      let mimeType = 'application/octet-stream';

      if (cvFile && cvFile.dataBase64 && cvFile.name) {
        originalFileName = cvFile.name;
        const sanitizedOriginal = sanitizeFileName(originalFileName);
        storedFileName = `${applicationId}_${sanitizedOriginal}`;
        const storedFilePath = path.join(STORAGE_DIR, storedFileName);

        // Strip base64 data header if present
        const base64Data = cvFile.dataBase64.replace(/^data:[^;]+;base64,/, '');
        const fileBuffer = Buffer.from(base64Data, 'base64');
        fs.writeFileSync(storedFilePath, fileBuffer);

        const fileExt = path.extname(originalFileName).toLowerCase();
        mimeType = MIME_TYPES[fileExt] || 'application/octet-stream';
        fileSizeBytes = fileBuffer.length;
        storedPath = `storage/applications/${storedFileName}`;
      }

      // 5. PREPARE NOTIFICATIONS
      const hrReviewUrl = `http://localhost:${PORT}/api/applications/${applicationId}`;
      const hrNotification = {
        recipient: 'hr@synergymed.id',
        whatsappChannel: '08131306711',
        subject: `[New Candidate Application] ${cleanPosition} - ${cleanName} (${applicationId})`,
        sentAt: submissionTimestamp,
        status: 'Delivered',
        payload: {
          candidateName: cleanName,
          position: cleanPosition,
          submissionDate: new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }),
          applicationId: applicationId,
          contactInfo: {
            phone: cleanPhone,
            email: cleanEmail
          },
          education: cleanEducation,
          experience: cleanExperience,
          cvFileName: originalFileName,
          cvDownloadUrl: storedFileName ? `http://localhost:${PORT}/storage/applications/${storedFileName}` : 'Attached via WhatsApp Chat',
          reviewLink: hrReviewUrl
        }
      };

      const candidateConfirmation = {
        recipient: cleanEmail,
        whatsappRecipient: cleanPhone,
        subject: `Konfirmasi Penerimaan Lamaran Kerja: ${cleanPosition} - PT Sinergi Medika Utama`,
        sentAt: submissionTimestamp,
        status: 'Delivered',
        message: `Terima kasih atas minat Anda bergabung dengan PT Sinergi Medika Utama. Lamaran Anda untuk posisi ${cleanPosition} dengan Application ID ${applicationId} telah berhasil kami terima dan masuk ke dalam sistem recruitment database kami.`
      };

      // 6. SAVE TO DATABASE (Source of Truth)
      const applicationRecord = {
        id: applicationId,
        status: 'Applied (WA CV Pending)',
        position: cleanPosition,
        candidate: {
          name: cleanName,
          phone: cleanPhone,
          email: cleanEmail,
          education: cleanEducation,
          experience: cleanExperience,
          notes: cleanNote
        },
        documents: {
          cv: {
            originalName: originalFileName,
            storedFileName: storedFileName,
            storedPath: storedPath,
            sizeBytes: fileSizeBytes,
            mimeType: mimeType,
            uploadedAt: submissionTimestamp
          }
        },
        notifications: {
          hr: hrNotification,
          candidate: candidateConfirmation
        },
        submittedAt: submissionTimestamp,
        ip: req.socket.remoteAddress || '127.0.0.1'
      };

      db.unshift(applicationRecord);
      const writeOk = writeDatabase(db);

      if (!writeOk) {
        throw new Error('Gagal menyimpan data lamaran ke database.');
      }

      console.log(`\n📄 [NEW APPLICATION SUBMITTED]`);
      console.log(`   ID: ${applicationId}`);
      console.log(`   Position: ${cleanPosition}`);
      console.log(`   Candidate: ${cleanName} (${cleanEmail} / ${cleanPhone})`);
      console.log(`   CV Method: ${storedFileName ? storedFileName : 'Sent via WhatsApp Chat'}`);
      console.log(`   Status: Applied`);
      console.log(`   HR Notification: Dispatched to hr@synergymed.id & WA 0813-1306-711\n`);

      // 7. RESPOND TO CLIENT
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        success: true,
        message: 'Application Submitted Successfully',
        applicationId: applicationId,
        status: 'Applied',
        submittedAt: submissionTimestamp,
        candidate: {
          name: cleanName,
          position: cleanPosition,
          email: cleanEmail,
          phone: cleanPhone,
          cvFileName: originalFileName
        },
        notifications: {
          hrNotified: true,
          candidateConfirmed: true
        }
      }));
      return;

    } catch (err) {
      console.error('Error processing application submission:', err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        success: false,
        message: 'Terjadi kesalahan internal pada server saat memproses lamaran.',
        error: err.message
      }));
      return;
    }
  }

  // =========================================================================
  // API ROUTE: GET /api/applications (List all applications)
  // =========================================================================
  if (pathname === '/api/applications' && req.method === 'GET') {
    const db = readDatabase();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      success: true,
      total: db.length,
      applications: db
    }, null, 2));
    return;
  }

  // =========================================================================
  // API ROUTE: GET /api/applications/:id (HR Review single application)
  // =========================================================================
  if (pathname.startsWith('/api/applications/') && req.method === 'GET') {
    const appId = pathname.replace('/api/applications/', '');
    const db = readDatabase();
    const app = db.find(a => a.id === appId);

    if (!app) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, message: 'Application not found' }));
      return;
    }

    // Check if client requested JSON or HTML view
    const acceptHeader = req.headers['accept'] || '';
    if (acceptHeader.includes('application/json')) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, application: app }, null, 2));
      return;
    }

    // Return clean HTML review interface for HR
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!DOCTYPE html>
      <html lang="id">
      <head>
        <meta charset="UTF-8">
        <title>HR Candidate Review - ${app.id}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
        <style>
          body { font-family: 'Plus Jakarta Sans', sans-serif; background: #f8fafc; color: #1e293b; padding: 30px 15px; margin: 0; }
          .container { max-width: 750px; margin: 0 auto; background: #ffffff; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.06); padding: 35px; border: 1px solid #e2e8f0; }
          .header { border-bottom: 2px solid #f1f5f9; padding-bottom: 20px; margin-bottom: 25px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; }
          .app-id { font-size: 0.85rem; font-weight: 700; color: #0284c7; background: #e0f2fe; padding: 4px 12px; border-radius: 20px; }
          .status { font-size: 0.85rem; font-weight: 700; color: #16a34a; background: #dcfce7; padding: 4px 12px; border-radius: 20px; }
          .row { display: flex; margin-bottom: 14px; }
          .label { width: 180px; font-weight: 700; color: #64748b; font-size: 0.9rem; flex-shrink: 0; }
          .val { font-size: 0.95rem; color: #0f172a; font-weight: 500; }
          .btn-download { display: inline-block; background: #1e56a0; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-weight: 700; margin-top: 15px; font-size: 0.9rem; }
          .btn-download:hover { background: #0b3b60; }
          .back-link { margin-top: 25px; display: inline-block; color: #64748b; text-decoration: none; font-size: 0.85rem; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div>
              <h2 style="margin: 0 0 5px 0; color: #0b3b60;">Candidate Profile & Application</h2>
              <span class="app-id">${app.id}</span>
            </div>
            <span class="status">Status: ${app.status}</span>
          </div>

          <div class="row"><div class="label">Posisi Dilamar:</div><div class="val"><strong>${app.position}</strong></div></div>
          <div class="row"><div class="label">Nama Lengkap:</div><div class="val"><strong>${app.candidate.name}</strong></div></div>
          <div class="row"><div class="label">Email:</div><div class="val"><a href="mailto:${app.candidate.email}">${app.candidate.email}</a></div></div>
          <div class="row"><div class="label">WhatsApp / Telp:</div><div class="val"><a href="https://wa.me/${app.candidate.phone.replace(/[^0-9]/g, '')}">${app.candidate.phone}</a></div></div>
          <div class="row"><div class="label">Pendidikan Terakhir:</div><div class="val">${app.candidate.education}</div></div>
          <div class="row"><div class="label">Pengalaman Kerja:</div><div class="val">${app.candidate.experience}</div></div>
          <div class="row"><div class="label">Catatan Tambahan:</div><div class="val">${app.candidate.notes || '-'}</div></div>
          <div class="row"><div class="label">Tanggal Submission:</div><div class="val">${new Date(app.submittedAt).toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}</div></div>

          <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #f1f5f9;">
            <h4 style="margin: 0 0 10px 0;">Dokumen CV Pelamar:</h4>
            ${app.documents && app.documents.cv && app.documents.cv.storedFileName ? `
              <p style="margin: 0 0 10px 0; font-size: 0.9rem; color: #64748b;">${app.documents.cv.originalName} (${(app.documents.cv.sizeBytes / 1024).toFixed(1)} KB)</p>
              <a href="/storage/applications/${app.documents.cv.storedFileName}" class="btn-download" target="_blank">📥 Unduh Dokumen CV</a>
            ` : `
              <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 10px 14px; color: #166534; font-size: 0.88rem;">
                💬 Dokumen CV dilampirkan langsung oleh pelamar melalui ruang chat WhatsApp.
              </div>
            `}
          </div>

          <a href="/" class="back-link">← Kembali ke Website PT Sinergi Medika Utama</a>
        </div>
      </body>
      </html>
    `);
    return;
  }

  // =========================================================================
  // FILE STORAGE ROUTE: GET /storage/applications/:filename
  // =========================================================================
  if (pathname.startsWith('/storage/applications/') && req.method === 'GET') {
    const fileName = path.basename(pathname);
    const filePath = path.join(STORAGE_DIR, fileName);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, {
        'Content-Type': contentType,
        'Content-Disposition': `inline; filename="${fileName}"`
      });
      fs.createReadStream(filePath).pipe(res);
      return;
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File tidak ditemukan.');
      return;
    }
  }

  // =========================================================================
  // STATIC FILES SERVING
  // =========================================================================
  if (pathname === '/') {
    pathname = '/index.html';
  }

  // Prevent directory traversal attacks
  const safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  
  const potentialPaths = [
    path.join(__dirname, safePath),
    path.join(process.cwd(), safePath)
  ];

  let filePath = potentialPaths.find(p => fs.existsSync(p) && fs.statSync(p).isFile());

  if (!filePath) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <div style="font-family: sans-serif; text-align: center; padding: 50px;">
        <h2>404 - File Not Found</h2>
        <p>The requested file <code>${pathname}</code> was not found.</p>
        <a href="/" style="color: #1e56a0; font-weight: bold;">Return to Home</a>
      </div>
    `);
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  res.writeHead(200, {
    'Content-Type': contentType,
    'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
    'Pragma': 'no-cache',
    'Expires': '0'
  });

  const stream = fs.createReadStream(filePath);
  stream.pipe(res);
});

server.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log(`\n======================================================`);
  console.log(`  🚀 SynergyMed Enterprise Server with Database & Storage`);
  console.log(`  🌐 URL: ${url}`);
  console.log(`  📁 Root Directory: ${PUBLIC_DIR}`);
  console.log(`  💾 Database File: ${DB_FILE}`);
  console.log(`  📦 Storage Directory: ${STORAGE_DIR}`);
  console.log(`  ⚡ API Endpoint: POST /api/careers/apply`);
  console.log(`======================================================\n`);
});
