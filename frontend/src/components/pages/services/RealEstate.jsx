import Search3 from "../../../assets/Search3.jpg";
import Search4 from "../../../assets/Search4.jpeg";
import Search5 from "../../../assets/Search5.jpg";
import Search8 from "../../../assets/Search8.jpg";
import Search9 from "../../../assets/Search9.jpg";
import Search10 from "../../../assets/Search10.jpg";
import Search11 from "../../../assets/Search11.jpg";
import Search12 from "../../../assets/Search12.jpg";
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaCamera, FaHandshake, FaFileSignature, FaTruckMoving } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import CountUp from 'react-countup';
import icon1 from "../../../assets/icon1.jpg";
import icon2 from "../../../assets/icon2.jpg";
import icon3 from "../../../assets/icon3.jpg";
import icon4 from "../../../assets/icon4.jpg";

const propertyData = [
  { title: "Sell/Rent your property", icon: Search9 },
  { title: "Villa", icon: Search3 },
  { title: "Apartments", icon: Search4 },
  { title: "Lease commercial spaces", icon: Search5 },
  { title: "Invest in Real Estate", icon: Search8, badge: "NEW" },
  { title: "Plots/Land", icon: Search10, badge: "NEW" },
  { title: "Buying commercial spaces", icon: Search11 },
  { title: "PG & Co-Living", icon: Search12 },
];


const services = [
  {
    title: "Property Buying Help",
    icon: <FaHandshake className="text-4xl text-orange-500 mb-4" />,
    description: " Get expert guidance at every step to help you find, evaluate, and purchase the perfect property that meets all your needs."
  },
  {
    title: "Legal Paperwork",
    icon: <FaFileSignature className="text-4xl text-white mb-4" />,
    description: " Complete assistance with all property-related legalities, ensuring your documents are accurate, verified, and hassle-free.",
    highlighted: true
  },
  {
    title: "Shifting Assistance",
    icon: <FaTruckMoving className="text-4xl text-orange-500 mb-4" />,
    description: "Get reliable help with packing, moving, and settling into your new home — all handled with care and convenience."
  }
];
// FAQ Data
const faqs = [
  {
    question: "How do I book a property tour?",
    answer:
      "You can schedule a property tour by contacting our team through the website or visiting our office. We’ll arrange a convenient time for you.",
    slug: "book-property-tour",
  },
  {
     question: "Do you assist with legal paperwork?",
    answer:
      "Yes, we provide full assistance with property-related legal paperwork including agreements, registration, and verification.",
    slug: "legal-paperwork-assistance",
  },
  {
     question: "Can you help me find rental properties?",
    answer:
      "Absolutely! We have a wide range of rental listings, and our agents will help you find one that fits your budget and location preferences.",
    slug: "rental-property-help",
  },
  {
   question: "Do you offer shifting and moving assistance?",
    answer:
      "Yes, we partner with trusted moving companies to provide packing, moving, and safe shifting services to your new home.",
    slug: "shifting-assistance",
  },
  {
     question: "What types of properties do you deal with?",
    answer:
      "We handle residential flats, villas, commercial offices, plots, studio apartments, PG/hostels, and farmhouses.",
    slug: "property-types",
  },
  {
    question: "Is loan consultation available?",
    answer:
      "Yes, we offer loan consultation and connect you with banks and financial institutions for home loan approvals.",
    slug: "loan-consultation",
  },
  {
    question: "Do you help with property valuation?",
    answer:
      "Yes, our experts provide accurate property valuation reports to help you buy or sell properties confidently.",
    slug: "property-valuation",
  },
  {
    question: "Are there any hidden charges?",
    answer:
      "No, we maintain full transparency with all service charges. Any applicable fees will be discussed upfront before proceeding.",
    slug: "hidden-charges",
  },
  {
question: "Can I see all property categories online?",
    answer:
      "Yes, our website features all property categories with detailed listings that you can explore anytime.",
    slug: "online-property-listings",
    },
  {
    question: "Do you offer after-sales support?",
    answer:
      "Yes, we provide after-sales support including documentation help, maintenance assistance, and post-purchase guidance.",
    slug: "after-sales-support",
  },
];


