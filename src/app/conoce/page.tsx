import React from 'react'
import Navbar from '../_components/Navbar'
import Image from 'next/image'
import rafaImponente from "../../../public/RafaImponenteLogo2.webp"
import mikiPuesto from "../../../public/MIKIPUESTOVERTICAL2web.webp"
import rafaSilla from "../../../public/RAFASILLONVERTweb.webp"
import equipoPuesto from "../../../public/RafaMikiPuestoHorizontalweb.webp"
import ContactSection from '../_sections/contact-section'

function ConocePage() {
  return (
    <main>
        <div className="static h-60"><Navbar /></div>
        <h3 className="type-title-md m-6 md:m-8 text-center">
            YO SOY <br />
            <span className="type-title-lg text-logo-100">RAFA VARGAS</span>
        </h3>
        <Image src={rafaImponente} alt="rafa vargas con logo del local" />
        <p className="type-body mb-2 md:mb-3 mr-12 ml-12  text-balance m-6">
            <span className='font-medium'>Detrás de cada corte hay una historia. </span>
            <br />
            Llegué desde Venezuela buscando una oportunidad y la encontré trabajando duro, paso a paso. Con los años —y con mucha constancia— . 
            Me di cuenta de que hacía feliz a la gente con mi trabajo, me decían Rafa tienes que montar tu propio negocio. Así que les tomé la palabra.<br/> <br/>
            Y como los buenos proyectos se construyen en equipo, lo hago junto a Miki, mi amigo y compañero de batalla. Aquí no solo vienes a cortarte el pelo: vienes a sentirte como en casa.
        </p>
        <h3 className="type-title-md m-6 md:m-8 text-center">
            EL EQUIPO 
        </h3>
        <Image src={equipoPuesto} alt="equipo de rafa vargas" />
         <h3 className="type-title-md m-6 md:m-8 text-center">
            SIEMPRE LA<br />
            <span className="type-title-lg text-logo-100 font-normal">MEJOR ATENCIÓN</span>
        </h3>
        <Image src={mikiPuesto} alt="miki barbero de rafa vargas" />
                <h3 className="type-title-md m-6 md:m-8 text-center">
            MIKI <br />
            <span className="type-title-lg text-logo-100 font-normal">"LA CLASE"</span>
        </h3>
        <Image src={rafaSilla} alt="rafa vargas sentado en sillon" />
         <h3 className="type-title-md m-6 md:m-8 text-center">
            RAFA <br />
            <span className="type-title-lg text-logo-100 font-normal">"LA CALIDAD"</span>
        </h3>
        <ContactSection/>
    </main>
  )
}

export default ConocePage