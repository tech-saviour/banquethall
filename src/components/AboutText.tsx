import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

const AboutText: FC = () => {
  return (
    <>

      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-extrabold text-gray-800">Simply Pretty Banquet Halls</h1>
          <p className="text-lg text-gray-500 mt-4">Explore beautiful banquet halls in New Delhi.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image src="/images/banquet1.jpg" alt="Banquet Hall 1" width={300} height={200} className="rounded-lg shadow-lg"/>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
          >
            <Image src="/images/banquet2.jpg" alt="Banquet Hall 2" width={300} height={200} className="rounded-lg shadow-lg"/>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6 }}
          >
            <Image src="/images/banquet3.jpg" alt="Banquet Hall 3" width={300} height={200} className="rounded-lg shadow-lg"/>
          </motion.div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Accumsan scelerisque in accumsan pretium molestie
            diam viverra adipiscing. Nulla aliquam est imperdiet libero.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default AboutText;
