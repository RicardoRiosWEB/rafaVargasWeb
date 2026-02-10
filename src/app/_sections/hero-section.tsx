import Link from "next/link";
import Navbar from "../_components/Navbar";
import HeroBgCarousel from "../_components/HeroBgCarousel";

import rafacliente from "../../../public/InspiracionLandingRafaCliente.webp";
import barbaCerca from "../../../public/LandingBarberia.webp";
import vistaBarbers from "../../../public/VistaBarberos.webp";

export default function HeroSection() {
  return (
    <section className="section w-full">
      <main className="section-inner relative w-full min-h-screen overflow-hidden">
        {/* Fondo (carousel vertical) */}
        <HeroBgCarousel
          images={[rafacliente, barbaCerca, vistaBarbers]}
          intervalMs={4500}
          durationMs={900}
        />

        {/* Oscurecimiento general */}
        <div className="absolute inset-0 z-10 bg-enfasis-800/37" />

        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full z-30">
          <Navbar />
        </div>

        {/* Contenido */}
        <div className="relative z-20 h-screen w-full">
          <h3 className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 type-title-lg text-center ">
            EL DETALLE <br /> MARCA LA <br />
            <span className="text-logo-100 ">DIFERENCIA</span>
          </h3>

          <Link
            href="https://booksy.com/es-es/dl/show-business/168633?utm_medium=c2c_referral"
            className="
              absolute left-1/2 bottom-[19vh] -translate-x-1/2
              border-5 border-logo-100 px-6 py-3 type-cta
              z-40
              transition-transform duration-250 ease-out
              hover:scale-[1.06] active:scale-[0.98]
              group
            "
          >
            <span className="relative inline-block pb-1">
              Reservar
              <span
                aria-hidden="true"
                className="
                  absolute left-0 bottom-0 block h-1 w-full bg-logo-100
                  origin-left scale-x-0
                  transition-transform duration-250 ease-out
                  [@media(hover:hover)]:group-hover:scale-x-100
                  [@media(hover:none)]:group-active:scale-x-100
                "
              />
            </span>
          </Link>
        </div>
      </main>
    </section>
  );
}



























/*
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.svg"
import barbacerca from "../../../public/LandingBarberia.png"
import rafacliente from "../../../public/InspiracionLandingRafaCliente.png"




export default function HeroSection() {
  return (
    <section className="section flex items-center w-full">
      <main className="section-inner w-full flex flex-col items-center overflow-hidden">

        <Image src={rafacliente} alt="dfsf" className="-z-50 absolute" />
        <div className="h-50 w-full absolute z-10 bg-gradient-to-b from-enfasis via-60% via-gradientvia-600/20 to-enfasis/0">
        </div>
        <div className="h-screen w-screen absolute z-0 bg-enfasis-800\600"></div>
        <header className="w-full flex flex-col items-center">
          <div className="flex items-center">
            <Image src={Logo} alt="logo" width="200" />
          </div>
          

          <nav className="flex items-center  relative bottom-12 space-x-3">
            <Link rel="stylesheet" href="/" className="type-body text-logo-100" >Cortes</Link>
            <Link rel="stylesheet" href="/" className="type-body text-logo-100" >Conoce</Link>
            <Link rel="stylesheet" href="/" className="type-body text-logo-100">Contacta</Link>
          </nav>
        </header>

        <h3 className="type-title-lg">EL DETALLE <br /> MARCA LA <br /><span className="text-logo-100">DIFERENCIA</span></h3>
        <Link href="/" className="border-6 border-logo-100 px-10 py-6 type-cta"> Reservar
        </Link>

      </main>
    </section>
  );
}


*/







/*
export default function HeroSection() {
  return (

      <section className="section bg-fondo-50">
        <div className="section-inner min-h-[90vh] w-full relative">
            <StarBackground/>
            <CircularChaosStars color="#fbbf24" count={35} className="absolute right-10 top-24 opacity-90"/>
            
            <div className="mt-32 z-0 px-12">
                <p className="  text-amber-900 text-small drop-shadow">
                    "Vidente y sanadora Psicoespiritual con Péndulo"</p>
                <p className="text-brand-600 text-h11 max-w-[800px]  font-bold drop-shadow-lg ">
                    Tu alma quiere que la escuches, es tu momento
                </p>
                <p className="mb-20 text-amber-900 text-small  text drop-shadow">
                    De obtener información con el método <span className="font-semibold text-2xl font-special mx-1.5">  Analítica del Alma</span><br />una experiencia transformadora para tu ser.
                </p>
                <Link href="/" className='z-20 py-3 px-6 text-cta text-white bg-violet-700 transition-colors duration-400 rounded-2xl'>Agendar Consulta</Link>
                
            </div>
        </div>
      </section>

  );
}*/

//   <p>gyu</p>