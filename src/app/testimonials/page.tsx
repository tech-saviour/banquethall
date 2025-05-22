"use client"
import Testimonial from '@/components/Testimonial'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Services', href: '/services' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contactus' },
]

const Page = () => {
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
    <div>
      <header
        className='fixed inset-x-0 top-0 z-50 transition-colors duration-300 bg-neutral-900/90 shadow-md'
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-white"
          aria-label="Primary Navigation"
        >
          <Link href="/" className="leading-tight select-none">
            <span className="block text-xl md:text-3xl tracking-wide" style={{ fontFamily: 'var(--font-notoSerif)' }}>
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

        {/* Background overlay with framer-motion */}
        <motion.div
          ref={overlayRef}
          className="fixed inset-0 z-40 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: mobileOpen ? 0.5 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ display: mobileOpen ? 'block' : 'none' }}
          onClick={() => setMobileOpen(false)}
        />

        {/* Slide-in tray menu with framer-motion */}
        <motion.div
          ref={trayRef}
          className="fixed top-0 right-0 h-full w-64 z-50 bg-neutral-900 text-white shadow-lg md:hidden flex flex-col"
          initial={{ opacity: 0, x: '100%' }}
          animate={{
            opacity: mobileOpen ? 1 : 0,
            x: mobileOpen ? 0 : '100%',
          }}
          transition={{ duration: 0.3 }}
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
        </motion.div>
      </header>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Testimonial />
      </motion.div>
    </div>
  )
}

export default Page
