'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const images = [
    '/image1.png',
    '/image2.png',
    '/image3.png',
    '/image4.png',
    '/image5.png',
]

function useWindowWidth() {
    const [width, setWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return width
}

export default function GallerySection() {
    const [index, setIndex] = useState(2)
    const width = useWindowWidth()

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

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
            <div className="relative -ml-24 sm:-ml-46 w-full flex items-center justify-center h-[280px] sm:h-[360px] md:h-[450px]">
                <div className="relative w-fit h-full">
                    {images.map((src, i) => {
                        const rel = getRelativeIndex(i)
                        const zIndex = 10 - Math.abs(rel)
                        const scale = 1 - Math.abs(rel) * 0.15
                        const opacity = Math.abs(rel) > 2 ? 0 : 1
                        const translateX = getTranslateX(rel)

                        return (
                            <motion.div
                                key={i}
                                className="absolute rounded-xl shadow-xl overflow-hidden w-[100px] h-[140px] sm:w-[140px] sm:h-[200px] md:w-[200px] md:h-[280px]"
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
