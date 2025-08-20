import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

// Swiper for Hero Slider and Project Carousels
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/parallax';

// Enhanced hero slides with unique content
const heroSlides = [
  {
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    title: 'Award-Winning Architecture',
    subtitle: 'Creating Tomorrow\'s Landmarks Today',
    desc: 'From sustainable residential designs to iconic commercial structures, we shape the future of architectural excellence.',
    cta: 'Explore Architecture',
    link: '/architecture',
    category: 'Architecture'
  },
  {
    img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    title: 'Luxurious Interior Design',
    subtitle: 'Where Comfort Meets Sophistication',
    desc: 'Transform your living spaces with our bespoke interior solutions that reflect your personality and lifestyle.',
    cta: 'View Interiors',
    link: '/interior',
    category: 'Interior'
  },
  {
    img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    title: 'Smart Home Integration',
    subtitle: 'Technology Meets Design',
    desc: 'Experience the future with intelligent home systems seamlessly integrated into stunning architectural designs.',
    cta: 'Discover Smart Solutions',
    link: '/smart-homes',
    category: 'Technology'
  },
  {
    img: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    title: 'Sustainable Design',
    subtitle: 'Building for Tomorrow',
    desc: 'Eco-conscious architecture and interiors that reduce environmental impact while maximizing aesthetic appeal.',
    cta: 'Learn About Sustainability',
    link: '/sustainability',
    category: 'Sustainability'
  }
];

// Enhanced project data with more details
const architectureProjects = [
  {
    id: 1, 
    title: 'Modern Glass Villa',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    location: 'New Delhi', 
    style: 'Contemporary',
    year: '2024',
    area: '4,500 sq ft',
    desc: 'A stunning glass villa featuring panoramic views, sustainable materials, and cutting-edge smart home technology. The design emphasizes natural light and seamless indoor-outdoor living.',
    features: ['Smart Home Integration', 'Solar Panels', 'Rain Water Harvesting', 'Floor-to-Ceiling Windows', 'Geothermal Heating', 'Automated Shading'],
    status: 'Completed',
    architect: 'Ar. Riya Sharma',
    materials: ['Tempered Glass', 'Recycled Steel', 'Sustainable Timber'],
    awards: ['2023 Green Building Award', '2024 Architectural Digest Top 10']
  },
  {
    id: 2, 
    title: 'Urban Commercial Complex',
    img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    location: 'Mumbai', 
    style: 'Modern',
    year: '2024',
    area: '25,000 sq ft',
    desc: 'Multi-purpose commercial building with flexible spaces, energy-efficient design, and modern amenities. The complex features a dynamic facade that responds to sunlight.',
    features: ['LEED Certified', 'Flexible Spaces', 'Smart Building Systems', 'Green Roof', 'EV Charging Stations', 'Water Recycling'],
    status: 'Under Construction',
    architect: 'Ar. Vikram Patel',
    materials: ['Precast Concrete', 'Low-E Glass', 'Recycled Aluminum'],
    awards: ['Upcoming: 2024 Sustainable Design Award']
  },
  {
    id: 3, 
    title: 'Heritage Restoration',
    img: 'https://images.unsplash.com/photo-1642085107639-bc9e2f7ee835?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    location: 'Jaipur', 
    style: 'Traditional',
    year: '2023',
    area: '8,200 sq ft',
    desc: 'Careful restoration of a heritage property blending traditional architecture with modern functionality. The project preserved original frescoes while upgrading infrastructure.',
    features: ['Heritage Conservation', 'Traditional Materials', 'Modern Amenities', 'Cultural Preservation', 'Seismic Retrofitting', 'Climate Control'],
    status: 'Completed',
    architect: 'Ar. Priya Khanna',
    materials: ['Hand-carved Sandstone', 'Lime Plaster', 'Reclaimed Teak'],
    awards: ['2023 Heritage Conservation Award', '2024 UNESCO Recognition']
  },
  {
    id: 4, 
    title: 'Hillside Retreat',
    img: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    location: 'Shimla', 
    style: 'Contemporary',
    year: '2023',
    area: '3,800 sq ft',
    desc: 'Eco-friendly hillside home with panoramic mountain views, designed to blend with the natural landscape while offering modern comforts.',
    features: ['Passive Solar Design', 'Natural Ventilation', 'Local Materials', 'Minimal Site Disturbance', 'Rainwater Collection', 'Green Roof'],
    status: 'Completed',
    architect: 'Ar. Aman Verma',
    materials: ['Local Stone', 'Cedar Wood', 'Rammed Earth'],
    awards: ['2023 Sustainable Architecture Award']
  }
];

const interiorProjects = [
  {
    id: 1,
    title: 'Luxury Penthouse',
    img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Bangalore',
    style: 'Luxury Modern',
    year: '2024',
    budget: '₹20L - ₹50L',
    desc: 'Opulent penthouse interior featuring custom furniture, premium materials, and stunning city views. The design combines modern aesthetics with timeless luxury elements.',
    features: ['Custom Furniture', 'Italian Marble', 'Smart Lighting', 'Home Theater', 'Wine Cellar', 'Panoramic Windows'],
    roomType: 'Multi-room',
    designer: 'Int. Designer Naina Roy',
    materials: ['Onyx Countertops', 'Hand-knotted Rugs', 'Brushed Brass Accents'],
    awards: ['2024 Luxury Living Award']
  },
  {
    id: 2,
    title: 'Minimalist Apartment',
    img: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Pune',
    style: 'Minimalist',
    year: '2024',
    budget: '₹15L - ₹25L',
    desc: 'Clean, uncluttered design emphasizing natural light, functional furniture, and serene color palettes. The space maximizes efficiency without compromising on aesthetics.',
    features: ['Space Optimization', 'Natural Materials', 'Hidden Storage', 'Zen Aesthetics', 'Multi-functional Furniture', 'Neutral Palette'],
    roomType: 'Living Room',
    designer: 'Int. Designer Rahul Mehta',
    materials: ['Oak Veneer', 'Concrete Finishes', 'Linen Textiles'],
    awards: ['2024 Space Design Award']
  },
  {
    id: 3,
    title: 'Contemporary Kitchen',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Chennai',
    style: 'Contemporary',
    year: '2024',
    budget: '₹8L - ₹12L',
    desc: 'State-of-the-art kitchen design with premium appliances, smart storage, and elegant finishes. The layout optimizes workflow while creating a social hub for the home.',
    features: ['Modular Design', 'Premium Appliances', 'Quartz Countertops', 'Smart Storage', 'Island Breakfast Bar', 'Task Lighting'],
    roomType: 'Kitchen',
    designer: 'Int. Designer Ananya Kapoor',
    materials: ['Quartz Surfaces', 'Stainless Steel', 'Ceramic Backsplash'],
    awards: ['2024 Kitchen Design Excellence']
  },
  {
    id: 4,
    title: 'Spa-Inspired Bathroom',
    img: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Hyderabad',
    style: 'Luxury Spa',
    year: '2023',
    budget: '₹12L - ₹18L',
    desc: 'Luxurious bathroom retreat featuring premium fixtures, natural stone, and wellness-focused design elements for a daily spa experience at home.',
    features: ['Steam Shower', 'Freestanding Tub', 'Heated Floors', 'Smart Mirrors', 'Ambient Lighting', 'Waterfall Fixtures'],
    roomType: 'Bathroom',
    designer: 'Int. Designer Sanjana Reddy',
    materials: ['Travertine Tile', 'Teak Wood', 'Brushed Nickel'],
    awards: ['2023 Bathroom Design Award']
  }
];

