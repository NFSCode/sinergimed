/* ==========================================================================
   SYNERGYMED™ - Scalable Solutions Catalog & Interactive App Engine
   ========================================================================== */

// 1. SOLUTIONS CATALOG DATA
const productsData = [

  // --- RADIOTHERAPY & SURGERY ---
  {
    id: "rs-01",
    title: "Zap-X",
    subtitle: "Gyroscopic Stereotactic Radiosurgery System",
    category: "Radiation Oncology",
    image: "https://zapsurgical.com/wp-content/uploads/zap-x-centre-de-cancerologie-de-la-porte-de-saint-cloud-ccpsc.jpg",
    specs: [
      "Self-shielded dual-gantry gyroscopic design — no bunker required",
      "Frameless stereotactic radiosurgery for intracranial & cervical spine",
      "Built-in kV imaging for real-time patient guidance",
      "6 MV compact LINAC — no radioactive isotopes",
      "Hundreds of non-coplanar beam angles for precise targeting"
    ],
    brochure: "SynergyMed_Oncology_Imaging.pdf"
  },

  // --- MEDICAL IMAGING: C-ARM ---
  {
    id: "img-carm-01",
    title: "Synergy XCA",
    subtitle: "Mobile C-Arm Analog Fluoroscopy System (5 kW)",
    category: "Medical Imaging",
    image: "https://www.perlove.net/wp-content/uploads/perlove-mobile-c-arm-machinr.png",
    specs: [
      "Analog image intensifier fluoroscopic C-arm",
      "5 kW high-frequency X-ray generator",
      "Fully mobile with motorized C-arm movements",
      "Real-time fluoroscopic imaging for surgical guidance",
      "AKL registered — Ministry of Health Indonesia"
    ],
    brochure: "SynergyMed_Oncology_Imaging.pdf"
  },
  {
    id: "img-carm-02",
    title: "Synergy XCD",
    subtitle: "Mobile C-Arm Digital Fluoroscopy System",
    category: "Medical Imaging",
    image: "https://www.perlove.net/wp-content/uploads/perlove-mobile-c-arm-machinr.png",
    specs: [
      "Digital flat panel detector fluoroscopic C-arm",
      "High-resolution digital image acquisition",
      "Motorized multi-axis C-arm positioning",
      "Ideal for orthopedic, vascular & trauma procedures",
      "AKL registered — Ministry of Health Indonesia"
    ],
    brochure: "SynergyMed_Oncology_Imaging.pdf"
  },

  // --- MEDICAL IMAGING: CT SCAN ---
  {
    id: "img-ct-01",
    title: "Synergy CR32S",
    subtitle: "32-Slice CT Scanner — Standard Edition",
    category: "Medical Imaging",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/27/UPMCEast_CTscan.jpg",
    specs: [
      "32-slice helical CT scanning",
      "0.5s gantry rotation speed",
      "Dose modulation for low-radiation imaging",
      "Wide bore gantry for patient comfort",
      "DICOM 3.0 compliant workstation"
    ],
    brochure: "SynergyMed_Oncology_Imaging.pdf"
  },
  {
    id: "img-ct-02",
    title: "Synergy CT32",
    subtitle: "32-Slice CT Scanner — Advanced Edition",
    category: "Medical Imaging",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/27/UPMCEast_CTscan.jpg",
    specs: [
      "32-slice CT with advanced reconstruction algorithms",
      "AI-assisted noise reduction",
      "Cardiac & neuro imaging protocols included",
      "Auto exposure control for optimal image quality",
      "High-capacity X-ray tube"
    ],
    brochure: "SynergyMed_Oncology_Imaging.pdf"
  },
  {
    id: "img-ct-03",
    title: "Synergy CT64",
    subtitle: "64-Slice Multi-Detector CT Scanner",
    category: "Medical Imaging",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/27/UPMCEast_CTscan.jpg",
    specs: [
      "64-slice per rotation imaging",
      "0.4s gantry rotation for cardiac CT",
      "Spectral imaging capability",
      "Sub-millimeter isotropic resolution",
      "ASIR dose reduction technology"
    ],
    brochure: "SynergyMed_Oncology_Imaging.pdf"
  },
  {
    id: "img-ct-04",
    title: "Synergy CT128",
    subtitle: "128-Slice Ultra-High Definition CT Scanner",
    category: "Medical Imaging",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/27/UPMCEast_CTscan.jpg",
    specs: [
      "128-slice ultra-fast helical CT",
      "0.33s rotation — ideal for cardiac & trauma",
      "Dual-energy spectral CT capability",
      "AI-powered motion artifact reduction",
      "8.0 MHU high heat capacity X-ray tube"
    ],
    brochure: "SynergyMed_Oncology_Imaging.pdf"
  },

  // --- MEDICAL IMAGING: DIGITAL STATIONARY X-RAY ---
  {
    id: "img-xray-s01",
    title: "Synergy Imaging XSD-70C",
    subtitle: "Digital Stationary X-Ray System — 70 kW",
    category: "Medical Imaging",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flat_panel_detector.jpg",
    specs: [
      "70 kW high-frequency X-ray generator",
      "Flat panel detector with auto-positioning ceiling suspension",
      "High-resolution digital radiography",
      "Auto-exposure control (AEC)",
      "DICOM 3.0 PACS integration ready"
    ],
    brochure: "SynergyMed_Oncology_Imaging.pdf"
  },
  {
    id: "img-xray-s02",
    title: "Synergy Imaging XSD-50F",
    subtitle: "Digital Stationary X-Ray System — 50 kW Floor-mounted",
    category: "Medical Imaging",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flat_panel_detector.jpg",
    specs: [
      "50 kW high-frequency generator, floor-mounted",
      "Digital flat panel detector",
      "Multi-angle table and wall bucky positioning",
      "Remote exposure control",
      "Low-dose intelligent imaging mode"
    ],
    brochure: "SynergyMed_Oncology_Imaging.pdf"
  },

  // --- MEDICAL IMAGING: DIGITAL MOBILE X-RAY ---
  {
    id: "img-xray-m01",
    title: "Synergy XMD5",
    subtitle: "Digital Mobile X-Ray Unit — 5 kW",
    category: "Medical Imaging",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Mobile_X-Ray_Unit_Sirius_Star_Mobile.jpg",
    specs: [
      "5 kW mobile digital X-ray unit",
      "Integrated flat panel detector",
      "Battery-operated for ward & ICU use",
      "Lightweight compact design for maneuverability",
      "Instant image review on built-in display"
    ],
    brochure: "SynergyMed_Oncology_Imaging.pdf"
  },
  {
    id: "img-xray-m02",
    title: "Synergy XMD50",
    subtitle: "Digital Mobile X-Ray Unit — High Capacity",
    category: "Medical Imaging",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Mobile_X-Ray_Unit_Sirius_Star_Mobile.jpg",
    specs: [
      "High-capacity mobile digital X-ray system",
      "Wireless flat panel detector",
      "Extended battery life for long ward rounds",
      "AI-powered image enhancement",
      "DICOM wireless transfer to PACS"
    ],
    brochure: "SynergyMed_Oncology_Imaging.pdf"
  },

  // --- MEDICAL IMAGING: DIGITAL PORTABLE X-RAY ---
  {
    id: "img-xray-p01",
    title: "Synergy XPD-5",
    subtitle: "Digital Portable X-Ray System",
    category: "Medical Imaging",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Mobile_X-Ray_Unit_Sirius_Star_Mobile.jpg",
    specs: [
      "Ultra-portable, handheld-ready X-ray unit",
      "Wireless flat panel detector included",
      "Suitable for bedside, OR & field imaging",
      "Rechargeable battery with rapid charge",
      "Lightweight under 10 kg for maximum portability"
    ],
    brochure: "SynergyMed_Oncology_Imaging.pdf"
  },

  // --- MEDICAL IMAGING: FLAT PANEL DETECTOR ---
  {
    id: "img-fpd-01",
    title: "Synergy RX-1",
    subtitle: "Wireless Digital Flat Panel Detector",
    category: "Medical Imaging",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flat_panel_detector.jpg",
    specs: [
      "High-resolution amorphous silicon flat panel",
      "Wireless & wired connectivity",
      "Compatible with analog X-ray systems for digital upgrade",
      "Large active area for full-field chest imaging",
      "Drop-resistant, splash-proof casing"
    ],
    brochure: "SynergyMed_Oncology_Imaging.pdf"
  },

  // --- MEDICAL IMAGING: INJECTOR ---
  {
    id: "img-inj-01",
    title: "ASA-200E",
    subtitle: "CT Contrast Media Injector — Dual Head",
    category: "Medical Imaging",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/27/UPMCEast_CTscan.jpg",
    specs: [
      "Dual-head injector for CT contrast media delivery",
      "Programmable injection protocols",
      "Pressure monitoring & safety alarms",
      "Large touch-screen interface",
      "Compatible with all major CT platforms"
    ],
    brochure: "SynergyMed_Oncology_Imaging.pdf"
  },
  {
    id: "img-inj-02",
    title: "ASA-300P",
    subtitle: "MRI Contrast Media Injector — Power Injector",
    category: "Medical Imaging",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/MRI-Philips.JPG",
    specs: [
      "MRI-compatible power injector system",
      "Single & dual syringe configurations",
      "Non-magnetic components — MRI safe",
      "Automatic saline flush post-injection",
      "Programmable flow rate and volume"
    ],
    brochure: "SynergyMed_Oncology_Imaging.pdf"
  },

  // --- MEDICAL IMAGING: MAMMOGRAPHY ---
  {
    id: "img-mam-01",
    title: "MammoVue",
    subtitle: "Full-Field Digital Mammography System",
    category: "Medical Imaging",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Mammography_machine.jpg",
    specs: [
      "Full-field digital mammography (FFDM)",
      "High-resolution flat panel detector optimized for breast tissue",
      "Tomosynthesis (3D mammography) option",
      "Low-dose exposure with superior image quality",
      "AI-assisted lesion detection software"
    ],
    brochure: "SynergyMed_Oncology_Imaging.pdf"
  },

  // --- MEDICAL IMAGING: MRI ---
  {
    id: "img-mri-01",
    title: "Esaote MRI",
    subtitle: "Open & Compact MRI Systems by Esaote",
    category: "Medical Imaging",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/MRI-Philips.JPG",
    specs: [
      "Open-design MRI for claustrophobic and large patients",
      "Dedicated musculoskeletal & orthopedic imaging",
      "Low-field to 1.0T permanent magnet options",
      "Compact footprint — suitable for any facility",
      "Excellent soft tissue differentiation"
    ],
    brochure: "SynergyMed_Oncology_Imaging.pdf"
  },
  {
    id: "img-mri-02",
    title: "Synergy Imaging MRI",
    subtitle: "1.5T High-Field MRI System",
    category: "Medical Imaging",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/MRI-Philips.JPG",
    specs: [
      "1.5T superconducting magnet",
      "Wide 70 cm bore for patient comfort",
      "Advanced neuro, cardiac, and body imaging",
      "Silent scan acoustic noise reduction",
      "AI-powered workflow and image reconstruction"
    ],
    brochure: "SynergyMed_Oncology_Imaging.pdf"
  },

  // --- MEDICAL IMAGING: PACS ---
  {
    id: "img-pacs-01",
    title: "NovaPACS",
    subtitle: "Picture Archiving & Communication System",
    category: "Medical Imaging",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/27/UPMCEast_CTscan.jpg",
    specs: [
      "Scalable cloud & on-premise PACS solution",
      "DICOM 3.0 compliant — integrates with all modalities",
      "Multi-site, multi-user simultaneous access",
      "AI-ready image processing and reporting tools",
      "HL7 & HIS/RIS integration"
    ],
    brochure: "SynergyMed_Oncology_Imaging.pdf"
  },

  // --- MEDICAL IMAGING: VisAr ---
  {
    id: "img-visar-01",
    title: "Visual AR",
    subtitle: "Augmented Reality Surgical Visualization System",
    category: "Medical Imaging",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flat_panel_detector.jpg",
    specs: [
      "Augmented reality overlay for surgical navigation",
      "Real-time 3D anatomical visualization",
      "Integrates with CT/MRI DICOM datasets",
      "Marker-free optical tracking system",
      "Compatible with standard OR lighting and equipment"
    ],
    brochure: "SynergyMed_Oncology_Imaging.pdf"
  }
];

