"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const testimonials = [
  {
    name: "Rachael Schumm",
    text: "Molestias ut tenetur eos placeat aliquam quaerat cumque. Quis autem id sed doloribus eos et enim et dolor.",
    image: "https://res.cloudinary.com/dtswx9pbk/image/upload/v1746465663/testimonial_hhvyml.png",
  },
  {
    name: "Michael Doe",
    text: "Quisquam voluptatum totam ad, architecto nemo reprehenderit tempora ipsam.",
    image: "https://res.cloudinary.com/dtswx9pbk/image/upload/v1746465830/testimonial1_snnius.png",
  },
  {
    name: "Anna Lee",
    text: "Dolores commodi illum at est maiores et quia!",
    image: "https://res.cloudinary.com/dtswx9pbk/image/upload/v1746465832/testimonial2_ie5ppe.png",
  },
  {
    name: "James Bond",
    text: "Aliquam officiis iste optio eveniet! Voluptatibus hic amet rem deserunt.",
    image: "https://res.cloudinary.com/dtswx9pbk/image/upload/v1746465955/testimonial4_hyevol.png",
  },
  {
    name: "Sophie Turner",
    text: "Nisi amet in similique reiciendis vitae eveniet facere.",
    image: "https://res.cloudinary.com/dtswx9pbk/image/upload/v1746465955/testimonial3_lfhr47.png",
  },
  {
    name: "Liam Smith",
    text: "Perspiciatis officia quidem sint eaque corporis alias fugiat.",
    image: "https://res.cloudinary.com/dtswx9pbk/image/upload/v1746466123/testimonial5_xvld7m.jpg",
  },
];

const VISIBLE_COUNT = 6;

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();

  const extendedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        x: -150, // adjust based on width of each card
        transition: { duration: 1, ease: "easeInOut" },
      });

      // Reset position and update index
      controls.set({ x: 0 });
      setIndex((prev) => (prev + 1) % testimonials.length);
    };

    const interval = setInterval(() => {
      animate();
    }, 4000);

    return () => clearInterval(interval);
  }, [controls]);

  const visibleTestimonials = extendedTestimonials.slice(index, index + VISIBLE_COUNT);

  return (
    <div className="relative w-full h-[650px] bg-gradient-to-b from-[#f8f4ef] to-[#eae8e3] overflow-hidden">
      <h2 className="text-4xl font-serif font-bold text-center mt-8">Testimonials</h2>

      {/* Image carousel */}
      <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-[900px] h-[400px] overflow-hidden">
        <motion.div animate={controls} className="flex gap-4 items-end w-fit">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.image}-${index}`}
              className={`relative transition-all duration-500 ${
                index === 1 ? "h-[380px] w-[300px] z-10" : "h-[180px] w-[120px] opacity-70"
              }`}
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover rounded-md shadow-md"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Testimonial Text for center image */}
      <motion.div
        key={visibleTestimonials[1].name}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-32 right-10 w-[35%] bg-white/70 p-6 rounded-md shadow-md backdrop-blur-sm"
      >
        <h3 className="text-xl font-semibold">{visibleTestimonials[1].name}</h3>
        <p className="text-sm mt-2">{visibleTestimonials[1].text}</p>
      </motion.div>

      {/* CTA */}
      <div className="absolute bottom-0 w-full py-10 bg-[#f8f4ef] text-center border-t border-gray-300">
        <p className="text-sm mb-4 text-gray-700">
          For further testimonials of our quality and legacy visit the testimonials page.
        </p>
        <button className="px-6 py-2 border border-black text-black font-semibold hover:bg-black hover:text-white transition">
          TESTIMONIALS
        </button>
      </div>
    </div>
  );
}

