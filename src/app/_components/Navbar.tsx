"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "../../../public/logo.svg";

type NavItem = { href: string; label: string };

const NAV_ITEMS: NavItem[] = [
  { href: "/cortes", label: "Cortes" },
  { href: "/conoce", label: "Conoce" },
  { href: "/contacta", label: "Contacta" },
];

export default function Navbar() {
  const pathname = usePathname();

  const showBackHome = ["/cortes", "/conoce", "/contacta"].some(
    (base) => pathname === base || pathname.startsWith(base + "/")
  );

  // ✅ En móvil, si aparece "Inicio", reducimos el espacio entre links
  const navGapMobile = showBackHome ? "gap-3" : "gap-5";
  // (Opcional) también reduce un poco el padding horizontal en móvil
  const navItemPxMobile = showBackHome ? "px-2" : "px-3";

  return (
    <header className="absolute left-0 top-0 w-full z-30">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[240px] z-0 bg-gradient-to-b from-enfasis-800/90 via-60% via-gradientvia-600/20 to-enfasis-800/0"
      />

      <div
        className="
          relative z-10 w-full
          flex flex-col items-center
          pt-6
          -mt-14 md:-mt-10
        "
      >
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
          <Image
            src={Logo}
            alt="logo"
            width={220}
            className="h-auto w-50 md:w-55 lg:w-55 md:relative md:bottom-3"
            priority
          />
        </Link>

        <nav
          className={`mt-4 flex items-center ${navGapMobile} md:gap-3 md:relative md:bottom-5 bottom-15`}
        >
          {showBackHome && (
            <Link
              href="/"
              className={`
                relative inline-flex items-center
                cursor-pointer touch-manipulation select-none

                ${navItemPxMobile} py-2 md:px-2 md:py-1.5 
                text-logo-100 type-body
                md:text-xl 

                -mt-12 md:-mt-10
                md:relative md:bottom-2

                transition-transform duration-200 ease-out
                hover:scale-105 active:scale-105 focus-visible:scale-105
                focus-visible:outline-none

                after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
                after:origin-left after:scale-x-0 after:bg-logo-100
                after:transition-transform after:duration-200 after:ease-out
                hover:after:scale-x-100 active:after:scale-x-100 focus-visible:after:scale-x-100
              `}
            >
              Inicio
            </Link>
          )}

          {NAV_ITEMS.map((it) => (
            <Link
              key={it.href + it.label}
              href={it.href}
              aria-current={pathname === it.href ? "page" : undefined}
              className={`
                relative inline-flex items-center
                cursor-pointer touch-manipulation select-none

                ${navItemPxMobile} py-2 md:px-2 md:py-1.5
                text-logo-100 type-body
                md:text-xl 

                -mt-12 md:-mt-10
                md:relative md:bottom-2

                transition-transform duration-200 ease-out
                hover:scale-105 active:scale-105 focus-visible:scale-105
                focus-visible:outline-none

                after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
                after:origin-left after:scale-x-0 after:bg-logo-100
                after:transition-transform after:duration-200 after:ease-out
                hover:after:scale-x-100 active:after:scale-x-100 focus-visible:after:scale-x-100
              `}
            >
              {it.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
