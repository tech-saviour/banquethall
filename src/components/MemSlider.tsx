"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';

const MemSlider = () => {
  const images = [
    { src: "https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747109615/Rectangle_6_1_-min_zzp487.png", alt: "Wedding decorations on a table" },
    { src: "https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747109611/Rectangle_1-min_rnvmhj.png", alt: "Couple walking together in an archway" },
    { src: "https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747142959/Rectangle_2_wtjobo.png", alt: "Person celebrating with confetti in the air" },
    { src: "https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747109611/Rectangle_3-min_xzketx.png", alt: "Wedding ceremony outdoors with floral arch" },
    { src: "https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747142959/Rectangle_4_zwsa8s.png", alt: "Celebration with sparkles and joy" },
    { src: "https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747109615/Rectangle_5_1_-min_kyzz6m.png", alt: "Celebration with sparkles and joy" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesCount = images.length;

  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesCount);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [imagesCount]);

  useEffect(() => {
    controls.start({
      x: `-${(currentIndex + 1) * 100 / 5}%`,
      transition: {
        duration: 3, 
        ease: 'linear',
      }
    });
  }, [currentIndex, controls]);

  return (
    <section className="bg-[#F8F1E9] text-[#393b39] px-6 py-10">
      <h2 className="text-4xl sm:text-6xl font-serif text-center mb-8">Memories captured</h2>

      <div className="relative overflow-hidden w-full">
        <motion.div
          className="flex gap-2 sm:gap-4"
          animate={controls}
          style={{ display: 'flex' }}
        >
          {/* Duplicating images array to simulate infinite scroll */}
          {[...images, ...images].map((image, index) => (
            <div key={index} className="flex-shrink-0  w-1/2 md:w-1/5 lg:w-1/5">
              <Image
                src={image.src}
                alt={image.alt || `slider-image-${index}`}
                width={400} 
                height={300} 
                style={{ objectFit: 'cover' }} 
                className='h-full '
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MemSlider;



