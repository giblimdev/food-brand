// app/rd/layout.tsx


///type : page
/*role :  */              
/*fonctionnement : */ 
//imports [] 
//exports [] 
//useby []
//noteIA merci de ne pas supprimer les commentaires ci-dessus, ils sont utilisés par l'IA pour comprendre le contexte du fichier et générer du code pertinent. 


import HearderRD from "@/components/r&d/HearderRD";

export default function RDLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
<HearderRD/>      
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}