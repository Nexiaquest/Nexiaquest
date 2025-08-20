import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap, BarChart2, Users } from 'lucide-react';
import { FaSearch, FaPen, FaBriefcase, FaRocket } from "react-icons/fa";
import { FaGraduationCap, FaLaptopCode, FaUserGraduate, FaBookOpen, FaAward, FaClock, FaUsers } from 'react-icons/fa';// Replaced FaCertificate with FaAward which is available in react-icons/fa
import { FaChevronDown } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { FiSearch, FiArrowRight } from "react-icons/fi";
import { FaSeedling, FaBrain, FaHandshake, FaChartLine } from 'react-icons/fa';
import { GiGrowth } from 'react-icons/gi';
import Modal from 'react-modal';
Modal.setAppElement('#root'); // Add this line once
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMotionValue, useTransform, animate } from "framer-motion";


function EducationWebsite() {

  // Data for different sections
  const offerItems = [
    {
      icon: "📘",
      title: "Courses",
      description:
        "From school-level to college subjects including Science, Math, Commerce, and Arts. Includes interactive sessions, regular tests, doubt-clearing, and expert faculty support for academic excellence.",
    },
    {
      icon: "💼",
      title: "Internships",
      description: "Hands-on experience in real estate, finance, marketing, IT, and more.",
    },
    {
      icon: "🧑‍💼",
      title: "Counselling & Placement",
      description: "Career guidance, mental health support, and 3-stage placement assistance.",
    },
    {
      icon: "💻",
      title: "Skill Development",
      description: "Courses in MS Office, coding, communication & leadership across levels.",
    },
    {
      icon: "🎤",
      title: "Workshops & Seminars",
      description: "Short-term skill-based sessions, leadership, branding & tech tools.",
    },
    {
      icon: "⚡",
      title: "Crash Courses",
      description:
        "Fast-paced revision programs before key exams like JEE, NEET, CET, UPSC, and CA Foundation. Includes high-weightage topics, shortcuts, daily mock tests, and time-management strategies.",
    },
    {
      icon: "👩‍🏫",
      title: "Teacher Training",
      description:
        "Workshops on EdTech tools, classroom engagement, AI in education, inclusive practices, and assessment methods. Equips teachers with 21st-century skills and digital teaching capabilities.",
    },
    {
      icon: "📝",
      title: "Blogs & Learning Tools",
      description: "Educational blogs, dashboards, and AI-enabled Q&A for ongoing growth.",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? offerItems : offerItems.slice(0, 4);

  const steps = [
    { id: "step1", title: "Discover", icon: <FaSearch /> },
    { id: "step2", title: "Enroll", icon: <FaPen /> },
    { id: "step3", title: "Learn", icon: <FaBookOpen /> },
    { id: "step4", title: "Internships", icon: <FaBriefcase /> },
    { id: "step5", title: "Placement", icon: <FaRocket /> },
  ];

  const courseTypes = [
    {
      id: 'workshop-1day',
      name: 'Workshop (1 Day)',
      subTypes: [
        { id: 'tech-workshop', name: 'Technology Workshop' },
        { id: 'business-workshop', name: 'Business Workshop' },
        { id: 'creative-workshop', name: 'Creative Workshop' }
      ]
    },
    {
      id: 'skill-development',
      name: 'Skill Development',
      subTypes: [
        { id: 'soft-skills', name: 'Soft Skills' },
        { id: 'technical-skills', name: 'Technical Skills' },
        { id: 'language-skills', name: 'Language Skills' }
      ]
    },
    {
      id: 'counselling-placement',
      name: 'Counselling & Placement',
      subTypes: [
        { id: 'career-counselling', name: 'Career Counselling' },
        { id: 'resume-building', name: 'Resume Building' },
        { id: 'interview-prep', name: 'Interview Preparation' }
      ]
    },
    {
      id: 'internship',
      name: 'Internship',
      subTypes: [
        { id: 'tech-internship', name: 'Technology Internship' },
        { id: 'business-internship', name: 'Business Internship' },
        { id: 'research-internship', name: 'Research Internship' }
      ]
    },
    {
      id: 'workshop-seminar-conference',
      name: 'Workshop/Seminar/Conferences',
      subTypes: [
        { id: 'academic-conference', name: 'Academic Conference' },
        { id: 'industry-seminar', name: 'Industry Seminar' },
        { id: 'professional-workshop', name: 'Professional Workshop' }
      ]
    },
    {
      id: 'teachers-workshop',
      name: 'Teachers Workshop',
      subTypes: [
        { id: 'teaching-methods', name: 'Teaching Methods' },
        { id: 'curriculum-dev', name: 'Curriculum Development' },
        { id: 'edtech', name: 'Educational Technology' }
      ]
    },
    {
      id: 'regular-courses',
      name: 'Regular Courses',
      subTypes: [
        { id: 'diploma', name: 'Diploma Courses' },
        { id: 'certificate', name: 'Certificate Courses' },
        { id: 'degree', name: 'Degree Programs' }
      ]
    },
    {
      id: 'competitive-exams',
      name: 'Competitive Exams (JEE, NEET)',
      subTypes: [
        { id: 'jee', name: 'JEE Preparation' },
        { id: 'neet', name: 'NEET Preparation' },
        { id: 'gate', name: 'GATE Preparation' }
      ]
    },
    {
      id: 'medical-field',
      name: 'Medical Field Related',
      subTypes: [
        { id: 'medical-courses', name: 'Medical Courses' },
        { id: 'paramedical', name: 'Paramedical Training' },
        { id: 'healthcare', name: 'Healthcare Programs' }
      ]
    },
    {
      id: 'crash-course',
      name: 'Crash Course',
      subTypes: [
        { id: 'engineering-crash', name: 'Engineering Crash Course' },
        { id: 'medical-crash', name: 'Medical Crash Course' },
        { id: 'language-crash', name: 'Language Crash Course' }
      ]
    }
  ];

  const courses = [
    // Workshop (1 Day) Courses
    {
      id: 'ws1',
      title: 'Web Development Bootcamp (1 Day)',
      description: 'Intensive hands-on workshop covering HTML, CSS, and JavaScript fundamentals.',
      type: 'workshop-1day',
      subType: 'tech-workshop',
      level: 'Beginner',
      duration: '8 Hours',
      rating: 4.7,
      students: 215,
      isNew: true,
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 'ws2',
      title: 'Digital Marketing Workshop',
      description: 'Learn SEO, social media marketing, and Google Ads in one intensive day.',
      type: 'workshop-1day',
      subType: 'business-workshop',
      level: 'Intermediate',
      duration: '1 Day',
      rating: 4.5,
      students: 180,
      isNew: false,
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 'ws3',
      title: 'Photography Masterclass',
      description: 'One-day intensive workshop on professional photography techniques.',
      type: 'workshop-1day',
      subType: 'creative-workshop',
      level: 'All Levels',
      duration: '1 Day',
      rating: 4.8,
      students: 150,
      isNew: true,
      thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    },

    // Skill Development Courses
    {
      id: 'sd1',
      title: 'Effective Communication Skills',
      description: 'Master verbal and non-verbal communication for professional success.',
      type: 'skill-development',
      subType: 'soft-skills',
      level: 'Beginner',
      duration: '4 Weeks',
      rating: 4.6,
      students: 320,

      isNew: false,
      thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 'sd2',
      title: 'Python Programming Fundamentals',
      description: 'Learn Python from scratch with hands-on projects and exercises.',
      type: 'skill-development',
      subType: 'technical-skills',
      level: 'Beginner',
      duration: '6 Weeks',
      rating: 4.8,
      students: 450,

      isNew: true,
      thumbnail: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 'sd3',
      title: 'Business English Mastery',
      description: 'Improve your professional English for emails, presentations, and meetings.',
      type: 'skill-development',
      subType: 'language-skills',
      level: 'Intermediate',
      duration: '8 Weeks',
      rating: 4.4,
      students: 280,
      isNew: false,
      thumbnail: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    },

    // Counselling & Placement Courses
    {
      id: 'cp1',
      title: 'Career Path Assessment',
      description: 'Professional assessment to identify your ideal career path based on skills and personality.',
      type: 'counselling-placement',
      subType: 'career-counselling',
      level: 'All Levels',
      duration: '2 Sessions',
      rating: 4.9,
      students: 175,

      isNew: true,
      thumbnail: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 'cp2',
      title: 'Professional Resume Writing',
      description: 'Create an ATS-friendly resume that gets you interviews.',
      type: 'counselling-placement',
      subType: 'resume-building',
      level: 'All Levels',
      duration: '3 Hours',
      rating: 4.7,
      students: 420,

      isNew: false,
      thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 'cp3',
      title: 'Interview Success Bootcamp',
      description: 'Master behavioral interviews, technical rounds, and salary negotiations.',
      type: 'counselling-placement',
      subType: 'interview-prep',
      level: 'Intermediate',
      duration: '5 Sessions',
      rating: 4.8,
      students: 380,

      isNew: true,
      thumbnail: 'https://images.unsplash.com/photo-1522205408450-add114ad53fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    },

    // Internship Programs
    {
      id: 'in1',
      title: 'Software Development Internship',
      description: '3-month paid internship with real-world projects and mentorship.',
      type: 'internship',
      subType: 'tech-internship',
      level: 'Intermediate',
      duration: '3 Months',
      rating: 4.9,
      students: 120,

      isNew: true,
      thumbnail: 'https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 'in2',
      title: 'Digital Marketing Internship',
      description: 'Hands-on experience in SEO, content marketing, and social media management.',
      type: 'internship',
      subType: 'business-internship',
      level: 'Beginner',
      duration: '2 Months',
      rating: 4.6,
      students: 95,

      isNew: false,
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 'in3',
      title: 'Biotechnology Research Internship',
      description: 'Work with leading researchers on cutting-edge biotech projects.',
      type: 'internship',
      subType: 'research-internship',
      level: 'Advanced',
      duration: '6 Months',
      rating: 4.7,
      students: 65,

      isNew: true,
      thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    },

    // Workshop/Seminar/Conferences
    {
      id: 'sc1',
      title: 'AI & Machine Learning Conference',
      description: 'Annual conference featuring industry leaders and research presentations.',
      type: 'workshop-seminar-conference',
      subType: 'academic-conference',
      level: 'Advanced',
      duration: '2 Days',
      rating: 4.8,
      students: 500,

      isNew: true,
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 'sc2',
      title: 'FinTech Industry Seminar',
      description: 'Learn about the latest trends in financial technology from experts.',
      type: 'workshop-seminar-conference',
      subType: 'industry-seminar',
      level: 'Intermediate',
      duration: '1 Day',
      rating: 4.5,
      students: 280,

      isNew: false,
      thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 'sc3',
      title: 'Leadership Professional Workshop',
      description: 'Develop essential leadership skills for management roles.',
      type: 'workshop-seminar-conference',
      subType: 'professional-workshop',
      level: 'Intermediate',
      duration: '2 Days',
      rating: 4.7,
      students: 190,

      isNew: true,
      thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    },

    // Teachers Workshop
    {
      id: 'tw1',
      title: 'Innovative Teaching Methods',
      description: 'Learn modern pedagogical approaches for better student engagement.',
      type: 'teachers-workshop',
      subType: 'teaching-methods',
      level: 'All Levels',
      duration: '2 Days',
      rating: 4.6,
      students: 150,

      isNew: false,
      thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 'tw2',
      title: 'STEM Curriculum Development',
      description: 'Design effective STEM curricula for K-12 education.',
      type: 'teachers-workshop',
      subType: 'curriculum-dev',
      level: 'Intermediate',
      duration: '3 Days',
      rating: 4.7,
      students: 120,

      isNew: true,
      thumbnail: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 'tw3',
      title: 'EdTech Tools for Educators',
      description: 'Master digital tools to enhance classroom teaching.',
      type: 'teachers-workshop',
      subType: 'edtech',
      level: 'Beginner',
      duration: '1 Day',
      rating: 4.5,
      students: 210,

      isNew: true,
      thumbnail: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    },

    // Regular Courses
    {
      id: 'rc1',
      title: 'Diploma in Data Science',
      description: 'Comprehensive 1-year program covering Python, ML, and data visualization.',
      type: 'regular-courses',
      subType: 'diploma',
      level: 'Intermediate',
      duration: '12 Months',
      rating: 4.8,
      students: 180,

      isNew: false,
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 'rc2',
      title: 'Certificate in Digital Marketing',
      description: '3-month certification program covering all aspects of digital marketing.',
      type: 'regular-courses',
      subType: 'certificate',
      level: 'Beginner',
      duration: '3 Months',
      rating: 4.6,
      students: 320,

      isNew: true,
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 'rc3',
      title: 'B.Sc in Computer Science',
      description: '3-year degree program with specializations in AI and Cloud Computing.',
      type: 'regular-courses',
      subType: 'degree',
      level: 'Advanced',
      duration: '36 Months',
      rating: 4.9,
      students: 150,

      isNew: false,
      thumbnail: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    },

    // Competitive Exams (JEE, NEET)
    {
      id: 'ce1',
      title: 'JEE Advanced Complete Course',
      description: '2-year comprehensive program for IIT-JEE preparation.',
      type: 'competitive-exams',
      subType: 'jee',
      level: 'Advanced',
      duration: '24 Months',
      rating: 4.9,
      students: 450,

      isNew: false,
      thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 'ce2',
      title: 'NEET Ultimate Preparation',
      description: 'Complete medical entrance exam preparation with expert faculty.',
      type: 'competitive-exams',
      subType: 'neet',
      level: 'Advanced',
      duration: '24 Months',
      rating: 4.8,
      students: 520,

      isNew: true,
      thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 'ce3',
      title: 'GATE Computer Science',
      description: 'Comprehensive coaching for GATE CSE with test series.',
      type: 'competitive-exams',
      subType: 'gate',
      level: 'Advanced',
      duration: '12 Months',
      rating: 4.7,
      students: 380,

      isNew: false,
      thumbnail: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    },

    // Medical Field Related
    {
      id: 'mf1',
      title: 'MBBS Foundation Course',
      description: 'Pre-medical program covering essential concepts for aspiring doctors.',
      type: 'medical-field',
      subType: 'medical-courses',
      level: 'Advanced',
      duration: '12 Months',
      rating: 4.8,
      students: 210,

      isNew: false,
      thumbnail: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 'mf2',
      title: 'Diploma in Nursing',
      description: '2-year paramedical program with hospital training.',
      type: 'medical-field',
      subType: 'paramedical',
      level: 'Intermediate',
      duration: '24 Months',
      rating: 4.7,
      students: 180,

      isNew: true,
      thumbnail: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 'mf3',
      title: 'Healthcare Management',
      description: 'Learn hospital administration and healthcare systems management.',
      type: 'medical-field',
      subType: 'healthcare',
      level: 'Intermediate',
      duration: '6 Months',
      rating: 4.5,
      students: 150,

      isNew: false,
      thumbnail: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    },

    // Crash Course
    {
      id: 'cc1',
      title: 'Engineering Crash Course (2 Months)',
      description: 'Fast-track preparation for engineering entrance exams.',
      type: 'crash-course',
      subType: 'engineering-crash',
      level: 'Intermediate',
      duration: '2 Months',
      rating: 4.6,
      students: 320,

      isNew: true,
      thumbnail: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 'cc2',
      title: 'Medical Crash Course (3 Months)',
      description: 'Intensive NEET/AIIMS preparation with expert faculty.',
      type: 'crash-course',
      subType: 'medical-crash',
      level: 'Advanced',
      duration: '3 Months',
      rating: 4.7,
      students: 280,

      isNew: false,
      thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 'cc3',
      title: 'French Language Intensive',
      description: '3-month crash course covering A1 to B1 level French.',
      type: 'crash-course',
      subType: 'language-crash',
      level: 'Beginner',
      duration: '3 Months',
      rating: 4.5,
      students: 190,

      isNew: true,
      thumbnail: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80'
    }
  ];



  const testimonialCards = [
    {
      id: 1,
      quote: "The web development bootcamp helped me transition careers in just 6 months. The project-based learning was exactly what I needed.",
      name: "Sarah Johnson",
      role: "Frontend Developer",
      initials: "SJ",
      featured: true,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      quote: "Never thought I could learn data science online, but the structured curriculum and mentor support made it possible.",
      name: "Raj Patel",
      role: "Data Analyst",
      initials: "RP",
      featured: false,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      quote: "As a working professional, the flexible schedule allowed me to upskill without quitting my job. Landed a promotion after completing the course!",
      name: "Marcus Chen",
      role: "Product Manager",
      initials: "MC",
      featured: true,
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      id: 4,
      quote: "The UX design course had industry-relevant projects that became the highlight of my portfolio. Got hired within a month of graduating!",
      name: "Elena Rodriguez",
      role: "UX Designer",
      initials: "ER",
      featured: false,
      image: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
      id: 5,
      quote: "The business certification gave me confidence to start my own company. The alumni network continues to be invaluable.",
      name: "David Kim",
      role: "Founder, Edutech Startup",
      initials: "DK",
      featured: true,
      image: "https://randomuser.me/api/portraits/men/55.jpg"
    }
  ];


  const facultyData = [
    {
      name: "Dr. Ananya Desai",
      role: "NEET Biology",
      expertise: "Human Anatomy | Genetics",
      stats: "98% success rate | 15+ years",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      profile:
        "Dr. Ananya Desai is an expert in Human Anatomy and Genetics with over 15 years of experience and a 98% success rate in NEET Biology preparation.",
    },

    {
      name: "Dr. Vikram Joshi",
      role: "JEE Mathematics",
      expertise: "Calculus | Algebra",
      stats: "IIT Bombay | 100+ Selections",
      image:
        "https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      profile:
        "Dr. Vikram Joshi specializes in JEE Mathematics with expertise in Calculus and Algebra, an IIT Bombay alumnus with over 100 successful selections.",
    },
    {
      name: "Prof. Priya Menon",
      role: "UPSC Mentorship",
      expertise: "Ethics | Essay Writing",
      stats: "Former IAS | 200+ Selections",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      profile:
        "Prof. Priya Menon provides UPSC mentorship focusing on Ethics and Essay Writing, a former IAS officer with 200+ successful selections.",
    },
    {
      name: "Dr. Arjun Patel",
      role: "CA Foundation",
      expertise: "Accounts | Economics",
      stats: "Chartered Accountant | 12+ years",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      profile:
        "Dr. Arjun Patel is a Chartered Accountant with over 12 years of expertise in Accounts and Economics, specializing in CA Foundation coaching.",
    },
    {
      name: "Prof. Neha Sharma",
      role: "CLAT & Law",
      expertise: "Legal Aptitude | Logical Reasoning",
      stats: "NLU Gold Medalist | 8+ years",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      profile:
        "Prof. Neha Sharma is an expert in CLAT & Law with specialization in Legal Aptitude and Logical Reasoning, NLU Gold Medalist with 8+ years of experience.",
    },
  ];

  const faqs = [
    {
      question: "How do I choose the right learning path?",
      answer: "Our platform offers a personalized assessment that evaluates your skills, interests, and career goals to recommend the most suitable learning path for you."
    },
    {
      question: "What kind of support will I receive during the program?",
      answer: "You'll have access to mentors, peer support groups, and our learning community. Additionally, our support team is available to answer any questions you may have."
    },
    {
      question: "Are there any prerequisites for the courses?",
      answer: "Prerequisites vary by course. Some beginner courses require no prior knowledge, while advanced courses may require foundational understanding of the subject."
    },
    {
      question: "Can I get a certificate upon completion?",
      answer: "Yes, all our programs offer certificates of completion that you can add to your resume or LinkedIn profile."
    },
    {
      question: "How long does it take to complete a course?",
      answer: "Course duration varies based on the program. Most courses are designed to be completed within a few weeks to a few months."
    },
    {
      question: "What payment options are available?",
      answer: "We accept various payment methods, including credit/debit cards, PayPal, and bank transfers."
    }
  ];




  const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [isMounted, setIsMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourseType, setSelectedCourseType] = useState("");
  const [selectedSubType, setSelectedSubType] = useState("");
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const buttonRef = useRef(null);

  // Example data arrays mentioned in your code context (not provided here)
  // const testimonialCards = [...];
  // const courses = [...];
  // const heroSlides = [...];
  // const featuredCourses = [...];
  // const images = [...];

  // Auto-slide effect for heroSlides
  useEffect(() => {
    setIsMounted(true);

    const interval = setInterval(() => {
      if (isMounted && heroSlides?.length) {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }
    }, 5000);

    return () => {
      setIsMounted(false);
      clearInterval(interval);
    };
  }, [isMounted]);

  // In-view course carousel auto-slide
  useEffect(() => {
    if (inView && featuredCourses?.length) {
      const interval = setInterval(() => {
        setCurrentCourse((prev) => (prev + 1) % featuredCourses.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [inView]);

  // Auto-rotate images with preloading
  useEffect(() => {
    const loadImages = async () => {
      const promises = images.map((img) => {
        return new Promise((resolve, reject) => {
          const imgObj = new Image();
          imgObj.src = img;
          imgObj.onload = resolve;
          imgObj.onerror = reject;
        });
      });
      await Promise.all(promises);
      setImagesLoaded(true);
    };
    loadImages();
  }, []);

  // Text animation effect
  useEffect(() => {
    const animation = animate(0, 1, {
      duration: 1.5,
      onUpdate: (latest) => {
        document.documentElement.style.setProperty(
          "--gradient-progress",
          `${latest * 100}%`
        );
        document.documentElement.style.setProperty("--text-gradient-progress", latest);
      },
    });
    return () => animation.stop();
  }, []);

  // Handler functions
  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex < testimonialCards.length - 1 ? prevIndex + 1 : 0
    );
  };

  const filteredCourses = courses.filter((course) => {
    const matchesType = !selectedCourseType || course.type === selectedCourseType;
    const matchesSearch =
      !searchQuery ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const scrollToCourses = () => {
    const element = document.getElementById("courses-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleFAQ = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  const scrollToPrograms = () => {
    programsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Background shape animation variants
  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Slider settings for courses carousel
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    appendDots: (dots) => (
      <ul className="flex justify-center mt-4 gap-2">{dots.slice(0, 3)}</ul>
    ),
    customPaging: (i) => (
      <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-sky-500 transition"></button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  // FacultySliderSection Component
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const openModal = (faculty) => {
    setSelectedFaculty(faculty);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedFaculty(null);
  };

  const sliderSettingsFaculty = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  // Error Boundary Component
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true };
    }

    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
      return this.props.children;
    }
  }


  return (
    <div className="relative bg-white font-gellix  h-screen w-full m-0 p-0 overflow-x-hidden">
      <div>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-4 sm:p-8 relative overflow-hidden">
          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-4 sm:p-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative z-10">
              {/* Image Holder Container */}
              <div className="relative w-64 h-96 sm:w-80 sm:h-[28rem] lg:w-96 lg:h-[32rem] mx-auto lg:mx-0">
                {/* Main Image Holder */}
                <div className="relative h-full w-full bg-white rounded-t-[5rem] overflow-hidden shadow-xl flex items-center justify-center z-20 border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Students learning"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Top Left Blob with Stack of Books and Ladder Image */}
                <div className="absolute -top-8 -left-8 w-40 h-40 z-30 animate-float flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Blob Shape */}
                    <div className="absolute inset-0 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] overflow-hidden opacity-80">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1677572452827-899002f7ca12?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Stack of books with ladder"
                        className="w-full h-full object-cover mix-blend-multiply"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>




                {/* Bottom Right Blob with Education Tree Image */}
                <div className="absolute -bottom-8 -right-8 w-44 h-44 z-30 animate-float animation-delay-2000 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 rounded-[60%_40%_40%_60%_/_60%_40%_60%_40%] filter opacity-80 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                        alt="Education tree with colorful books"
                        className="w-full h-full object-cover mix-blend-multiply"
                      />
                    </div>
                  </div>
                </div>



                {/* Floating Rectangular Stat - Bottom Left */}
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 p-3 rounded-lg shadow-lg z-30 w-28 h-20 flex flex-col justify-center animate-float animation-delay-1000">
                  <div className="text-sm font-bold text-gray-800">Courses</div>
                  <div className="text-lg font-bold text-gray-800 mt-1">13.5k+</div>
                </div>
              </div>

              {/* Right Content (unchanged) */}
              <div className="flex-1 px-4 sm:px-0 z-20">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-900 mb-6 leading-tight">
                  Learn. Evolve. Lead.
                </h1>

                <div className="space-y-4 mb-8">
                  <h2 className="text-lg sm:text-xl text-gray-700">
                    Empowering You with Skills That Matter
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-700">
                    Whether you're starting out or leveling up, our expert-led courses help you build practical knowledge, boost your career, and stay ahead in a fast-changing world.
                  </p>
                </div>

                <button
                  onClick={scrollToCourses}
                  className="inline-flex items-center bg-blue-500 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg z-20"
                >
                  Explore All Courses
                </button>
                <div className="flex flex-wrap justify-center gap-6 mt-10">
                  {/* Expert Mentors */}
                  <div className="flex flex-col items-center bg-white bg-opacity-90 px-6 py-4 rounded-xl shadow-md w-40">
                    <h3 className="text-3xl font-bold text-blue-600">850+</h3>
                    <p className="text-sm text-gray-700 mt-1 text-center">Expert Mentors</p>
                  </div>

                  {/* Active Learners */}
                  <div className="flex flex-col items-center bg-white bg-opacity-90 px-6 py-4 rounded-xl shadow-md w-40">
                    <h3 className="text-3xl font-bold text-green-600">75k+</h3>
                    <p className="text-sm text-gray-700 mt-1 text-center">Active Learners</p>
                  </div>

                  {/* Certifications Issued */}
                  <div className="flex flex-col items-center bg-white bg-opacity-90 px-6 py-4 rounded-xl shadow-md w-40">
                    <h3 className="text-3xl font-bold text-purple-600">110k+</h3>
                    <p className="text-sm text-gray-700 mt-1 text-center">Certifications Issued</p>
                  </div>

                  {/* Success Rate */}
                  <div className="flex flex-col items-center bg-white bg-opacity-90 px-6 py-4 rounded-xl shadow-md w-40">
                    <h3 className="text-3xl font-bold text-pink-600">98%</h3>
                    <p className="text-sm text-gray-700 mt-1 text-center">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tailwind Animation Config */}
            <style jsx>{`
              @keyframes float {
              0%, 100% { transform: translateY(0) rotate(0deg); }
               50% { transform: translateY(-15px) rotate(2deg); }
               }
              .animate-float {
               animation: float 6s ease-in-out infinite;
              }
             .animation-delay-1000 {
               animation-delay: 1s;
                }
            .animation-delay-2000 {
            animation-delay: 2s;
             }
           `}</style>
          </div>
        </div>

        {/* About Us Section */}
        <section
          className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(186, 230, 253, 0.2) 0%, rgba(255, 255, 255, 1) 40%)'
          }}
        >
          <div className="absolute -left-32 top-1/3 text-[20rem] font-black text-sky-100 z-0">
            ⟁
          </div>
          <div className="absolute -right-32 bottom-1/4 text-[20rem] font-black text-sky-100 z-0">
            ⬡
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-xl text-blue-900 mb-2">The Growth Ecosystem</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Where <span className="text-sky-700">Careers</span> Take Shape
              </h3>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-gray-600 leading-relaxed">
                  We cultivate an environment where every learner can thrive, creating symbiotic
                  relationships between curiosity, knowledge, and real-world application.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left side images with overlapping arrangement */}
              <div className="relative h-full min-h-[500px]">
                {/* First image (top-left) */}
                <div className="absolute top-0 left-0 w-80 h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white transform rotate-3 hover:rotate-0 transition-all duration-500 z-20">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="Collaborative learning"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white z-10">
                    <h4 className="font-bold text-lg">Collaborative Growth</h4>
                  </div>
                </div>

                {/* Second image (middle-right) */}
                <div className="absolute top-1/4 right-10 w-72 h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-white transform -rotate-6 hover:rotate-0 transition-all duration-500 z-10">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="Creative thinking"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white z-10">
                    <h4 className="font-bold text-lg">Creative Thinking</h4>
                  </div>
                </div>

                {/* Third image (bottom-center) */}
                <div className="absolute bottom-20 left-20 w-80 h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="Hands-on learning"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white z-10">
                    <h4 className="font-bold text-lg">Practical Skills</h4>
                  </div>
                </div>
              </div>

              {/* Right side content */}
              <div className="relative h-full flex items-center justify-center px-4">
                <div className="max-w-lg bg-white rounded-xl p-10 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Our Educational Philosophy</h3>
                    <p className="text-gray-600 italic text-xl">
                      "Built on proven foundations to bridge academia and industry"
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="border-l-4 border-sky-200 pl-5">
                      <h4 className="font-semibold text-gray-900 mb-3 text-xl">Foundational Development</h4>
                      <ul className="text-gray-600 space-y-2 text-lg">
                        <li className="flex items-start"><span className="mr-2">•</span><span>Build confidence through core competency development</span></li>
                        <li className="flex items-start"><span className="mr-2">•</span><span>Small-step mastery before complex challenges</span></li>
                      </ul>
                    </div>
                    <div className="border-l-4 border-sky-200 pl-5">
                      <h4 className="font-semibold text-gray-900 mb-3 text-xl">Targeted Growth</h4>
                      <ul className="text-gray-600 space-y-2 text-lg">
                        <li className="flex items-start"><span className="mr-2">•</span><span>Personalized feedback to strengthen weak areas</span></li>
                        <li className="flex items-start"><span className="mr-2">•</span><span>Adaptive learning that evolves with each student</span></li>
                      </ul>
                    </div>
                    <div className="border-l-4 border-sky-200 pl-5">
                      <h4 className="font-semibold text-gray-900 mb-3 text-xl">Collaborative Learning</h4>
                      <ul className="text-gray-600 space-y-2 text-lg">
                        <li className="flex items-start"><span className="mr-2">•</span><span>Collaborative projects across disciplines</span></li>
                        <li className="flex items-start"><span className="mr-2">•</span><span>Peer learning communities for diverse perspectives</span></li>
                      </ul>
                    </div>
                    <div className="border-l-4 border-sky-200 pl-5">
                      <h4 className="font-semibold text-gray-900 mb-3 text-xl">Career Alignment</h4>
                      <ul className="text-gray-600 space-y-2 text-lg">
                        <li className="flex items-start"><span className="mr-2">•</span><span>Aligns training with hiring cycles</span></li>
                        <li className="flex items-start"><span className="mr-2">•</span><span>Portfolio development timed to market opportunities</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <div className="w-3/4 h-1 bg-gradient-to-r from-transparent via-sky-300 to-transparent rounded-full"></div>
            </div>
          </div>
        </section>


        {/* Our Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-100">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              {/* Our Services Section */}
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We <span className="text-blue-900">Offer</span></h3>
              <p className="text-blue-800 max-w-3xl mx-auto">
                Discover our comprehensive range of services designed to meet your needs and exceed expectations.
              </p>
            </div>

            <div className="grid grid-cols-6 gap-6">
              {/* Row 1 - Main Featured Card */}
              <div className="col-span-6 md:col-span-4">
                <div className="bg-white p-8 rounded-xl border border-blue-100 shadow-md text-center transition-all hover:scale-[1.02] hover:shadow-lg hover:border-blue-200 h-full group">
                  <div className="text-5xl mb-6 text-blue-600 group-hover:text-blue-800">{offerItems[0].icon}</div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3 group-hover:text-blue-700">{offerItems[0].title}</h3>
                  <p className="text-gray-700 mb-6">{offerItems[0].description}</p>
                </div>
              </div>
              {/* Row 1 - Secondary Featured Card */}
              <div className="col-span-6 md:col-span-2">
                <div className="bg-white p-8 rounded-xl border border-blue-100 shadow-md text-center transition-all hover:scale-[1.02] hover:shadow-lg hover:border-blue-200 h-full group">
                  <div className="text-5xl mb-6 text-blue-600 group-hover:text-blue-800">{offerItems[1].icon}</div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3 group-hover:text-blue-700">{offerItems[1].title}</h3>
                  <p className="text-gray-700 mb-6">{offerItems[1].description}</p>
                </div>
              </div>
              {/* Row 2 - Three Cards */}
              {offerItems.slice(2, 5).map((item, index) => (
                <div key={index} className="col-span-6 sm:col-span-3 md:col-span-2">
                  <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-md text-center transition-all hover:scale-[1.02] hover:shadow-lg hover:border-blue-200 h-full group">
                    <div className="text-4xl mb-4 text-blue-600 group-hover:text-blue-800">{item.icon}</div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-700">{item.title}</h3>
                    <p className="text-gray-700 mb-4">{item.description}</p>
                  </div>
                </div>
              ))}
              {/* Row 3 - Two Cards */}
              {offerItems.slice(5, 7).map((item, index) => (
                <div key={index} className="col-span-6 sm:col-span-3">
                  <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-md text-center transition-all hover:scale-[1.02] hover:shadow-lg hover:border-blue-200 h-full group">
                    <div className="text-4xl mb-4 text-blue-600 group-hover:text-blue-800">{item.icon}</div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-700">{item.title}</h3>
                    <p className="text-gray-700 mb-4">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Gradient Footer Line */}
            <div className="mt-16 flex justify-center">
              <div className="w-3/4 h-1 bg-gradient-to-r from-transparent via-sky-300 to-transparent rounded-full"></div>
            </div>
          </div>
        </section>


        {/* Courses Search Section */}
        <section id="courses-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              {/* Title on the left */}
              <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 md:mb-0">Explore Our Course</h3>

              {/* Search and filter on the right */}
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                {/* Search bar */}
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Search courses..."
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-sky-500 focus:ring-sky-500 pr-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <svg
                    className="absolute right-3 top-3.5 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {/* Category dropdown */}
                <select
                  className="block p-3 border border-gray-300 rounded-lg shadow-sm focus:border-sky-500 focus:ring-sky-500"
                  value={selectedCourseType}
                  onChange={(e) => {
                    setSelectedCourseType(e.target.value);
                    setSelectedSubType('');
                  }}
                >
                  <option value="">All Categories</option>
                  {courseTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Rest of the existing course cards content */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              {filteredCourses.length > 0 ? (
                <div>
                  <Slider
                    {...sliderSettings}
                    className="px-2"
                    slidesToShow={3}
                    rows={2}
                    slidesPerRow={1}
                    responsive={[
                      {
                        breakpoint: 1024, // lg breakpoint
                        settings: {
                          slidesToShow: 2,
                          rows: 2
                        }
                      },
                      {
                        breakpoint: 768, // md breakpoint
                        settings: {
                          slidesToShow: 1,
                          rows: 2
                        }
                      }
                    ]}
                  >
                    {filteredCourses.map((course) => (
                      <div key={course.id} className="px-2 h-full">
                        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 h-full flex flex-col">
                          {/* Course card content remains the same */}
                          <div className="relative h-48 overflow-hidden flex-shrink-0">
                            <img
                              src={course.thumbnail}
                              alt={course.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = getDefaultThumbnail(course.type);
                              }}
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                              <span className="text-xs font-medium text-white bg-sky-600 px-2 py-1 rounded">
                                {course.level}
                              </span>
                              {course.isNew && (
                                <span className="ml-2 text-xs font-medium text-white bg-green-500 px-2 py-1 rounded">
                                  NEW
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="p-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-lg mb-2 line-clamp-2">{course.title}</h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{course.description}</p>
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center">
                                <span className="text-sm text-gray-500 mr-2">Duration:</span>
                                <span className="text-sm font-medium">{course.duration}</span>
                              </div>
                              <div className="flex items-center">
                                <div className="text-yellow-500 mr-1">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i}>
                                      {i < Math.floor(course.rating) ? '★' : '☆'}
                                    </span>
                                  ))}
                                </div>
                                <span className="text-xs text-gray-500">
                                  ({course.students}+)
                                </span>
                              </div>
                            </div>
                            <div className="flex justify-between items-center mt-auto">
                              <a
                                href={`https://wa.me/1234567890?text=I'm interested in ${encodeURIComponent(course.title)} course`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center"
                              >
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                WhatsApp Inquiry
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-100 rounded-lg border border-dashed border-gray-300">
                  <p className="text-gray-500">
                    {selectedCourseType ? "No courses available in this category" : "Please select a course type to view options"}
                  </p>
                  <button
                    className="mt-4 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-sm font-medium transition"
                    onClick={() => {
                      setSelectedCourseType('');
                      setSelectedSubType('');
                    }}
                  >
                    Browse All Courses
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Your Journey Section */}
        <section className="bg-[#f3f7fd] pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Combined Section Container */}
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start pt-10">
              {/* Left Side - Your Journey — Our Offer */}
              <div className="flex-1 w-full">
                <div className="max-w-6xl mx-auto flex flex-col items-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-16">
                    Your Journey —  <span className="text-sky-700">Our Offer</span>
                  </h3>
                  <div className="flex flex-col lg:flex-row justify-center items-start gap-12 lg:gap-16">
                    <div className="flex flex-col space-y-6 relative min-w-[240px]">
                      <div className="absolute left-[85px] top-2 bottom-2 border border-gray-300 pointer-events-none"></div>
                      {steps.map((step, index) => (
                        <motion.div
                          key={index}
                          onClick={() => document.getElementById(step.id)?.scrollIntoView({ behavior: "smooth" })}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.2 }}
                          viewport={{ once: true }}
                          className="relative z-10 bg-gray-100 rounded-md shadow-sm px-6 py-3 w-48 text-left text-black flex items-center justify-between hover:bg-sky-50 hover:text-sky-700 transition-all duration-300 ease-in-out cursor-pointer"
                        >
                          <span className="font-normal">{step.title}</span>
                          <span className="text-sky-500 text-lg">{step.icon}</span>
                        </motion.div>
                      ))}
                    </div>
                    <motion.div
                      className="flex-1 space-y-6 text-left text-gray-900 max-w-lg"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div id="step1">
                        <h3 className="font-semibold text-gray-900">Step 1: Discover</h3>
                        <p className="text-sm text-gray-700">
                          Explore structured learning paths, trending programs, and blogs
                          to find what fits you best.
                        </p>
                      </div>

                      <div id="step2">
                        <h3 className="font-semibold text-gray-900">Step 2: Enroll</h3>
                        <p className="text-sm text-gray-700">
                          Register easily through our platform and select batches that
                          match your schedule and goals.
                        </p>
                      </div>

                      <div id="step3">
                        <h3 className="font-semibold text-gray-900">
                          Step 3: Learn & Practice
                        </h3>
                        <p className="text-sm text-gray-700">
                          Build practical skills through live sessions, workshops, and
                          hands-on tools and resources.
                        </p>
                      </div>

                      <div id="step4">
                        <h3 className="font-semibold text-gray-900">Step 4: Internships</h3>
                        <p className="text-sm text-gray-700">
                          Get industry exposure in real fields like finance, IT, real
                          estate, and social impact.
                        </p>
                      </div>

                      <div id="step5">
                        <h3 className="font-semibold text-gray-900">
                          Step 5: Placement Support
                        </h3>
                        <p className="text-sm text-gray-700">
                          Submit your CV, crack interviews, and launch your career with
                          mentorship and support.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Right Side - Core Values */}
              <div className="flex-1 w-full lg:mt-0">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Our Core <span className="text-sky-700">Values</span>
                  </h2>

                  <p className="max-w-2xl mx-auto text-lg text-gray-600">
                    The foundation of everything we do to help you succeed
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {[
                    {
                      icon: <FaSeedling className="text-5xl text-white p-2 bg-gradient-to-r from-blue-500 to-indigo-600  rounded-full" />,
                      title: "Growth Mindset",
                      desc: "We believe every student can improve with the right guidance and effort.",
                      bg: "bg-gradient-to-br from-blue-50 to-indigo-50",
                      border: "border-l-4 border-blue-500"
                    },
                    {
                      icon: <FaHandshake className="text-5xl text-white p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" />,
                      title: "Integrity First",
                      desc: "Honest feedback and ethical practices in all our programs.",
                      bg: "bg-gradient-to-br from-blue-50 to-indigo-50",
                      border: "border-l-4 border-blue-500"
                    },
                    {
                      icon: <FaChartLine className="text-5xl text-white p-2 bg-gradient-to-r from-blue-500 to-indigo-600  rounded-full" />,
                      title: "Proven Results",
                      desc: "Decades of data-driven teaching methodologies.",
                      bg: "bg-gradient-to-br from-blue-50 to-indigo-50",
                      border: "border-l-4 border-blue-500"
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`${item.bg} ${item.border} p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col`}
                    >
                      <div className="mb-6 -mt-12 flex justify-center">
                        <div className="p-1 bg-white rounded-full shadow-md">
                          {item.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                      <p className="text-gray-600 text-center">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spacer between sections */}
        <div className="py-4 bg-[#f3f7fd]"></div>

        {/* Faculty Slider Section */}
        <section className="py-10 bg-sky-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-xl text-gray-900 mb-2">Learn From</h2>
              <h3 className="text-3xl font-bold text-blue-900">Our Expert Faculty</h3>
            </div>

            {/* Modal Popup */}
            {modalOpen && selectedFaculty && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative mx-4">
                  <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-blue-700 text-2xl font-bold"
                    onClick={closeModal}
                    aria-label="Close Modal"
                  >
                    &times;
                  </button>
                  <img
                    src={selectedFaculty.image}
                    alt={selectedFaculty.name}
                    className="w-28 h-28 object-cover rounded mx-auto mb-4"
                  />
                  <h4 className="text-lg font-bold text-blue-900 mb-1">{selectedFaculty.name}</h4>
                  <p className="text-sky-700 font-medium">{selectedFaculty.role}</p>
                  <p className="text-sm text-sky-400 mb-2">{selectedFaculty.expertise}</p>
                  <p className="text-xs text-gray-500 mb-2">{selectedFaculty.stats}</p>
                  <p className="text-gray-600 mb-2">{selectedFaculty.profile}</p>
                </div>
              </div>
            )}

            {/* Slider */}
            <Slider {...sliderSettings}>
              {facultyData.map((faculty, index) => (
                <div key={index} className="px-2">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={faculty.image}
                        alt={faculty.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/50 p-4 flex flex-col justify-end">
                        <h4 className="font-bold text-white drop-shadow-sm">{faculty.name}</h4>
                        <p className="text-sky-200 text-sm drop-shadow-sm">{faculty.role}</p>
                      </div>

                    </div>
                    <div className="p-4 flex-grow flex flex-col justify-between">
                      <div>
                        <p className="text-sm text-sky-600 font-medium mb-1">{faculty.expertise}</p>
                        <p className="text-xs text-gray-500 mb-3">{faculty.stats}</p>
                      </div>
                      <button
                        onClick={() => openModal(faculty)}
                        className="w-full py-2 text-xs bg-sky-600 hover:bg-sky-700 text-white rounded transition-colors mt-auto"
                        aria-label={`View profile of ${faculty.name}`}
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>



        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
          {/* Background Elements */}
          <motion.div
            className="absolute right-20 bottom-1/3 w-72 h-72 rounded-full border-8 border-blue-200 opacity-30 z-0"
            animate={{
              y: [0, -15, 0],
              rotate: 45
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Light Blue Abstract Path */}
          <motion.svg
            className="absolute left-1/4 top-1/2 w-80 h-80 opacity-30 z-0"
            viewBox="0 0 200 200"
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <path
              d="M20,100 Q50,50 100,20 Q150,50 180,100 Q150,150 100,180 Q50,150 20,100 Z"
              stroke="#7DD3FC"  // Light blue
              strokeWidth="2"
              fill="none"
            />
          </motion.svg>

          {/* Geometric Triangle Pattern */}
          <div className="absolute inset-0 overflow-hidden z-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-16 h-16 bg-blue-200 opacity-25"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 10 + Math.random() * 10,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
              />
            ))}
          </div>
          <div className="max-w-4xl w-full mx-auto relative z-10 flex flex-col items-center">
            {/* Header */}
            <div className="text-center w-full mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                What Our Students Say
              </h2>
              <p className="text-gray-900 text-xl max-w-2xl mx-auto">
                Hear from our community about their transformative learning experiences
              </p>
            </div>

            {/* Card Container */}
            <div className="relative w-full max-w-4xl h-96 mb-10"> {/* Fixed height container */}
              {testimonialCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  className={`absolute inset-0 bg-white rounded-xl shadow-lg p-10 flex flex-col items-center ${index === currentCardIndex ? 'z-10' : 'z-0 opacity-0'}`}
                  animate={{
                    opacity: index === currentCardIndex ? 1 : 0,
                    y: index === currentCardIndex ? 0 : 20
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Profile image */}
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-100 mb-8">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Quote */}
                  <div className="text-center mb-10 flex-grow flex flex-col justify-center">
                    <p className="text-gray-700 italic text-xl md:text-2xl leading-relaxed">
                      "{card.quote}"
                    </p>
                  </div>

                  {/* Name and role */}
                  <div className="text-center">
                    <h3 className="font-bold text-2xl text-blue-900 mb-2">
                      {card.name}
                    </h3>
                    <p className="text-blue-600 text-lg">
                      {card.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Always visible down arrow that loops through cards */}
            <motion.button
              onClick={handleNextCard}
              className="text-blue-500 hover:text-blue-700 transition-colors mt-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronDown className="text-4xl animate-bounce" />
              <span className="sr-only">Next testimonial</span>
            </motion.button>
          </div>
        </section>



        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
            {/* Left side - Title and description */}
            <div className="md:w-1/3">
              {/* FAQ Section */}
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 text-left">Frequently Asked Questions</h2>
              <p className="text-gray-800 text-left">
                Our FAQ section covers everything you need to know — from course enrollment, fees, and class formats to internships, certifications, and support.
                Whether you're a student, parent, or working professional, get clear answers to the most common queries.
              </p>
            </div>

            {/* Right side - FAQ content */}
            <div className="md:w-2/3">
              {/* All FAQ items including the first one now have dropdown arrows */}
              <div className="space-y-4">
                {/* First FAQ item (previously featured question) now with dropdown */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none group"
                    onClick={() => toggleFAQ(0)}  // Assuming this is index 0
                  >
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-sky-600 transition-colors">
                      How do I get started with your product?
                    </h3>
                    <div className="flex-shrink-0 ml-4">
                      <svg
                        className={`w-5 h-5 text-sky-600 transition-transform duration-300 ${activeFaqIndex === 0 ? 'transform rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div className={`px-6 pb-4 transition-all duration-300 ${activeFaqIndex === 0 ? 'block' : 'hidden'}`}>
                    <p className="text-gray-600">
                      Sign up on our website, explore features, customize your profile, and start using our product. We're here to help!
                    </p>
                  </div>
                </div>

                {/* Rest of the FAQ items */}
                {faqs.slice(1).map((faq, index) => (
                  <div key={index + 1} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none group"
                      onClick={() => toggleFAQ(index + 1)}
                    >
                      <h3 className="text-lg font-medium text-gray-900 group-hover:text-sky-600 transition-colors">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0 ml-4">
                        <svg
                          className={`w-5 h-5 text-sky-600 transition-transform duration-300 ${activeFaqIndex === index + 1 ? 'transform rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    <div className={`px-6 pb-4 transition-all duration-300 ${activeFaqIndex === index + 1 ? 'block' : 'hidden'}`}>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* contact and footer */}

        < section className="bg-gradient-to-br from-blue-50 to-sky-50 py-16 px-4 sm:px-6 lg:px-8" >
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left Side - Contact Options */}
                <div className="p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">Need Guidance...?</h3>
                  <p className="text-gray-600 mb-6">
                    Our education specialists are ready to help you choose the perfect learning path.
                  </p>

                  <div className="space-y-4">
                    <a
                      href="https://wa.me/YOUR_WHATSAPP_NUMBER"
                      className="flex items-center px-5 py-3 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors group"
                      target="_blank"
                    >
                      <div className="bg-green-100 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Instant Response</p>
                        <p className="font-medium text-gray-900 group-hover:text-green-700">WhatsApp Chat</p>
                      </div>
                    </a>

                    <a
                      href="tel:+YOUR_PHONE_NUMBER"
                      className="flex items-center px-5 py-3 bg-sky-50 hover:bg-sky-100 rounded-lg border border-sky-200 transition-colors group"
                    >
                      <div className="bg-sky-100 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Mon-Sat, 9AM-6PM</p>
                        <p className="font-medium text-gray-900 group-hover:text-sky-700">Call +91 XXXXX XXXXX</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Right Side - Social Media */}
                <div className="bg-sky-50 p-8 md:p-10 flex flex-col">
                  <h4 className="text-lg font-semibold text-blue-900 mb-4">Connect With Us</h4>
                  <p className="text-gray-600 mb-6">
                    Follow for updates on courses, workshops, and educational tips.
                  </p>

                  <div className="flex space-x-4 mt-auto">
                    {[
                      {
                        name: 'Facebook',
                        icon: <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />,
                        color: 'bg-blue-600 hover:bg-blue-700'
                      },
                      {
                        name: 'Instagram',
                        icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />,
                        color: 'bg-pink-600 hover:bg-pink-700'
                      },
                      {
                        name: 'Twitter',
                        icon: <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />,
                        color: 'bg-blue-400 hover:bg-blue-500'
                      },
                      {
                        name: 'LinkedIn',
                        icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />,
                        color: 'bg-blue-700 hover:bg-blue-800'
                      }
                    ].map((social) => (
                      <a
                        key={social.name}
                        href="#"
                        className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center text-white transition-colors`}
                        aria-label={social.name}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          {social.icon}
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center text-gray-500 text-sm">
              <p>© {new Date().getFullYear()} LearnWithUs. All rights reserved.</p>
            </div>
          </div>
        </section >
      </div >
    </div>
  );
}
export default EducationWebsite;
