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
    <section className='section flex-col  items-center  overflow-hidden'>
        <div className='section flex-col  items-center  overflow-hidden py-14 space-y-5'>
            
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
            
            <h3 className="type-title-lg text-center">
                ALTA BARBERÍA <br />
                <span className="text-logo-100">RAFA VARGAS</span>
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
  )
}

export default WhyusSection