import Image from "next/image";

import HeroSection from "./_sections/hero-section";
import WhyusSection from "./_sections/whyus-section";
import ReviewsSection from "./_sections/reviews-section";
import LocationSection from "./_sections/location-section";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <WhyusSection/>
      <ReviewsSection/>
      <LocationSection/>
    </>
  );
}
