/* ==========================================================================
   SYNERGYMED™ - Scalable Solutions Catalog & Interactive App Engine
   ========================================================================== */

// 1. EXTENSIBLE SOLUTIONS CATALOG DATA ACROSS 9 BUSINESS UNITS ("nanti banyak")
const productsData = [
  // --- 1. RADIATION ONCOLOGY ---
  {
    id: "rad-01",
    title: "SynergyRad Precision LINAC Accelerator",
    subtitle: "High-Energy Linear Accelerator & Radiotherapy System",
    category: "Radiation Oncology",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Sub-millimeter IMRT & VMAT Beam Delivery",
      "Real-time 4D Cone-Beam CT (CBCT) Image Guidance",
      "Integrated High-Definition Multileaf Collimator (HD-MLC)",
      "Automated Patient Positioning 6D Robotic Couch"
    ],
    brochure: "SynergyMed_Oncology_Imaging.pdf"
  },
  {
    id: "rad-02",
    title: "SynroBrachy High Dose Rate (HDR) System",
    subtitle: "Remote Afterloading Brachytherapy Suite",
    category: "Radiation Oncology",
    image: "assets/media__1785815004846.png",
    specs: [
      "30-Channel Iridium-192 (Ir-192) Remote Afterloader",
      "Real-time Ultrasound & CT Guided Applicator Planning",
      "Automatic Safety Retraction System",
      "DICOM-RT Integration with Treatment Planning Station"
    ],
    brochure: "SynergyMed_Oncology_Imaging.pdf"
  },

  // --- 2. ORTHO & NEURO ---
  {
    id: "ortho-01",
    title: "OrthoPower Surgical Battery Drill System",
    subtitle: "Heavy-Duty Modular Bone Power Tool",
    category: "Ortho & Neuro",
    image: "assets/synergymed_surgery_1785816546977.png",
    specs: [
      "Autoclavable Modular Handpiece (Drill, Reamer, Oscillating Saw)",
      "Li-ion Rapid Charge Battery Pack",
      "Variable speed control up to 1200 RPM",
      "Ergonomic Titanium Lightweight Body"
    ],
    brochure: "SynergyMed_Ortho_Endo_Enviro.pdf"
  },
  {
    id: "ortho-02",
    title: "SynroFix Titanium Trauma & Spine Locking Plate System",
    subtitle: "Anatomical Bone Fixation Implants & Spine Implants",
    category: "Ortho & Neuro",
    image: "assets/media__1785815004846.png",
    specs: [
      "Biocompatible Pure Titanium Grade 4",
      "Anatomically pre-shaped low-profile plates",
      "Combi-holes for locking and compression screws",
      "Neurosurgical Cranioplasty & Spinal Fixation Hardware"
    ],
    brochure: "SynergyMed_Ortho_Endo_Enviro.pdf"
  },

  // --- 3. MED SUPPLIES ---
  {
    id: "supp-01",
    title: "SynergyFlex IV Catheter & Safety Cannula",
    subtitle: "Sterile Disposable Vascular Access Supplies",
    category: "Med Supplies",
    image: "assets/media__1785814971701.png",
    specs: [
      "Passive Needle Safety Shield Mechanism",
      "FEP/PUR Radiopaque Catheter Material",
      "Size range: 14G to 24G",
      "CE & AKD Kemenkes Certified"
    ],
    brochure: "SynergyMed_Company_Profile_2026.pdf"
  },
  {
    id: "supp-02",
    title: "SynroDrape Surgical Pack & Sterile Gowns",
    subtitle: "Reinforced Infection Barrier Hospital Consumables",
    category: "Med Supplies",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "AAMI Level 4 Liquid & Viral Penetration Barrier",
      "Breathable non-woven SMS material",
      "Customized OR Surgical Pack Sets",
      "EO Gas Sterilized & Single-Use Sealed"
    ],
    brochure: "SynergyMed_Company_Profile_2026.pdf"
  },

  // --- 4. MEDICAL IMAGING ---
  {
    id: "img-01",
    title: "SynergyScan 1.5T Superconducting MRI",
    subtitle: "High-Field Magnetic Resonance Imaging System",
    category: "Medical Imaging",
    image: "assets/synergymed_mri_1785816534955.png",
    specs: [
      "1.5T Zero-Boil-Off Superconducting Magnet",
      "Real-time 4D Neuro & Cardiac Imaging Software",
      "70 cm Wide Bore for Patient Comfort",
      "Ultra-quiet Silent Scan acoustic reduction"
    ],
    brochure: "SynergyMed_Oncology_Imaging.pdf"
  },
  {
    id: "img-02",
    title: "SynroVision 128-Slice CT Scanner",
    subtitle: "Ultra-Low Dose Multi-Detector Computed Tomography",
    category: "Medical Imaging",
    image: "assets/media__1785815004846.png",
    specs: [
      "128 Slice per rotation with 0.33s gantry speed",
      "AI-Powered Cardiac Motion Artifact Reduction",
      "up to 75% Dose Reduction with ASiR-V technology",
      "High Heat Capacity X-Ray Tube (8.0 MHU)"
    ],
    brochure: "SynergyMed_Oncology_Imaging.pdf"
  },

  // --- 5. ENDOSURGERY ---
  {
    id: "endo-01",
    title: "EndoSight 4K UHD Laparoscopic Tower",
    subtitle: "Complete Minimally Invasive Surgical Suite",
    category: "Endosurgery",
    image: "assets/synergymed_surgery_1785816546977.png",
    specs: [
      "4K Ultra HD 3-CMOS Camera Control Unit",
      "350W LED Cold Light Source (50,000 hrs lifespan)",
      "High-Flow 45L/min CO2 Insufflator with Heating",
      "Medical Grade 32-inch 4K Monitor"
    ],
    brochure: "SynergyMed_Ortho_Endo_Enviro.pdf"
  },
  {
    id: "endo-02",
    title: "SynroCut Electrosurgical Unit (ESU 400W)",
    subtitle: "Advanced High-Frequency Diathermy Generator",
    category: "Endosurgery",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Monopolar Cut/Coag & Bipolar Vessel Sealing",
      "Tissue impedance auto-feedback system",
      "EndoCut mode for precise endoscopic polypectomy",
      "Dual Footswitch & Safety Return Electrode Monitor"
    ],
    brochure: "SynergyMed_Ortho_Endo_Enviro.pdf"
  },

  // --- 6. PAIN & REHAB ---
  {
    id: "rehab-01",
    title: "SynroShock Radial & Focused ESWT System",
    subtitle: "Extracorporeal Shockwave Therapy for Pain & Physio",
    category: "Pain & Rehab",
    image: "assets/media__1785814971701.png",
    specs: [
      "Pneumatic Shockwave & High-Energy Electromagnetic Focus",
      "Frequency 1 - 22 Hz & Pressure up to 5.0 Bar",
      "Preset Clinical Protocols for Musculoskeletal Pain",
      "Ergonomic Dual Handpieces"
    ],
    brochure: "SynergyMed_CriticalCare_Rehab.pdf"
  },
  {
    id: "rehab-02",
    title: "SynergyMotion Robotic Gait Rehab Trainer",
    subtitle: "Lower Limb Neuro-Rehabilitation System",
    category: "Pain & Rehab",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Active-Passive Weight Bearing Treadmill Exoskeleton",
      "Real-time Biofeedback & Virtual Reality Interactive Games",
      "Spinal Cord Injury & Stroke Rehabilitation Protocols",
      "Automated Safety Harness & Emergency Stop"
    ],
    brochure: "SynergyMed_CriticalCare_Rehab.pdf"
  },

  // --- 7. CRITICAL CARE ---
  {
    id: "cc-01",
    title: "SynroVent ICU Ventilator V900",
    subtitle: "Advanced Respiratory Support for Neonatal to Adult",
    category: "Critical Care",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Invasive & Non-Invasive Ventilation Modes (PRVC, APRV, High Flow O2)",
      "Integrated 15-inch Touchscreen Interface",
      "Built-in Turbine Drive (No central gas pipeline required)",
      "High Frequency Oscillation option for Neonates"
    ],
    brochure: "SynergyMed_CriticalCare_Rehab.pdf"
  },
  {
    id: "cc-02",
    title: "SynroMonitor M15 Patient Monitor",
    subtitle: "Modular Vital Signs Monitor for ICU / OR",
    category: "Critical Care",
    image: "assets/media__1785814971701.png",
    specs: [
      "15-inch HD Anti-Glare Touchscreen",
      "Multi-lead ECG, SpO2, NIBP, 4-Channel IBP, EtCO2",
      "Arrhythmia & ST Segment Analysis",
      "Central Monitoring Station connectivity up to 64 beds"
    ],
    brochure: "SynergyMed_CriticalCare_Rehab.pdf"
  },

  // --- 8. ULTRASOUND ---
  {
    id: "usg-01",
    title: "UltraVision Premium 4D USG Console",
    subtitle: "Diagnostic Ultrasound with AI Assist",
    category: "Ultrasound",
    image: "assets/media__1785814971701.png",
    specs: [
      "21.5-inch HD LED Display + 13.3-inch Touch Console",
      "Real-time HD Live 4D OB/GYN Imaging",
      "Shear Wave Elastography & Cardiac Strain Package",
      "Pure Wave Single Crystal Transducers"
    ],
    brochure: "SynergyMed_CriticalCare_Rehab.pdf"
  },
  {
    id: "usg-02",
    title: "SynroPocket Wireless USG Scanner",
    subtitle: "Handheld Point-of-Care Ultrasound Probe",
    category: "Ultrasound",
    image: "assets/synergymed_mri_1785816534955.png",
    specs: [
      "Dual Head Probe (Convex + Linear)",
      "Connects wirelessly to iOS / Android / Windows Tablets",
      "Ideal for Emergency, ICU, & Vascular Access",
      "3-hour Continuous Battery Scan Time"
    ],
    brochure: "SynergyMed_CriticalCare_Rehab.pdf"
  },

  // --- 9. ENVIRO ---
  {
    id: "env-01",
    title: "SafeShield Heavy-Duty Autoclave Sterilizer 500L",
    subtitle: "Hospital Central Sterile Supply (CSSD) System",
    category: "Enviro",
    image: "assets/media__1785815004846.png",
    specs: [
      "500 Liter Double-Door Pass-Through Chamber",
      "Microprocessor Touchscreen PLC Control with Printer",
      "Vacuum Drying Cycle & Biological Indicator Monitoring",
      "ASME / PED Pressure Vessel Certified"
    ],
    brochure: "SynergyMed_Ortho_Endo_Enviro.pdf"
  },
  {
    id: "env-02",
    title: "SynroClean Hospital Air Purification & Sterilization Unit",
    subtitle: "Cleanroom HEPA & UV-C Airborne Decontamination System",
    category: "Enviro",
    image: "assets/synergymed_surgery_1785816546977.png",
    specs: [
      "H14 Medical Grade HEPA Filter (99.995% efficiency)",
      "High-Intensity UV-C Germicidal Disinfection (254nm)",
      "Negative Pressure Isolation Room Convertible",
      "Quiet 42 dB Operation for ICU & Operating Rooms"
    ],
    brochure: "SynergyMed_Ortho_Endo_Enviro.pdf"
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

