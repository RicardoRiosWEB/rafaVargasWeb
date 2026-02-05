import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import rafacliente from "../../../public/InspiracionLandingRafaCliente.webp";

export default function HeroSection() {
  return (
    <section className="section flex items-center w-full">
      <main className="section-inner relative w-full flex flex-col items-center overflow-hidden min-h-screen">

        {/* Fondo */}
        <Image
          src={rafacliente}
          alt="Barber background"
          fill
          priority
          className="object-cover object-center z-0 max-h-screen"
        />

        {/* Oscurecimiento general (encima de la imagen) */}
        <div className="absolute inset-0 z-10 bg-enfasis-800/45" />

        {/* Gradiente/vignette (encima del oscurecimiento) */}
        <div className="h-50 w-full absolute inset-0 z-20 bg-gradient-to-b from-enfasis-800/90 via-60% via-gradientvia-600/20 to-enfasis-800/0" />

        {/* Contenido (por encima de TODO lo anterior) */}
        <div className="relative z-20 w-full flex flex-col items-center space-y-12">
          <header className="w-full flex flex-col items-center">
            <div className="flex items-center relative bottom-4">
              <Image src={Logo} alt="logo" width={200} />
            </div>

            <nav className="flex items-center relative bottom-16 space-x-3">
              <Link href="/" className="type-body text-logo-100">Cortes</Link>
              <Link href="/" className="type-body text-logo-100">Conoce</Link>
              <Link href="/" className="type-body text-logo-100">Contacta</Link>
            </nav>
          </header>

          <h3 className="type-title-lg text-center">
            EL DETALLE <br /> MARCA LA <br />
            <span className="text-logo-100">DIFERENCIA</span>
          </h3>

          <Link href="/" className="border-7 border-logo-100 px-8 py-4 type-cta">
            Reservar
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