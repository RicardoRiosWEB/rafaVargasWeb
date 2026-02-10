import React from "react"
import Link from "next/link"
import Image from "next/image"
import SillasBarberia from "../../../public/sillasBarberia.webp"

function LocationSection() {
  return (
    <section className="section flex-col items-center overflow-hidden pt-8 pb-14 sm:py-14">
      <div className="section-inner space-y-3">
        <h3 className="type-title-md text-center mb-6 mt-2">
          ENTRA FÁCIL<br /> SAL
          <span className="text-logo-100 type-title-lg"> IMPECABLE</span>
        </h3>

        <div className="flex justify-center">
          <div className="w-full">
            <Link
              href="https://maps.app.goo.gl/gRUcuB8DKjTZ1GH68"
              aria-label="Ver ubicación en Google Maps"
              className="
                group
                relative block
                w-screen mx-[calc(50%-50vw)]
                aspect-video
                overflow-hidden rounded-xl
                sm:w-[500px] sm:mx-auto
                transform-gpu
                transition-transform duration-300 ease-out
                hover:scale-[1.02]
                active:scale-[0.98]
              "
            >
              <Image
                src={SillasBarberia}
                alt="Barber background"
                fill
                priority
                className="object-cover object-center z-0"
              />

              {/* Overlay un poco más claro + se aclara más en hover/tap */}
              <div className="absolute inset-0 z-10 bg-enfasis-800/57 transition-opacity duration-300 group-hover:opacity-85 group-active:opacity-75" />

              {/* Contenido */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
                <p className="relative top-2 font-title text-xl font-medium text-white/90 tracking-wide text-shadow-stone-700">
                  VER UBICACIÓN
                </p>

                <svg
                  className="w-[220px] max-w-[80%] h-auto mb-6"
                  viewBox="0 0 220 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
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
                    fill="#D8A088"
                  />
                </svg>

                <p className="font-title text-center text-sm sm:text-base text-white/90 leading-snug">
                  Pl. los Pinos 2, Local 4 AB<br /> Alisal, Santander
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection













/*
import React from "react"
import Link from "next/link"
import Image from "next/image"
import SillasBarberia from "../../../public/sillasBarberia.webp"

import TijerasIcon2 from "../../../public/prueba222.png";

function LocationSection() {
  return (
    <section className="section flex-col items-center overflow-hidden py-8">
      <div className="section-inner space-y-3">
        <h3 className="type-title-md text-center mb-6">
          ENTRA FÁCIL<br /> SAL
          <span className="text-logo-100 type-title-lg"> IMPECABLE</span>
        </h3>

        <div className="flex justify-center">
          <Link
            href="https://maps.app.goo.gl/gRUcuB8DKjTZ1GH68"
            className="relative block w-[320px] h-[180px] overflow-hidden rounded-xl"
            aria-label="Ver ubicación en Google Maps"
          >
           
            <Image
              src={SillasBarberia}
              alt="Barber background"
              fill
              priority
              className="object-cover object-center z-0"
            />

            
            <div className="absolute inset-0 z-10 bg-enfasis-800/55" />

            
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <p className="font-title text-xl text-white tracking-wide">
                VER UBICACIÓN
              </p>
            </div>
            <svg
            className="mt-10 inset-0 z-20"
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
          </Link>
        </div>

        <p className="font-title text-center mt-3">
          Pl. los Pinos, 2, Local 4 AB,<br /> Alisal, Santander, Cantabria
        </p>

      </div>
    </section>
  )
}

export default LocationSection*/



/**
         <Image
          src={TijerasIcon2}
          alt="Icono tijeras"
          width={84}
          height={84}
          className="flex justify-self-center pointer-events-none select-none opacity-90 drop-shadow-sm animate-[spin_25s_linear_infinite] m-5"
        />
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
  Texto centrado + SVG debajo 
<div className="absolute inset-0 z-20 flex items-center justify-center">
  <div className="flex flex-col items-center">
    <p className="font-title text-xl text-white tracking-wide leading-none">
      VER UBICACIÓN
    </p>

    <svg
      className="mt-1 block mx-auto w-full max-w-[700px] h-6"
      viewBox="0 0 700 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M 8 12 L 26 10.7 L 194 10.7 L 212 12 L 194 13.3 L 26 13.3 Z"
        fill="#D8A088"
      />
    </svg>
  </div>
</div>
 * 
 */






/*import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SillasBarberia from "../../../public/sillasBarberia.webp"

function LocationSection() {
  return (
    
    <section className='section flex-col  items-center  overflow-hidden '>
        <div className="section-inner">
            <h3 className="type-title-md text-center">
            ENTRA FÁCIL<br /> SAL
            <span className="text-logo-100 type-title-lg"> IMPECABLE</span>
            </h3>
            <div className="flex items-center">
                <Link href="https://maps.app.goo.gl/gRUcuB8DKjTZ1GH68">
                  <Image
                    src={SillasBarberia}
                    alt="Barber background"
                    width="200"
                    priority
                    className="object-cover object-center z-0 max-h-screen"/>

                  <p className='font-title text-xl'> VER UBICACIÓN</p>
        
                  <div className="absolute inset-0 z-10 bg-enfasis-800/55" />
                </Link>
              </div>
              <p className="font-title text-center">Pl. los Pinos, 2, Local 4 AB,<br/> Alisal, Santander, Cantabria</p>
        </div>
    </section>
  )
}

export default LocationSection*/