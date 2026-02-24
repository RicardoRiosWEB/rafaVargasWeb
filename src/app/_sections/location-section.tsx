import React from "react";
import Link from "next/link";
import Image from "next/image";
import SillasBarberia from "../../../public/sillasBarberia.webp";

function LocationSection() {
  return (
    <section
      className="section flex-col items-center overflow-hidden pt-8 pb-14 sm:py-14"
      aria-labelledby="location-title"
    >
      <div className="section-inner space-y-3">
        {/* Mejor jerarquía: h2 (o h3 si ya tienes h1/h2 arriba) */}
        <h2 id="location-title" className="type-title-md text-center mb-6 mt-2">
          ENTRA FÁCIL<br /> SAL
          <span className="text-logo-100 type-title-lg"> IMPECABLE</span>
        </h2>

        <div className="flex justify-center">
          <div className="w-full">
            <Link
              href="https://maps.app.goo.gl/gRUcuB8DKjTZ1GH68"
              aria-label="Abrir ubicación de Rafa Vargas Barber en Google Maps"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative block
                w-screen mx-[calc(50%-50vw)]
                aspect-video
                overflow-hidden rounded-xl
                sm:w-[500px] sm:mx-auto
                transform-gpu
                transition-transform duration-300 ease-out
                hover:scale-[1.02]
                active:scale-[0.98]
              "
            >
              <Image
                src={SillasBarberia}
                alt="Interior de la barbería Rafa Vargas en Santander"
                fill
                priority
                className="object-cover object-center z-0"
                sizes="(max-width: 640px) 100vw, 500px"
              />

              {/* Overlay */}
              <div className="absolute inset-0 z-10 bg-enfasis-800/57 transition-opacity duration-300 group-hover:opacity-85 group-active:opacity-75" />

              {/* Contenido */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
                <p className="relative top-2 font-title text-xl font-medium text-white/90 tracking-wide text-shadow-stone-700">
                  VER UBICACIÓN
                </p>

                <svg
                  className="w-[220px] max-w-[80%] h-auto mb-6"
                  viewBox="0 0 220 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M 8 12 L 26 10.7 L 194 10.7 L 212 12 L 194 13.3 L 26 13.3 Z"
                    fill="#D8A088"
                  />
                </svg>

                {/* Address semántico (SEO local) */}
                <address className="not-italic font-title text-center text-sm sm:text-base text-white/90 leading-snug">
                  Pl. los Pinos 2, Puerta 4 AB<br />
                  Alisal, Santander
                </address>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;

