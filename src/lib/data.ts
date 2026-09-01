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

  // Proyek Portofolio (Koleksi Aplikasi Mobile AI Unggulan)
  projects: [
    {
      id: 1,
      title: "NeuroLens AI Vision & Smart Scanner",
      category: "mobile",
      categoryLabel: "Mobile App & AI",
      featured: true,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      description: "Aplikasi mobile Computer Vision untuk deteksi objek real-time, pengenalan teks instan kamera, dan klasifikasi visual on-device.",
      fullDescription: "NeuroLens AI adalah aplikasi mobile mutakhir yang memanfaatkan model TensorFlow Lite dan On-Device Machine Learning untuk memberikan kemampuan analisis visual instan tanpa latensi internet. Dilengkapi fitur multi-language OCR, deteksi objek otomatis, dan AR visual overlay.",
      tags: ["Flutter", "TensorFlow Lite", "Computer Vision", "Firebase", "Dart"],
      demoUrl: "https://github.com/hyuzowshintax-ux/pussi",
      githubUrl: "https://github.com/hyuzowshintax-ux/pussi",
      highlights: [
        "On-device real-time object detection < 30ms",
        "Instant Camera OCR with 50+ languages",
        "AR Visual Overlay & Object Measurement",
        "Offline-first intelligent architecture"
      ]
    },
    {
      id: 2,
      title: "Vocalis AI Voice & Meeting Transcriber",
      category: "mobile",
      categoryLabel: "Mobile App & AI",
      featured: true,
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800",
      description: "Aplikasi asisten suara mobile bertenaga Whisper AI untuk transkripsi audio multi-pembicara dan ringkasan notulensi otomatis.",
      fullDescription: "Vocalis AI mengubah rekaman suara dan percakapan langsung menjadi teks terstruktur dengan akurasi tinggi. Dilengkapi fitur pemisahan suara pembicara (diarization), ekstraksi ringkasan poin rapat otomatis, dan perintah suara cerdas.",
      tags: ["React Native", "OpenAI Whisper", "Python FastAPI", "WebSockets", "Redux"],
      demoUrl: "https://github.com/hyuzowshintax-ux/pussi",
      githubUrl: "https://github.com/hyuzowshintax-ux/pussi",
      highlights: [
        "Live stream transcription via WebSockets",
        "Multi-speaker voice diarization",
        "One-tap AI meeting summary extraction",
        "Export to PDF, Markdown, & Notion"
      ]
    },
    {
      id: 3,
      title: "Aether AI Assistant & Code Mentor",
      category: "mobile",
      categoryLabel: "Mobile App & AI",
      featured: true,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
      description: "Asisten percakapan cerdas mobile dengan kemampuan analisis kode, brainstorming ide, dan interaksi suara natural.",
      fullDescription: "Aether AI adalah aplikasi chatbot cerdas bertenaga LLM generasi terbaru yang dirancang untuk membantu programmer dan profesional saat bepergian. Membantu debugging kode dari screenshot, penjelasan konsep teknis, serta pencarian referensi cepat.",
      tags: ["Kotlin", "Jetpack Compose", "Gemini Pro API", "LangChain", "Room DB"],
      demoUrl: "https://github.com/hyuzowshintax-ux/pussi",
      githubUrl: "https://github.com/hyuzowshintax-ux/pussi",
      highlights: [
        "Code syntax highlighting & interactive runner",
        "Multi-modal image & code debugging",
        "Offline chat history & vector search",
        "Custom system persona customization"
      ]
    },
    {
      id: 4,
      title: "Artix AI Art Generator & Photo Enhancer",
      category: "mobile",
      categoryLabel: "Mobile App & AI",
      featured: false,
      image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&q=80&w=800",
      description: "Studio grafis mobile bertenaga AI untuk pembuatan ilustrasi digital, restorasi foto lama, dan neural upscaling 4K.",
      fullDescription: "Artix AI memungkinkan pengguna menghasilkan karya visual memukau dari prompt teks, menghapus objek latar belakang tanpa jejak (inpainting), serta merestorasi foto buram menjadi kualitas Ultra HD 4K langsung dari smartphone.",
      tags: ["Swift / SwiftUI", "Stable Diffusion", "CoreML", "Metal Shaders", "Cloudinary"],
      demoUrl: "https://github.com/hyuzowshintax-ux/pussi",
      githubUrl: "https://github.com/hyuzowshintax-ux/pussi",
      highlights: [
        "Text-to-Image creation in under 3 seconds",
        "4K Neural Super-Resolution Upscaling",
        "Magic background eraser & inpainting",
        "iOS Metal accelerated processing"
      ]
    },
    {
      id: 5,
      title: "PulseFit AI Motion & Workout Tracker",
      category: "mobile",
      categoryLabel: "Mobile App & AI",
      featured: false,
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
      description: "Aplikasi pelacak olahraga interaktif dengan AI pose estimation untuk koreksi postur tubuh dan penghitungan repetisi otomatis.",
      fullDescription: "PulseFit AI menggunakan kamera ponsel dan algoritma pose estimation untuk memonitor gerakan latihan secara presisi, menghitung repetisi latihan secara otomatis, dan memberikan umpan balik suara real-time agar pengguna terhindar dari cedera.",
      tags: ["React Native", "Google MediaPipe", "HealthKit", "TypeScript", "Node.js"],
      demoUrl: "https://github.com/hyuzowshintax-ux/pussi",
      githubUrl: "https://github.com/hyuzowshintax-ux/pussi",
      highlights: [
        "33-point real-time skeletal tracking",
        "Automatic exercise rep counter",
        "Voice coach posture correction alerts",
        "Apple Health & Google Fit sync"
      ]
    }
  ],

  // Riwayat Pengalaman & Prestasi
  timeline: {
    experience: [
      {
        period: "2026",
        role: "Kontingen LBB Kab. Kediri Tingkat Pelajar",
        company: "LBB Kabupaten Kediri",
        location: "Kediri, Jawa Timur",
        description: "Mengikuti dan berpartisipasi dalam Lomba Baris-Berbaris (LBB) tingkat pelajar se-Kabupaten Kediri dengan menampilkan ketegasan formasi PBB, kekompakan barisan, dan ketangkasan gerak pleton.",
        skills: ["Formasi PBB", "Ketangkasan Baris-Berbaris", "Kekompakan Pleton", "Kepemimpinan Regu", "Kedisiplinan"]
      },
      {
        period: "2025",
        role: "Anggota Paskibra Kecamatan Kandangan",
        company: "Paskibra Kec. Kandangan, Kab. Kediri",
        location: "Kandangan, Kediri",
        description: "Bertugas dan berdedikasi sebagai Pasukan Pengibar Bendera (Paskibra) tingkat Kecamatan Kandangan dalam upacara kenegaraan dengan kedisiplinan tinggi, ketahanan fisik, dan integritas kepemimpinan.",
        skills: ["Paskibra", "Kedisiplinan Tinggi", "Ketahanan Fisik & Mental", "Kerjasama Tim", "Nasionalisme"]
      },
      {
        period: "2024",
        role: "Pramuka Garuda Penggalang",
        company: "Gerakan Pramuka Indonesia",
        location: "Indonesia",
        description: "Meraih tingkatan tertinggi Pramuka Penggalang (Pramuka Garuda) melalui uji keteladanan, kepemimpinan regu, kecakapan umum & khusus, kedisiplinan, serta pengabdian masyarakat.",
        skills: ["Kepemimpinan", "Kerjasama Tim", "Kedisiplinan", "Survival & Scouting", "Karakter & Etika"]
      }
    ],
    education: []
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
