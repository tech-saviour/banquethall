'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[80vh] md:h-screen bg-cover bg-center flex items-center  justify-start text-white overflow-hidden">
      {/* Base background image (hero.jpg) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundPosition: 'center',

        }}
      />

      {/* Upper background image (upperbg.png) */}
      <div
        className="absolute inset-0 z-10 bg-cover bg-center opacity-60 pointer-events-none"
        style={{
          backgroundImage: "url('/upperbg.png')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />

      {/* Fade overlay */}
      <div className="absolute inset-0 z-5 bg-black/45" />

      {/* Animated text content only */}
      <motion.div
        className="relative lg:ml-14 z-15 sm:z-5 lg:-mt-20 text-left px-4 lg:px-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        whileHover={{ scale: 1.05 }}
      >
        <h2
          className="text-xl text-left sm:text-3xl md:text-4xl lg:text-6xl tracking-widest "
          style={{ fontFamily: "'Noto Serif JP', serif", letterSpacing: '0.35em' }}
        >
          SIMPLY PRETTY
        </h2>
        <h1
          className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight md:tracking-widest"
          style={{ fontFamily: "'Noto Serif JP', serif", letterSpacing: '0.28em' }}
        >
          BANQUET HALLS
        </h1>
        <div className='flex items-center gap-1 sm:gap-2 sm:flex-wrap sm:flex-row sm:justify-center text-center sm:text-left text-sm'>
          <div className="w-20 sm:w-40 md:w-80 border-t border-[#fff]" />
          <p> ★</p>
          <p
            className="text-2xl text-center italic"
            style={{ fontFamily: "'Petemoss', cursive" }}
          >
            New Delhi
          </p>
          <p> ★</p>
          <div className="w-20 sm:w-40 md:w-80 border-t border-[#fff]" />
        </div>
      </motion.div>
    </section>
  );
}