// Enhanced room types with more details
const roomTypes = [
  {
    id: 1, 
    name: 'Living Rooms',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Comfortable and stylish living spaces designed for relaxation and entertainment',
    projectCount: 45,
    styles: ['Modern', 'Contemporary', 'Traditional', 'Minimalist', 'Industrial'],
    popularFeatures: ['Sectional Sofas', 'Entertainment Centers', 'Accent Walls', 'Fireplaces']
  },
  {
    id: 2, 
    name: 'Bedrooms',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Serene and personalized sleeping spaces with optimal comfort',
    projectCount: 38,
    styles: ['Luxury', 'Minimalist', 'Bohemian', 'Scandinavian', 'Traditional'],
    popularFeatures: ['Walk-in Closets', 'Reading Nooks', 'Accent Lighting', 'Platform Beds']
  },
  {
    id: 3, 
    name: 'Kitchens',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Functional and beautiful culinary spaces with smart storage',
    projectCount: 52,
    styles: ['Modern', 'Farmhouse', 'Industrial', 'Traditional', 'Contemporary'],
    popularFeatures: ['Island Counters', 'Pantry Storage', 'Smart Appliances', 'Breakfast Bars']
  },
  {
    id: 4, 
    name: 'Bathrooms',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Luxurious and spa-like wellness spaces for relaxation',
    projectCount: 29,
    styles: ['Spa', 'Modern', 'Traditional', 'Minimalist', 'Luxury'],
    popularFeatures: ['Walk-in Showers', 'Freestanding Tubs', 'Heated Floors', 'Double Vanities']
  },
  {
    id: 5, 
    name: 'Home Offices',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Productive and inspiring work environments at home',
    projectCount: 23,
    styles: ['Modern', 'Industrial', 'Minimalist', 'Scandinavian', 'Eclectic'],
    popularFeatures: ['Built-in Shelving', 'Ergonomic Furniture', 'Task Lighting', 'Soundproofing']
  },
  {
    id: 6, 
    name: 'Outdoor Spaces',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Beautiful gardens and outdoor living areas for relaxation',
    projectCount: 31,
    styles: ['Tropical', 'Modern', 'Mediterranean', 'Rustic', 'Japanese'],
    popularFeatures: ['Outdoor Kitchens', 'Fire Pits', 'Water Features', 'Comfortable Seating']
  }
];

// Enhanced blog content
const blogs = [
  { 
    id: 1, 
    title: '2024 Interior Design Trends', 
    excerpt: 'Discover the latest trends shaping modern interiors',
    content: 'From biophilic design to smart home integration, explore the cutting-edge trends transforming contemporary living spaces. This year sees a strong emphasis on sustainability, with natural materials and energy-efficient solutions taking center stage alongside bold colors and curved furniture that soften modern aesthetics.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    category: 'Trends',
    readTime: '5 min read',
    date: 'Jan 15, 2024',
    author: 'Naina Roy',
    tags: ['Interior Design', 'Trends', '2024']
  },
  { 
    id: 2, 
    title: 'Sustainable Architecture Guide', 
    excerpt: 'Building eco-friendly homes for the future',
    content: 'Learn about sustainable materials, energy-efficient designs, and eco-conscious building practices that benefit both you and the environment. We explore passive solar design, rainwater harvesting systems, and innovative materials like cross-laminated timber that are revolutionizing green construction while maintaining aesthetic appeal.',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    category: 'Sustainability',
    readTime: '7 min read',
    date: 'Jan 10, 2024',
    author: 'Aman Verma',
    tags: ['Architecture', 'Sustainability', 'Green Building']
  },
  { 
    id: 3, 
    title: 'Budget-Friendly Design Tips', 
    excerpt: 'Achieve luxury looks without breaking the bank',
    content: 'Professional tips and tricks for creating stunning interiors on any budget, from smart shopping to DIY solutions. Discover how strategic paint choices, lighting placement, and furniture arrangement can dramatically transform spaces without major renovations, plus where to splurge and where to save for maximum impact.',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    category: 'Budget Tips',
    readTime: '4 min read',
    date: 'Jan 5, 2024',
    author: 'Rahul Mehta',
    tags: ['Interior Design', 'Budget', 'Tips']
  }
];