// Current Filter & Search State

let activeCategory = 'all';
let searchQuery = '';

// Initialize page on load
document.addEventListener('DOMContentLoaded', () => {
  renderProductGrid();
  initHeroSlider();
});

// 2. PAGE NAVIGATION SYSTEM
function switchPage(pageId) {
  // Alias 'product' to 'solutions' for backwards compatibility
  if (pageId === 'product') pageId = 'solutions';

  // Hide all page views
  const pages = document.querySelectorAll('.page-view');
  pages.forEach(p => p.classList.remove('active'));

  // Show target page
  const targetPage = document.getElementById(`page-${pageId}`);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // Update header nav active link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => link.classList.remove('active'));
  const activeNav = document.getElementById(`nav-${pageId}`);
  if (activeNav) {
    activeNav.classList.add('active');
  }

  // Close mobile nav menu if open
  const mainNav = document.querySelector('.main-nav');
  if (mainNav) {
    mainNav.classList.remove('mobile-open');
  }

  // Scroll smooth to top on page switch
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 3. SOLUTIONS CATALOG FILTER & SEARCH ENGINE
function filterCatalog(category, buttonEl = null) {
  activeCategory = category;

  // Switch to solutions tab if triggered from home page
  switchPage('solutions');

  // Update button active state
  if (buttonEl) {
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(b => b.classList.remove('active'));
    buttonEl.classList.add('active');
  } else {
    // Sync category pills state manually
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(b => {
      if (b.textContent.trim().toLowerCase() === category.toLowerCase() || (category === 'all' && b.textContent.includes('All'))) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });
  }

  renderProductGrid();
}

function searchCatalog() {
  const searchInput = document.getElementById('catalog-search');
  if (searchInput) {
    searchQuery = searchInput.value.toLowerCase().trim();
    renderProductGrid();
  }
}

function renderProductGrid() {
  const container = document.getElementById('product-grid-container');
  if (!container) return;

  // Filter products
  const filtered = productsData.filter(item => {
    const matchesCategory = (activeCategory === 'all') || (item.category.toLowerCase() === activeCategory.toLowerCase());
    const matchesSearch = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery) || 
      item.subtitle.toLowerCase().includes(searchQuery) ||
      item.category.toLowerCase().includes(searchQuery) ||
      item.specs.some(s => s.toLowerCase().includes(searchQuery));

    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 50px 20px; background: #ffffff; border-radius: 12px; border: 1px dashed #cbd5e1;">
        <i class="fa-solid fa-box-open" style="font-size: 3rem; color: #94a3b8; margin-bottom: 15px;"></i>
        <h3 style="font-family: var(--font-heading); color: var(--primary-dark);">No Solutions Found</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Try adjusting your search criteria or category filter.</p>
        <button class="btn-secondary" style="margin-top: 15px;" onclick="filterCatalog('all')">Reset All Filters</button>
      </div>
    `;
    return;
  }

  // Render cards HTML
  container.innerHTML = filtered.map(item => `
    <div class="product-card">
      <div class="product-card-img">
        <span class="product-category-tag">${item.category}</span>
        <img src="${item.image}" alt="${item.title}" loading="lazy">
      </div>
      <div class="product-card-body">
        <h3 class="product-title">${item.title}</h3>
        <div class="product-subtitle">${item.subtitle}</div>
        <ul class="product-specs-list">
          ${item.specs.map(spec => `<li>${spec}</li>`).join('')}
        </ul>
        <div class="product-card-footer">
          <button class="btn-card-inquire" onclick="inquireProduct('${item.title}')">
            <i class="fa-brands fa-whatsapp"></i> Inquire Quote
          </button>
          <button class="btn-card-details" onclick="openProductDetailModal('${item.id}')" title="View Full Specs">
            <i class="fa-solid fa-eye"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// 4. WHATSAPP & MODAL INQUIRIES
function inquireProduct(productName) {
  const text = encodeURIComponent(`Halo PT Sinergi Medika Utama (SynergyMed), saya tertarik dan ingin meminta penawaran harga / e-katalog untuk solusi: ${productName}. Terima kasih.`);
  window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
}

function openProductDetailModal(productId) {
  const item = productsData.find(p => p.id === productId);
  if (!item) return;

  const content = `
    <div style="text-align: left;">
      <span style="background: #ebf5ff; color: var(--primary-blue); font-size: 0.8rem; font-weight: 700; padding: 4px 12px; border-radius: 15px;">${item.category}</span>
      <h2 style="font-family: var(--font-heading); color: var(--primary-dark); font-size: 1.6rem; margin: 12px 0 6px 0;">${item.title}</h2>
      <div style="color: var(--accent-cyan); font-weight: 700; font-size: 0.85rem; margin-bottom: 20px;">${item.subtitle}</div>
      
      <div style="border-radius: 10px; overflow: hidden; height: 240px; margin-bottom: 20px; border: 1px solid #e2e8f0;">
        <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>

      <h4 style="font-family: var(--font-heading); color: var(--primary-dark); margin-bottom: 10px;">Technical Highlights:</h4>
      <ul style="list-style: none; margin-bottom: 25px;">
        ${item.specs.map(s => `<li style="margin-bottom: 8px; font-size: 0.9rem; position: relative; padding-left: 20px;"><i class="fa-solid fa-check" style="position: absolute; left: 0; top: 3px; color: var(--accent-cyan);"></i> ${s}</li>`).join('')}
      </ul>

      <div style="display: flex; gap: 12px;">
        <button class="btn-primary" style="flex: 1; justify-content: center;" onclick="inquireProduct('${item.title}')">
          <i class="fa-brands fa-whatsapp"></i> Chat WhatsApp Specialist
        </button>
        <button class="btn-secondary" onclick="downloadBrochure('${item.brochure}')">
          <i class="fa-solid fa-file-pdf"></i> Brochure
        </button>
      </div>
    </div>
  `;

  showModal(content);
}

// 5. EXTENSIBILITY DEMO MODAL ("Nanti Banyak")
function openAddProductModal() {
  const content = `
    <div style="text-align: left;">
      <h3 style="font-family: var(--font-heading); color: var(--primary-dark); margin-bottom: 8px;">Quick Add Solution (Demo Extensibility)</h3>
      <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 18px;">Tambahkan solusi baru secara instan ke dalam memori aplikasi ini untuk menguji penambahan massal ("nanti banyak").</p>
      
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div>
          <label style="font-size: 0.8rem; font-weight: 700;">Solution Title</label>
          <input type="text" id="new-prod-title" placeholder="e.g. SynergyRad LINAC Accelerator" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 6px;">
        </div>
        <div>
          <label style="font-size: 0.8rem; font-weight: 700;">Category</label>
          <select id="new-prod-cat" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 6px;">
            <option value="Radiation Oncology">Radiation Oncology</option>
            <option value="Ortho & Neuro">Ortho & Neuro</option>
            <option value="Med Supplies">Med Supplies</option>
            <option value="Medical Imaging">Medical Imaging</option>
            <option value="Endosurgery">Endosurgery</option>
            <option value="Pain & Rehab">Pain & Rehab</option>
            <option value="Critical Care">Critical Care</option>
            <option value="Ultrasound">Ultrasound</option>
            <option value="Enviro">Enviro</option>
          </select>
        </div>
        <div>
          <label style="font-size: 0.8rem; font-weight: 700;">Subtitle / Model</label>
          <input type="text" id="new-prod-sub" placeholder="e.g. Next-Gen Medical System" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 6px;">
        </div>
        <div>
          <label style="font-size: 0.8rem; font-weight: 700;">Key Specification (1 Line)</label>
          <input type="text" id="new-prod-spec" placeholder="e.g. AKD Kemenkes RI Certified" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 6px;">
        </div>
      </div>

      <button class="btn-primary" style="width: 100%; margin-top: 20px; justify-content: center;" onclick="saveNewDemoProduct()">
        + Save Solution To Catalog
      </button>
    </div>
  `;

  showModal(content);
}

function saveNewDemoProduct() {
  const title = document.getElementById('new-prod-title')?.value || 'Demo Medical System';
  const category = document.getElementById('new-prod-cat')?.value || 'Radiation Oncology';
  const subtitle = document.getElementById('new-prod-sub')?.value || 'Certified Medical Solutions';
  const spec = document.getElementById('new-prod-spec')?.value || 'AKD Kemenkes RI Certified';

  productsData.unshift({
    id: `demo-${Date.now()}`,
    title: title,
    subtitle: subtitle,
    category: category,
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [spec, "High Precision Clinical Workflow", "24/7 Technical Support Included"],
    brochure: "SynergyMed_Company_Profile_2026.pdf"
  });

  closeModal();
  filterCatalog(category);
}

// 6. CHAT & E-BROCHURE DOWNLOADS
function openChatModal() {
  const content = `
    <div style="text-align: center; padding: 10px;">
      <div style="width: 60px; height: 60px; background: #ebf5ff; color: var(--primary-blue); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; margin: 0 auto 15px auto;">
        <i class="fa-solid fa-headset"></i>
      </div>
      <h3 style="font-family: var(--font-heading); color: var(--primary-dark); margin-bottom: 8px;">SynergyMed Live Specialist</h3>
      <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 25px;">Hubungi tim konsultan elektromedis dan spesialis alat kesehatan PT Sinergi Medika Utama secara langsung via WhatsApp.</p>
      
      <a href="https://wa.me/6281234567890?text=Halo%20SynergyMed%20Specialist,%20saya%20membutuhkan%20informasi%20mengenai%20solusi%20dan%20layanan" target="_blank" class="btn-primary" style="width: 100%; justify-content: center; font-size: 1rem; padding: 14px;">
        <i class="fa-brands fa-whatsapp" style="font-size: 1.3rem;"></i> Start WhatsApp Live Chat
      </a>
    </div>
  `;
  showModal(content);
}

function downloadBrochure(fileName) {
  const content = `
    <div style="text-align: center; padding: 10px;">
      <i class="fa-solid fa-circle-check" style="font-size: 3rem; color: #10b981; margin-bottom: 15px;"></i>
      <h3 style="font-family: var(--font-heading); color: var(--primary-dark); margin-bottom: 8px;">Brochure Download Started</h3>
      <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 20px;">File <strong>${fileName}</strong> is downloading for procurement review.</p>
      <button class="btn-secondary" onclick="closeModal()">Close Window</button>
    </div>
  `;
  showModal(content);
}

function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name')?.value || 'Guest';
  const content = `
    <div style="text-align: center; padding: 10px;">
      <i class="fa-solid fa-paper-plane" style="font-size: 3rem; color: var(--primary-blue); margin-bottom: 15px;"></i>
      <h3 style="font-family: var(--font-heading); color: var(--primary-dark); margin-bottom: 8px;">Terima Kasih, ${name}!</h3>
      <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 20px;">Pesan dan permintaan penawaran Anda telah terkirim ke Tim Sales PT Sinergi Medika Utama. Spesialis kami akan menghubungi Anda dalam kurun 1x24 jam.</p>
      <button class="btn-primary" onclick="closeModal()">Kembali ke Beranda</button>
    </div>
  `;
  showModal(content);
}

// 7. GENERIC UTILITIES
function showModal(htmlContent) {
  const modal = document.getElementById('generic-modal');
  const body = document.getElementById('modal-content-body');
  if (modal && body) {
    body.innerHTML = htmlContent;
    modal.classList.add('active');
  }
}

function closeModal() {
  const modal = document.getElementById('generic-modal');
  if (modal) {
    modal.classList.remove('active');
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileNav() {
  const nav = document.querySelector('.main-nav');
  if (nav) {
    nav.classList.toggle('mobile-open');
  }
}

// ==========================================================================
// 8. HERO TECHNOLOGY SHOWCASE SLIDER ENGINE
// ==========================================================================
let currentHeroSlide = 0;
const totalHeroSlides = 4;
let heroSliderInterval = null;
let heroSliderProgressInterval = null;
const SLIDE_DURATION = 4800; // 4.8 seconds per slide
let progressStartTime = 0;
let isHeroSliderPaused = false;

function initHeroSlider() {
  const container = document.getElementById('hero-slider-wrapper');
  if (!container) return;

  // Touch Swipe Gesture Handling (Mobile/Tablet)
  let touchStartX = 0;
  let touchEndX = 0;

  container.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    pauseHeroSlider();
  }, { passive: true });

  container.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const swipeThreshold = 45;
    if (touchEndX < touchStartX - swipeThreshold) {
      nextHeroSlide();
    } else if (touchEndX > touchStartX + swipeThreshold) {
      prevHeroSlide();
    }
    resumeHeroSlider();
  }, { passive: true });

  // Hover to pause auto-slide
  container.addEventListener('mouseenter', () => {
    pauseHeroSlider();
  });

  container.addEventListener('mouseleave', () => {
    resumeHeroSlider();
  });

  // Keyboard navigation when page is visible
  document.addEventListener('keydown', (e) => {
    const homePage = document.getElementById('page-home');
    if (homePage && homePage.classList.contains('active')) {
      if (e.key === 'ArrowLeft') {
        prevHeroSlide();
      } else if (e.key === 'ArrowRight') {
        nextHeroSlide();
      }
    }
  });

  // Start initial auto-play and progress bar
  startHeroSliderTimer();
}

