import React from 'react'
import Image from 'next/image'
import porqueNos from "../../../public/PorqueNosotros12.webp"

/**
 * 
             <svg width="700" height="24" viewBox="0 0 700 24" xmlns="http://www.w3.org/2000/svg">
                <path d="
                    M 8 12
                    L 26 10.7
                    L 674 10.7
                    L 692 12
                    L 674 13.3
                    L 26 13.3
                    Z
                " fill="#F3F3F3"/>
            </svg>
 * 
 */
function WhyusSection() {
  return (
    <section className="section py-8 flex flex-col items-center overflow-hidden">
        <div className="section-inner flex flex-col items-center overflow-hidden text-center">

            {/* SVG arriba: separación 6 con el título */}
            <div className="flex justify-center mb-6 w-full">
                <svg
                className="block mx-auto mb-6 md:mb-8 w-full max-w-[700px] h-6"
                viewBox="0 0 220 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                >
                    <path d="M 8 12 L 26 10.7 L 194 10.7 L 212 12 L 194 13.3 L 26 13.3 Z" fill="#F3F3F3" />
                </svg>
            </div>
            {/* Título: separación 3 con el párrafo */}
            <h3 className="type-title-md mb-3 md:mb-4">
            ALTA BARBERÍA <br />
            <span className="type-title-lg text-logo-100">RAFA VARGAS</span>
            </h3>

            {/* Párrafo: separación 2 con la lista */}
            <p className="type-body mb-2 md:mb-3 mr-12 ml-12 text-center text-balance">
            Detrás de cada corte hay una intención: que te mires y digas “así sí”
            <br /><br />
            En el equipo Rafa Vargas Barber el detalle es nuestra forma de respetar tu estilo:
            precisión, dedicación y un trato cercano para que cada visita sea tu momento y tu mejor versión.
            </p>

            {/* Lista: separación 3 con la imagen */}
            <ul className="flex flex-col items-center mb-3 md:mb-4">
            <li className="type-body">- &nbsp; Asesoramiento real &nbsp; -</li>
            <li className="type-body">- &nbsp; Ritual de barbería &nbsp; -</li>
            <li className="type-body">- &nbsp; Calidad en cada servicio &nbsp; -</li>
            </ul>

            {/* Imagen: separación 6 con el SVG de abajo */}
            <Image
            src={porqueNos}
            alt="barberos"
            width={250}
            className="mb-6 md:mb-8 w-48 sm:w-64 md:w-100 h-auto"
            />

            <svg
            className="w-full max-w-[700px] h-6"
            viewBox="0 0 220 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            >
            <path d="M 8 12 L 26 10.7 L 194 10.7 L 212 12 L 194 13.3 L 26 13.3 Z" fill="#F3F3F3" />
            </svg>

        </div>
    </section>

  )
}

export default WhyusSection

/*
    <section className='section py-6 flex-col  items-center  overflow-hidden'>
        <div className='section-inner flex-col  items-center  overflow-hidden  space-y-3'>
            
                <svg width="700" height="24" viewBox="0 0 700 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="
                        M 8 12
                        L 26 10.7
                        L 194 10.7
                        L 212 12
                        L 194 13.3
                        L 26 13.3
                        Z
                    " fill="#F3F3F3" />
                </svg>
            
            <h3 className="type-title-md text-center mt-6">
                ALTA BARBERÍA <br />
                <span className="type-title-lg text-logo-100">RAFA VARGAS</span>
            </h3>
            <p className="type-body text-center">
                Detrás de cada corte hay una intención: que te mires y digas “así sí”<br/><br/>
    En el equipo Rafa Vargas Barber el detalle es nuestra forma de respetar tu estilo: precisión, dedicación y un trato cercano para que cada visita sea tu momento y tu mejor versión.
            </p>
            <ul className='flex-col  items-center text-center'>
                <li className='type-body'>- &nbsp; Asesoramiento real &nbsp; -</li>
                <li className='type-body'>- &nbsp; Ritual de barbería &nbsp; -</li>
                <li className='type-body'>- &nbsp; Calidad en cada servicio &nbsp; -</li>
            </ul>
            <Image src={porqueNos} alt='barberos ' width={200}/>
                <svg width="700" height="24" viewBox="0 0 700 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="
                        M 8 12
                        L 26 10.7
                        L 194 10.7
                        L 212 12
                        L 194 13.3
                        L 26 13.3
                        Z
                    " fill="#F3F3F3"/>
                </svg>
        </div>
    </section>


*/