// Services data
const services = [
  {
    id: 1,
    title: 'Architectural Design',
    icon: '🏛️',
    description: 'Complete architectural solutions from concept to construction',
    features: [
      '3D Visualization',
      'Structural Design',
      'Project Management',
      'Construction Documentation',
      'Site Analysis',
      'Permit Acquisition'
    ],
    projects: 128,
    process: [
      'Initial Consultation',
      'Concept Development',
      'Design Refinement',
      'Construction Documents',
      'Construction Oversight'
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    title: 'Interior Design',
    icon: '🏠',
    description: 'Transform your spaces with our expert interior design services',
    features: [
      'Space Planning',
      'Furniture Selection',
      'Color Consultation',
      'Custom Designs',
      'Lighting Plans',
      'Material Selection'
    ],
    projects: 215,
    process: [
      'Needs Assessment',
      'Concept Development',
      'Design Presentation',
      'Procurement',
      'Installation'
    ],
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    title: 'Smart Home Integration',
    icon: '🏡',
    description: 'Integrate cutting-edge technology seamlessly into your home',
    features: [
      'Automation Systems',
      'Security Integration',
      'Energy Management',
      'Tech Consultation',
      'Audio-Visual Solutions',
      'Network Infrastructure'
    ],
    projects: 87,
    process: [
      'Technology Assessment',
      'System Design',
      'Equipment Selection',
      'Installation',
      'Training'
    ],
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 4,
    title: 'Sustainable Design',
    icon: '🌿',
    description: 'Eco-friendly solutions for responsible architecture and interiors',
    features: [
      'Green Materials',
      'Energy Efficiency',
      'LEED Certification',
      'Environmental Impact Assessment',
      'Passive Design',
      'Water Conservation'
    ],
    projects: 94,
    process: [
      'Sustainability Goals',
      'Eco-Design Strategies',
      'Material Selection',
      'Energy Modeling',
      'Certification Assistance'
    ],
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  }
];

// Team members data
const teamMembers = [
  {
    id: 1,
    name: 'Ar. Riya Sharma',
    role: 'Principal Architect',
    bio: 'Specializes in sustainable residential designs with 15+ years of experience creating eco-friendly living spaces.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    expertise: ['Sustainable Design', 'Residential Architecture', 'Green Building'],
    projects: 87
  },
  {
    id: 2,
    name: 'Int. Designer Naina Roy',
    role: 'Lead Interior Designer',
    bio: 'Creates luxurious yet functional spaces with a focus on modern aesthetics and smart storage solutions.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    expertise: ['Luxury Interiors', 'Space Planning', 'Custom Furniture'],
    projects: 112
  },
  {
    id: 3,
    name: 'Ar. Vikram Patel',
    role: 'Commercial Architect',
    bio: 'Expert in large-scale commercial projects with innovative structural solutions and smart building integration.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    expertise: ['Commercial Architecture', 'Structural Design', 'Smart Buildings'],
    projects: 64
  },
  {
    id: 4,
    name: 'Int. Designer Rahul Mehta',
    role: 'Minimalist Design Specialist',
    bio: 'Champions minimalist design principles to create serene, uncluttered spaces that maximize functionality.',
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    expertise: ['Minimalist Design', 'Space Optimization', 'Multi-functional Furniture'],
    projects: 93
  }
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Rajesh & Priya Malhotra',
    project: 'Modern Glass Villa, New Delhi',
    quote: 'The team transformed our vision into reality with their innovative design and attention to detail. Our home is now a perfect blend of aesthetics and functionality.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    name: 'Aditya Joshi',
    project: 'Urban Commercial Complex, Mumbai',
    quote: 'Exceptional commercial design that perfectly represents our brand while optimizing every square foot for efficiency and employee comfort.',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    name: 'Sunita Rao',
    project: 'Luxury Penthouse, Bangalore',
    quote: 'The interior designers created a space that feels like a luxury hotel but with all the comforts of home. Their material selections were impeccable.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  }
];

const stepData = [
  {
    title: 'Discovery',
    icon: (
      <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" stroke="currentColor" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
      </svg>
    ),
    desc: 'Initial Consultation'
  },
  {
    title: 'Concept',
    icon: (
      <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17v.01M8 9h8m-6 4v2m6-2v2a2 2 0 01-2 2H8a2 2 0 01-2-2v-2" />
        <rect x="2" y="17" width="20" height="5" rx="2" />
      </svg>
    ),
    desc: 'Concept Development'
  },
  {
    title: 'Design',
    icon: (
      <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect width="20" height="5" x="2" y="17" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7v10M8 7v10" />
      </svg>
    ),
    desc: 'Design Refinement'
  },
  {
    title: 'Execution',
    icon: (
      <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect width="20" height="5" x="2" y="17" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17V4m7 8l-7-7-7 7" />
      </svg>
    ),
    desc: 'Construction Oversight'
  },
  {
    title: 'Completion',
    icon: (
      <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
    desc: 'Project Handover'
  }
];

const gradient = 'bg-gradient-to-br from-blue-50 via-white to-blue-100';

export default function ArchitectureInterior() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', preferredTime: '', service: '', message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [filters, setFilters] = useState({
    architectureType: '',
    location: '',
    style: '',
    roomType: '',
    interiorStyle: '',
    budget: [50000, 500000]
  });

  const [activeTab, setActiveTab] = useState('architecture');
  const [selectedService, setSelectedService] = useState('');
  const [expandedProject, setExpandedProject] = useState(null);
  const [expandedRoom, setExpandedRoom] = useState(null);
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!formData.service) errors.service = 'Please select a service';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setFormSubmitted(true);
      setFormData({ name: '', email: '', phone: '', preferredTime: '', service: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 5000);
    } else {
      setFormErrors(errors);
    }
  };

  const toggleProjectExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const toggleRoomExpand = (id) => {
    setExpandedRoom(expandedRoom === id ? null : id);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // FILTERS
  const filteredArchitectureProjects = architectureProjects.filter(project => {
    return (!filters.architectureType || project.style === filters.architectureType) &&
           (!filters.location || project.location === filters.location) &&
           (!filters.style || project.style === filters.style);
  });

const filteredInteriorProjects = interiorProjects.filter(project => {
  // Convert budget string to numerical range (e.g., "₹50L - ₹75L" => [5000000, 7500000])
  const budgetRange = project.budget.split(' - ').map(b => {
    const num = parseFloat(b.replace(/[^0-9.]/g, '')) * 100000;
    return num;
  });
  
  return (
    (filters.roomType === '' || project.roomType === filters.roomType) &&
    (filters.interiorStyle === '' || project.style === filters.interiorStyle) &&
    (budgetRange[0] >= filters.budget[0] && budgetRange[1] <= filters.budget[1])
  );
});



  function AnimatedBlob({ className, colorFrom, colorTo, size = 320, duration = 18, style }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className || ''}`}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle at 60% 40%, ${colorFrom}B0 65%, ${colorTo}70 100%)`,
        filter: 'blur(42px)',
        ...style,
      }}
      initial={{ scale: 1, opacity: 0.82 }}
      animate={{
        scale: [1, 1.15, 0.92, 1],
        x: [0, 18, -15, 0],
        y: [0, 16, -18, 0],
        opacity: [0.82, 1, 0.97, 0.82],
      }}
      transition={{
        repeat: Infinity,
        duration,
        ease: 'easeInOut',
      }}
      aria-hidden="true"
    />
  );
}




  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 font-sans">
      {/* --- HERO SECTION WITH ENHANCED CARD --- */}
          <section
      className="relative h-screen max-h-[800px] overflow-hidden"
      aria-label="Hero carousel"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade, Parallax]}
        navigation={{
          nextEl: '.hero-button-next',
          prevEl: '.hero-button-prev',
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet hero-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active hero-pagination-bullet-active',
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        speed={1200}
        parallax={{ enabled: true, transition: 10 }}
        loop
        className="h-full w-full hero-swiper"
        aria-live="polite"
      >
        {heroSlides.map(({ img, title, subtitle, desc, cta, link, category }, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-full flex items-center select-none" tabIndex={-1}>
              <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                <img
                  src={img}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 will-change-transform"
                  loading="lazy"
                  data-swiper-parallax="-25%"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-black/30 to-blue-600/50" />
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    animation: 'gridMove 20s linear infinite',
                  }}
                />
              </div>

              <div className="relative z-10 flex items-start justify-start h-full w-full px-6 md:px-20 text-white">
  <div
    className="max-w-2xl space-y-6 pt-24 md:pt-32"
    data-swiper-parallax-opacity="0"
    data-swiper-parallax-duration="600"
  >
                  <span
                    className="inline-block px-5 py-2 bg-blue-600/85 rounded-full text-sm font-semibold tracking-wide backdrop-blur-sm cursor-default select-text transform transition-transform duration-500 hover:scale-105 hover:bg-blue-600"
                    data-swiper-parallax-y="-50"
                    aria-label={`Category: ${category}`}
                    tabIndex={-1}
                    role="text"
                  >
                    {category}
                  </span>

                  <h1
                    className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight max-w-full cursor-default select-text"
                    data-swiper-parallax-y="-30"
                    data-swiper-parallax-duration="800"
                  >
                    <span className="inline-block transform transition-transform duration-700 hover:scale-105 hover:text-blue-300">
                      {title}
                    </span>
                  </h1>

                  <p
                    className="text-xl sm:text-2xl font-light text-blue-100 max-w-2xl"
                    data-swiper-parallax-y="-20"
                    data-swiper-parallax-duration="1000"
                  >
                    {subtitle}
                  </p>

                  <p
                    className="text-lg sm:text-xl text-gray-200 max-w-3xl leading-relaxed tracking-wide"
                    data-swiper-parallax-y="-10"
                    data-swiper-parallax-duration="1200"
                  >
                    {desc}
                  </p>

                  <div
                    className="flex gap-5 flex-wrap"
                    data-swiper-parallax-y="0"
                    data-swiper-parallax-duration="1400"
                  >
                    <a
                      href={link}
                      className="inline-flex items-center px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                      aria-label={`Learn more about ${title}`}
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{cta}</span>
                      <svg
                        className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>

                    <a
                      href="#projects"
                      className="inline-flex items-center px-10 py-4 border-2 border-white/80 text-white font-semibold rounded-full transition-colors duration-300 hover:bg-white hover:text-blue-900 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                      aria-label="View our portfolio section"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">View Portfolio</span>
                      <svg
                        className="ml-3 w-5 h-5 group-hover:rotate-90 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-20 left-1/4 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-float"
              />
              <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, rotate: 0, scale: 0.9 }}
                animate={{ opacity: 1, rotate: 5, scale: 1 }}
                transition={{ duration: 1.4, delay: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className="absolute top-1/3 right-1/4 w-24 h-24 rounded-lg bg-white/5 backdrop-blur-sm border border-white/15 animate-float-delay"
              />
            </div>
          </SwiperSlide>
        ))}

        <button
          className="hero-button-prev absolute left-2 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/40 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-500"
          aria-label="Previous slide"
          type="button"
        >
          <svg
            className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          className="hero-button-next absolute right-8 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/40 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-500"
          aria-label="Next slide"
          type="button"
        >
          <svg
            className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </Swiper>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <span
          className="block w-8 h-12 border-2 border-white/50 rounded-full flex justify-center"
          aria-hidden="true"
          style={{ animation: 'bounce 2s infinite' }}
        >
          <span className="w-1 h-3 bg-white/80 rounded-full mt-3" />
        </span>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 40px 40px;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-delay {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 7s ease-in-out infinite 1s;
        }
        .hero-swiper .swiper-pagination {
          bottom: 2rem;
        }

        .hero-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: rgba(255, 255, 255, 0.5);
          opacity: 1;
          margin: 0 5px !important;
          transition: background-color 0.3s ease;
          border-radius: 50%;
        }
        .hero-pagination-bullet-active {
          background-color: rgba(255, 255, 255, 1);
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
      `}</style>
    </section>
      

      {/* ARCHITECTURE AND INTERIOR SECTIONS - ENHANCED WITH TABS */}
      <section id="projects" className="py-20 max-w-7xl mx-auto px-4" aria-label="Our projects">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From innovative architectural designs to luxurious interior solutions, we bring your vision to life with unmatched expertise and creativity.
          </p>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-2 shadow-lg">
              <button
                onClick={() => setActiveTab('architecture')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === 'architecture' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-blue-600 hover:bg-blue-50'
                }`}
                aria-label="View architecture projects"
                aria-current={activeTab === 'architecture' ? 'page' : undefined}
              >
                Architecture
              </button>
              <button
                onClick={() => setActiveTab('interior')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === 'interior' 
                    ? 'bg-amber-500 text-white shadow-md' 
                    : 'text-amber-600 hover:bg-amber-50'
                }`}
                aria-label="View interior design projects"
                aria-current={activeTab === 'interior' ? 'page' : undefined}
              >
                Interior Design
              </button>
            </div>
          </div>
        </div>

        {/* Architecture Section */}
        {activeTab === 'architecture' && (
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
                  </svg>
                  Filters
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="architecture-type" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select 
                      id="architecture-type"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={filters.architectureType}
                      onChange={(e) => handleFilterChange('architectureType', e.target.value)}
                      aria-label="Filter by project type"
                    >
                      <option value="">All Types</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Cultural">Cultural</option>
                      <option value="Industrial">Industrial</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <select 
                      id="location"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={filters.location}
                      onChange={(e) => handleFilterChange('location', e.target.value)}
                      aria-label="Filter by location"
                    >
                      <option value="">All Locations</option>
                      <option value="New Delhi">New Delhi</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Jaipur">Jaipur</option>
                      <option value="Shimla">Shimla</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="style" className="block text-sm font-medium text-gray-700 mb-2">
                      Style
                    </label>
                    <select 
                      id="style"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={filters.style}
                      onChange={(e) => handleFilterChange('style', e.target.value)}
                      aria-label="Filter by architectural style"
                    >
                      <option value="">All Styles</option>
                      <option value="Modern">Modern</option>
                      <option value="Contemporary">Contemporary</option>
                      <option value="Traditional">Traditional</option>
                      <option value="Minimalist">Minimalist</option>
                    </select>
                  </div>

                  <button 
                    onClick={() => setFilters({
                      architectureType: '',
                      location: '',
                      style: '',
                      roomType: '',
                      interiorStyle: '',
                      budget: [50000, 500000]
                    })}
                    className="w-full py-2 text-sm text-blue-600 hover:text-blue-800 font-medium"
                    aria-label="Reset all filters"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            </div>

            {/* Architecture Projects Grid */}
            <div className="lg:col-span-3">
              {filteredArchitectureProjects.length === 0 ? (
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                  <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-gray-700 mt-4">No projects match your filters</h3>
                  <p className="text-gray-500 mt-2">Try adjusting your filters to see more results</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredArchitectureProjects.map(project => (
                    <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                      <div className="relative overflow-hidden">
                        <img 
                          src={project.img} 
                          alt={project.title} 
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" 
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                            {project.style}
                          </span>
                          <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                            project.status === 'Completed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                          <span className="text-sm text-gray-500">{project.year}</span>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-600 mb-3">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {project.location}
                          <span className="mx-2">•</span>
                          <span>{project.area}</span>
                        </div>
                        
                        <p className="text-gray-700 mb-4 line-clamp-2">{project.desc}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.features.slice(0, 3).map(feature => (
                            <span key={feature} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md">
                              {feature}
                            </span>
                          ))}
                          {project.features.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                              +{project.features.length - 3} more
                            </span>
                          )}
                        </div>

                        <button 
                          onClick={() => toggleProjectExpand(project.id)}
                          className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors mb-4"
                          aria-expanded={expandedProject === project.id}
                          aria-controls={`project-details-${project.id}`}
                        >
                          {expandedProject === project.id ? 'Show Less' : 'View Project Details'}
                        </button>

                        {expandedProject === project.id && (
                          <div id={`project-details-${project.id}`} className="mt-4 pt-4 border-t border-gray-200 animate-fadein">
                            <h4 className="font-bold text-gray-800 mb-2">Project Details</h4>
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                              <div>
                                <p className="text-sm text-gray-600 mb-1">Lead Architect</p>
                                <p className="font-medium">{project.architect}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-600 mb-1">Primary Materials</p>
                                <div className="flex flex-wrap gap-1">
                                  {project.materials.map(material => (
                                    <span key={material} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                                      {material}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                            
                            <h4 className="font-bold text-gray-800 mb-2">All Features</h4>
                            <ul className="grid md:grid-cols-2 gap-2 mb-4">
                              {project.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                  <svg className="w-4 h-4 mt-0.5 mr-2 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  <span className="text-gray-700">{feature}</span>
                                </li>
                              ))}
                            </ul>
                            
                            {project.awards && project.awards.length > 0 && (
                              <>
                                <h4 className="font-bold text-gray-800 mb-2">Awards & Recognition</h4>
                                <ul className="space-y-1 mb-4">
                                  {project.awards.map(award => (
                                    <li key={award} className="flex items-center">
                                      <svg className="w-4 h-4 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                      </svg>
                                      <span className="text-gray-700">{award}</span>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Interior Section */}
{activeTab === 'interior' && (
  <div className="grid lg:grid-cols-4 gap-8">
    {/* Filters Sidebar */}
    <div className="lg:col-span-1">
      <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
        <h3 className="text-xl font-bold text-amber-600 mb-6 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
          </svg>
          Filters
        </h3>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="room-type" className="block text-sm font-medium text-gray-700 mb-2">
              Room Type
            </label>
            <select 
              id="room-type"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              value={filters.roomType}
              onChange={(e) => handleFilterChange('roomType', e.target.value)}
              aria-label="Filter by room type"
            >
              <option value="">All Rooms</option>
              <option value="Living Room">Living Room</option>
              <option value="Bedroom">Bedroom</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Bathroom">Bathroom</option>
              <option value="Multi-room">Multi-room</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="interior-style" className="block text-sm font-medium text-gray-700 mb-2">
              Design Style
            </label>
            <select 
              id="interior-style"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              value={filters.interiorStyle}
              onChange={(e) => handleFilterChange('interiorStyle', e.target.value)}
              aria-label="Filter by interior design style"
            >
              <option value="">All Styles</option>
              <option value="Luxury Modern">Luxury Modern</option>
              <option value="Minimalist">Minimalist</option>
              <option value="Contemporary">Contemporary</option>
              <option value="Traditional">Traditional</option>
              <option value="Luxury Spa">Luxury Spa</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="budget-range" className="block text-sm font-medium text-gray-700 mb-2">
              Budget Range (₹{Math.round(filters.budget[0] / 100000)}L - ₹{Math.round(filters.budget[1] / 100000)}L)
            </label>
            <div className="flex gap-4">
              <input 
                type="range" 
                min="50000" 
                max="5000000" 
                step="25000"
                className="w-full accent-amber-500"
                value={filters.budget[0]}
                onChange={(e) => handleFilterChange('budget', [parseInt(e.target.value), filters.budget[1]])}
              />
              <input 
                type="range" 
                min="50000" 
                max="5000000" 
                step="25000"
                className="w-full accent-amber-500"
                value={filters.budget[1]}
                onChange={(e) => handleFilterChange('budget', [filters.budget[0], parseInt(e.target.value)])}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>₹{Math.round(filters.budget[0] / 100000)}L</span>
              <span>₹{Math.round(filters.budget[1] / 100000)}L</span>
            </div>
          </div>

          <button 
            onClick={() => setFilters({
              architectureType: '',
              location: '',
              style: '',
              roomType: '',
              interiorStyle: '',
              budget: [500000, 5000000] // Reset to default range
            })}
            className="w-full py-2 text-sm text-amber-600 hover:text-amber-800 font-medium"
            aria-label="Reset all filters"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </div>

    {/* Interior Projects Grid */}
    <div className="lg:col-span-3">
      {filteredInteriorProjects.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-bold text-gray-700 mt-4">No projects match your filters</h3>
          <p className="text-gray-500 mt-2">Try adjusting your filters to see more results</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {filteredInteriorProjects.map(project => (
            <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" 
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full">
                    {project.style}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">
                    {project.roomType}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {project.location}
                  <span className="mx-2">•</span>
                  <span className="font-semibold text-amber-600">{project.budget}</span>
                </div>
                
                <p className="text-gray-700 mb-4 line-clamp-2">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.slice(0, 3).map(feature => (
                    <span key={feature} className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded-md">
                      {feature}
                    </span>
                  ))}
                  {project.features.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                      +{project.features.length - 3} more
                    </span>
                  )}
                </div>

                <button 
                  onClick={() => toggleProjectExpand(project.id)}
                  className="w-full px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors mb-4"
                  aria-expanded={expandedProject === project.id}
                  aria-controls={`project-details-${project.id}`}
                >
                  {expandedProject === project.id ? 'Show Less' : 'View Project Details'}
                </button>

                {expandedProject === project.id && (
                  <div id={`project-details-${project.id}`} className="mt-4 pt-4 border-t border-gray-200 animate-fadein">
                    <h4 className="font-bold text-gray-800 mb-2">Project Details</h4>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Interior Designer</p>
                        <p className="font-medium">{project.designer}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Key Materials</p>
                        <div className="flex flex-wrap gap-1">
                          {project.materials.map(material => (
                            <span key={material} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                              {material}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="font-bold text-gray-800 mb-2">All Features</h4>
                    <ul className="grid md:grid-cols-2 gap-2 mb-4">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-4 h-4 mt-0.5 mr-2 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {project.awards && project.awards.length > 0 && (
                      <>
                        <h4 className="font-bold text-gray-800 mb-2">Awards & Recognition</h4>
                        <ul className="space-y-1">
                          {project.awards.map(award => (
                            <li key={award} className="flex items-center">
                              <svg className="w-4 h-4 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                              </svg>
                              <span className="text-gray-700">{award}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
)}
        
      </section>


{/* ENHANCED SERVICES SECTION */}
<section
  className="relative py-20 md:py-28 bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-3xl shadow-xl mx-4 mt-10 overflow-hidden"
  aria-label="Our services"
>
  {/* Decorative blurred blobs for brand depth */}
  <div className="pointer-events-none absolute -top-32 -left-32 w-[370px] h-[370px] 
    bg-gradient-to-tr from-blue-300/40 via-white/40 to-blue-100/60 
    rounded-full blur-3xl opacity-60 -z-10" />
  <div className="pointer-events-none absolute -bottom-24 -right-24 w-[300px] h-[300px] 
    bg-gradient-to-tr from-blue-200/60 via-white/30 to-indigo-300/70 
    rounded-full blur-3xl opacity-70 -z-10" />

  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-14">
      <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 mb-4 drop-shadow">
        Our Comprehensive Services
      </h2>
      <p className="text-xl md:text-2xl text-blue-700 font-medium mb-1">
        Solutions tailored to your unique architectural and interior goals.
      </p>
      <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 rounded-full opacity-80 mb-2" />
      <p className="text-base md:text-lg text-blue-700/80 max-w-xl mx-auto">
        End-to-end expertise for homes, businesses, and sustainable environments.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
      {services.map(service => (
        <div
          key={service.id}
          className="
            group relative flex flex-col items-center p-7 bg-white/85 backdrop-blur-lg
            border border-blue-100 shadow-xl rounded-2xl
            hover:scale-[1.03] hover:-translate-y-1
            hover:shadow-[0_8px_50px_rgba(59,130,246,0.08)]
            hover:bg-gradient-to-tl hover:from-blue-50 hover:via-white hover:to-blue-100
            focus-within:ring-2 focus-within:ring-blue-400
            transition-all duration-300 ease-[cubic-bezier(.45,.04,.47,1.03)]
            min-h-[420px]
          "
          tabIndex={0}
        >
          {/* Decorative gradient glow behind emoji icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-12 bg-gradient-to-br from-blue-300 to-blue-100 blur-lg opacity-40 z-0" />
          <span
            className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white border-2 border-blue-100 shadow-lg 
               rounded-full text-3xl w-[56px] h-[56px] flex items-center justify-center z-10
               ring-2 ring-blue-50 group-hover:ring-blue-300 transition"
            aria-hidden="true"
          >
            {service.icon}
          </span>
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-36 object-cover rounded-xl shadow-md mb-3 mt-4 transition-all group-hover:shadow-lg"
            loading="lazy"
          />
          <h3 className="font-bold text-blue-900 mb-1 text-lg mt-3 text-center leading-tight tracking-tight">
            {service.title}
          </h3>
          <p className="text-sm text-blue-700 mb-3 text-center font-medium">
            {service.description}
          </p>
          <ul className="text-xs text-blue-700 mb-4 mt-1 w-full space-y-1">
            {service.features.slice(0, 3).map((f, i) => (
              <li className="flex items-center gap-2" key={f}>
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0" 
                  fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto text-xs text-blue-700 font-semibold tracking-wide w-full text-right">
            <span className="inline-block bg-blue-50 px-3 py-1 rounded-lg shadow-sm">
              {service.projects}+ Projects
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* OUR TEAM SECTION */}
<section
  className="relative py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
  aria-label="Our Team Timeline"
>
  <div className="text-center mb-20">
    <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 tracking-tight">
      Meet Our Team
    </h2>
    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
      Our talented designers and architects shaping remarkable spaces with passion and expertise.
    </p>
  </div>

  <div className="relative">
    {/* Vertical timeline line */}
    <div className="absolute left-1/2 top-10 -translate-x-1/2 w-1 bg-blue-300 h-full hidden md:block rounded" />

    <div className="space-y-16">
      {teamMembers.map((member, index) => {
        const isLeft = index % 2 === 0;
        // Optional: Choose icons based on role key words
        const roleIcon =
          member.role.includes("Architect") ? (
            <svg className="w-4 h-4 mr-1 text-blue-200" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M10 2L2 7.5V9h16V7.5L10 2zm-6 9v6a1 1 0 001 1h3v-3h2v3h3a1 1 0 001-1v-6H4z" />
            </svg>
          ) : member.role.includes("Designer") ? (
            <svg className="w-4 h-4 mr-1 text-blue-200" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M14.7 6.3a1 1 0 00-1.4 0l-7 7A1 1 0 007 15h2a1 1 0 001-1v-2a1 1 0 01.293-.707l7-7a1 1 0 00-1.414-1.414z" />
            </svg>
          ) : null;

        return (
          <div
            key={member.id}
            className={`flex flex-col md:flex-row items-center md:items-start justify-between max-w-4xl mx-auto ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            {/* Dot connector with glow animation */}
            <div className="hidden md:flex flex-col items-center w-16 relative">
              <div className="w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-lg mt-1 animate-pulse" style={{
                boxShadow: "0 0 0 0 rgba(37,99,235,0.25), 0 0 12px 8px rgba(59,130,246,0.15)"
              }}/>
              {index !== teamMembers.length - 1 && (
                <div className="flex-1 w-1 bg-blue-300 rounded" />
              )}
            </div>

            {/* Avatar with subtle gradient bar behind */}
            <div className={`relative w-40 h-40 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-400 transition-transform duration-500 hover:scale-110 ${isLeft ? "md:mr-16" : "md:ml-16"}`}>
              {/* Blue gradient accent */}
              <div className="absolute -inset-x-5 top-1/2 -translate-y-1/2 h-10 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 rounded-full blur-lg opacity-60 z-0" />
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover relative z-10"
                loading="lazy"
                draggable={false}
              />
              {/* Role badge with soft icon */}
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center px-3 py-0.5 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 text-xs font-semibold rounded-full border border-blue-200 shadow-sm z-20">
                {roleIcon}
                {member.role}
              </span>
            </div>

            {/* Bio Card */}
            <div
              className={`relative bg-gradient-to-tr from-blue-500 to-blue-700 text-white rounded-3xl p-8 max-w-lg shadow-xl w-full md:w-auto mt-8 md:mt-0 skew-y-1 ${isLeft ? "md:skew-y-[-1deg]" : "md:skew-y-1deg"}`}
              style={{ minWidth: "320px" }}
            >
              {/* Inverse skew for content */}
              <div className={`skew-y-[-1deg] max-w-md`}>
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-200 font-semibold mb-4">{member.role}</p>
                <p className="mb-6 text-blue-100">{member.bio}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {member.expertise.map((skill, idx) => (
                    <span
                      key={skill}
                      className="flex items-center bg-blue-300 bg-opacity-40 hover:bg-opacity-60 cursor-default px-3 py-1 rounded-full text-sm font-semibold text-white transition"
                      title={skill}
                    >
                      {/* Optional: Add a generic skill icon (e.g., lightning bolt) */}
                      <svg className="w-3 h-3 mr-1 text-blue-100" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M11.3 1.046a1 1 0 00-1.832 0l-6 13A1 1 0 005.267 16H9v3a1 1 0 002 0v-3h3.733a1 1 0 00.899-1.454l-6-13z" />
                      </svg>
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center font-semibold text-blue-100">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {member.projects} Projects
                </div>
              </div>

              {/* Decorative corner overlay */}
              <div
                className={`absolute top-0 ${isLeft ? "right-0" : "left-0"} bg-blue-800 w-12 h-12 rounded-tr-3xl rounded-bl-3xl opacity-30 pointer-events-none -translate-y-1/4`}
              />
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>


      {/* TESTIMONIALS SECTION */}
      <section
  className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100"
  aria-label="Client testimonials"
>
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
    <div className="text-center mb-20">
      <h2 className="text-2xl font-extrabold  text-blue-900">
        What Our Clients Say
      </h2>
      <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
        Hear from homeowners and businesses who’ve transformed their spaces with our bespoke designs.
      </p>
    </div>

    <div className="grid gap-10 md:grid-cols-3">
      {testimonials.map((testimonial) => (
        <figure
          key={testimonial.id}
          className="relative bg-white rounded-3xl shadow-2xl px-8 py-10 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_8px_40px_rgba(37,99,235,0.14)]"
        >
          {/* Decorative quote icon */}
          <svg
            className="absolute -top-8 left-6 w-14 h-14 text-blue-100"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M17.5 18A7.5 7.5 0 017.5 10.5v0a7.5 7.5 0 017.5-7.5"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M40.5 18A7.5 7.5 0 0130.5 10.5v0A7.5 7.5 0 0138 3"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Star rating */}
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${
                  i < testimonial.rating ? 'text-amber-400' : 'text-blue-100'
                } transition-colors duration-200`}
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Blockquote */}
          <blockquote className="relative text-gray-700 italic mb-8 text-lg">
            “{testimonial.quote}”
          </blockquote>

          {/* Avatar and info */}
          <figcaption className="mt-auto flex flex-col items-center">
            <div className="mb-3">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100 shadow-md transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div>
              <div className="font-bold text-blue-800 text-lg">{testimonial.name}</div>
              <div className="text-base text-blue-500">{testimonial.project}</div>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>

    {/* Optional CTA */}
    <div className="mt-16 text-center">
      <button
        className="inline-block px-8 py-3 rounded-full font-semibold text-lg text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 shadow-lg hover:from-blue-600 hover:to-blue-900 transition-all focus:outline-none focus:ring-2 focus:ring-blue-300"
        type="button"
        aria-label="Share your experience"
      >
        Share Your Experience
      </button>
    </div>
  </div>
</section>

{/* proven process */}
      <section
  className="py-12 bg-gradient-to-tr from-white via-blue-100 to-blue-200 rounded-3xl mx-4 mt-8 shadow-xl relative overflow-hidden"
  aria-label="Our process"
>
  {/* Subtle blue gradient circles for visual depth */}
  <div className="absolute -top-32 -left-24 w-[350px] h-[350px] bg-gradient-to-br from-blue-100 via-white to-blue-300 rounded-full blur-3xl opacity-40 -z-10" />
  <div className="absolute -bottom-24 -right-16 w-[200px] h-[200px] bg-gradient-to-bl from-blue-200 via-white to-blue-100 rounded-full blur-3xl opacity-50 -z-10" />

  <div className="max-w-6xl mx-auto px-4">
    <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-900 drop-shadow">
      Our Proven Process
    </h3>
    <div className="flex gap-0 items-center justify-between overflow-x-auto md:gap-0 md:flex-nowrap">
      {stepData.map((step, i) => (
        <div
          key={i}
          className="relative flex-1 flex flex-col items-center min-w-[150px] group"
        >
          {/* Step icon and number */}
          <div className="relative z-10">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br
              from-blue-200 via-white to-blue-400 rounded-full shadow-xl border-4 border-white
              group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300"
            >
              {step.icon}
            </div>
            <div className="absolute -bottom-2 -right-2 h-7 w-7 flex items-center justify-center rounded-full
                bg-gradient-to-br from-white to-blue-200 text-blue-700 font-bold border-2 border-blue-200 text-sm shadow">
              {i + 1}
            </div>
          </div>
          {/* Title and description */}
          <h4 className="font-semibold text-blue-800 mt-3 text-center text-lg">{step.title}</h4>
          <p className="text-xs text-blue-600 mt-1 text-center px-2 opacity-90 min-h-[32px]">
            {step.desc}
          </p>
          {/* Blue connecting bar */}
          {i < stepData.length - 1 && (
            <div className="absolute top-8 right-0 md:left-auto md:right-[-40px] flex items-center">
              <span className="hidden md:block h-1 w-20 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full animate-pulse"></span>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ENHANCED ROOM INSPIRATIONS SECTION */}
      <section
  className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
  aria-label="Room inspirations"
>
  {/* Section Header */}
  <div className="max-w-4xl mx-auto text-center mb-20">
    <h2 className="text-2xl font-extrabold text-gradient-from-blue-to-white tracking-tight mb-4 text-blue-900">
      Room Inspirations
    </h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      Explore our portfolio of stunning room designs across different categories and styles.
    </p>
  </div>

  {/* Responsive Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {roomTypes.map((room) => {
      const isExpanded = expandedRoom === room.id;

      return (
        <div
          key={room.id}
          className={`relative rounded-3xl shadow-lg group cursor-pointer transition-all duration-400 ${
            isExpanded ? 'md:col-span-2 lg:col-span-3 shadow-2xl' : 'hover:shadow-xl'
          }`}
          onClick={() => expandedRoom === null && toggleRoomExpand(room.id)}
          aria-expanded={isExpanded}
          role="region"
          aria-labelledby={`room-title-${room.id}`}
        >
          {/* Image Wrapper */}
          <div className="aspect-[4/3] rounded-t-3xl overflow-hidden">
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              draggable={false}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-t-3xl pointer-events-none" />
          </div>

          {/* Info Overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex justify-between items-end mb-3">
              <div>
                <h3
                  id={`room-title-${room.id}`}
                  className="font-semibold text-3xl drop-shadow-md"
                >
                  {room.name}
                </h3>
                <p className="text-gray-200 mt-1 max-w-[320px] drop-shadow-sm">
                  {room.description}
                </p>
                <div className="flex items-center text-sm mt-3 text-blue-200 font-medium drop-shadow">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  {room.projectCount} projects
                </div>
              </div>

              {/* Toggle Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleRoomExpand(room.id);
                }}
                className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-semibold rounded-full shadow-lg transition-all text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-300"
                aria-expanded={isExpanded}
                aria-controls={`room-details-${room.id}`}
                aria-label={isExpanded ? `Collapse ${room.name} details` : `Expand ${room.name} details`}
                type="button"
              >
                {isExpanded ? 'Show Less' : 'View Details'}
              </button>
            </div>
          </div>

          {/* Expanded Details */}
          {isExpanded && (
            <div
              id={`room-details-${room.id}`}
              className="bg-white rounded-b-3xl p-10 animate-fadeIn ease-in-out duration-500 shadow-inner"
            >
              <div className="grid md:grid-cols-2 gap-12">
                {/* Design Styles */}
                <div>
                  <h4 className="text-2xl font-bold text-blue-900 mb-6 border-b border-blue-200 pb-3">
                    Popular Design Styles
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {room.styles.map((style) => (
                      <span
                        key={style}
                        className="px-4 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold shadow-sm hover:bg-blue-200 transition"
                      >
                        {style}
                      </span>
                    ))}
                  </div>

                  <h4 className="mt-10 text-2xl font-bold text-blue-900 mb-4 border-b border-blue-200 pb-3">
                    Most Requested Features
                  </h4>
                  <ul className="space-y-3 text-gray-700 list-inside list-disc">
                    {room.popularFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg
                          className="w-6 h-6 flex-shrink-0 text-blue-600 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Design Tips */}
                <div>
                  <h4 className="text-2xl font-bold text-blue-900 mb-6 border-b border-blue-200 pb-3">
                    Design Tips
                  </h4>
                  <ul className="list-disc list-inside space-y-3 text-gray-700 prose prose-blue max-w-none">
                    <li>Consider the room's primary function when selecting furniture and layout.</li>
                    <li>Layer lighting with ambient, task, and accent sources.</li>
                    <li>Choose durable, easy-to-clean materials for high-traffic areas.</li>
                    <li>Incorporate personal touches that reflect your style.</li>
                    <li>Don’t overlook storage solutions in your design plan.</li>
                  </ul>

                  <div className="mt-8">
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-400"
                      type="button"
                      aria-label={`View portfolio for ${room.name}`}
                    >
                      View {room.name} Portfolio
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    })}
  </div>
</section>


{/* PREMIUM BLOG SECTION */}
<section className="py-24 bg-gradient-to-b from-blue-50 to-white" aria-label="Design insights and trends">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="text-center mb-20">
      <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
        Latest Insights
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif tracking-tight">
        Design Wisdom & Industry Trends
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Expert perspectives on architecture, interior design, and sustainable living - curated to inspire your next project
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {blogs.map(blog => (
        <article 
          key={blog.id} 
          className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group isolate"
        >
          {/* Image with gradient overlay */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute top-5 left-5">
              <span className={`px-4 py-2 text-xs font-bold rounded-full tracking-wider uppercase ${
                blog.category === 'Trends' ? 'bg-purple-100 text-purple-800' :
                blog.category === 'Sustainability' ? 'bg-green-100 text-green-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {blog.category}
              </span>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-7">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <svg className="w-5 h-5 mr-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {blog.date}
              <span className="mx-2 text-gray-300">•</span>
              <svg className="w-5 h-5 mr-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {blog.readTime}
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-300">
              {blog.title}
            </h3>
            
            <p className="text-blue-600 font-medium mb-4">{blog.excerpt}</p>
            <p className="text-gray-700 mb-6 line-clamp-3 leading-relaxed">{blog.content}</p>
            
            {/* Author and Tags */}
            <div className="flex flex-col space-y-5">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-medium mr-3 flex-shrink-0">
                  {blog.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{blog.author}</p>
                  <p className="text-xs text-gray-500">Design Specialist</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full hover:bg-blue-100 hover:text-blue-800 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Read More Button */}
            <Link
              to={`/blog/${blog.id}`}
              className="mt-6 inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-sm"
              aria-label={`Read "${blog.title}" article`}
            >
              Continue Reading
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </article>
      ))}
    </div>
    
    {/* View All Button */}
    <div className="text-center mt-16">
      <Link
        to="/blog"
        className="inline-flex items-center px-8 py-4 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300"
        aria-label="Browse all blog articles"
      >
        Explore All Insights
        <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>
    </div>
  </div>
</section>

{/* contact us  */}
{/* ENHANCED BOOKING SECTION */}
<section className="py-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Contact us">
  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-[2rem] shadow-2xl overflow-hidden">
    <div className="grid lg:grid-cols-2 gap-0">
      {/* Left Panel - Booking Options */}
      <div className="bg-gradient-to-br from-blue-700 to-indigo-800 p-12 text-white relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif tracking-tight">Begin Your Design Journey</h2>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Let's collaborate to bring your vision to life. Select your preferred starting point and we'll tailor our approach to your unique needs.
          </p>
          
          <div className="space-y-4 mb-8">
            {[
              { 
                id: 'consultation', 
                title: 'Discovery Call', 
                desc: '30-minute free consultation to discuss your vision', 
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ) 
              },
              { 
                id: 'site-visit', 
                title: 'On-Site Evaluation', 
                desc: 'Comprehensive property assessment and planning', 
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ) 
              },
              { 
                id: 'design-plan', 
                title: 'Comprehensive Design', 
                desc: 'End-to-end design solution with 3D visualization', 
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ) 
              }
            ].map(option => (
              <button
                key={option.id}
                onClick={() => setSelectedService(option.id)}
                className={`w-full text-left p-5 rounded-xl transition-all duration-300 flex items-start ${
                  selectedService === option.id
                    ? 'bg-white/20 border border-white/30 shadow-lg transform scale-[1.02]'
                    : 'bg-white/10 hover:bg-white/15 border border-transparent hover:border-white/20'
                }`}
                aria-label={`Select ${option.title} service`}
              >
                <span className="text-white p-2 bg-white/20 rounded-lg mr-4 flex-shrink-0" aria-hidden="true">
                  {option.icon}
                </span>
                <div>
                  <h3 className="font-semibold text-lg">{option.title}</h3>
                  <p className="text-blue-100 text-sm mt-1">{option.desc}</p>
                </div>
              </button>
            ))}
          </div>
          
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
            <h4 className="font-semibold mb-3 text-lg">How to Reach Us</h4>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-medium">+91 98765 43210</p>
                  <p className="text-sm opacity-80">Available via WhatsApp</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-medium">hello@designstudio.com</p>
                  <p className="text-sm opacity-80">Response within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-medium">Monday - Friday: 9AM-7PM</p>
                  <p className="text-sm opacity-80">Saturday: 10AM-4PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Contact Form */}
      <div className="p-12 bg-white">
        {formSubmitted ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Submission Received!</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto leading-relaxed">
              Thank you for your interest. Our design consultant will contact you within 24 hours to discuss your project in detail.
            </p>
            <div className="space-y-3 max-w-xs mx-auto">
              <button
                onClick={() => setFormSubmitted(false)}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
              >
                Submit Another Inquiry
              </button>
              <button
                onClick={() => window.location.href = '/portfolio'}
                className="w-full px-6 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors font-medium"
              >
                Browse Our Portfolio
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 font-serif">Project Inquiry Form</h3>
              <p className="text-gray-600 mb-6">Complete this form and we'll prepare a customized proposal for your project.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors pl-10`}
                    required
                    aria-required="true"
                    aria-invalid={!!formErrors.name}
                    aria-describedby={formErrors.name ? "name-error" : undefined}
                    placeholder="John Smith"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                {formErrors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors pl-10`}
                    required
                    aria-required="true"
                    aria-invalid={!!formErrors.email}
                    aria-describedby={formErrors.email ? "email-error" : undefined}
                    placeholder="your@email.com"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                {formErrors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors pl-10"
                    placeholder="+91 98765 43210"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Contact Time
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Select preferred time</option>
                  <option value="Morning (9AM-12PM)">Morning (9AM-12PM)</option>
                  <option value="Afternoon (12PM-4PM)">Afternoon (12PM-4PM)</option>
                  <option value="Evening (4PM-7PM)">Evening (4PM-7PM)</option>
                  <option value="Flexible">Flexible schedule</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                Service Interested In <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${formErrors.service ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                required
                aria-required="true"
                aria-invalid={!!formErrors.service}
                aria-describedby={formErrors.service ? "service-error" : undefined}
              >
                <option value="">Select a service</option>
                <option value="Residential Design">Residential Design</option>
                <option value="Commercial Spaces">Commercial Spaces</option>
                <option value="Interior Architecture">Interior Architecture</option>
                <option value="Space Planning">Space Planning</option>
                <option value="Renovation & Remodeling">Renovation & Remodeling</option>
                <option value="Custom Furniture Design">Custom Furniture Design</option>
                <option value="Lighting Design">Lighting Design</option>
                <option value="Complete Home Makeover">Complete Home Makeover</option>
              </select>
              {formErrors.service && (
                <p id="service-error" className="mt-1 text-sm text-red-600">{formErrors.service}</p>
              )}
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                Project Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option value="">Select budget range</option>
                <option value="Under ₹5 lakhs">Under ₹5 lakhs</option>
                <option value="₹5-10 lakhs">₹5-10 lakhs</option>
                <option value="₹10-25 lakhs">₹10-25 lakhs</option>
                <option value="₹25-50 lakhs">₹25-50 lakhs</option>
                <option value="₹50 lakhs+">₹50 lakhs+</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Project Details <span className="text-gray-500">(Optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your project vision, specific requirements, preferred styles, and any challenges we should know about..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
              />
              <p className="mt-1 text-sm text-gray-500">The more details you provide, the better we can assist you.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-md hover:shadow-lg"
              >
                Submit Inquiry
                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => window.location.href = '/contact'}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition-colors"
              >
                Need Help?
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              By submitting this form, you agree to our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>. We respect your data and will never share it with third parties.
            </p>
          </form>
        )}
      </div>
    </div>
  </div>
</section>


      {/* Custom Styles */}
      <style jsx>{`
        .hero-swiper .swiper-pagination {
          bottom: 2rem;
        }
        
        .hero-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        
        .hero-pagination-bullet-active {
          background-color: rgba(255, 255, 255, 1);
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @keyframes fadein {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadein {
          animation: fadein 0.8s ease-out;
        }
        
        .animate-fadein-slow {
          animation: fadein 1.2s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
}
