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
  window.open(`https://wa.me/628131306711?text=${text}`, '_blank');
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
      
      <a href="https://wa.me/628131306711?text=Halo%20SynergyMed%20Specialist,%20saya%20membutuhkan%20informasi%20mengenai%20solusi%20dan%20layanan" target="_blank" class="btn-primary" style="width: 100%; justify-content: center; font-size: 1rem; padding: 14px;">
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
// 10. JOB APPLICATION MODAL & WHATSAPP REDIRECTION FLOW
// ==========================================================================
let isSubmittingApplication = false;

function openJobApplicationModal(positionName) {
  isSubmittingApplication = false;

  const content = `
    <div style="text-align: left;">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
        <div style="width: 40px; height: 40px; background: #e0f2fe; color: var(--primary-blue); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0;">
          <i class="fa-solid fa-file-signature"></i>
        </div>
        <div>
          <h3 style="font-family: var(--font-heading); color: var(--primary-dark); font-size: 1.22rem; margin: 0; font-weight: 800;">Formulir Lamaran Kerja</h3>
          <p style="margin: 0; font-size: 0.88rem; font-weight: 700; color: var(--primary-blue);">${positionName}</p>
        </div>
      </div>
      <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 12px; line-height: 1.5;">
        Lengkapi formulir data diri Anda di bawah ini. Setelah menekan tombol kirim, Anda akan diarahkan ke WhatsApp resmi Rekrutmen PT Sinergi Medika Utama dengan draf pesan otomatis untuk melampirkan berkas CV Anda.
      </p>

      <!-- WhatsApp CV Notice -->
      <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 10px 12px; font-size: 0.82rem; color: #166534; margin-bottom: 14px; display: flex; align-items: flex-start; gap: 8px; line-height: 1.45;">
        <i class="fa-brands fa-whatsapp" style="font-size: 1.15rem; color: #16a34a; margin-top: 1px; flex-shrink: 0;"></i>
        <div>
          <strong>Pengiriman Berkas CV:</strong> Tidak perlu unggah file di website. Cukup isi data diri, lalu lampirkan file CV / resume Anda di chat WhatsApp yang akan otomatis terbuka.
        </div>
      </div>

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
            <input type="tel" id="app-phone" required placeholder="Contoh: 081234567890" 
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
          <input type="text" id="app-education" required placeholder="Contoh: S1 Keperawatan / D3 Desain Grafis / S1 Farmasi" 
            style="width: 100%; padding: 9px 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.88rem; outline: none;">
        </div>

        <div>
          <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #334155; margin-bottom: 4px;">
            Pengalaman Kerja Singkat <span style="color: #ef4444;">*</span>
          </label>
          <input type="text" id="app-experience" required placeholder="Contoh: 2 Tahun Sales Alkes / Fresh Graduate" 
            style="width: 100%; padding: 9px 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.88rem; outline: none;">
        </div>

        <button type="submit" id="app-submit-btn" class="btn-primary" style="width: 100%; justify-content: center; padding: 12px; font-size: 0.95rem; background: linear-gradient(135deg, #15803d 0%, #16a34a 100%); color: #ffffff; border: none; box-shadow: 0 4px 14px rgba(22, 163, 74, 0.25); margin-top: 4px;">
          <i class="fa-brands fa-whatsapp" style="font-size: 1.15rem;"></i> Kirim Lamaran &amp; Buka WhatsApp
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

  // Prevent duplicate submission & show loading UI
  isSubmittingApplication = true;
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Menyiapkan WhatsApp...`;
    submitBtn.style.opacity = '0.8';
    submitBtn.style.cursor = 'not-allowed';
  }

  const payload = {
    name: name,
    phone: phone,
    email: email,
    education: education,
    experience: experience,
    position: positionName
  };

  // Optional background sync to local server database if API endpoint is active
  let result = {
    success: true,
    submittedAt: new Date().toISOString(),
    status: 'Applied (WA CV Pending)',
    candidate: {
      name,
      phone,
      email,
      position: positionName
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
    if (response.ok) {
      const jsonRes = await response.json();
      if (jsonRes) {
        result = jsonRes;
      }
    }
  } catch (err) {
    console.log('Background API sync skipped, proceeding directly to WhatsApp:', err);
  }

  // Generate WhatsApp Message
  const waUrl = generateCareerWhatsAppUrl(payload);

  // Trigger WhatsApp in new tab
  try {
    window.open(waUrl, '_blank');
  } catch (e) {
    console.log('Pop-up open triggered:', e);
  }

  // Render modal success & candidate instruction view
  renderApplicationSuccessView(payload, waUrl);
}

