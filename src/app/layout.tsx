// app/layout.tsx
"use client"
import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'
import { usePathname } from 'next/navigation'


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isservicePage = pathname?.startsWith("/services") || false;
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
        {!isservicePage && <Navbar />}{children}
        <Footer />
      </body>
    </html>
  )
}

