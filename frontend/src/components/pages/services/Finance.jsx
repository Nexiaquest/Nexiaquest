import React, { useState, useEffect } from 'react';
import {
  FaHome,
  FaLandmark,
  FaCar,
  FaFileContract,
  FaCoins,
  FaUserFriends,
  FaGraduationCap,
  FaBuilding,
} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const partners = [
  {
    name: "SBI",
    url: "#",
    image: "https://tse1.mm.bing.net/th/id/OIP.4vZR-i8QK5XY1P70FTnqDwHaHa?pid=Api&P=0&h=220"
  },
  {
    name: "HDFC",
    url: "#",
    image: "https://1000logos.net/wp-content/uploads/2021/06/HDFC-Bank-emblem.png"
  },
  {
    name: "PNB",
    url: "#",
    image: "https://tse1.mm.bing.net/th/id/OIP.oZMC6Q9DBNfP7T8qjoxbJgHaHf?pid=Api&P=0&h=220"
  },
  {
    name: "LIC",
    url: "#",
    image: "https://aniportalimages.s3.amazonaws.com/media/details/LPSDFJPI.jpg"
  },
  {
    name: "Central Bank",
    url: "#",
    image: "https://tse2.mm.bing.net/th/id/OIP.AaTGPhae-i2b2Fw_0M7ibwAAAA?pid=Api&P=0&h=220"
  },
  {
    name: "Saraswat Bank",
    url: "#",
    image: "https://tse1.mm.bing.net/th/id/OIP.gw8lH_CZ7fpY00MCKRa7mgHaHZ?pid=Api&P=0&h=220"
  },
  {
    name: "NKGSB",
    url: "#",
    image: "https://play-lh.googleusercontent.com/JOgQGYWOAu-NTYswAtmx5lnAOfzNvl_p3ciBdi6ww3bNuk9PcBSTKSiaPsBZ5DjX"
  },
  {
    name: "Bank of Baroda",
    url: "#",
    image: "https://tse1.mm.bing.net/th/id/OIP.11Z2HAu6wbcEHWJSGr1VdgHaE8?pid=Api&P=0&h=220"
  }
];


const boxBaseClasses = "w-44 h-36 rounded-2xl flex flex-col items-center justify-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl";
const imgClasses = "w-14 h-14 rounded-full bg-white p-1 shadow-md mb-3";
const textClasses = "font-extrabold text-lg";

// Set color classes by index for each bank (edit as you wish)
const boxColorClasses = [
  // Modern, light, and professional color combos
  "bg-sky-50 text-sky-700 border border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fadeInUp",       // SBI
  "bg-sky-50 text-sky-700 border border-indigo-100 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fadeInUp", // HDFC
  "bg-sky-50 text-sky-700 border border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fadeInUp",    // PNB
  "bg-sky-50 text-sky-700 border border-sky-200 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fadeInUp",      // LIC
  "bg-sky-50 text-sky-700 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fadeInUp",  // Central Bank
  "bg-sky-50 text-sky-700 border border-sky-100 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fadeInUp",         // Saraswat
  "bg-sky-50 text-sky-700 border border-sky-100 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fadeInUp",       // NKGSB
  "bg-sky-50 text-sky-700 border border-indigo-100 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fadeInUp", // Bank of Baroda
];

const gridAreas = [
  "left", "top1", "top2", "top3", "right", "bottom1", "bottom2", "bottom3"
];


// Additional animation classes for uniqueness
const animationClasses = [
  "animate-float",
  "animate-float",
  "animate-float",
  "animate-float",
  "animate-float",
  "animate-float",
  "animate-float",
  "animate-float",
];


