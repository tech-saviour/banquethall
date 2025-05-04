'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const images = [
    '/images/image1.png',
    '/images/image2.png',
    '/images/image3.png',
    '/images/image4.png',
    '/images/image5.png',
]

function useWindowWidth() {
    const [width, setWidth] = useState<number>(0) // Default to 0 to avoid mismatch on initial render

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        handleResize() // Initialize the width on mount
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return width
}

export default function GallerySection() {
    const [index, setIndex] = useState(2)
    const [hasMounted, setHasMounted] = useState(false) // To track if the component has mounted
    const width = useWindowWidth()

    useEffect(() => {
        setHasMounted(true) // Set to true once mounted
    }, [])

    useEffect(() => {
        if (hasMounted) {
            const interval = setInterval(() => {
                setIndex((prev) => (prev + 1) % images.length)
            }, 3000)
            return () => clearInterval(interval)
        }
    }, [hasMounted])

    const getRelativeIndex = (i: number) => {
        const half = Math.floor(images.length / 2)
        const diff = i - index
        if (diff > half) return diff - images.length
        if (diff < -half) return diff + images.length
        return diff
    }

    const getTranslateX = (rel: number) => {
        if (width < 640) return rel * 100
        if (width < 1024) return rel * 140
        return rel * 180
    }

    // Only render the gallery once the component is mounted (client-side)
    if (!hasMounted) return null

    return (
        <section className="relative bg-[#FFFDF1]  flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-4xl pt-8 sm:pt-16 sm:text-5xl font-serif text-center mb-6 text-gray-800 tracking-widest">Gallery</h2>
            <div className="flex justify-center mb-12">
                <div className="-mt-4">
                    <Image
                        src="/vector.png"
                        alt="Decoration"
                        width={400}
                        height={40}
                        className="w-52 h-auto"
                    />
                </div>
            </div>
            <div className="relative  w-full flex items-center justify-center h-[240px] sm:h-[350px] md:h-[450px]">
                <div className="relative flex items-center justify-center w-fit h-full">
                    {images.map((src, i) => {
                        const rel = getRelativeIndex(i)
                        const zIndex = 10 - Math.abs(rel)
                        const scale = 1 - Math.abs(rel) * 0.15
                        const opacity = Math.abs(rel) > 2 ? 0 : 1
                        const translateX = getTranslateX(rel)

                        return (
                            <motion.div
                                key={i}
                                className="absolute rounded-xl shadow-xl overflow-hidden w-[120px] h-4/6 sm:w-[180px] sm:h-2/6 md:w-[500px] md:h-5/6"
                                animate={{
                                    x: translateX,
                                    scale,
                                    opacity,
                                }}
                                initial={false}
                                transition={{ duration: 0.7, ease: 'easeInOut' }}
                                style={{ zIndex }}
                            >
                                <Image
                                    src={src}
                                    alt={`Gallery image ${i}`}
                                    fill
                                    className="object-cover"
                                    loading="lazy"
                                />
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
