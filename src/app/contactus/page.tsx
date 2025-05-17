'use client';

import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactUs() {
  return (
    <section
      className="relative font-serif w-full h-[80vh] sm:min-h-screen bg-cover bg-top flex items-center justify-center p-4"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dtswx9pbk/image/upload/v1746612024/contact_vfjxbe.jpg')",
        backgroundPosition: 'top',
        backgroundPositionX: '35%',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-45 z-0" />

      {/* Contact Content */}
      <div className="relative  mt-24 sm:mt-20 z-10 flex flex-col sm:flex-row w-full max-w-6xl text-white gap-8 items-center lg:items-start justify-center md:justify-between">
        {/* Contact Info */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center lg:items-start gap-4 w-full sm:w-auto"
        >
          {/* Info Cards */}
          {[{
            Icon: MapPin,
            title: "Our main Office",
            content: <> Delhi<br />Rohini</>
          }, {
            Icon: Phone,
            title: "Phone number",
            content: <>+91 93********<br />+91 78********</>
          }, {
            Icon: Mail,
            title: "E-mail",
            content: <>preetybanquet@gmail.com</>
          }].map(({ Icon, title, content }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/40 hidden sm:block p-6 backdrop-blur rounded-md w-full max-w-xs"
            >
              <div className="text-black text-sm sm:text-xl">
                <h2 className=" font-bold mb-2 flex items-center gap-2">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" /> {title}
                </h2>
                <p>{content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/20 backdrop-blur-md p-6 sm:p-8 rounded-md w-full max-w-md"
        >
          <h2 className="text-2xl sm:text-5xl font-serif mb-6 border-b-2 border-white pb-2 text-center ">
            CONTACT US
          </h2>
          <form className="flex flex-col gap-4">
            <motion.input
              type="text"
              placeholder="Enter your name"
              className=" p-2 sm:p-3 rounded-md text-black bg-white/80 focus:outline-none"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              placeholder="Enter your valid Email address"
              className="p-2 sm:p-3 rounded-md text-black bg-white/80 focus:outline-none"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.textarea
              placeholder="Write your query here we are here to listen you"
              rows={3}
              className="p-2 sm:p-3 rounded-md text-black bg-white/80 focus:outline-none"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }}
              className="mt-2 self-start hover:cursor-pointer  border border-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}