const service = [
  {
    title: "Home Loan",
    icon: <FaHome />,
    color: "from-orange-500 to-purple-600",
    image: "https://plus.unsplash.com/premium_photo-1661752229232-96232a11c62b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Modern house exterior
  },
  {
    title: "Government Loans",
    icon: <FaLandmark />,
    color: "from-blue-500 to-indigo-600",
    image: "https://tse4.mm.bing.net/th/id/OIP.F3B_CqGRJHi385Ds0iUvbAHaE1?pid=Api&P=0&h=220", // Parliament/govt building
  },
  {
    title: "Vehicle Loans",
    icon: <FaCar />,
    color: "from-pink-500 to-rose-500",
    image: "https://tse3.mm.bing.net/th/id/OIP.BssnjV8Q5P2rzvHV_mgrDgAAAA?pid=Api&P=0&h=220", // Car on road
  },
  {
    title: "Mortgage Loan",
    icon: <FaFileContract />,
    color: "from-green-500 to-emerald-600",
    image: "https://plus.unsplash.com/premium_photo-1661443273363-62cf1a4c2321?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // House keys, paperwork
  },
  {
    title: "Gold Loan",
    icon: <FaCoins />,
    color: "from-yellow-400 to-orange-500",
    image: "https://images.goodreturns.in/img/2024/08/gold-loans12001-1723528783.jpg", // Gold bars/coins
  },
  {
    title: "Personal Loan",
    icon: <FaUserFriends />,
    color: "from-red-500 to-amber-600",
    image: "https://tse2.mm.bing.net/th/id/OIP.SV5JUTkrKUGqsksgaGkNLAHaD4?pid=Api&P=0&h=220", // Smiling person or handshake
  },
  {
    title: "Educational Loan",
    icon: <FaGraduationCap />,
    color: "from-teal-500 to-cyan-500",
    image: "https://www.postoast.com/wp-content/uploads/2024/01/education-loans.jpg", // Graduation cap/books
  },
  {
    title: "Loan Against Property",
    icon: <FaBuilding />,
    color: "from-indigo-500 to-purple-600",
    image: "https://www.aptusindia.com/wp-content/uploads/2022/02/loan-against-property-inner-banner.jpg", // Modern buildings
  },
];


const loanDescriptions = {
  "Home Loan": "Get access to affordable home loans with flexible EMIs to build your dream home.",
  "Personal Loan": "Quick and hassle-free personal loans for your immediate financial needs.",
  "Car Loan": "Drive your dream car with our competitive car loan offers and easy documentation.",
  "Education Loan": "Fund your education with student-friendly loans and low interest rates.",
  "Business Loan": "Power your business growth with fast and customizable business loan options.",
  "Gold Loan": "Unlock instant funds with minimal documentation using your gold as security.",
  "Loan Against Property": "Leverage your property’s value to meet personal or business financial goals.",
  "Construction Loan": "Finance the construction of your residential or commercial property seamlessly.",
};

const faqs = [
  {
    question: "How do I apply for a loan?",
    answer:
      "You can apply for a loan by visiting our nearest branch or filling out the online application form available on our website. Make sure to prepare all required documents beforehand for a smooth process.",
    slug: "how-to-apply-for-loan",
  },
  {
    question: "What documents are required?",
    answer:
      "Required documents typically include identity proof, address proof, income proof, and property documents (if applicable).",
    slug: "documents-required-for-loan",
  },
  {
    question: "What are the interest rates?",
    answer:
      "Interest rates vary based on the loan type and your credit profile. Please check the loan page for details.",
    slug: "loan-interest-rates",
  },
  {
    question: "Can I apply for a loan online?",
    answer:
      "Yes, you can apply online through our website. Just fill the application and upload necessary documents.",
    slug: "apply-loan-online",
  },
  {
    question: "How long does it take for loan approval?",
    answer:
      "It usually takes 3–7 working days depending on the type of loan and document verification.",
    slug: "loan-approval-time",
  },
  {
    question: "Can I prepay my loan?",
    answer:
      "Yes, prepayment is allowed. However, some loans may have prepayment charges. Please confirm with your loan manager.",
    slug: "loan-prepayment",
  },
  {
    question: "What is the minimum credit score required?",
    answer:
      "A credit score of 700+ is generally preferred. However, this may vary depending on the loan product.",
    slug: "credit-score-for-loan",
  },
  {
    question: "Do you offer joint loans?",
    answer:
      "Yes, joint loans are available for specific categories like Home Loans. Co-applicant details are required.",
    slug: "joint-loans",
  },
  {
    question: "Are there any processing fees?",
    answer:
      "Yes, a minimal processing fee is charged which varies by loan type. Refer to the fees page for details.",
    slug: "loan-processing-fee",
  },
  {
    question: "How can I check my loan status?",
    answer:
      "Login to your account or use our mobile app to track your loan application status anytime.",
    slug: "check-loan-status",
  },
];



