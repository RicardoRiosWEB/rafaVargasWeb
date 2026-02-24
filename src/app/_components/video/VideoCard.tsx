import type { VideoItem } from "./types";
import Image from "next/image";

export default function VideoCard({
  item,
  onOpen,
}: {
  item: VideoItem;
  onOpen: () => void;
}) {
  return (
    <article
      data-card
      className="
        snap-center flex-none
        w-[82%]
        sm:w-[60%]
        md:w-[calc((100%-3rem)/3)]
        lg:w-[calc((100%-4rem)/3)]
      "
    >
      {/* TARJETA */}
      <div
        className="
          rounded-2xs overflow-hidden
          border-5 border-logo-100
          bg-enfasis-800/40
        "
      >
        <button
          onClick={onOpen}
          className="w-full text-left px-3 pt-3 pb-4 sm:px-4 sm:pt-4 sm:pb-5 lg:px-5 lg:pt-5 lg:pb-6 focus:outline-none"
          aria-label={`Ver video: ${item.title}`}
          type="button"
        >
          {/* PREVIEW (solo poster: NO carga el vídeo) */}
          <div className="relative rounded-2xs overflow-hidden border border-foreground/10 bg-black">
            <div className="aspect-[9/16] w-full relative">
              {item.poster ? (
                <Image
                  src={item.poster}
                  alt={`Preview de ${item.title}`}
                  fill
                  sizes="(max-width: 640px) 82vw, (max-width: 1024px) 60vw, 33vw"
                  className="object-cover"
                  draggable={false}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black" />
              )}

              {/* Overlay play */}
              <div className="absolute inset-0 grid place-items-center" aria-hidden>
                <div className="relative">
                  <div className="w-15 h-15 sm:w-17 sm:h-17 lg:w-20 lg:h-20 rounded-full bg-black/35 border border-foreground/20 backdrop-blur-sm" />
                  <svg
                    className="absolute inset-0 m-auto w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9 7.5v9l8-4.5-8-4.5Z"
                      fill="rgba(216,160,136,.95)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* TÍTULO DENTRO */}
          <p className="mt-3 text-center type-body text-foreground/90">
            - {item.title} -
          </p>
        </button>
      </div>
    </article>
  );
}