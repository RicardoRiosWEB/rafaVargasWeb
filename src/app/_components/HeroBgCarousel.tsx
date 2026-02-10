"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useMemo, useState } from "react";

function getDiff(i: number, active: number, n: number) {
  // diff en rango [-floor(n/2), +floor(n/2)] para animación circular suave
  let diff = (i - active + n) % n;
  if (diff > n / 2) diff -= n;
  return diff;
}

export default function HeroBgCarousel({
  images,
  intervalMs = 4500,
  durationMs = 1200,
}: {
  images: StaticImageData[];
  intervalMs?: number;
  durationMs?: number;
}) {
  const n = images.length;
  const [active, setActive] = useState(0);

  // Respeta "reduced motion"
  const reduceMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  useEffect(() => {
    if (reduceMotion || n <= 1) return;

    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % n);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [intervalMs, n, reduceMotion]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {images.map((img, i) => {
        const diff = getDiff(i, active, n); // -1 arriba, 0 visible, +1 abajo, etc.
        const isActive = diff === 0;

        return (
          <div
            key={i}
            className="absolute inset-0 will-change-transform"
            style={{
              transform: `translateY(${diff * 100}%)`,
              transition: reduceMotion ? "none" : `transform ${durationMs}ms ease-in-out`,
            }}
          >
            <Image
              src={img}
              alt="Barber background"
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Opcional: un pelín de “zoom” sutil para look premium */}
            {/* <div className="absolute inset-0 scale-[1.03]" /> */}
          </div>
        );
      })}
    </div>
  );
}
