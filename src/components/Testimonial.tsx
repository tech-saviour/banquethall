'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TestimonialType {
  name: string;
  title: string;
  quote: string;
  image: string;
}

const testimonials: TestimonialType[] = [
  {
    name: 'Priya Mehra',
    title: 'Event Planner, Mumbai',
    quote:
      'The wedding venue and service were both exceptional. The staff managed everything so smoothly we enjoy the event without any stress.',
    image: 'https://res.cloudinary.com/dtswx9pbk/image/upload/v1747411123/testimonial1_dvzxvf.png',
  },
  {
    name: 'Ramesh Iyer',
    title: 'Corporate Event Organizer',
    quote:
      'This banquet hall was the perfect choice for our corporate event. The lighting, sound, and overall arrangements were truly top-notch.',
    image: 'https://res.cloudinary.com/dtswx9pbk/image/upload/v1747404322/testimonial2_2_bl6f8m.png',
  },
  {
    name: 'Sunita Bansal',
    title: 'Sister of the Bride',
    quote:
      'My sister’s sangeet night turned out to be unforgettable. The décor and hospitality were praised by every single guest.',
    image: 'https://res.cloudinary.com/dtswx9pbk/image/upload/v1747411120/testimonial_3_ngfpko.png',
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 6000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="bg-[#F8F1E9] text-[#393b39] pt-24 px-4">
      <h2 className="text-4xl sm:text-5xl font-serif text-center tracking-widest">Testimonials</h2>

      <div className="flex font-sans justify-center">
        <Image
          src="/vector.png"
          alt="Decoration"
          width={400}
          height={40}
          className="w-72 sm:w-96 h-auto"
        />
      </div>

      <div className="max-w-6xl z-20 mx-auto flex flex-col lg:flex-row items-center justify-between relative gap-10">
        <div className="hidden md:block md:absolute top-8 left-4 w-[50vw] h-[60vh] border-t-2 border-l-2 border-r-2 border-black rotate-[3deg] z-0" />

        {/* Quote Block */}
        <motion.div
          key={t.name}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-3/5 text-center lg:text-left z-20"
        >
          <p className="text-base lg:text-xl font-serif text-black leading-relaxed px-6">
            <span className="flex justify-end text-5xl sm:text-8xl">“</span>
            {t.quote}
            <span className="text-5xl sm:text-8xl lg:w-3/5 flex justify-start">”</span>
          </p>

          <div className="md:flex md:justify-center hidden items-center z-70 gap-6">
            <button onClick={prev} className="text-black text-2xl hover:text-gray-700">{'<'}</button>
            <div className="flex items-center gap-2 text-sm text-black font-semibold">Testimonial</div>
            <button onClick={next} className="text-black text-2xl hover:text-gray-700">{'>'}</button>
          </div>
        </motion.div>

        {/* Image + Info */}
        <motion.div
          key={t.image}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex flex-col items-center justify-center z-20"
        >
          <div className="relative overflow-clip -mt-20 md:mt-0 w-[70vw] h-[30vh] sm:w-[35vw] sm:h-[70vh]">
            <Image
              src={t.image}
              alt={t.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          <div className="flex justify-center md:hidden items-center z-70 gap-4">
            <button onClick={prev} className="text-black text-2xl hover:text-gray-700">{'<'}</button>
            <div className="flex items-center gap-2 text-sm text-black font-semibold">Testimonial</div>
            <button onClick={next} className="text-black text-2xl hover:text-gray-700">{'>'}</button>
          </div>
        </motion.div>

        <div className="flex flex-col text-center -mt-10 md:w-1/3 md:mt-6">
          <h3 className="mt-6 text-lg lg:text-xl font-semibold text-black">{t.name}</h3>
          <p className="text-gray-600 text-sm">{t.title}</p>
        </div>
      </div>

    </section>
  );
};

export default Testimonial;



