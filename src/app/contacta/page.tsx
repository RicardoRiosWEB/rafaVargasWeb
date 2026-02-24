// src/app/contacta/page.tsx
import type { Metadata } from "next";
import Navbar from "../_components/Navbar";
import Link from "next/link";

const title = "Contacta | Rafa Vargas Barber";
const description =
  "Contacta con Rafa Vargas Barber en Santander. Horarios, teléfono, WhatsApp y enlace directo para reservar.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://rafavargasbarber.com/contacta" },
  openGraph: {
    title,
    description,
    url: "https://rafavargasbarber.com/contacta",
    type: "website",
    siteName: "Rafa Vargas Barber",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const Divider = () => (
  <svg
    className="block w-full max-w-[700px] h-6 my-4"
    viewBox="0 0 220 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M 8 12 L 26 10.7 L 194 10.7 L 212 12 L 194 13.3 L 26 13.3 Z"
      fill="currentColor"
    />
  </svg>
);

export default function ContactaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: title,
    description,
    url: "https://rafavargasbarber.com/contacta",
    isPartOf: {
      "@type": "WebSite",
      name: "Rafa Vargas Barber",
      url: "https://rafavargasbarber.com",
    },
    publisher: {
      "@type": "BarberShop",
      name: "Rafa Vargas Barber",
      url: "https://rafavargasbarber.com",
      logo: "https://rafavargasbarber.com/logo.svg",
      sameAs: [
        "https://www.instagram.com/rafavargasbarber",
        "https://www.tiktok.com/@rafavargasbarber",
      ],
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

      <section className="section py-2 flex flex-col items-center" aria-labelledby="contacta-title">
        <div className="section-inner py-4 w-full flex flex-col items-center text-center">
          <Divider />

          {/* H1 único */}
          <h1 id="contacta-title" className="sr-only">
            Contacto
          </h1>

          <div>
            <h2 className="font-title text-xl font-medium mb-3 uppercase">Horarios</h2>
            <div className="font-title">
              <p>
                Entre semana:
                <br />
                <time dateTime="09:30">9:30</time> a <time dateTime="18:30">18:30</time>
              </p>
              <p className="mt-3">
                Sábados:
                <br />
                <time dateTime="10:30">10:30</time> a <time dateTime="14:30">14:30</time>
              </p>
            </div>
          </div>

          <Divider />

          <div>
            <h2 className="font-title text-xl font-medium mb-3 uppercase">Teléfono</h2>
            <p className="font-title">
              <a
                href="tel:+34613394364"
                aria-label="Llamar al teléfono 613 394 364"
                className="underline-offset-4 hover:underline"
              >
                +34 613 394 364
              </a>
            </p>
          </div>

          <Divider />

          <div>
            <h2 className="font-title text-xl font-medium mb-4 uppercase">WhatsApp</h2>
            <p className="font-title">
              <a
                href="https://wa.me/34613394364"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir WhatsApp con el número 613 394 364"
                className="underline-offset-4 hover:underline"
              >
                +34 613 394 364
              </a>
              <br />
              <a
                href="https://wa.me/34643004667"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir WhatsApp con el número 643 004 667"
                className="underline-offset-4 hover:underline"
              >
                +34 643 004 667
              </a>
            </p>
          </div>

          <Divider />

          <Link
            href="https://booksy.com/es-es/dl/show-business/168633?utm_medium=c2c_referral"
            aria-label="Reservar cita en Booksy"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              border-[5px] border-logo-100 px-6 py-3 type-cta
              transition-transform duration-300 ease-out
              hover:scale-[1.06] active:scale-[0.98]
              group mt-2 md:px-9 md:py-5
            "
          >
            <span className="relative inline-block pb-1">
              Reservar
              <span
                aria-hidden="true"
                className="
                  absolute left-0 bottom-0 block h-1 w-full bg-logo-100
                  origin-left scale-x-0
                  transition-transform duration-300 ease-out
                  [@media(hover:hover)]:group-hover:scale-x-100
                  [@media(hover:none)]:group-active:scale-x-100
                "
              />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
