import Image from "next/image";

export default function Amain() {
  return (
    <section className="bg-[#F8F1E9] h-[130vh] w-full text-gray-800  py-12 ">
      <div className=" mx-auto">
        {/* About Us Heading */}
        <h2 className="text-4xl sm:text-6xl font-serif text-center mb-4">About Us</h2>

        {/* Decorative Line */}
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

        {/* Text Content */}
        <div className="text-center mb-8">
          <p className="text-lg sm:text-xl text-gray-600">
            At Simply Pretty Banquet Halls, we specialize in creating unforgettable events in beautiful
            venues. Whether you're planning a wedding, corporate event, or any other special occasion,
            our elegant banquet halls offer the perfect setting. We focus on delivering outstanding
            service, luxurious settings, and exquisite catering to ensure your event is nothing short
            of perfect.
          </p>
        </div>
      </div>

      {/* Full Width Image after About Us */}
      <div className="relative w-full h-[70vh]">
        <Image
          src="https://res.cloudinary.com/dtswx9pbk/image/upload/v1747067685/Building-min_mugnrx.png"
          alt="Banquet Hall Image"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0"
        />
      </div>
    </section>
  );
}
