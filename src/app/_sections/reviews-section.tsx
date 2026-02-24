// src/app/_sections/reviews-section.tsx
import React from "react";
import Link from "next/link";
import Script from "next/script";
import ReviewsCarousel, { type Review } from "../_components/ReviewsCarousel";

const reviews = [
  {
    name: "Raúl Álvarez",
    rating: 5,
    meta: "Cliente habitual",
    text: "Rafa es un tío espectacular, siempre me voy muy contento después del corte.",
  },
  {
    name: "Iván Romero",
    rating: 5,
    meta: "Nuevo Cliente",
    text: "Detalle brutal. Se nota el nivel en cada acabado. Volveré fijo.",
  },
  {
    name: "Dani Pérez",
    rating: 5,
    meta: "Cliente Habitual",
    text: "Trato top y el degradado impecable. Recomendadísima.",
  },
  {
    name: "Sergio Martín",
    rating: 5,
    meta: "Hace 2 semanas",
    text: "Ambiente elegante, puntualidad y corte perfecto.",
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
        <h2 id="reviews-title" className="type-title-md text-center">
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
            className=" md:mt-4"
            width="700"
            height="24"
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

export default ReviewsSection;

