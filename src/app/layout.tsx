import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Font Utama — Bremlin (local OpenType font dari bremlin.zip)
const bremlin = localFont({
  src: "./fonts/Bremlin.otf",
  variable: "--font-bremlin",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samuel B K | AI Design Engineer & Duta Intelegensia SMAN 1 Kandangan",
  description:
    "Portofolio resmi Samuel B K — Duta Intelegensia SMAN 1 Kandangan (2025–2026), AI Design Engineer, Pramuka Penegak Bantara, dan CODASKA.",
  keywords: [
    "Samuel B K",
    "Duta Intelegensia",
    "SMAN 1 Kandangan",
    "CODASKA",
    "Comando Garuda SMANSAKA",
    "AI Design Engineer",
    "Pramuka Penegak Bantara",
    "Paskibra Kandangan",
    "Portofolio Resmi",
    "Next.js Developer Kediri",
    "LKBB Simulator"
  ],
  authors: [{ name: "Samuel B K", url: "https://github.com/hyuzowshintax-ux" }],
  creator: "Samuel B K",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://portf-shintax1.vercel.app",
    title: "Samuel B K | AI Design Engineer & Duta Intelegensia SMAN 1 Kandangan",
    description:
      "Portofolio resmi Samuel B K — eksplorasi AI Design Engineering, pengembangan web modern, kepemimpinan Duta Intelegensia, dan simulator LKBB CODASKA.",
    siteName: "Samuel B K Portfolio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Samuel B K Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel B K | AI Design Engineer & Duta Intelegensia",
    description: "Portofolio resmi Web & AI Design Engineering karya Samuel B K.",
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
    <html lang="id" className={`${bremlin.variable} scroll-smooth bg-white`}>
      <body
        className={`${bremlin.className} ${bremlin.variable} antialiased bg-white text-slate-900 selection:bg-emerald-600 selection:text-white relative min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
