import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutText: FC = () => {
  return (
    <section className="bg-[#f8f1e9] text-[#393b39]  h-[80vh] md:h-[95vh] py-16 px-4">
      <div className="max-w-6xl mx-auto relative">
        {/* Decorative Ellipses */}
        <div className="block">
          {/* Left Ellipse */}
          <motion.div
          className="absolute -top-10 md:top-[10%] md:left-20 w-12 h-12 border-2 border-dashed border-black rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        />
          <div className="absolute -top-10 md:top-[10%] md:left-20 w-12 h-12 bg-[#e0d4c5] rounded-full opacity-70 z-0" />

          {/* Right Ellipses */}
          <motion.div
          className="absolute top-[0%] right-0 md:right-20 w-12 h-12 md:w-24 md:h-24 border-2 border-dashed border-black rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        />
          <div className="block absolute top-[0%] right-0 md:right-20 w-12 h-12  md:w-24 md:h-24 bg-[#e0d4c5] rounded-full opacity-70 z-0" />
          <motion.div
          className="hidden md:block absolute top-[40%] right-2 w-36 h-36 border-2 border-dashed border-black rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        />
          <div className="hidden md:block absolute top-[40%] right-2 w-36 h-36 bg-[#d6c8b8] rounded-full opacity-60 z-0" />
        </div>

        {/* Background circular image */}
        <motion.div
          className="hidden lg:block lg:absolute -top-20 w-[1000px] h-[500px] border-2 rounded-full border-black z-0"
          animate={{ rotate: [-5, 5] }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 7,
            ease: "easeInOut",
          }}
        />


        {/* Top-left circular image */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute hidden md:block -top-30 left-40 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-black shadow-md"
        >
          <Image
            src="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1746460070/about-3_kr1sau.jpg"
            alt="Top Circular"
            width={112}
            height={112}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Main content block */}
        <div className="flex relative z-50 mt-10 md:mt-20 flex-col items-center text-center px-4">
          <motion.h2
            className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-[0.35em] mb-2"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            SIMPLY PRETTY
          </motion.h2>
          <motion.h1
            className="text-2xl sm:text-5xl font-bold tracking-[0.28em] mb-4"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            BANQUET HALLS
          </motion.h1>

          {/* Decorative Line + Location */}
          <div className="flex items-center justify-center gap-2 mb-6 text-sm sm:text-base">
            <div className="w-20 border-t border-[#000]" />
            <p>★</p>
            <p
              className="text-xl italic"
              style={{ fontFamily: "'Petemoss', cursive" }}
            >
              New Delhi
            </p>
            <p>★</p>
            <div className="w-20 border-t border-[#000]" />
          </div>
        </div>

        {/* Main content section with left and right images */}
        <div className="mt-4 relative z-50 grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
          {/* Left rounded image */}
          <motion.div
            className=" rounded-[2rem] border-black border-2 overflow-hidden hidden md:block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Image
              src="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1746460078/slide1_omexsq.png"
              alt="Left"
              width={300}
              height={220}
              className="w-full z-10  h-auto object-cover"
            />
          </motion.div>
          {/* Text column */}
          <div className="font-sans text-justify col-span-3 px-2">
            <motion.p
              className="text-gray-800 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4 }}
            >
              Banquet halls have large  spaces designed for hosting events, gatherings, and celebrations. They are often equipped with amenities such as seating arrangements, audiovisual equipment, and catering facilities to accommodate various functions like weddings, conferences, parties, and banquets.
            </motion.p>
            <motion.p
              className="mt-4 text-gray-800 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.6 }}
            >
              Banquet halls are designed to provide a luxurious and comfortable environment for guests. They often feature elegant decor, spacious layouts, and state-of-the-art facilities to ensure a memorable experience. .
            </motion.p>
          </div>

          {/* Right rounded image */}
          <motion.div
            className="rounded-[2rem] mt-20 relative z-20 border-black border-2 overflow-hidden hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Image
              src="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1746460079/abouttt_pq6i1u.jpg"
              alt="Right"
              width={300}
              height={220}
              className="w-full h-auto bject-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutText;

