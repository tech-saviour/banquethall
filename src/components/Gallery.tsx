'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const images = [
  'https://res.cloudinary.com/dtswx9pbk/image/upload/v1746460073/image1_tkjjnf.png',
  'https://res.cloudinary.com/dtswx9pbk/image/upload/v1746460070/image2_zmbtb5.png',
  'https://res.cloudinary.com/dtswx9pbk/image/upload/v1746460068/image3_nmun4m.png',
  'https://res.cloudinary.com/dtswx9pbk/image/upload/v1746460068/image4_p5o1hq.png',
  'https://res.cloudinary.com/dtswx9pbk/image/upload/v1746460069/image5_v97axc.png',
];

function useWindowWidth() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

export default function GallerySection() {
  const [index, setIndex] = useState(2);
  const width = useWindowWidth();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getRelativeIndex = (i: number) => {
    const half = Math.floor(images.length / 2);
    const diff = i - index;
    if (diff > half) return diff - images.length;
    if (diff < -half) return diff + images.length;
    return diff;
  };

  const getTranslateX = (rel: number) => {
    if (width < 640) return rel * 100;
    if (width < 1024) return rel * 140;
    return rel * 180;
  };

  return (
    <section className="relative bg-[#F8F1E9] text-[#393b39] flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-4xl  sm:text-6xl pt-8 sm:pt-12 font-serif text-center tracking-widest">
        Gallery
      </h2>
      <div className="flex mb-16 sm:mb-0 justify-center">
        <div className="">
          <Image
            src="/vector.png"
            alt="Decoration"
            width={400}
            height={40}
            className="w-40 sm:w-72 h-auto"
          />
        </div>
      </div>

      <div className="relative  w-full flex items-center justify-center h-[240px] sm:h-[350px] md:h-[450px]">
        <div className="relative flex items-center justify-center w-fit h-full">
          {images.map((src, i) => {
            const rel = getRelativeIndex(i);
            const zIndex = 10 - Math.abs(rel);
            const scale = 1 - Math.abs(rel) * 0.15;
            const opacity = Math.abs(rel) > 2 ? 0 : 1;
            const translateX = getTranslateX(rel);

            return (
              <motion.div
                key={i}
                className="absolute rounded-xl shadow-xl overflow-hidden w-[200px] h-[40vh] sm:w-[220px] sm:h-2/6 md:w-[500px] md:h-5/6"
                animate={{ x: translateX, scale, opacity }}
                initial={false}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                style={{ zIndex }}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${i}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(min-width: 1024px) 500px, (min-width: 640px) 180px, 120px"
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      <p className="  mt-20 sm:mt-0 sm:text-xl text-sm">Visit the gallery for more such memory</p>

      <Link
        href="/gallery"
        className="inline-block mt-4 mb-16 px-6 py-2 border border-gray-700  text-xl sm:text-2xl rounded-lg hover:bg-gray-100 hover:text-gray-900 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
      >
        Gallery
      </Link>
    </section>
  );
}


