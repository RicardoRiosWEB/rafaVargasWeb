import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.svg";

type NavItem = { href: string; label: string };

const NAV_ITEMS: NavItem[] = [
  { href: "/cortes", label: "Cortes" },
  { href: "/conoce", label: "Conoce" },
  { href: "/contacta", label: "Contacta" },
];

export default function Navbar() {
  return (
    <header className="absolute left-0 top-0 w-full z-30">
      {/* Gradiente / vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[240px] z-0 bg-gradient-to-b from-enfasis-800/90 via-60% via-gradientvia-600/20 to-enfasis-800/0"
      />

      {/* Contenido del header */}
      <div className="relative z-10 w-full flex flex-col items-center pt-6 bottom-14">
        {/* LOGO con animación */}
        <Link
          href="/"
          className="
            inline-flex items-center
            transition-transform duration-200 ease-out
            hover:scale-[1.03] active:scale-95
            focus-visible:scale-[1.03]
            focus-visible:outline-none
            touch-manipulation
          "
          aria-label="Ir al inicio"
        >
          <Image src={Logo} alt="logo" width={200} priority />
        </Link>

        <nav className="mt-4 flex items-center gap-4">
          {NAV_ITEMS.map((it) => (
            <Link
              key={it.href + it.label}
              href={it.href}
              className="
                relative inline-flex items-center
                px-2 py-2 cursor-pointer touch-manipulation select-none
                type-body text-logo-100 bottom-14
                transition-transform duration-200 ease-out
                hover:scale-105 active:scale-105 focus-visible:scale-105
                focus-visible:outline-none
                after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
                after:origin-left after:scale-x-0 after:bg-logo-100
                after:transition-transform after:duration-200 after:ease-out
                hover:after:scale-x-100 active:after:scale-x-100 focus-visible:after:scale-x-100
              "
            >
              {it.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
