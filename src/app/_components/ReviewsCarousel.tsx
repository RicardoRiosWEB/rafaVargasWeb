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

function ReviewCard({ review }: { review: Review }) {
  const rating = review.rating ?? 5;

  return (
    <article className="h-full w-full bg-white/5 backdrop-blur p-5 sm:p-6">
      <div className="flex items-center justify-center gap-1" aria-label={`${rating} de 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} filled={i < rating} />
        ))}
      </div>

      <div className="mt-4 text-center">
        <p className="font-title text-xl sm:text-2xl text-white">{review.name}</p>
        {review.meta ? <p className="mt-1 text-sm text-white/50">{review.meta}</p> : null}
      </div>

      <p className="mt-4 font-title text-base sm:text-[17px] leading-relaxed text-white/85 text-center">
        <span className="text-logo-100/90">“</span>
        {review.text}
        <span className="text-logo-100/90">”</span>
      </p>
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

  // scroll solo horizontal
  const scrollToIndex = (idx: number) => {
    const track = trackRef.current;
    const item = itemRefs.current[idx];
    if (!track || !item) return;

    const max = track.scrollWidth - track.clientWidth;
    const target = item.offsetLeft - (track.clientWidth - item.clientWidth) / 2;
    const clamped = Math.max(0, Math.min(max, target));

    track.scrollTo({ left: clamped, behavior: "smooth" });
  };

  // slide activo
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const io = new IntersectionObserver(
      (entries) => {
        let bestIdx = 0;
        let bestRatio = 0;

        for (const e of entries) {
          const idx = Number((e.target as HTMLElement).dataset.idx ?? "0");
          if (e.isIntersecting && e.intersectionRatio > bestRatio) {
            bestIdx = idx;
            bestRatio = e.intersectionRatio;
          }
        }

        if (bestRatio > 0) setActiveIndex(bestIdx);
      },
      { root: track, threshold: [0.5, 0.6, 0.7, 0.8] }
    );

    itemRefs.current.forEach((node) => node && io.observe(node));
    return () => io.disconnect();
  }, [reviews.length]);

  // visible en pantalla (para autoplay)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), { threshold: 0.2 });
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

  // autoplay
  useEffect(() => {
    if (paused) return;
    if (docHidden) return;
    if (!isInView) return;
    if (reviews.length <= 1) return;

    const prefersReducedMotion =
      typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
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
    <section ref={sectionRef} className="section pt-4 pb-2  md:pt-8 bg-[var(--background)]">
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
                  data-idx={idx}
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

          {/* dots móvil + desktop */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                className={`
                  h-2 rounded-full transition
                  ${i === activeIndex ? "w-6 bg-logo-100" : "w-2 bg-white/15 hover:bg-white/30"}
                `}
                aria-label={`Ir a reseña ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
