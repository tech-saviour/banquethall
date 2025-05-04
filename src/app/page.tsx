"use client";

import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Hero/>
      <AboutUs/>
    </div>
  );
}
