"use client";

import Image from "next/image";

export default function Gphoto() {
  return (
    <section className="relative h-[80vh] sm:h-[85vh] md:h-[100vh] w-full text-gray-800 overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747108575/Rectangle_481_fpes1m.png"
        alt="Banquet Hall Background"
        fill
        priority
        quality={75}
        className="object-cover object-[20%_0%] z-0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* Text Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 text-white">
        <h3 className="text-3xl md:text-4xl font-semibold mb-4">
          Dive into the memories of our Banquet Hall
        </h3>
      </div>
    </section>
  );
}

