export default function AboutUs() {
    return (
      <section className="bg-[#FFFFF0] text-gray-800 px-6 py-16 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-serif text-center mb-6">About Us</h2>
          <div className="flex justify-center mb-12">
            <div className="w-60 border-t border-gray-500 relative">
              <div className="absolute -top-2 left-0">❧</div>
              <div className="absolute -top-2 right-0">❧</div>
            </div>
          </div>
  
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image collage */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gray-400 rounded shadow-md aspect-[3/4]" />
                <div className="bg-gray-400 rounded shadow-md aspect-square" />
              </div>
              <div className="space-y-4 mt-8 md:mt-0">
                <div className="bg-gray-400 rounded shadow-md aspect-square" />
                <div className="bg-gray-400 rounded shadow-md aspect-[3/4]" />
              </div>
            </div>
  
            {/* Right - Text and Button */}
            <div>
              <p className="mb-6 text-lg leading-relaxed">
                Nestled in the heart of the city, our banquet halls offer a blend of timeless elegance and modern convenience. Whether you&apos;re planning a lavish wedding, an intimate celebration, or a corporate gathering, our versatile spaces and attentive service ensure your event is unforgettable.
              </p>
              <p className="mb-8 text-lg leading-relaxed">
                With exquisite decor, gourmet catering options, and customizable setups, we transform your vision into reality. Discover the perfect backdrop for your special moments—crafted with care and designed to impress.
              </p>
              <button className="px-6 py-2 border border-gray-700 text-gray-900 text-lg rounded hover:bg-gray-100 transition">
                ABOUT US
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  