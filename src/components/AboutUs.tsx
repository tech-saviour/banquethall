"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutUs() {
    return (
        <section className="bg-[#F8F1E9] text-[#393b39] px-6 py-12 md:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Animated header */}
                <motion.h2
                    className="text-4xl sm:text-6xl font-serif text-center mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}

                >
                    About Us
                </motion.h2>

                <div className="flex justify-center mb-4">
                    <div className="-mt-4">
                        {/* Hover animation on the image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            whileTap={{ scale: 1.05, transition: { duration: 0.3 } }}
                        >
                            <Image
                                src="/vector.png"
                                alt="Decoration"
                                width={400}
                                height={40}
                                className="w-52 sm:w-80 h-auto"
                            />
                        </motion.div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left - Image collage */}
                    <div className="grid grid-cols-2 gap-4">
                        <motion.div
                            className="row-span-2 relative w-full h-48 sm:h-72"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            whileTap={{ scale: 1.05, transition: { duration: 0.3 } }}
                        >
                            <Image
                                src="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1746460075/about-1_jqo7oy.jpg"
                                alt="Banquet setup"
                                fill
                                className="object-cover rounded shadow-md"
                                placeholder="blur"
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                blurDataURL="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1746460075/about-1_jqo7oy.jpg"
                            />
                        </motion.div>
                        <motion.div
                            className="relative w-full h-36 sm:h-48"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            whileTap={{ scale: 1.05, transition: { duration: 0.3 } }}
                        >
                            <Image
                                src="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1746460067/about-2_cfiwoe.jpg"
                                alt="Dining table"
                                fill
                                className="object-cover rounded shadow-md"
                                placeholder="blur"
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 25vw"
                                blurDataURL="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1746460067/about-2_cfiwoe.jpg"
                            />
                        </motion.div>
                        <motion.div
                            className="row-span-2 relative w-full h-48 sm:h-72"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            whileTap={{ scale: 1.05, transition: { duration: 0.3 } }}
                        >
                            <Image
                                src="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1746460070/about-3_kr1sau.jpg"
                                alt="Wedding setup"
                                fill
                                className="object-cover rounded shadow-md"
                                placeholder="blur"
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                blurDataURL="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1746460070/about-3_kr1sau.jpg"
                            />
                        </motion.div>
                        <motion.div
                            className="row-span-1 relative w-full h-36 sm:h-48"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            whileTap={{ scale: 1.05, transition: { duration: 0.3 } }}
                        >
                            <Image
                                src="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747151517/Rectangle_8-min_wxgd4j.png"
                                alt="Event hall"
                                fill
                                className="object-cover rounded shadow-md"
                                placeholder="blur"
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 25vw"
                                blurDataURL="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747151517/Rectangle_8-min_wxgd4j.png"
                            />
                        </motion.div>
                    </div>

                    {/* Right - Text and Button */}
                    <motion.div
                        className="font-sans text-justify"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}

                    >
                        <p className="mb-6 text-base sm:text-lg sm:leading-relaxed">
                            Nestled in the heart of the city, our banquet halls offer a blend of timeless elegance and modern convenience. Whether you&apos;re planning a lavish wedding, an intimate celebration, or a corporate gathering, our versatile spaces and attentive service ensure your event is unforgettable.
                        </p>
                        <p className="mb-8 text-base sm:text-lg sm:leading-relaxed">
                            With exquisite decor, gourmet catering options, and customizable setups, we transform your vision into reality. Discover the perfect backdrop for your special moments—crafted with care and designed to impress.
                        </p>
                        <div className="flex justify-center sm:justify-start">
                            {/* Button animation */}
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.3 }
                                }}
                                className="font-sans text-gray-700 inline-block mt-4 mb-16 px-6 py-2 border-2 border-gray-700 text-xl sm:text-2xl rounded-xl hover:shadow-lg"
                            >
                                <Link href="/about">
                                    About Us
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