function Finance() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const [expandedSlug, setExpandedSlug] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 4) % service.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);



  
  const handleServiceClick = (serviceTitle) => {
    const routeMap = {
      "Home Loan": "home",
      "Government Loans": "government",
      "Vehicle Loans": "vehicle",
      "Mortgage Loan": "mortgage",
      "Gold Loan": "gold",
      "Personal Loan": "personal",
      "Educational Loan": "education",
      "Loan Against Property": "property",
    };
    const route = routeMap[serviceTitle];
    if (route) navigate(`/loans/${route}`);
  };

  // Entrance animation logic for hero components
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => setMounted(true), 50);
  }, []);


  
  return (
    <div className="bg-white text-gray-800 font-gellix">

        {/* ========= HERO SECTION ========== */}
  

<div className="relative bg-gradient-to-b from-white via-slate-100 to-sky-100 overflow-hidden flex items-center justify-center min-h-[650px] px-4 select-none">

    {/* Background radial shapes with pulse */}
    <svg className="absolute left-0 top-0 -z-20" width="340" height="300" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="bg1" cx="50%" cy="50%" r="80%">
          <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.24"/>
          <stop offset="100%" stopColor="#f3f4f6" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <ellipse cx="170" cy="150" rx="115" ry="85" fill="url(#bg1)" className="animate-pulse" />
    </svg>
    <svg className="absolute right-0 bottom-0 -z-20" width="320" height="230" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="bg2" cx="50%" cy="50%" r="80%">
          <stop offset="0%" stopColor="#818cf8" stopOpacity="0.20"/>
          <stop offset="100%" stopColor="#f9fafb" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <ellipse cx="160" cy="160" rx="110" ry="78" fill="url(#bg2)" className="animate-pulse" />
    </svg>

    {/* Abstract polygon shapes for analytic feel */}
    <svg className="absolute left-[20%] top-[35%] -z-10 w-20 h-20" aria-hidden="true" focusable="false" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="25,0 47,15 40,50 10,50 3,15" fill="rgba(96,165,250,0.12)" />
    </svg>
    <svg className="absolute right-[22%] top-[28%] -z-10 w-24 h-24" aria-hidden="true" focusable="false" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="rgba(99,102,241,0.1)" />
    </svg>
    <svg className="absolute left-[28%] bottom-[20%] -z-10 w-16 h-16" aria-hidden="true" focusable="false" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="20" height="20" rx="5" fill="rgba(14,165,233,0.15)" />
    </svg>
    <svg className="absolute right-[30%] bottom-[28%] -z-10 w-20 h-20 " aria-hidden="true" focusable="false" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="15" r="15" fill="rgba(192,132,252,0.12)" />
    </svg>

  {/* === Finance Blobs aligned around center content, NOT behind the main text === */}
  <FinanceBlob
    type="coin"
    className={`absolute top-[8%] left-[20%] w-24 h-24 shadow-xl rounded-full bg-white/40 backdrop-blur-md p-2 
      transition-transform duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
      finance-coin`}
    label="Total Assets"
    value="$12.4M"
  />
  <FinanceBlob
    type="wallet"
    className={`absolute top-[8%] right-[20%] w-24 h-24 shadow-xl rounded-full bg-white/40 backdrop-blur-md p-2
      transition-transform duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
      finance-wallet`}
    label="Cash Flow"
    value="+$92k"
  />
  <FinanceBlob
    type="chart"
    className={`absolute left-[15%] top-1/2 -translate-y-1/2 w-28 h-28 shadow-xl rounded-full bg-white/30 backdrop-blur-md p-2
      transition-transform duration-700 delay-200 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
      finance-chart`}
    label="Annual Return"
    value="8.2%"
  />
  <FinanceBlob
    type="vault"
    className={`absolute right-[15%] top-1/2 -translate-y-1/2 w-28 h-28 shadow-xl rounded-full bg-white/30 backdrop-blur-md p-2
      transition-transform duration-700 delay-300 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
      finance-vault`}
    label="Ops Uptime"
    value="99.999%"
  />
  <FinanceBlob
    type="star"
    className={`absolute left-[25%] bottom-[15%] w-20 h-20 shadow-lg rounded-full bg-white/30 backdrop-blur-md p-2
      transition-transform duration-700 delay-400 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      finance-star`}
    label="Customer Rating"
    value="4.9⭐"
  />
  <FinanceBlob
    type="card"
    className={`absolute right-[24%] bottom-[15%] w-20 h-20 shadow-lg rounded-full bg-white/30 backdrop-blur-md p-2
      transition-transform duration-700 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      finance-card`}
    label="Card Users"
    value="520k"
  />
  <FinanceBlob
    type="analytics"
    className={`absolute bottom-[8%] left-1/2 -translate-x-1/2 w-24 h-24 shadow-xl rounded-full bg-white/30 backdrop-blur-md p-2
      transition-transform duration-700 delay-600 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      finance-analytics`}
    label="Insights"
    value="Real-Time"
  />

  {/* Center Text / Buttons */}
  <div
    className={`relative z-20 flex flex-col items-center max-w-2xl mx-auto text-center transition-all  duration-700
      ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
  >
    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-300 bg-clip-text text-transparent mb-6 drop-shadow-lg">
      Make Your Money <span className="text-blue-500 drop-shadow-xl">Work</span><br className="hidden sm:inline" />
      Across the Universe
    </h1>
    <p className="text-xl sm:text-2xl font-semibold text-slate-800 mb-12 max-w-xl leading-relaxed">
      Unlock smarter investing, automated savings, and real-time <span className="text-blue-700 font-bold">AI-powered insights</span>.<br />
      Experience security, growth & clarity—<span className="text-sky-500 font-bold">all in one finance cockpit</span>.
    </p>
    <div className="flex justify-center gap-6">
      <button className="bg-gradient-to-r from-sky-400 via-gray-400 to-sky-400 text-white font-extrabold text-lg px-10 py-3 rounded-2xl shadow-lg transform hover:scale-110 transition-transform duration-300 tracking-wider uppercase">
        Get Started Free
      </button>
      <button className="bg-sky-100 border-2 border-blue-400 text-sky-500 font-extrabold text-lg px-10 py-3 rounded-2xl shadow-md hover:bg-blue-50 transition tracking-wider uppercase">
        Watch a Demo
      </button>
    </div>
  </div>
    {/* Floating and orbit animations for blobs */}
    <style jsx>{`
      @keyframes floatRotate1 {
        0%, 100% { transform: rotate(0deg) translateX(10px) rotate(0deg); }
        50% { transform: rotate(360deg) translateX(10px) rotate(-360deg); }
      }
      @keyframes floatRotate2 {
        0%, 100% { transform: rotate(0deg) translateY(6px) rotate(0deg); }
        50% { transform: rotate(-360deg) translateY(6px) rotate(360deg); }
      }
      @keyframes floatScaleRotate3 {
        0%, 100% {
          transform: scale(1) rotate(0deg);
        }
        50% {
          transform: scale(1.05) rotate(12deg);
        }
      }
      @keyframes floatScaleRotate4 {
        0%, 100% {
          transform: scale(1) rotate(0deg);
        }
        50% {
          transform: scale(1.03) rotate(-10deg);
        }
          
      }

      .finance-coin {
        animation: floatRotate1 14s linear infinite;
        transform-origin: center;
        filter: drop-shadow(0 0 4px rgba(251,202,21,0.5));
      }
      .finance-wallet {
        animation: floatRotate2 15s linear infinite;
        transform-origin: center;
        filter: drop-shadow(0 0 5px rgba(130,144,255,0.5));
      }
      .finance-chart {
        animation: floatScaleRotate3 8.5s ease-in-out infinite;
        transform-origin: center;
        filter: drop-shadow(0 0 4px rgba(58,175,242,0.6));
      }
      .finance-vault {
        animation: floatScaleRotate4 9.5s ease-in-out infinite;
        transform-origin: center;
        filter: drop-shadow(0 0 5px rgba(45,212,191,0.5));
      }

      .metric-pulse {
        animation: pulse 3.5s ease-in-out infinite;
      }
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.6; }
      }
    `}</style>
  </div>


      {/* ====== LOAN CATEGORIES SECTION ====== */}
     <section className="py-20 px-6 md:px-16 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <span className="inline-block px-3 py-1 text-5xl font-bold text-blue-600 mb-4">
        Loan Categories
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Flexible <span className="text-sky-700">Loan Solutions</span> for Every Need
      </h2>
      <p className="text-lg text-gray-500 max-w-2xl mx-auto">
        Explore a wide range of loan options crafted to support your personal, educational, property, and financial goals.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {service.map((svc, idx) => (
        <div
          key={idx}
          onClick={() => handleServiceClick(svc.title)}
          className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
        >
          <div className="h-52 overflow-hidden">
            <img
              src={svc.image}
              alt={svc.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="relative bg-sky-200 -mt-8 z-10 px-5 pt-6 pb-5 rounded-lg shadow-md transform -skew-y-2 group-hover:-translate-y-1 transition-all duration-300">
            <div className="absolute -top-5 right-5 z-20">
              <div className="w-12 h-12 rounded-full bg-sky-500 text-white flex items-center justify-center text-xl shadow-lg">
                {svc.icon}
              </div>
            </div>
            <div className="flex items-start gap-3 skew-y-2">
              <div>
                <h3 className="text-lg font-bold text-gray-800">{svc.title}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {loanDescriptions[svc.title] ||
                    `Professional ${svc.title.toLowerCase()} solutions tailored to your requirements.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


     {/* ===== OUR TRUSTED PARTNERS ===== */}
   <section className="bg-gradient-to-br from-sky-100 to-indigo-100 py-16 px-6 md:px-20 select-none overflow-x-hidden">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
        Our Trusted Partners
      </h2>
      <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 mb-8 rounded-full animate-pulse" />
      <p className="text-gray-700 text-lg max-w-2xl mx-auto">
        Empowering trust with India’s top financial institutions.
      </p>
    </div>
    <div
      className="grid max-w-7xl mx-auto gap-10"
      style={{
        gridTemplateColumns: "11rem 1fr 1fr 1fr 11rem",
        gridTemplateRows: "9rem 1fr 9rem",
        gridTemplateAreas: `
          "left top1 top2 top3 right"
          "left . . . right"
          "left bottom1 bottom2 bottom3 right"
        `,
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      {partners.map((partner, idx) => (
        <a
          key={partner.name}
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${boxBaseClasses} ${boxColorClasses[idx]} ${
            animationClasses[idx]
          }`}
          style={{ gridArea: gridAreas[idx] }}
          aria-label={partner.name}
        >
          <img
            src={partner.image}
            alt={partner.name}
            className={imgClasses}
            loading="lazy"
          />
          <span className={textClasses}>{partner.name}</span>
        </a>
      ))}
    </div>

    {/* Custom animations for float, tilt, and pulseColor */}
    <style>{`
      @keyframes fadeInUp {
        0% {
          opacity: 0;
          transform: translateY(32px) scale(0.96);
        }
        95% {
          opacity: 1;
          transform: translateY(-3px) scale(1.015);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      .animate-fadeInUp {
        animation: fadeInUp 0.85s cubic-bezier(.65,.05,.36,1) both;
      }

      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-18px); }
      }
      @keyframes tilt {
        0%, 100% { transform: rotate(-3deg); }
        50% { transform: rotate(3deg); }
      }
      @keyframes pulseColor {
        0%, 100% {
          box-shadow: 0 0 0 0 rgba(59,130,246,0.15);
        }
        50% {
          box-shadow: 0 0 24px 10px rgba(59,130,246,0.25);
        }
      }

      .animate-float {
        animation: float 2.7s ease-in-out infinite;
      }
      .animate-tilt {
        animation: tilt 3.8s cubic-bezier(.76,.17,.65,1.19) infinite;
      }
      .animate-pulseColor {
        animation: pulseColor 1.8s ease-in-out infinite;
      }
    `}</style>
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
            Got questions? We have the answers. Click on any question to explore detailed information on our loan services and policies.
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
              aria-label={`Toggle answer for: ${question}`}
            >
              <h3 className="text-2xl font-semibold text-indigo-900 group-hover:text-sky-700 transition-colors mb-3 flex justify-between items-center">
                {question}
                <span className="text-3xl leading-none">
                  {expandedSlug === slug ? '−' : '+'}
                </span>
              </h3>
              {expandedSlug === slug && (
                <p className="text-indigo-700 text-sm opacity-90 transition-opacity duration-300">
                  {answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// FinanceBlob component renders different blob types with animations
function FinanceBlob({ type, className }) {
  if (type === "coin") {
    return (
      <div className={`finance-coin w-28 h-28 cursor-pointer ${className || ""}`}>
        <svg width="108" height="108" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
          <defs>
            <radialGradient id="heroCoin" cx="50%" cy="52%" r="70%">
              <stop offset="0%" stopColor="#ffe066" stopOpacity="0.95" />
              <stop offset="90%" stopColor="#eab308" stopOpacity="0.2" />
            </radialGradient>
          </defs>
          <ellipse cx="51" cy="51" rx="49" ry="41" fill="url(#heroCoin)" />
          <text x="51" y="64" textAnchor="middle" fontWeight="bold" fontSize="40" fill="#f59e42">$</text>
        </svg>
        <div className="text-yellow-700 font-extrabold text-center mt-2 metric-pulse text-lg">$12.4M</div>
        <div className="text-yellow-800 font-semibold text-xs text-center select-none">Total Assets</div>
      </div>
    );
  } else if (type === "wallet") {
    return (
      <div className={`finance-wallet w-28 h-28 cursor-pointer ${className || ""}`}>
        <svg width="106" height="106" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
          <defs>
            <linearGradient id="heroWallet" x1="0" x2="1" y1="0" y2="1">
              <stop stopColor="#a5b4fc" stopOpacity="0.54" />
              <stop offset="1" stopColor="#2563eb" stopOpacity="0.18" />
            </linearGradient>
          </defs>
          <path d="M10,40 Q15,15 50,15 Q85,15 90,40 Q85,85 50,85 Q15,85 10,40 Z" fill="url(#heroWallet)" />
          <rect x="41" y="30" width="18" height="9" rx="2" fill="#fbbf24" />
        </svg>
        <div className="text-indigo-700 font-extrabold text-center mt-2 metric-pulse text-lg">+$92k</div>
        <div className="text-indigo-800 font-semibold text-xs text-center select-none">Monthly Cash Flow</div>
      </div>
    );
  } else if (type === "chart") {
    return (
      <div className={`finance-chart w-28 h-28 cursor-pointer ${className || ""}`}>
        <svg width="108" height="108" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
          <defs>
            <linearGradient id="heroChart" x1="0" x2="1" y1="0" y2="1">
              <stop stopColor="#60a5fa" stopOpacity="0.7" />
              <stop offset="1" stopColor="#2563eb" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <ellipse cx="49" cy="49" rx="41" ry="49" fill="url(#heroChart)" />
          <rect x="30" y="55" width="7" height="20" fill="#2563eb" />
          <rect x="45" y="45" width="7" height="30" fill="#818cf8" />
          <rect x="60" y="35" width="7" height="40" fill="#facc15" />
        </svg>
        <div className="text-sky-700 font-extrabold text-center mt-2 metric-pulse text-lg">8.2%</div>
        <div className="text-blue-800 font-semibold text-xs text-center select-none">Annual Return Rate</div>
      </div>
    );
  } else if (type === "vault") {
    return (
      <div className={`finance-vault w-28 h-28 cursor-pointer ${className || ""}`}>
        <svg width="108" height="108" viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
          <defs>
            <radialGradient id="heroVault" cx="60%" cy="40%" r="70%">
              <stop offset="0%" stopColor="#99f6e4" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.28" />
            </radialGradient>
          </defs>
          <ellipse cx="48" cy="49" rx="44" ry="39" fill="url(#heroVault)" />
          <circle cx="48" cy="52" r="15" stroke="#155e75" strokeWidth="4" fill="#fafafa" />
          <rect x="45" y="37" width="6" height="12" rx="2" fill="#2dd4bf" />
        </svg>
        <div className="text-teal-800 font-extrabold text-center mt-2 metric-pulse text-lg">99.999%</div>
        <div className="text-teal-700 font-semibold text-xs text-center select-none">Secure Ops Uptime</div>
      </div>
    );
  }
  return null;
}

export default Finance;
