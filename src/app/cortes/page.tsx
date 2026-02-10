import CortesSection from "../_sections/cortes-section";
import Navbar from "../_components/Navbar";
import React from "react";
import BeforeAfterCarousel, { type BeforeAfterItem } from "../_components/BeforeAfterCarousel";

// ✅ Importa tus fotos (ejemplo)
import antes1 from "../../../public/1.webp";
import despues1 from "../../../public/2.webp";
/*import antes2 from "../../../public/antes-2.webp";
import despues2 from "../../../public/despues-2.webp";
import antes3 from "../../../public/antes-3.webp";
import despues3 from "../../../public/despues-3.webp";*/

const ITEMS: BeforeAfterItem[] = [
  {
    id: "1",
    before: antes1,
    after: despues1,
    altBefore: "Antes del corte 1",
    altAfter: "Después del corte 1",
    label: "NO PULSES AQUÍ",
  },
  {
    id: "2",
    before: antes1,
    after: despues1,
    altBefore: "Antes del corte 2",
    altAfter: "Después del corte 2",
    label: "",
  },
  {
    id: "3",
    before: antes1,
    after: despues1,
    altBefore: "Antes del corte 3",
    altAfter: "Después del corte 3",
    label: "",
  },
    {
    id: "4",
    before: antes1,
    after: despues1,
    altBefore: "Antes del corte 1",
    altAfter: "Después del corte 1",
    label: "",
  },
  {
    id: "5",
    before: antes1,
    after: despues1,
    altBefore: "Antes del corte 2",
    altAfter: "Después del corte 2",
    label: "",
  },
  {
    id: "6",
    before: antes1,
    after: despues1,
    altBefore: "Antes del corte 3",
    altAfter: "Después del corte 3",
    label: "",
  },
    {
    id: "7",
    before: antes1,
    after: despues1,
    altBefore: "Antes del corte 2",
    altAfter: "Después del corte 2",
    label: "",
  },
  {
    id: "8",
    before: antes1,
    after: despues1,
    altBefore: "Antes del corte 3",
    altAfter: "Después del corte 3",
    label: "",
  },
];
export default function CortesPage() {
  return (
    <main>
    <div className="static h-60"><Navbar /></div>
      <section className="section py-10">
      <div className="section-inner space-y-6">
        <header className="text-center space-y-2">
          <h3 className="type-title-md text-center mb-6 mt-2">
          ESTO NO ES FILTRO:<br />
          <span className="text-logo-100 type-title-lg">ES EL CORTE</span>
        </h3>

        </header>

        <BeforeAfterCarousel items={ITEMS} />
      </div>
    </section>
    </main>
  );
}