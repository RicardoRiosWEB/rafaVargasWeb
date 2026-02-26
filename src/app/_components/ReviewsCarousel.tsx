// src/app/_components/ReviewsCarousel.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

export type Review = {
  name: string;
  text: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  meta?: string;
};

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className={`size-4 ${filled ? "text-logo-100" : "text-logo-100/25"}`}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// Hook simple para detectar pantallas pequeñas (independiente de breakpoints Tailwind)
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);

    setMatches(mql.matches);

    if (mql.addEventListener) mql.addEventListener("change", onChange);
    else mql.addListener(onChange);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", onChange);
      else mql.removeListener(onChange);
    };
  }, [query]);

  return matches;
}

function ReviewCard({ review }: { review: Review }) {
  const rating = review.rating ?? 5;

  const MOBILE_MAX_CHARS = 110;

  const isSmallScreen = useMediaQuery("(max-width: 639px)");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!isSmallScreen) setExpanded(false);
  }, [isSmallScreen]);

  const fullText = review.text ?? "";
  const isLongOnMobile = isSmallScreen && fullText.length > MOBILE_MAX_CHARS;

  const displayText =
    isLongOnMobile && !expanded
      ? `${fullText.slice(0, MOBILE_MAX_CHARS).trimEnd()}…`
      : fullText;

  return (
    <article className="h-full w-full bg-white/5 backdrop-blur p-6 md:p-8 ">
      <div
        className="flex items-center justify-center gap-1"
        aria-label={`${rating} de 5`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} filled={i < rating} />
        ))}
      </div>

      <div className="mt-4 text-center">
        <p className="font-title text-xl sm:text-2xl text-white">{review.name}</p>
        {review.meta ? (
          <p className="mt-1 text-sm text-white/50">{review.meta}</p>
        ) : null}
      </div>

      <p className="mt-4 font-title text-base sm:text-[17px] leading-relaxed text-white/85 text-center">
        <span>“</span>
        {displayText}
        <span>”</span>
      </p>

      {isLongOnMobile ? (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 block w-fit mx-auto font-title text-sm text-logo-100/90 hover:text-logo-100 underline underline-offset-4"
          aria-expanded={expanded}
        >
          {expanded ? "<leer menos>" : "<leer más>"}
        </button>
      ) : null}
    </article>
  );
}

export default function ReviewsCarousel({
  reviews,
  autoPlayMs = 4500,
}: {
  reviews: Review[];
  autoPlayMs?: number;
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [docHidden, setDocHidden] = useState(false);

  // ✅ Scroll al item usando rects (más estable en desktop, incluso con scale/zoom)
  const scrollToIndex = (idx: number) => {
    const track = trackRef.current;
    const item = itemRefs.current[idx];
    if (!track || !item) return;

    const trackRect = track.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();

    const trackCenter = trackRect.left + trackRect.width / 2;
    const itemCenter = itemRect.left + itemRect.width / 2;

    const delta = itemCenter - trackCenter;
    const max = track.scrollWidth - track.clientWidth;

    const target = track.scrollLeft + delta;
    const clamped = Math.max(0, Math.min(max, target));

    setActiveIndex(idx); // feedback inmediato en dots
    track.scrollTo({ left: clamped, behavior: "smooth" });
  };

  // ✅ Activo por “centro” del carrusel (sin IntersectionObserver)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;

    const computeActive = () => {
      raf = 0;
      const center = track.scrollLeft + track.clientWidth / 2;

      let bestIdx = 0;
      let bestDist = Number.POSITIVE_INFINITY;

      itemRefs.current.forEach((node, idx) => {
        if (!node) return;
        const nodeCenter = node.offsetLeft + node.clientWidth / 2;
        const dist = Math.abs(nodeCenter - center);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = idx;
        }
      });

      setActiveIndex(bestIdx);
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(computeActive);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // inicial
    onScroll();

    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [reviews.length]);

  // visible en pantalla (para autoplay)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), {
      threshold: 0.2,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // tab oculta
  useEffect(() => {
    const onVis = () => setDocHidden(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    onVis();
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // ✅ Evita que se quede “paused” pillado en desktop si sueltas el ratón fuera
  useEffect(() => {
    if (!paused) return;

    const resume = () => setPaused(false);
    window.addEventListener("pointerup", resume);
    window.addEventListener("pointercancel", resume);
    window.addEventListener("blur", resume);

    return () => {
      window.removeEventListener("pointerup", resume);
      window.removeEventListener("pointercancel", resume);
      window.removeEventListener("blur", resume);
    };
  }, [paused]);

  // autoplay
  useEffect(() => {
    if (paused) return;
    if (docHidden) return;
    if (!isInView) return;
    if (reviews.length <= 1) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReducedMotion) return;

    let t: number | null = null;

    const tick = () => {
      const next = (activeIndex + 1) % reviews.length;
      scrollToIndex(next);
      t = window.setTimeout(tick, autoPlayMs);
    };

    t = window.setTimeout(tick, autoPlayMs);

    return () => {
      if (t) window.clearTimeout(t);
    };
  }, [activeIndex, autoPlayMs, paused, reviews.length, isInView, docHidden]);

  const pause = () => setPaused(true);
  const resume = () => setPaused(false);

  return (
    <section ref={sectionRef} className="section pt-4 pb-2 md:pt-8 bg-[var(--background)]">
      <div className="section-inner">
        <div className="relative mt-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />

          <div
            ref={trackRef}
            onMouseEnter={pause}
            onMouseLeave={resume}
            onPointerDown={pause}
            onPointerUp={resume}
            onPointerCancel={resume}
            onPointerLeave={resume}
            className="
              flex gap-4
              overflow-x-auto scroll-smooth
              snap-x snap-mandatory
              px-[7vw] sm:px-[10vw]
              scroll-px-[7vw] sm:scroll-px-[10vw]
              pb-2
              touch-pan-x
              [-ms-overflow-style:none] [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {reviews.map((r, idx) => {
              const isActive = idx === activeIndex;

              return (
                <div
                  key={`${r.name}-${idx}`}
                  ref={(node) => {
                    itemRefs.current[idx] = node;
                  }}
                  className={`
                    snap-center shrink-0
                    w-[86%] sm:w-[72%] md:w-[56%] lg:w-[44%]
                    transition-transform duration-300 ease-out
                    ${isActive ? "scale-[1.03]" : "scale-100"}
                    motion-reduce:transition-none
                  `}
                >
                  <ReviewCard review={r} />
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                className="h-2 rounded-full transition"
                aria-label={`Ir a reseña ${i + 1}`}
              >
                <span
                  className={`block h-2 rounded-full transition
                    ${i === activeIndex ? "w-6 bg-logo-100" : "w-2 bg-white/15 hover:bg-white/30"}
                  `}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}