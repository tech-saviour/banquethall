'use client';

import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Printer,
} from 'lucide-react'; // Removed Rss to avoid conflict

import {
  SiFacebook,
  SiGitter,
  SiLinkedin,
  SiInstagram,
  SiRss,
} from 'react-icons/si';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#FFFDF1] text-[#3c2b1c] py-10 px-4 border-t"
    >
      <div className="max-w-7xl mx-auto text-center space-y-6">
        {/* Logo Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-2"
        >
          <h2 className="text-3xl sm:text-4xl font-serif tracking-[0.3em]">SIMPLY PRETTY</h2>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-[0.3em]">BANQUET HALLS</h2>
          <div className="flex justify-center items-center gap-2 text-sm font-light italic">
            <div className="w-24 border-t border-[#3c2b1c]" />
            <span className="font-petemoss text-xl">New Delhi</span>
            <div className="w-24 border-t border-[#3c2b1c]" />
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm"
        >
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>ABC Street, Vice City, Leonida, United States of Palermo</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>(123) 456-7890</span>
          </div>
          <div className="flex items-center gap-2">
            <Printer size={16} />
            <span>(123) 456-7890</span>
          </div>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center items-center gap-4 pt-4 text-[#3c2b1c] text-lg"
        >
          <span className="text-sm text-gray-600 hidden sm:inline">Social Media</span>
          {[SiFacebook, SiGitter, SiLinkedin, SiInstagram, SiRss].map((Icon, idx) => (
            <Icon
              key={idx}
              size={18}
              className="hover:text-[#444] cursor-pointer transition-colors"
            />
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
}
