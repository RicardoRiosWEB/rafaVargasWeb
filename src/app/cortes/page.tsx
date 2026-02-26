// src/app/cortes/page.tsx
import type { Metadata } from "next";
import React from "react";
import Navbar from "../_components/Navbar";
import BeforeAfterCarousel, { type BeforeAfterItem } from "../_components/BeforeAfterCarousel";
import ContactSection from "../_sections/contact-section";

// ✅ Importa tus fotos
import antes1 from "../../../public/Anteschamo1.webp";
import despues1 from "../../../public/Despueschamo1.webp";
import antes2 from "../../../public/Anteschamo2.webp";
import despues2 from "../../../public/Despueschamo2.webp";
import antes3 from "../../../public/foto1.webp";
import despues3 from "../../../public/foto2.webp";

const title = "Cortes | Rafa Vargas Barber";
const description =
  "Cortes clásicos y degradados con acabado impecable. Mira antes y después y reserva tu cita en Rafa Vargas Barber.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://rafavargasbarber.com/cortes" },
  openGraph: {
    title,
    description,
    url: "https://rafavargasbarber.com/cortes",
    type: "website",
    siteName: "Rafa Vargas Barber",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const ITEMS: BeforeAfterItem[] = [
  {
    id: "1",
    before: antes1,
    after: despues1,
    altBefore: "Antes del corte 1",
    altAfter: "Después del corte 1",
    label: "Degradado Clásico",
  },
  {
    id: "2",
    before: antes2,
    after: despues2,
    altBefore: "Antes del corte 2",
    altAfter: "Después del corte 2",
    label: "Barba Italiana",
  },
  {
    id: "3",
    before: antes3,
    after: despues3,
    altBefore: "Antes del corte 3",
    altAfter: "Después del corte 3",
    label: "NO PULSES AQUÍ !!",
  },
  {
    id: "4",
    before: antes3,
    after: despues3,
    altBefore: "Antes del corte 4",
    altAfter: "Después del corte 4",
    label: "",
  },
  {
    id: "5",
    before: antes3,
    after: despues3,
    altBefore: "Antes del corte 5",
    altAfter: "Después del corte 5",
    label: "",
  },
  {
    id: "6",
    before: antes3,
    after: despues3,
    altBefore: "Antes del corte 6",
    altAfter: "Después del corte 6",
    label: "",
  },
  {
    id: "7",
    before: antes3,
    after: despues3,
    altBefore: "Antes del corte 7",
    altAfter: "Después del corte 7",
    label: "",
  },
  {
    id: "8",
    before: antes3,
    after: despues3,
    altBefore: "Antes del corte 8",
    altAfter: "Después del corte 8",
    label: "",
  },
];

export default function CortesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: "https://rafavargasbarber.com/cortes",
    isPartOf: {
      "@type": "WebSite",
      name: "Rafa Vargas Barber",
      url: "https://rafavargasbarber.com",
    },
  };

  return (
    <main>
      {/* JSON-LD (SEO) */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="static h-60">
        <Navbar />
      </header>

      <section className="section py-10" aria-labelledby="cortes-title">
        <div className="section-inner space-y-6">
          <header className="text-center space-y-2">
            {/* H1 único en la página */}
            <h1 id="cortes-title" className="type-title-md text-center mb-6 mt-2 md:mb-10 md:text-5xl">
              ESTO NO ES FILTRO:
              <br />
              <span className="text-logo-100 type-title-lg md:text-5xl">ES EL CORTE</span>
            </h1>
          </header>

          <BeforeAfterCarousel items={ITEMS} />

          {/* Servicios especiales */}
          <section aria-labelledby="especiales-title">
            <h2 id="especiales-title" className="type-title-md text-center mb-10 mt-16 md:mt-20 md:text-5xl">
              SERVICIOS ESPECIALES
            </h2>

            <div className="flex-col justify-self-center w-80 h-auto bg-fondo-500 py-6 mb-8">
              <h3 className="type-title-md text-center mb-6">
                SERVICIO <br /> VIP
              </h3>
              <p className="type-body mb-2 md:mb-3 mr-10 ml-10 text-center text-balance ">
                Vale con <span className="text-logo-100">4 cortes</span> clásicos o degradados para
                consumir en un plazo de dos meses
                <br />
                <br /> Por tan solo 50 €
              </p>
            </div>

            <div className="flex-col justify-self-center w-80 h-auto bg-fondo-500 py-6 mt-8 m-6">
              <h3 className="type-title-md text-center mb-6">
                ESPECIAL <br /> JUBILADOS
              </h3>
              <p className="type-body mb-2 md:mb-3 mr-10 ml-10 text-center text-balance">
                Si eres jubilado, te hemos hecho una rebaja en el precio del corte
              </p>
            </div>
          </section>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
