"use client"
import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isservicePage = pathname?.startsWith("/services") ||pathname?.startsWith("/about") || pathname?.startsWith("/testimonials") || false;

  return (
    <html lang="en">
      <head>
        {/* Load fonts via CDN */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&family=Petemoss&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {/* Navbar is hidden on service pages */}
        {!isservicePage && <Navbar />}

        {/* Animate Presence for page transitions */}
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname} // Unique key based on pathname for different pages
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.main>
        </AnimatePresence>

        <Footer />
      </body>
    </html>
  )
}


