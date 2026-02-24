// src/app/page.tsx
import type { Metadata } from "next";

import HeroSection from "./_sections/hero-section";
import WhyusSection from "./_sections/whyus-section";
import ReviewsSection from "./_sections/reviews-section";
import LocationSection from "./_sections/location-section";
import ContactSection from "./_sections/contact-section";
import VideoSection from "./_sections/video-section"

const title = "Rafa Vargas Barber | Alta barbería en Santander";
const description =
  "Alta barbería en Santander. Cortes clásicos y degradados, barba y detalle impecable. Reserva tu cita en Rafa Vargas Barber.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://rafavargasbarber.com" },
  openGraph: {
    title,
    description,
    url: "https://rafavargasbarber.com",
    type: "website",
    siteName: "Rafa Vargas Barber",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    name: "Rafa Vargas Barber",
    url: "https://rafavargasbarber.com",
    logo: "https://rafavargasbarber.com/logo.svg",
    sameAs: [
      "https://www.instagram.com/rafavargasbarber",
      "https://www.tiktok.com/@rafavargasbarber",
    ],
    // Dirección (la tuya, según tu LocationSection)
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pl. los Pinos 2, Local 4 AB",
      addressLocality: "Santander",
      addressRegion: "Cantabria",
      addressCountry: "ES",
    },
  };

  return (
    <>
      {/* JSON-LD (SEO) */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection />
      <VideoSection/>
      <WhyusSection />
      <ReviewsSection />
      <LocationSection />
      <ContactSection />
    </>
  );
}//<VideoSection/>

