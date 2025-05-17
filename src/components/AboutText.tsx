import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutText: FC = () => {
  return (
    <section className="bg-[#f8f1e9] text-[#393b39]  h-[60vh] md:h-[90vh] py-16 px-4">
      <div className="max-w-6xl mx-auto relative">
        {/* Top-left circular image */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute hidden md:block -top-30 left-40 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-black shadow-md"
        >
          <Image
            src="https://res.cloudinary.com/dtswx9pbk/image/upload/v1747067685/Building-min_mugnrx.png"
            alt="Top Circular"
            width={112}
            height={112}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Main content block */}
        <div className="flex mt-20 flex-col items-center text-center px-4">
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
        <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
          {/* Left rounded image */}
          <motion.div
            className="rounded-[2rem] border-black border-2 overflow-hidden hidden md:block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Image
              src="https://res.cloudinary.com/dtswx9pbk/image/upload/v1747067685/Building-min_mugnrx.png"
              alt="Left"
              width={300}
              height={220}
              className="w-full  h-auto object-cover"
            />
          </motion.div>
          {/* Text column */}
          <div className="text-justify col-span-3 px-2">
            <motion.p
              className="text-gray-800 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4 }}
            >
              Lorem ipsum dolor sit amet consectetur. Accumsan scelerisque in accumsan pretium molestie diam viverra adipiscing. Nulla aliquam est imperdiet libero.
            </motion.p>
            <motion.p
              className="mt-4 text-gray-800 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.6 }}
            >
              Lorem ipsum dolor sit amet consectetur. Accumsan scelerisque in accumsan pretium molestie diam viverra adipiscing. Nulla aliquam est imperdiet libero. Scan this excel sheet and make a new excel sheet with columns for headquarter.
            </motion.p>
          </div>

          {/* Right rounded image */}
          <motion.div
            className="rounded-[2rem] mt-20 border-black border-2 overflow-hidden hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Image
              src="https://res.cloudinary.com/dtswx9pbk/image/upload/v1747067685/Building-min_mugnrx.png"
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

