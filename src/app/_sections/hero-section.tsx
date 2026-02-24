import Link from "next/link";
import Navbar from "../_components/Navbar";
import HeroBgCarousel from "../_components/HeroBgCarousel";

import rafacliente from "../../../public/InspiracionLandingRafaCliente1.webp";
import barbaCerca from "../../../public/LandingBarberia1.webp";
import vistaBarbers from "../../../public/VistaBarberos.webp";

export default function HeroSection() {
  return (
    <section className="section w-full" aria-labelledby="hero-title">
      <main className="section-inner relative w-full min-h-screen overflow-hidden">
        {/* Fondo (carousel vertical) */}
        <HeroBgCarousel
          images={[rafacliente, barbaCerca, vistaBarbers]}
          intervalMs={4200}
          durationMs={900}
        />

        {/* Oscurecimiento general */}
        <div className="absolute inset-0 z-10 bg-enfasis-800/37" />

        {/* Navbar */}
        <header className="absolute top-0 left-0 w-full z-30">
          <Navbar />
        </header>

        {/* Contenido */}
        <div className="relative z-20 h-screen w-full">
          {/* H1 para SEO (si es el hero principal de la home) */}
          <h1
            id="hero-title"
            className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 type-title-lg text-center md:text-5xl"
          >
            EL DETALLE <br /> MARCA LA <br />
            <span className="text-logo-100">DIFERENCIA</span>
          </h1>

          <Link
            href="https://booksy.com/es-es/dl/show-business/168633?utm_medium=c2c_referral"
            aria-label="Reservar cita en Booksy"
            target="_blank"
            rel="noopener noreferrer"
            className="
              absolute left-1/2 bottom-[19vh] md:bottom-[13vh] -translate-x-1/2
              border-5 border-logo-100 px-6 py-3 type-cta
              z-40
              transition-transform duration-250 ease-out
              hover:scale-[1.06] active:scale-[0.98]
              group md:px-9 md:py-5
            "
          >
            <span className="relative inline-block pb-1">
              Reservar
              <span
                aria-hidden="true"
                className="
                  absolute left-0 bottom-0 block h-1 w-full bg-logo-100
                  origin-left scale-x-0
                  transition-transform duration-250 ease-out
                  [@media(hover:hover)]:group-hover:scale-x-100
                  [@media(hover:none)]:group-active:scale-x-100
                "
              />
            </span>
          </Link>
        </div>
      </main>
    </section>
  );
}
