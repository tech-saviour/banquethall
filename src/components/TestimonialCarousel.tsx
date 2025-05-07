"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const testimonials = [
    {
      name: "Ananya Sharma",
      text: "The banquet hall was absolutely stunning and perfect for our wedding. Everything was beautifully organized and stress-free!",
      image: "https://res.cloudinary.com/dtswx9pbk/image/upload/v1746465663/testimonial_hhvyml.png",
    },
    {
      name: "Rahul Verma",
      text: "I was amazed by the decor and hospitality. The staff ensured our event went smoothly. Highly recommend this venue!",
      image: "https://res.cloudinary.com/dtswx9pbk/image/upload/v1746465830/testimonial1_snnius.png",
    },
    {
      name: "Priya Kapoor",
      text: "Elegant interiors, top-notch service, and great food. This banquet hall exceeded all our expectations!",
      image: "https://res.cloudinary.com/dtswx9pbk/image/upload/v1746465832/testimonial2_ie5ppe.png",
    },
    {
      name: "Amit Joshi",
      text: "We hosted our daughter’s engagement here and the experience was flawless. The ambiance is luxurious and welcoming.",
      image: "https://res.cloudinary.com/dtswx9pbk/image/upload/v1746465955/testimonial4_hyevol.png",
    },
    {
      name: "Meera Iyer",
      text: "A beautiful venue with excellent lighting and spacious layout. Our guests were truly impressed.",
      image: "https://res.cloudinary.com/dtswx9pbk/image/upload/v1746465955/testimonial3_lfhr47.png",
    },
    {
      name: "Karan Mehta",
      text: "The best banquet hall in New Delhi! Classy décor, helpful staff, and a truly memorable experience.",
      image: "https://res.cloudinary.com/dtswx9pbk/image/upload/v1746466123/testimonial5_xvld7m.jpg",
    },
  ];

const VISIBLE_COUNT = 6;

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();
  const centerImageControls = useAnimation();

  const extendedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const animate = async () => {
      // Enlarge center image
      await centerImageControls.start({
        width: 300,
        height: 380,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeInOut" },
      });

      // Hold for 1.2s
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // Shrink back to original
      await centerImageControls.start({
        width: 120,
        height: 180,
        opacity: 0.7,
        transition: { duration: 1, ease: "easeInOut" },
      });

      // Slide carousel
      await controls.start({
        x: -150,
        transition: { duration: 1, ease: "easeInOut" },
      });

      // Slight delay before updating index
      await new Promise((resolve) => setTimeout(resolve, 100));
      controls.set({ x: 0 });
      setIndex((prev) => (prev + 1) % testimonials.length);
    };

    const interval = setInterval(animate, 4000);

    return () => clearInterval(interval);
  }, [controls, centerImageControls]);

  const visibleTestimonials = extendedTestimonials.slice(index, index + VISIBLE_COUNT);

  return (
    <div className="relative w-full text-black h-[650px] bg-[#FFFDF1] overflow-hidden">
      <h2 className="text-4xl sm:text-5xl font-serif text-center text-gray-800 tracking-widest">
        Testimonials
      </h2>
      <div className="flex justify-center">
        <div>
          <Image
            src="/vector.png"
            alt="Decoration"
            width={400}
            height={40}
            className="w-40 sm:w-96 h-auto"
          />
        </div>
      </div>

      {/* Image carousel */}
      <div className="absolute justify-end flex top-28 left-1/2 transform -translate-x-1/2 w-[900px] h-[400px] overflow-hidden">
        <motion.div animate={controls} className="flex gap-4 items-end w-fit">
          {visibleTestimonials.map((testimonial, i) => {
            const isCenter = i === 2;

            if (isCenter) {
              return (
                <motion.div
                  key={`${testimonial.image}-${i}`}
                  className="relative z-10"
                  initial={{ width: 120, height: 180, opacity: 0.7 }}
                  animate={centerImageControls}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-md shadow-md"
                  />
                </motion.div>
              );
            }

            return (
              <div
                key={`${testimonial.image}-${i}`}
                className="relative z-0 opacity-70"
                style={{ width: 120, height: 180 }}
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover rounded-md shadow-md"
                />
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Testimonial Text for center image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={visibleTestimonials[1].name}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
          className="absolute top-32 right-10 w-[35%] bg-[#FFFDF1] p-6 rounded-md shadow-md backdrop-blur-sm"
        >
          <h3 className="text-xl font-semibold">{visibleTestimonials[1].name}</h3>
          <p className="text-sm mt-2">{visibleTestimonials[1].text}</p>
        </motion.div>
      </AnimatePresence>

      {/* CTA */}
      <div className="absolute bottom-0 w-full py-10 bg-[#FFFDF1] text-center border-gray-300">
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



