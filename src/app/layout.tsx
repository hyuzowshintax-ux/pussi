import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fira_Code } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Samuel B K | AI Design Engineer, Duta Intelegensia & Cyber Arcade Portfolio",
  description:
    "Portofolio interaktif resmi Samuel B K — Duta Intelegensia SMAN 1 Kandangan (2025–2026), AI Design Engineer, Pramuka Penegak Bantara, dan CODASKA. Jelajahi proyek game arcade, simulator formasi LKBB, dan artikel konstelasi zodiak kosmik.",
  keywords: [
    "Samuel B K",
    "Duta Intelegensia",
    "SMAN 1 Kandangan",
    "CODASKA",
    "Comando Garuda SMANSAKA",
    "AI Design Engineer",
    "Pramuka Penegak Bantara",
    "Paskibra Kandangan",
    "Portofolio Interaktif",
    "Next.js Developer Kediri",
    "LKBB Simulator"
  ],
  authors: [{ name: "Samuel B K", url: "https://github.com/hyuzowshintax-ux" }],
  creator: "Samuel B K",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://github.com/hyuzowshintax-ux/pussi",
    title: "Samuel B K | AI Design Engineer & Duta Intelegensia SMAN 1 Kandangan",
    description:
      "Jelajahi portofolio interaktif bergaya Cyber Arcade Game, simulator taktis LKBB 2D, dan inovasi AI Design Engineering oleh Samuel B K.",
    siteName: "Samuel B K Interactive Portfolio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Samuel B K Interactive Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel B K | AI Design Engineer & Duta Intelegensia",
    description: "Portofolio interaktif Web & AI dengan konsep Game Arcade dan Simulator Taktis LKBB.",
    creator: "@samuelbk",
    images: ["https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop"],
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark scroll-smooth">
      <body
        className={`${jakartaSans.variable} ${firaCode.variable} antialiased text-slate-100 selection:bg-pink-500 selection:text-white transition-colors duration-300 relative min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
