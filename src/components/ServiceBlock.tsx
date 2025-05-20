'use client';

import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Calendar, User, Users, ChevronDown, ChevronUp } from 'lucide-react';

interface ServiceBlockProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export default function ServiceBlock({
  title,
  description,
  image,
  reverse = false,
}: ServiceBlockProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [showForm, setShowForm] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown open state

  const [form, setForm] = useState({
    event: '',
    name: '',
    email: '',
    phone: '',
    people: '',
    date: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!form.event) newErrors.event = 'Please select an event';
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!emailRegex.test(form.email)) newErrors.email = 'Invalid email format';
    if (!phoneRegex.test(form.phone)) newErrors.phone = 'Invalid phone number';
    if (!form.people || Number(form.people) <= 0) newErrors.people = 'Invalid number of people';
    if (!form.date) newErrors.date = 'Please select a date';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log('Booking submitted', form);
      setShowForm(false);
    }
  };

  const imageVariant = {
    hidden: { opacity: 0, x: reverse ? 100 : -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const textVariant = {
    hidden: { opacity: 0, x: reverse ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    const today = new Date();
    if (selectedDate < today) {
      setErrors((prev) => ({ ...prev, date: 'Please select a date today or later' }));
    } else {
      setErrors((prev) => ({ ...prev, date: '' }));
      setForm({ ...form, date: e.target.value });
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev); // Toggle dropdown state
  };

  return (
    <div
      ref={ref}
      className={`flex overflow-hidden flex-col text-[#393b39] md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} w-full relative`}
    >
      {/* Image Section */}
      <motion.div
        variants={imageVariant}
        initial="hidden"
        animate={controls}
        className={`flex w-full md:w-1/2 items-center ${reverse ? 'justify-center md:justify-start' : 'justify-center md:justify-end'} bg-[#F8F1E9]`}
      >
        <div className="relative w-5/6 h-72 md:h-96">
          <div className={`hidden md:block absolute ${reverse ? 'left-4 top-4' : 'right-4 bottom-4'} w-full h-full bg-[#3d2b1f] z-0`} />
          <Image src={image} alt={title} fill className="object-cover z-10" />
        </div>
      </motion.div>

      {/* Text Block */}
      <motion.div
        variants={textVariant}
        initial="hidden"
        animate={controls}
        className="w-full md:w-1/2 flex text-justify items-center justify-center px-6 py-10 bg-[#F8F1E9]"
      >
        <div className="max-w-md text-center">
          <h3 className="text-4xl md:text-5xl tracking-widest font-semibold mb-4">
            {title}
          </h3>
          <p className="text-sm md:text-lg mb-2">{description}</p>
          <button
            onClick={() => setShowForm(true)}
            className="border border-gray-700 px-6 py-2 rounded-md text-gray-700 hover:cursor-pointer hover:shadow-md hover:scale-105 transition-all duration-300"
          >
            Book Now
          </button>
        </div>
      </motion.div>

      {/* Pop-up Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-[#F8F1E9] p-6 rounded-lg shadow-xl w-full max-w-lg relative">
            <h2 className="text-2xl font-sans font-semibold mb-4 text-center">Book Your Spot</h2>

            <div className="space-y-3">
              <div className="relative" onClick={toggleDropdown}> 
                <select
                  name="event"
                  value={form.event}
                  onChange={handleChange}
                  className="w-full border p-2 rounded pr-10 appearance-none"
                >
                  <option value="">Select Event</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Seminar">Seminar</option>
                  <option value="Concert">Concert</option>
                </select>
                {/* Chevron icon for dropdown */}
                <div 
                  className="absolute right-3 top-2.5 cursor-pointer"
                  onClick={toggleDropdown}
                >
                  {isDropdownOpen ? <ChevronUp /> : <ChevronDown />}
                </div>
                {errors.event && <p className="text-sm text-red-600">{errors.event}</p>}
              </div>

              <div className="flex items-center border rounded p-2">
                <User className="mr-2" />
                <input
                  name="name"
                  placeholder="Your Name"
                  className="w-full outline-none"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}

              <div className="flex items-center border rounded p-2">
                <Mail className="mr-2" />
                <input
                  name="email"
                  placeholder="Email"
                  className="w-full outline-none"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}

              <div className="flex items-center border rounded p-2">
                <Phone className="mr-2" />
                <input
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full outline-none"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}

              <div className="flex items-center border rounded p-2">
                <Users className="mr-2" />
                <input
                  name="people"
                  type="number"
                  placeholder="Number of People"
                  className="w-full outline-none"
                  value={form.people}
                  onChange={handleChange}
                />
              </div>
              {errors.people && <p className="text-sm text-red-600">{errors.people}</p>}

              <div className="flex items-center border rounded p-2">
                <Calendar className="mr-2" />
                <input
                  name="date"
                  type="date"
                  className="w-full outline-none"
                  value={form.date}
                  onChange={handleDateChange}
                  min={new Date().toISOString().split('T')[0]} // Restrict to today or later
                />
              </div>
              {errors.date && <p className="text-sm text-red-600">{errors.date}</p>}
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


