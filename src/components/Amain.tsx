import Image from "next/image";

export default function Amain() {
    return (

        <section className="bg-[#F8F1E9] h-[100vh] w-full text-[#393b39] px-6 py-20 md:px-16"
            style={{
                backgroundImage:
                    "url('https://res.cloudinary.com/dtswx9pbk/image/upload/f_auto,q_auto/v1747067685/Building-min_mugnrx.png')",
                backgroundPosition: 'bottom',
                backgroundSize: 'cover',
                backgroundPositionY: '0%',
                backgroundPositionX: '45%',
            }}>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl sm:text-6xl font-serif text-center mb-4">About Us</h2>
                <div className="flex justify-center ">
                    <div className="-mt-4">
                        <Image
                            src="/vector.png"
                            alt="Decoration"
                            width={1400}
                            height={1300}
                            className="w-52 sm:w-80 h-auto"
                        />
                    </div>

                </div>
                <p className="text-lg font-sans sm:text-xl text-center mb-8">
                    Welcome to our banquet hall, where elegance meets excellence. 
                </p>
            </div>
        </section>
    );
}