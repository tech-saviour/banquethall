"use client";

import AboutUs from "@/components/AboutUs";
import EventShowcase from "@/components/EventShowcase";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Hero/>
      <AboutUs/>
      <EventShowcase/>
      <Gallery/>
      <TestimonialCarousel/>
    </div>
  );
}
