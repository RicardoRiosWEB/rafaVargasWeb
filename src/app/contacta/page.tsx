

import ContactSection from "../_sections/contact-section";
import Navbar from "../_components/Navbar";
import Link from "next/link";
const Divider = () => (
  <svg
    className="block w-full max-w-[700px] h-6  my-4"
    viewBox="0 0 220 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M 8 12 L 26 10.7 L 194 10.7 L 212 12 L 194 13.3 L 26 13.3 Z"
      fill="currentColor"
    />
  </svg>
)

function ContactaPage() {
  return (
    <main>
      <div className="static h-60"><Navbar /></div>
      <section className="section py-2 flex flex-col items-center ">
      <div className="section-inner py-4 w-full  flex flex-col items-center text-center">
        <Divider />

        <div>
          <h3 className="font-title text-xl font-medium mb-3 uppercase">Horarios</h3>
          <p className="font-title">
            Entre semana:<br />
            10:30 a 18:30<br />
            Fines de semana:<br />
            10:30 a 14:30
          </p>
        </div>

        <Divider />

        <div>
          <h3 className="font-title text-xl font-medium mb-3 uppercase">Teléfono</h3>
          <p className="font-title">+34 613 394 364</p>
        </div>
        <Divider />
                  <Link
            href="https://booksy.com/es-es/dl/show-business/168633?utm_medium=c2c_referral"
            className="
              inline-flex items-center justify-center
              border-[5px] border-logo-100 px-6 py-3 type-cta
              transition-transform duration-300 ease-out
              hover:scale-[1.06] active:scale-[0.98]
              group mt-2
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
      
    </main>
  );
}

export default ContactaPage