"use client";

import React, { useEffect, useLayoutEffect, useRef, useState, useCallback } from "react";
import type { VideoItem } from "./types";
import VideoCard from "./VideoCard";

const THUMB_FRACTION = 0.35;

type DragState = {
  pointerId: number;
  trackLeft: number;
  travelPx: number;
  offsetPx: number;
  capturedEl: HTMLElement | null;
};

export default function VideoCarousel({ videos }: { videos: VideoItem[] }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const centersRef = useRef<number[]>([]);
  const dragRef = useRef<DragState | null>(null);

  const [scrollRatio, setScrollRatio] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<VideoItem | null>(null);

  const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

  const openVideo = (v: VideoItem) => {
    setSelected(v);
    setOpen(true);
  };

  const closeVideo = () => {
    setOpen(false);
    setTimeout(() => setSelected(null), 150);
  };

  const getNavBehavior = (): ScrollBehavior => {
    if (typeof window === "undefined") return "auto";
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    return reduce ? "auto" : "smooth";
  };

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeVideo();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const computeCenters = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-card]"));
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);

    const centers = cards.map((card) => {
      const desired = card.offsetLeft + card.offsetWidth / 2 - el.clientWidth / 2;
      return clamp(desired, 0, maxScroll);
    });

    centersRef.current = centers;
  }, []);

  const nearestIndexFromScrollLeft = useCallback((scrollLeft: number) => {
    const centers = centersRef.current;
    const n = centers.length;
    if (n <= 1) return 0;

    let lo = 0;
    let hi = n - 1;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (centers[mid] < scrollLeft) lo = mid + 1;
      else hi = mid;
    }

    if (lo === 0) return 0;
    const prev = lo - 1;
    return Math.abs(scrollLeft - centers[prev]) <= Math.abs(scrollLeft - centers[lo]) ? prev : lo;
  }, []);

  const ratioFromScrollLeft = useCallback((scrollLeft: number) => {
    const centers = centersRef.current;
    const n = centers.length;
    if (n <= 1) return 0;

    if (scrollLeft <= centers[0]) return 0;
    if (scrollLeft >= centers[n - 1]) return 1;

    let lo = 0;
    let hi = n - 2;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (centers[mid + 1] < scrollLeft) lo = mid + 1;
      else hi = mid - 1;
    }
    const i = clamp(lo, 0, n - 2);

    const a = centers[i];
    const b = centers[i + 1];
    const t = b === a ? 0 : (scrollLeft - a) / (b - a);

    return (i + t) / (n - 1);
  }, [clamp]);

  const scrollToIndex = useCallback(
    (index: number, behavior: ScrollBehavior) => {
      const el = scrollerRef.current;
      if (!el) return;

      if (centersRef.current.length !== videos.length) computeCenters();

      const centers = centersRef.current;
      const n = centers.length;
      if (n === 0) return;

      const i = clamp(index, 0, n - 1);
      const left = centers[i];

      el.scrollTo({ left, behavior });
      setActiveIndex(i);
      setScrollRatio(n > 1 ? i / (n - 1) : 0);
    },
    [computeCenters, videos.length]
  );

  const updateFromScroll = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const left = el.scrollLeft;

    setScrollRatio(ratioFromScrollLeft(left));
    const idx = nearestIndexFromScrollLeft(left);
    setActiveIndex(idx);
  }, [nearestIndexFromScrollLeft, ratioFromScrollLeft]);

  useLayoutEffect(() => {
    computeCenters();
    updateFromScroll();
  }, [computeCenters, updateFromScroll, videos.length]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let raf = 0;
    let settle = 0;

    const onScroll = () => {
      if (!raf) {
        raf = window.requestAnimationFrame(() => {
          raf = 0;
          updateFromScroll();
        });
      }

      window.clearTimeout(settle);
      settle = window.setTimeout(() => {
        const idx = nearestIndexFromScrollLeft(el.scrollLeft);
        scrollToIndex(idx, "auto");
      }, 110);
    };

    el.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      el.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
      window.clearTimeout(settle);
    };
  }, [nearestIndexFromScrollLeft, scrollToIndex, updateFromScroll]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    if (videos.length < 2) return;

    const id = requestAnimationFrame(() => {
      computeCenters();
      scrollToIndex(1, "auto");
    });

    return () => cancelAnimationFrame(id);
  }, [videos.length, computeCenters, scrollToIndex]);

  const onTrackPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;

    const centers = centersRef.current;
    const n = centers.length;
    if (n <= 1) return;

    const rect = track.getBoundingClientRect();
    const x = e.clientX - rect.left;

    const thumbW = rect.width * THUMB_FRACTION;
    const travel = Math.max(1, rect.width - thumbW);

    const desiredLeft = x - thumbW / 2;
    const ratio = clamp(desiredLeft / travel, 0, 1);

    const idx = Math.round(ratio * (n - 1));
    scrollToIndex(idx, getNavBehavior());
  };

  const onTrackKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!videos.length) return;

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollToIndex(activeIndex - 1, getNavBehavior());
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollToIndex(activeIndex + 1, getNavBehavior());
    } else if (e.key === "Home") {
      e.preventDefault();
      scrollToIndex(0, getNavBehavior());
    } else if (e.key === "End") {
      e.preventDefault();
      scrollToIndex(videos.length - 1, getNavBehavior());
    }
  };

  const onThumbPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();

    const track = trackRef.current;
    if (!track) return;

    const rect = track.getBoundingClientRect();
    const thumbW = rect.width * THUMB_FRACTION;
    const travel = Math.max(1, rect.width - thumbW);

    const thumbLeftPx = scrollRatio * travel;
    const pointerX = e.clientX - rect.left;
    const offsetPx = clamp(pointerX - thumbLeftPx, 0, thumbW);

    const capturedEl = e.currentTarget as unknown as HTMLElement;
    capturedEl.setPointerCapture(e.pointerId);

    dragRef.current = {
      pointerId: e.pointerId,
      trackLeft: rect.left,
      travelPx: travel,
      offsetPx,
      capturedEl,
    };

    e.preventDefault();
  };

  const onThumbPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag) return;
    if (e.pointerId !== drag.pointerId) return;

    const centers = centersRef.current;
    const n = centers.length;
    if (n <= 1) return;

    const x = e.clientX - drag.trackLeft;
    const desiredLeft = x - drag.offsetPx;
    const ratio = clamp(desiredLeft / drag.travelPx, 0, 1);

    const el = scrollerRef.current;
    if (!el) return;

    const pos = ratio * (n - 1);
    const i = Math.floor(pos);
    const t = pos - i;

    const a = centers[i] ?? centers[0];
    const b = centers[Math.min(i + 1, n - 1)] ?? centers[n - 1];
    const left = a + (b - a) * t;

    el.scrollTo({ left, behavior: "auto" });
    setScrollRatio(ratio);
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag) return;
    if (e.pointerId !== drag.pointerId) return;

    try {
      drag.capturedEl?.releasePointerCapture(drag.pointerId);
    } catch {}

    dragRef.current = null;

    const el = scrollerRef.current;
    if (!el) return;

    const idx = nearestIndexFromScrollLeft(el.scrollLeft);
    scrollToIndex(idx, getNavBehavior());
  };

  const thumbTravelPercent = (1 - THUMB_FRACTION) * 100;
  const thumbLeftPercent = scrollRatio * thumbTravelPercent;

  return (
    <>
      <div
        ref={scrollerRef}
        className="
          flex gap-4 md:gap-6 lg:gap-8
          overflow-x-auto pb-4 snap-x snap-mandatory
          [-ms-overflow-style:none] [scrollbar-width:none]
        "
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {videos.map((v) => (
          <VideoCard key={v.id} item={v} onOpen={() => openVideo(v)} />
        ))}
      </div>

      <div className="mt-3 flex justify-center select-none">
        <div
          ref={trackRef}
          onPointerDown={onTrackPointerDown}
          onKeyDown={onTrackKeyDown}
          tabIndex={0}
          role="slider"
          aria-label="Navegación del carrusel de vídeos"
          aria-valuemin={0}
          aria-valuemax={Math.max(0, videos.length - 1)}
          aria-valuenow={activeIndex}
          className="
            relative
            w-[260px] sm:w-[340px] md:w-[420px] lg:w-[520px]
            h-8
            cursor-pointer outline-none
            focus-visible:ring-2 focus-visible:ring-foreground/25
          "
        >
          <div
            className="
              absolute left-0 right-0 top-1/2 -translate-y-1/2
              h-[10px] md:h-[6px]
              bg-foreground/15
              overflow-hidden
            "
          >
            <div
              onPointerDown={onThumbPointerDown}
              onPointerMove={onThumbPointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
              className="
                absolute top-0 left-0 h-full
                bg-foreground/65
                cursor-grab active:cursor-grabbing
                touch-none
              "
              style={{
                width: `${THUMB_FRACTION * 100}%`,
                left: `${thumbLeftPercent}%`,
              }}
              aria-hidden
            />
          </div>

          <div className="hidden md:flex absolute inset-0 items-center justify-between px-1.5">
            {videos.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(ev) => {
                  ev.stopPropagation();
                  scrollToIndex(i, getNavBehavior());
                }}
                className="h-7 w-7 grid place-items-center"
                aria-label={`Ir al vídeo ${i + 1}`}
              >
                <span
                  className={[
                    "block transition",
                    "rotate-45",
                    i === activeIndex ? "h-2 w-2 bg-foreground/85" : "h-1.5 w-1.5 bg-foreground/25",
                  ].join(" ")}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {open && selected && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <div className="absolute inset-0 bg-enfasis-800/80 backdrop-blur-sm" />

          <div
            className="
              relative z-[61]
              h-[90vh] max-h-[90vh]
              w-auto max-w-[90vw]
              aspect-[9/16]
              rounded-2xs overflow-hidden
              border border-foreground/15
              shadow-[0_20px_80px_rgba(0,0,0,.55)]
              bg-black
            "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideo}
              aria-label="Cerrar"
              className="
                absolute top-3 right-3 z-10
                rounded-full px-3 py-1
                bg-enfasis-800/70 border border-foreground/15
                text-foreground/90 text-sm
                hover:bg-enfasis-800
                active:scale-95 transition
              "
              type="button"
            >
              X
            </button>

            <video
              key={selected.id}
              controls
              autoPlay
              playsInline
              preload="metadata"
              poster={selected.poster}
              className="w-full h-full object-contain sm:object-cover bg-black"
              controlsList="nodownload noremoteplayback noplaybackrate"
              disablePictureInPicture
              onContextMenu={(e) => e.preventDefault()}
            >
              {/* Prioridad: MP4 (mejor compatibilidad iPhone/Safari) */}
              {selected.mp4 && <source src={selected.mp4} type="video/mp4" />}

              {/* Alternativa: WebM */}
              {selected.webm && <source src={selected.webm} type="video/webm" />}

              {/* Fallback por si aún usas selected.src */}
              {!selected.mp4 && !selected.webm && selected.src && <source src={selected.src} />}

              Tu navegador no soporta reproducción de vídeo.
            </video>
          </div>
        </div>
      )}
    </>
  );
}