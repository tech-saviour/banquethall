"use client";

import AboutUs from "@/components/AboutUs";
import EventShowcase from "@/components/EventShowcase";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Hero/>
      <AboutUs/>
      <EventShowcase/>
    </div>
  );
}
