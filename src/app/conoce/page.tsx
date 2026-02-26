// src/app/conoce/page.tsx
import type { Metadata } from "next";
import React from "react";
import Navbar from "../_components/Navbar";
import Image from "next/image";
import ContactSection from "../_sections/contact-section";

import rafaImponente from "../../../public/RafaImponente Logo211.webp";
import mikiPuesto from "../../../public/MIKIPUESTOVERTICAL211.webp";
import rafaSilla from "../../../public/RafaSillonFin11.webp";
import equipoPuesto from "../../../public/RafaMikiPuestoHorizontal11.webp";

const title = "Conócenos | Rafa Vargas Barber";
const description =
  "Conoce la historia de Rafa Vargas y el equipo. Alta barbería con detalle y trato cercano en Santander.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://rafavargasbarber.com/conoce" },
  openGraph: {
    title,
    description,
    url: "https://rafavargasbarber.com/conoce",
    type: "website",
    siteName: "Rafa Vargas Barber",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function ConocePage() {
  const organization = {
    "@type": "BarberShop",
    name: "Rafa Vargas Barber",
    url: "https://rafavargasbarber.com",
    logo: "https://rafavargasbarber.com/logo.svg",
    sameAs: [
      "https://www.instagram.com/rafavargasbarber",
      "https://www.tiktok.com/@rafavargasbarber",
    ],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: title,
    description,
    url: "https://rafavargasbarber.com/conoce",
    about: organization,
    publisher: organization,
    mainEntity: [
      {
        "@type": "Person",
        name: "Rafa Vargas",
        jobTitle: "Barbero",
        worksFor: organization,
      },
      {
        "@type": "Person",
        name: "Miki",
        jobTitle: "Barbero",
        worksFor: organization,
      },
    ],
  };

  // ✅ Full width en móvil, y desde sm se queda fija (no crece más)
  const imgClass = "block w-full h-auto sm:w-[500px] mx-auto";
  // ✅ Optimización coherente con el cap a 640px
  const imgSizes = "(max-width: 500px) 100vw, 640px";

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

      {/* H1 único */}
      <h1 className="type-title-md m-6 md:m-8 text-center md:text-5xl">
        YO SOY <br />
        <span className="type-title-lg text-logo-100 md:text-5xl">RAFA VARGAS</span>
      </h1>

      <Image
        src={rafaImponente}
        alt="Rafa Vargas junto al logo del local"
        priority
        placeholder="blur"
        sizes={imgSizes}
        className={imgClass}
      />

      <article className="flex justify-self-center ">{/*  type-body mt-3 sm:mt-4 text-balance max-w-[62ch]   */} 
        <p className="type-body mb-2 md:mb-3 mr-12 ml-12 text-balance m-6 max-w-[64ch] text-center">
          <span className="font-medium">Detrás de cada corte, hay una historia. </span>
          <br />
          Llegué desde Venezuela buscando una oportunidad y la encontré trabajando duro, paso a paso.
          Con los años —y con mucha constancia— . Me di cuenta de que hacía feliz a la gente con mi
          trabajo, me decían Rafa tienes que montar tu propio negocio. Así que les tomé la palabra.
          <br />
          <br />
          Pero si hoy estoy aquí, es gracias a todas las personas que han estado detrás: quienes me
          dieron una mano, me animaron y confiaron en mí cuando solo era un sueño. Estoy muy contento
          y profundamente agradecido por ese apoyo. Quiero que no solo vengas a cortarte el pelo: ven
          a sentirte como en casa.
        </p>
      </article>

      <section aria-labelledby="team-title">
        <h2 id="team-title" className="type-title-md m-6 md:m-8 text-center md:text-5xl">
          EL EQUIPO
        </h2>

        <Image
          src={equipoPuesto}
          alt="Equipo de Rafa Vargas Barber"
          placeholder="blur"
          sizes={imgSizes}
          className={imgClass}
        />

        <h3 className="type-title-md m-6 md:m-8 text-center ">
          SIEMPRE LA
          <br />
          <span className="type-title-lg text-logo-100 font-normal">MEJOR ATENCIÓN</span>
        </h3>

        <Image
          src={mikiPuesto}
          alt="Miki, barbero de Rafa Vargas Barber"
          placeholder="blur"
          sizes={imgSizes}
          className={imgClass}
        />

        <h3 className="type-title-md m-6 md:m-8 text-center">
          MIKI <br />
          <span className="type-title-lg text-logo-100 font-normal">"LA CLASE"</span>
        </h3>

        <Image
          src={rafaSilla}
          alt="Rafa Vargas sentado en el sillón de la barbería"
          placeholder="blur"
          sizes={imgSizes}
          className={imgClass}
        />

        <h3 className="type-title-md m-6 md:m-8 text-center">
          RAFA <br />
          <span className="type-title-lg text-logo-100 font-normal">"LA CALIDAD"</span>
        </h3>
      </section>

      <ContactSection />
    </main>
  );
}
