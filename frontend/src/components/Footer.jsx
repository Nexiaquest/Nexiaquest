import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FiArrowRight, FiSend, FiX, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
    const [question, setQuestion] = useState("");
    const [chatMessages, setChatMessages] = useState([
        {
            sender: 'nexia',
            text: 'Hi there! 👋 I\'m NEXIA, your AI BOT Ask me anything about our services, pricing, or how we can help your business grow. I\'m here 24/7 to bot you!'
        }
    ]);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [hasNewMessage, setHasNewMessage] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        const savedChat = localStorage.getItem('nexiaChatHistory');
        if (savedChat) {
            setChatMessages(JSON.parse(savedChat));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('ChatHistory', JSON.stringify(chatMessages));
    }, [chatMessages]);

    useEffect(() => {
        scrollToBottom();
    }, [chatMessages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleAskNexia = async (e) => {
        e.preventDefault();
        if (!question.trim()) return;

        const newMessage = { sender: 'user', text: question };
        setChatMessages(prev => [...prev, newMessage]);
        setQuestion("");
        setHasNewMessage(false);

        setIsTyping(true);
        setChatMessages(prev => [...prev, { sender: 'nexia', text: 'typing' }]);

        try {
            await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

            setChatMessages(prev => [
                ...prev.filter(msg => msg.text !== 'typing'),
                {
                    sender: 'nexia',
                    text: getAIResponse(question) || "I've noted your question and forwarded it to our experts. You'll receive a detailed response via email shortly. Is there anything else I can help with?"
                }
            ]);

            if (!isChatOpen) {
                setHasNewMessage(true);
            }
        } catch {
            setChatMessages(prev => [
                ...prev.filter(msg => msg.text !== 'typing'),
                {
                    sender: 'nexia',
                    text: "Hmm, I'm having trouble with that one. Let me connect you to a human expert who can help. They'll be with you shortly!"
                }
            ]);
        } finally {
            setIsTyping(false);
        }
    };

    const getAIResponse = (question) => {
        const q = question.toLowerCase();
        if (q.includes('service') || q.includes('offer') || q.includes('provide')) {
            return "We offer end-to-end solutions across 8 key sectors: Real Estate, Education, Finance, Insurance, Marketing, Legal, Shares & Mutual Funds, and Architecture & Interior Design. Each service is tailored to our clients' specific needs.";
        } else if (q.includes('contact') || q.includes('reach') || q.includes('email') || q.includes('call')) {
            return "You can reach our team at contact@nexiaquest.com or call +91-9876543210. For urgent matters, our 24/7 support line is +91-9876543211. We're located at Nexiaquest Tower, Mumbai, Maharashtra.";
        } else if (q.includes('hour') || q.includes('time') || q.includes('open')) {
            return "Our main office hours are Monday to Friday, 9AM to 6PM IST. However, our support team is available 24/7 for urgent inquiries through our emergency contact channels.";
        } else if (q.includes('price') || q.includes('cost') || q.includes('fee')) {
            return "Our pricing varies based on the service and scope of work. For a personalized quote, I can connect you with our sales team or you can email sales@nexiaquest.com with your specific requirements.";
        }
        return null;
    };

    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Careers", path: "/careers" },
        { name: "Contact Us", path: "/contact" },
    ];

    const services = [
        { name: "Real Estate", path: "/real-estate-services" },
        { name: "Education", path: "/education-services" },
        { name: "Finance", path: "/finance-services" },
        { name: "Insurance", path: "/insurance-services" },
        { name: "Marketing", path: "/marketing-services" },
        { name: "Legal", path: "/legal-services" },
        { name: "Shares & Mutual Fund", path: "/shares-mutual-fund-services" },
        { name: "Architecture & Interior", path: "/architecture-interior-services" },
    ];

    const socialLinks = [
        { icon: <FaFacebook size={18} />, url: "https://facebook.com/nexiaquest", name: "Facebook" },
        { icon: <FaTwitter size={18} />, url: "https://twitter.com/nexiaquest", name: "Twitter" },
        { icon: <FaLinkedin size={18} />, url: "https://linkedin.com/company/nexiaquest", name: "LinkedIn" },
        { icon: <FaInstagram size={18} />, url: "https://instagram.com/nexiaquest", name: "Instagram" },
    ];

    const handleChatToggle = () => {
        setIsChatOpen(!isChatOpen);
        if (hasNewMessage) setHasNewMessage(false);
    };

    return (
        <footer className="bg-white text-gray-800 pt-16 pb-8 px-4 sm:px-6 relative overflow-hidden shadow-lg">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-purple-500 to-pink-500"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-100 rounded-full filter blur-3xl"></div>
            <div className="absolute top-1/3 right-20 w-60 h-60 bg-purple-100 rounded-full filter blur-3xl"></div>

<div className="max-w-7xl mx-auto relative z-10 items-start">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-11">
        {/* Company Info */}
  <div className="relative group md:pt-1">
  <div className="flex items-center space-x-3 pl-0 -ml-1 h-[70px]"> 
    <img
      src={logo}
      alt="Nexiaquest Logo"
      className="h-16 w-auto object-contain transition-transform duration-500 hover:rotate-[-5deg]"
      loading="lazy"
    />
    <div className="leading-tight text-blue-900">
      <motion.h2
        className="text-xl font-extrabold tracking-wide"
        whileHover={{ scale: 1.02 }}
      >
        NEXIAQUEST
      </motion.h2>
      <motion.p
        className="text-sm font-medium tracking-wider"
        whileHover={{ scale: 1.02 }}
      >
        VENTURES LLP
      </motion.p>
    </div>
  </div>

  <p className="text-gray-600 mt-3 mb-5 leading-relaxed text-sm">
    Empowering businesses with innovative solutions across multiple sectors.
    We deliver excellence through tailored strategies and cutting-edge services.
    Operating as a Limited Liability Partnership, we blend partnership flexibility with corporate-level security.
  </p>

  <div className="flex space-x-6">
    {socialLinks.map((social, index) => (
      <motion.a
        key={index}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-900 transition-all duration-300"
        whileHover={{ y: -3 }}
        aria-label={social.name}
      >
        {social.icon}
      </motion.a>
    ))}
  </div>
</div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg md:pt-3.5 font-semibold mb-5 pb-2 border-b border-gray-700 relative before:absolute before:bottom-0 before:left-0 before:w-10 before:h-0.5 before:bg-blue-900">
                            Our Services
                        </h3>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <a
                                        href={service.path}
                                        className="flex items-center text-gray-600 hover:text-blue-900 transition-colors duration-300 group"
                                    >
                                        <FiChevronRight className="mr-2 text-blue-900 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                                        <span className="group-hover:text-blue-900 transition-colors duration-200">{service.name}</span>
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg md:pt-3 font-semibold mb-6 pb-2 border-b border-gray-700 relative before:absolute before:bottom-0 before:left-0 before:w-10 before:h-0.5 before:bg-blue-900">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <a
                                        href={link.path}
                                        className="flex items-center text-gray-600 hover:text-blue-900 transition-colors duration-300 group"
                                    >
                                        <FiChevronRight className="mr-2 text-blue-900 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                                        <span className="group-hover:text-blue-900 transition-colors duration-200">{link.name}</span>
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & NEXIA Assistant */}
                    <div className="md:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Contact Information */}
                            <div>
                                <h3 className="text-lg md:pt-3 font-semibold mb-6 pb-2 border-b border-gray-700 relative before:absolute before:bottom-0 before:left-0 before:w-10 before:h-0.5 before:bg-blue-900">
                                    Contact Us
                                </h3>
                                <div className="space-y-4 text-gray-600">
                                    <motion.div
                                        className="flex items-start group"
                                        whileHover={{ x: 3 }}
                                    >
                                        <FaMapMarkerAlt className="mt-1 mr-3 text-blue-900 group-hover:text-blue-800 transition-colors" />
                                        <span className="group-hover:text-gray-900 transition-colors">Nexiaquest Tower, Mumbai, Maharashtra, India</span>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-center group"
                                        whileHover={{ x: 3 }}
                                    >
                                        <FaEnvelope className="mr-3 text-blue-900 group-hover:text-blue-800 transition-colors" />
                                        <a
                                            href="mailto:contact@nexiaquest.com"
                                            className="hover:text-blue-900 transition-colors duration-300"
                                        >
                                            contact@nexiaquest.com
                                        </a>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-center group"
                                        whileHover={{ x: 3 }}
                                    >
                                        <FaPhoneAlt className="mr-3 text-blue-900 group-hover:text-blue-800 transition-colors" />
                                        <a
                                            href="tel:+91-9876543210"
                                            className="hover:text-blue-900 transition-colors duration-300"
                                        >
                                            +91-9876543210
                                        </a>
                                    </motion.div>
                                </div>
                            </div>

                            {/* NEXIA Assistant */}
                            <motion.div
                                className="flex flex-col"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm h-full flex flex-col justify-between hover:shadow-md transition-all duration-300">
                                    <div>
                                        <div className="flex items-center mb-2">
                                            <h3 className="text-xl font-bold text-gray-900 mr-2">NEXIA BOT</h3>
                                            <span className="inline-flex w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                        </div>
                                        <p className="text-gray-500 text-sm mb-4">
                                            Instant answers to your questions about services, pricing, and more
                                        </p>
                                    </div>
                                    <motion.button
                                        onClick={handleChatToggle}
                                        className="w-full bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 shadow hover:shadow-md flex items-center justify-center group relative overflow-hidden"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span className="relative z-10">Chat with NEXIA</span>
                                        <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs flex items-center relative z-10">
                                            <span className="inline-flex w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                                            <span className="hidden sm:inline">AI Powered</span>
                                        </span>
                                        <span className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Nexiaquest Ventures LLP. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        <motion.a
                            href="/privacy-policy"
                            className="text-gray-500 hover:text-blue-900 text-sm transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            Privacy Policy
                        </motion.a>
                        <motion.a
                            href="/terms"
                            className="text-gray-500 hover:text-blue-900 text-sm transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            Terms of Service
                        </motion.a>
                        <motion.a
                            href="/cookies"
                            className="text-gray-500 hover:text-blue-900 text-sm transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            Cookie Policy
                        </motion.a>
                    </div>
                </div>
            </div>

            {/* Floating Chat Widget */}
            <AnimatePresence>
                {isChatOpen && (
                    <motion.div
                        className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ type: "spring", damping: 25 }}
                    >
                        <div className="chat-header bg-blue-900 p-4 flex justify-between items-center">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3 shadow-md">
                                    <span className="font-bold text-blue-900">NEXIA</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">NEXIA BOT</h4>
                                    <p className="text-xs text-blue-100 flex items-center">
                                        {isTyping ? (
                                            <>
                                                <span className="inline-block w-2 h-2 bg-green-300 rounded-full mr-1 animate-pulse"></span>
                                                Typing...
                                            </>
                                        ) : (
                                            <>
                                                <span className="inline-block w-2 h-2 bg-green-300 rounded-full mr-1 animate-pulse"></span>
                                                Online
                                            </>
                                        )}
                                    </p>
                                </div>
                            </div>
                            <motion.button
                                onClick={handleChatToggle}
                                className="text-blue-100 hover:text-white p-1 rounded-full transition-colors"
                                whileHover={{ rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="Close chat"
                            >
                                <FiX size={20} />
                            </motion.button>
                        </div>

                        <div className="chat-messages h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
                            {chatMessages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className={`max-w-xs p-3 rounded-lg ${msg.sender === 'user'
                                        ? 'bg-blue-900 text-white'
                                        : 'bg-white text-gray-800 border border-gray-200'}`}>
                                        {msg.text === 'typing' ? (
                                            <div className="flex space-x-2">
                                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                            </div>
                                        ) : msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="chat-input p-4 bg-white border-t border-gray-200">
                            <form onSubmit={handleAskNexia} className="flex">
                                <motion.input
                                    type="text"
                                    value={question}
                                    onChange={(e) => setQuestion(e.target.value)}
                                    placeholder="Ask NEXIA anything..."
                                    className="flex-1 bg-gray-100 border border-gray-300 rounded-l-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-900 text-gray-800 placeholder-gray-500"
                                    disabled={isTyping}
                                    whileFocus={{ borderColor: "#1e3a8a" }}
                                />
                                <motion.button
                                    type="submit"
                                    disabled={!question.trim() || isTyping}
                                    className="bg-blue-900 hover:bg-blue-800 disabled:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors flex items-center justify-center"
                                    whileHover={!question.trim() || isTyping ? {} : { scale: 1.05 }}
                                    whileTap={!question.trim() || isTyping ? {} : { scale: 0.95 }}
                                >
                                    <FiSend size={18} />
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Chat Toggle Button (when closed) */}
            {!isChatOpen && (
                <motion.button
                    onClick={handleChatToggle}
                    className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-full shadow-xl flex items-center justify-center z-40"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.5 }}
                >
                    <div className="relative">
                        <span className="absolute -top-2 -right-2 w-5 h-5 bg-green-400 rounded-full border-2 border-blue-800 animate-pulse"></span>
                        <span className="text-xl font-bold text-white">NEXIA</span>
                    </div>
                    {hasNewMessage && (
                        <motion.div
                            className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 shadow-sm"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ type: "spring" }}
                        >
                            New!
                        </motion.div>
                    )}x``
                </motion.button>
            )}
        </footer>
    );
};

export default Footer;
