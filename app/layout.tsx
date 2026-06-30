//


///type : page
/*role :  */              
/*fonctionnement : */ 
//imports [] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 




import type { Metadata } from "next";
import { Inter, Poppins, Outfit, Geist_Mono, Geist } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


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
      className={cn("h-full", "antialiased", poppins.variable, inter.variable, outfit.variable, geistMono.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {children}
        {/* Toaster Sonner avec thème sombre */}
        <Toaster 
          position="top-center"
          richColors
          closeButton
          theme="dark"
          expand={false}
          duration={4000}
          toastOptions={{
            style: {
              background: 'rgba(15, 23, 42, 0.95)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#fff',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
              borderRadius: '12px',
              padding: '16px',
            },
            classNames: {
              toast: 'font-poppins',
              title: 'font-semibold',
              description: 'text-gray-300',
              actionButton: 'bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white',
              cancelButton: 'bg-white/10 text-white',
              closeButton: 'bg-white/10 hover:bg-white/20 text-white',
              success: 'border-l-4 border-green-500',
              error: 'border-l-4 border-red-500',
              info: 'border-l-4 border-blue-500',
              warning: 'border-l-4 border-yellow-500',
            },
          }}
        />
      </body>
    </html>
  );
}