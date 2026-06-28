import type { Metadata } from "next";
import { Inter, Poppins, Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

// Polices principales
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Police mono (gardée pour le code)
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "R&D Lab | Innovation & Design",
  description: "Laboratoire d'innovation technologique et de design digital",
  keywords: "R&D, innovation, design, technologie, développement",
  authors: [{ name: "R&D Lab" }],
  openGraph: {
    title: "R&D Lab - Innovation & Design",
    description: "Exploration des tendances digitales et design system moderne",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`
        ${poppins.variable} 
        ${inter.variable} 
        ${outfit.variable} 
        ${geistMono.variable} 
        h-full antialiased
      `}
    >
      <body className="min-h-full flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {children}
      </body>
    </html>
  );
}