function updateHeroSlideUI() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const counterNum = document.getElementById('slider-curr-num');

  slides.forEach((slide, idx) => {
    if (idx === currentHeroSlide) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });

  dots.forEach((dot, idx) => {
    if (idx === currentHeroSlide) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });

  if (counterNum) {
    counterNum.textContent = String(currentHeroSlide + 1).padStart(2, '0');
  }

  resetProgressBar();
}

function goToHeroSlide(index) {
  currentHeroSlide = (index + totalHeroSlides) % totalHeroSlides;
  updateHeroSlideUI();
  if (!isHeroSliderPaused) {
    restartHeroSliderTimer();
  }
}

function nextHeroSlide() {
  goToHeroSlide(currentHeroSlide + 1);
}

function prevHeroSlide() {
  goToHeroSlide(currentHeroSlide - 1);
}

function startHeroSliderTimer() {
  progressStartTime = Date.now();
  
  if (heroSliderProgressInterval) clearInterval(heroSliderProgressInterval);
  heroSliderProgressInterval = setInterval(() => {
    if (isHeroSliderPaused) return;
    const elapsed = Date.now() - progressStartTime;
    const progressPercent = Math.min(100, (elapsed / SLIDE_DURATION) * 100);
    const progressFill = document.getElementById('hero-slider-progress');
    if (progressFill) {
      progressFill.style.width = `${progressPercent}%`;
    }
  }, 40);

  if (heroSliderInterval) clearInterval(heroSliderInterval);
  heroSliderInterval = setInterval(() => {
    if (!isHeroSliderPaused) {
      nextHeroSlide();
    }
  }, SLIDE_DURATION);
}

