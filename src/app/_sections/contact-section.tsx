import React from "react";
import Link from "next/link";

const Divider = () => (
  <svg
    className="block w-full max-w-[700px] h-6 my-4"
    viewBox="0 0 220 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M 8 12 L 26 10.7 L 194 10.7 L 212 12 L 194 13.3 L 26 13.3 Z"
      fill="currentColor"
    />
  </svg>
  
);
function ContactSection() {
  return (
    <section
      className="section py-2 flex flex-col items-center bg-fondo-500"
      aria-labelledby="contact-title"
    >
      <div className="section-inner py-4 w-full flex flex-col items-center text-center">
        <Divider />

        {/* Título semántico para la sección */}
        <h2 id="contact-title" className="sr-only">
          Contacto y horarios
        </h2>

        {/* Horarios: <time> para semántica */}
        <div>
          <h3 className="font-title text-xl font-medium mb-4 uppercase">
            Horarios
          </h3>

          <div className="font-title">
            <p>
              Entre semana:
              <br />
              <time dateTime="09:30">9:30</time> a <time dateTime="14:00">14:00</time>
              <br />
              <time dateTime="15:00">15:00</time> a <time dateTime="20:00">20:00</time>
            </p>

            <br />

            <p>
              Sábados:
              <br />
              <time dateTime="09:30">9:30</time> a <time dateTime="14:00">14:00</time>
            </p>
          </div>
        </div>

        <Divider />

        {/* Teléfono: link tel: */}
        <div>
          <h3 className="font-title text-xl font-medium mb-4 uppercase">
            Teléfono
          </h3>
          <p className="font-title">
            <a
              href="tel:+34613394364"
              aria-label="Llamar al teléfono 613 394 364"
              className="underline-offset-4 hover:underline"
            >
              +34 613 394 364
            </a>
          </p>
        </div>

        <Divider />

        {/* WhatsApp: links wa.me */}
        <div>
          <h3 className="font-title text-xl font-medium mb-4 uppercase">
            WhatsApp
          </h3>
          <p className="font-title">
            <a
              href="https://wa.me/34613394364"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir WhatsApp con el número 613 394 364"
              className="underline-offset-4 hover:underline"
            >
              +34 613 394 364
            </a>
            <br />
            <a
              href="https://wa.me/34643004667"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir WhatsApp con el número 643 004 667"
              className="underline-offset-4 hover:underline"
            >
              +34 643 004 667
            </a>
          </p>
        </div>

        <Divider />

        {/* CTA con label más explícito */}
        <Link
          href="https://booksy.com/es-es/dl/show-business/168633?utm_medium=c2c_referral"
          aria-label="Reservar cita en Booksy"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center
            border-[5px] border-logo-100 px-6 py-3 type-cta
            transition-transform duration-300 ease-out
            hover:scale-[1.06] active:scale-[0.98]
            group mt-2 md:px-9 md:py-5
          "
        >
          <span className="relative inline-block pb-1">
            Reservar
            <span
              aria-hidden="true"
              className="
                absolute left-0 bottom-0 block h-1 w-full bg-logo-100
                origin-left scale-x-0
                transition-transform duration-300 ease-out
                [@media(hover:hover)]:group-hover:scale-x-100
                [@media(hover:none)]:group-active:scale-x-100
              "
            />
          </span>
        </Link>
      </div>
    </section>
  );
}

export default ContactSection;
