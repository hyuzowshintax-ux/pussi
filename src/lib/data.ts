import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  // Informasi Profil Utama
  profile: {
    name: "Samuel B K",
    roles: [
      "Pelajar",
      "Pelajar IT & Pemrograman",
      "Pelajar Web Development"
    ],
    tagline: "Seorang pelajar yang bersemangat mempelajari teknologi web modern, antusias mengeksplorasi AI, dan terus berkembang dalam membangun solusi digital.",
    aboutShort: "Halo! Saya Samuel B K, seorang pelajar yang penuh antusiasme dan dedikasi untuk terus belajar, mengeksplorasi teknologi baru, dan menciptakan proyek-proyek kreatif.",
    avatarUrl: "/profile.jpg",
    location: "Kediri, Jawa Timur, Indonesia",
    email: "hyuzowshintax@gmail.com",
    phone: "08133726102",
    status: "AI Design Engineer",
    cvLink: "#",
    socials: {
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/",
      dribbble: "https://dribbble.com/"
    }
  },

  // Statistik & Pencapaian
  stats: [
    { number: "5+", label: "Tahun Pengalaman", iconName: "Briefcase" },
    { number: "45+", label: "Proyek Selesai", iconName: "CheckCircle2" },
    { number: "100%", label: "Tingkat Kepuasan", iconName: "Award" }
  ],

  // Tentang Saya
  about: {
    bio: [
      "Saya adalah seorang pelajar yang memiliki rasa ingin tahu tinggi dan komitmen kuat untuk terus memperdalam dunia pemrograman dan teknologi digital.",
      "Saya aktif belajar praktik coding modern, membangun antarmuka web yang rapi, serta mengeksplorasi pengembangan aplikasi mobile dan integrasi kecerdasan buatan (AI)."
    ],
    details: [
      { label: "Nama Lengkap", value: "Samuel B K" },
      { label: "Domisili", value: "Kediri, Jawa Timur, Indonesia" },
      { label: "Status", value: "AI Design Engineer" },
      { label: "Bahasa", value: "Indonesia, Jawa, Inggris" }
    ]
  },

  // Keahlian (Skills)
  skills: [
    {
      category: "Frontend",
      title: "Frontend Development",
      iconName: "Code2",
      items: [
        { name: "Next.js / React", level: 90, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "TypeScript", level: 85, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Tailwind CSS", level: 95, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "HTML5 / CSS3", level: 95, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "JavaScript", level: 90, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
      ]
    },
    {
      category: "AI",
      title: "Kecerdasan Buatan (Artificial Intelligence)",
      iconName: "Brain",
      items: [
        { name: "Prompt Engineering & LLM", level: 45, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Generative AI & Image Gen", level: 48, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "Machine Learning Dasar", level: 40, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
        { name: "Computer Vision & OCR", level: 35, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
        { name: "Speech & Whisper AI", level: 32, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "Deep Learning & Neural Net", level: 25, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" }
      ]
    },
    {
      category: "Backend",
      title: "Backend & Database",
      iconName: "Server",
      items: [
        { name: "Node.js", level: 85, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "PostgreSQL", level: 80, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "RESTful API", level: 90, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" }
      ]
    },
    {
      category: "Tools",
      title: "Tools & Workflow",
      iconName: "Wrench",
      items: [
        { name: "Git & GitHub", level: 90, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "VS Code", level: 95, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Figma", level: 80, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
      ]
    }
  ],

  // Proyek Portofolio Terpilih
  projects: [
    {
      id: 1,
      title: "Intelegensia AI – Asisten Belajar & Kuis Pintar Pelajar",
      category: "web",
      categoryLabel: "AI & Web App",
      featured: true,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
      description: "Platform pendamping belajar cerdas bertenaga AI untuk siswa SMA, dilengkapi generator kuis otomatis, ringkasan materi, dan penjelasan konsep ilmiah.",
      fullDescription: "Intelegensia AI adalah solusi digital inovatif yang dirancang oleh Samuel untuk membantu sesama pelajar memahami materi pelajaran secara interaktif. Memanfaatkan model AI generasi terbaru dengan Prompt Engineering terarah, aplikasi ini mampu menghasilkan latihan soal bertingkat dan menyederhanakan materi rumit.",
      tags: ["Next.js", "Gemini AI API", "Tailwind CSS", "TypeScript", "Prompt Engineering"],
      demoUrl: "https://github.com/hyuzowshintax-ux/pussi",
      githubUrl: "https://github.com/hyuzowshintax-ux/pussi",
      highlights: [
        "Generator Kuis Pintar berbasis Silabus Kurikulum SMA",
        "Rangkuman Materi & Flashcards Otomatis",
        "Prompt Engineering Teroptimasi untuk Siswa",
        "Tampilan Bersih & Responsif Mobile"
      ]
    },
    {
      id: 2,
      title: "ScoutPulse & CODASKA LKBB Visualizer",
      category: "web",
      categoryLabel: "Web & Interactive Tool",
      featured: true,
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
      description: "Aplikasi interaktif digital untuk perancangan formasi variasi baris-berbaris (LKBB) dan pemantauan kecakapan kepramukaan (SKU/SKK).",
      fullDescription: "ScoutPulse mempermudah pengurus organisasi CODASKA dan kepramukaan dalam memetakan formasi pasukan, menyusun pola langkah baris-berbaris, serta memonitor pencapaian Syarat Kecakapan Umum (SKU) secara terstruktur.",
      tags: ["React", "HTML5 Canvas", "Tailwind CSS", "Scouting SKU", "LKBB Formasi"],
      demoUrl: "https://github.com/hyuzowshintax-ux/pussi",
      githubUrl: "https://github.com/hyuzowshintax-ux/pussi",
      highlights: [
        "Simulasi 2D Grid Formasi Pasukan LKBB",
        "Tracker Syarat Kecakapan Pramuka (SKU/SKK)",
        "Visualisasi Gerakan & Pola Langkah Pleton",
        "Export Diagram Formasi Pasukan"
      ]
    },
    {
      id: 3,
      title: "AuraDesign AI – Studio Desain Prompt & UI Generator",
      category: "uiux",
      categoryLabel: "AI Design & UI/UX",
      featured: false,
      image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&q=80&w=800",
      description: "Alat bantu desainer dan pelajar untuk eksplorasi mockup UI, kombinasi palet warna glassmorphism, dan prompt engineering visual modern.",
      fullDescription: "AuraDesign AI memadukan prinsip antarmuka modern dengan kecerdasan buatan, memungkinkan pengguna bereksperimen dengan palet warna kosmik, efek glassmorphism berkedalaman, serta tata letak landing page estetis.",
      tags: ["Figma", "Generative AI", "Tailwind CSS", "UI/UX", "Prompt Engineering"],
      demoUrl: "https://github.com/hyuzowshintax-ux/pussi",
      githubUrl: "https://github.com/hyuzowshintax-ux/pussi",
      highlights: [
        "Generator Komponen UI Glassmorphism",
        "AI Visual Prompt Enhancer",
        "Color Palette Contrast Analyzer",
        "Export Kode Tailwind CSS Instan"
      ]
    },
    {
      id: 4,
      title: "Kamtibmas Guard – Portal Tanggap Disiplin & Edukasi Siswa",
      category: "backend",
      categoryLabel: "Web Portal & Security",
      featured: false,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      description: "Portal berbasis web terintegrasi untuk edukasi kesadaran hukum, kedisiplinan pelajar, dan panduan pertolongan pertama terinspirasi dari SAKA Bhayangkara.",
      fullDescription: "Kamtibmas Guard adalah inisiatif digital untuk memperkuat literasi hukum pelajar, panduan pertolongan pertama (P3K), penanganan darurat kecelakaan, serta sosialisasi pencegahan kenakalan remaja.",
      tags: ["Node.js", "PostgreSQL", "RESTful API", "SAKA Bhayangkara", "Kamtibmas"],
      demoUrl: "https://github.com/hyuzowshintax-ux/pussi",
      githubUrl: "https://github.com/hyuzowshintax-ux/pussi",
      highlights: [
        "Modul Interaktif Edukasi Hukum Siswa",
        "Panduan Tanggap Darurat & P3K Pramuka",
        "Sistem Laporan & Konsultasi Tertutup",
        "Role-based Access Control"
      ]
    }
  ],

  // Riwayat Pengalaman, Organisasi, & Prestasi
  timeline: {
    experience: [
      {
        period: "2025 - 2026",
        role: "Duta Intelegensia",
        company: "SMAN 1 Kandangan",
        location: "Kandangan, Kediri",
        description: "Terpilih sebagai Duta Intelegensia di SMAN 1 Kandangan periode tahun 2025 - 2026 sebagai representasi teladan siswa berprestasi, berwawasan luas, berdaya pikir kritis, serta aktif berkontribusi dalam kegiatan akademik dan sosial sekolah.",
        skills: ["Duta Intelegensia", "Public Speaking", "Problem Solving", "Kepemimpinan Sekolah", "Integritas"],
        logoUrl: "/badges/duta-intelegensia.svg"
      },
      {
        period: "2024 - Sekarang",
        role: "Pramuka Penegak Bantara & SAKA Bhayangkara",
        company: "Ambalan SMAN 1 Kandangan & Satuan Karya Bhayangkara",
        location: "Kediri, Jawa Timur",
        description: "Aktif sebagai Pramuka Penegak Bantara yang memimpin kegiatan kepramukaan sejak tahun 2024, serta mendalami ilmu ketertiban masyarakat, kepolisian, kedisiplinan hukum, dan tanggap darurat melalui SAKA Bhayangkara.",
        skills: ["Penegak Bantara", "SAKA Bhayangkara", "Kamtibmas", "Kepemimpinan Lapangan", "Tanggap Darurat"],
        logoUrl: "/badges/pramuka-bantara-bhayangkara.svg"
      },
      {
        period: "2024 - Sekarang",
        role: "Anggota Aktif Organisasi CODASKA (LKBB)",
        company: "CODASKA - SMAN 1 Kandangan",
        location: "Kandangan, Kediri",
        description: "Sangat aktif dalam organisasi PBB/LKBB CODASKA di lingkungan SMAN 1 Kandangan sejak tahun 2024, menjalani latihan formasi variasi baris-berbaris, ketahanan mental, serta memimpin koordinasi pleton.",
        skills: ["CODASKA", "LKBB", "Formasi Variasi PBB", "Koordinasi Pleton", "Kedisiplinan Tinggi"],
        logoUrl: "/badges/codaska-lkbb.svg"
      },
      {
        period: "2026",
        role: "Kontingen LBB Kab. Kediri Tingkat Pelajar",
        company: "LBB Kabupaten Kediri",
        location: "Kediri, Jawa Timur",
        description: "Mengikuti dan berpartisipasi dalam Lomba Baris-Berbaris (LBB) tingkat pelajar se-Kabupaten Kediri dengan menampilkan ketegasan formasi PBB, kekompakan barisan, dan ketangkasan gerak pleton.",
        skills: ["Formasi PBB", "Ketangkasan Baris-Berbaris", "Kekompakan Pleton", "Kepemimpinan Regu", "Kedisiplinan"],
        logoUrl: "/badges/lbb-kediri.svg"
      },
      {
        period: "2024",
        role: "Anggota Paskibra Kecamatan Kandangan",
        company: "Paskibra Kec. Kandangan, Kab. Kediri",
        location: "Kandangan, Kediri",
        description: "Bertugas dan berdedikasi sebagai Pasukan Pengibar Bendera (Paskibra) tingkat Kecamatan Kandangan tahun 2024 dalam upacara kenegaraan dengan kedisiplinan tinggi, ketahanan fisik, dan integritas kepemimpinan.",
        skills: ["Paskibra", "Kedisiplinan Tinggi", "Ketahanan Fisik & Mental", "Kerjasama Tim", "Nasionalisme"],
        logoUrl: "/badges/paskibra-kandangan.svg"
      },
      {
        period: "2023",
        role: "Pramuka Garuda Penggalang",
        company: "Gerakan Pramuka Indonesia",
        location: "Indonesia",
        description: "Meraih tingkatan tertinggi Pramuka Penggalang (Pramuka Garuda) tahun 2023 melalui uji keteladanan, kepemimpinan regu, kecakapan umum & khusus, kedisiplinan, serta pengabdian masyarakat.",
        skills: ["Kepemimpinan", "Kerjasama Tim", "Kedisiplinan", "Survival & Scouting", "Karakter & Etika"],
        logoUrl: "/badges/pramuka-garuda.svg"
      }
    ],
    education: [
      {
        period: "2024 - Sekarang",
        degree: "Pelajar / Siswa (SMA)",
        institution: "SMAN 1 Kandangan",
        location: "Kandangan, Kab. Kediri",
        description: "Menempuh jenjang pendidikan tingkat menengah atas, aktif dalam pengembangan akademik, menyandang amanah Duta Intelegensia, serta berprestasi dalam organisasi kepanduan (Penegak Bantara & SAKA Bhayangkara) dan baris-berbaris (CODASKA).",
        logoUrl: "/badges/sman1-kandangan.svg"
      },
      {
        period: "2021 - 2024",
        degree: "Siswa / Alumni (SMP)",
        institution: "SMPN 2 Kasembon",
        location: "Kasembon, Kab. Malang",
        description: "Menyelesaikan pendidikan menengah pertama dengan rekam jejak aktif kepanduan hingga dinobatkan meraih predikat Pramuka Garuda Penggalang (2023) serta aktif dalam kegiatan kepemimpinan siswa.",
        logoUrl: "/badges/smpn2-kasembon.svg"
      },
      {
        period: "2015 - 2021",
        degree: "Siswa / Alumni (SD)",
        institution: "SD Katolik Santo Yusup Karang Pilang Surabaya",
        location: "Karangpilang, Kota Surabaya",
        description: "Menempuh dan menuntaskan jenjang pendidikan dasar dengan penanaman karakter disiplin, budi pekerti, integritas, dan pondasi kepemimpinan.",
        logoUrl: "/badges/sd-santoyusup.svg"
      }
    ]
  },

  // Galeri Piagam & Sertifikat Digital (Trophy Room)
  certificates: [
    {
      id: "cert-duta",
      title: "Duta Intelegensia SMAN 1 Kandangan",
      issuer: "SMAN 1 Kandangan",
      year: "2025",
      category: "Prestasi Akademik & Intelektual",
      badgeUrl: "/badges/duta-intelegensia.svg",
      description: "Penghargaan dan amanah tertinggi sebagai Duta Intelegensia atas prestasi akademik teladan, kecakapan public speaking, serta nalar kritis.",
      credentialId: "DUTA-INT-SMAN1-2025"
    },
    {
      id: "cert-garuda",
      title: "Pramuka Garuda Tingkat Penggalang",
      issuer: "Kwartir Gerakan Pramuka",
      year: "2023",
      category: "Penghargaan Tertinggi Kepanduan",
      badgeUrl: "/badges/pramuka-garuda.svg",
      description: "Penghargaan tertinggi Pramuka Penggalang (Pramuka Garuda) melalui uji keteladanan, pengabdian masyarakat, serta kecakapan khusus.",
      credentialId: "PG-PENGGALANG-2023-ID"
    },
    {
      id: "cert-paskibra",
      title: "Pasukan Pengibar Bendera (Paskibra)",
      issuer: "Kecamatan Kandangan, Kab. Kediri",
      year: "2024",
      category: "Kedisiplinan & Nasionalisme",
      badgeUrl: "/badges/paskibra-kandangan.svg",
      description: "Piagam penugasan dan pengabdian sebagai anggota Pasukan Pengibar Bendera dalam upacara peringatan HUT Kemerdekaan RI.",
      credentialId: "PASKIBRA-KDG-2024"
    },
    {
      id: "cert-bantara",
      title: "Pelantikan Penegak Bantara & SAKA Bhayangkara",
      issuer: "Ambalan SMAN 1 Kandangan & Kepolisian",
      year: "2024",
      category: "Kepemimpinan & Kamtibmas",
      badgeUrl: "/badges/pramuka-bantara-bhayangkara.svg",
      description: "Tanda kelulusan kecakapan Pramuka Penegak Bantara dan pendalaman kamtibmas melalui Satuan Karya Bhayangkara.",
      credentialId: "BANTARA-BHAYANGKARA-2024"
    },
    {
      id: "cert-lbb",
      title: "Kontingen LBB Pelajar Kab. Kediri",
      issuer: "Pemerintah Kab. Kediri",
      year: "2026",
      category: "Baris-Berbaris (LKBB)",
      badgeUrl: "/badges/lbb-kediri.svg",
      description: "Piagam partisipasi kontingen Lomba Baris-Berbaris tingkat pelajar se-Kabupaten Kediri dengan formasi variasi ketangkasan.",
      credentialId: "LBB-KEDIRI-2026-PELAJAR"
    }
  ],

  // Testimoni Klien (Kosong - siap diisi jika ada ulasan nyata)
  testimonials: [],

  // Informasi Kontak
  contact: {
    heading: "Mari Berkolaborasi Bersama!",
    subheading: "Punya ide proyek menarik atau ingin berdiskusi? Silakan hubungi saya melalui form di bawah atau kontak langsung.",
    email: "hyuzowshintax@gmail.com",
    phone: "08133726102",
    location: "Kediri, Jawa Timur, Indonesia",
    workingHours: "Senin - Jumat: 09:00 - 18:00 WIB"
  }
};
