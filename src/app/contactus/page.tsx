'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');

  interface Status {
    type: 'loading' | 'error' | 'success';
    message: string;
  }
  const [status, setStatus] = useState<Status | null>(null);

  interface SendEmailResponse {
    message: string;
  }

  interface EmailValidator {
    (email: string): boolean;
  }

  const isValidEmail: EmailValidator = (email: string): boolean => {
    return emailRegex.test(email);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);

    if (!name || !email || !query) {
      const errorMsg = 'Please fill in all fields';
      setStatus({ type: 'error', message: errorMsg });
      toast.error(errorMsg);
      return;
    }

    if (!isValidEmail(email)) {
      const errorMsg = 'Please enter a valid email address';
      setStatus({ type: 'error', message: errorMsg });
      toast.error(errorMsg);
      return;
    }

    setStatus({ type: 'loading', message: 'Sending email...' });
    const loadingToastId = toast.loading('Sending email...', { autoClose: false });  // Show the loading toast

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, query }),
      });

      const result: SendEmailResponse = await response.json();

      // Dismiss the loading toast
      toast.dismiss(loadingToastId);

      if (response.status === 200) {
        const successMsg = 'Email sent successfully!';
        setStatus({ type: 'success', message: successMsg });
        toast.success(successMsg);
        setName('');
        setEmail('');
        setQuery('');
      } else if (response.status === 429) {
        setStatus({ type: 'error', message: result.message });
        toast.error(result.message);
      } else {
        const errorMsg = 'Failed to send email. Please try again later.';
        setStatus({ type: 'error', message: errorMsg });
        toast.error(errorMsg);
      }
    } catch (error) {
      // Dismiss the loading toast
      toast.dismiss(loadingToastId);
      console.error('Error sending email:', error);
      const errorMsg = 'An unexpected error occurred.';
      setStatus({ type: 'error', message: errorMsg });
      toast.error(errorMsg);
    }
  };

  return (
    <section
      className="relative font-serif w-full h-[80vh] sm:min-h-screen bg-cover bg-top flex items-center justify-center p-4"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dtswx9pbk/image/upload/v1746612024/contact_vfjxbe.jpg')",
        backgroundPosition: 'top',
        backgroundPositionX: '35%',
      }}
    >
      {/* Include the ToastContainer component */}
      <ToastContainer />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-45 z-0" />

      {/* Contact Content */}
      <div className="relative mt-24 sm:mt-20 z-10 flex flex-col sm:flex-row w-full max-w-6xl text-white gap-8 items-center lg:items-start justify-center md:justify-between">
        {/* Contact Info */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center lg:items-start gap-4 w-full sm:w-auto"
        >
          {[
            {
              Icon: MapPin,
              title: 'Our main Office',
              content: (
                <>
                  Connaught Place
                  <br />
                  New Delhi
                </>
              ),
            },
            {
              Icon: Phone,
              title: 'Phone number',
              content: (
                <>
                  +91 93255-12345
                  <br />
                  +91 78897-12345
                </>
              ),
            },
            {
              Icon: Mail,
              title: 'E-mail',
              content: <>preetybanquet@gmail.com</>,
            },
          ].map(({ Icon, title, content }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/40 hidden sm:block p-6 backdrop-blur rounded-md w-full max-w-xs"
            >
              <div className="text-black text-sm sm:text-xl">
                <h2 className="font-bold mb-2 flex items-center gap-2">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" /> {title}
                </h2>
                <p>{content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/20 backdrop-blur-md p-6 sm:p-8 rounded-md w-full max-w-md"
        >
          <h2 className="text-2xl sm:text-5xl font-serif mb-6 border-b-2 border-white pb-2 text-center">
            CONTACT US
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <motion.input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 sm:p-3 rounded-md text-black bg-white/80 focus:outline-none"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              placeholder="Enter your valid Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 sm:p-3 rounded-md text-black bg-white/80 focus:outline-none"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.textarea
              placeholder="Write your query here"
              rows={3}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="p-2 sm:p-3 rounded-md text-black bg-white/80 focus:outline-none"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }}
              className="mt-2 self-start hover:cursor-pointer border border-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition"
            >
              Submit
            </motion.button>

            {status && (
              <div
                className={`mt-4 text-center ${
                  status.type === 'error' ? 'text-red-500' : 'text-white'
                }`}
              >
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}



