"use client";

import React, { useMemo, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";

export type BeforeAfterItem = {
  id: string;
  before: StaticImageData;
  after: StaticImageData;
  altBefore?: string;
  altAfter?: string;
  label?: string;
};

export default function BeforeAfterFlipCarousel({
  items,
  className = "",
}: {
  items: BeforeAfterItem[];
  className?: string;
}) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const [flippedById, setFlippedById] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(items.map((it) => [it.id, false]))
  );

  const normalized = useMemo(() => {
    const base = { ...flippedById };
    for (const it of items) if (!(it.id in base)) base[it.id] = false;
    return base;
  }, [items, flippedById]);

  const toggle = (id: string) => {
    setFlippedById((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const scrollByCards = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = 320;
    const gap = 16;
    el.scrollBy({ left: dir * (cardWidth + gap), behavior: "smooth" });
  };

  return (
    <div className={`relative ${className}`}>
      {/* Flechas (desktop) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden md:flex items-center justify-between">
        <button
          type="button"
          onClick={() => scrollByCards(-1)}
          className="
            pointer-events-auto ml-2 inline-flex h-10 w-10 items-center justify-center
            rounded-full bg-enfasis-800/60 text-white backdrop-blur
            hover:bg-enfasis-800/75 active:scale-95 transition
          "
          aria-label="Anterior"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => scrollByCards(1)}
          className="
            pointer-events-auto mr-2 inline-flex h-10 w-10 items-center justify-center
            rounded-full bg-enfasis-800/60 text-white backdrop-blur
            hover:bg-enfasis-800/75 active:scale-95 transition
          "
          aria-label="Siguiente"
        >
          ›
        </button>
      </div>

      {/* Carril */}
      <div
        ref={scrollerRef}
        className="
          flex gap-4 overflow-x-auto scroll-smooth
          snap-x snap-mandatory pb-2
          [-ms-overflow-style:none] [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {items.map((it) => {
          const flipped = normalized[it.id] ?? false;

          return (
            <article key={it.id} className="snap-center shrink-0 w-[280px] sm:w-[320px]">
              {/* Tarjeta clicable */}
              <div
                role="button"
                tabIndex={0}
                onClick={() => toggle(it.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle(it.id);
                  }
                }}
                aria-pressed={flipped}
                aria-label={`Alternar antes y después${it.label ? `: ${it.label}` : ""}`}
                className="
                  group relative w-full
                  rounded-xs overflow-hidden
                  outline-none isolate
                  focus-visible:ring-2 focus-visible:ring-logo-100
                  focus-visible:ring-offset-2 focus-visible:ring-offset-enfasis-800
                  active:scale-[0.99] transition
                  [perspective:1200px]
                  will-change-transform
                "
              >
                {/* CONTENEDOR 3D (vertical flip) */}
                <div
                  className={`
                    relative w-full aspect-[4/5]
                    transition-transform duration-500
                    will-change-transform
                    [transform-style:preserve-3d]
                    [-webkit-transform-style:preserve-3d]
                    ${flipped ? "[transform:rotateX(180deg)]" : "[transform:rotateX(0deg)]"}
                  `}
                >
                  {/* --- CARA FRONTAL (ANTES) --- */}
                  <div
                    className="
                      absolute inset-0
                      bg-enfasis-800
                      border border-fondo-500/15
                      shadow-[0_14px_40px_rgba(0,0,0,0.35)]
                      [backface-visibility:hidden]
                      [-webkit-backface-visibility:hidden]
                      [transform:translateZ(0.1px)]
                      will-change-transform
                    "
                  >
                    {/* Label arriba (ANTES) */}
                    {it.label ? (
                      <div className="absolute left-3 top-3 z-20 rounded-full bg-enfasis-800/55 px-3 py-1 text-xs text-white backdrop-blur">
                        {it.label}
                      </div>
                    ) : null}

                    {/* Imagen BEFORE */}
                    <div className="absolute inset-0">
                      <Image
                        src={it.before}
                        alt={it.altBefore ?? "Antes"}
                        fill
                        sizes="(max-width: 640px) 280px, 320px"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        priority={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-enfasis-800/10 via-transparent to-enfasis-800/45" />
                    </div>

                    {/* Barra inferior: VER DESPUÉS */}
                    <div className="absolute left-0 right-0 bottom-0 z-30 flex items-center justify-center py-3 bg-logo-100/95 text-white tracking-wide">
                      <span className="text-sm sm:text-base drop-shadow">
                        △&nbsp;&nbsp;VER DESPUÉS:
                      </span>
                    </div>
                  </div>

                  {/* --- CARA TRASERA (DESPUÉS) --- */}
                  <div
                    className="
                      absolute inset-0
                      bg-enfasis-800
                      border border-fondo-500/15
                      shadow-[0_14px_40px_rgba(0,0,0,0.35)]
                      [backface-visibility:hidden]
                      [-webkit-backface-visibility:hidden]
                      [transform:rotateX(180deg)_translateZ(0.1px)]
                      will-change-transform
                    "
                  >
                    {/* Barra superior: VER ANTES */}
                    <div className="absolute left-0 right-0 top-0 z-30 flex items-center justify-center py-3 bg-logo-100/95 text-white tracking-wide">
                      <span className="text-sm sm:text-base drop-shadow">
                        VER ANTES
                      </span>
                    </div>

                    {/* Label abajo (DESPUÉS) */}
                    {it.label ? (
                      <div className="absolute left-3 bottom-3 z-20 rounded-full bg-enfasis-800/55 px-3 py-1 text-xs text-white backdrop-blur">
                        {it.label}
                      </div>
                    ) : null}

                    {/* Imagen AFTER */}
                    <div className="absolute inset-0">
                      <Image
                        src={it.after}
                        alt={it.altAfter ?? "Después"}
                        fill
                        sizes="(max-width: 640px) 280px, 320px"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        priority={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-enfasis-800/10 via-transparent to-enfasis-800/45" />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

    </div>
  );
}