export default function RealEstate() {
const [open, setOpen] = useState(false);
const [showAll, setShowAll] = useState(false);
const [expandedSlug, setExpandedSlug] = useState(null);

  return (
    <div className="text-center text-gray-800 p-0 m-0 w-full overflow-x-hidden">      {/* Hero Section */}
     <div className="relative w-screen h-screen mb-0 p-0 m-0">
        <div className="absolute top-6 left-6 z-20 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md text-sm text-[#004080] font-medium">
          <Link to="/" className="text-sky-700 hover:underline">Home</Link> &gt; Real Estate Services
        </div>
     <motion.img
  src="/banner1.jpg"
  alt="Real Estate Banner"
  className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover z-0"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
/>

        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0" />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 space-y-8">
          <motion.h1 
            className="text-6xl lg:text-7xl font-extrabold text-white drop-shadow-2xl text-center"
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            Building Dreams, Shaping Skylines 
          </motion.h1>
          <motion.p 
            className="text-2xl lg:text-2xl text-white font-subheading italic text-center"
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Byculla | Lower Parel | Bhandup | Mulund | Panvel | Dombivli
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="flex gap-4">
              <Link to="/projects">
                <button className="px-6 py-3 border-2 border-[#002244] text-[#002244] bg-white hover:bg-[#002244] hover:text-white transition font-medium text-lg tracking-wide rounded-sm shadow-md">
                  Explore Projects
                </button>
              </Link>
              <Link to="/ GetAssistance">
                <button className="px-6 py-3 border-2 border-[#002244] text-[#002244] bg-white hover:bg-[#002244] hover:text-white transition font-medium text-lg tracking-wide rounded-sm shadow-md">   
                  Get Assistance
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/919529412675"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 z-50"
        >
          <FaWhatsapp className="w-8 h-8" />
        </a>
      </div>

      {/* About Us Section */}
      <section className="bg-[#edf1f5] py-8 px-6 md:px-20 text-gray-800 mt-0" id="about-section">     
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-left">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl font-extrabold text-blue-900 mb-4"
            >
              About Nexiaquest
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed text-gray-700"
            >
              Nexiaquest is Mumbai’s rising real estate force — building trust, homes, and investment value...
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg leading-relaxed text-gray-700"
            >
              From luxury apartments to commercial hubs, Nexiaquest delivers unmatched real estate services...
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="list-disc list-inside space-y-2 text-gray-600"
            >
              <li>Strategic Locations & High-ROI Properties</li>
              <li>Professional Consultation with Ethical Transparency</li>
              <li>Comprehensive End-to-End Real Estate Support</li>
              <li>Tailored Solutions for Buyers, Sellers & Investors</li>
            </motion.ul>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="w-full"
          >
            <img
              src="/best-property.jpg"
              alt="Nexiaquest Real Estate"
              className="rounded-xl shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>

{/* Achievements Section */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-12 text-center"
>
  <div>
    <h2 className="text-4xl font-bold text-[#004080]">
      <CountUp end={5000} duration={3} />+
    </h2>
    <p className="text-gray-700 mt-2">Happy Customers</p>
  </div>
  <div>
    <h2 className="text-4xl font-bold text-[#004080]">
      <CountUp end={1500} duration={3} />+
    </h2>
    <p className="text-gray-700 mt-2">Active Projects</p>
  </div>
  <div>
    <h2 className="text-4xl font-bold text-[#004080]">
      <CountUp end={10000} duration={3} />+ sq.ft.
    </h2>
    <p className="text-gray-700 mt-2">Delivered Area</p>
  </div>
  <div>
    <h2 className="text-4xl font-bold text-[#004080]">
      <CountUp end={10} duration={3} />+ Years
    </h2>
    <p className="text-gray-700 mt-2">Of Experience</p>
  </div>
</motion.div>

      </section>

{/*why choose us*/}

  <div className="bg-gray-50 pt-8 pb-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-5xl font-extrabold text-blue-900 text-center mb-12">
    Why Choose Us?
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
    {[
      {
        img: icon1,
        title: "Avoid Brokers",
        desc: "Direct property deals with owners to avoid broker charges.",
      },
      {
        img: icon2,
        title: "Verified Listings",
        desc: "Every listing is verified to ensure your trust and safety.",
      },
      {
        img: icon3,
        title: "Free Listings",
        desc: "List your property for free without any hidden charges.",
      },
      {
        img: icon4,
        title: "Rental Agreement",
        desc: "Get instant rental agreement services right from your home.",
      },
    ].map((card, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white rounded-xl shadow-md p-6 text-center"
      >
        <img
          src={card.img}
          alt={card.title}
          className="w-28 h-28 mx-auto mb-6 rounded-full object-cover shadow-md"
        />
        <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
        <p className="text-gray-600 text-sm">{card.desc}</p>
      </motion.div>
    ))}
  </div>  

 {/*Explore Property Options*/}

<section 
  className="w-full bg-blue-200 py-12 px-6 min-h-screen mt-20" 
  scroll-mt-32 
  id="explore-section"
>
  <h2 className="text-5xl font-bold text-center text-blue-900 mb-12">
    Explore Property Options
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
    {propertyData.slice(0, 8).map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-xl p-4 flex flex-col items-center text-center h-full"
      >
        <div className="w-full h-25 rounded-lg overflow-hidden">
          <img
            src={item.icon}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        {item.badge && (
          <span className="mt-3 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded-sm">
            {item.badge}
          </span>
        )}

        <p className="text-gray-800 text-base font-semibold mt-3">
          {item.title}
        </p>
      </motion.div>
    ))}
  </div>
</section>

{/* Featured Properties */}
<section className="py-2 bg-white scroll-mt-32" id="projects-section">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <motion.h2
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-5xl font-bold text-center text-blue-900 mb-4"
    >

      Discover Our Featured Properties
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-center text-gray-500 mb-10"
    >
      Find your dream home from our list of premium properties.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
      className="relative"
    >
        <div className="swiper-button-prev-custom absolute top-1/2 -left-6 transform -translate-y-1/2 text-4xl text-blue-800 cursor-pointer z-10">
    ❮
  </div>
  <div className="swiper-button-next-custom absolute top-1/2 -right-6 transform -translate-y-1/2 text-4xl text-blue-800 cursor-pointer z-10">
    ❯
  </div>

      {/* Swiper with custom navigation */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {[
          {
            img: "property1.jpg",
            price: "₹ 1.25 Cr",
            sqft: "1350 sqft",
            beds: 3,
            baths: 2,
            garage: 1,
          },
          {
            img: "property2.jpg",
            price: "₹ 89 Lakh",
            sqft: "980 sqft",
            beds: 2,
            baths: 1,
            garage: 1,
          },
          {
            img: "property3.jpg",
            price: "₹ 2.10 Cr",
            sqft: "1750 sqft",
            beds: 4,
            baths: 3,
            garage: 2,
          },
          {
            img: "property4.jpg",
            price: "₹ 1.65 Cr",
            sqft: "1425 sqft",
            beds: 3,
            baths: 2,
            garage: 1,
          },
          {
            img: "property5.jpeg",
            price: "₹ 98 Lakh",
            sqft: "1100 sqft",
            beds: 2,
            baths: 2,
            garage: 0,
          },
          {
            img: "property6.jpg",
            price: "₹ 1.85 Cr",
            sqft: "1600 sqft",
            beds: 3,
            baths: 2,
            garage: 2,
          },
          {
            img: "property7.jpg",
            price: "₹ 75 Lakh",
            sqft: "950 sqft",
            beds: 2,
            baths: 1,
            garage: 0,
          },
        ].map((property, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={`/${property.img}`}
                  alt="Property"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  <FaCamera /> 5+ Photos
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Property {idx + 1}
                </h3>
                <p className="text-sm text-gray-500">Some address line</p>
                <div className="flex justify-between mt-2 text-gray-600 text-sm">
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Bath</span>
                  <span>{property.garage} Garage</span>
                  <span>{property.sqft}</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-blue-600 font-bold">{property.price}</span>
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded">For Sale</span>

                </div>
              </div>

            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

                  {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev-custom absolute top-1/2 -left-6 z-10 text-4xl text-blue-800 cursor-pointer transform -translate-y-1/2 hover:scale-110 transition">
        ❮
      </div>
      <div className="swiper-button-next-custom absolute top-1/2 -right-6 z-10 text-4xl text-blue-800 cursor-pointer transform -translate-y-1/2 hover:scale-110 transition">
        ❯
      </div>
    </motion.div>
  </div>
</section>


       {/* Our Services */}
      <section className="bg-[#f5f8fc] py-20 px-4 md:px-10">
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-2">Our Best Real-Estate Services</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`group text-center p-8 rounded-2xl shadow-md transition-transform duration-300 ${service.highlighted ? "bg-[#002244] text-white rotate-[-3deg] scale-105" : "bg-white text-[#002244] hover:scale-105"}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >

              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative z-10">
                  {service.icon}
                  <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-lg leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

{/* ===== FAQ SECTION ===== */}
<section
  className="py-24 px-6 md:px-20 bg-gradient-to-tr from-indigo-50 via-sky-50 to-indigo-100 rounded-3xl max-w-7xl mx-auto shadow-lg grid grid-cols-1 md:grid-cols-3 gap-16"
>
  {/* Left Text Side */}
  <div className="flex flex-col justify-center pr-8 border-r border-indigo-300">
    <h2 className="text-5xl font-extrabold text-indigo-500 drop-shadow-md mb-6 leading-tight">
      Frequently Asked <br /> <span className="text-sky-500">Questions</span>
    </h2>
    <p className="text-lg text-indigo-600 max-w-md leading-relaxed">
      Got questions about buying, selling, or renting properties? We have the answers. Click on any question to explore detailed information about our real estate services and support.
    </p>
    <button
      onClick={() => setShowAll(!showAll)}
      className="mt-10 w-max bg-gradient-to-r from-indigo-500 to-sky-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform border-none"
    >
      {showAll ? 'View Less' : 'View More'}
    </button>
  </div>

  {/* Right Side FAQ Cards */}
  <div
    className="md:col-span-2 overflow-y-auto pr-2"
    style={{
      maxHeight: '600px',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      scrollBehavior: 'smooth',
    }}
  >
    {(showAll ? faqs : faqs.slice(0, 4)).map(({ question, answer, slug }) => (
      <div
        key={slug}
        className="bg-white rounded-xl shadow-md p-6 cursor-pointer group hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 border border-transparent hover:border-sky-400"
        onClick={() => setExpandedSlug((prev) => (prev === slug ? null : slug))}
      >
        <h3 className="text-2xl font-semibold text-indigo-900 group-hover:text-sky-700 transition-colors mb-3 flex justify-between items-center">
          {question}
          <span className="text-3xl leading-none">
            {expandedSlug === slug ? '−' : '+'}
          </span>
        </h3>
        {expandedSlug === slug && (
         <p className="text-indigo-700 text-lg opacity-90 transition-opacity duration-300">    
         {answer}
          </p>
        )}
      </div>
    ))}
  </div>
</section>

</div>
</div>
  )}
