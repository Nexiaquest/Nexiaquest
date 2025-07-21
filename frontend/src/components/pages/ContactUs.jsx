import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then(() => {
        setPopupVisible(true);
        e.target.reset();

        setTimeout(() => {
          setPopupVisible(false);
        }, 5000);
      })
      .catch((error) => {
        alert('Error sending email:', error.text);
      });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-20 px-4 md:px-12 relative">

      {/* Thank You Popup */}
      <AnimatePresence>
        {popupVisible && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
          >
            <p className="text-center font-semibold">
              Thank you for responding. We will respond to you within 24 hours.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Box */}
      <motion.div
        className="max-w-6xl mx-auto bg-white/60 backdrop-blur-lg border border-blue-100 rounded-3xl shadow-2xl p-6 md:p-12 flex flex-col md:flex-row gap-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Info Section */}
        <div className="md:w-1/2 text-gray-900 space-y-6">
          <h3 className="text-sky-500 text-3xl font-medium">Contact Us</h3>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">Talk to the Smart Living Experts</h2>
          <p className="text-gray-600">
            We're here to answer your questions and craft custom solutions for your dream space.
          </p>

          <div className="space-y-4 text-base">
            <div className="flex items-center gap-3">
              <Phone className="text-blue-600" />
              <span>+91 0761-8523-398</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" />
              <span>Nexiaquest@gmail.Com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-600" />
              <span>KLLG St, No.99, Pku City, ID 28289</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-6 text-2xl text-sky-600">
            <a href="https://instagram.com/companyname" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-orange-500 transition" />
            </a>
            <a href="https://www.youtube.com/@companyname" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:text-orange-500 transition" />
            </a>
            <a href="https://linkedin.com/company/companyname" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-orange-500 transition" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={sendEmail}
          className="md:w-1/2 space-y-6 bg-white/90 border border-gray-200 p-6 rounded-2xl shadow-md"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FloatingInput label="Your Name" name="name" type="text" />
            <FloatingInput label="Phone Number" name="phone" type="tel" />
          </div>
          <FloatingInput label="Your Email" name="email" type="email" full />
          <FloatingInput label="Subject" name="subject" type="text" full />
          <FloatingTextarea label="Your Message" name="message" />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-sky-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>

      {/* Map */}
      <motion.div
        className="max-w-6xl mx-auto mt-12 rounded-xl overflow-hidden shadow-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <iframe
          className="w-full h-80"
          src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK"
          loading="lazy"
          allowFullScreen
          title="Company Location"
        ></iframe>
      </motion.div>
    </div>
  );
};

// Floating Label Input
// Floating Label Input (Fixed)
const FloatingInput = ({ label, name, type, full = false }) => (
  <div className={`relative w-full ${full ? 'col-span-2' : ''}`}>
    <input
      type={type}
      name={name}
      id={name}
      required
      placeholder=" "
      className="peer w-full px-4 pt-5 pb-2 text-sm bg-transparent border border-gray-400 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
    />
    <label
      htmlFor={name}
      className="absolute text-gray-500 text-sm left-4 top-2 transition-all duration-200 transform scale-100 origin-left peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:scale-90 peer-focus:text-blue-600"
    >
      {label}
    </label>
  </div>
);

// Floating Textarea (Fixed)
const FloatingTextarea = ({ label, name }) => (
  <div className="relative w-full col-span-2">
    <textarea
      name={name}
      id={name}
      rows="5"
      required
      placeholder=" "
      className="peer w-full px-4 pt-5 pb-2 text-sm bg-transparent border border-gray-400 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
    />
    <label
      htmlFor={name}
      className="absolute text-gray-500 text-sm left-4 top-2 transition-all duration-200 transform scale-100 origin-left peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:scale-90 peer-focus:text-blue-600"
    >
      {label}
    </label>
  </div>
);


export default ContactUs;
