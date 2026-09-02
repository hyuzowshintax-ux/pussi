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
    location: "Indonesia",
    email: "hyuzowshintax@gmail.com",
    phone: "08133726102",
    status: "Tersedia untuk Pekerjaan / Freelance",
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
      { label: "Domisili", value: "Indonesia" },
      { label: "Status", value: "Tersedia untuk Freelance & Full-time" },
      { label: "Bahasa", value: "Indonesia, English" }
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

  // Proyek Portofolio (Kosong - siap diisi proyek baru)
  projects: [],

  // Riwayat Pengalaman, Organisasi, & Prestasi
  timeline: {
    experience: [
      {
        period: "2025 - 2026",
        role: "Duta Intelegensia",
        company: "SMAN 1 Kandangan",
        location: "Kandangan, Kediri",
        description: "Terpilih sebagai Duta Intelegensia di SMAN 1 Kandangan periode tahun 2025 - 2026 sebagai representasi teladan siswa berprestasi, berwawasan luas, berdaya pikir kritis, serta aktif berkontribusi dalam kegiatan akademik dan sosial sekolah.",
        skills: ["Duta Intelegensia", "Public Speaking", "Problem Solving", "Kepemimpinan Sekolah", "Integritas"]
      },
      {
        period: "2024 - Sekarang",
        role: "Pramuka Penegak Bantara & SAKA Bhayangkara",
        company: "Ambalan SMAN 1 Kandangan & Satuan Karya Bhayangkara",
        location: "Kediri, Jawa Timur",
        description: "Aktif sebagai Pramuka Penegak Bantara yang memimpin kegiatan kepramukaan sejak tahun 2024, serta mendalami ilmu ketertiban masyarakat, kepolisian, kedisiplinan hukum, dan tanggap darurat melalui SAKA Bhayangkara.",
        skills: ["Penegak Bantara", "SAKA Bhayangkara", "Kamtibmas", "Kepemimpinan Lapangan", "Tanggap Darurat"]
      },
      {
        period: "2024 - Sekarang",
        role: "Anggota Aktif Organisasi CODASKA (LKBB)",
        company: "CODASKA - SMAN 1 Kandangan",
        location: "Kandangan, Kediri",
        description: "Sangat aktif dalam organisasi PBB/LKBB CODASKA di lingkungan SMAN 1 Kandangan sejak tahun 2024, menjalani latihan formasi variasi baris-berbaris, ketahanan mental, serta memimpin koordinasi pleton.",
        skills: ["CODASKA", "LKBB", "Formasi Variasi PBB", "Koordinasi Pleton", "Kedisiplinan Tinggi"]
      },
      {
        period: "2026",
        role: "Kontingen LBB Kab. Kediri Tingkat Pelajar",
        company: "LBB Kabupaten Kediri",
        location: "Kediri, Jawa Timur",
        description: "Mengikuti dan berpartisipasi dalam Lomba Baris-Berbaris (LBB) tingkat pelajar se-Kabupaten Kediri dengan menampilkan ketegasan formasi PBB, kekompakan barisan, dan ketangkasan gerak pleton.",
        skills: ["Formasi PBB", "Ketangkasan Baris-Berbaris", "Kekompakan Pleton", "Kepemimpinan Regu", "Kedisiplinan"]
      },
      {
        period: "2024",
        role: "Anggota Paskibra Kecamatan Kandangan",
        company: "Paskibra Kec. Kandangan, Kab. Kediri",
        location: "Kandangan, Kediri",
        description: "Bertugas dan berdedikasi sebagai Pasukan Pengibar Bendera (Paskibra) tingkat Kecamatan Kandangan tahun 2024 dalam upacara kenegaraan dengan kedisiplinan tinggi, ketahanan fisik, dan integritas kepemimpinan.",
        skills: ["Paskibra", "Kedisiplinan Tinggi", "Ketahanan Fisik & Mental", "Kerjasama Tim", "Nasionalisme"]
      },
      {
        period: "2023",
        role: "Pramuka Garuda Penggalang",
        company: "Gerakan Pramuka Indonesia",
        location: "Indonesia",
        description: "Meraih tingkatan tertinggi Pramuka Penggalang (Pramuka Garuda) tahun 2023 melalui uji keteladanan, kepemimpinan regu, kecakapan umum & khusus, kedisiplinan, serta pengabdian masyarakat.",
        skills: ["Kepemimpinan", "Kerjasama Tim", "Kedisiplinan", "Survival & Scouting", "Karakter & Etika"]
      }
    ],
    education: [
      {
        period: "2024 - Sekarang",
        degree: "Pelajar / Siswa (SMA)",
        institution: "SMAN 1 Kandangan",
        location: "Kandangan, Kab. Kediri",
        description: "Menempuh jenjang pendidikan tingkat menengah atas, aktif dalam pengembangan akademik, menyandang amanah Duta Intelegensia, serta berprestasi dalam organisasi kepanduan (Penegak Bantara & SAKA Bhayangkara) dan baris-berbaris (CODASKA)."
      },
      {
        period: "2021 - 2024",
        degree: "Siswa / Alumni (SMP)",
        institution: "SMPN 2 Kasembon",
        location: "Kasembon, Kab. Malang",
        description: "Menyelesaikan pendidikan menengah pertama dengan rekam jejak aktif kepanduan hingga dinobatkan meraih predikat Pramuka Garuda Penggalang (2023) serta aktif dalam kegiatan kepemimpinan siswa."
      },
      {
        period: "2015 - 2021",
        degree: "Siswa / Alumni (SD)",
        institution: "SD Katolik Santo Yusup Karang Pilang Surabaya",
        location: "Karangpilang, Kota Surabaya",
        description: "Menempuh dan menuntaskan jenjang pendidikan dasar dengan penanaman karakter disiplin, budi pekerti, integritas, dan pondasi kepemimpinan."
      }
    ]
  },

  // Testimoni Klien (Kosong - siap diisi jika ada ulasan nyata)
  testimonials: [],

  // Informasi Kontak
  contact: {
    heading: "Mari Berkolaborasi Bersama!",
    subheading: "Punya ide proyek menarik atau ingin berdiskusi? Silakan hubungi saya melalui form di bawah atau kontak langsung.",
    email: "hyuzowshintax@gmail.com",
    phone: "08133726102",
    location: "Indonesia",
    workingHours: "Senin - Jumat: 09:00 - 18:00 WIB"
  }
};
