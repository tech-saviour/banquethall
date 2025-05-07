'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
const NAV_ITEMS = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Services', href: '/services' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact', href: '/contactus' },
]

const ServicesSection = () => {

    const [mobileOpen, setMobileOpen] = useState(false)

    const trayRef = useRef<HTMLDivElement>(null)
    const overlayRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const overlay = overlayRef.current
        if (!overlay) return

        // Show/Hide overlay on mobile menu open/close
        if (mobileOpen) {
            overlay.style.opacity = '0.5'
            overlay.style.display = 'block'
        } else {
            overlay.style.opacity = '0'
            overlay.style.display = 'none'
        }
    }, [mobileOpen])

    return (

        <section className="relative w-full min-h-screen">
            <header
                className='fixed inset-x-0 top-0 z-50 transition-colors duration-300  bg-neutral-900/90 shadow-md'
            >
                <nav
                    className="mx-auto flex max-w-7xl items-center justify-between  px-4 py-3 text-white"
                    aria-label="Primary Navigation"
                >
                    <Link href="/" className="leading-tight select-none">
                        <span className="block text-xl md:text-3xl  tracking-wide" style={{ fontFamily: 'var(--font-notoSerif)' }}>
                            BANQUET&nbsp;HALL
                        </span>
                        <span className="block text-sm -mt-1" style={{ fontFamily: "'Petemoss', cursive" }}>
                            New&nbsp;Delhi
                        </span>
                    </Link>

                    <ul className="hidden md:flex gap-20 text-lg" style={{ fontFamily: 'var(--font-notoSerif)' }}>
                        {NAV_ITEMS.map(({ label, href }) => (
                            <li key={label}>
                                <Link href={href} className="transition-colors hover:underline underline-offset-4">
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="md:hidden">
                        <button onClick={() => setMobileOpen(true)} aria-label="Open mobile menu">
                            <Menu size={28} />
                        </button>
                    </div>
                </nav>

                {/* Background overlay */}
                <div
                    ref={overlayRef}
                    className="fixed inset-0 z-40 bg-black transition-opacity duration-300"
                    style={{ opacity: 0, display: 'none' }}
                    onClick={() => setMobileOpen(false)}
                />

                {/* Slide-in tray menu */}
                <div
                    ref={trayRef}
                    className="fixed top-0 right-0 h-full w-64 z-50 bg-neutral-900 text-white shadow-lg md:hidden flex flex-col transition-all duration-300"
                    style={{
                        transform: mobileOpen ? 'translateX(0%)' : 'translateX(100%)',
                        opacity: mobileOpen ? 1 : 0,
                    }}
                >
                    <div className="flex justify-end p-4">
                        <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                            <X size={28} />
                        </button>
                    </div>
                    <ul className="flex flex-col gap-6 px-6 text-lg" style={{ fontFamily: 'var(--font-notoSerif)' }}>
                        {NAV_ITEMS.map(({ label, href }) => (
                            <li key={label}>
                                <Link href={href} onClick={() => setMobileOpen(false)} className="block w-full transition-colors hover:underline underline-offset-4">
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
            {/* Top Heading */}
            <div className="bg-[#F8F1E9] py-8 text-center border-b">
                <h2 className="text-3xl mt-20 md:text-7xl font-semibold text-[#393b39] tracking-wide">
                    Our Services
                </h2>
                <div className="flex justify-center mb-4">
                                    <div className="">
                                        <Image
                                            src="/vector2.png"
                                            alt="Decoration"
                                            width={400}
                                            height={40}
                                            className="w-52 sm:w-120 h-auto"
                                        />
                                    </div>
                                </div>
            </div>

            {/* Background Image */}
            <div className="relative w-full h-[75vh] md:h-screen">
                <Image
                    src="https://res.cloudinary.com/dtswx9pbk/image/upload/v1746638706/services_fz5af3.jpg"
                    alt="Our services - wedding celebration"
                    fill
                    priority
                    className="object-cover brightness-75"
                />

                {/* Overlay Text */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white"
                >
                    <p className="text-sm md:text-3xl tracking-widest mb-2">
                        Services, events and pricing
                    </p>
                    <h3 className="text-3xl md:text-7xl font-semibold mb-4 ">
                        Explore the
                    </h3>
                    <p className="text-sm md:text-2xl tracking-widest">
                        categories and choose your own story
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
