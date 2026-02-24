// src/app/_sections/whyus-section.tsx
import React from "react";
import Image from "next/image";
import Script from "next/script";
import porqueNos from "../../../public/dosBarberos1.webp";

export default function WhyUsSection() {
  return (
    <section
      className="section pb-10 pt-4 sm:pb-12 sm:pt-4 flex flex-col items-center overflow-hidden"
      aria-labelledby="whyus-title"
    >
      <div className="section-inner w-full max-w-3xl px-5 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Separador superior (decorativo) */}
        <div className="w-full flex justify-center mb-6 sm:mb-8">
          <svg
            className="w-full max-w-[720px] h-6"
            viewBox="0 0 220 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M 8 12 L 26 10.7 L 194 10.7 L 212 12 L 194 13.3 L 26 13.3 Z"
              fill="#F3F3F3"
            />
          </svg>
        </div>

        {/* Título */}
        <h2 id="whyus-title" className="type-title-md md:py-3 md:text-4xl">
          ALTA BARBERÍA <br />
          <span className="type-title-lg text-logo-100">RAFA VARGAS</span>
        </h2>

        {/* Texto */}
        <p className="type-body mt-3 sm:mt-4 text-balance max-w-[62ch]">
          Detrás de cada corte hay una intención: que te mires y digas “así sí”.
          <br className="hidden sm:block" />
          <span className="block mt-4">
            En el equipo Rafa Vargas Barber, el detalle es nuestra forma de respetar tu estilo:
            precisión, dedicación y un trato cercano para que cada visita sea tu momento y tu mejor versión.
          </span>
        </p>

        {/* Lista */}
        <ul
          role="list"
          className="mt-4 sm:mt-5 flex flex-col items-center gap-2 sm:gap-2.5"
          aria-label="Motivos para elegirnos"
        >
          <li className="type-body">
            <span aria-hidden="true">-</span>&nbsp; Asesoramiento real &nbsp;
            <span aria-hidden="true">-</span>
          </li>
          <li className="type-body">
            <span aria-hidden="true">-</span>&nbsp; Ritual de barbería &nbsp;
            <span aria-hidden="true">-</span>
          </li>
          <li className="type-body">
            <span aria-hidden="true">-</span>&nbsp; Calidad en cada servicio &nbsp;
            <span aria-hidden="true">-</span>
          </li>
        </ul>

        {/* Imagen (más grande) */}
        <div className="mt-7 sm:mt-9 w-full flex justify-center">
          <Image
            src={porqueNos}
            alt="Equipo de barberos en Rafa Vargas Barber"
            width={900}
            height={900}
            placeholder="blur"
            loading="lazy"
            sizes="(max-width: 640px) 320px, (max-width: 768px) 420px, (max-width: 1024px) 520px, 620px"
            className="mx-auto w-[320px] sm:w-[420px] md:w-[520px] lg:w-[620px] h-auto"
          />
        </div>

        {/* Separador inferior (decorativo) */}
        <div className="w-full flex justify-center mt-6 sm:mt-8 md:py-3">
          <svg
            className="w-full max-w-[720px] h-6"
            viewBox="0 0 220 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M 8 12 L 26 10.7 L 194 10.7 L 212 12 L 194 13.3 L 26 13.3 Z"
              fill="#F3F3F3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
