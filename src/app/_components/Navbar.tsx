import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.svg";

type NavItem = { href: string; label: string };

const NAV_ITEMS: NavItem[] = [
  { href: "/cortes", label: "Cortes" },
  { href: "/cortes", label: "Conoce" },
  { href: "/contacto", label: "Contacta" },
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
        <Link href="/" className="flex items-center">
          <Image src={Logo} alt="logo" width={200} priority />
        </Link>

        <nav className="mt-4 flex items-center gap-4 ">
          {NAV_ITEMS.map((it) => (
            <Link
              key={it.href + it.label}
              href={it.href}
              className="relative type-body text-logo-100 bottom-14"
            >
              {it.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
