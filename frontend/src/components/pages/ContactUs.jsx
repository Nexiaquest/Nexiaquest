'use client';

import { motion } from 'framer-motion';

const partners = [
  {
    name: 'SBI',
    logo: 'https://companieslogo.com/img/orig/SBIN.NS-5d51f75d.png?t=1596538559',
  },
  {
    name: 'HDFC',
    logo: 'https://companieslogo.com/img/orig/HDFCBANK.NS-5d51f6f6.png?t=1596538850',
  },
  {
    name: 'PNB',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/PNB_Logo.svg/2560px-PNB_Logo.svg.png',
  },
  {
    name: 'LIC',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/LIC_Logo.svg/1200px-LIC_Logo.svg.png',
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

const Marquee = ({ reverse = false }) => {
  const direction = reverse ? '100%' : '-100%';

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex w-max gap-12"
        animate={{ x: [0, direction] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20, // adjust speed here
            ease: 'linear',
          },
        }}
      >
        {/* Repeating logos twice for infinite loop */}
        {[...partners, ...partners].map((partner, i) => (
          <div
            key={i}
            className="w-32 h-20 flex items-center justify-center bg-white shadow rounded-md"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-12 object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function ContactUs() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Our Trusted Partners</h2>
        <p className="text-gray-600">India’s leading institutions working with us</p>
      </div>

      <div className="space-y-6">
        {/* Row 1: left to right */}
        <Marquee reverse={false} />
       
      </div>
    </section>
  );
}