function restartHeroSliderTimer() {
  startHeroSliderTimer();
}

function resetProgressBar() {
  progressStartTime = Date.now();
  const progressFill = document.getElementById('hero-slider-progress');
  if (progressFill) {
    progressFill.style.width = '0%';
  }
}

function pauseHeroSlider() {
  isHeroSliderPaused = true;
}

function resumeHeroSlider() {
  isHeroSliderPaused = false;
  progressStartTime = Date.now();
}
// ==========================================================================
// 9. CAREERS FILTER ENGINE
// ==========================================================================
function filterJobs(dept, btnElement) {
  const buttons = document.querySelectorAll('.career-filter-btn');
  buttons.forEach(b => b.classList.remove('active'));
  if (btnElement) {
    btnElement.classList.add('active');
  }

  const jobCards = document.querySelectorAll('.job-card');
  let visibleCount = 0;

  jobCards.forEach(card => {
    const cardDept = card.getAttribute('data-dept');
    if (dept === 'all' || cardDept === dept) {
      card.style.display = 'flex';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  const countDisplay = document.getElementById('job-visible-count');
  if (countDisplay) {
    countDisplay.textContent = visibleCount;
  }

  const emptyState = document.getElementById('jobs-empty');
  if (emptyState) {
    emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
  }
}

// ==========================================================================
// 10. JOB APPLICATION MODAL & DATABASE SUBMISSION FLOW
// ==========================================================================
let uploadedCVName = "";
let uploadedCVBase64 = "";
let isSubmittingApplication = false;

function handleJobCVFileChange(input) {
  const label = document.getElementById('app-cv-filename');
  const errorBox = document.getElementById('app-form-error');
  if (errorBox) errorBox.style.display = 'none';

  if (input.files && input.files[0]) {
    const file = input.files[0];
    
    // Validate file size (< 15MB)
    if (file.size > 15 * 1024 * 1024) {
      if (errorBox) {
        errorBox.textContent = 'Ukuran file CV terlalu besar. Maksimal 15 MB.';
        errorBox.style.display = 'block';
      }
      input.value = '';
      uploadedCVName = '';
      uploadedCVBase64 = '';
      if (label) label.textContent = 'Klik untuk memilih file CV dari perangkat';
      return;
    }

    uploadedCVName = file.name;
    const reader = new FileReader();
    reader.onload = function(e) {
      uploadedCVBase64 = e.target.result;
    };
    reader.readAsDataURL(file);

    if (label) {
      label.innerHTML = `<i class="fa-solid fa-file-pdf" style="color: #ef4444;"></i> <strong>${uploadedCVName}</strong> (${(file.size / 1024 / 1024).toFixed(2)} MB)`;
    }
  }
}

function openJobApplicationModal(positionName) {
  uploadedCVName = "";
  uploadedCVBase64 = "";
  isSubmittingApplication = false;

  const content = `
    <div style="text-align: left;">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
        <div style="width: 38px; height: 38px; background: #e0f2fe; color: var(--primary-blue); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.15rem; flex-shrink: 0;">
          <i class="fa-solid fa-file-signature"></i>
        </div>
        <div>
          <h3 style="font-family: var(--font-heading); color: var(--primary-dark); font-size: 1.2rem; margin: 0;">Formulir Lamaran Kerja</h3>
          <p style="margin: 0; font-size: 0.88rem; font-weight: 700; color: var(--primary-blue);">${positionName}</p>
        </div>
      </div>
      <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 16px; line-height: 1.5;">
        Lengkapi data diri dan upload CV Anda. Data lamaran akan diproses dan disimpan secara aman ke database rekrutmen PT Sinergi Medika Utama.
      </p>

      <div id="app-form-error" style="display: none; background: #fef2f2; border: 1px solid #fecaca; color: #b91c1c; padding: 10px 14px; border-radius: 8px; font-size: 0.85rem; margin-bottom: 14px;"></div>

      <form id="career-apply-form" onsubmit="submitJobApplication(event, '${positionName}')" style="display: flex; flex-direction: column; gap: 12px;">
        
        <div>
          <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #334155; margin-bottom: 4px;">
            Nama Lengkap <span style="color: #ef4444;">*</span>
          </label>
          <input type="text" id="app-name" required placeholder="Nama lengkap sesuai KTP" 
            style="width: 100%; padding: 9px 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.88rem; outline: none;">
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div>
            <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #334155; margin-bottom: 4px;">
              Nomor WhatsApp <span style="color: #ef4444;">*</span>
            </label>
            <input type="tel" id="app-phone" required placeholder="08xxxxxxxxxx" 
              style="width: 100%; padding: 9px 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.88rem; outline: none;">
          </div>
          <div>
            <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #334155; margin-bottom: 4px;">
              Email Aktif <span style="color: #ef4444;">*</span>
            </label>
            <input type="email" id="app-email" required placeholder="nama@email.com" 
              style="width: 100%; padding: 9px 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.88rem; outline: none;">
          </div>
        </div>

        <div>
          <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #334155; margin-bottom: 4px;">
            Pendidikan Terakhir & Jurusan <span style="color: #ef4444;">*</span>
          </label>
          <input type="text" id="app-education" required placeholder="Contoh: S1 Keperawatan / D3 DKV / S1 Farmasi" 
            style="width: 100%; padding: 9px 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.88rem; outline: none;">
        </div>

        <div>
          <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #334155; margin-bottom: 4px;">
            Pengalaman Kerja Singkat <span style="color: #ef4444;">*</span>
          </label>
          <input type="text" id="app-experience" required placeholder="Contoh: 2 Tahun Sales Alkes / Fresh Graduate" 
            style="width: 100%; padding: 9px 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.88rem; outline: none;">
        </div>

        <div>
          <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #334155; margin-bottom: 4px;">
            Upload File CV / Resume (PDF/DOCX) <span style="color: #ef4444;">*</span>
          </label>
          <div style="border: 2px dashed #cbd5e1; border-radius: 8px; padding: 12px; text-align: center; background: #f8fafc; cursor: pointer;" onclick="document.getElementById('app-cv-file').click()">
            <input type="file" id="app-cv-file" accept=".pdf,.doc,.docx" required style="display: none;" onchange="handleJobCVFileChange(this)">
            <i class="fa-solid fa-cloud-arrow-up" style="font-size: 1.4rem; color: var(--primary-blue); margin-bottom: 4px; display: block;"></i>
            <span id="app-cv-filename" style="font-size: 0.82rem; color: #475569; font-weight: 600; display: block;">Klik untuk memilih file CV dari perangkat</span>
          </div>
        </div>

        <div>
          <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #334155; margin-bottom: 4px;">
            Pesan / Catatan Tambahan (Opsional)
          </label>
          <textarea id="app-note" rows="2" placeholder="Tuliskan motivasi singkat atau ketersediaan bergabung..." 
            style="width: 100%; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.88rem; outline: none; resize: vertical;"></textarea>
        </div>

        <button type="submit" id="app-submit-btn" class="btn-primary" style="width: 100%; justify-content: center; padding: 12px; font-size: 0.95rem; background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-blue) 100%); color: #ffffff; border: none; box-shadow: 0 4px 14px rgba(11, 59, 96, 0.25); margin-top: 4px;">
          <i class="fa-solid fa-paper-plane" style="font-size: 1rem;"></i> Submit Application
        </button>

      </form>
    </div>
  `;
  showModal(content);
}

async function submitJobApplication(event, positionName) {
  event.preventDefault();
  
  if (isSubmittingApplication) return;

  const errorBox = document.getElementById('app-form-error');
  const submitBtn = document.getElementById('app-submit-btn');

  if (errorBox) errorBox.style.display = 'none';

  const name = document.getElementById('app-name')?.value.trim();
  const phone = document.getElementById('app-phone')?.value.trim();
  const email = document.getElementById('app-email')?.value.trim();
  const education = document.getElementById('app-education')?.value.trim();
  const experience = document.getElementById('app-experience')?.value.trim();
  const note = document.getElementById('app-note')?.value.trim();
  const fileInput = document.getElementById('app-cv-file');

  // Client-Side Validation
  if (!name || !phone || !email || !education || !experience) {
    if (errorBox) {
      errorBox.textContent = 'Mohon lengkapi seluruh kolom yang bertanda bintang (*).';
      errorBox.style.display = 'block';
    }
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    if (errorBox) {
      errorBox.textContent = 'Format email tidak valid. Mohon masukkan email aktif Anda.';
      errorBox.style.display = 'block';
    }
    return;
  }

  if (!fileInput || !fileInput.files || !fileInput.files[0]) {
    if (errorBox) {
      errorBox.textContent = 'Mohon unggah dokumen file CV / Resume Anda.';
      errorBox.style.display = 'block';
    }
    return;
  }

  const file = fileInput.files[0];

  // If base64 is not yet generated, generate now
  if (!uploadedCVBase64) {
    try {
      uploadedCVBase64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = e => resolve(e.target.result);
        reader.onerror = err => reject(err);
        reader.readAsDataURL(file);
      });
    } catch (err) {
      if (errorBox) {
        errorBox.textContent = 'Gagal membaca file CV. Silakan pilih kembali file Anda.';
        errorBox.style.display = 'block';
      }
      return;
    }
  }

  // Prevent duplicate submission & show loading UI
  isSubmittingApplication = true;
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Menyimpan Data Lamaran...`;
    submitBtn.style.opacity = '0.75';
    submitBtn.style.cursor = 'not-allowed';
  }

  const payload = {
    name: name,
    phone: phone,
    email: email,
    education: education,
    experience: experience,
    position: positionName,
    note: note || '',
    cvFile: {
      name: file.name,
      type: file.type || 'application/pdf',
      size: file.size,
      dataBase64: uploadedCVBase64
    }
  };

  try {
    const response = await fetch('/api/careers/apply', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || 'Gagal mengirimkan lamaran kerja.');
    }

    // SUBMISSION SUCCESS: Launch email client pop-up & Render Success View
    launchCandidateEmailClient(result, payload);
    renderApplicationSuccessView(result, payload);

  } catch (err) {
    console.error('Submission error:', err);
    isSubmittingApplication = false;
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Submit Application`;
      submitBtn.style.opacity = '1';
      submitBtn.style.cursor = 'pointer';
    }
    if (errorBox) {
      errorBox.textContent = err.message || 'Terjadi gangguan jaringan saat mengirimkan data lamaran. Silakan coba kembali.';
      errorBox.style.display = 'block';
    }
  }
}

