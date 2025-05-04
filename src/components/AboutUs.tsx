import Image from "next/image";

export default function AboutUs() {
    return (
        <section className="bg-[#FFFFF0] text-gray-800 px-6 py-16 md:px-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-serif text-center mb-6">About Us</h2>
                 <div className="flex justify-center mb-12">
                                <div className="-mt-4">
                                    <Image
                                        src="/vector.png"
                                        alt="Decoration"
                                        width={400}
                                        height={40}
                                        className="w-62 h-auto"
                                    />
                                </div>
                            </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left - Image collage */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="row-span-2 relative w-full h-72">
                            <Image
                                src="/images/about-1.jpg"
                                alt="Banquet setup"
                                fill
                                className="object-cover rounded shadow-md"
                                placeholder="blur"
                                loading="lazy"
                                blurDataURL="/images/about-1.jpg"
                            />
                        </div>
                        <div className="relative w-full h-36">
                            <Image
                                src="/images/about-2.jpg"
                                alt="Dining table"
                                fill
                                className="object-cover rounded shadow-md"
                                placeholder="blur"
                                loading="lazy"
                                blurDataURL="/images/about-2.jpg"
                            />
                        </div>
                        <div className="row-span-2 relative w-full h-72">
                            <Image
                                src="/images/about-3.jpg"
                                alt="Wedding setup"
                                fill
                                className="object-cover rounded shadow-md"
                                placeholder="blur"
                                loading="lazy"
                                blurDataURL="/images/about-3.jpg"
                            />
                        </div>
                        <div className="row-span-1 relative w-full h-36">
                            <Image
                                src="/images/about-4.jpg"
                                alt="Event hall"
                                fill
                                className="object-cover rounded shadow-md"
                                placeholder="blur"
                                loading="lazy"
                                blurDataURL="/images/about-4.jpg"
                            />
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
