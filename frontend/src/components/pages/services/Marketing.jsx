import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Megaphone, UsersRound, BarChart3, MonitorPlay, Sparkles, ChevronDown } from "lucide-react";
import { FaPalette, FaBoxOpen, FaFont, FaPaintBrush, FaGripLines } from 'react-icons/fa';

// ===== DATA =====
const heroText = {
  headline: "Ignite Your Brand's Digital Future",
  sub: "We offer cutting-edge digital marketing services to grow your business.",
  slogan: "Experience the art & science of digital marketing.",
};

const serviceCardData = [
  {
    headline: <>
      <span className="text-indigo-500 font-extrabold text-lg">Reach the Top</span>
      <br />
      <span className="text-sm text-white/80 font-semibold">with SEO</span>
    </>,
    desc: "Maximize online presence & rank higher organically.",
    bg: "from-indigo-600 to-violet-500",
    icon: (
      <svg className="w-6 h-6 text-indigo-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    )
  },
  {
    headline: <>
      <span className="text-pink-400 font-extrabold text-lg">Instant Visibility</span>
      <br />
      <span className="text-sm text-white/80 font-semibold">with Paid Ads</span>
    </>,
    desc: "Drive real growth with targeted digital ads.",
    bg: "from-pink-600 to-orange-400",
    icon: (
      <svg className="w-6 h-6 text-pink-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 16l6-8" />
      </svg>
    )
  },
  {
    headline: <>
      <span className="text-blue-400 font-extrabold text-lg">Your Community,</span>
      <br />
      <span className="text-sm text-white/80 font-semibold">Amplified</span>
    </>,
    desc: "Engage, build, and nurture inspired audiences.",
    bg: "from-blue-600 to-cyan-400",
    icon: (
      <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5" />
        <path d="M17 17v2a4 4 0 0 1-4 4" />
      </svg>
    )
  },
  {
    headline: <>
      <span className="text-orange-400 font-extrabold text-lg">Identity Matters</span>
      <br />
      <span className="text-sm text-white/80 font-semibold">Branding</span>
    </>,
    desc: "Craft identities people remember and trust.",
    bg: "from-orange-400 to-yellow-300",
    icon: (
      <svg className="w-6 h-6 text-orange-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="3" y="9" width="18" height="6" rx="3" />
        <path d="M3 9l9 6 9-6" />
      </svg>
    )
  },
  {
    headline: <>
      <span className="text-yellow-500 font-extrabold text-lg">Content That</span>
      <br />
      <span className="text-sm font-semibold text-black">Converts</span>
    </>,
    desc: "Stories that sell with innovative, ROI-focused content.",
    bg: "from-yellow-400 to-yellow-500",
    icon: (
      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4h16v12H4z" />
      </svg>
    ),
    isCenter: true,
  }
];

const SERVICES = [
  {
    icon: <FaPalette size={40} className="text-indigo-600" />,
    title: 'Brand Discovery',
    subs: [
      'In-depth brand research',
      'Market & audience insight',
      'Brand value workshops'
    ]
  },
  {
    icon: <FaBoxOpen size={40} className="text-indigo-600" />,
    title: 'Strategy Development',
    subs: [
      'Positioning and messaging',
      'Goal alignment',
      'Competitive differentiation'
    ]
  },
  {
    icon: <FaPaintBrush size={40} className="text-indigo-600" />,
    title: 'Brand Design',
    subs: [
      'Logo & icons',
      'Visual identity',
      'Typography & color palette'
    ]
  },
  {
    icon: <FaGripLines size={40} className="text-indigo-600" />,
    title: 'Implementation',
    subs: [
      'Brand rollout across assets',
      'Touchpoint consistency',
      'Design system guidelines'
    ]
  },
  {
    icon: <FaFont size={40} className="text-indigo-600" />,
    title: 'Evaluation & Optimization',
    subs: [
      'Brand health monitoring',
      'Visual or verbal tweaks',
      'Periodic refresh & revitalization'
    ]
  }
];

const marketingFaqs = [
  {
    question: "What is digital marketing?",
    answer: "Digital marketing involves promoting products or services using online platforms like websites, social media, and email.",
  },
  {
    question: "How does SEO help my business?",
    answer: "SEO improves your website's visibility on search engines, attracting more organic traffic and potential customers.",
  },
  {
    question: "What is the difference between paid and organic marketing?",
    answer: "Paid marketing involves advertisements, while organic marketing uses content and engagement to grow your brand naturally.",
  },
  {
    question: "How often should I post on social media?",
    answer: "Consistency is key. Depending on the platform, 3–5 times per week is recommended for engagement and visibility.",
  },
  {
    question: "Do I need a website for my business?",
    answer: "Yes. A professional website helps build trust, showcases your services, and allows customers to find you online.",
  },
  {
    question: "What are marketing funnels?",
    answer: "Marketing funnels represent the customer journey—from awareness to conversion—helping you guide and optimize leads.",
  },
  {
    question: "What is content marketing?",
    answer: "It's a strategy that uses blogs, videos, and social posts to provide value, build authority, and convert customers.",
  },
  {
    question: "Why is branding important?",
    answer: "Branding creates a consistent image, builds trust, and sets your business apart from competitors.",
  },
];

// ===== COMPONENTS =====

// Animated Blob Background
const AnimatedBlob = ({ className }) => (
  <motion.svg
    className={className}
    viewBox="0 0 600 600"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ scale: 0.9 }}
    animate={{ scale: [0.9, 1.05, 0.95, 1] }}
    transition={{ duration: 14, repeat: Infinity, repeatType: "mirror" }}
  >
    <g transform="translate(300,300)">
      <path
        d="M175.6,-203.3C226.5,-137.7,266.6,-68.9,252.3,-14.9C238,39,169.4,78.2,118.3,110.6C67.3,143,33.6,168.4,-11.1,178.8C-55.8,189.2,-111.6,184.5,-140.4,149.1C-169.3,113.7,-171.2,47.7,-170.3,-23C-169.3,-93.7,-165.5,-169.3,-126.3,-240.5C-87.1,-311.7,-13.7,-378.7,52.7,-374.1C119.1,-369.5,238.1,-292.7,175.6,-203.3Z"
        fill="url(#grad1)"
        opacity=".22"
      />
      <defs>
        <linearGradient id="grad1" x1="1" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#6366f1" />
          <stop offset="95%" stopColor="#f472b6" />
        </linearGradient>
      </defs>
    </g>
  </motion.svg>
);