function generateCandidateEmailDetails(result, payload) {
  const recipient = "marketing@synergymed.id";
  const subject = `Lamaran Pekerjaan: ${result.candidate.position} - ${result.candidate.name} (${result.applicationId})`;
  
  const body = 
`Yth. Tim HR & Rekrutmen PT Sinergi Medika Utama,

Saya yang bertanda tangan di bawah ini mengajukan lamaran pekerjaan untuk posisi ${result.candidate.position}. Berikut adalah rincian data diri dan kualifikasi saya:

• Application ID   : ${result.applicationId}
• Posisi Dilamar   : ${result.candidate.position}
• Nama Lengkap     : ${result.candidate.name}
• Nomor WhatsApp   : ${result.candidate.phone}
• Email            : ${result.candidate.email}
• Pendidikan       : ${payload.education}
• Pengalaman Kerja : ${payload.experience}
• Dokumen CV       : ${result.candidate.cvFileName}
• Catatan Tambahan : ${payload.note || '-'}

Bersama email ini saya melampirkan berkas CV (${result.candidate.cvFileName}) saya untuk bahan pertimbangan lebih lanjut.

Besar harapan saya untuk dapat mengikuti proses seleksi berikutnya. Terima kasih.

Hormat saya,
${result.candidate.name}
${result.candidate.phone}`;

  const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return { recipient, subject, body, mailtoUrl, gmailUrl };
}

