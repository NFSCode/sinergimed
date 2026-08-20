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

  // --- RADIATION ONCOLOGY: ADVANCED PROTON & RADIOTHERAPY SYSTEMS ---
  {
    id: "ro-mev-01",
    title: "MEVION S250i",
    subtitle: "Proton Therapy System with HYPERSCAN™ Pencil Beam Scanning",
    category: "Radiation Oncology",
    image: "assets/zap_x.jpg",
    specs: [
      "Sistem terapi proton tercanggih dengan teknologi HYPERSCAN™ Pencil Beam Scanning (PBS)",
      "Adaptive Aperture™ mikro-kolimasi layer-by-layer untuk penajaman tepi berkas proton hingga 3 mm",
      "Akselerator synchrocyclotron superkonduktor 250 MeV berukuran ringkas (compact footprint)",
      "Visualisasi 3D IGRT & robotik 6-DOF couch fiksasi posisi pasien berpresisi sub-milimeter",
      "Ideal untuk radioterapi pediatrik, tumor basis kranii, SSP, kepala-leher, dan kanker paru/prostat"
    ],
    brochure: null
  },
  {
    id: "ro-mev-02",
    title: "MEVION S250-FIT",
    subtitle: "Full-Featured Compact Proton Therapy System (Vault-Fit)",
    category: "Radiation Oncology",
    image: "assets/zap_x.jpg",
    specs: [
      "Sistem terapi proton pertama di dunia yang dapat dipasang langsung di dalam bunker LINAC konvensional",
      "Teknologi FLASH-ready untuk pengiriman dosis ultra-tinggi dalam hitungan milidetik",
      "Mengurangi biaya konstruksi bunker dan waktu instalasi klinis secara drastis",
      "Dilengkapi sistem pencitraan CT diagnostik in-room dan gantry robotik adaptif",
      "Memperluas akses terapi proton presisi tinggi untuk pusat onkologi dan rumah sakit modern"
    ],
    brochure: null
  },
  {
    id: "ro-linac-01",
    title: "LINAC",
    subtitle: "High-Precision Multi-Energy Radiotherapy Linear Accelerator System",
    category: "Radiation Oncology",
    image: "assets/zap_x.jpg",
    specs: [
      "Akselerator linier medis multi-energi foton dan elektron untuk radioterapi modern",
      "Mendukung teknik penyinaran 3D-CRT, IMRT, VMAT / RapidArc, SRS, dan SBRT",
      "Multi-Leaf Collimator (MLC) resolusi tinggi 120 / 160 daun untuk konformitas target tumor optimal",
      "Sistem pencitraan On-Board Imager (OBI) kV Cone-Beam CT (CBCT) untuk verifikasi posisi real-time",
      "High-Dose-Rate Flattening Filter Free (FFF) mode untuk mempersingkat waktu fraksinasi terapi"
    ],
    brochure: null
  },
  {
    id: "ro-brachy-01",
    title: "Brakhiterapi",
    subtitle: "High-Dose-Rate (HDR) Afterloading Brachytherapy System",
    category: "Radiation Oncology",
    image: "assets/zap_x.jpg",
    specs: [
      "Sistem afterloading brakhiterapi laju dosis tinggi (HDR) berbasis sumber radioaktif Iridium-192 / Cobalt-60",
      "Kanal transfer multi-channel (hingga 30+ kanal) dengan motor penggerak kawat sumber ultra-presisi",
      "Aplikator komprehensif: Ginekologi (tandem & ring/ovoid), prostat, payudara, esofagus, dan kulit",
      "Sistem proteksi radiasi terintegrasi, sensor pendeteksi radiasi otomatis, dan manual emergency retractor",
      "Treatment Planning System (TPS) 3D inverse planning terintegrasi langsung dengan CT/MRI"
    ],
    brochure: null
  },

  // --- RADIATION ONCOLOGY: PATIENT POSITIONING & IMMOBILIZATION SYSTEMS ---
  {
    id: "ro-pos-01",
    title: "EQUILIBRIUM™ VMAT TBI Overlay System",
    subtitle: "Total Body Irradiation (TBI) Patient Positioning & Treatment Overlay",
    category: "Radiation Oncology",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Sistem overlay khusus penyinaran seluruh tubuh Total Body Irradiation (TBI) berbasis teknik VMAT",
      "Material serat karbon homogen ultra-ringan dengan atenuasi radiasi sangat rendah (< 1%)",
      "Indeks fiksasi universal terkalibrasi untuk reposisi pasien dari kepala hingga ujung kaki",
      "Mengoptimalkan homogenitas distribusi dosis dan melindungi organ-at-risk (paru-paru & ginjal)",
      "Kompatibel dengan semua jenis meja couch LINAC dan CT Simulator onkologi"
    ],
    brochure: null
  },
  {
    id: "ro-pos-02",
    title: "FREEDOMX™ Total Body Patient Positioning System",
    subtitle: "Modular All-in-One Patient Immobilization & Positioning Platform",
    category: "Radiation Oncology",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Platform imobilisasi modular seluruh tubuh all-in-one untuk radioterapi stereotaktik dan konformal",
      "Desain rel indeks terintegrasi untuk integrasi modul kepala, bahu, toraks, pelvis, dan ekstremitas",
      "Konstruksi serat karbon rigid tanpa artefak pencitraan pada CT, MRI, dan Cone-Beam CT",
      "Meningkatkan reprodusibilitas posisi fraksi harian dan meminimalkan setup margin",
      "Sistem penguncian cepat (quick-release lock) yang aman dan efisien bagi radioterapis"
    ],
    brochure: null
  },
  {
    id: "ro-pos-03",
    title: "FREEDOMX™ Comprehensive Overlay Module",
    subtitle: "Full-Couch Carbon Fiber Overlay Board for Linear Accelerators",
    category: "Radiation Oncology",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Papan overlay serat karbon penuh untuk meja couch treatment dan simulasi radioterapi",
      "Permukaan datar terindeks presisi tinggi untuk menyamakan geometri CT sim dan LINAC",
      "Atenuasi sinar foton homogen seragam tanpa pergeseran berkas non-linear",
      "Daya tahan beban tinggi (hingga 250 kg) dengan defleksi kelenturan minimal",
      "Kompatibel dengan sistem fiksasi termoplastik, vac-bag, dan indexing bars standar internasional"
    ],
    brochure: null
  },
  {
    id: "ro-pos-04",
    title: "FREEDOMX™ PowerWEDGE Module",
    subtitle: "Adjustable Incline Wedge Positioning Module for Thorax & Breast",
    category: "Radiation Oncology",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Modul baji kemiringan sudut multi-posisi (0°, 5°, 10°, 15°, 20°) untuk fiksasi toraks & payudara",
      "Membantu pasien dengan keterbatasan mobilitas pernapasan dan elevasi lengan",
      "Struktur busa berkepadatan tinggi / serat karbon tahan benturan dan mudah didisinfeksi",
      "Penguncian sudut presisi tinggi dengan indikator derajat kemiringan yang jelas",
      "Mendukung teknik Deep Inspiration Breath Hold (DIBH) untuk proteksi jantung"
    ],
    brochure: null
  },
  {
    id: "ro-pos-05",
    title: "FREEDOMX™ SBRT Module",
    subtitle: "Stereotactic Body Radiation Therapy (SBRT) Immobilization System",
    category: "Radiation Oncology",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Sistem fiksasi stereotaktik SBRT / SABR untuk kanker paru-paru, hepar, dan organ abdomen",
      "Dilengkapi jembatan kompresi abdominal (abdominal compression bridge) untuk reduksi gerak pernapasan",
      "Sabuk penahan diafragma pneumatik dengan pengukur tekanan digital presisi",
      "Imobilisasi kaku dengan vacuum cushion berkontur kustom mengikuti anatomi pasien",
      "Toleransi pergeseran target intra-fraksi kurang dari 1.5 mm"
    ],
    brochure: null
  },
  {
    id: "ro-pos-06",
    title: "FREEDOMX™ Comprehensive Spine Module",
    subtitle: "Stereotactic Spine Radiosurgery (SRS/SBRT) Positioning Board",
    category: "Radiation Oncology",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Modul imobilisasi spine stereotaktik berpresisi tinggi untuk lesi vertebra servikal, torakal, dan lumbal",
      "Sistem penjepit bahu dan penyangga kurvatura lordotik tulang belakang yang dapat disesuaikan",
      "Kompatibel dengan masker termoplastik kepala-leher-bahu dan bantal vakum posterior",
      "Memberikan isolasi gerak rigid untuk pengiriman dosis ablatif tinggi per fraksi",
      "Bahan non-logam bersertifikasi MR-Conditional & CT-transparent"
    ],
    brochure: null
  },
  {
    id: "ro-pos-07",
    title: "FREEDOMX™ Hand Indexer + Shoulder Modules",
    subtitle: "Upper Extremity & Shoulder Retraction Immobilization Module",
    category: "Radiation Oncology",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Modul penarik bahu (shoulder depression) dan penahan posisi tangan terindeks",
      "Menarik bahu ke arah kaudal secara konsisten untuk membebaskan area leher dari berkas radiasi lateral",
      "Pegangan tangan ergonomis bernomor indeks untuk kenyamanan dan reprodusibilitas pasien",
      "Sistem tali pengatur tegangan simetris bilateral dengan kunci pengaman cepat",
      "Sangat penting untuk radioterapi tumor kepala & leher (Head and Neck)"
    ],
    brochure: null
  },
  {
    id: "ro-pos-08",
    title: "FREEDOMX™ DUO Mask Modules",
    subtitle: "Dual-Locking Frame System for Frameless SRS & Head-Neck Masks",
    category: "Radiation Oncology",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Sistem rangka fiksasi masker ganda (Dual-Locking) untuk masker termoplastik anterior & posterior",
      "Fiksasi 3D 360 derajat mengunci kranial secara presisi setara rigid frame konvensional",
      "Profil bingkai ultra-rendah tidak mengganggu sudut tembakan non-coplanar",
      "Mekanisme klik presisi tanpa memerlukan alat bantu tambahan saat pemasangan",
      "Mendukung protokol SRS/SRT intrakranial tanpa cincin invasif (frameless)"
    ],
    brochure: null
  },
  {
    id: "ro-pos-09",
    title: "FREEDOMX™ Intuition Click™ Module",
    subtitle: "Fast-Locking Intuitive Mechanism for Thermoplastic Mask Fastening",
    category: "Radiation Oncology",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Mekanisme pengunci masker termoplastik inovatif dengan sistem umpan balik sentuhan 'Click'",
      "Pemasangan masker dalam hitungan detik tanpa risiko pinch jaringan kulit pasien",
      "Memastikan ketegangan masker merata dan mencegah pelepasan tidak disengaja selama fraksinasi",
      "Dibuat dari material polimer medis berkekuatan tinggi yang tahan radiasi kumulatif",
      "Mempersingkat waktu setup di ruang simulasi dan bunker LINAC"
    ],
    brochure: null
  },
  {
    id: "ro-pos-10",
    title: "FREEDOMX™ Mask Stabilization Module",
    subtitle: "Rigid Cranial & Cervical Mask Stabilization Unit",
    category: "Radiation Oncology",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Unit stabilisasi masker kranial dan servikal untuk membatasi rotasi kepala pitch, roll, dan yaw",
      "Dilengkapi penyangga dagu anatomis dan fiksator titik fusi oksipital",
      "Mengurangi deformasi masker termoplastik selama masa pendinginan pencetakan",
      "Kompatibel dengan sistem pelacakan permukaan optik (Surface Guided Radiation Therapy - SGRT)",
      "Memaksimalkan kenyamanan pasien claustrophobic dengan ventilasi optimal"
    ],
    brochure: null
  },
  {
    id: "ro-pos-11",
    title: "FREEDOMX™ Couch Extensions",
    subtitle: "Carbon Fiber Treatment Couch Extension Panels",
    category: "Radiation Oncology",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Panel ekstensi meja couch serat karbon untuk memperluas jangkauan penyinaran kranial dan pelvis",
      "Bebas bayangan struktur logam (metal-free window) untuk tembakan sudut 360 derajat tanpa halangan",
      "Koneksi docking rigid yang kokoh dan presisi dengan meja couch utama",
      "Bobot sangat ringan memudahkan pemasangan dan pelepasan oleh staf medis",
      "Memenuhi standar uji beban lendutan mekanis internasional"
    ],
    brochure: null
  },
  {
    id: "ro-pos-12",
    title: "FREEDOMX™ Accessories",
    subtitle: "Comprehensive Positioning Accessories & Adaptor Kit",
    category: "Radiation Oncology",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Paket aksesori lengkap: Adaptor meja couch, pin pengunci cepat, spacer elevasi, dan indexing bars",
      "Penyangga lutut dan kaki berkontur (KneeFix & FeetFix) terindeks presisi",
      "Tali pengaman pasien hipoalergenik dengan pengatur panjang elastis",
      "Material tahan pembersih kimia rumah sakit dan mudah didekontaminasi",
      "Menjamin modularitas penuh antar seluruh lini produk FreedomX™"
    ],
    brochure: null
  },
  {
    id: "ro-pos-13",
    title: "SABELLA FLEX™ Dual Access Positioning System",
    subtitle: "Bilateral Breast & Thoracic Radiotherapy Positioning System",
    category: "Radiation Oncology",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Sistem fiksasi payudara bilateral dan toraks dengan akses ganda fleksibel",
      "Pengaturan posisi lengan independen kiri dan kanan (bilateral arm supports) multi-axis",
      "Elevasi kemiringan sudut bertingkat untuk optimasi pemisahan jaringan paru dan jantung",
      "Penyangga kepala dan pergelangan tangan berkontur empuk untuk kenyamanan pasien",
      "Kompatibel dengan teknik IMRT, VMAT, dan gating pernapasan (respiratory gating)"
    ],
    brochure: null
  },
  {
    id: "ro-pos-14",
    title: "PROCLINE™ Breast Positioning System",
    subtitle: "Inclined Breast Board with Anatomical Arm & Wrist Rests",
    category: "Radiation Oncology",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Papan fiksasi payudara ergonomis dengan sudut inklinasi presisi (5° hingga 25°)",
      "Penahan bokong (bottom stop) dan penyangga panggul yang dapat digeser sesuai tinggi pasien",
      "Bahan serat karbon 100% homogen untuk meminimalkan dosis hamburan pada kulit (skin sparing)",
      "Penyangga lengan atas overhead dan lengan bawah dengan skala indeks mudah dibaca",
      "Mendukung penanganan fraksinasi radioterapi kanker payudara unifokal dan multifokal"
    ],
    brochure: null
  },
  {
    id: "ro-pos-15",
    title: "KOILIA MIKROS™ Belly Board",
    subtitle: "Prone Pelvic & Small Bowel Sparing Positioning Board",
    category: "Radiation Oncology",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Papan fiksasi posisi tengkurap (prone) khusus untuk radioterapi rektum, prostat, dan ginekologi",
      "Bukaan abdominal anatomis (belly hole) dengan insert modular untuk memindahkan usus halus ke anterior",
      "Mengurangi volume usus halus yang terpapar radiasi hingga lebih dari 60%",
      "Penyangga dada, dagu, dan tungkai berkontur busa empuk untuk stabilitas tengkurap yang nyaman",
      "Konstruksi serat karbon ringan dengan sistem pengunci indeks meja treatment"
    ],
    brochure: null
  },
  {
    id: "ro-pos-16",
    title: "HEXSPAND LT THERMOPLASTICS",
    subtitle: "Low-Temperature Thermoplastic Masks & Immobilization Sheets",
    category: "Radiation Oncology",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Masker termoplastik suhu rendah (Low Temperature Thermoplastics) dengan struktur pori mikro Hexspand",
      "Formulasi polimer anti-lengket (non-stick coating) tidak menempel pada rambut atau kulit pasien",
      "Peregangan elastis seragam dengan memori bentuk sempurna dan penyusutan (shrinkage) minimal",
      "Tersedia tipe Head Only (3-point), Head-Neck-Shoulder (4 & 5-point), serta lembaran padat/berpori",
      "Waktu pemanasan cepat (1-2 menit pada air 65°-70°C) dan waktu kerja elastis yang nyaman"
    ],
    brochure: null
  },
  {
    id: "ro-pos-17",
    title: "Radiation Oncology Accessories",
    subtitle: "Index Bars, Precision Table Pads, Digital Heating, Bolus, Head Supports, Wedges & MR Compatible",
    category: "Radiation Oncology",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Index Bars aluminium & serat karbon untuk fiksasi universal meja couch Varian, Elekta, dan Siemens",
      "Precision Table Pads & Vac-Bags: Matras meja couch penyerap tekanan dan bantal vakum cetak anatomis",
      "Digital Heating & Water Baths: Pemanas air digital presisi untuk aktivasi masker termoplastik",
      "Bolus Radioterapi: Bolus silikon setara jaringan (tissue-equivalent) untuk penyesuaian dosis build-up kulit",
      "Head Supports, Cutting/Marking, Wedges & Aksesori bersertifikasi MR-Compatible"
    ],
    brochure: null
  },

  // --- MEDICAL IMAGING: C-ARM ---
  {
    id: "img-carm-01",
    title: "Synergy XCA",
    subtitle: "Mobile C-Arm Analog Fluoroscopy System (5 kW)",
    category: "Medical Imaging",
    image: "assets/synergymed_carm_analog.png",
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
    image: "assets/synergymed_carm_digital.png",
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
    image: "assets/synergymed_ct32.png",
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
    image: "assets/synergymed_ct32.png",
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
    image: "assets/synergymed_ct128.png",
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
    image: "assets/synergymed_ct128.png",
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
    image: "assets/synergymed_xsd70c.png",
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
    image: "assets/synergymed_xsd50f.png",
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
    image: "assets/synergymed_mobile_xray.png",
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
    image: "assets/synergymed_mobile_xray.png",
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
    image: "assets/synergymed_mobile_xray.png",
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
    image: "assets/synergymed_injector.jpg",
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
    image: "assets/synergymed_injector.jpg",
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
    image: "assets/synergymed_mammovue.png",
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
    image: "assets/synergymed_novapacs.png",
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
    image: "assets/synergymed_visar.png",
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
    image: "assets/synergymed_an20.png",
    specs: [
      "Compact anesthesia workstation for general anesthesia",
      "Electronic gas mixer with flow control",
      "Integrated vaporizer mount for volatile agents",
      "7-inch color display with real-time waveforms",
      "Built-in ventilator with volume & pressure modes"
    ],
    brochure: "https://drive.google.com/file/d/149Ahn3-iCDay5eNOsvvHDHo3tvXmB5bd/view"
  },
  {
    id: "cc-anes-02",
    title: "AccuBreathe AN30",
    subtitle: "Anesthesia Machine — Mid-Range",
    category: "Critical Care",
    image: "assets/synergymed_an30.png",
    specs: [
      "Advanced anesthesia delivery system with dual vaporizers",
      "10.4-inch touchscreen with intuitive UI",
      "Electronic PEEP & fresh gas flow compensation",
      "Low-flow anesthesia capability for agent conservation",
      "Integrated patient monitoring module (SpO2, ECG, EtCO2)"
    ],
    brochure: "https://drive.google.com/file/d/1WckCYsWv4tG7au-9Od8-UVmApSyVMNx9/view"
  },
  {
    id: "cc-anes-03",
    title: "AccuBreathe AN50",
    subtitle: "Anesthesia Machine — Premium Workstation",
    category: "Critical Care",
    image: "assets/synergymed_an50.png",
    specs: [
      "High-end anesthesia workstation with full electronic gas management",
      "15-inch HD touchscreen with multi-waveform display",
      "Triple vaporizer configuration support",
      "Advanced ventilation modes: VCV, PCV, PSV, SIMV",
      "Comprehensive monitoring: hemodynamics, gas analysis, spirometry"
    ],
    brochure: "https://drive.google.com/file/d/1r-woBtHgzr4lyWZ6iuoA-4l-pzkLVoNF/view"
  },

  // --- CRITICAL CARE: CENTRAL MONITOR ---
  {
    id: "cc-cmon-01",
    title: "AccuSign CMS 10",
    subtitle: "Central Monitoring Station — 32 Beds",
    category: "Critical Care",
    image: "assets/synergymed_accusign10.png",
    specs: [
      "Centralized patient surveillance for up to 32 beds",
      "32-inch HD display with multi-patient grid view",
      "Real-time waveform & numeric data streaming",
      "Full disclosure recording with trend analysis",
      "Network integration with AccuSign bedside monitors"
    ],
    brochure: "https://drive.google.com/file/d/1cSTQFBbx4GvEB9ITivjxN8WlH4zCCPXH/view"
  },
  {
    id: "cc-cmon-02",
    title: "AccuSign CMS 30 & 40",
    subtitle: "Central Monitoring Station — 64 Beds",
    category: "Critical Care",
    image: "assets/synergymed_accusign30_40.png",
    specs: [
      "Enterprise-grade central monitoring for up to 64 beds",
      "Dual 32-inch display configuration",
      "Alarm management with priority escalation",
      "HL7/DICOM integration for HIS/EMR connectivity",
      "Long-term data storage with full event review"
    ],
    brochure: "https://drive.google.com/file/d/1TZb3W9tccIhf-bMRP5C-JF9YfLAmPAFk/view?usp=drive_link"
  },

  // --- CRITICAL CARE: CARDIOTOCOGRAPHY (CTG) ---
  {
    id: "cc-ctg-01",
    title: "AccuTop 10",
    subtitle: "Fetal Monitor — Single Fetal Heart Rate",
    category: "Critical Care",
    image: "assets/synergymed_accutop10.png",
    specs: [
      "Continuous fetal heart rate (FHR) monitoring",
      "Ultrasound Doppler transducer — 1 MHz",
      "TOCO transducer for uterine contraction tracking",
      "7-inch LCD display with real-time CTG trace",
      "Thermal printer for paper CTG recording"
    ],
    brochure: "https://b1bb2b5c-e1f6-4d2f-850a-38c517b478a9.filesusr.com/ugd/733872_f4a52c3e759340d3b10b345f5783c40a.pdf"
  },
  {
    id: "cc-ctg-02",
    title: "AccuTop 20",
    subtitle: "Fetal Monitor — Twins Monitoring",
    category: "Critical Care",
    image: "assets/synergymed_accutop20.png",
    specs: [
      "Dual-channel FHR monitoring for twin pregnancies",
      "Dual ultrasound Doppler transducers",
      "Integrated TOCO & IUP measurement",
      "10.4-inch color touchscreen display",
      "Wireless connectivity for central station monitoring"
    ],
    brochure: "https://b1bb2b5c-e1f6-4d2f-850a-38c517b478a9.filesusr.com/ugd/733872_574c6eafc86543a6a300a6322bb16e01.pdf"
  },

  // --- CRITICAL CARE: DEFIBRILLATOR ---
  {
    id: "cc-defib-01",
    title: "AccuShock 10",
    subtitle: "Defibrillator — Portable AED",
    category: "Critical Care",
    image: "assets/synergymed_accushock10.png",
    specs: [
      "Automated External Defibrillator (AED) with manual override",
      "Biphasic waveform for effective defibrillation",
      "7-inch color display with ECG waveform",
      "Voice-guided CPR coaching",
      "Lightweight portable design — under 4 kg"
    ],
    brochure: "https://b1bb2b5c-e1f6-4d2f-850a-38c517b478a9.filesusr.com/ugd/6d5749_7e47de9269ee4428aeb48c25a1bc77e6.pdf"
  },
  {
    id: "cc-defib-02",
    title: "AccuShock 60",
    subtitle: "Defibrillator/Monitor — Professional Grade",
    category: "Critical Care",
    image: "assets/synergymed_accushock60.png",
    specs: [
      "Manual defibrillator with AED mode & synchronized cardioversion",
      "12-lead ECG acquisition & interpretation",
      "Pacing capability (transcutaneous external pacing)",
      "10.4-inch high-resolution display with multi-parameter monitoring",
      "SpO2, NIBP, EtCO2 integrated monitoring modules"
    ],
    brochure: null
  },

  // --- CRITICAL CARE: ELECTROCARDIOGRAPHY (ECG) ---
  {
    id: "cc-ecg-01",
    title: "AccuRead 10",
    subtitle: "12-Channel ECG — Portable Digital",
    category: "Critical Care",
    image: "assets/synergymed_accuread10.png",
    specs: [
      "12-channel digital ECG with simultaneous acquisition",
      "4.3-inch touchscreen display",
      "Internal storage for 1000+ ECG records",
      "Auto-interpretation with measurement report",
      "USB & Wi-Fi data transfer"
    ],
    brochure: "https://drive.google.com/file/d/19fcC6DrMa23FpE8e9wMxifl0YDcEmyZf/view"
  },
  {
    id: "cc-ecg-02",
    title: "AccuRead 15",
    subtitle: "12-Channel ECG — Enhanced Portable",
    category: "Critical Care",
    image: "assets/synergymed_accuread10.png",
    specs: [
      "12-channel ECG with 7-inch color LCD",
      "Enhanced noise filtering & baseline correction",
      "Built-in lithium battery for long field use",
      "Configurable report formats with patient database",
      "Bluetooth connectivity to PC workstation"
    ],
    brochure: "https://b1bb2b5c-e1f6-4d2f-850a-38c517b478a9.filesusr.com/ugd/733872_b16e917231984b55b4e3d0ec14d16c61.pdf"
  },
  {
    id: "cc-ecg-03",
    title: "AccuRead 20",
    subtitle: "12-Channel ECG — PC-Based Workstation",
    category: "Critical Care",
    image: "assets/synergymed_accuread20.png",
    specs: [
      "PC-based 12-channel ECG workstation system",
      "Wireless Bluetooth ECG acquisition module",
      "Full DICOM & HL7 integration for HIS/EMR",
      "Advanced interpretation algorithms with Glasgow scoring",
      "Unlimited record storage with cloud backup option"
    ],
    brochure: "https://drive.google.com/file/d/1f2Rp6TbcxDKf04loAV68CRbffvKvG9Mn/view?usp=drive_link"
  },
  {
    id: "cc-ecg-04",
    title: "AccuRead 25",
    subtitle: "12-Channel ECG — Touchscreen Advanced",
    category: "Critical Care",
    image: "assets/synergymed_accuread30.png",
    specs: [
      "12-channel ECG with 10.1-inch touchscreen",
      "Real-time rhythm analysis & arrhythmia detection",
      "High-resolution thermal printer integrated",
      "Stress test (ergometry) compatible",
      "Barcode scanner for patient ID integration"
    ],
    brochure: "https://drive.google.com/file/d/10wiAdgeS77CuKTreAC1X252vuCs4aJnQ/view?usp=drive_link"
  },
  {
    id: "cc-ecg-05",
    title: "AccuRead 30",
    subtitle: "12-Channel ECG — Premium Digital",
    category: "Critical Care",
    image: "assets/synergymed_accuread30.png",
    specs: [
      "Premium 12-channel digital ECG system",
      "12.1-inch HD touchscreen with multi-lead preview",
      "AI-assisted ECG interpretation engine",
      "Simultaneous 12-lead display & recording",
      "Full network connectivity: Wi-Fi, LAN, USB, Bluetooth"
    ],
    brochure: "https://drive.google.com/file/d/1GO7UdgDOVYi7Btz1F0OGBBoPyWauA1ND/view"
  },

  // --- CRITICAL CARE: INCUBATOR ---
  {
    id: "cc-incub-01",
    title: "Hippo I50",
    subtitle: "Infant Incubator — Neonatal Intensive Care",
    category: "Critical Care",
    image: "assets/synergymed_hippoi50.png",
    specs: [
      "Double-wall canopy for optimal thermal insulation",
      "Servo-controlled skin & air temperature modes",
      "Integrated humidity & oxygen concentration control",
      "Tiltable bassinet for Trendelenburg positioning",
      "Access ports with iris diaphragms for minimal heat loss"
    ],
    brochure: "https://drive.google.com/file/d/1UjViXfofdMud5mtXgBwb_hNSyLzFyI8S/view"
  },

  // --- CRITICAL CARE: INFANT WARMER ---
  {
    id: "cc-warm-01",
    title: "Hippo W30",
    subtitle: "Infant Radiant Warmer — Open Care System",
    category: "Critical Care",
    image: "assets/synergymed_hippow30.png",
    specs: [
      "Overhead radiant heater with servo skin temperature control",
      "Open-access design for immediate neonatal care",
      "Integrated APGAR timer & resuscitation timer",
      "Phototherapy-ready with optional LED blue light unit",
      "X-ray cassette tray under bassinet for imaging"
    ],
    brochure: "https://drive.google.com/file/d/1Cb2zfE62_9A91m5QB-5ovb6m923ecxan/view"
  },

  // --- CRITICAL CARE: SYRINGE & INFUSION PUMP ---
  {
    id: "cc-pump-01",
    title: "AccuDrip 10",
    subtitle: "Volumetric Infusion Pump",
    category: "Critical Care",
    image: "assets/synergymed_accudrip10.png",
    specs: [
      "Volumetric infusion pump for standard IV sets",
      "Flow rate: 0.1–1200 mL/h with high accuracy",
      "Ultrasonic air-in-line bubble detection",
      "Occlusion pressure monitoring with adjustable alarm levels",
      "Color LCD display with drug library"
    ],
    brochure: "https://drive.google.com/file/d/1ZeDBs6WFm1lJX0YTaYjvxu2nw7zBeDHd/view"
  },
  {
    id: "cc-pump-02",
    title: "AccuDrip 15",
    subtitle: "Volumetric Infusion Pump — Enhanced",
    category: "Critical Care",
    image: "assets/synergymed_accudrip15.png",
    specs: [
      "Enhanced volumetric infusion pump with dose calculation",
      "Dual CPU safety architecture",
      "Anti-bolus protection system",
      "Wi-Fi connectivity for pump fleet management",
      "Compatible with all major IV set brands"
    ],
    brochure: "https://drive.google.com/file/d/1mPGcX13qeeL7ZdpecJQUT9gI7p5FGIzd/view?usp=drive_link"
  },
  {
    id: "cc-pump-03",
    title: "AccuDrip 20",
    subtitle: "Syringe Pump — Precision Delivery",
    category: "Critical Care",
    image: "assets/synergymed_accudrip20.png",
    specs: [
      "Motorized syringe pump for precise micro-infusion",
      "Flow rate: 0.01–1500 mL/h",
      "Supports 5 mL to 60 mL syringe sizes",
      "Dual CPU with automatic/manual bolus function",
      "Stackable design for multi-channel configuration"
    ],
    brochure: "https://drive.google.com/file/d/1AYpTiFfj3XFH9FTWh8nsWqkcsHwy8Qi3/view"
  },
  {
    id: "cc-pump-04",
    title: "AccuDrip 25",
    subtitle: "Syringe Pump — Advanced",
    category: "Critical Care",
    image: "assets/synergymed_accudrip25.png",
    specs: [
      "Advanced syringe pump with TCI (Target Controlled Infusion)",
      "Integrated drug library with DERS (Dose Error Reduction System)",
      "Full-color touchscreen interface",
      "Nurse call & network alarm integration",
      "Battery backup for uninterrupted delivery"
    ],
    brochure: "https://drive.google.com/file/d/160G-fEaJeCoowtlgyEqHeVLpL66HWjJ2/view"
  },

  // --- CRITICAL CARE: OPERATING LAMP ---
  {
    id: "cc-lamp-01",
    title: "Solar 10",
    subtitle: "LED Surgical Operating Lamp — Single Dome",
    category: "Critical Care",
    image: "assets/synergymed_solar10.png",
    specs: [
      "Single-dome LED surgical light",
      "Shadow-free illumination up to 130,000 lux",
      "Color temperature adjustable: 3500–5000 K",
      "CRI ≥ 95 for accurate tissue color rendering",
      "Sterilizable central handle for positioning"
    ],
    brochure: "https://drive.google.com/file/d/1oR6DQ9ejv4E2jKtIqU8t9FKTtOGBDPqN/view"
  },
  {
    id: "cc-lamp-02",
    title: "Solar 20",
    subtitle: "LED Surgical Operating Lamp — Dual Dome",
    category: "Critical Care",
    image: "assets/synergymed_solar20.png",
    specs: [
      "Dual-dome LED surgical lamp system",
      "Main dome: 160,000 lux / satellite dome: 120,000 lux",
      "Independent dimming & focus for each dome",
      "Endoscopic mode with reduced light intensity",
      "HD camera integration option for surgical recording"
    ],
    brochure: "https://drive.google.com/file/d/1Dn8m74JNQ3Okjso5r0_mpoP9a4OHyci1/view"
  },
  {
    id: "cc-lamp-03",
    title: "Solar 30",
    subtitle: "LED Surgical Operating Lamp — Advanced",
    category: "Critical Care",
    image: "assets/synergymed_solar30.png",
    specs: [
      "Advanced LED operating lamp with ambient lighting system",
      "180,000 lux center illumination intensity",
      "Ultra-low heat emission for surgeon comfort",
      "Multiple light field sizes: 15–30 cm diameter",
      "Integrated Full HD camera with live video output"
    ],
    brochure: "https://drive.google.com/file/d/1mKi0WgXR6IDLibCRhQREMqA_5pim5FDA/view"
  },
  {
    id: "cc-lamp-04",
    title: "Solar 40",
    subtitle: "LED Surgical Operating Lamp — Premium",
    category: "Critical Care",
    image: "assets/synergymed_solar40.png",
    specs: [
      "Premium dual-dome LED surgical lighting system",
      "Main: 200,000 lux / Satellite: 160,000 lux",
      "ShadowControl technology eliminates deep cavity shadows",
      "Color rendering index Ra ≥ 97 — medical grade",
      "4K camera integration with OR video management"
    ],
    brochure: "https://drive.google.com/file/d/1LfQiBRGK9UUOd8WvHyAjX4JfDdOF00sO/view"
  },

  // --- CRITICAL CARE: OPERATING TABLE ---
  {
    id: "cc-table-01",
    title: "Staflex 10",
    subtitle: "Operating Table — Electro-Hydraulic",
    category: "Critical Care",
    image: "assets/synergymed_staflex10.png",
    specs: [
      "Electro-hydraulic multi-purpose surgical table",
      "Height, Trendelenburg, lateral tilt, back & leg adjustment",
      "Radiolucent tabletop for C-arm & X-ray imaging",
      "Weight capacity: 250 kg",
      "Stainless steel construction — easy to clean & sterilize"
    ],
    brochure: "https://drive.google.com/file/d/1PHhYB2NUUcFKAMXnyS1oY6McLZrDnXXm/view"
  },
  {
    id: "cc-table-02",
    title: "Staflex 10 Premium",
    subtitle: "Operating Table — Premium Electro-Hydraulic",
    category: "Critical Care",
    image: "assets/synergymed_staflex10_premium.png",
    specs: [
      "Premium electro-hydraulic surgical table with memory positioning",
      "Motorized all-section adjustment with programmable presets",
      "Carbon fiber radiolucent tabletop",
      "Integrated battery backup for emergency positioning",
      "Weight capacity: 300 kg — bariatric compatible"
    ],
    brochure: "https://b1bb2b5c-e1f6-4d2f-850a-38c517b478a9.filesusr.com/ugd/733872_03e07961cc7542e2b99839b51e444022.pdf"
  },
  {
    id: "cc-table-03",
    title: "Staflex 10 Platinum",
    subtitle: "Operating Table — Platinum Series",
    category: "Critical Care",
    image: "assets/synergymed_staflex10_platinum.png",
    specs: [
      "Top-tier electro-hydraulic surgical table — Platinum edition",
      "Fully motorized with joystick & wireless remote control",
      "Sliding tabletop for cardiac, neuro & orthopedic surgery",
      "Integrated heating pad & patient transfer system",
      "Weight capacity: 360 kg — heavy-duty bariatric"
    ],
    brochure: "https://b1bb2b5c-e1f6-4d2f-850a-38c517b478a9.filesusr.com/ugd/733872_b7f8b46e014143a5a41c582ab6412196.pdf"
  },

  // --- CRITICAL CARE: PATIENT MONITOR ---
  {
    id: "cc-pmon-01",
    title: "AccuSign 5",
    subtitle: "Patient Monitor — Compact Bedside",
    category: "Critical Care",
    image: "assets/synergymed_accusign5.png",
    specs: [
      "Compact 7-inch bedside patient monitor",
      "ECG (3/5-lead), SpO2, NIBP, Pulse Rate",
      "Real-time waveform display with trend recording",
      "Audible & visual alarm system with configurable limits",
      "Lightweight & portable — ideal for transport"
    ],
    brochure: "https://b1bb2b5c-e1f6-4d2f-850a-38c517b478a9.filesusr.com/ugd/733872_4c9c21b4ca1546dfba79182dae5ef4d8.pdf"
  },
  {
    id: "cc-pmon-02",
    title: "AccuSign 10",
    subtitle: "Patient Monitor — Standard",
    category: "Critical Care",
    image: "assets/synergymed_accusign10.png",
    specs: [
      "10.4-inch color patient monitor",
      "ECG, SpO2, NIBP, Temperature, Respiration",
      "Optional EtCO2 & IBP modules",
      "96-hour trend data storage with alarm event log",
      "Central station networking via LAN/Wi-Fi"
    ],
    brochure: "https://drive.google.com/file/d/19GaBeCBGCqYALVAb0wH15xJUbwIAQxZl/view"
  },
  {
    id: "cc-pmon-03",
    title: "AccuSign 20",
    subtitle: "Patient Monitor — Multi-Parameter",
    category: "Critical Care",
    image: "assets/synergymed_accusign20.png",
    specs: [
      "12.1-inch touchscreen multi-parameter monitor",
      "ECG (12-lead), SpO2, NIBP, IBP, Temp, EtCO2, Resp",
      "Arrhythmia analysis & ST-segment monitoring",
      "Built-in recorder for waveform printout",
      "Drug calculation & hemodynamic computation"
    ],
    brochure: "https://drive.google.com/file/d/1sBfqTAay3JbWGGUsq83_u51ao5gZpHpT/view"
  },
  {
    id: "cc-pmon-04",
    title: "AccuSign 30",
    subtitle: "Patient Monitor — Advanced ICU",
    category: "Critical Care",
    image: "assets/synergymed_accusign30.png",
    specs: [
      "15-inch HD touchscreen ICU-grade patient monitor",
      "Full multi-parameter: ECG, SpO2, NIBP, IBP x2, Temp x2, EtCO2",
      "Cardiac output & continuous hemodynamic monitoring",
      "Dual-screen display with configurable layouts",
      "HL7 integration for EMR/HIS data exchange"
    ],
    brochure: "https://drive.google.com/file/d/1WZrpIEfoIrlFKuiU9hqlSTuKPtXQIHBP/view"
  },
  {
    id: "cc-pmon-05",
    title: "AccuSign 40",
    subtitle: "Patient Monitor — Premium Modular",
    category: "Critical Care",
    image: "assets/synergymed_accusign40.png",
    specs: [
      "17-inch HD modular patient monitoring platform",
      "Expandable module slots for BIS, NMT, Cardiac Output, Gas Analysis",
      "Up to 8 waveforms simultaneous display",
      "Enterprise networking with central station integration",
      "Touchscreen + rotary knob for intuitive operation"
    ],
    brochure: "https://drive.google.com/file/d/1ECrWRzSLJwUn5JbrZEkpyCER-mp2dWZ3/view"
  },

  // --- CRITICAL CARE: PENDANT ---
  {
    id: "cc-pend-01",
    title: "Stellar 10",
    subtitle: "Medical Pendant — Single Arm",
    category: "Critical Care",
    image: "assets/synergymed_stellar10.png",
    specs: [
      "Single-arm ceiling-mounted medical pendant",
      "Gas outlets: O2, Air, Vacuum, N2O",
      "Electrical outlets: 6x power sockets + data ports",
      "360° horizontal rotation with pneumatic brake",
      "Load capacity: 150 kg for equipment mounting"
    ],
    brochure: "https://drive.google.com/file/d/1OD5AfUgu8KtuE4pa2jD_xY58PAY3_ndO/view"
  },
  {
    id: "cc-pend-02",
    title: "Stellar 20",
    subtitle: "Medical Pendant — Dual Arm",
    category: "Critical Care",
    image: "assets/synergymed_stellar20.png",
    specs: [
      "Dual-arm ceiling pendant for OR & ICU environments",
      "Wet arm (gas/electrical) + dry arm (monitor/equipment)",
      "Motorized height adjustment for ergonomic positioning",
      "12x power sockets, 8x gas outlets, network connections",
      "Load capacity: 250 kg total"
    ],
    brochure: "https://drive.google.com/file/d/130-Dm7Jz4LeIsGtE1L4I48NznVDPKtEE/view"
  },
  {
    id: "cc-pend-03",
    title: "Stellar 30",
    subtitle: "Medical Pendant — Bridge System",
    category: "Critical Care",
    image: "assets/synergymed_stellar30.png",
    specs: [
      "ICU bridge pendant system with sliding shelves",
      "Configurable wet/dry separation on bridge rail",
      "Multiple infusion pump docking positions",
      "Integrated LED ambient lighting",
      "Modular design for customized ICU bed layout"
    ],
    brochure: "https://drive.google.com/file/d/1SsbX_ODQRmZxyMkniY5ZWJFbP2oC0mdH/view"
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
    brochure: "https://drive.google.com/file/d/1g_SxQGIhA5uI6uYYFNMXCezx4mGZNGqC/view"
  },

  // --- CRITICAL CARE: PUMP WORK STATION ---
  {
    id: "cc-pws-01",
    title: "AccuWS Pump Work Station",
    subtitle: "Infusion Pump Docking Station — Multi-Channel",
    category: "Critical Care",
    image: "assets/synergymed_accuws.png",
    specs: [
      "Multi-channel docking station for AccuDrip pump series",
      "Supports up to 8 syringe/infusion pumps simultaneously",
      "Centralized power supply — single mains connection",
      "Network hub for pump fleet data management",
      "IV pole mount with adjustable height & tilt"
    ],
    brochure: "https://drive.google.com/file/d/1AG_PS3nXkKbkU1MTzp7XI_Mv9SjVCnLi/view?usp=drive_link"
  },

  // --- CRITICAL CARE: VENTILATOR ---
  {
    id: "cc-vent-01",
    title: "AccuBreathe VI30",
    subtitle: "ICU Ventilator — Standard",
    category: "Critical Care",
    image: "assets/synergymed_accubreathe_vi30.png",
    specs: [
      "ICU mechanical ventilator for adult & pediatric patients",
      "Ventilation modes: VCV, PCV, SIMV, PSV, CPAP, BiPAP",
      "12.1-inch touchscreen with real-time waveform display",
      "Integrated high-performance turbine — no external air supply needed",
      "FiO2 range: 21%–100% with precision O2 blender"
    ],
    brochure: "https://drive.google.com/file/d/1k-3x76GnxHIm8v7QQ99FaWak43WumWoN/view"
  },
  {
    id: "cc-vent-02",
    title: "AccuBreathe VI40",
    subtitle: "ICU Ventilator — Advanced with NIV",
    category: "Critical Care",
    image: "assets/synergymed_accubreathe_vi40.png",
    specs: [
      "Advanced ICU ventilator for adult, pediatric & neonatal patients",
      "Full invasive & non-invasive ventilation (NIV) capability",
      "15-inch HD touchscreen with pressure-volume loops & trends",
      "Lung protection tools: auto-PEEP, P0.1, NIF measurement",
      "Integrated nebulizer & heated humidifier interface"
    ],
    brochure: "https://drive.google.com/file/d/1vl-uXsCJ1Eev4-kK0kQqs-PAPOn61eGW/view"
  },

  // --- CRITICAL CARE: VITAL SIGN ---
  {
    id: "cc-vital-01",
    title: "Accu Vital 10",
    subtitle: "Vital Sign Monitor — Portable Spot Check",
    category: "Critical Care",
    image: "assets/synergymed_accuvital10.png",
    specs: [
      "Portable vital sign spot-check monitor",
      "NIBP, SpO2, Pulse Rate, Temperature measurement",
      "5-inch color LCD display with intuitive interface",
      "Rechargeable lithium battery for mobile ward rounds",
      "Data transfer via Wi-Fi to central EMR system"
    ],
    brochure: "https://drive.google.com/file/d/1ys3N2Ap4VvD8B7e6s5X5O7OEj-7QlyFS/view"
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
    image: "assets/synergymed_usg_hres10.png",
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
    image: "assets/synergymed_usg_hres15.jpg",
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
    image: "assets/synergymed_usg_hres20.png",
    specs: [
      "Flagship portable ultrasound platform with AI-assisted auto-measurements",
      "Multi-beam parallel processing for ultra-high frame rate imaging",
      "Continuous Wave (CW) Doppler & Tissue Doppler Imaging (TDI) integrated",
      "Customizable intuitive touch workflow & multiple transducer connectivity",
      "Ruggedized lightweight chassis designed for emergency and bedside ultrasound"
    ],
    brochure: "SynergyMed_Ultrasound.pdf"
  },
  {
    id: "usg-port-04",
    title: "Hres 30",
    subtitle: "High-End Portable Ultrasound Workstation with Mobile Cart",
    category: "Ultrasound",
    image: "assets/synergymed_usg_hres30.png",
    specs: [
      "High-end portable ultrasound platform with dedicated mobile workstation cart",
      "Multi-beam parallel architecture for exceptional spatial and contrast resolution",
      "Comprehensive Doppler capabilities (Color, Power, PW, CW, and TDI)",
      "Smart clinical workflow with customizable presets for Cardiology, Vascular, and MSK",
      "Dual active probe connectors with integrated cable management and accessory trays"
    ],
    brochure: "SynergyMed_Ultrasound.pdf"
  },

  // --- ULTRASOUND: CONSOLE ---
  {
    id: "usg-cons-01",
    title: "Hres 18",
    subtitle: "Cart-Based Console Color Doppler Ultrasound Workstation",
    category: "Ultrasound",
    image: "assets/synergymed_usg_hres18.png",
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
    image: "assets/synergymed_usg_hres20.png",
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
    image: "assets/synergymed_usg_kosmos.png",
    specs: [
      "Ultra-portable AI-guided handheld ultrasound with cart-grade diagnostic image quality",
      "Triple-probe technology (Phased, Curved, Linear) supporting CW, PW, TDI & Color Doppler",
      "Deep learning AI for real-time cardiac guidance, auto-EF, stroke volume & anatomical labeling",
      "IP67 waterproof & ruggedized drop-tested probe for bedside, ICU, and emergency triage",
      "Seamless iOS, Android & Kosmos Bridge tablet compatibility with cloud PACS synchronization"
    ],
    brochure: "SynergyMed_Ultrasound.pdf"
  },

  // =====================================================================
  // --- ENVIRO ---
  // =====================================================================

  // --- ENVIRO: INSTALASI PENGOLAHAN AIR LIMBAH (IPAL) ---
  {
    id: "env-ipal-01",
    title: "IPAL BioFilter",
    subtitle: "Instalasi Pengolahan Air Limbah — BioFilter System",
    category: "Enviro",
    image: "assets/enviro_ipal.jpg",
    specs: [
      "Sistem pengolahan air limbah biologis efisiensi tinggi (Anaerobic & Aerobic Biofilter)",
      "Memenuhi baku mutu limbah cair lingkungan rumah sakit (BOD, COD, TSS, Coliform)",
      "Desain modular compact, ramah lingkungan dan minim bau (low odor)",
      "Operasional stabil, hemat energi listrik dan biaya perawatan rendah",
      "Dilengkapi sistem sedimentasi dan disinfeksi klorinasi/ozon akhir"
    ],
    brochure: "https://drive.google.com/file/u/7/d/1tzAZW05FOTrdR1i2RKiB2WLqR-rel5h2/view?usp=drive_link"
  },
  {
    id: "env-ipal-02",
    title: "IPAL with Grease Trap & Solar Panel",
    subtitle: "Instalasi Pengolahan Air Limbah — Hybrid Solar & Grease Trap",
    category: "Enviro",
    image: "assets/enviro_ipal.jpg",
    specs: [
      "Dilengkapi Grease Trap multi-kompartemen untuk pemisahan minyak, lemak & limbah dapur",
      "Tenaga hybrid Solar Panel fotovoltaik untuk efisiensi energi mandiri",
      "Teknologi biofilter canggih dengan aerasi terintegrasi",
      "Monitoring otomatis debit limbah dan sensor kualitas air",
      "Sesuai regulasi baku mutu lingkungan KLHK & Kemenkes RI"
    ],
    brochure: "https://drive.google.com/file/u/7/d/1tzAZW05FOTrdR1i2RKiB2WLqR-rel5h2/view?usp=drive_link"
  },

  // --- ENVIRO: WATER TREATMENT PLANT (WTP) ---
  {
    id: "env-wtp-01",
    title: "WTP with Ozone Technology",
    subtitle: "Water Treatment Plant — Advanced Ozone Sterilization",
    category: "Enviro",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Teknologi sterilisasi & oksidasi ozon (O3) berdaya basmi bakteri/virus tinggi",
      "Menghilangkan mikroorganisme patogen tanpa residu kimia berbahaya",
      "Oksidasi zat besi (Fe), mangan (Mn), sulfida, dan senyawa organik terlarut",
      "Menghasilkan air bersih & higienis untuk kebutuhan medis dan operasional RS",
      "Dilengkapi generator ozon otomatis dengan sistem pengaman over-flow"
    ],
    brochure: "https://drive.google.com/file/u/7/d/1tzAZW05FOTrdR1i2RKiB2WLqR-rel5h2/view?usp=drive_link"
  },
  {
    id: "env-wtp-02",
    title: "WTP with Sand Carbon Filter & UF",
    subtitle: "Water Treatment Plant — Sand Carbon & Ultrafiltration (UF)",
    category: "Enviro",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Multi-media filtration: Pasir silika & karbon aktif berdaya serap iodine tinggi",
      "Membran Ultrafiltrasi (UF) pori 0.01 mikron untuk penyaringan partikel & bakteri",
      "Menghilangkan bau, rasa, warna, kekeruhan (turbidity), dan zat klorin",
      "Sistem automatic backwash & fast rinse untuk perawatan membran yang mudah",
      "Suplai air filtrasi konsisten untuk hemodialisa, CSSD, dan seluruh fasilitas RS"
    ],
    brochure: "https://drive.google.com/file/u/7/d/1tzAZW05FOTrdR1i2RKiB2WLqR-rel5h2/view?usp=drive_link"
  },

  // =====================================================================
  // --- ENDOSURGERY ---
  // =====================================================================

  // --- ENDOSURGERY: ROBOTIC SURGICAL SYSTEM ---
  {
    id: "endo-rob-01",
    title: "Kangduo SR2000",
    subtitle: "Robotic Surgical System — Multi-Arm Endoscopic Console",
    category: "Endosurgery",
    image: "assets/hero_slider_robotic.png",
    specs: [
      "Sistem bedah robotik presisi tinggi dengan konsol ergonomis master controller",
      "Instrumen wristed 7-DOF dengan artikulasi multi-arah & tremor filter < 0.1 mm",
      "Sistem visualisasi 3D High-Definition stereoscopic view pembesaran hingga 10x",
      "Mendukung bedah minimal invasif urologi, ginekologi, digestif & bedah toraks",
      "AKL Kemenkes RI registered — Next-generation robotic surgery platform"
    ],
    brochure: "https://admin192000.wixsite.com/websynergymed/robotic-surgery"
  },

  // --- ENDOSURGERY: SURGICAL STAPLERS ---
  {
    id: "endo-stap-01",
    title: "Surgical Staplers Series",
    subtitle: "Endocutter & Circular Surgical Stapling Systems",
    category: "Endosurgery",
    image: "assets/hero_slider_surgery.png",
    specs: [
      "Endoscopic linear cutter & circular staplers dengan teknologi titanium staples",
      "Mekanisme tembakan halus satu tangan (one-handed firing) dengan tactile feedback",
      "Tersedia berbagai cartridge reload (vascular, standard, thick tissue)",
      "Hemostasis optimal dan garis jahitan jaringan yang rapat dan aman",
      "Ideal untuk prosedur bedah gastrointestinal, bariatrik, kolorektal & toraks"
    ],
    brochure: "https://drive.google.com/file/d/1MCzI94AxL1fhzFatoHS4wEpxKsBcfR_E/view"
  },

  // --- ENDOSURGERY: TROCAR & DISPOSABLE INSTRUMENTS ---
  {
    id: "endo-troc-01",
    title: "Trocar & Disposable Instruments",
    subtitle: "Optical Bladeless Trocar & Single-Use Laparoscopic Tools",
    category: "Endosurgery",
    image: "assets/synergymed_surgery_1785816546977.png",
    specs: [
      "Optical bladeless trocar transparan dengan fiksasi dinding perut yang stabil",
      "Universal seal kedap udara mendukung instrumen ukuran 5mm, 10mm, dan 12mm",
      "Tersedia laparoscopic graspers, dissectors, scissors, dan suction irrigation disposable",
      "Steril single-use untuk eliminasi risiko kontaminasi silang infeksi nosokomial",
      "Desain handle ergonomis memberikan kontrol sensitivitas sentuhan maksimal"
    ],
    brochure: "https://drive.google.com/file/d/1kClntUAcKJH8TGT4ojW1deRzeuQRCQBg/view"
  },

  // --- ENDOSURGERY: SURGICAL CLIPS ---
  {
    id: "endo-clip-01",
    title: "Surgical Clips & Appliers",
    subtitle: "Polymer & Titanium Hemostatic Ligation Clips",
    category: "Endosurgery",
    image: "assets/synergymed_surgery_1785816546977.png",
    specs: [
      "Klip ligasi hemostatik bahan polymer non-absorbable & titanium medis murni",
      "Mekanisme penguncian aman anti-slip dengan penutupan pembuluh darah presisi",
      "Radiolusen dan MRI-safe kompatibel tanpa artefak pencitraan",
      "Kompatibel dengan endoscopic clip applier ukuran 5mm & 10mm",
      "Tactile click feedback memastikan penutupan klip sempurna pada jaringan"
    ],
    brochure: "https://drive.google.com/file/d/1kClntUAcKJH8TGT4ojW1deRzeuQRCQBg/view"
  },

  // --- ENDOSURGERY: HERNIA MESH ---
  {
    id: "endo-mesh-01",
    title: "2D Mesh Implants",
    subtitle: "Polypropylene Surgical Hernia Mesh",
    category: "Endosurgery",
    image: "assets/synergymed_surgery_1785816546977.png",
    specs: [
      "Bahan monofilament polypropylene rajutan medis berkualitas tinggi",
      "Struktur 2D planar fleksibel dengan kekuatan tensil & elastisitas optimal",
      "Pori-pori makro terdistribusi merata untuk integrasi jaringan & fibroblas cepat",
      "Sensasi benda asing minimal dan tingkat penyusutan (shrinkage) sangat rendah",
      "Didesain untuk perbaikan hernia inguinal, ventral, dan insisional (open & laparoskopi)"
    ],
    brochure: null
  },

  // =====================================================================
  // --- MED SUPPLIES ---
  // =====================================================================

  // --- MED SUPPLIES: WOUND DRAINAGE RESERVOIR SYSTEM ---
  {
    id: "med-drain-01",
    title: "Wound Drainage Reservoir System",
    subtitle: "Closed Wound Suction Evacuator System",
    category: "Med Supplies",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Sistem drainase luka vakum tertutup (closed wound suction system)",
      "Reservoir silikon / PVC fleksibel dengan katup anti-refluks (one-way valve)",
      "Dilengkapi connecting tube transparan dan jarum trocar stainless steel",
      "Kapasitas penampungan cairan eksudat akurat dengan skala pengukuran jelas",
      "Mencegah infeksi silang dan mempercepat penyembuhan luka pasca operasi"
    ],
    brochure: "https://b1bb2b5c-e1f6-4d2f-850a-38c517b478a9.filesusr.com/ugd/6d5749_3bdf16bd0add4724914cc8c173aa8224.pdf"
  },

  // --- MED SUPPLIES: DISPOSABLE CHEST DRAINAGE BOTTLE ---
  {
    id: "med-cdb-01",
    title: "Chest Drainage Bottle - Double",
    subtitle: "Double Chamber Chest Drainage System",
    category: "Med Supplies",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Sistem drainase rongga dada ganda (Double Chamber water seal system)",
      "Pemisahan ruang pengumpulan eksudat (collection) dan water seal chamber",
      "Dilengkapi auto-pressure relief valve & indikator underwater seal",
      "Material polimer medis transparan tahan benturan dengan skala presisi",
      "Ideal untuk drainase toraks pasca operasi kardiotoraks dan trauma dada"
    ],
    brochure: "https://b1bb2b5c-e1f6-4d2f-850a-38c517b478a9.filesusr.com/ugd/6d5749_3bdf16bd0add4724914cc8c173aa8224.pdf"
  },
  {
    id: "med-cdb-02",
    title: "Chest Drainage Bottle - Single",
    subtitle: "Single Chamber Chest Drainage System",
    category: "Med Supplies",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Botol drainase dada chamber tunggal kompak & steril",
      "Underwater seal terintegrasi untuk mencegah pneumotoraks terbuka",
      "Skala kapasitas cairan tercetak jelas hingga 2000 ml",
      "Gantungan tempat tidur universal & dudukan lantai yang stabil",
      "Aman, mudah dioperasikan untuk penanganan darurat efusi pleura"
    ],
    brochure: "https://b1bb2b5c-e1f6-4d2f-850a-38c517b478a9.filesusr.com/ugd/6d5749_3bdf16bd0add4724914cc8c173aa8224.pdf"
  },
  {
    id: "med-cdb-03",
    title: "Chest Drainage Bottle - Three Classic",
    subtitle: "Three-Chamber Classic Chest Drainage System",
    category: "Med Supplies",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Desain klasik 3-ruang: Collection chamber, Water seal chamber & Suction control",
      "Regulasi tekanan hisap vakum stabil dan akurat",
      "Indikator kebocoran udara (air leak meter) terintegrasi",
      "Katup pelepas tekanan positif dan negatif otomatis",
      "Standar baku emas drainase pleura ruang ICU dan bedah toraks"
    ],
    brochure: "https://b1bb2b5c-e1f6-4d2f-850a-38c517b478a9.filesusr.com/ugd/6d5749_3bdf16bd0add4724914cc8c173aa8224.pdf"
  },
  {
    id: "med-cdb-04",
    title: "Chest Drainage Bottle - Three New",
    subtitle: "Three-Chamber Advanced Chest Drainage System",
    category: "Med Supplies",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Generasi terbaru unit drainase dada 3-ruang dengan sistem filter antibakteri",
      "Desain ergonomis anti-tumpah (anti-siphon & spill-proof valves)",
      "Indikator diagnostik presisi untuk pemantauan laju kebocoran udara pleura",
      "Kompatibel dengan semua jenis regulator suction sentral rumah sakit",
      "Sterilisasi gas EO grade medis dengan jaminan keamanan bio-kompatibel"
    ],
    brochure: "https://b1bb2b5c-e1f6-4d2f-850a-38c517b478a9.filesusr.com/ugd/6d5749_3bdf16bd0add4724914cc8c173aa8224.pdf"
  },

  // --- MED SUPPLIES: SUCTION LINER CANISTER BAG ---
  {
    id: "med-suc-01",
    title: "Suction Liner",
    subtitle: "Disposable Medical Suction Liner Bag",
    category: "Med Supplies",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Kantong penampung suction sekali pakai (disposable liner bag) steril & higienis",
      "Dilengkapi filter hidrofobik & katup shut-off otomatis anti-meluap (overflow protection)",
      "Opsi serbuk pemadat gel (solidifier agent) untuk keamanan pembuangan limbah B3 medis",
      "Port hisap dan sambungan tubing universal anti-bocor",
      "Tersedia kapasitas 1000ml, 1500ml, 2000ml, dan 3000ml"
    ],
    brochure: "https://b1bb2b5c-e1f6-4d2f-850a-38c517b478a9.filesusr.com/ugd/6d5749_3bdf16bd0add4724914cc8c173aa8224.pdf"
  },
  {
    id: "med-suc-02",
    title: "Suction Liner Canister",
    subtitle: "Reusable Outer Canister Bracket for Suction Liner",
    category: "Med Supplies",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Tabung canister luar transparan polikarbonat tahan banting (shatterproof)",
      "Skala ukur volume eksudat tercetak tebal dan jelas",
      "Bisa disterilisasi dan digunakan berulang kali dengan disposable liner",
      "Dilengkapi braket dinding dan cantolan rail unit hisap ruang OK / ICU",
      "Koneksi kedap udara memastikan kestabilan daya hisap vakum sentral"
    ],
    brochure: "https://b1bb2b5c-e1f6-4d2f-850a-38c517b478a9.filesusr.com/ugd/6d5749_3bdf16bd0add4724914cc8c173aa8224.pdf"
  },

  // --- MED SUPPLIES: ENDOTRACHEAL & RESPIRATORY CONSUMABLES ---
  {
    id: "med-endo-01",
    title: "Oxygen Tube",
    subtitle: "Medical Grade Oxygen Connecting Tube",
    category: "Med Supplies",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Selang oksigen medis transparan non-toxic PVC grade medis",
      "Desain lumen anti-kink (star lumen) menjaga aliran oksigen tetap lancar tanpa tertekuk",
      "Konektor corong lembut fleksibel kompatibel dengan flowmeter dan regulator O2",
      "Tersedia berbagai panjang selang (2m, 3m, 5m)",
      "Bebas DEHP dan tidak berbau menyengat untuk kenyamanan pasien"
    ],
    brochure: "https://b1bb2b5c-e1f6-4d2f-850a-38c517b478a9.filesusr.com/ugd/6d5749_3bdf16bd0add4724914cc8c173aa8224.pdf"
  },
  {
    id: "med-endo-02",
    title: "Nasal Oxygen Cannula",
    subtitle: "Soft Curved Tip Nasal Oxygen Cannula",
    category: "Med Supplies",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Kanul hidung oksigen dengan prong bengkok (curved soft prong) sangat lembut",
      "Mengurangi iritasi mukosa hidung dan daun telinga pada pemakaian jangka panjang",
      "Over-the-ear style dengan cincin pengatur ukuran yang mudah disesuaikan",
      "Tersedia ukuran dewasa (adult), anak (pediatric), dan bayi (neonatal)",
      "Kemasan steril per unit siap pakai di ruang rawat inap dan IGD"
    ],
    brochure: "https://b1bb2b5c-e1f6-4d2f-850a-38c517b478a9.filesusr.com/ugd/6d5749_3bdf16bd0add4724914cc8c173aa8224.pdf"
  },

  // --- MED SUPPLIES: SURGICAL GOWN & DRAPING SYSTEM ---
  {
    id: "med-gown-01",
    title: "Mask & Surgical Cap",
    subtitle: "Medical Protective Mask & Sterile Surgical Cap",
    category: "Med Supplies",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Masker bedah 3-ply / 4-ply dengan filtrasi efisiensi tinggi (BFE & PFE ≥ 99%)",
      "Surgical cap / nurse cap non-woven spunbond bernapas (breathable) & elastis",
      "Tahan terhadap percikan cairan darah dan droplet patogen",
      "Hypoallergenic, bebas lateks, dan tidak menyebabkan iritasi kulit",
      "Perlindungan standar kamar bedah operasi (OR) dan ruang isolasi"
    ],
    brochure: "https://b1bb2b5c-e1f6-4d2f-850a-38c517b478a9.filesusr.com/ugd/6d5749_3bdf16bd0add4724914cc8c173aa8224.pdf"
  },

  // =====================================================================
  // --- PAIN & REHAB ---
  // =====================================================================

  // --- PAIN & REHAB: HEAD & NECK SUPPORT ---
  {
    id: "pr-neck-01",
    title: "Universal Clinic Collar",
    subtitle: "Cervical Spine Support & Immobilization Collar",
    category: "Pain & Rehab",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Penyangga leher anatomis untuk imobilisasi servikal & pemulihan cedera leher",
      "Material busa densitas medium berpori dengan lapisan katun lembut ramah kulit",
      "Dilengkapi sistem perekat hook-and-loop untuk penyesuaian ukuran universal",
      "Membantu meredakan nyeri pada cervical spondylosis, whiplash injury, dan torticollis",
      "Ringan, nyaman dipakai sehari-hari dan mudah dibersihkan"
    ],
    brochure: null
  },

  // --- PAIN & REHAB: SHOULDER, ARM & WRIST SUPPORT ---
  {
    id: "pr-shld-01",
    title: "UltraSling® III",
    subtitle: "Shoulder Immobilization & Neutral Abduction Sling",
    category: "Pain & Rehab",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Penyangga bahu ergonomis dengan bantal abduksi netral (neutral abduction 10°-15°)",
      "Tali bahu berbusa empuk dengan distribusi beban merata untuk kenyamanan maksimal",
      "Bahan jala bernapas (breathable mesh fabric) memaksimalkan sirkulasi udara",
      "Ideal untuk pemulihan pasca operasi rotator cuff, dislokasi bahu, dan labral repair",
      "Dilengkapi stress ball terintegrasi untuk stimulasi sirkulasi darah otot lengan"
    ],
    brochure: null
  },
  {
    id: "pr-wrst-01",
    title: "Quick-Fit™ W.T.O.",
    subtitle: "Wrist-Thumb Orthosis (WTO) Support Brace",
    category: "Pain & Rehab",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Ortosis pergelangan tangan dan ibu jari (Wrist-Thumb Spica) imobilisasi presisi",
      "Dilengkapi stay palmar & dorsal aluminium yang dapat dibentuk secara anatomis",
      "Desain single-pull strap memudahkan pemakaian dan pengencangan mandiri satu tangan",
      "Efektif untuk penanganan De Quervain's tenosynovitis, carpal tunnel & sprain ligamen",
      "Material felt liner lembut dan breathable untuk kenyamanan pemakaian siang & malam"
    ],
    brochure: null
  },

  // --- PAIN & REHAB: SPINE & BACK SUPPORT ---
  {
    id: "pr-spin-01",
    title: "Immostrap®",
    subtitle: "Dynamic Lumbar & Postural Support Belt",
    category: "Pain & Rehab",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Korset lumbal dinamis dengan sistem tarikan ganda (double bilateral straps)",
      "Memberikan dekompresi dan stabilisasi optimal pada area lumbar spine (L1-S1)",
      "Struktur penyangga posterior ergonomis menyesuaikan kontur lordosis tulang belakang",
      "Meredakan nyeri pada low back pain akut/kronis, sciatica, dan disc herniation",
      "Bahan elastis tenun premium yang tipis, pas di bawah pakaian dan tidak mudah bergeser"
    ],
    brochure: null
  },
  {
    id: "pr-spin-02",
    title: "BB Exos® FORM® 626",
    subtitle: "Sagittal Lumbar Orthosis (LSO) Spinal Brace",
    category: "Pain & Rehab",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Brace tulang belakang lumbal LSO (Lumbar Sacral Orthosis) dengan teknologi Exos thermoformable",
      "Panel anterior dan posterior dapat disesuaikan untuk imobilisasi bidang sagital presisi",
      "Sistem pengencangan mekanis Boa® / micro-adjustable strap untuk kompresi seragam",
      "Indikasi untuk pasca laminektomi, spondylolisthesis, dan fraktur kompresi stabil",
      "Desain modular ringan yang higienis, tahan air (waterproof), dan mudah dicuci"
    ],
    brochure: null
  },
  {
    id: "pr-spin-03",
    title: "BB Exos® FORM® 631",
    subtitle: "Sagittal-Coronal Lumbar Spine Orthosis (LSO Plus)",
    category: "Pain & Rehab",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Ortosis spinal komprehensif untuk kontrol gerak sagital dan koronal (LSO Full Support)",
      "Dilengkapi panel lateral ekspansi untuk stabilitas lateral dan rotasi tulang belakang",
      "Memberikan penopang rigid dari vertebra torakolumbal hingga area sakrum",
      "Efektif untuk rehabilitasi fusi spinal, instabilitas lumbal kronis, dan stenosis spinal",
      "Panel thermoformable yang dapat dicetak ulang mengikuti bentuk anatomis spesifik pasien"
    ],
    brochure: null
  },

  // --- PAIN & REHAB: KNEE SUPPORT & OA BRACE ---
  {
    id: "pr-knee-01",
    title: "Action Hinged Knee Wrap",
    subtitle: "Bilateral Hinged Wrap-Around Knee Support",
    category: "Pain & Rehab",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Dukungan lutut model wrap-around dengan engsel bilateral baja polisentris",
      "Desain bukaan depan memudahkan pemasangan pada lutut bengkak atau lansia",
      "Mencegah hiperekstensi lutut dan memberikan stabilitas ligamen kolateral (MCL/LCL)",
      "Bantalan patela terbuka (open patella) dengan penstabil cincin untuk pelacakan patela",
      "Material neoprene kelas medis menjaga kehangatan sendi dan kompresi terapeutik"
    ],
    brochure: null
  },
  {
    id: "pr-knee-02",
    title: "Sport Hinged Knee Wrap",
    subtitle: "High-Performance Hinged Knee Stabilizer",
    category: "Pain & Rehab",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Stabilisator lutut berengsel untuk aktivitas olahraga dan rehabilitasi gerak dinamis",
      "Engsel aluminium ringan tahan korosi dengan kontrol batas ekstensi / fleksi",
      "Tali pengikat melingkar ganda untuk penahanan posisi stabil anti-merosot",
      "Mengurangi nyeri akibat cedera ligamen, meniskus, dan instabilitas kronis",
      "Kain kompresi fleksibel dan bernapas, nyaman digunakan saat latihan intensif"
    ],
    brochure: null
  },
  {
    id: "pr-knee-03",
    title: "Drytex Lateral J",
    subtitle: "Patellofemoral Tracking Knee Brace with J-Buttress",
    category: "Pain & Rehab",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Brace lutut khusus disfungsi pelacakan patela dan instabilitas patelofemoral",
      "Dilengkapi bantalan penahan tubular lateral berbentuk huruf 'J' (J-Buttress)",
      "Tali tarikan medial membantu koreksi subluksasi dan dislokasi patela",
      "Material Drytex alternatif neoprene yang bebas lateks, sejuk, dan tidak lembap",
      "Ideal untuk patellar tendonitis, chondromalacia, dan pelari / atlet aktif"
    ],
    brochure: null
  },
  {
    id: "pr-knee-04",
    title: "X-ROM Post Op (Knee Brace Universal)",
    subtitle: "Post-Operative Range-of-Motion (ROM) Knee Brace",
    category: "Pain & Rehab",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Brace lutut pasca operasi teleskopik dengan pengaturan Range-of-Motion (ROM) presisi",
      "Engsel pengatur sudut fleksi (0°-120°) dan ekstensi (0°-90°) dengan sistem quick-lock",
      "Panjang lengan teleskopik (slider bar) yang dapat disesuaikan tinggi badan pasien",
      "Bantalan busa berkontur anti-slip memberikan kenyamanan fiksasi jangka panjang",
      "Protokol standar untuk pemulihan rekonstruksi ACL/PCL/MCL dan perbaikan meniskus"
    ],
    brochure: null
  },

  // --- PAIN & REHAB: FOOT, ANKLE & LOWER LIMB SUPPORT ---
  {
    id: "pr-foot-01",
    title: "AirSelect® Short",
    subtitle: "Short Pneumatic Walking Boot & Fracture Cast",
    category: "Pain & Rehab",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Sepatu boot gips berjalan pneumatik tipe pendek untuk cedera kaki depan & pergelangan kaki",
      "Sistem pompa udara terintegrasi (integrated air pump) untuk kustomisasi kompresi individual",
      "Sol luar rocker-bottom ergonomis memfasilitasi pola jalan natural dan meredam benturan",
      "Panel berventilasi semi-rigid untuk perlindungan kokoh dan kenyamanan bernapas",
      "Diindikasikan untuk fraktur metatarsal, pasca operasi bunionektomi, dan sprain pergelangan kaki"
    ],
    brochure: null
  },
  {
    id: "pr-foot-02",
    title: "AirSelect® Standard",
    subtitle: "Full-Length Pneumatic Walking Boot",
    category: "Pain & Rehab",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Sepatu boot gips berjalan pneumatik tinggi untuk imobilisasi komprehensif tungkai bawah",
      "Dua sel udara bilateral yang dapat dikompresi secara terpisah untuk reduksi edema optimal",
      "Cangkang luar semi-rigid memberikan proteksi maksimal pengganti gips konvensional",
      "Teknologi SoftStrike menyerap hentakan tumit saat menapak dan berjalan",
      "Standar rehabilitasi fraktur fibula/tibia distal, ruptur tendon achilles, dan sprain grade III"
    ],
    brochure: null
  },
  {
    id: "pr-foot-03",
    title: "A60® Ankle Support",
    subtitle: "Prophylactic Sports Ankle Stabilizer",
    category: "Pain & Rehab",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Penyangga pergelangan kaki profil ramping yang dirancang dengan sudut 60 derajat",
      "Memberikan proteksi maksimal terhadap cedera inversi / terkilir tanpa membatasi kelincahan",
      "Desain single-strap memudahkan pemakaian cepat tanpa tali rumit",
      "Sangat tipis, pas dan nyaman masuk ke dalam sepatu olahraga atau sepatu kasual",
      "Bahan Breath-O-Prene® menjaga kaki tetap sejuk, kering, dan higienis"
    ],
    brochure: null
  },
  {
    id: "pr-foot-04",
    title: "Air-Stirrup® Ankle Brace",
    subtitle: "Pneumatic Ankle Stirrup with Duplex™ Air-Cell",
    category: "Pain & Rehab",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Brace pergelangan kaki stirrup legendaris dengan sistem kantong udara Duplex™ ganda",
      "Menghasilkan kompresi pulsatil saat berjalan untuk mempercepat resolusi pembengkakan (edema)",
      "Cangkang samping anatomis membatasi gerakan inversi/eversi sambil mempertahankan dorsofleksi",
      "Baku emas medis untuk pemulihan sprain pergelangan kaki akut dan instabilitas ligamen",
      "Dapat dikenakan langsung dengan kaos kaki dan sepatu sneakers"
    ],
    brochure: null
  },
  {
    id: "pr-foot-05",
    title: "Air Heel®",
    subtitle: "Plantar Fasciitis & Achilles Tendonitis Support",
    category: "Pain & Rehab",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Penyangga pneumatik khusus untuk meredakan nyeri tumit, plantar fasciitis, dan tendinitis achilles",
      "Dua bantalan udara interkoneksi di bawah tumit dan di belakang tendon achilles",
      "Memberikan kompresi komparatif dinamis yang memijat dan meredakan ketegangan fasia setiap melangkah",
      "Desain slip-on yang ringan, ringkas, dan sangat mudah digunakan",
      "Bahan kain elastis antimikroba yang nyaman dipakai seharian di dalam sepatu"
    ],
    brochure: null
  },

  // =====================================================================
  // --- ORTHO & NEURO ---
  // =====================================================================

  // --- ORTHO & NEURO: ARTHROPLASTY ---
  {
    id: "on-arthro-01",
    title: "Arthroplasty System",
    subtitle: "Total Hip & Knee Arthroplasty Implant Solutions",
    category: "Ortho & Neuro",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Sistem implan penggantian sendi panggul (Total Hip) & lutut (Total Knee) tingkat lanjut",
      "Material bio-kompatibel premium: Titanium alloy, CoCrMo, dan Cross-linked Polyethylene (XLPE)",
      "Desain femoral stem anatomis dengan fiksasi press-fit hidroksiapatit (HA-coated) optimal",
      "Stabilitas sendi maksimal, meminimalkan aus partikel (wear rate), dan memperpanjang usia implan",
      "Dilengkapi set instrumen presisi ergonomis untuk efisiensi prosedur intraoperatif bedah ortopedi"
    ],
    brochure: "https://drive.google.com/file/d/1HN9X5txcYN4hds4C-Cy70oNJ5YGw2NCM/view"
  },

  // --- ORTHO & NEURO: ARTHROSCOPY SYSTEM ---
  {
    id: "on-as-01",
    title: "ACL Reconstruction Solution",
    subtitle: "Arthroscopic Anterior Cruciate Ligament (ACL) Reconstruction",
    category: "Ortho & Neuro",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Solusi fiksasi rekonstruksi ligamen ACL dengan adjustable loop cortical button & interference screw",
      "Mekanisme penguncian kuat dengan daya tahan tarik (tensile strength) tinggi dan elongation minimal",
      "Kompatibel untuk teknik autograft hamstring tendon, BTB (bone-tendon-bone), dan allograft",
      "Memastikan integrasi fiksasi graft-to-bone yang kokoh dan mempercepat pemulihan stabilitas lutut",
      "Dilengkapi drill guide anatomis dan instrumen pasase graft berpresisi tinggi"
    ],
    brochure: "https://drive.google.com/file/d/1YJwsTFsNrC_POdZlTV2vuBtcvjw_ZuG2/view"
  },
  {
    id: "on-as-02",
    title: "Meniscus Repair Solution",
    subtitle: "Arthroscopic All-Inside Meniscus Repair System",
    category: "Ortho & Neuro",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Sistem perbaikan robekan meniskus all-inside dengan implan fiksasi PEEK / suture anchor ultra-low profile",
      "Penetrasi jarum yang ramping dan atraumatik untuk melindungi struktur neurovaskular posterior",
      "Benang suture berkekuatan tinggi (UHMWPE) dengan knot-less locking yang rapat dan presisi",
      "Cocok untuk penanganan robekan meniskus zona red-red dan red-white",
      "Mempersingkat waktu operasi artroskopi lutut dan meminimalkan trauma jaringan sekitar"
    ],
    brochure: "https://drive.google.com/file/d/1YJwsTFsNrC_POdZlTV2vuBtcvjw_ZuG2/view"
  },
  {
    id: "on-as-03",
    title: "Bankart Repair Solution",
    subtitle: "Arthroscopic Glenoid Bankart Shoulder Repair System",
    category: "Ortho & Neuro",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Solusi restorasi labrum glenoid pada instabilitas sendi bahu anterior (Bankart Lesion)",
      "Suture anchor bio-absorbable / PEEK dengan daya fiksasi tulang kortikal superior",
      "Jarum inserter berprofil mikro untuk visualisasi dan penempatan anchor optimal di bibir glenoid",
      "Memberikan aproksimasi jaringan labrum ke tepi tulang tanpa risiko osteolisis",
      "Dilengkapi suture retriever, knot pusher, dan rasp artroskopi bahu khusus"
    ],
    brochure: "https://drive.google.com/file/d/1YJwsTFsNrC_POdZlTV2vuBtcvjw_ZuG2/view"
  },
  {
    id: "on-as-04",
    title: "Rotator Cuff Repair Solution",
    subtitle: "Suture Anchor Rotator Cuff Tendon Fixation Solution",
    category: "Ortho & Neuro",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Sistem rekoneksi tendon supraspinatus / rotator cuff dengan teknik single-row & double-row suture bridge",
      "Implan suture anchor beralur ganda (fully threaded) dengan pull-out strength maksimal pada tuberositas mayor",
      "Kombinasi benang jahitan braided non-absorbable untuk kompresi tendon-to-bone footprint merata",
      "Mengurangi tegangan puncak jahitan dan menurunkan risiko robekan ulang pasca operasi",
      "Instrumen punch, tap, dan driver ergonomis untuk penetrasi tulang yang terkontrol"
    ],
    brochure: "https://drive.google.com/file/d/1YJwsTFsNrC_POdZlTV2vuBtcvjw_ZuG2/view"
  },

  // --- ORTHO & NEURO: ARTHROSCOPY TOWER ---
  {
    id: "on-tow-01",
    title: "Arthroscopy Tower",
    subtitle: "4K UHD Endoscopic Arthroscopy Imaging & Shaver Workstation",
    category: "Ortho & Neuro",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Tower sistem visualisasi artroskopi 4K Ultra-HD dengan kamera endoskopik sensitivitas tinggi",
      "Sumber cahaya LED medis dingin dengan saturasi warna natural dan pencahayaan rongga sendi optimal",
      "Sistem pompa irigasi artroskopi (arthroscopy fluid pump) dengan kontrol tekanan & debit otomatis",
      "Integrated shaver & RF electrocution resection console untuk debridement jaringan sendi cepat",
      "Sistem perekaman dan dokumentasi medis digital terintegrasi langsung ke PACS / HIS rumah sakit"
    ],
    brochure: "https://drive.google.com/file/d/1K8-nkII-_XbqEf2_w3K0tznJ39-uD9gc/view"
  },

  // --- ORTHO & NEURO: ENDOSPINE ---
  {
    id: "on-endo-01",
    title: "Endospine",
    subtitle: "Full-Endoscopic Spine Surgery System (Transforaminal & Interlaminar)",
    category: "Ortho & Neuro",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Sistem bedah endoskopi tulang belakang minimal invasif (Full-Endoscopic Spine Surgery)",
      "Mendukung pendekatan transforaminal, interlaminar, dan unilateral biportal endoscopy (UBE)",
      "Visualisasi sudut lebar definisi tinggi untuk disektomi, foraminotomi, dan dekompresi stenosis kanal",
      "Instrumen mikro khusus (bone reamer, endoscopic punch, radiofrequency bipolar probe, dan burr)",
      "Meminimalkan kerusakan otot paraspinal, perdarahan intraoperatif, dan mempercepat pemulihan pasien"
    ],
    brochure: "https://drive.google.com/file/d/1Uhan0O-88su42nwgqOAH8iF_xrIJ31UG/view"
  },

  // --- ORTHO & NEURO: SPINE ---
  {
    id: "on-spin-01",
    title: "MIS Spine System",
    subtitle: "Minimally Invasive Spine Pedicle Screw & Rod Fixation",
    category: "Ortho & Neuro",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Sistem stabilisasi tulang belakang perkutan torakolumbal minimal invasif (Percutaneous MIS)",
      "Sekrup pedikel kanulasi (cannulated polyaxial pedicle screws) dengan guide sleeve self-holding",
      "Teknik rod insertion percutaneus yang mulus tanpa diseksi otot terbuka secara luas",
      "Mengurangi nyeri pasca bedah, risiko infeksi luka, serta kehilangan darah selama operasi",
      "Kompatibel dengan panduan navigasi bedah spine dan fluoroskopi C-Arm real-time"
    ],
    brochure: "https://drive.google.com/file/d/1sAA5HMO9uflBGxZq51Y-LvG3vXOVVfGf/view"
  },
  {
    id: "on-spin-02",
    title: "Oblique Lateral Interbody Fusion Cage",
    subtitle: "OLIF Interbody Fusion PEEK Cage System",
    category: "Ortho & Neuro",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Implan fusi antar-korpus vertebra lateral oblik (OLIF) bahan bio-inert Radiopaque PEEK",
      "Jendela fusi tulang (bone graft window) ekstra besar untuk fusi osteogenesis maksimal",
      "Menyediakan koreksi kelengkungan lordosis lumbal dan dekompresi foramen indirek",
      "Dilengkapi penanda tantalum x-ray untuk verifikasi posisi intraoperatif akurat",
      "Tersedia berbagai pilihan sudut lordotik dan variasi ketinggian diskus"
    ],
    brochure: "https://drive.google.com/file/d/1sAA5HMO9uflBGxZq51Y-LvG3vXOVVfGf/view"
  },
  {
    id: "on-spin-03",
    title: "Spine GSS I System",
    subtitle: "General Spinal System (GSS I) Posterior Fixation",
    category: "Ortho & Neuro",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Sistem fiksasi fusi spinal posterior komprehensif untuk vertebra thoracolumbar & lumbosacral",
      "Sekrup pedikel monoaksial & poliaksial dengan daya penguncian ulir buttress thread anti-cross threading",
      "Batang titanium (titanium rods), transverse crosslink, dan set screw berkekuatan tinggi",
      "Efektif untuk deformitas tulang belakang (skoliosis/kifosis), trauma fraktur, spondylolisthesis, dan tumor",
      "Instrumen reduksi, kompresi, dan distraksi ergonomis untuk kontrol biomekanik optimal"
    ],
    brochure: "https://drive.google.com/file/d/1sAA5HMO9uflBGxZq51Y-LvG3vXOVVfGf/view"
  },
  {
    id: "on-spin-04",
    title: "Anterior Cervical Intervertebral Locking Cage",
    subtitle: "Zero-Profile Stand-Alone Anterior Cervical Fusion Cage",
    category: "Ortho & Neuro",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Implan fusi servikal anterior stand-alone (Zero-Profile ACDF Cage) dengan sekrup pengunci terintegrasi",
      "Tidak menonjol ke luar korpus vertebra untuk mencegah disfagia (sulit menelan) pasca operasi",
      "Bahan PEEK dengan modul elastisitas mendekati tulang kortikal manusia untuk mencegah subsidence",
      "Stabilitas fiksasi tri-kortikal langsung tanpa memerlukan plate anterior tambahan",
      "Mengembalikan tinggi ruang diskus servikal dan kelengkungan lordosis fisiologis leher"
    ],
    brochure: "https://drive.google.com/file/d/1sAA5HMO9uflBGxZq51Y-LvG3vXOVVfGf/view"
  },

  // --- ORTHO & NEURO: TRAUMA ---
  {
    id: "on-trauma-01",
    title: "Proximal Femoral Locking Plate",
    subtitle: "Titanium Proximal Femur Anatomical Locking Compression Plate",
    category: "Ortho & Neuro",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Plat fiksasi fraktur anatomis untuk regio femur proksimal, intertrokanterik, dan subtrokanterik",
      "Konfigurasi multi-screw pengunci sudut tetap (fixed-angle locking) menahan gaya beban varus tinggi",
      "Material paduan titanium medis (Ti-6Al-4V) dengan biokompatibilitas dan kekuatan fatigue superior",
      "Desain ujung plat tapered memudahkan penyisipan submuskular teknik minimally invasive MIPO",
      "Kombinasi lubang dinamis kompresi (LCP) mendukung fiksasi kompresi absolut maupun jembatan (bridge)"
    ],
    brochure: "https://drive.google.com/file/d/1JLlJI4UDwINr8An1hTtJl-B_IReJxTId/view"
  },
  {
    id: "on-trauma-02",
    title: "Advance Humeral Nail",
    subtitle: "Intramedullary Humeral Interlocking Nail System",
    category: "Ortho & Neuro",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Nail intrameduler titanium untuk fiksasi fraktur shaft dan proksimal humerus",
      "Mendukung opsi insersi antegrade dan retrograde dengan panduan bidik (targeting guide) presisi",
      "Konfigurasi sekrup pengunci multi-planar proksimal dan distal untuk stabilitas rotasi maksimal",
      "Mempertahankan periosteum dan suplai vaskular hematoma fraktur untuk percepatan osteogenesis",
      "Instrumen kanulasi yang kompatibel dengan guide wire dan teknik fiksasi tertutup"
    ],
    brochure: "https://drive.google.com/file/d/1JLlJI4UDwINr8An1hTtJl-B_IReJxTId/view"
  },
  {
    id: "on-trauma-03",
    title: "Titanium Elastic Nail",
    subtitle: "Flexible Titanium Elastic Nail (TEN) for Long Bone Trauma",
    category: "Ortho & Neuro",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Nail elastis fleksibel titanium untuk penanganan fraktur diafisis tulang panjang pediatrik dan dewasa",
      "Prinsip biomekanik stabilisasi elastis tiga titik (three-point dynamic bracing)",
      "Ujung bullet tip melengkung memfasilitasi navigasi kanalis medularis tanpa menembus korteks",
      "Minimal invasif dengan insersi entry point ekstra-artikular yang aman bagi lempeng pertumbuhan (physis)",
      "Tersedia berbagai diameter (1.5mm - 4.0mm) dengan pengenal warna anodized"
    ],
    brochure: "https://drive.google.com/file/d/1JLlJI4UDwINr8An1hTtJl-B_IReJxTId/view"
  },
  {
    id: "on-trauma-04",
    title: "Distal Humeral Locking Plate",
    subtitle: "Anatomical Distal Humerus Medial & Lateral Locking Compression Plate",
    category: "Ortho & Neuro",
    image: "assets/synergymed_hero_1785816523979.png",
    specs: [
      "Sistem plat anatomis ganda (orthogonal / parallel plating) untuk fraktur humerus distal dan intra-artikular",
      "Kontur plat pra-bentuk mengikuti morfologi kolumna medial dan lateral siku secara presisi",
      "Penempatan sekrup pengunci subkondilar multipel untuk rekonsiliasi fragmen artikular fossa olekrani",
      "Profil plat ultra-low contact untuk menjaga perfusi periosteal dan mencegah iritasi jaringan lunak",
      "Mendukung mobilisasi dini sendi siku pasca reduksi fraktur kompleks AO Tipe C"
    ],
    brochure: "https://drive.google.com/file/d/1JLlJI4UDwINr8An1hTtJl-B_IReJxTId/view"
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