// Typewriter Effect Component
const SloganType = ({ text }) => {
  const [display, setDisplay] = React.useState("");
  React.useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [text]);
  return (
    <span className="tracking-widest font-mono text-indigo-500 text-base md:text-lg overflow-hidden border-r-2 border-indigo-400 whitespace-nowrap mr-2 animate-pulse">
      {display}
    </span>
  );
};

const AnimatedServiceCard = ({ headline, desc, bg, icon, isCenter }) => {
  const centerStyle = isCenter ? "mx-auto from-yellow-400 to-yellow-500 text-black" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.07, rotateZ: 2, boxShadow: "0 18px 28px rgba(0,0,0,0.38)" }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className={`group flex flex-col items-start gap-2 p-5 bg-gradient-to-br rounded-2xl shadow-lg cursor-pointer select-none w-[280px] max-h-[140px] mx-4 
        ${centerStyle || bg}`}
    >
      <div className={`p-2.5 rounded-xl shadow-md mb-3 ${isCenter ? 'bg-black/20 text-yellow-600' : 'bg-white/20 text-white'}`}>
        {icon}
      </div>
      <div className={`mb-1 font-extrabold ${isCenter ? 'text-black' : 'text-lg'}`}>{headline}</div>
      <p className={`text-sm leading-snug truncate ${isCenter ? 'text-black/90' : 'text-white/90 group-hover:text-yellow-200'}`}>
        {desc}
      </p>
    </motion.div>
  );
};

