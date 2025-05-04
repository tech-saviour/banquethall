// components/Hero.tsx
export default function Hero() {
    return (
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/hero.jpg')", // Place image in public/hero.jpg
        }}
      >
        <div className="lg:-ml-72 lg:-mt-24 text-center px-4">
          <h2
            className="text-xl sm:text-4xl tracking-widest"
            style={{ fontFamily: "'Noto Serif JP', serif", letterSpacing: '0.5em' }}
          >
            SIMPLY PRETTY
          </h2>
          <h1
            className="text-4xl sm:text-6xl font-bold"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            BANQUET HALLS
          </h1>
          <div className="mt-4 mb-2 w-full flex justify-center">
            <div className="w-24 h-px bg-white" />
          </div>
          <p
            className="text-xl italic"
            style={{ fontFamily: "'Petemoss', cursive" }}
          >
            New Delhi
          </p>
          <div className="mt-2 w-full flex justify-center">
            <div className="w-24 h-px bg-white" />
          </div>
        </div>
  
        {/* Optional: Fade overlay */}
        <div className="absolute inset-0 bg-black/30" />
  
        {/* Torn edge SVG at bottom */}
        {/* More random jagged torn edge with shadow */}
<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
  <svg
    viewBox="0 0 1440 120"
    className="w-full h-[120px]"
    preserveAspectRatio="none"
  >
    <defs>
      <filter id="tornShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="black" floodOpacity="0.3" />
      </filter>
    </defs>
    <path
      d="
        M0,90 
        L50,70 
        L100,95 
        L160,65 
        L230,85 
        L300,60 
        L370,90 
        L430,55 
        L500,80 
        L580,50 
        L660,85 
        L740,60 
        L820,90 
        L900,55 
        L980,85 
        L1060,65 
        L1140,95 
        L1220,60 
        L1300,90 
        L1380,65 
        L1440,85 
        L1440,120 
        L0,120 
        Z"
      fill="#fffaf0"
      filter="url(#tornShadow)"
    />
  </svg>
</div>

      </section>
    )
  }
  
  