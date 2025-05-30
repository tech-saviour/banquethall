"use client"
import { motion } from 'framer-motion'
export default function Gphoto() {
    return (

        <section className="bg-[#F8F1E9] h-[80vh] sm:h-[85vh] md:h-[100vh]  w-full text-gray-800 px-6 py-20 md:px-16"
        style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dtswx9pbk/image/upload/v1747108575/Rectangle_481_fpes1m.png')",
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        backgroundPositionY: '0%',
        backgroundPositionX: '20%',
      }}>
        {/* Overlay Text */}
                <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                    className="absolute z-10 inset-0 flex flex-col items-center justify-center text-center px-4 text-gray-300"
                >
                    <h3 className="text-3xl md:text-4xl font-semibold mb-4 ">
                        Dive into the memories of our Banquet Hall
                    </h3>
                </motion.div>
        <div className="absolute inset-0 z-5 h-[80vh] sm:h-[85vh] md:h-[100vh]  bg-black/45" />
        </section>
    );
}