// ===== MAIN COMPONENT =====
export default function DigitalMarketingWebsite() {
  const [collabForm, setCollabForm] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(-1);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  
  const toggleAnswer = (index) => setOpenFAQ(openFAQ === index ? -1 : index);
  const visibleFaqs = showAllFaqs ? marketingFaqs : marketingFaqs.slice(0, 5);

// ===== HERO SECTION =====
const HeroSection = () => {
  // Floating elements component
  const FloatingElement = ({ className, delay = 0 }) => (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 }
      }}
    />
  );

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Digital Marketing Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-blue-900/80 to-purple-900/70"></div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-pink-600 to-orange-400 rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-28 pb-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-2"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm text-white/80 font-medium">Digital Marketing Experts</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Transform Your
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Digital Presence
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed max-w-xl"
            >
              We craft data-driven digital marketing strategies that drive growth, 
              increase visibility, and deliver measurable ROI for your business.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg shadow-xl relative overflow-hidden group"
              >
                <span className="relative z-10">Get Started Today</span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.8 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all flex items-center gap-2"
              >
                <span>View Case Studies</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-8 pt-8"
            >
              <div className="flex items-center">
                <div className="flex -space-x-3 mr-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-white border-2 border-gray-900"></div>
                  ))}
                </div>
                <span className="text-sm text-gray-400">Join 250+ happy clients</span>
              </div>
            </motion.div>
          </div>

          {/* Right content - Modern dashboard illustration */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            {/* Main dashboard container */}
            <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-gray-700/50">
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-400">Analytics Dashboard</div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { value: "245%", label: "ROI Increase", color: "bg-green-500" },
                  { value: "3.2M", label: "Impressions", color: "bg-blue-500" },
                  { value: "78%", label: "Engagement", color: "bg-purple-500" },
                  { value: "12.4K", label: "Conversions", color: "bg-pink-500" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                    className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-2 h-2 ${stat.color} rounded-full`}></div>
                      <div className="text-lg font-bold text-white">{stat.value}</div>
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Graph area */}
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 mb-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm text-white font-semibold">Traffic Growth</div>
                  <div className="text-xs text-green-400">+34.5%</div>
                </div>
                <div className="h-32 relative">
                  {/* Graph line */}
                  <svg viewBox="0 0 300 120" className="w-full h-full">
                    <path
                      d="M0,100 C50,60 100,80 150,40 C200,20 250,60 300,20"
                      fill="none"
                      stroke="url(#graphGradient)"
                      strokeWidth="3"
                    />
                    <defs>
                      <linearGradient id="graphGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366F1" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Floating elements around dashboard */}
              <FloatingElement className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/80 rounded-lg rotate-12 shadow-lg" delay={1.2} />
              <FloatingElement className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/80 rounded-full shadow-lg" delay={1.4} />
              <FloatingElement className="absolute top-1/2 -right-6 w-5 h-5 bg-pink-500/80 rounded-lg -rotate-12 shadow-lg" delay={1.6} />
            </div>

            {/* Background decorative elements */}
            <div className="absolute -z-10 top-8 -left-8 w-full h-full bg-blue-600/20 rounded-2xl blur-xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Custom styles to remove scrollbar */}
      <style jsx>{`
        section::-webkit-scrollbar {
          display: none;
        }
        section {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

// ===== WHAT WE DO SECTION =====
const WhatWeDoSection = () => {
  // New vibrant but light color scheme
  const colorSchemes = [
    "from-cyan-400 to-blue-500",
    "from-fuchsia-400 to-purple-500", 
    "from-amber-400 to-orange-500",
    "from-emerald-400 to-green-500",
    "from-rose-400 to-pink-500"
  ];

  const serviceCards = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "SEO Optimization",
      description: "Maximize visibility and climb search rankings with our data-driven SEO strategies",
      stats: "↑ 245% Traffic"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      title: "Paid Advertising",
      description: "Drive targeted traffic and conversions with precision-targeted ad campaigns",
      stats: "↓ 40% CPA"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Social Media",
      description: "Build engaged communities and brand loyalty through strategic social presence",
      stats: "↑ 3.2M Reach"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
        </svg>
      ),
      title: "Brand Strategy",
      description: "Create memorable identities that resonate with your target audience",
      stats: "↑ 78% Recognition"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      title: "Content Marketing",
      description: "Tell compelling stories that convert visitors into loyal customers",
      stats: "↑ 12.4K Leads"
    }
  ];

  return (
    <section className="relative py-24 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-indigo-200 via-sky-400 to-purple-300">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        <div className="absolute w-80 h-80 bg-cyan-400/20 rounded-full -top-40 -left-20 blur-xl animate-float-slow" />
        <div className="absolute w-72 h-72 bg-fuchsia-400/20 rounded-full top-1/4 -right-16 blur-xl animate-float-medium" />
        <div className="absolute w-64 h-64 bg-amber-400/20 rounded-full bottom-1/3 left-1/4 blur-xl animate-float-fast" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern bg-center" />
        
        {/* Animated dots */}
        <div className="absolute top-20 left-1/4 w-3 h-3 bg-cyan-500 rounded-full animate-bounce" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-500 rounded-full animate-ping" />
        <div className="absolute bottom-40 left-1/2 w-3 h-3 bg-amber-500 rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-indigo-100 shadow-sm mb-6 animate-fade-in">
            <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm text-indigo-700 font-medium">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-gray-800 mb-6 animate-fade-in-up">
            WHAT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">WE DO </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            We blend creativity with data-driven strategies to create digital experiences 
            that not only look incredible but deliver measurable results and drive growth.
          </p>
        </div>

        {/* Services Grid - Full Width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {serviceCards.map((service, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${colorSchemes[index]} rounded-2xl p-6 relative overflow-hidden group hover:scale-105 transition-all duration-500 backdrop-blur-sm animate-fade-in-up delay-${index * 100 + 200} shadow-md hover:shadow-xl`}
            >
              {/* Icon */}
              <div className="mb-4 p-3 bg-white/30 rounded-xl backdrop-blur-sm w-fit group-hover:rotate-12 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h4 className="text-lg font-bold text-white mb-2">{service.title}</h4>
              <p className="text-white/90 text-sm mb-3 leading-relaxed">{service.description}</p>
              
              {/* Stats badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-colors duration-300">
                <span className="text-xs font-semibold text-white">{service.stats}</span>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

              {/* Animated dot */}
              <div className="absolute top-3 right-3 w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl p-6 text-center backdrop-blur-sm border border-cyan-100 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up delay-700">
            <div className="text-3xl font-bold text-cyan-700 mb-2">98%</div>
            <div className="text-cyan-600 text-sm font-medium">Client Satisfaction</div>
          </div>
          <div className="bg-gradient-to-br from-fuchsia-400/20 to-purple-500/20 rounded-2xl p-6 text-center backdrop-blur-sm border border-fuchsia-100 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up delay-800">
            <div className="text-3xl font-bold text-fuchsia-700 mb-2">250+</div>
            <div className="text-fuchsia-600 text-sm font-medium">Projects Completed</div>
          </div>
          <div className="bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-2xl p-6 text-center backdrop-blur-sm border border-amber-100 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up delay-900">
            <div className="text-3xl font-bold text-amber-700 mb-2">15+</div>
            <div className="text-amber-600 text-sm font-medium">Years Experience</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-2xl p-6 text-center backdrop-blur-sm border border-emerald-100 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up delay-1000">
            <div className="text-3xl font-bold text-emerald-700 mb-2">50+</div>
            <div className="text-emerald-600 text-sm font-medium">Team Members</div>
          </div>
        </div>

        {/* CTA at bottom */}
        <div className="text-center mt-16 animate-fade-in-up delay-1100">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-cyan-400/30 transition-all hover:scale-105 hover:-translate-y-1 duration-300">
            Explore All Services
          </button>
        </div>
      </div>

      {/* Add custom animations to Tailwind config */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(-15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(5px); }
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes fade-in-up {
          0% { 
            opacity: 0;
            transform: translateY(20px);
          }
          100% { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 8s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 6s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
        .delay-800 {
          animation-delay: 0.8s;
        }
        .delay-900 {
          animation-delay: 0.9s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-1100 {
          animation-delay: 1.1s;
        }
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(129 140 248 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
};

// ===== OUR SERVICES SECTION =====
const ServicesSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showServicePopup, setShowServicePopup] = useState(-1);
  const [hoveredCard, setHoveredCard] = useState(-1);
  const scrollRef = useRef();

  // Filter logic
  const filteredServices = SERVICES.filter(
    service =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.subs.some(sub => sub.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Overlap / parallax logic on scroll
  useEffect(() => {
    if (!scrollRef.current) return;
    const handleScroll = () => {
      const cards = scrollRef.current.querySelectorAll('.service-card');
      const scrollLeft = scrollRef.current.scrollLeft;
      cards.forEach((card, i) => {
        // Slight overlap/parallax: adjust translateX based on scroll and index
        card.style.transform = `translateY(${(scrollLeft / 18) * (i % 2 === 0 ? 1 : -1)}px) scale(1)`;
      });
    };
    scrollRef.current.addEventListener('scroll', handleScroll, { passive: true });
    return () => scrollRef.current?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-400/10 rounded-full -top-48 -left-24 blur-3xl" />
        <div className="absolute w-80 h-80 bg-fuchsia-400/10 rounded-full -bottom-40 -right-20 blur-3xl" />
        <div className="absolute inset-0 opacity-20 bg-grid-pattern bg-center" />
      </div>

      {/* Section Heading */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-indigo-100 shadow-sm mb-6"
        >
          <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2 animate-pulse"></div>
          <span className="text-sm text-indigo-700 font-medium">What We Offer</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Services</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Creative. Strategic. Impactful. Designed to grow your brand and drive measurable results.
        </motion.p>
      </div>

      {/* Search Bar */}
      <motion.div
        className="max-w-xl mx-auto mb-10 relative z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Search services or sub-services..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl border border-indigo-200 bg-white/80 backdrop-blur-sm shadow-sm text-gray-700 focus:ring-2 focus:ring-cyan-400 outline-none transition-all duration-300 pl-12"
          />
          <svg 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </motion.div>

      {/* Services Grid - Replaced horizontal scroll with grid layout */}
      <motion.div 
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        {filteredServices.length === 0 && (
          <div className="col-span-full text-center py-12">
            <div className="text-gray-500 text-lg mb-4">No services found matching your search</div>
            <button 
              onClick={() => setSearchTerm('')}
              className="px-5 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
            >
              Clear Search
            </button>
          </div>
        )}

        {filteredServices.map((service, index) => (
          <motion.div
            key={index}
            className="service-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl cursor-pointer relative overflow-hidden group transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.02 }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(-1)}
            onClick={() => setShowServicePopup(index)}
            style={{
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              borderTop: `4px solid ${service.color || '#818cf8'}`
            }}
          >
            {/* Hover effect overlay */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
            />
            
            {/* Animated border effect on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 animate-pulse" />
            </div>

            {/* Icon with background */}
            <div 
              className="w-16 h-16 mb-5 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1"
              style={{ 
                backgroundColor: `${service.color || '#818cf8'}15`,
                color: service.color || '#818cf8'
              }}
            >
              {service.icon}
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
              {service.title}
            </h3>
            
            <p className="text-gray-600 text-sm mb-4">Click to view details</p>
            
            {/* Preview of services */}
            <div className="space-y-1">
              {service.subs.slice(0, 3).map((sub, i) => (
                <div key={i} className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 text-cyan-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {sub}
                </div>
              ))}
              {service.subs.length > 3 && (
                <div className="text-xs text-cyan-600 font-medium mt-2">
                  +{service.subs.length - 3} more services
                </div>
              )}
            </div>

            {/* Animated dot */}
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full animate-pulse" 
                 style={{ backgroundColor: service.color || '#818cf8' }} />
          </motion.div>
        ))}
      </motion.div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {showServicePopup >= 0 && (
          <motion.div
            className="fixed inset-0 z-40 bg-black bg-opacity-40 flex justify-center items-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowServicePopup(-1)}
            style={{ backdropFilter: 'blur(4px)' }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Modal header with gradient */}
              <div 
                className="p-5 text-white"
                style={{ 
                  background: `linear-gradient(135deg, ${filteredServices[showServicePopup].color || '#818cf8'} 0%, #60a5fa 100%)` 
                }}
              >
                <button 
                  aria-label="Close" 
                  className="absolute right-4 top-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  onClick={() => setShowServicePopup(-1)}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    {filteredServices[showServicePopup].icon}
                  </div>
                  <h3 className="text-xl font-bold">{filteredServices[showServicePopup].title}</h3>
                </div>
              </div>
              
              {/* Modal content */}
              <div className="p-6 max-h-96 overflow-y-auto">
                <p className="text-gray-600 mb-5">We offer comprehensive solutions in this area including:</p>
                
                <ul className="space-y-3">
                  {filteredServices[showServicePopup].subs.map((sub, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start"
                    >
                      <svg className="w-5 h-5 text-cyan-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{sub}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-5 border-t border-gray-100">
                  <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    Request This Service
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add custom styles */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(129 140 248 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
};

  // ===== MAKE A MOVE SECTION =====
const MakeAMoveSection = () => {
  const [collabForm, setCollabForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCollabForm(false);
    setFormData({ name: "", email: "", service: "", message: "" });
    alert("Thank you! We'll be in touch soon.");
  };

  return (
    <section className="relative py-28 md:py-40 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-indigo-500/10 rounded-full -top-48 -left-24"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-pink-500/10 rounded-full -bottom-40 -right-20"
          animate={{ 
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-teal-400/10 rounded-full top-1/2 left-1/4"
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-6 h-6 rounded-full bg-indigo-500/30"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-4 h-4 rounded-full bg-pink-500/40"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-white/50"
        animate={{ y: [0, 10, 0], scale: [1, 1.5, 1] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col items-center">
        {/* Heading with gradient text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-blue-300 to-purple-300">
              READY TO ELEVATE
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-orange-300">
              YOUR BRAND?
            </span>
          </h2>
          
          {/* Animated underline */}
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 text-center max-w-3xl mb-12 leading-relaxed"
        >
          Let's create something <span className="font-bold text-white">extraordinary</span> together. 
          Our team is ready to transform your vision into a <span className="italic text-indigo-300">digital masterpiece</span>.
        </motion.p>

        {/* Stats counter */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {[
            { number: "250+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "15+", label: "Industry Experts" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Button with hover effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="relative"
        >
          <motion.button
            onClick={() => setCollabForm(true)}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg md:text-xl relative overflow-hidden group"
          >
            <span className="relative z-10">START YOUR PROJECT NOW</span>
            
            {/* Shine effect */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              initial={{ x: "-100%" }}
              whileHover={{ x: "200%" }}
              transition={{ duration: 0.8 }}
            />
          </motion.button>
          
          {/* Floating arrow */}
          <motion.div
            className="absolute -right-6 top-1/2 -translate-y-1/2"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Collab Form Modal */}
      <AnimatePresence>
        {collabForm && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop with blur */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setCollabForm(false)}
            />
            
            {/* Modal */}
            <motion.div
              className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-500" />
              
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Collaborate</span>
                  </h3>
                  <button
                    onClick={() => setCollabForm(false)}
                    className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Form */}
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Service Needed</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none appearance-none transition"
                    >
                      <option value="">Select a service</option>
                      {SERVICES.map(s => (
                        <option key={s.title} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us about your project..."
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-indigo-500/25 transition-all"
                  >
                    SEND REQUEST
                  </motion.button>
                </form>

                <p className="text-center text-gray-400 text-sm mt-6">
                  We'll get back to you within 24 hours
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

  // ===== FAQ SECTION =====
  const FAQSection = () => (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative py-24 px-6 md:px-20 bg-gradient-to-br from-gray-50 via-blue-50 to-sky-100 rounded-3xl max-w-7xl mx-auto shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-16 mt-16 overflow-hidden"
    >
      {/* Background blobs */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl top-[-80px] left-[-80px] z-0"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
        className="absolute w-96 h-96 bg-cyan-300 rounded-full opacity-20 blur-2xl bottom-[-80px] right-[-80px] z-0"
      />

      {/* Left Column */}
      <div className="flex flex-col justify-between pr-8 border-r border-indigo-300 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl font-extrabold text-blue-600 drop-shadow-md mb-6 leading-tight">
            Frequently Asked <br />{" "}
            <span className="text-sky-500">Marketing Questions</span>
          </h2>
          <p className="text-lg text-indigo-700 max-w-md leading-relaxed mb-4">
            Confused about marketing? Explore the answers to our most common
            questions to get a clear understanding of how our services work.
          </p>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.08 }}
          className="mt-10 w-max bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold px-10 py-3 rounded-full shadow-lg transition-transform"
          onClick={() => setShowAllFaqs(!showAllFaqs)}
        >
          {showAllFaqs ? "View Less" : "View More"}
        </motion.button>
      </div>

      {/* FAQ Cards */}
      <div className="md:col-span-2 h-[500px] overflow-y-auto pr-2 flex flex-col gap-4 scroll-smooth relative z-10">
        {visibleFaqs.map(({ question, answer }, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="bg-white rounded-xl shadow-md p-6 cursor-pointer border border-transparent hover:border-sky-400 transition-all duration-300"
            onClick={() => toggleAnswer(idx)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-indigo-900">
                {question}
              </h3>
              <ChevronDown
                size={24}
                className={`text-indigo-700 transition-transform duration-300 ${
                  openFAQ === idx ? "rotate-180" : ""
                }`}
              />
            </div>
            {openFAQ === idx && (
              <p className="text-indigo-700 text-sm opacity-90 mt-2">
                {answer}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );

  // ===== MAIN RENDER =====
  return (
    <div className="relative overflow-x-hidden">
      <HeroSection />
      <WhatWeDoSection />
      <ServicesSection />
      <MakeAMoveSection />
      <FAQSection />

      {/* Custom animations */}
      <style>{`
        @keyframes float-img {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px);}
        }
        .animate-float { animation: float-img 3.2s ease-in-out infinite; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