function launchCandidateEmailClient(result, payload) {
  try {
    const { mailtoUrl } = generateCandidateEmailDetails(result, payload);
    // Trigger default mail client
    window.location.href = mailtoUrl;
  } catch (e) {
    console.log('Auto mailto triggered:', e);
  }
}

function renderApplicationSuccessView(result, payload) {
  const { mailtoUrl, gmailUrl, recipient } = generateCandidateEmailDetails(result, payload);

  const submissionDateFormatted = new Date(result.submittedAt).toLocaleString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const successHtml = `
    <div style="text-align: center; padding: 10px 4px;">
      <!-- Success Icon Badge -->
      <div style="width: 64px; height: 64px; background: #ecfdf5; color: #059669; border: 2px solid #a7f3d0; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 16px auto; box-shadow: 0 4px 14px rgba(5, 150, 105, 0.15);">
        <i class="fa-solid fa-circle-check"></i>
      </div>

      <!-- Main Headline -->
      <h2 style="font-family: var(--font-heading); color: var(--primary-dark); font-size: 1.4rem; font-weight: 800; margin: 0 0 8px 0;">
        Application Submitted Successfully
      </h2>
      <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 18px; line-height: 1.55; max-width: 490px; margin-left: auto; margin-right: auto;">
        Data Anda telah tersimpan di database. Aplikasi email Anda telah otomatis dibuka dengan draf lamaran lengkap.
      </p>

      <!-- Application Details Card -->
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px 18px; text-align: left; margin-bottom: 18px;">
        
        <!-- Header: Application ID & Status -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
          <div>
            <span style="font-size: 0.72rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; display: block;">Application ID</span>
            <strong style="font-size: 1.05rem; color: var(--primary-blue); font-family: monospace; letter-spacing: 0.5px;">${result.applicationId}</strong>
          </div>
          <span style="font-size: 0.76rem; font-weight: 700; background: #dcfce7; color: #15803d; padding: 3px 10px; border-radius: 20px; display: inline-flex; align-items: center; gap: 5px;">
            <i class="fa-solid fa-circle-dot" style="font-size: 0.55rem;"></i> Status: ${result.status}
          </span>
        </div>

        <!-- Candidate Details Grid -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.84rem; margin-bottom: 10px;">
          <div>
            <span style="color: #64748b; display: block; font-size: 0.76rem;">Posisi:</span>
            <strong style="color: #0f172a;">${result.candidate.position}</strong>
          </div>
          <div>
            <span style="color: #64748b; display: block; font-size: 0.76rem;">Nama:</span>
            <strong style="color: #0f172a;">${result.candidate.name}</strong>
          </div>
          <div>
            <span style="color: #64748b; display: block; font-size: 0.76rem;">WhatsApp / Telp:</span>
            <span style="color: #0f172a; font-weight: 600;">${result.candidate.phone}</span>
          </div>
          <div>
            <span style="color: #64748b; display: block; font-size: 0.76rem;">Email:</span>
            <span style="color: #0f172a; font-weight: 600;">${result.candidate.email}</span>
          </div>
        </div>

        <!-- File Storage Info -->
        <div style="font-size: 0.82rem; color: #475569; border-top: 1px dashed #cbd5e1; padding-top: 8px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 6px;">
          <div>
            <i class="fa-solid fa-file-pdf" style="color: #ef4444; margin-right: 4px;"></i> 
            Dokumen: <strong>${result.candidate.cvFileName}</strong>
          </div>
          <span style="font-size: 0.74rem; color: #059669; font-weight: 700; background: #ecfdf5; padding: 2px 7px; border-radius: 5px;">
            <i class="fa-solid fa-database"></i> Database &amp; Storage Saved
          </span>
        </div>
      </div>

      <!-- Email Sending Action Banner -->
      <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 10px; padding: 14px 16px; text-align: left; margin-bottom: 18px;">
        <div style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 10px;">
          <i class="fa-solid fa-envelope-open-text" style="color: var(--primary-blue); font-size: 1.2rem; margin-top: 2px;"></i>
          <div>
            <div style="font-size: 0.88rem; font-weight: 700; color: #1e3a8a; margin-bottom: 2px;">
              Kirim Email dari Akun Anda ke: ${recipient}
            </div>
            <div style="font-size: 0.82rem; color: #3b82f6; line-height: 1.45;">
              Draf pesan lamaran sudah siap. Klik tombol di bawah jika aplikasi email Anda belum terbuka otomatis:
            </div>
          </div>
        </div>

        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px;">
          <a href="${mailtoUrl}" class="btn-primary" style="padding: 8px 16px; font-size: 0.84rem; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; background: var(--primary-blue);">
            <i class="fa-solid fa-paper-plane"></i> Buka Default Email App
          </a>
          <a href="${gmailUrl}" target="_blank" class="btn-secondary" style="padding: 8px 16px; font-size: 0.84rem; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; border-color: #ea4335; color: #ea4335;">
            <i class="fa-brands fa-google"></i> Buka via Gmail Web
          </a>
        </div>
      </div>

      <!-- Actions -->
      <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
        <button class="btn-primary" onclick="closeModal()" style="padding: 9px 26px; font-size: 0.88rem; justify-content: center; background: #64748b;">
          Tutup Jendela
        </button>
      </div>
    </div>
  `;

  showModal(successHtml);
}



