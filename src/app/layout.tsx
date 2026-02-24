// src/app/layout.tsx
import type { Metadata } from "next"
import "./globals.css"
import { montserrat } from "./fonts"

export const metadata: Metadata = {
  metadataBase: new URL("https://rafavargasbarber.com"),
  title: {
    default: "Rafa Vargas Barber | Alta barbería en Santander",
    template: "%s | Rafa Vargas Barber",
  },
  description:
    "Alta barbería en Santander. Cortes clásicos y degradados, barba y detalle impecable. Reserva tu cita en Rafa Vargas Barber.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://rafavargasbarber.com",
    siteName: "Rafa Vargas Barber",
    title: "Rafa Vargas Barber | Alta barbería en Santander",
    description:
      "Alta barbería en Santander. Cortes clásicos y degradados, barba y detalle impecable. Reserva tu cita en Rafa Vargas Barber.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafa Vargas Barber | Alta barbería en Santander",
    description:
      "Alta barbería en Santander. Cortes clásicos y degradados, barba y detalle impecable. Reserva tu cita en Rafa Vargas Barber.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  )
}
