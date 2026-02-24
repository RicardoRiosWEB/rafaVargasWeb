// app/fonts.ts
import { Montserrat } from "next/font/google"

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
})
//no hace fakta declarar el peso en familias de varriables