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
    image: "assets/zap_x.jpg",
    specs: [
      "Self-shielded dual-gantry gyroscopic design — no bunker required",
      "Frameless stereotactic radiosurgery for intracranial & cervical spine",
      "Built-in kV imaging for real-time patient guidance",
      "6 MV compact LINAC — no radioactive isotopes",
      "Hundreds of non-coplanar beam angles for precise targeting"
    ],
    brochure: "https://drive.google.com/file/d/1_K5iGL9FJk3EWWZ9SeIqwbxiCLsWyLLL/view?usp=sharing"
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
    brochure: "https://drive.google.com/file/d/1O9Qf0zHiuI0y-yRLbasjNNtOUjGYw7be/view"
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
    brochure: "https://drive.google.com/file/d/1z0iohlUczBkhPji1G8LJNiF6AljeRXGH/view"
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
    brochure: null
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
    brochure: "https://drive.google.com/file/d/1NwSiMwvf5B4eQHOhZDWxtvSwhxvFtU4_/view"
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
    brochure: "https://drive.google.com/file/d/1a4ufz21eo7bHQTwP-ybFKG5F6TpMYDBT/view"
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
    brochure: "https://drive.google.com/file/d/1J9lz5VOR874ug7bJfcrCr7qHgO-2ZofQ/view"
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
    brochure: "https://drive.google.com/file/d/1Zu3S82aWT_Ep7mbj-N71nlszAoM7kKiz/view"
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
    brochure: null
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
    brochure: "https://drive.google.com/file/d/1udUpetK2NMSUvWZ1VOUuBrh0MCLfk9Ib/view"
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
    brochure: "https://drive.google.com/file/d/111BHYCrJw7lzWi-3nfkonsL5fFeo4CTw/view"
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
    brochure: "https://drive.google.com/file/d/1Vl2WQ8eo6aEk4sQ6urYrMb6oWMMC2JPt/view"
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
    brochure: "https://drive.google.com/file/d/1MeHZc-lPvxL6tCdEXjl4po0mYwVT153V/view"
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
    brochure: "https://drive.google.com/file/d/1spxUFZyjodylVZgF6j9Ym5qq-QD8j1d6/view"
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
    brochure: "https://drive.google.com/file/d/1tqHl9P974tk0ivwHhw2BOXoVAHcfzbQ1/view"
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
    brochure: "https://drive.google.com/file/d/1p7ka7Ugu6jvbns6XlPQXFgsVFd7MGtZP/view"
  },

  // --- MEDICAL IMAGING: MRI (ESAOTE OPEN MRI SERIES) ---
  {
    id: "img-mri-gscan",
    title: "G-Scan Open",
    subtitle: "Weight-Bearing Tilting Open MRI System by Esaote",
    category: "Medical Imaging",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/MRI-Philips.JPG",
    specs: [
      "Innovative tilting design from horizontal to vertical (0° to 90°)",
      "True weight-bearing spine & joint dynamic musculoskeletal imaging",
      "Open claustrophobia-free gantry design for high patient comfort",
      "High-resolution dedicated MSK coils and real-time positioning",
      "Low power consumption & minimal site preparation requirements"
    ],
    brochure: "https://drive.google.com/file/d/1mMw4XufnjHY-dtWiLzPLo4AVXvSezucD/view"
  },
  {
    id: "img-mri-oscan",
    title: "O-Scan Smart",
    subtitle: "Dedicated Extremity & Joint MRI System by Esaote",
    category: "Medical Imaging",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/MRI-Philips.JPG",
    specs: [
      "Specialized MRI for knee, calf, ankle, foot, hand, wrist & forearm",
      "Ultra-compact footprint — installs in a 9 m² standard room",
      "Zero claustrophobia — only target limb is positioned in magnet",
      "e-Spresso user interface with automated scanning sequences",
      "Eco-friendly low operating costs with standard 220V wall plug"
    ],
    brochure: "https://drive.google.com/file/d/1TPM7tF94fBELvdjRcWm91lkz93xgaTbF/view"
  },
  {
    id: "img-mri-sscan",
    title: "S-Scan Open",
    subtitle: "Open Musculoskeletal & Spine MRI System by Esaote",
    category: "Medical Imaging",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/MRI-Philips.JPG",
    specs: [
      "Complete musculoskeletal & full spine diagnostic coverage",
      "Wide asymmetric open design for easy patient access",
      "Real-time scout positioning for fast patient centering",
      "High diagnostic image quality with permanent magnet technology",
      "No cryogens or helium refills required — low maintenance"
    ],
    brochure: "https://drive.google.com/file/d/1iKXbrVGMStntOaOvIly1eYWPRWcnCRvv/view"
  },
  {
    id: "img-mri-magnifico",
    title: "Magnifico Open",
    subtitle: "Total Body Open MRI System by Esaote",
    category: "Medical Imaging",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/MRI-Philips.JPG",
    specs: [
      "State-of-the-art open MRI for whole body & neuro-imaging",
      "Permanent magnet design with true open gantry architecture",
      "Speed Up and Evolution AI image reconstruction algorithms",
      "Ergonomic rotating patient table with laser centering",
      "Cost-effective installation with compact RF shielding cabin"
    ],
    brochure: "https://drive.google.com/file/d/1hH5Qz8WsXeJLMfVwWD2sA6kTLR3oQAto/view"
  },
  {
    id: "img-mri-02",
    title: "Synergy Imaging MRI",
    subtitle: "MagniVue 1.5T Superconductive MRI System",
    category: "Medical Imaging",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/MRI-Philips.JPG",
    specs: [
      "1.5T high-field superconducting magnet with helium-free technology",
      "Wide 70 cm bore for premium patient comfort",
      "Advanced neuro, cardiac, orthopedic & whole-body imaging",
      "Silent scan acoustic noise reduction system",
      "AI-powered clinical workflow and high-speed image reconstruction"
    ],
    brochure: null
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
    brochure: "https://drive.google.com/file/d/1XG8xXy_zNsQceblNp3rDd2nqunrMns7Y/view"
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
    brochure: "https://drive.google.com/file/d/1cIADhnT2n4PHvkODZXv-IzhqyWf2Inaq/view"
  },

  // =====================================================================
  // --- CRITICAL CARE ---
  // =====================================================================

  // --- CRITICAL CARE: ANESTHESIA MACHINE ---
  {
    id: "cc-anes-01",
    title: "AccuBreathe AN20",
    subtitle: "Anesthesia Machine — Entry Level",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Maquet_Flow-i_anesthesia_machine.jpg",
    specs: [
      "Compact anesthesia workstation for general anesthesia",
      "Electronic gas mixer with flow control",
      "Integrated vaporizer mount for volatile agents",
      "7-inch color display with real-time waveforms",
      "Built-in ventilator with volume & pressure modes"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },
  {
    id: "cc-anes-02",
    title: "AccuBreathe AN30",
    subtitle: "Anesthesia Machine — Mid-Range",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Maquet_Flow-i_anesthesia_machine.jpg",
    specs: [
      "Advanced anesthesia delivery system with dual vaporizers",
      "10.4-inch touchscreen with intuitive UI",
      "Electronic PEEP & fresh gas flow compensation",
      "Low-flow anesthesia capability for agent conservation",
      "Integrated patient monitoring module (SpO2, ECG, EtCO2)"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },
  {
    id: "cc-anes-03",
    title: "AccuBreathe AN50",
    subtitle: "Anesthesia Machine — Premium Workstation",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Maquet_Flow-i_anesthesia_machine.jpg",
    specs: [
      "High-end anesthesia workstation with full electronic gas management",
      "15-inch HD touchscreen with multi-waveform display",
      "Triple vaporizer configuration support",
      "Advanced ventilation modes: VCV, PCV, PSV, SIMV",
      "Comprehensive monitoring: hemodynamics, gas analysis, spirometry"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },

  // --- CRITICAL CARE: CENTRAL MONITOR ---
  {
    id: "cc-cmon-01",
    title: "AccuSign CMS 10",
    subtitle: "Central Monitoring Station — 32 Beds",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/97/ICU_Monitor.jpg",
    specs: [
      "Centralized patient surveillance for up to 32 beds",
      "32-inch HD display with multi-patient grid view",
      "Real-time waveform & numeric data streaming",
      "Full disclosure recording with trend analysis",
      "Network integration with AccuSign bedside monitors"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },
  {
    id: "cc-cmon-02",
    title: "AccuSign CMS 30 & 40",
    subtitle: "Central Monitoring Station — 64 Beds",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/97/ICU_Monitor.jpg",
    specs: [
      "Enterprise-grade central monitoring for up to 64 beds",
      "Dual 32-inch display configuration",
      "Alarm management with priority escalation",
      "HL7/DICOM integration for HIS/EMR connectivity",
      "Long-term data storage with full event review"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },

  // --- CRITICAL CARE: CARDIOTOCOGRAPHY (CTG) ---
  {
    id: "cc-ctg-01",
    title: "AccuTop 10",
    subtitle: "Fetal Monitor — Single Fetal Heart Rate",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Cardiotocography_in_Pijnacker%2C_2019.jpg",
    specs: [
      "Continuous fetal heart rate (FHR) monitoring",
      "Ultrasound Doppler transducer — 1 MHz",
      "TOCO transducer for uterine contraction tracking",
      "7-inch LCD display with real-time CTG trace",
      "Thermal printer for paper CTG recording"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },
  {
    id: "cc-ctg-02",
    title: "AccuTop 20",
    subtitle: "Fetal Monitor — Twins Monitoring",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Cardiotocography_in_Pijnacker%2C_2019.jpg",
    specs: [
      "Dual-channel FHR monitoring for twin pregnancies",
      "Dual ultrasound Doppler transducers",
      "Integrated TOCO & IUP measurement",
      "10.4-inch color touchscreen display",
      "Wireless connectivity for central station monitoring"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },

  // --- CRITICAL CARE: DEFIBRILLATOR ---
  {
    id: "cc-defib-01",
    title: "AccuShock 10",
    subtitle: "Defibrillator — Portable AED",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Defibrillator_Monitor.jpg",
    specs: [
      "Automated External Defibrillator (AED) with manual override",
      "Biphasic waveform for effective defibrillation",
      "7-inch color display with ECG waveform",
      "Voice-guided CPR coaching",
      "Lightweight portable design — under 4 kg"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },
  {
    id: "cc-defib-02",
    title: "AccuShock 60",
    subtitle: "Defibrillator/Monitor — Professional Grade",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Defibrillator_Monitor.jpg",
    specs: [
      "Manual defibrillator with AED mode & synchronized cardioversion",
      "12-lead ECG acquisition & interpretation",
      "Pacing capability (transcutaneous external pacing)",
      "10.4-inch high-resolution display with multi-parameter monitoring",
      "SpO2, NIBP, EtCO2 integrated monitoring modules"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },

  // --- CRITICAL CARE: ELECTROCARDIOGRAPHY (ECG) ---
  {
    id: "cc-ecg-01",
    title: "AccuRead 10",
    subtitle: "12-Channel ECG — Portable Digital",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/12_lead_generated_ECG.jpg",
    specs: [
      "12-channel digital ECG with simultaneous acquisition",
      "4.3-inch touchscreen display",
      "Internal storage for 1000+ ECG records",
      "Auto-interpretation with measurement report",
      "USB & Wi-Fi data transfer"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },
  {
    id: "cc-ecg-02",
    title: "AccuRead 15",
    subtitle: "12-Channel ECG — Enhanced Portable",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/12_lead_generated_ECG.jpg",
    specs: [
      "12-channel ECG with 7-inch color LCD",
      "Enhanced noise filtering & baseline correction",
      "Built-in lithium battery for long field use",
      "Configurable report formats with patient database",
      "Bluetooth connectivity to PC workstation"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },
  {
    id: "cc-ecg-03",
    title: "AccuRead 20",
    subtitle: "12-Channel ECG — PC-Based Workstation",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/12_lead_generated_ECG.jpg",
    specs: [
      "PC-based 12-channel ECG workstation system",
      "Wireless Bluetooth ECG acquisition module",
      "Full DICOM & HL7 integration for HIS/EMR",
      "Advanced interpretation algorithms with Glasgow scoring",
      "Unlimited record storage with cloud backup option"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },
  {
    id: "cc-ecg-04",
    title: "AccuRead 25",
    subtitle: "12-Channel ECG — Touchscreen Advanced",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/12_lead_generated_ECG.jpg",
    specs: [
      "12-channel ECG with 10.1-inch touchscreen",
      "Real-time rhythm analysis & arrhythmia detection",
      "High-resolution thermal printer integrated",
      "Stress test (ergometry) compatible",
      "Barcode scanner for patient ID integration"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },
  {
    id: "cc-ecg-05",
    title: "AccuRead 30",
    subtitle: "12-Channel ECG — Premium Digital",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/12_lead_generated_ECG.jpg",
    specs: [
      "Premium 12-channel digital ECG system",
      "12.1-inch HD touchscreen with multi-lead preview",
      "AI-assisted ECG interpretation engine",
      "Simultaneous 12-lead display & recording",
      "Full network connectivity: Wi-Fi, LAN, USB, Bluetooth"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },

  // --- CRITICAL CARE: INCUBATOR ---
  {
    id: "cc-incub-01",
    title: "Hippo I50",
    subtitle: "Infant Incubator — Neonatal Intensive Care",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Premature_infant_incubator.jpg",
    specs: [
      "Double-wall canopy for optimal thermal insulation",
      "Servo-controlled skin & air temperature modes",
      "Integrated humidity & oxygen concentration control",
      "Tiltable bassinet for Trendelenburg positioning",
      "Access ports with iris diaphragms for minimal heat loss"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },

  // --- CRITICAL CARE: INFANT WARMER ---
  {
    id: "cc-warm-01",
    title: "Hippo W30",
    subtitle: "Infant Radiant Warmer — Open Care System",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Premature_infant_incubator.jpg",
    specs: [
      "Overhead radiant heater with servo skin temperature control",
      "Open-access design for immediate neonatal care",
      "Integrated APGAR timer & resuscitation timer",
      "Phototherapy-ready with optional LED blue light unit",
      "X-ray cassette tray under bassinet for imaging"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },

  // --- CRITICAL CARE: SYRINGE & INFUSION PUMP ---
  {
    id: "cc-pump-01",
    title: "AccuDrip 10",
    subtitle: "Volumetric Infusion Pump",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Infusion_Pump.jpg",
    specs: [
      "Volumetric infusion pump for standard IV sets",
      "Flow rate: 0.1–1200 mL/h with high accuracy",
      "Ultrasonic air-in-line bubble detection",
      "Occlusion pressure monitoring with adjustable alarm levels",
      "Color LCD display with drug library"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },
  {
    id: "cc-pump-02",
    title: "AccuDrip 15",
    subtitle: "Volumetric Infusion Pump — Enhanced",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Infusion_Pump.jpg",
    specs: [
      "Enhanced volumetric infusion pump with dose calculation",
      "Dual CPU safety architecture",
      "Anti-bolus protection system",
      "Wi-Fi connectivity for pump fleet management",
      "Compatible with all major IV set brands"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },
  {
    id: "cc-pump-03",
    title: "AccuDrip 20",
    subtitle: "Syringe Pump — Precision Delivery",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Infusion_Pump.jpg",
    specs: [
      "Motorized syringe pump for precise micro-infusion",
      "Flow rate: 0.01–1500 mL/h",
      "Supports 5 mL to 60 mL syringe sizes",
      "Dual CPU with automatic/manual bolus function",
      "Stackable design for multi-channel configuration"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },
  {
    id: "cc-pump-04",
    title: "AccuDrip 25",
    subtitle: "Syringe Pump — Advanced",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Infusion_Pump.jpg",
    specs: [
      "Advanced syringe pump with TCI (Target Controlled Infusion)",
      "Integrated drug library with DERS (Dose Error Reduction System)",
      "Full-color touchscreen interface",
      "Nurse call & network alarm integration",
      "Battery backup for uninterrupted delivery"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },

  // --- CRITICAL CARE: OPERATING LAMP ---
  {
    id: "cc-lamp-01",
    title: "Solar 10",
    subtitle: "LED Surgical Operating Lamp — Single Dome",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Op-Leuchte.jpg",
    specs: [
      "Single-dome LED surgical light",
      "Shadow-free illumination up to 130,000 lux",
      "Color temperature adjustable: 3500–5000 K",
      "CRI ≥ 95 for accurate tissue color rendering",
      "Sterilizable central handle for positioning"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },
  {
    id: "cc-lamp-02",
    title: "Solar 20",
    subtitle: "LED Surgical Operating Lamp — Dual Dome",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Op-Leuchte.jpg",
    specs: [
      "Dual-dome LED surgical lamp system",
      "Main dome: 160,000 lux / satellite dome: 120,000 lux",
      "Independent dimming & focus for each dome",
      "Endoscopic mode with reduced light intensity",
      "HD camera integration option for surgical recording"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },
  {
    id: "cc-lamp-03",
    title: "Solar 30",
    subtitle: "LED Surgical Operating Lamp — Advanced",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Op-Leuchte.jpg",
    specs: [
      "Advanced LED operating lamp with ambient lighting system",
      "180,000 lux center illumination intensity",
      "Ultra-low heat emission for surgeon comfort",
      "Multiple light field sizes: 15–30 cm diameter",
      "Integrated Full HD camera with live video output"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },
  {
    id: "cc-lamp-04",
    title: "Solar 40",
    subtitle: "LED Surgical Operating Lamp — Premium",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Op-Leuchte.jpg",
    specs: [
      "Premium dual-dome LED surgical lighting system",
      "Main: 200,000 lux / Satellite: 160,000 lux",
      "ShadowControl technology eliminates deep cavity shadows",
      "Color rendering index Ra ≥ 97 — medical grade",
      "4K camera integration with OR video management"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },

  // --- CRITICAL CARE: OPERATING TABLE ---
  {
    id: "cc-table-01",
    title: "Staflex 10",
    subtitle: "Operating Table — Electro-Hydraulic",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Operationssaal_Charit%C3%A9.jpg",
    specs: [
      "Electro-hydraulic multi-purpose surgical table",
      "Height, Trendelenburg, lateral tilt, back & leg adjustment",
      "Radiolucent tabletop for C-arm & X-ray imaging",
      "Weight capacity: 250 kg",
      "Stainless steel construction — easy to clean & sterilize"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },
  {
    id: "cc-table-02",
    title: "Staflex 10 Premium",
    subtitle: "Operating Table — Premium Electro-Hydraulic",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Operationssaal_Charit%C3%A9.jpg",
    specs: [
      "Premium electro-hydraulic surgical table with memory positioning",
      "Motorized all-section adjustment with programmable presets",
      "Carbon fiber radiolucent tabletop",
      "Integrated battery backup for emergency positioning",
      "Weight capacity: 300 kg — bariatric compatible"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },
  {
    id: "cc-table-03",
    title: "Staflex 10 Platinum",
    subtitle: "Operating Table — Platinum Series",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Operationssaal_Charit%C3%A9.jpg",
    specs: [
      "Top-tier electro-hydraulic surgical table — Platinum edition",
      "Fully motorized with joystick & wireless remote control",
      "Sliding tabletop for cardiac, neuro & orthopedic surgery",
      "Integrated heating pad & patient transfer system",
      "Weight capacity: 360 kg — heavy-duty bariatric"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },

  // --- CRITICAL CARE: PATIENT MONITOR ---
  {
    id: "cc-pmon-01",
    title: "AccuSign 5",
    subtitle: "Patient Monitor — Compact Bedside",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/97/ICU_Monitor.jpg",
    specs: [
      "Compact 7-inch bedside patient monitor",
      "ECG (3/5-lead), SpO2, NIBP, Pulse Rate",
      "Real-time waveform display with trend recording",
      "Audible & visual alarm system with configurable limits",
      "Lightweight & portable — ideal for transport"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },
  {
    id: "cc-pmon-02",
    title: "AccuSign 10",
    subtitle: "Patient Monitor — Standard",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/97/ICU_Monitor.jpg",
    specs: [
      "10.4-inch color patient monitor",
      "ECG, SpO2, NIBP, Temperature, Respiration",
      "Optional EtCO2 & IBP modules",
      "96-hour trend data storage with alarm event log",
      "Central station networking via LAN/Wi-Fi"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },
  {
    id: "cc-pmon-03",
    title: "AccuSign 20",
    subtitle: "Patient Monitor — Multi-Parameter",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/97/ICU_Monitor.jpg",
    specs: [
      "12.1-inch touchscreen multi-parameter monitor",
      "ECG (12-lead), SpO2, NIBP, IBP, Temp, EtCO2, Resp",
      "Arrhythmia analysis & ST-segment monitoring",
      "Built-in recorder for waveform printout",
      "Drug calculation & hemodynamic computation"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },
  {
    id: "cc-pmon-04",
    title: "AccuSign 30",
    subtitle: "Patient Monitor — Advanced ICU",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/97/ICU_Monitor.jpg",
    specs: [
      "15-inch HD touchscreen ICU-grade patient monitor",
      "Full multi-parameter: ECG, SpO2, NIBP, IBP x2, Temp x2, EtCO2",
      "Cardiac output & continuous hemodynamic monitoring",
      "Dual-screen display with configurable layouts",
      "HL7 integration for EMR/HIS data exchange"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },
  {
    id: "cc-pmon-05",
    title: "AccuSign 40",
    subtitle: "Patient Monitor — Premium Modular",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/97/ICU_Monitor.jpg",
    specs: [
      "17-inch HD modular patient monitoring platform",
      "Expandable module slots for BIS, NMT, Cardiac Output, Gas Analysis",
      "Up to 8 waveforms simultaneous display",
      "Enterprise networking with central station integration",
      "Touchscreen + rotary knob for intuitive operation"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },

  // --- CRITICAL CARE: PENDANT ---
  {
    id: "cc-pend-01",
    title: "Stellar 10",
    subtitle: "Medical Pendant — Single Arm",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Operationssaal_Charit%C3%A9.jpg",
    specs: [
      "Single-arm ceiling-mounted medical pendant",
      "Gas outlets: O2, Air, Vacuum, N2O",
      "Electrical outlets: 6x power sockets + data ports",
      "360° horizontal rotation with pneumatic brake",
      "Load capacity: 150 kg for equipment mounting"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },
  {
    id: "cc-pend-02",
    title: "Stellar 20",
    subtitle: "Medical Pendant — Dual Arm",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Operationssaal_Charit%C3%A9.jpg",
    specs: [
      "Dual-arm ceiling pendant for OR & ICU environments",
      "Wet arm (gas/electrical) + dry arm (monitor/equipment)",
      "Motorized height adjustment for ergonomic positioning",
      "12x power sockets, 8x gas outlets, network connections",
      "Load capacity: 250 kg total"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },
  {
    id: "cc-pend-03",
    title: "Stellar 30",
    subtitle: "Medical Pendant — Bridge System",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Operationssaal_Charit%C3%A9.jpg",
    specs: [
      "ICU bridge pendant system with sliding shelves",
      "Configurable wet/dry separation on bridge rail",
      "Multiple infusion pump docking positions",
      "Integrated LED ambient lighting",
      "Modular design for customized ICU bed layout"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },

  // --- CRITICAL CARE: PHOTOTHERAPY ---
  {
    id: "cc-photo-01",
    title: "L30 Infant Phototherapy",
    subtitle: "LED Phototherapy Unit — Neonatal Jaundice Treatment",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Premature_infant_incubator.jpg",
    specs: [
      "High-intensity blue LED phototherapy (430–490 nm)",
      "Irradiance ≥ 40 µW/cm²/nm at treatment surface",
      "Fanless silent operation for NICU environment",
      "Adjustable stand — fits over incubator or bassinet",
      "LED lifespan > 50,000 hours — low maintenance"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },

  // --- CRITICAL CARE: PUMP WORK STATION ---
  {
    id: "cc-pws-01",
    title: "AccuWS Pump Work Station",
    subtitle: "Infusion Pump Docking Station — Multi-Channel",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Infusion_Pump.jpg",
    specs: [
      "Multi-channel docking station for AccuDrip pump series",
      "Supports up to 8 syringe/infusion pumps simultaneously",
      "Centralized power supply — single mains connection",
      "Network hub for pump fleet data management",
      "IV pole mount with adjustable height & tilt"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },

  // --- CRITICAL CARE: VENTILATOR ---
  {
    id: "cc-vent-01",
    title: "AccuBreathe VI30",
    subtitle: "ICU Ventilator — Standard",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Maquet_Flow-i_anesthesia_machine.jpg",
    specs: [
      "ICU mechanical ventilator for adult & pediatric patients",
      "Ventilation modes: VCV, PCV, SIMV, PSV, CPAP, BiPAP",
      "12.1-inch touchscreen with real-time waveform display",
      "Integrated high-performance turbine — no external air supply needed",
      "FiO2 range: 21%–100% with precision O2 blender"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },
  {
    id: "cc-vent-02",
    title: "AccuBreathe VI40",
    subtitle: "ICU Ventilator — Advanced with NIV",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Maquet_Flow-i_anesthesia_machine.jpg",
    specs: [
      "Advanced ICU ventilator for adult, pediatric & neonatal patients",
      "Full invasive & non-invasive ventilation (NIV) capability",
      "15-inch HD touchscreen with pressure-volume loops & trends",
      "Lung protection tools: auto-PEEP, P0.1, NIF measurement",
      "Integrated nebulizer & heated humidifier interface"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },

  // --- CRITICAL CARE: VITAL SIGN ---
  {
    id: "cc-vital-01",
    title: "Accu Vital 10",
    subtitle: "Vital Sign Monitor — Portable Spot Check",
    category: "Critical Care",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/97/ICU_Monitor.jpg",
    specs: [
      "Portable vital sign spot-check monitor",
      "NIBP, SpO2, Pulse Rate, Temperature measurement",
      "5-inch color LCD display with intuitive interface",
      "Rechargeable lithium battery for mobile ward rounds",
      "Data transfer via Wi-Fi to central EMR system"
    ],
    brochure: "SynergyMed_CriticalCare.pdf"
  },

  // =====================================================================
  // --- ULTRASOUND ---
  // =====================================================================

  // --- ULTRASOUND: PORTABLE ---
  {
    id: "usg-port-01",
    title: "Hres 10",
    subtitle: "Portable Diagnostic Ultrasound System",
    category: "Ultrasound",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Pocus_%28ultrasound%29_semi-portable.jpg",
    specs: [
      "High-resolution B/W & Color Doppler portable ultrasound unit",
      "Compact laptop-style design with 12.1-inch high-contrast LCD display",
      "Advanced H-res™ image enhancement & speckle noise reduction",
      "Multi-frequency convex, linear, and micro-convex transducer support",
      "Built-in rechargeable battery & dual probe ports for point-of-care mobility"
    ],
    brochure: "SynergyMed_Ultrasound.pdf"
  },
  {
    id: "usg-port-02",
    title: "Hres 15",
    subtitle: "Enhanced Portable Color Doppler Ultrasound",
    category: "Ultrasound",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/USMC-100608-M-0493G-043.jpg",
    specs: [
      "All-digital beamformer with enhanced Color & Power Doppler sensitivity",
      "15-inch anti-glare tiltable high-definition medical display",
      "Tissue Harmonic Imaging (THI) & Spatial Compound Imaging (SCI)",
      "Fast boot-up time with direct DICOM 3.0 network PACS transfer",
      "Dedicated clinical presets for Abdominal, OB/GYN, MSK, and Small Parts"
    ],
    brochure: "SynergyMed_Ultrasound.pdf"
  },
  {
    id: "usg-port-03",
    title: "Hres 20",
    subtitle: "Premium Portable Digital Ultrasound System",
    category: "Ultrasound",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Portable_Ultrasound_Team%2C_Belize.jpg",
    specs: [
      "Flagship portable ultrasound platform with AI-assisted auto-measurements",
      "Multi-beam parallel processing for ultra-high frame rate imaging",
      "Continuous Wave (CW) Doppler & Tissue Doppler Imaging (TDI) integrated",
      "Customizable intuitive touch workflow & multiple transducer connectivity",
      "Ruggedized lightweight chassis designed for emergency and bedside ultrasound"
    ],
    brochure: "SynergyMed_Ultrasound.pdf"
  },

  // --- ULTRASOUND: CONSOLE ---
  {
    id: "usg-cons-01",
    title: "Hres 18",
    subtitle: "Cart-Based Console Color Doppler Ultrasound Workstation",
    category: "Ultrasound",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Sonoscape_Ultrasound_Machine.jpg",
    specs: [
      "Ergonomic cart-based console with articulated multi-axis monitor arm",
      "21.5-inch Full HD medical display with 10.4-inch command touchscreen",
      "4 active transducer ports with rapid electronic probe switching",
      "Broadband multi-frequency probes for deep abdominal & vascular diagnostics",
      "Full DICOM structured reporting & seamless HIS/PACS workflow integration"
    ],
    brochure: "SynergyMed_Ultrasound.pdf"
  },
  {
    id: "usg-cons-02",
    title: "Hres 20 Console",
    subtitle: "Premium Multi-Disciplinary Console Ultrasound System",
    category: "Ultrasound",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/A_modern_medical_ultrasound_scanner.jpg",
    specs: [
      "Top-tier cart-based ultrasound workstation with advanced 3D/4D volumetric imaging",
      "23.8-inch high-resolution IPS display with floating motorized control panel",
      "Real-time shear wave elastography and contrast-enhanced ultrasound (CEUS)",
      "AI-powered anatomical boundary recognition and cardiac auto-EF quantification",
      "Comprehensive cardiology, radiology, OB/GYN, and shared-service clinical packages"
    ],
    brochure: "SynergyMed_Ultrasound.pdf"
  },

  // --- ULTRASOUND: HANDHELD ---
  {
    id: "usg-hand-01",
    title: "Kosmos by EchoNous",
    subtitle: "AI-Powered Handheld Point-of-Care Ultrasound (POCUS)",
    category: "Ultrasound",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Pocus_%28ultrasound%29_semi-portable.jpg",
    specs: [
      "Ultra-portable AI-guided handheld ultrasound with cart-grade diagnostic image quality",
      "Triple-probe technology (Phased, Curved, Linear) supporting CW, PW, TDI & Color Doppler",
      "Deep learning AI for real-time cardiac guidance, auto-EF, stroke volume & anatomical labeling",
      "IP67 waterproof & ruggedized drop-tested probe for bedside, ICU, and emergency triage",
      "Seamless iOS, Android & Kosmos Bridge tablet compatibility with cloud PACS synchronization"
    ],
    brochure: "SynergyMed_Ultrasound.pdf"
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
  const btnIcon = document.querySelector('.mobile-menu-btn i');
  if (mainNav) {
    mainNav.classList.remove('mobile-open');
  }
  if (btnIcon) {
    btnIcon.className = 'fa-solid fa-bars';
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
          <button class="btn-card-details" onclick="openBrochureLink(${item.brochure ? `'${item.brochure}'` : 'null'}, '${item.title}')" title="${item.brochure ? 'View Brochure' : 'Hubungi Sales untuk Brosur / Spek'}">
            <i class="fa-solid ${item.brochure ? 'fa-eye' : 'fa-headset'}"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function openBrochureLink(url, title) {
  if (url && url !== 'null' && url !== 'undefined') {
    window.open(url, '_blank');
  } else {
    inquireProduct(`${title} (Permintaan Brosur & Spesifikasi Resmi)`);
  }
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

// Close modal when clicking backdrop
document.addEventListener('click', (e) => {
  const modal = document.getElementById('generic-modal');
  if (modal && modal.classList.contains('active') && e.target === modal) {
    closeModal();
  }

  // Close mobile nav when clicking outside header
  const mainNav = document.querySelector('.main-nav');
  const menuBtn = document.querySelector('.mobile-menu-btn');
  if (mainNav && mainNav.classList.contains('mobile-open') && !mainNav.contains(e.target) && menuBtn && !menuBtn.contains(e.target)) {
    mainNav.classList.remove('mobile-open');
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileNav() {
  const nav = document.querySelector('.main-nav');
  const btnIcon = document.querySelector('.mobile-menu-btn i');
  if (nav) {
    nav.classList.toggle('mobile-open');
    if (btnIcon) {
      if (nav.classList.contains('mobile-open')) {
        btnIcon.className = 'fa-solid fa-xmark';
      } else {
        btnIcon.className = 'fa-solid fa-bars';
      }
    }
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

        <div class="modal-form-row-2col" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
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



