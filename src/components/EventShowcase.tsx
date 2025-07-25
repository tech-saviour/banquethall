"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    type: "single",
    items: [
      {
        src: "https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1746460078/slide1_omexsq.png",
        text: "EVENTS & SERVICES",
      },
    ],
  },
  {
    type: "double",
    items: [
      {
        src: "https://res.cloudinary.com/dtswx9pbk/image/upload/v1746460076/birthday_eujrvm.png",
        text: "BIRTHDAY PARTY",
      },
      {
        src: "https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1746460072/corprate_uaypkk.png",
        text: "CORPORATE EVENTS",
      },
    ],
  },
  {
    type: "double",
    items: [
      {
        src: "https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1746460079/wedding_gfvf8h.png",
        text: "WEDDING",
      },
      {
        src: "https://res.cloudinary.com/dtswx9pbk/image/upload/v1746460072/shows_lbcvhi.png",
        text: "SHOWS",
      },
    ],
  },
];

export default function EventSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const flatImages = slides.flatMap((slide) =>
    slide.items.map((item) => ({ ...item, type: slide.type }))
  );


  const [mobileIndex, setMobileIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setMobileIndex((prev) => (prev + 1) % flatImages.length);
    }, 4000);
    return () => clearInterval(interval);
  });



  return (
    <div className="w-full h-[60vh] sm:h-[70vh] md:h-[85vh] relative overflow-hidden rounded-xl">

      {/* ✅ MOBILE VIEW — one image at a time */}
      <AnimatePresence mode="wait">
        <motion.div
          key={mobileIndex}
          className="block sm:hidden w-full h-full relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={flatImages[mobileIndex].src}
            alt={flatImages[mobileIndex].text}
            fill
            loading="lazy"
            className="object-cover"
            sizes="100vw"
          />

          <div
            className={`absolute inset-0 bg-black/60 flex ${flatImages[mobileIndex].type === "single"
                ? "items-center justify-end pr-8 sm:pr-40"
                : "items-start justify-center pt-16 sm:pt-20"
              }`}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`flex flex-col gap-4 ${flatImages[mobileIndex].type === "single"
                  ? "text-center items-end"
                  : "text-center items-start"
                }`}
            >
              <h2 className="text-white uppercase text-4xl lg:text-6xl font-serif tracking-[0.2em] drop-shadow-lg leading-tight">
                {flatImages[mobileIndex].text.includes("&") ? (
                  <div className="text-3xl tracking-[0.2em] leading-tight">
                    EVENTS & <br /> SERVICES
                  </div>
                ) : (
                  flatImages[mobileIndex].text
                )}
              </h2>
              {flatImages[mobileIndex].type === "single" && (
                <Link
                  href="/services"
                  className="mt-4 px-8 py-2 border border-white text-white rounded-md text-base font-medium hover:bg-white hover:text-black transition duration-300"
                >
                  Events
                </Link>
              )}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>



      {/* ✅ DESKTOP VIEW — original logic */}
      <div className="hidden sm:block w-full h-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {slides[current].items.map((item, idx) => (
              <div
                key={`${current}-${idx}`}
                className={`relative ${slides[current].type === "double" ? "w-1/2" : "w-full"
                  } h-full`}
              >
                <Image
                  src={item.src}
                  alt={item.text}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes={
                    slides[current].type === "double"
                      ? "50vw"
                      : "100vw"
                  }
                />
                <div
                  className={`absolute inset-0 bg-black/40 flex ${slides[current].type === "single"
                    ? "items-center justify-end pr-8 sm:pr-40"
                    : "items-start justify-center pt-16"
                    }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className={`flex flex-col gap-4 ${slides[current].type === "single"
                      ? "text-center items-end"
                      : "text-center items-start"
                      }`}
                  >
                    <h2 className="text-white uppercase text-xl sm:text-5xl lg:text-6xl font-serif tracking-[0.2em] drop-shadow-lg leading-tight">
                      {item.text.includes("&") ? (
                        <div className="text-2xl sm:text-5xl tracking-[0.2em] leading-tight">
                          EVENTS & <br /> SERVICES
                        </div>
                      ) : (
                        item.text
                      )}
                    </h2>
                    {slides[current].type === "single" && (
                      <Link
                        href="/services"
                        className="mt-4 px-8 py-2 border border-white text-white rounded-md text-base font-medium hover:bg-white hover:text-black transition duration-300"
                      >
                        Events
                      </Link>
                    )}
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>

  );
}
