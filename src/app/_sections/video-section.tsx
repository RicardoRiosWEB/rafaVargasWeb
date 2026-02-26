
import React from "react";
import VideoCarousel from "../_components/video/VideoCarousel.client";
import type { VideoItem } from "../_components/video/types";

export default function VideoSection() {
const videos: VideoItem[] = [
  {
    id: "nuevabarberia",
    title: "Nueva Barbería",
    webm: "/videos/RAFAWEB.webm",
    mp4: "/videos/RAFAWEB.mp4", // si lo tienes
    poster: "/posters/RAFAWEB.webp",
    src: "/videos/RAFAWEB.mp4",
  },
  {
    id: "inauguracion",
    title: "Inauguración",
    webm: "/videos/bajacalidadInauguracion.webm",
    mp4: "/videos/bajacalidadInauguracion.mp4",
    poster: "/posters/inauguracion.webp",
    src: "/videos/bajacalidadInauguracion.mp4",
  },
  {
    id: "antesdespues",
    title: "Antes y Después",
    webm: "/videos/rikyantesdespues1080.webm",
    mp4: "/videos/rikyantesdespues1080.mp4",
    poster: "/posters/posterrikyantesdespues.webp",
    src: "/videos/rikyantesdespues1080.mp4",
  },
];

  return ( 
    <section className="section w-full py-12 md:pt-16" aria-labelledby="video-title">
      <div className="section-inner">
        <header className="text-center mb-7 md:mb-10">
          <h2 id="video-title" className="type-title-md tracking-wide px-4 md:text-5xl">
            {/* < 380px: 3 líneas exactas */}
            <span className="hidden max-[379px]:block">
              EL DETALLE <br />
              LO HACE <br />
              <span className="text-logo-100 type-title-lg md:text-5xl">IMPECABLE</span>
            </span>

            {/* >= 380px: tu versión original */}
            <span className="block max-[379px]:hidden">
              EL DETALLE LO
              <br />
              HACE <span className="text-logo-100 type-title-lg md:text-5xl">IMPECABLE</span>
            </span>
          </h2>
        </header>

        <div role="list" aria-label="Vídeos de Rafa Vargas Barber">
          <VideoCarousel videos={videos} />
        </div>
      </div>
    </section>
  );
}


