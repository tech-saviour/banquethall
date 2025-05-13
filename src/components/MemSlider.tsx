
"use client"
// components/MemSlider.js
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const MemSlider = () => {
  const images = [
    { src: "https://res.cloudinary.com/dtswx9pbk/image/upload/v1747109611/Rectangle_3-min_xzketx.png", alt: "Wedding decorations on a table" },
    { src: "https://res.cloudinary.com/dtswx9pbk/image/upload/v1747109611/Rectangle_1-min_rnvmhj.png", alt: "Couple walking together in an archway" },
    { src: "https://res.cloudinary.com/dtswx9pbk/image/upload/v1746892607/auction_images/zpuultto8odwzqi6i51c.png", alt: "Person celebrating with confetti in the air" },
    { src: "https://res.cloudinary.com/dtswx9pbk/image/upload/v1747109611/Rectangle_3-min_xzketx.png", alt: "Wedding ceremony outdoors with floral arch" },
    { src: "https://res.cloudinary.com/dtswx9pbk/image/upload/v1746722266/ce_p45zpw.png", alt: "Celebration with sparkles and joy" },
    { src: "https://res.cloudinary.com/dtswx9pbk/image/upload/v1747109615/Rectangle_5_1_-min_kyzz6m.png", alt: "Celebration with sparkles and joy" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images.length]);

  return (
    <section className="bg-[#F8F1E9] px-6 py-10">
      <h2 className="text-4xl font-semibold text-center mb-12">Memories captured</h2>

      <div className="relative">
        <div className="flex overflow-hidden space-x-6">
          
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-[40vh] h-[70vh]">
              <Image 
                src={image.src} 
                alt={image.alt} 
                width={200} 
                height={420} 
                className="w-full h-full object-cover rounded-lg shadow-lg" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemSlider;
