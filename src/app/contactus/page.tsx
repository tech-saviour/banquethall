'use client';

import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactUs() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-top flex items-center justify-center p-4"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dtswx9pbk/image/upload/v1746612024/contact_vfjxbe.jpg')",
        backgroundPosition: 'top',
        backgroundPositionX:'35%',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-0" />

      {/* Contact Content */}
      <div className="relative mt-20 z-10 flex flex-col lg:flex-row w-full max-w-6xl text-white gap-8">
        {/* Contact Info */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between w-full lg:w-1/2 gap-4"
        >
          {/* Office Info */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/20 p-6 rounded-md w-64"
          >
            <div className="text-black">
              <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5" /> Our main Office
              </h2>
              <p>
                Sector -69, Delhi<br />
                Rohit Sharma<br />
                Ka Ghar
              </p>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/20 p-6 rounded-md w-64"
          >
            <div className="text-black">
              <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Phone className="w-5 h-5" /> Phone number
              </h2>
              <p>
                +91 93********<br />+91 78********
              </p>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/20 p-6 rounded-md w-64"
          >
            <div className="text-black">
              <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Mail className="w-5 h-5" /> E-mail
              </h2>
              <p>ID-preetybanquet@gmail.com</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/20 backdrop-blur-md p-8 rounded-md w-full lg:w-1/2"
        >
          <h2 className="text-3xl font-serif mb-6 border-b-2 border-white pb-2">
            CONTACT US
          </h2>
          <form className="flex flex-col gap-4">
            <motion.input
              type="text"
              placeholder="Enter your name"
              className="p-3 rounded-md text-black bg-white/80 focus:outline-none"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              placeholder="Enter your valid Email address"
              className="p-3 rounded-md text-black bg-white/80 focus:outline-none"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.textarea
              placeholder="Write your query here we are here to listen you"
              rows={4}
              className="p-3 rounded-md text-black bg-white/80 focus:outline-none"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }}
              className="mt-2 self-start border border-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

