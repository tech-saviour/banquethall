"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const CARD_WIDTH = 120;
const CARD_GAP = 40;
const SLIDE_DURATION = 1;
const INTERVAL = 4000;


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
  

// Unchanged imports and constants...

export default function Dummy() {
    const controls = useAnimation();
    const [index, setIndex] = useState(0);
    const fullList = [...testimonials, ...testimonials];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
      }, INTERVAL);
      return () => clearInterval(interval);
    }, []);
  
    useEffect(() => {
      controls.start({
        x: -index * (CARD_WIDTH + CARD_GAP),
        transition: { duration: SLIDE_DURATION, ease: "easeInOut" },
      });
    }, [index, controls]);
  
    const centerIndex = (index + 5) % testimonials.length;
    const centerTestimonial = testimonials[centerIndex];
  
    return (
      <div className="relative w-full text-black bg-[#FFFDF1] overflow-hidden pt-8 pb-40 sm:pb-32 min-h-[700px] sm:min-h-[750px] md:min-h-[800px]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center text-gray-800 tracking-widest">
          Testimonials
        </h2>
        <div className="flex justify-center my-2">
          <Image
            src="/vector.png"
            alt="Decoration"
            width={400}
            height={40}
            className="w-32 sm:w-60 md:w-96 h-auto"
          />
        </div>
  
        {/* Carousel */}
        <div className="relative flex items-end justify-center mx-auto w-full max-w-[1000px] h-[50vw] max-h-[400px] overflow-hidden px-4 mt-8">
          <motion.div animate={controls} className="flex gap-5 sm:gap-10 items-end w-fit">
            {fullList.map((testimonial, i) => {
              const actualIndex = i % testimonials.length;
              const isCenter = actualIndex === centerIndex;
  
              if (isCenter) {
                return (
                  <motion.div
                    key={`${testimonial.image}-${i}`}
                    className="relative z-10"
                    initial={{ width: CARD_WIDTH, height: 180, opacity: 0.7 }}
                    animate={{
                      width: "clamp(180px, 40vw, 300px)",
                      height: "clamp(250px, 45vw, 380px)",
                      opacity: 1,
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
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
                  className="relative opacity-70"
                  style={{
                    width: "clamp(70px, 15vw, 120px)",
                    height: "clamp(120px, 20vw, 180px)",
                    flexShrink: 0,
                  }}
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
  
        {/* Testimonial Text (desktop/right) */}
        <div className="hidden sm:block absolute top-32 right-4 sm:right-10 w-[90%] sm:w-[50%] md:w-[35%] bg-[#FFFDF1] p-4 sm:p-6 rounded-md shadow-md backdrop-blur-sm">
          <h3 className="text-lg sm:text-xl font-semibold">{centerTestimonial.name}</h3>
          <p className="text-sm mt-2">{centerTestimonial.text}</p>
        </div>
  
        {/* Testimonial Text (mobile/below carousel) */}
        <div className="sm:hidden mt-6 px-6 text-center">
          <h3 className="text-lg font-semibold">{centerTestimonial.name}</h3>
          <p className="text-sm mt-2">{centerTestimonial.text}</p>
        </div>
  
        {/* CTA */}
        <div className="absolute bottom-0 w-full py-8 sm:py-10 bg-[#FFFDF1] text-center border-t border-gray-300">
          <p className="text-xs sm:text-sm mb-4 text-gray-700">
            For further testimonials of our quality and legacy visit the testimonials page.
          </p>
          <button className="px-5 py-2 border border-black text-black text-sm sm:text-base font-semibold hover:bg-black hover:text-white transition">
            TESTIMONIALS
          </button>
        </div>
      </div>
    );
  }
  
