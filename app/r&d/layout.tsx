// app/rd/layout.tsx

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