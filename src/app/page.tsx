

import AboutUs from "@/components/AboutUs";
import EventShowcase from "@/components/EventShowcase";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Banquet Hall | New Delhi',
  description: 'Elegant banquet hall in New Delhi for weddings, events, and more.',
}
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
