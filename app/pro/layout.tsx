// app/pro/layout.tsx

///type : page
/*role : Layout de l'espace professionnel, encapsule toutes les pages /pro */
/*fonctionnement : Fournit le header et le contenu principal avec un fond adapté */
//imports [HearderRD]
//exports [ProLayout]
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 

import HearderPro from "@/components/pro/HeaderPro";

export default function ProLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <HearderPro />
      <main className="container mx-auto px-4 py-6 md:py-8 max-w-7xl">
        {children}
      </main>
    </div>
  );
}