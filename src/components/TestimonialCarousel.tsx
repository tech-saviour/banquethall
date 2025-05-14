"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Sohan Sharma",
    text: "The banquet hall was absolutely stunning and perfect for our wedding. Everything was beautifully organized and stress-free!",
    image: "https://res.cloudinary.com/dtswx9pbk/image/upload/v1746465663/testimonial_hhvyml.png",
  },
  {
    name: "Mehak Verma",
    text: "I was amazed by the decor and hospitality. The staff ensured our event went smoothly. Highly recommend this venue!",
    image: "https://res.cloudinary.com/dtswx9pbk/image/upload/v1746465955/testimonial4_hyevol.png",
  },
  {
    name: "Piyush Kapoor",
    text: "Elegant interiors, top-notch service, and great food. This banquet hall exceeded all our expectations!",
    image: "https://res.cloudinary.com/dtswx9pbk/image/upload/v1747244581/testimonial3_f8wvwz.jpg",
  },
  {
    name: "Amit Joshi",
    text: "We hosted our daughter’s engagement here and the experience was flawless. The ambiance is luxurious and welcoming.",
    image: "https://res.cloudinary.com/dtswx9pbk/image/upload/v1747244726/testimonial2_krjdah.jpg",
  },
  {
    name: "Meera Iyer",
    text: "A beautiful venue with excellent lighting and spacious layout. Our guests were truly impressed.",
    image: "https://res.cloudinary.com/dtswx9pbk/image/upload/v1746465830/testimonial1_snnius.png",
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
  const [isMobile, setIsMobile] = useState(false);

  const extendedTestimonials = [...testimonials, ...testimonials];

  // Check if the screen size is mobile or desktop
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640); // Change 640px breakpoint as needed
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const animate = async () => {
      const enlargedWidth = isMobile ? 200 : 300;
      const enlargedHeight = isMobile ? 280 : 380;

      const shrunkWidth = 120;
      const shrunkHeight = 180;

      // Enlarge center image
      await centerImageControls.start({
        width: enlargedWidth,
        height: enlargedHeight,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeInOut" },
      });

      // Hold for 1.2s
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // Shrink back to original
      await centerImageControls.start({
        width: shrunkWidth,
        height: shrunkHeight,
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
  }, [controls, centerImageControls, isMobile]);

  const visibleTestimonials = extendedTestimonials.slice(index, index + VISIBLE_COUNT);

  return (
    <div className="relative w-full text-[#393b39] h-[650px] bg-[#F8F1E9] overflow-hidden">
      <h2 className="text-4xl sm:text-5xl font-serif text-center  tracking-widest">
        Testimonials
      </h2>

      <div className="flex justify-center">
        <Image
          src="/vector.png"
          alt="Decoration"
          width={400}
          height={40}
          className="w-40 sm:w-96 h-auto"
        />
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
      {/* Testimonial Text (Desktop - Animated) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={visibleTestimonials[1].name}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
          className="hidden sm:block absolute top-32 right-4 sm:right-10 w-[90%] sm:w-[50%] md:w-[35%] bg-[#FFFDF1] p-4 sm:p-6 rounded-md shadow-md backdrop-blur-sm"
        >
          <h3 className="text-lg sm:text-xl font-semibold">{visibleTestimonials[1].name}</h3>
          <p className="text-sm mt-2">{visibleTestimonials[1].text}</p>
        </motion.div>
      </AnimatePresence>

      {/* Testimonial Text (Mobile - Static) */}
      <div className="sm:hidden mt-6 px-6 text-center">
        <h3 className="text-lg font-semibold">{visibleTestimonials[1].name}</h3>
        <p className="text-sm mt-2">{visibleTestimonials[1].text}</p>
      </div>
    </div>
  );
}



