import React from "react"
import Link from "next/link"
import Image from "next/image"
import SillasBarberia from "../../../public/sillasBarberia.webp"

function LocationSection() {
  return (
    <section className="section flex-col items-center overflow-hidden py-6">
      <div className="section-inner space-y-3">
        <h3 className="type-title-md text-center">
          ENTRA FÁCIL<br /> SAL
          <span className="text-logo-100 type-title-lg"> IMPECABLE</span>
        </h3>

        <div className="flex justify-center">
          <Link
            href="https://maps.app.goo.gl/gRUcuB8DKjTZ1GH68"
            className="relative block w-[320px] h-[180px] overflow-hidden rounded-xl"
            aria-label="Ver ubicación en Google Maps"
          >
            {/* Imagen */}
            <Image
              src={SillasBarberia}
              alt="Barber background"
              fill
              priority
              className="object-cover object-center z-0"
            />

            {/* Oscurecimiento */}
            <div className="absolute inset-0 z-10 bg-enfasis-800/55" />

            {/* Texto centrado */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <p className="font-title text-xl text-white tracking-wide">
                VER UBICACIÓN
              </p>
            </div>
          </Link>
        </div>

        <p className="font-title text-center mt-3">
          Pl. los Pinos, 2, Local 4 AB,<br /> Alisal, Santander, Cantabria
        </p>
      </div>
    </section>
  )
}

export default LocationSection



/**
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