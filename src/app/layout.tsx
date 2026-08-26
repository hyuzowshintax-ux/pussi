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
  title: "Samuel B K | Full Stack Web Developer & UI/UX Specialist",
  description:
    "Website portofolio profesional Full Stack Web Developer. Jelajahi proyek terbaru, keahlian teknologi, dan riwayat pengalaman.",
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
