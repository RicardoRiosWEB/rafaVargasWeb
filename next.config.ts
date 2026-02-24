import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",//"export" genera HTML/CSS/JS estático
  images: { unoptimized: true },
  trailingSlash: true, // recomendado en hosting estático
  
}

export default nextConfig

