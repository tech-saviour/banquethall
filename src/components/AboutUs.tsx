import Image from "next/image";

export default function AboutUs() {
    return (
        <section className="bg-[#F8F1E9] text-[#393b39] px-6 py-12 md:px-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl sm:text-6xl font-serif text-center mb-4">About Us</h2>
                <div className="flex justify-center mb-4">
                    <div className="-mt-4">
                        <Image
                            src="/vector.png"
                            alt="Decoration"
                            width={400}
                            height={40}
                            className="w-52 sm:w-80 h-auto"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left - Image collage */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="row-span-2 relative w-full h-48 sm:h-72">
                            <Image
                                src="https://res.cloudinary.com/dtswx9pbk/image/upload/v1746460075/about-1_jqo7oy.jpg"
                                alt="Banquet setup"
                                fill
                                className="object-cover rounded shadow-md"
                                placeholder="blur"
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                blurDataURL="https://res.cloudinary.com/dtswx9pbk/image/upload/v1746460075/about-1_jqo7oy.jpg"
                            />
                        </div>
                        <div className="relative w-full h-24 sm:h-48">
                            <Image
                                src="https://res.cloudinary.com/dtswx9pbk/image/upload/v1746460067/about-2_cfiwoe.jpg"
                                alt="Dining table"
                                fill
                                className="object-cover rounded shadow-md"
                                placeholder="blur"
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 25vw"
                                blurDataURL="https://res.cloudinary.com/dtswx9pbk/image/upload/v1746460067/about-2_cfiwoe.jpg"
                            />
                        </div>
                        <div className="row-span-2 relative w-full h-48 sm:h-72">
                            <Image
                                src="https://res.cloudinary.com/dtswx9pbk/image/upload/v1746460070/about-3_kr1sau.jpg"
                                alt="Wedding setup"
                                fill
                                className="object-cover rounded shadow-md"
                                placeholder="blur"
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                blurDataURL="https://res.cloudinary.com/dtswx9pbk/image/upload/v1746460070/about-3_kr1sau.jpg"
                            />
                        </div>
                        <div className="row-span-1 relative w-full h-24 sm:h-48">
                            <Image
                                src="https://res.cloudinary.com/dtswx9pbk/image/upload/v1746460071/about-4_tjhk99.jpg"
                                alt="Event hall"
                                fill
                                className="object-cover rounded shadow-md"
                                placeholder="blur"
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 25vw"
                                blurDataURL="https://res.cloudinary.com/dtswx9pbk/image/upload/v1746460071/about-4_tjhk99.jpg"
                            />
                        </div>
                    </div>

                    {/* Right - Text and Button */}
                    <div className="font-sans text-justify">
                        <p className="mb-6 text-base sm:text-lg sm:leading-relaxed">
                            Nestled in the heart of the city, our banquet halls offer a blend of timeless elegance and modern convenience. Whether you&apos;re planning a lavish wedding, an intimate celebration, or a corporate gathering, our versatile spaces and attentive service ensure your event is unforgettable.
                        </p>
                        <p className="mb-8 text-base sm:text-lg  sm:leading-relaxed">
                            With exquisite decor, gourmet catering options, and customizable setups, we transform your vision into reality. Discover the perfect backdrop for your special moments—crafted with care and designed to impress.
                        </p>
                        <div className="flex justify-center sm:justify-start ">
                            <button className="px-6 text-xl tracking-widest py-2 sm:px-8 sm:py-3 bg-transparent border border-gray-700 text-gray-800  rounded-lg hover:bg-gray-800 hover:text-white hover:cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
                                ABOUT US
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
