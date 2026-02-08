// src/app/_sections/reviews-section.tsx
import React from "react";
import Link from "next/link";
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
    meta: "Hace 1 semana",
    text: "Detalle brutal. Se nota el nivel en cada acabado. Volveré fijo.",
  },
  {
    name: "Dani Pérez",
    rating: 5,
    meta: "Hace 3 días",
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
    <section className="section flex-col items-center overflow-hidden">
      <div className="section-inner space-y-5">
        <h3 className="type-title-md text-center">
          SI REPITEN, ES
          <br />
          POR ALGO
        </h3>

        <div className="relative mb-10 bottom-5">
          <ReviewsCarousel reviews={reviews} autoPlayMs={4500} />
        </div>

        {/* Botón centrado + SVG a distancia 10 */}
        <div className="flex flex-col items-center">
          <Link
            href="https://booksy.com/es-es/dl/show-business/168633?utm_medium=c2c_referral"
            className="
              inline-flex items-center justify-center
              border-[5px] border-logo-100 px-6 py-3 type-cta
              transition-transform duration-300 ease-out
              hover:scale-[1.06] active:scale-[0.98]
              group
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

          <svg
            className="mt-10"
            width="700"
            height="24"
            viewBox="0 0 220 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="
                M 8 12
                L 26 10.7
                L 194 10.7
                L 212 12
                L 194 13.3
                L 26 13.3
                Z
              "
              fill="#F3F3F3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
