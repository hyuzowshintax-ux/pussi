import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  // Informasi Profil Utama
  profile: {
    name: "Samuel B K",
    roles: [
      "Full Stack Web Developer",
      "Software Engineer",
      "UI/UX Designer"
    ],
    tagline: "Membangun solusi digital modern, terstruktur, dan berkinerja tinggi yang memberikan pengalaman pengguna terbaik.",
    aboutShort: "Halo! Saya Samuel B K, seorang Software Developer dengan pengalaman 5+ tahun dalam merancang dan mengembangkan aplikasi web modern, responsif, dan scalable.",
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
      "Saya adalah seorang developer yang bersemangat dalam membangun produk digital berkualitas tinggi dengan teknologi web modern.",
      "Fokus utama saya adalah menciptakan kode yang bersih, arsitektur yang kokoh, dan antarmuka pengguna yang intuitif serta responsif di semua perangkat."
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

  // Proyek Portofolio (Kosong - siap diisi oleh Anda)
  projects: [],

  // Riwayat Pengalaman & Pendidikan (Kosong - siap diisi oleh Anda)
  timeline: {
    experience: [],
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
