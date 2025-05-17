'use client';

import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface ServiceBlockProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export default function ServiceBlock({
  title,
  description,
  image,
  reverse = false,
}: ServiceBlockProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const imageVariant = {
    hidden: { opacity: 0, x: reverse ? 100 : -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const textVariant = {
    hidden: { opacity: 0, x: reverse ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div
      ref={ref}
      className={`flex overflow-hidden flex-col text-[#393b39] md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} w-full`}
    >
      {/* Image Section */}
      <motion.div
        variants={imageVariant}
        initial="hidden"
        animate={controls}
        className={`flex w-full md:w-1/2 items-center ${reverse ? 'justify-center md:justify-start' : 'justify-center md:justify-end'} bg-[#F8F1E9]`}
      >
        <div className="relative w-5/6 h-72 md:h-96">
          <div
            className={`hidden md:block absolute ${reverse ? 'left-4 top-4' : 'right-4 bottom-4'} w-full h-full bg-[#3d2b1f] z-0`}
          />
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover z-10"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </motion.div>

      {/* Text Block */}
      <motion.div
        variants={textVariant}
        initial="hidden"
        animate={controls}
        className="w-full md:w-1/2  flex text-justify items-center justify-center px-6 py-10 bg-[#F8F1E9]"
      >
        <div className="max-w-md">
          <h3 className="text-4xl md:text-5xl tracking-widest text-center font-semibold  mb-4">
            {title}
          </h3>
          <p className="font-sans text-sm md:text-lg mb-2">{description}</p>
          <button className="border font-sans border-gray-700 px-6 py-2 rounded-md text-gray-700 hover:bg-gray-700 hover:cursor-pointer hover:text-white hover:shadow-md hover:scale-105 transition-all duration-300 ease-in-out">
            Book Now
          </button>

        </div>
      </motion.div>
    </div>
  );
}

