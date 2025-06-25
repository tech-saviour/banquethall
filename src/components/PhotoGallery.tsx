"use client";
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';


const PhotoGallery = () => {
    
    return (
        <section className='px-6 py-12 md:px-36 bg-[#F8F1E9] text-[#393b39]'>
            <h2 className="text-4xl sm:text-6xl font-serif text-center mb-8">Photo Gallery</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-rows-3 gap-3">
                {/* Animate each image with Framer Motion */}
                <motion.div
                    className="col-span-2 relative w-full h-36 sm:h-64 md:h-44 image-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    whileHover={{ scale: 1.02 ,transition: { duration: 0.3 } } }
                    whileTap={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                   
                    <Image
                        src="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747151527/Rectangle_1_2_-min_rjshpo.png"
                        alt="Banquet setup"
                        fill
                        className="object-cover rounded shadow-md"
                        placeholder="blur"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        blurDataURL="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747151527/Rectangle_1_2_-min_rjshpo.png"
                    />
                </motion.div>
                <motion.div
                    className="row-span-2 relative w-full sparkle-effect"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    whileHover={{ scale: 1.02 ,transition: { duration: 0.3 } } }
                    whileTap={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                    <Image
                        src="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747151522/Rectangle_3_1_-min_xjtd05.png"
                        alt="Dining table"
                        fill
                        className="object-cover rounded shadow-md"
                        placeholder="blur"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 25vw"
                        blurDataURL="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747151522/Rectangle_3_1_-min_xjtd05.png"
                    />
                </motion.div>
                <motion.div
                    className="relative w-full h-36 sm:h-64 md:h-44 sparkle-effect"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    whileHover={{ scale: 1.02 ,transition: { duration: 0.3 } } }
                    whileTap={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                    <Image
                        src="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747151518/Rectangle_4_1_-min_ubuxyk.png"
                        alt="Wedding setup"
                        fill
                        className="object-cover rounded shadow-md"
                        placeholder="blur"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        blurDataURL="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747151518/Rectangle_4_1_-min_ubuxyk.png"
                    />
                </motion.div>
                <motion.div
                    className="relative w-full h-36 sm:h-64 md:h-44 sparkle-effect"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    whileHover={{ scale: 1.02 ,transition: { duration: 0.3 } } }
                    whileTap={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                    <Image
                        src="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747151515/Rectangle_5_2_-min_ckdkun.png"
                        alt="Event hall"
                        fill
                        className="object-cover rounded shadow-md"
                        placeholder="blur"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 25vw"
                        blurDataURL="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747151515/Rectangle_5_2_-min_ckdkun.png"
                    />
                </motion.div>
                <motion.div
                    className="relative w-full h-36 sm:h-64 md:h-44 sparkle-effect"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    whileHover={{ scale: 1.02 ,transition: { duration: 0.3 } } }
                    whileTap={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                    <Image
                        src="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747151515/Rectangle_6_2_-min_jtgiiz.png"
                        alt="Banquet setup"
                        fill
                        className="object-cover rounded shadow-md"
                        placeholder="blur"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        blurDataURL="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747151515/Rectangle_6_2_-min_jtgiiz.png"
                    />
                </motion.div>
                <motion.div
                    className="relative w-full h-36 sm:h-64 md:h-44 sparkle-effect"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    whileHover={{ scale: 1.02 ,transition: { duration: 0.3 } } }
                    whileTap={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                    <Image
                        src="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747151517/Rectangle_8-min_wxgd4j.png"
                        alt="Dining table"
                        fill
                        className="object-cover rounded shadow-md"
                        placeholder="blur"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 25vw"
                        blurDataURL="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747151517/Rectangle_8-min_wxgd4j.png"
                    />
                </motion.div>
                <motion.div
                    className="row-span-2 sm:row-span-1 relative w-full  sparkle-effect"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.4 }}
                    whileHover={{ scale: 1.02 ,transition: { duration: 0.3 } } }
                    whileTap={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                    <Image
                        src="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747151517/Rectangle_7-min_vceryj.png"
                        alt="Wedding setup"
                        fill
                        className="object-cover rounded shadow-md"
                        placeholder="blur"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        blurDataURL="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747151517/Rectangle_7-min_vceryj.png"
                    />
                </motion.div>
                <motion.div
                    className="relative w-full h-36 sm:h-64 md:h-44 sparkle-effect"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.6 }}
                    whileHover={{ scale: 1.02 ,transition: { duration: 0.3 } } }
                    whileTap={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                    <Image
                        src="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747151517/Rectangle_9-min_gzo9bq.png"
                        alt="Event hall"
                        fill
                        className="object-cover rounded shadow-md"
                        placeholder="blur"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 25vw"
                        blurDataURL="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747151517/Rectangle_9-min_gzo9bq.png"
                    />
                </motion.div>
                <motion.div
                    className="col-span-1 sm:col-span-2 relative w-full h-36 sm:h-64 md:h-44 sparkle-effect"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.8 }}
                    whileHover={{ scale: 1.02 ,transition: { duration: 0.3 } } }
                    whileTap={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                    <Image
                        src="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747151517/Rectangle_10-min_qsiv3b.png"
                        alt="Event hall"
                        fill
                        className="object-cover rounded shadow-md"
                        placeholder="blur"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 25vw"
                        blurDataURL="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747151517/Rectangle_10-min_qsiv3b.png"
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default PhotoGallery;
