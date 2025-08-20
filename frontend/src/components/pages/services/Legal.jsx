import React, { useState, useEffect } from 'react';
import { 
  Check, 
  ArrowRight, 
  ChevronRight, 
  X, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  User, 
  HelpCircle, 
  Home,
  Calendar,
  Lightbulb,
  CheckCircle,
  Play,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  ExternalLink,
  FileText,
  ArrowRightCircle,
  Bookmark,
  ClipboardList,
  FileTerminal,
  AlertCircle,
  Printer,
  BookOpen,
  Tag,
  Share2,
  Scale,
  ShieldCheck,
  Briefcase
} from 'lucide-react';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Legal = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Check if mobile on mount and resize
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "Company Registration",
      description: "Complete business registration with all necessary licenses and tax registrations included.",
      steps: [
  "Choose Your Company Type",
  "Submit Your Business Name & Logo",
  "We Gather Your Information & Documents",
  "We Apply for Name Approval (RUN/SPICe+)",
  "We Submit the SPICe+ Form to MCA",
  "Government Reviews and Approves the Application",
  "You Receive Certificate of Incorporation (CIN, PAN, TAN)",
  "Open a Bank Account & Start Your Business"
      ],
      icon: "🏢",
      color: "bg-blue-100 text-blue-800"
    },
    {
      id: 2,
      title: "Trademark Registration",
      description: "Protect your brand identity with comprehensive trademark registration services.",
      steps: [
  "Submit Your Brand Name & Logo",
  "We Conduct a Trademark Search",
  "We File the Trademark Application",
  "Government Examines the Application",
  "Trademark is Published in the Journal",
  "Wait Period for Opposition (if any)",
  "Trademark Gets Registered",
  "You Receive the Trademark Certificate (TM-R)"
      ],
      icon: "™️",
      color: "bg-purple-100 text-purple-800"
    },
{
  id: 3,
  title: "Legal Document Generator",
  description: "Create customized legal documents in minutes with our automated system.",
  steps: [
    `Select the type of document you need, for example:
• Marriage Certificate
• PAN Card (New / Correction)
• Court Marriage
• Passport (New / Renewal)
• Name Change Gazette Notification
• FSSAI License
• Gumasta / Udyam Registration
• Company & GST Registration
• Property Registration
• Rent Agreement (Online / Notarized)
• Domicile Certificate
• Income Certificate
• Senior Citizen Card
• Home Loan / Mortgage Loan
• Visa Application (All Countries)
• Travel Packages (Honeymoon etc.)
• MEA Apostille / Embassy Attestation`,
    
    "Answer a few simple questions",
    "Fill in key details using our online form",
    "Our system instantly generates the legal draft",
    "Review and make edits if needed",
    "Download your document in PDF or Word format"
  ],
  icon: "📄",
  color: "bg-green-100 text-green-800"
}
,
    {
      id: 4,
      title: "Book Legal Consultation",
      description: "Contact us directly for expert legal advice",
      contact: true,
      icon: "⚖️",
      color: "bg-orange-100 text-orange-800"
    }
  ];

  const benefits = [
    {
      title: "Expert Help",
      description: "Access to experienced legal professionals with specialized knowledge.",
      icon: <User className="w-6 h-6 text-sky-700" />
    },
    {
      title: "Fast Process",
      description: "Streamlined procedures to get your legal work done efficiently.",
      icon: <Clock className="w-6 h-6 text-sky-700" />
    },
    {
      title: "Secure & Online",
      description: "100% digital process with bank-grade security for your documents.",
      icon: <svg className="w-6 h-6 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
      </svg>
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees with clear breakdowns of all costs upfront.",
      icon: <svg className="w-6 h-6 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    }
  ];

  const partners = [
    {
      name: "John Smith",
      position: "Corporate Law Specialist",
      experience: "15+ years",
      contact: "john.smith@example.com",
      phone: "+1 (555) 123-4567",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      specialties: ["Mergers & Acquisitions", "Contract Law", "Compliance"]
    },
    {
      name: "Sarah Johnson",
      position: "Intellectual Property Attorney",
      experience: "12+ years",
      contact: "sarah.j@example.com",
      phone: "+1 (555) 987-6543",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      specialties: ["Trademarks", "Copyrights", "Patents"]
    },
    {
      name: "Michael Chen",
      position: "Family Law Expert",
      experience: "10+ years",
      contact: "michael.c@example.com",
      phone: "+1 (555) 456-7890",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      specialties: ["Divorce", "Child Custody", "Adoption"]
    },
    {
      name: "Emma Williams",
      position: "Real Estate Lawyer",
      experience: "8+ years",
      contact: "emma.w@example.com",
      phone: "+1 (555) 789-0123",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      specialties: ["Property Transactions", "Leases", "Zoning Laws"]
    }
  ];

  const blogs = [
    {
      title: "5 Common Legal Mistakes Startups Make",
      slug: "legal-mistakes-startups",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
      date: "May 15, 2023",
      excerpt: "Learn how to avoid costly legal errors when launching your business.",
      author: "Sarah Johnson",
      readTime: "4 min read"
    },
    {
      title: "Trademark Registration Process Explained",
      slug: "trademark-registration-process",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop",
      date: "June 2, 2023",
      excerpt: "Step-by-step guide to protecting your brand identity.",
      author: "Michael Chen",
      readTime: "6 min read"
    },
    {
      title: "Essential Legal Documents for Your Business",
      slug: "essential-legal-documents",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop",
      date: "June 18, 2023",
      excerpt: "Must-have contracts and agreements every business needs.",
      author: "Emma Williams",
      readTime: "5 min read"
    },
    {
      title: "Understanding Compliance Requirements in 2023",
      slug: "compliance-requirements-2023",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop",
      date: "July 5, 2023",
      excerpt: "Stay updated with the latest regulatory changes affecting your business.",
      author: "John Smith",
      readTime: "7 min read"
    },
    {
      title: "Legal Considerations for Remote Teams",
      slug: "legal-remote-teams",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop",
      date: "July 20, 2023",
      excerpt: "Navigating employment laws across different jurisdictions.",
      author: "Lisa Wong",
      readTime: "5 min read"
    },
    {
      title: "Protecting Your Intellectual Property",
      slug: "protecting-intellectual-property",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop",
      date: "August 1, 2023",
      excerpt: "Strategies for safeguarding your company's most valuable assets.",
      author: "David Kim",
      readTime: "6 min read"
    }
  ];

  const faqs = [
    {
      question: "How long does company registration typically take?",
      answer: "Registration usually takes 7-10 working days after document submission, depending on the business structure and completeness of paperwork."
    },
    {
      question: "What documents are required for trademark registration?",
      answer: "You'll need a high-resolution brand logo, identity proof (PAN/passport), address proof (Aadhaar/utility bill), and business incorporation details (if applicable)."
    },
    {
      question: "Can legal documents be customized after drafting?",
      answer: "Yes, most legal service providers allow edits to drafts before finalization to ensure compliance and alignment with your requirements."
    },
    {
      question: "Are consultations with legal advisors confidential?",
      answer: "Yes, attorney-client privilege protects all discussions with licensed legal professionals, ensuring confidentiality."
    },
    {
      question: "What legal checks are essential for real estate transactions?",
      answer: "Critical checks include title verification, encumbrance certificates, RERA compliance, and contract reviews to avoid disputes."
    },
    {
      question: "How can businesses ensure corporate legal compliance?",
      answer: "Regular audits, adherence to laws like the Companies Act and GST, and consulting compliance experts help maintain regulatory standards."
    },
    {
      question: "What options exist for resolving legal disputes outside court?",
      answer: "Alternative Dispute Resolution (ADR) methods like mediation, arbitration, or Lok Adalats offer faster, cost-effective solutions."
    },
    {
      question: "How is intellectual property (IP) protected in India?",
      answer: "IP protection involves registering trademarks/copyrights, filing patents, and monitoring for infringements through legal channels."
    },
    {
      question: "Why integrate legal and financial services for businesses?",
      answer: "Combined expertise ensures compliant financial structuring, tax efficiency, and risk mitigation in contracts or investments."
    },
    {
      question: "How to verify a legal advisor's credentials?",
      answer: "Check their enrollment number with the Bar Council of India and review their track record or client testimonials."
    }
  ];

  return (
    <div className="bg-white font-gellix ">
      {/* Floating Contact Button - Only show on desktop */}
      {!isMobile && (
        <div className={`fixed right-6 bottom-6 z-40 transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
          <button 
            onClick={() => setShowContactModal(true)}
            className="flex items-center justify-center p-4 bg-sky-600 hover:bg-sky-700 text-white rounded-full shadow-xl hover:shadow-2xl transition-all"
          >
            <MessageSquare className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative text-white min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920')",
            backgroundPosition: 'center 30%'
          }}
        />
        <div className="absolute inset-0 bg-[#0A1F3D]/80 z-0" />

        {/* Top-Left Breadcrumb Navigation */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
          <nav aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 md:px-3 md:py-1.5">
              <li className="inline-flex items-center">
                <a href="/" className="inline-flex items-center text-xs font-medium text-white hover:text-blue-200 transition-colors">
                  <Home className="w-3 h-3 mr-1" />
                  <span className="hidden sm:inline">Home</span>
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="w-3 h-3 mx-1 text-white/80" />
                  <a href="#" className="text-xs font-medium text-white hover:text-blue-200 transition-colors">Services</a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <ChevronRight className="w-3 h-3 mx-1 text-white/80" />
                  <span className="text-xs font-medium text-white">Legal</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Centered Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Comprehensive <span className="text-sky-400">Legal Solutions</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-200 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Expert legal services tailored to your business needs
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button 
              onClick={() => setShowContactModal(true)}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
            >
              Get Legal Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => window.scrollTo({ top: document.getElementById('services').offsetTop - 100, behavior: 'smooth' })}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent hover:bg-white/10 text-white rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 border-2 border-white/30 hover:border-white/50 flex items-center justify-center"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative">
        <div className="absolute -top-10 left-0 w-32 h-32 bg-blue-100 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-sky-100 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-blue-100 text-blue-900 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              ABOUT US
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Holistic <span className="text-blue-600">Legal Solutions</span> with Strategic Domain Integration
            </h2>
            
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
              As part of Nexiaquest Ventures LLP's comprehensive service portfolio, our legal division combines specialized legal expertise with cross-sector knowledge from our real estate, finance, and business advisory services to deliver holistic legal solutions.
            </p>
            
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 p-1.5 md:p-2 rounded-full mr-3 md:mr-4 mt-1">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-gray-900">Comprehensive Legal Coverage</h4>
                  <p className="text-sm md:text-base text-gray-600">Expertise in real estate law, corporate law, contract drafting, intellectual property, and dispute resolution</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-1.5 md:p-2 rounded-full mr-3 md:mr-4 mt-1">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-gray-900">Cross-Service Integration</h4>
                  <p className="text-sm md:text-base text-gray-600">Seamless coordination with our financial, insurance, and real estate teams for comprehensive client solutions</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-1.5 md:p-2 rounded-full mr-3 md:mr-4 mt-1">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-gray-900">Regulatory Compliance</h4>
                  <p className="text-sm md:text-base text-gray-600">Ensuring adherence to RERA, SEBI, IRDAI, and other sector-specific regulations across all client engagements</p>
                </div>
              </div>
            </div>
            
            <a 
              href="/legal-services" 
              className="mt-6 md:mt-8 inline-flex items-center px-6 py-2.5 md:px-8 md:py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-semibold text-sm md:text-base shadow-md hover:shadow-lg transition-all duration-300"
            >
              Explore more about
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
            </a>
          </div>
          
          <div className="relative mt-8 md:mt-0">
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Legal team discussing documents"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">Multi-Disciplinary Approach</h3>
                  <p className="text-blue-200 text-sm md:text-base">Legal expertise enhanced by financial and real estate knowledge from our integrated service model</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="bg-gradient-to-br from-blue-50 to-sky-50 py-12 md:py-20 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-100 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-200 rounded-full opacity-5 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-blue-100 text-blue-900 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              OUR SERVICES
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Get Started With <span className="text-blue-600">Our Legal Services</span>
            </h2>
            <p className="text-lg md:text-xl text-blue-600 font-medium mb-2 md:mb-4">EXPERT SERVICES TAILORED TO YOUR NEEDS</p>
            <div className="flex justify-center mt-4 md:mt-6">
              <div className="w-16 md:w-24 h-1 md:h-1.5 bg-sky-600 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group flex flex-col border border-gray-100 hover:border-blue-200 relative"
              >
                <div className="absolute top-0 right-0 w-12 md:w-16 h-12 md:h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-blue-600 transform rotate-45 origin-bottom-left opacity-5 group-hover:opacity-10 transition-opacity"></div>
                </div>
                
                <div className="p-4 md:p-6 flex-grow">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-lg flex items-center justify-center text-2xl md:text-3xl mb-3 md:mb-4 ${service.color} transition-all duration-300 group-hover:scale-105 shadow-md`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-blue-700 transition-colors">
                    {service.title}
                    <span className="block w-0 h-0.5 bg-blue-400 mt-1 group-hover:w-full transition-all duration-300"></span>
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">{service.description}</p>
                </div>
                <div className="px-4 pb-4 md:px-6 md:pb-6">
                  <button 
                    onClick={() => service.contact ? setShowContactModal(true) : setActiveModal(service.id)}
                    className={`w-full text-xs md:text-sm font-medium flex items-center justify-center ${service.color.split(' ')[1]} hover:${service.color.split(' ')[1].replace('800', '900')} py-2 md:py-3 px-3 md:px-4 rounded-lg transition-all duration-300 group-hover:shadow-md`}
                  >
                    {service.contact ? 'Contact Us' : 'View Process'}
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-16 flex justify-center">
            <div className="w-16 md:w-24 h-0.5 md:h-1 bg-sky-600 rounded-full opacity-80"></div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-100 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-sky-100 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 w-24 md:w-32 h-24 md:h-32 bg-blue-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-24 md:w-32 h-24 md:h-32 bg-sky-100 rounded-full opacity-50"></div>
              <div className="relative bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-blue-100 text-blue-900 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  WHY CHOOSE US
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                  Integrated <span className="text-blue-600">Legal Solutions</span>
                </h2>
                <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
                  As part of our comprehensive multi-service offerings, Nexiaquest Ventures LLP delivers exceptional legal services backed by our cross-sector expertise and client-focused approach.
                </p>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-1 mr-2 md:mr-3 flex-shrink-0" />
                    <p className="text-sm md:text-base text-gray-700"><strong>Multi-Service Expertise:</strong> Benefit from our integrated approach combining legal services with real estate, finance, and insurance solutions</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-1 mr-2 md:mr-3 flex-shrink-0" />
                    <p className="text-sm md:text-base text-gray-700"><strong>Comprehensive Coverage:</strong> Specialized in real estate law, corporate law, contract review, IP protection, and dispute resolution</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-1 mr-2 md:mr-3 flex-shrink-0" />
                    <p className="text-sm md:text-base text-gray-700"><strong>Professional Team:</strong> 178+ member team including specialized legal professionals and support staff</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4 md:gap-6 mt-8 md:mt-0">
              {[
                {
                  icon: <Scale className="w-5 h-5 md:w-6 md:h-6" />,
                  title: "Regulatory Compliance",
                  description: "Full adherence to all legal and regulatory requirements including LLP Act, RERA, SEBI, and IRDAI compliance"
                },
                {
                  icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />,
                  title: "Risk Mitigation",
                  description: "Integrated legal support to navigate complex regulations and protect against business risks"
                },
                {
                  icon: <Briefcase className="w-5 h-5 md:w-6 md:h-6" />,
                  title: "Corporate Legal Services",
                  description: "End-to-end solutions including mergers & acquisitions, compliance, and corporate governance"
                },
                {
                  icon: <Home className="w-5 h-5 md:w-6 md:h-6" />,
                  title: "Real Estate Legal Expertise",
                  description: "Assistance in property transactions, title searches, and construction law matters"
                }
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-200 group"
                >
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 md:p-3 rounded-lg mr-3 md:mr-4 text-sky-700 group-hover:bg-blue-200 transition-colors">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-blue-700 transition-colors">{benefit.title}</h3>
                      <p className="text-sm md:text-base text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Legal Experts Section */}
      <div className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-sky-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-100 rounded-full opacity-10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-blue-100 text-blue-900 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4 mx-auto">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              OUR LEGAL TEAM
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Meet Our <span className="text-blue-600">Expert Partners</span>
            </h2>
            <p className="text-lg md:text-xl text-blue-600 font-medium mb-2 md:mb-4">SPECIALIZED LEGAL PROFESSIONALS</p>
            <div className="flex justify-center mt-4 md:mt-6">
              <div className="w-16 md:w-24 h-1 md:h-1.5 bg-sky-600 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-60 sm:h-64 md:h-80 relative overflow-hidden">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <h3 className="text-lg md:text-xl font-bold">{partner.name}</h3>
                    <p className="text-sky-300 font-medium text-sm md:text-base">{partner.position}</p>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/95 to-sky-900/95 p-4 md:p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                  <div className="mb-3 md:mb-4">
                    <div className="flex items-center mb-2 md:mb-3">
                      <Clock className="w-4 h-4 md:w-5 md:h-5 mr-2 text-sky-300" />
                      <span className="font-medium text-sm md:text-base">{partner.experience} Experience</span>
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{partner.name}</h3>
                    <p className="text-sky-300 font-medium mb-3 md:mb-4 text-sm md:text-base">{partner.position}</p>
                    
                    <div className="mb-3 md:mb-4">
                      <h4 className="font-semibold text-sm md:text-base mb-1 md:mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-1 md:gap-2">
                        {partner.specialties.map((specialty, i) => (
                          <span 
                            key={i} 
                            className="bg-sky-800/50 text-white text-xs px-2 py-0.5 md:px-3 md:py-1 rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    <a 
                      href={`mailto:${partner.contact}`}
                      className="flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-1.5 md:p-2 transition-colors"
                    >
                      <Mail className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                      <span className="text-xs">Email</span>
                    </a>
                    <a 
                      href={`tel:${partner.phone}`}
                      className="flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-1.5 md:p-2 transition-colors"
                    >
                      <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                      <span className="text-xs">Call</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legal Blogs & Articles */}
      <div className="py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-blue-100 text-blue-900 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4 mx-auto">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              LEGAL INSIGHTS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Nexiaquest <span className="text-blue-600">Legal Expertise</span>
            </h2>
            <p className="text-lg md:text-xl text-blue-600 font-medium mb-2 md:mb-4">INDUSTRY-SPECIFIC LEGAL GUIDANCE</p>
            <div className="flex justify-center mt-4 md:mt-6">
              <div className="w-16 md:w-24 h-1 md:h-1.5 bg-sky-600 rounded-full"></div>
            </div>
          </div>

          <div className="relative">
            <div className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar">
              <div className="flex flex-nowrap gap-4 md:gap-6">
                {[
                  {
                    id: 1,
                    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                    title: "Navigating RERA Compliance in Mumbai Real Estate",
                    date: "May 15, 2024",
                    category: "Real Estate Law",
                    excerpt: "Understanding the latest RERA amendments and their impact on property transactions in MMR region",
                    author: "Nexiaquest Legal Team",
                    intro: "The Real Estate (Regulation and Development) Act, 2016 has undergone significant amendments affecting Mumbai's property market. Our analysis covers key compliance requirements for developers and buyers.",
                    section1Title: "Key RERA Updates 2024",
                    section1Content: "Recent amendments emphasize stricter project registration requirements and enhanced buyer protections. Key changes include mandatory quarterly progress reports and escrow account monitoring.",
                    section2Title: "Practical Implications",
                    section2Content: "For developers and property investors, these changes require:",
                    conclusion: "Staying RERA-compliant is now more crucial than ever for smooth real estate transactions in Mumbai's competitive market."
                  },
                  {
                    id: 2,
                    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                    title: "Corporate Legal Structures for Startups",
                    date: "April 28, 2024",
                    category: "Corporate Law",
                    excerpt: "Choosing the right legal entity for your business with our comprehensive guide",
                    author: "Nexiaquest Corporate Team",
                    intro: "Selecting the appropriate legal structure is crucial for startups, affecting everything from liability to fundraising potential.",
                    section1Title: "LLP vs Private Limited",
                    section1Content: "As an LLP ourselves, we analyze the advantages of Limited Liability Partnerships for service-based businesses versus Private Limited structures.",
                    section2Title: "Compliance Requirements",
                    section2Content: "Essential compliance checklists for different business structures:",
                    conclusion: "The right legal structure can significantly impact your business growth and risk management."
                  },
                  {
                    id: 3,
                    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                    title: "SEBI Compliance for Investment Advisors",
                    date: "March 10, 2024",
                    category: "Financial Law",
                    excerpt: "Navigating the latest SEBI regulations for shares and mutual fund advisors",
                    author: "Nexiaquest Financial Team",
                    intro: "SEBI's updated Investment Advisor regulations bring significant changes to compliance requirements.",
                    section1Title: "New Certification Requirements",
                    section1Content: "Analysis of the enhanced qualification standards for investment advisors effective June 2024.",
                    section2Title: "Documentation Updates",
                    section2Content: "Key documents now required for SEBI compliance:",
                    conclusion: "Early adoption of these changes positions advisors for long-term success in India's growing financial markets."
                  },
                  {
                    id: 4,
                    image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                    title: "IRDAI's New Insurance Product Guidelines",
                    date: "February 22, 2024",
                    category: "Insurance Law",
                    excerpt: "How recent IRDAI changes affect policy formulation and claims processing",
                    author: "Nexiaquest Insurance Team",
                    intro: "The Insurance Regulatory and Development Authority's 2024 guidelines introduce sweeping changes to product design.",
                    section1Title: "Product Approval Process",
                    section1Content: "Streamlined approval timelines and enhanced disclosure requirements for new insurance products.",
                    section2Title: "Claims Processing Changes",
                    section2Content: "New mandates that affect both insurers and policyholders:",
                    conclusion: "These changes ultimately benefit consumers through greater transparency and faster claim resolutions."
                  },
                  {
                    id: 5,
                    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                    title: "Legal Framework for EdTech Startups in India",
                    date: "January 18, 2024",
                    category: "Education Law",
                    excerpt: "Navigating UGC and AICTE regulations for digital education platforms",
                    author: "Nexiaquest Education Team",
                    intro: "The rapid growth of EdTech in India has prompted new regulatory oversight from education authorities.",
                    section1Title: "Degree Granting Requirements",
                    section1Content: "Understanding the UGC's Online Education Regulations 2023 for institutions offering online degrees.",
                    section2Title: "Certification Programs",
                    section2Content: "Compliance considerations for non-degree programs:",
                    conclusion: "Proper legal structuring is essential for EdTech companies to scale while remaining compliant."
                  },
                  {
                    id: 6,
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                    title: "ASCI Guidelines for Digital Marketing",
                    date: "December 5, 2023",
                    category: "Marketing Law",
                    excerpt: "Ensuring compliance with advertising standards in social media campaigns",
                    author: "Nexiaquest Marketing Team",
                    intro: "The Advertising Standards Council of India has updated its guidelines for influencer marketing and digital advertisements.",
                    section1Title: "Influencer Disclosure Rules",
                    section1Content: "New requirements for clearly labeling paid partnerships and sponsored content.",
                    section2Title: "Comparative Advertising",
                    section2Content: "Legal boundaries when comparing products or services to competitors:",
                    conclusion: "Maintaining ethical advertising practices builds brand trust while avoiding regulatory penalties."
                  },
                  {
                    id: 7,
                    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                    title: "Zoning Laws and Building Codes in MMR",
                    date: "November 12, 2023",
                    category: "Construction Law",
                    excerpt: "Key legal considerations for architects and developers in Mumbai Metropolitan Region",
                    author: "Nexiaquest Architecture Team",
                    intro: "Mumbai's Development Plan 2034 has introduced significant changes to zoning regulations and FSI norms.",
                    section1Title: "FSI and TDR Updates",
                    section1Content: "How the new Floor Space Index regulations impact project feasibility and valuations.",
                    section2Title: "Environmental Clearances",
                    section2Content: "Streamlined processes for coastal regulation zone projects:",
                    conclusion: "Understanding these legal frameworks is essential for successful project execution in MMR."
                  },
                  {
                    id: 8,
                    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                    title: "RBI's New Digital Lending Guidelines",
                    date: "October 20, 2023",
                    category: "FinTech Law",
                    excerpt: "Compliance roadmap for NBFCs and lending platforms",
                    author: "Nexiaquest Financial Team",
                    intro: "The Reserve Bank of India's digital lending framework introduces strict requirements for loan disbursals and data privacy.",
                    section1Title: "Direct Disbursal Mandate",
                    section1Content: "New rules prohibiting third-party involvement in loan disbursement processes.",
                    section2Title: "Data Privacy Requirements",
                    section2Content: "Enhanced consumer protections around data collection and usage:",
                    conclusion: "These changes aim to protect borrowers while ensuring the sustainable growth of digital lending."
                  }
                ].map((blog, index) => (
                  <div key={index} className="flex-shrink-0 w-64 sm:w-72 md:w-80">
                    <div className="group block cursor-pointer" onClick={() => setSelectedBlog(blog)}>
                      <div className="h-40 sm:h-48 bg-gray-200 overflow-hidden rounded-lg mb-3 md:mb-4 relative">
                        <img 
                          src={blog.image} 
                          alt={blog.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="px-1 md:px-2">
                        <div className="flex items-center text-xs md:text-sm text-gray-500 mb-1 md:mb-2">
                          <span>{blog.date}</span>
                          <span className="mx-1 md:mx-2">•</span>
                          <span>{blog.category}</span>
                        </div>
                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 md:mb-3 leading-tight group-hover:text-blue-700 transition-colors">{blog.title}</h3>
                        <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 line-clamp-2">{blog.excerpt}</p>
                        <div className="text-sky-700 text-xs md:text-sm font-medium flex items-center group-hover:text-sky-800">
                          Read Full Analysis
                          <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Detail Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white p-4 md:p-6 border-b flex justify-between items-center z-10">
              <div className="flex items-center gap-2 md:gap-3">
                <FileText className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">{selectedBlog.title}</h2>
              </div>
              <button 
                onClick={() => setSelectedBlog(null)}
                className="text-gray-500 hover:text-gray-700 p-1 md:p-2 rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            
            <div className="p-4 md:p-6">
              <div className="mb-6 md:mb-8 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                <img 
                  src={selectedBlog.image} 
                  alt={selectedBlog.title}
                  className="w-full h-auto max-h-[300px] md:max-h-[400px] object-cover"
                />
              </div>
              
              <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-6 md:mb-8 text-xs md:text-sm">
                <div className="flex items-center gap-1 md:gap-2">
                  <User className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                  <span className="text-gray-600">By {selectedBlog.author}</span>
                </div>
                <span className="text-gray-300 hidden md:inline">|</span>
                <div className="flex items-center gap-1 md:gap-2">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                  <span className="text-gray-600">{selectedBlog.date}</span>
                </div>
                <span className="text-gray-300 hidden md:inline">|</span>
                <div className="flex items-center gap-1 md:gap-2">
                  <Tag className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                  <span className="text-gray-600">{selectedBlog.category}</span>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <div className="mb-6 md:mb-8 p-3 md:p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2 md:mb-3 flex items-center gap-1 md:gap-2">
                    <ArrowRightCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                    Introduction
                  </h3>
                  <p className="text-sm md:text-base text-gray-700">
                    {selectedBlog.id === 1 && "The Real Estate (Regulation and Development) Act, 2016 (RERA) has undergone significant amendments in 2024, particularly impacting Mumbai's property market. These changes aim to enhance transparency, protect buyers, and streamline project execution in the Mumbai Metropolitan Region (MMR), where real estate prices range from ₹10,000 to over ₹1,00,000 per square foot depending on location."}
                    
                    {selectedBlog.id === 2 && "Selecting the appropriate legal structure is foundational for startups, impacting everything from personal liability to fundraising potential and tax obligations. Nexiaquest's experience as an LLP with 50-50 ownership between Akshay P. Giri and Amjad Khan demonstrates the advantages of this structure for diversified service businesses."}
                    
                    {selectedBlog.id === 3 && "SEBI's 2024 Investment Advisor Regulations introduce rigorous certification and disclosure norms to protect investors in India's growing mutual fund market (AUM: ₹37 trillion as of 2022). These changes come as retail participation in capital markets reaches record levels, with over 100 million demat accounts now active across the country."}
                    
                    {selectedBlog.id === 4 && "IRDAI's 2024 guidelines revolutionize insurance product design and claims processing in India's $119 billion insurance market. These changes aim to increase transparency and customer protection while fostering innovation in products like cyber insurance and parametric insurance."}
                    
                    {selectedBlog.id === 5 && "The rapid growth of India's EdTech sector, valued at $31 billion in 2021 and projected to reach $84 billion by 2025, has prompted new regulatory oversight from UGC and AICTE. These regulations balance innovation with quality standards in digital education."}
                    
                    {selectedBlog.id === 6 && "ASCI's updated guidelines for digital marketing address the explosive growth of influencer marketing and social commerce in India, where digital ad spending is projected to reach $8 billion by 2025. These rules aim to maintain ethical standards while allowing creative expression."}
                    
                    {selectedBlog.id === 7 && "Mumbai's Development Plan 2034 introduces significant changes to zoning regulations and FSI norms in the MMR region, where ongoing infrastructure projects like the Coastal Road and Navi Mumbai Airport are transforming real estate dynamics."}
                    
                    {selectedBlog.id === 8 && "RBI's digital lending framework responds to the rapid growth of India's fintech sector, valued at $31 billion in 2021, with strict requirements for loan disbursals and data privacy to protect consumers while enabling innovation."}
                  </p>
                </div>
                
                <div className="space-y-6 md:space-y-8">
                  <section>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center gap-1 md:gap-2">
                      <Bookmark className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                      {selectedBlog.id === 1 ? "Key RERA Updates 2024" : 
                      selectedBlog.id === 2 ? "Entity Comparison: LLP vs Private Limited" :
                      selectedBlog.id === 3 ? "SEBI Certification Requirements" :
                      selectedBlog.id === 4 ? "IRDAI Product Approval Changes" :
                      selectedBlog.id === 5 ? "UGC Online Education Regulations" :
                      selectedBlog.id === 6 ? "ASCI Disclosure Requirements" :
                      selectedBlog.id === 7 ? "FSI and TDR Updates" :
                      "RBI Digital Lending Rules"}
                    </h3>
                    <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                      {selectedBlog.id === 1 && (
                        <>
                          <p>The Maharashtra RERA has implemented several critical changes this year:</p>
                          <ul className="space-y-1 md:space-y-2 pl-4 md:pl-5">
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Stricter Project Registration:</strong> Developers must now submit quarterly progress reports with detailed financial disclosures, including escrow account balances (minimum 70% of funds)</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Enhanced Buyer Protections:</strong> Mandatory defect liability period extended to 5 years for structural issues (previously 1 year)</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Penalty Structure:</strong> Delays now incur penalties at 2x the State Bank of India's marginal cost of lending rate (MCLR)</span>
                            </li>
                          </ul>
                          <div className="my-3 md:my-4 p-3 md:p-4 bg-gray-50 rounded-lg border border-gray-200">
                            <h4 className="font-bold text-gray-800 mb-1 md:mb-2">Impact on Project Timelines:</h4>
                            <p>The average approval timeline has increased by 15-20 days due to enhanced documentation requirements. Developers should factor this into their project planning, especially in high-growth areas like Navi Mumbai and Thane.</p>
                          </div>
                        </>
                      )}
                      
                      {selectedBlog.id === 2 && (
                        <div className="overflow-x-auto">
                          <table className="min-w-full border border-gray-200 text-sm md:text-base">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="p-2 md:p-3 border border-gray-300 text-left">Factor</th>
                                <th className="p-2 md:p-3 border border-gray-300 text-left">LLP</th>
                                <th className="p-2 md:p-3 border border-gray-300 text-left">Private Limited</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="p-2 md:p-3 border border-gray-200">Liability Protection</td>
                                <td className="p-2 md:p-3 border border-gray-200">Limited to partners' contribution</td>
                                <td className="p-2 md:p-3 border border-gray-200">Limited to share capital</td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="p-2 md:p-3 border border-gray-200">Compliance Burden</td>
                                <td className="p-2 md:p-3 border border-gray-200">Lower (no mandatory audit below ₹40L turnover)</td>
                                <td className="p-2 md:p-3 border border-gray-200">Higher (annual audits required)</td>
                              </tr>
                              <tr>
                                <td className="p-2 md:p-3 border border-gray-200">Fundraising</td>
                                <td className="p-2 md:p-3 border border-gray-200">Limited to partner contributions/debt</td>
                                <td className="p-2 md:p-3 border border-gray-200">Can issue shares to investors</td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="p-2 md:p-3 border border-gray-200">Taxation</td>
                                <td className="p-2 md:p-3 border border-gray-200">30% flat rate + surcharge</td>
                                <td className="p-2 md:p-3 border border-gray-200">25% for turnover below ₹250Cr</td>
                              </tr>
                            </tbody>
                          </table>
                          <p className="mt-3 md:mt-4 text-xs md:text-sm text-gray-500">* Data based on Companies Act 2013 and LLP Act 2008</p>
                        </div>
                      )}

                      {selectedBlog.id === 3 && (
                        <>
                          <p>SEBI's new certification framework for investment advisors includes:</p>
                          <ul className="space-y-1 md:space-y-2 pl-4 md:pl-5">
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Enhanced Qualifications:</strong> Mandatory NISM Series-X-A and Series-X-B certifications for all advisors</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Continuing Education:</strong> 15 hours of annual training required, including 5 hours on ethics</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Client Documentation:</strong> Comprehensive risk profiling now mandatory before any investment recommendation</span>
                            </li>
                          </ul>
                          <div className="my-3 md:my-4 p-3 md:p-4 bg-gray-50 rounded-lg border border-gray-200">
                            <h4 className="font-bold text-gray-800 mb-1 md:mb-2">Implementation Timeline:</h4>
                            <p>Existing advisors must complete certification by December 2024. New entrants must qualify before practicing.</p>
                          </div>
                        </>
                      )}

                      {selectedBlog.id === 4 && (
                        <>
                          <p>IRDAI's streamlined product approval process includes:</p>
                          <ul className="space-y-1 md:space-y-2 pl-4 md:pl-5">
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Use-and-File System:</strong> For standard products, insurers can launch immediately after filing with IRDAI</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Sandbox Framework:</strong> Allows testing innovative products like parametric insurance for 6-12 months</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Standardized Disclosures:</strong> Simplified policy documents with standardized terminology</span>
                            </li>
                          </ul>
                        </>
                      )}

                      {selectedBlog.id === 5 && (
                        <>
                          <p>UGC's Online Education Regulations 2023 establish:</p>
                          <ul className="space-y-1 md:space-y-2 pl-4 md:pl-5">
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Degree Granting Requirements:</strong> Institutions must have physical infrastructure and NAAC accreditation to offer online degrees</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Technology Standards:</strong> Minimum platform requirements including LMS capabilities and proctoring systems</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Faculty Ratios:</strong> Maximum 1:100 faculty-to-student ratio for core courses</span>
                            </li>
                          </ul>
                        </>
                      )}

                      {selectedBlog.id === 6 && (
                        <>
                          <p>ASCI's updated guidelines mandate:</p>
                          <ul className="space-y-1 md:space-y-2 pl-4 md:pl-5">
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Clear Disclosure Labels:</strong> "Paid Promotion" or "Advertisement" must be prominently displayed in videos and images</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Substantiation Requirements:</strong> All product claims must be backed by verifiable evidence</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Children's Advertising:</strong> Stricter rules for ads targeting children under 14</span>
                            </li>
                          </ul>
                        </>
                      )}

                      {selectedBlog.id === 7 && (
                        <>
                          <p>Key changes in Mumbai's Development Plan 2034:</p>
                          <ul className="space-y-1 md:space-y-2 pl-4 md:pl-5">
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Revised FSI Norms:</strong> Increased FSI along transit corridors to promote high-density development</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>TDR Reforms:</strong> New rules for Transferable Development Rights to streamline redevelopment projects</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Affordable Housing:</strong> Mandatory 20% affordable housing component in projects over 4,000 sqm</span>
                            </li>
                          </ul>
                        </>
                      )}

                      {selectedBlog.id === 8 && (
                        <>
                          <p>RBI's digital lending framework introduces:</p>
                          <ul className="space-y-1 md:space-y-2 pl-4 md:pl-5">
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Direct Disbursal:</strong> Loans must be disbursed directly to borrower's account, prohibiting third-party involvement</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Cooling-off Period:</strong> Borrowers have 3 days to exit digital loans without penalty</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Data Privacy:</strong> Strict limits on data collection and mandatory consent for each data element</span>
                            </li>
                          </ul>
                        </>
                      )}
                    </div>
                  </section>
                  
                  <section>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center gap-1 md:gap-2">
                      <ClipboardList className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                      {selectedBlog.id === 1 ? "Practical Implications for Stakeholders" :
                      selectedBlog.id === 2 ? "Compliance Requirements" :
                      selectedBlog.id === 3 ? "Implementation Guidelines" :
                      selectedBlog.id === 4 ? "Claims Processing Changes" :
                      selectedBlog.id === 5 ? "Certification Programs" :
                      selectedBlog.id === 6 ? "Comparative Advertising Rules" :
                      selectedBlog.id === 7 ? "Environmental Clearances" :
                      "Data Privacy Requirements"}
                    </h3>
                    <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                      {selectedBlog.id === 1 && (
                        <>
                          <p>These regulatory changes require significant adjustments from all market participants:</p>
                          <div className="grid sm:grid-cols-2 gap-3 md:gap-4 mt-3 md:mt-4">
                            <div className="p-3 md:p-4 bg-gray-50 rounded-lg">
                              <h4 className="font-bold mb-1 md:mb-2">For Developers:</h4>
                              <ul className="space-y-1 md:space-y-2">
                                <li className="flex items-start gap-1 md:gap-2">
                                  <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                                  <span>Revise project timelines to account for 15-20 day longer approval processes</span>
                                </li>
                                <li className="flex items-start gap-1 md:gap-2">
                                  <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                                  <span>Restructure financial planning to maintain 70% escrow balance</span>
                                </li>
                              </ul>
                            </div>
                            <div className="p-3 md:p-4 bg-gray-50 rounded-lg">
                              <h4 className="font-bold mb-1 md:mb-2">For Buyers:</h4>
                              <ul className="space-y-1 md:space-y-2">
                                <li className="flex items-start gap-1 md:gap-2">
                                  <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                                  <span>Always verify RERA registration numbers on the Maharashtra RERA portal</span>
                                </li>
                                <li className="flex items-start gap-1 md:gap-2">
                                  <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                                  <span>Utilize new grievance redressal mechanisms for faster resolution</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </>
                      )}
                      
                      {selectedBlog.id === 2 && (
                        <>
                          <p>LLPs must adhere to specific regulatory requirements under the LLP Act 2008:</p>
                          <ul className="space-y-1 md:space-y-2 pl-4 md:pl-5">
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Annual Filings:</strong> Form 11 (Annual Return) and Form 8 (Statement of Accounts) must be filed with MCA by May 30 each year</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Registered Office:</strong> Must maintain a physical office address in India (PO Box not allowed)</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Partner Agreements:</strong> Should clearly outline profit-sharing ratios, capital contributions, and dispute resolution mechanisms</span>
                            </li>
                          </ul>
                          <div className="mt-3 md:mt-4 p-3 md:p-4 bg-yellow-50 border-l-4 border-yellow-400">
                            <h4 className="font-bold text-gray-800 mb-1 md:mb-2">Common Compliance Pitfalls:</h4>
                            <p>Many LLPs face penalties for late filings or incomplete documentation. Nexiaquest's corporate legal team can help ensure full compliance.</p>
                          </div>
                        </>
                      )}

                      {selectedBlog.id === 3 && (
                        <>
                          <p>Investment advisors should implement these changes through:</p>
                          <ul className="space-y-1 md:space-y-2 pl-4 md:pl-5">
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Client Onboarding:</strong> New standardized risk profiling questionnaires and documentation checklists</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Training Programs:</strong> Schedule certification exams for all advisors and support staff</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Disclosure Documents:</strong> Update all marketing materials and client agreements with required disclosures</span>
                            </li>
                          </ul>
                        </>
                      )}

                      {selectedBlog.id === 4 && (
                        <>
                          <p>The new claims processing framework requires:</p>
                          <ul className="space-y-1 md:space-y-2 pl-4 md:pl-5">
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Digital Claims:</strong> Mandatory online claims portal with real-time status tracking</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Timelines:</strong> Health claims must be processed within 1 hour of document submission for cashless claims</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Transparency:</strong> Detailed explanation required for any claim rejection</span>
                            </li>
                          </ul>
                        </>
                      )}

                      {selectedBlog.id === 5 && (
                        <>
                          <p>For non-degree certification programs:</p>
                          <ul className="space-y-1 md:space-y-2 pl-4 md:pl-5">
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Accreditation:</strong> Optional but recommended through bodies like NCVET or sector skill councils</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Outcome Measurement:</strong> Must track and report learner employment outcomes</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Refund Policy:</strong> Clear refund policies must be disclosed before enrollment</span>
                            </li>
                          </ul>
                        </>
                      )}

                      {selectedBlog.id === 6 && (
                        <>
                          <p>When comparing products or services:</p>
                          <ul className="space-y-1 md:space-y-2 pl-4 md:pl-5">
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Substantiation:</strong> All comparative claims must be supported by recent, objective data</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Fair Comparison:</strong> Must compare similar features or like-for-like products</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Disparagement:</strong> Cannot denigrate competitors or use negative comparisons</span>
                            </li>
                          </ul>
                        </>
                      )}

                      {selectedBlog.id === 7 && (
                        <>
                          <p>Environmental clearance processes now include:</p>
                          <ul className="space-y-1 md:space-y-2 pl-4 md:pl-5">
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Coastal Projects:</strong> Special approvals required for CRZ (Coastal Regulation Zone) developments</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Green Building:</strong> Incentives for projects achieving IGBC or GRIHA certification</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Public Consultation:</strong> Mandatory for large projects exceeding 20,000 sqm</span>
                            </li>
                          </ul>
                        </>
                      )}

                      {selectedBlog.id === 8 && (
                        <>
                          <p>Data privacy requirements mandate:</p>
                          <ul className="space-y-1 md:space-y-2 pl-4 md:pl-5">
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Minimal Data:</strong> Only collect essential data needed for underwriting</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Storage Limits:</strong> Borrower data cannot be stored beyond loan tenure plus 7 years</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-2">
                              <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span><strong>Consent Management:</strong> Granular consent required for each data element and purpose</span>
                            </li>
                          </ul>
                        </>
                      )}
                    </div>
                  </section>
                </div>
                
                <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center gap-1 md:gap-2">
                    <FileTerminal className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                    Conclusion
                  </h3>
                  <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                    {selectedBlog.id === 1 && (
                      <>
                        <p>With Mumbai's real estate market projected to grow by 18% YoY, RERA compliance ensures smoother transactions and reduces litigation risks. Developers who proactively adapt to these changes will gain competitive advantage, while buyers benefit from enhanced protections.</p>
                        <p>The Mumbai Metropolitan Region (MMR) remains one of India's most dynamic real estate markets, with infrastructure projects like the Coastal Road and Navi Mumbai Airport driving growth. Proper compliance will be crucial to capitalize on these opportunities.</p>
                      </>
                    )}
                    
                    {selectedBlog.id === 2 && (
                      <p>For service-focused startups like Nexiaquest, LLPs offer the ideal balance of flexibility and reduced compliance burdens. However, businesses planning significant equity fundraising or considering IPO options in the future should evaluate Private Limited structures early in their lifecycle. Our corporate legal team can help analyze which structure best aligns with your business goals and growth trajectory.</p>
                    )}

                    {selectedBlog.id === 3 && (
                      <p>SEBI's enhanced advisor regulations raise professional standards in India's growing wealth management industry. While compliance requires investment in training and systems, it ultimately benefits both advisors and clients by increasing transparency and trust in financial markets.</p>
                    )}

                    {selectedBlog.id === 4 && (
                      <p>IRDAI's product guidelines represent a significant step forward for India's insurance sector, balancing innovation with consumer protection. Insurers who embrace these changes early will be well-positioned in the growing Indian market, particularly in emerging segments like cyber insurance and parametric products.</p>
                    )}

                    {selectedBlog.id === 5 && (
                      <p>The UGC regulations provide much-needed structure to India's booming EdTech sector while preserving innovation. Institutions that exceed compliance requirements through quality content and measurable outcomes will differentiate themselves in this competitive market.</p>
                    )}

                    {selectedBlog.id === 6 && (
                      <p>ASCI's updated guidelines provide clear rules for brands navigating India's complex digital marketing landscape. Ethical advertising practices that prioritize transparency will build long-term consumer trust while avoiding regulatory penalties.</p>
                    )}

                    {selectedBlog.id === 7 && (
                      <p>Mumbai's updated development regulations aim to balance growth with sustainability in one of the world's most densely populated urban areas. Developers who embrace green building practices and community engagement will find smoother approval processes and greater market acceptance.</p>
                    )}

                    {selectedBlog.id === 8 && (
                      <p>RBI's digital lending framework establishes important safeguards for India's rapidly growing fintech ecosystem. Lenders who implement robust data protection measures and transparent practices will build consumer trust while complying with these progressive regulations.</p>
                    )}
                    
                    <div className="bg-gray-50 p-3 md:p-4 rounded-lg mt-3 md:mt-4">
                      <p className="font-medium text-gray-900 mb-1 md:mb-2 flex items-center gap-1 md:gap-2">
                        <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                        Key Takeaway:
                      </p>
                      <p className="text-sm md:text-base">
                        {selectedBlog.id === 1 && "Developers should conduct quarterly RERA compliance audits to prevent costly legal disputes and project delays in Mumbai's competitive real estate market."}
                        {selectedBlog.id === 2 && "The LLP structure offers professional service firms like Nexiaquest Ventures optimal flexibility, but growth-stage companies should plan for potential conversion to Private Limited when scaling."}
                        {selectedBlog.id === 3 && "Early adoption of SEBI's certification requirements positions investment advisors for long-term success in India's rapidly growing wealth management sector."}
                        {selectedBlog.id === 4 && "Insurers should view IRDAI's product guidelines as an opportunity to innovate within a structured framework that enhances consumer trust."}
                        {selectedBlog.id === 5 && "EdTech providers that exceed minimum compliance standards will gain competitive advantage in India's $84 billion digital education market."}
                        {selectedBlog.id === 6 && "Clear, conspicuous disclosures in digital marketing not only comply with ASCI guidelines but also build consumer trust and brand credibility."}
                        {selectedBlog.id === 7 && "Sustainable development practices and early community engagement streamline approvals for MMR construction projects."}
                        {selectedBlog.id === 8 && "Data minimization and transparent consent management are now competitive advantages in India's digital lending market."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-500">
                  <BookOpen className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Legal Analysis</span>
                </div>
                <div className="flex gap-3 md:gap-4">
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-xs md:text-sm flex items-center gap-1">
                    <Printer className="w-4 h-4 md:w-5 md:h-5" />
                    Print Article
                  </button>
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-xs md:text-sm flex items-center gap-1">
                    <Share2 className="w-4 h-4 md:w-5 md:h-5" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <div className="py-12 md:py-20 bg-gray-50 relative">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-50/30 to-transparent -z-10"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-sky-50/30 to-transparent -z-10"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-blue-100 text-blue-900 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4 mx-auto">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Find Your <span className="text-blue-600">Answers</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Quick solutions to common legal questions
            </p>
            <div className="flex justify-center mt-4 md:mt-6">
              <div className="w-16 md:w-24 h-1 md:h-1.5 bg-sky-600 rounded-full"></div>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`bg-white rounded-lg md:rounded-xl shadow-sm border transition-all duration-300 ${
                  activeFaqIndex === index 
                    ? 'border-blue-300 shadow-md' 
                    : 'border-gray-200 hover:border-blue-200'
                }`}
              >
                <button
                  onClick={() => setActiveFaqIndex(activeFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 md:p-6 text-left"
                >
                  <div className="flex items-start">
                    <div className={`mr-3 md:mr-4 flex-shrink-0 ${
                      activeFaqIndex === index ? 'text-blue-600' : 'text-gray-400'
                    }`}>
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d={activeFaqIndex === index ? "M20 12H4" : "M12 4v16m8-8H4"} 
                        />
                      </svg>
                    </div>
                    <h3 className="text-base md:text-lg font-medium text-gray-900 flex-1">
                      {faq.question}
                    </h3>
                  </div>
                </button>
                
                <div 
                  className={`px-4 md:px-6 overflow-hidden transition-all duration-300 ${
                    activeFaqIndex === index ? 'max-h-96 pb-4 md:pb-6' : 'max-h-0'
                  }`}
                >
                  <div className="pl-7 md:pl-10">
                    <div className="prose prose-blue text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                      {faq.answer}
                    </div>
                    <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-100">
                      <div className="flex items-center">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-200 overflow-hidden mr-2 md:mr-3">
                          <img 
                            src={`https://i.pravatar.cc/150?img=${index + 30}`}
                            alt="User"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-xs md:text-sm text-gray-500">Asked by Client #{index + 100}</span>
                      </div>
                      <button 
                        onClick={() => setShowContactModal(true)}
                        className="text-xs md:text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center"
                      >
                        Need more help?
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-16 text-center">
            <div className="bg-white p-6 md:p-8 rounded-lg md:rounded-xl shadow-sm border border-gray-200 inline-block">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                <div className="flex items-center">
                  <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mr-2 md:mr-3" />
                  <p className="text-base md:text-lg font-medium text-gray-700">
                    Still have unanswered questions?
                  </p>
                </div>
                <button 
                  onClick={() => setShowContactModal(true)}
                  className="px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center"
                >
                  Contact Legal Team
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-1 md:ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="relative py-12 md:py-20 overflow-hidden bg-blue-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-white/20 text-white rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4 mx-auto backdrop-blur-sm">
              <span className="w-2 h-2 bg-blue-300 rounded-full mr-2"></span>
              CONNECT WITH US
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
              Have a Query? <span className="text-sky-300">Feel Free to Reach Us!</span>
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Our team is ready to assist you with any legal questions or concerns.
            </p>
          </div>

          <div className="max-w-md mx-auto bg-white rounded-lg md:rounded-xl shadow-xl md:shadow-2xl p-6 md:p-8 text-center">
            <div className="flex flex-col items-center space-y-4 md:space-y-6">
              <div className="bg-blue-100 p-3 md:p-4 rounded-full">
                <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Get in Touch</h3>
              <p className="text-sm md:text-base text-gray-600">Email us directly or give us a call</p>
              
              <div className="space-y-3 md:space-y-4 w-full">
                <a 
                  href="mailto:legal@example.com" 
                  className="block w-full px-4 py-2.5 md:px-6 md:py-3 bg-blue-100 text-blue-800 rounded-lg font-medium hover:bg-blue-200 transition-colors text-sm md:text-base"
                >
                  <Mail className="inline mr-1 md:mr-2 w-4 h-4 md:w-5 md:h-5" />
                  legal@example.com
                </a>
                
                <a 
                  href="tel:+91-XXXXXXXXXX" 
                  className="block w-full px-4 py-2.5 md:px-6 md:py-3 bg-blue-100 text-blue-800 rounded-lg font-medium hover:bg-blue-200 transition-colors text-sm md:text-base"
                >
                  <Phone className="inline mr-1 md:mr-2 w-4 h-4 md:w-5 md:h-5" />
                  +91-XXXXXXXXXX
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Modals */}
      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg md:rounded-xl max-w-md md:max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 md:p-6">
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {services.find(s => s.id === activeModal)?.title} Process
                </h3>
                <button 
                  onClick={() => setActiveModal(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
              
              <ol className="space-y-4 md:space-y-6">
                {services.find(s => s.id === activeModal)?.steps.map((step, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-6 w-6 md:h-8 md:w-8 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-200 transition-colors">
                        <span className="font-medium text-sm md:text-base">{index + 1}</span>
                      </div>
                    </div>
                    <span className="ml-3 md:ml-4 text-base md:text-lg text-gray-700 group-hover:text-blue-800 transition-colors">{step}</span>
                  </li>
                ))}
              </ol>

              <button 
                onClick={() => setActiveModal(null)}
                className="mt-6 md:mt-8 w-full px-4 py-2.5 md:px-6 md:py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg md:rounded-xl max-w-xs sm:max-w-md w-full p-4 md:p-6 transform hover:scale-[1.01] transition-transform">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Contact for Legal Consultation
              </h3>
              <button 
                onClick={() => setShowContactModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center group">
                <div className="bg-blue-100 p-2 md:p-3 rounded-full mr-3 md:mr-4 group-hover:bg-blue-200 transition-colors">
                  <Mail className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-500">Email</p>
                  <p className="text-sm md:text-base text-gray-900 font-medium group-hover:text-blue-700 transition-colors">legal@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="bg-blue-100 p-2 md:p-3 rounded-full mr-3 md:mr-4 group-hover:bg-blue-200 transition-colors">
                  <Phone className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-500">Phone</p>
                  <p className="text-sm md:text-base text-gray-900 font-medium group-hover:text-blue-700 transition-colors">+91-XXXXXXXXXX</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setShowContactModal(false)}
              className="mt-6 md:mt-8 w-full px-4 py-2.5 md:px-6 md:py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Legal;
