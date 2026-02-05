// app/fonts.ts
import { Montserrat } from 'next/font/google'

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  // Para familias “variable” no hace falta weight; Next usa el eje wght
  variable: '--font-title', // definimos la CSS var que usaremos con Tailwind
})