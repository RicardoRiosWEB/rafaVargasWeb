// src/app/_sections/reviews-section.tsx
import React from "react";
import Link from "next/link";
import Script from "next/script";
import ReviewsCarousel, { type Review } from "../_components/ReviewsCarousel";

const reviews = [
  {
    name: "Álvaro Férnandez",
    rating: 5,
    meta: "Cliente habitual",
    text: "Un profesional y un trato inigualable, recomendado 100%",
  },
  {
    name: "Ricardo Ríos",
    rating: 5,
    meta: "Cliente habitual",
    text: "Super recomendable, Rafa es el mejor barbero de Santander, buen trato y siempre se esmera mucho en dejarte un corte perfecto",
  },
  {
    name: "Blanca Soto",
    rating: 5,
    meta: "Nuevo Cliente",
    text: "Ha ido mi pareja hoy, y la verdad es que ha quedado encantado y yo también. Cuesta mucho encontrar un peluquero que escuche de verdad a sus clientes. Así que tanto él como yo, contentísimos!",
  },
  {
    name: "Alex Maza",
    rating: 5,
    meta: "Nuevo Cliente",
    text: "Tanto el corte de pelo muy bien elaborado como el trato familiar y atento por el personal son inmejorables, y un 10/10. El local, igualmente, atractivo, limpio y agradable. Muy recomendable, sin duda repetiré",
  },
  {
    name: "David Crespo",
    rating: 5,
    meta: "Cliente habitual",
    text: "Para todos los que vivan en el alisal la mejor barbería sin duda. Gran profesional Rafa vargas",
  },
  {
    name: "Felipe",
    rating: 5,
    meta: "Cliente habitual",
    text: "Gran barbería, muy bonita, muy arreglada y un equipo de barberos excelente. Muy recomendable",
  },
  {
    name: "Hugo",
    rating: 5,
    meta: "Nuevo Cliente",
    text: "Trato de 10, corte de 10, en general servicio de 10 👍",
  },
  {
    name: "Sergio Martín",
    rating: 5,
    meta: "Nuevo Cliente",
    text: "Ambiente elegante, puntualidad y corte perfecto",
  },
] satisfies Review[];

function ReviewsSection() {
  return (
    <section
      className="py-4 section flex-col items-center overflow-hidden"
      aria-labelledby="reviews-title"
    >
      {/* SEO: JSON-LD de reseñas (ligero). Idealmente en page/layout si lo prefieres */}

      <div className="section-inner space-y-5">
        {/* Jerarquía: h2 (o h3 si ya tienes h1/h2 arriba) */}
        <h2 id="reviews-title" className="type-title-md text-center md:text-5xl">
          SI REPITEN, ES
          <br />
          POR ALGO
        </h2>

        <div className="relative mb-8 bottom-5">
          <ReviewsCarousel reviews={reviews} autoPlayMs={3800} />
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center">

          <svg
            className="block md:mt-4 h-[24px] w-[240px] sm:w-[380px] md:w-[520px] lg:w-[700px]"
            viewBox="0 0 220 24"
            preserveAspectRatio="none"
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

export default ReviewsSection;