function generateCareerWhatsAppUrl(payload) {
  const waNumber = "628131306711";
  
  const lines = [
    `Halo Tim Rekrutmen & HR PT Sinergi Medika Utama,`,
    ``,
    `Saya bermaksud mengajukan lamaran pekerjaan untuk posisi ${payload.position}.`,
    ``,
    `Berikut adalah ringkasan data diri saya:`,
    `• Nama Lengkap: ${payload.name}`,
    `• Nomor WhatsApp / Telp: ${payload.phone}`,
    `• Email Aktif: ${payload.email}`,
    `• Pendidikan Terakhir: ${payload.education}`,
    `• Pengalaman Kerja: ${payload.experience}`,
    ``,
    `Bersama pesan ini, saya melampirkan berkas dokumen CV / Resume saya untuk ditinjau lebih lanjut oleh Tim Rekrutmen.`,
    ``,
    `Besar harapan saya untuk berkesempatan mengikuti proses rekrutmen di PT Sinergi Medika Utama. Terima kasih.`
  ];

  const fullText = lines.join('\n');
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(fullText)}`;
}

function renderApplicationSuccessView(payload, waUrl) {
  const successHtml = `
    <div style="text-align: center; padding: 6px 4px;">
      <!-- Success Icon Badge -->
      <div style="width: 62px; height: 62px; background: #ecfdf5; color: #16a34a; border: 2px solid #bbf7d0; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 14px auto; box-shadow: 0 4px 14px rgba(22, 163, 74, 0.15);">
        <i class="fa-brands fa-whatsapp"></i>
      </div>

      <!-- Main Headline -->
      <h2 style="font-family: var(--font-heading); color: var(--primary-dark); font-size: 1.35rem; font-weight: 800; margin: 0 0 6px 0;">
        Data Diri Siap Dikirim ke WhatsApp!
      </h2>
      <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 16px; line-height: 1.5; max-width: 480px; margin-left: auto; margin-right: auto;">
        Jendela WhatsApp telah dibuka dengan draf data diri Anda. Silakan ikuti langkah di bawah ini:
      </p>

      <!-- Step Instruction Card -->
      <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 14px 16px; text-align: left; margin-bottom: 16px;">
        <div style="font-size: 0.88rem; font-weight: 700; color: #166534; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
          <i class="fa-solid fa-circle-info"></i> Petunjuk Pengiriman CV:
        </div>
        <ol style="margin: 0; padding-left: 20px; font-size: 0.84rem; color: #14532d; line-height: 1.6;">
          <li>Periksa draf pesan WhatsApp yang telah otomatis terisi data diri Anda.</li>
          <li><strong>Lampirkan (Attach) file dokumen CV / Resume Anda (PDF/DOCX)</strong> ke dalam chat WhatsApp tersebut.</li>
          <li>Kirim pesan dan dokumen CV Anda ke kontak HR Rekrutmen.</li>
        </ol>
      </div>

      <!-- Application Details Card -->
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px 16px; text-align: left; margin-bottom: 16px;">
        
        <!-- Header Status -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 10px; flex-wrap: wrap; gap: 6px;">
          <span style="font-size: 0.82rem; font-weight: 700; color: #334155;">Ringkasan Data Lamaran</span>
          <span style="font-size: 0.74rem; font-weight: 700; background: #dcfce7; color: #15803d; padding: 3px 10px; border-radius: 20px; display: inline-flex; align-items: center; gap: 5px;">
            <i class="fa-brands fa-whatsapp" style="font-size: 0.8rem;"></i> WhatsApp Ready
          </span>
        </div>

        <!-- Candidate Details Grid -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.82rem;">
          <div>
            <span style="color: #64748b; display: block; font-size: 0.74rem;">Posisi:</span>
            <strong style="color: #0f172a;">${payload.position}</strong>
          </div>
          <div>
            <span style="color: #64748b; display: block; font-size: 0.74rem;">Nama:</span>
            <strong style="color: #0f172a;">${payload.name}</strong>
          </div>
          <div>
            <span style="color: #64748b; display: block; font-size: 0.74rem;">WhatsApp / Telp:</span>
            <span style="color: #0f172a; font-weight: 600;">${payload.phone}</span>
          </div>
          <div>
            <span style="color: #64748b; display: block; font-size: 0.74rem;">Email:</span>
            <span style="color: #0f172a; font-weight: 600;">${payload.email}</span>
          </div>
          <div style="grid-column: 1 / -1; border-top: 1px dashed #e2e8f0; padding-top: 6px; margin-top: 2px;">
            <span style="color: #64748b; display: block; font-size: 0.74rem;">Pendidikan Terakhir:</span>
            <span style="color: #0f172a; font-weight: 600;">${payload.education}</span>
          </div>
          <div style="grid-column: 1 / -1;">
            <span style="color: #64748b; display: block; font-size: 0.74rem;">Pengalaman Kerja:</span>
            <span style="color: #0f172a; font-weight: 600;">${payload.experience}</span>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
        <a href="${waUrl}" target="_blank" class="btn-primary" style="padding: 10px 22px; font-size: 0.9rem; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg, #15803d 0%, #16a34a 100%); border: none; box-shadow: 0 4px 14px rgba(22, 163, 74, 0.25);">
          <i class="fa-brands fa-whatsapp" style="font-size: 1.1rem;"></i> Buka Ulang Chat WhatsApp
        </a>
        <button class="btn-secondary" onclick="closeModal()" style="padding: 10px 20px; font-size: 0.9rem;">
          Tutup Jendela
        </button>
      </div>
    </div>
  `;

  showModal(successHtml);
}



