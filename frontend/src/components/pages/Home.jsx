import React, { useEffect, useState } from "react";
import video from "../../assets/video.mp4";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube,FaWhatsapp,FaFacebookMessenger } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Typewriter } from 'react-simple-typewriter';
import About from "/src/components/about";
import { MessageCircle } from "lucide-react";

import { FaShieldAlt, FaUniversity, FaBullhorn, FaGavel, FaGraduationCap, FaHome, FaPaintRoller, FaChartLine } from "react-icons/fa";

import bgImage from '/src/assets/lisa.jpg';
import avatar1 from '/src/assets/avatar1.jpg';
import avatar2 from '/src/assets/avatar2.jpg';
import avatar3 from '/src/assets/avatar3.jpg';
'use client';

import { motion } from 'framer-motion';

const partners = [
  {
    name: 'SBI',
    logo: 'src/assets/sbi.png',
  },
  {
    name: 'HDFC',
    logo: 'src/assets/hdfc.png',
  },
  {
    name: 'PNB',
    logo: 'src/assets/pnb.png',
  },
  {
    name: 'LIC',
    logo: 'src/assets/lic.png',
  },
  {
    name: 'Motilal Oswal',
    logo: 'https://assets-netstorage.groww.in/stock-assets/logos/MOTILALOFS_LOGO.png',
  },
  {
    name: 'Sharekhan',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Sharekhan_logo.png',
  },
  {
    name: 'BOB',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Bank_of_Baroda_logo.svg/1200px-Bank_of_Baroda_logo.svg.png',
  },
  {
    name: 'ICICI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/ICICI_Bank_Logo.svg/2560px-ICICI_Bank_Logo.svg.png',
  },
];
const Marquee = () => {
  return (
    <div className="overflow-hidden w-full relative">
      <motion.div
        className="flex gap-8 w-max items-center"
        animate={{ x: ['0%', '-50%'] }} // Move halfway because we duplicated the array
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: 'linear',
        }}
      >
        {[...partners, ...partners].map((partner, i) => (
          <div
            key={i}
            className="w-36 flex-shrink-0 flex flex-col items-center justify-center p-3 bg-white rounded-xl shadow-md hover:scale-105 transition-transform duration-300 border"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-12 object-contain mb-2"
              loading="lazy"
            />
            <p className="text-sm text-center text-gray-700 font-medium">{partner.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};


const testimonials = [
  {
    quote: 'Explained Everything Clearly. After Setup, I Could Control Our Energy Use. It’s Safe, Sleek, And Smarter Than I Expected!',
    name: 'John Miller',
    title: 'Homeowner',
    image: avatar1,
  },
  {
    quote: 'The Installation Process Was Smooth, Now We Control Everything From Our Phone. We Live Completely Connected.',
    name: 'Lisa Carter',
    title: 'Interior Architect',
    image: avatar2,
  },
  {
    quote: 'Professional service from start to finish. They made the transition seamless and the support was incredible!',
    name: 'David Kumar',
    title: 'Tech Enthusiast',
    image: avatar3,
  },
];

const services = [
  "Insurance",
  "Real Estate",
  "Education",
  "Marketing",
  "Legal Services",
  "Finance",
  "Architecture and Interiors",
  "Shares and Mutual Funds"
];
const service = [
  { title: "Insurance", icon: <FaShieldAlt />, color: "from-orange-500 to-purple-600" },
  { title: "Finance", icon: <FaUniversity />, color: "from-blue-500 to-indigo-600" },
  { title: "Marketing", icon: <FaBullhorn />, color: "from-pink-500 to-rose-500" },
  { title: "Legal Services", icon: <FaGavel />, color: "from-green-500 to-emerald-600" },
  { title: "Education", icon: <FaGraduationCap />, color: "from-yellow-400 to-orange-500" },
  { title: "Real Estate", icon: <FaHome />, color: "from-red-500 to-amber-600" },
  { title: "Architecture & Interiors", icon: <FaPaintRoller />, color: "from-teal-500 to-cyan-500" },
  { title: "Shares & Mutual Funds", icon: <FaChartLine />, color: "from-indigo-500 to-purple-600" },
]

const Home = () => {
  const [index, setIndex] = useState(0);
  const [currentService, setCurrentService] = useState(0);

  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative font-sans">

      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0" src={video} />
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

        {/* Centered Content */}
        <div className="absolute top-0 left-0 w-full h-full z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-[160px]  text-white opacity-10 select-none leading-none tracking-widest mb-[-80px]">NEXIAQUEST</h1>
          <h3 className="text-md md:text-lg text-white font-semibold tracking-widest mb-2 uppercase">WELCOME TO NEXIAQUEST VENTURES LLP</h3>

          <h2 className="text-4xl md:text-6xl text-white font-bold mb-6 pt-4">
            Empowering{" "}
            <span className="text-sky-600 font-semibold">
              <Typewriter
                words={services}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </span>{" "}
            for a Better Tomorrow
          </h2>

          <p className="text-gray-300 text-lg max-w-4xl leading-relaxed mb-8 pt-6">
            Nexiaquest Ventures LLP is a diversified services company that operates across multiple sectors, offering a comprehensive range of professional solutions to both individual and corporate clients. Founded with the vision of providing integrated services under one roof, Nexiaquest Ventures LLP has established itself as a versatile player in the market.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-2 bg-sky-600 hover:bg-sky-700 rounded-lg text-white font-semibold transition">Explore Sectors</button>
            <button className="px-6 py-2 bg-white text-black hover:bg-gray-200 rounded-lg font-semibold transition">Know More</button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <About />

     <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xl font-semibold text-blue-900  mb-4">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive <span className="text-sky-700">Business Solutions</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Tailored professional services across multiple industries to meet your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.map((service, index) => (
              <div 
                key={index}
                onClick={() => handleServiceClick(service.title)}
                className="relative group overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative z-10 p-6 h-full flex flex-col">
                  <div className={`text-3xl w-14 h-14 mb-4 flex items-center justify-center rounded-lg bg-gradient-to-br ${service.color} text-white`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    Professional {service.title.toLowerCase()} solutions tailored to your requirements
                  </p>
                  <div className="mt-auto">
                    <span className="text-sm font-medium text-sky-600 group-hover:text-sky-700 flex items-center gap-1 transition-colors">
                      Explore service
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  <section className="bg-gray-100 py-12">
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold text-blue-900">Our Trusted Partners</h2>
        <p className="text-gray-500 text-xl">India’s leading institutions working with us</p>
      </div>

      <div className="space-y-6">
        <Marquee />
      </div>
    </section>
 
      {/* Testimonials Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center blur-sm scale-110" style={{ backgroundImage: `url(${bgImage})` }} />
        <div className="absolute inset-0 bg-[#0A1F3D]/80 z-0" />

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <p className="text-blue-400 text-xl mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Homes That Think</h2>
          <p className="text-gray-300 mb-12">Hear directly from clients whose spaces have been elevated through elegant, connected technology.</p>

          <div className="relative flex items-center justify-center w-full">
            <button onClick={prev} className="p-3 bg-white text-gray-800 rounded-full shadow-lg z-10">
              <ChevronLeft size={20} />
            </button>

            <div className="overflow-hidden w-full max-w-2xl mx-auto">
              <div className="flex transition-transform duration-[1500ms] gap-2 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
                {testimonials.map((t, i) => (
                  <div key={i} className="bg-white text-gray-800 p-6 mr-[-2] rounded-2xl shadow-xl w-full flex-shrink-0 min-h-[240px]">
                    <p className="italic font-medium text-xl mb-6">"{t.quote}"</p>
                    <div className="flex items-center space-x-3">
                      {t.image && <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />}
                      <div>
                        <p className="font-semibold">{t.name}</p>
                        <p className="text-sm text-blue-600">{t.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={next} className="p-3 bg-white text-gray-800 rounded-full shadow-lg z-10">
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, i) => (
              <span key={i} className={`h-2 w-2 rounded-full ${i === index ? 'bg-blue-500' : 'bg-gray-400'} transition-all duration-300`} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white mt-16">
            <div>
              <p className="text-4xl font-bold">98%</p>
              <p className="text-blue-400">Client Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold">99.9%</p>
              <p className="text-blue-400">System Uptime Guarantee</p>
            </div>
            <div>
              <p className="text-4xl font-bold">50+</p>
              <p className="text-blue-400">Expert Team Members Globally</p>
            </div>
          </div>
        </div>
      </section>

      
<section className="relative bg-gradient-to-b from-blue-50 to-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto bg-white/70 backdrop-blur-lg border border-blue-100 rounded-3xl p-10 md:p-14 shadow-xl transition-all duration-300">

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="flex items-start gap-4">
            <div className="p-4 bg-blue-100 rounded-full shadow-md">
              <MessageCircle className="text-blue-600 w-7 h-7" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Have Any Query?</h2>
              <p className="text-gray-600 text-base max-w-md">
                Our team is just one message away. Whether it's a small doubt or a big decision, we're ready to assist you.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-sm font-medium transition"
            >
              Talk to Us
            </a>
            <a
              href="mailto:support@nexiaquest.com"
              className="bg-white border border-blue-300 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl font-medium transition"
            >
              Email Support
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;
