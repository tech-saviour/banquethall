'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ServiceBlock from '@/components/ServiceBlock';
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

        if (mobileOpen) {
            overlay.style.opacity = '0.5'
            overlay.style.display = 'block'
        } else {
            overlay.style.opacity = '0'
            overlay.style.display = 'none'
        }
    }, [mobileOpen])

    return (

        <section className="relative bg-[#F8F1E9] w-full min-h-screen">
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
                <h2 className="text-3xl mt-14 sm:mt-16 md:text-5xl font-semibold text-[#393b39] tracking-wide">
                    Our Services
                </h2>
                <div className="flex justify-center mb-2 sm:mb-3">
                    <div className="">
                        <Image
                            src="/vector2.png"
                            alt="Decoration"
                            width={400}
                            height={40}
                            className="w-52 sm:w-80 h-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Background Image */}
            <div className="relative mb-20 w-full h-[55vh] sm:h-[65vh] md:h-[70vh]">
                <div className="absolute inset-0 z-5 h-[55vh] sm:h-[65vh] md:h-[70vh]  bg-black/30" />
                <Image
                    src="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1746638706/services_fz5af3.jpg"
                    alt="Our services - wedding celebration"
                    fill
                    priority
                    className="object-cover brightness-75"
                />

                {/* Overlay Text */}
                <motion.div
                   
                    
                    className="absolute z-10 inset-0 flex flex-col items-center justify-center text-center px-4 text-white"
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
            {/* Service Cards */}

                <ServiceBlock
                    title="Engagement"
                    description="Host an unforgettable engagement celebration in our elegant banquet hall. With stylish interiors, customizable décor, and exceptional service, we create the perfect setting for your special announcement."
                    image="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1746710719/engagement_ycbgsg.jpg"
                    reverse={false}
                />

                <ServiceBlock
                    title="Wedding"
                    description="Make your big day truly magical with our spacious and luxurious wedding hall. From grand entrances to exquisite catering, we provide everything you need to turn your dream wedding into reality."
                    image="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1746711758/weeding_fcgsoz.png"
                    reverse={true}
                />
                <div className='py-0 md:py-20' ></div>
                <ServiceBlock
                    title="Birthday"
                    description="Celebrate your special day in style with our vibrant birthday party venue. With customizable themes, delicious catering, and a lively atmosphere, we ensure your birthday bash is unforgettable."
                    image="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1746722266/birthda_uxytp3.png"
                    reverse={false}
                />

                <ServiceBlock
                    title="Corporate Events"
                    description="Host an unforgettable engagement celebration in our elegant banquet hall. With stylish interiors, customizable décor, and exceptional service, we create the perfect setting for your special announcement."
                    image="https://res.cloudinary.com/dtswx9pbk/image/upload/v1746722266/ce_p45zpw.png"
                    reverse={true}
                />
                 <div className='py-0 md:py-20' ></div>
                 <ServiceBlock
                    title="Training Events"
                    description="Elevate your team's skills with our comprehensive training events. We offer customizable programs, expert instructors, and a collaborative environment to ensure your training is effective and engaging."
                    image="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747237713/Rectangle_467_bz53eg.png"
                    reverse={false}
                />

                <ServiceBlock
                    title="Meetings"
                    description="Host an unforgettable meeting in our elegant banquet hall. With stylish interiors, customizable décor, and exceptional service, we create the perfect setting for your important discussions."
                    image="https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747237706/Rectangle_468_balgro.png"
                    reverse={true}
                />
                 <div className='py-0 md:py-20' ></div>
        </section>
    );
};

export default ServicesSection;
