import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt,FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.jpg";

const services = [
  "Real Estate Services",
  "Education Services",
  "Finance Services",
  "Insurance Services",
  "Marketing Services",
  "Legal Services",
  "Shares & Mutual Fund Services",
  "Architecture & Interior Services",
];

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
<div className="shadow-md w-full font-gellix">
      <div className="bg-white text-sm px-6 py-2 flex justify-between items-center border-b">
        <div className="text-gray-600 flex items-center gap-6 text-sm pl-4">
  <span className="flex items-center gap-2">
    <FaMapMarkerAlt className="text-blue-900" /> Thane, India
  </span>
  <span className="flex items-center gap-2">
    <FaPhoneAlt className="text-blue-900" /> 9529412675
  </span>
</div>

        <div className="flex gap-5 text-blue-900 pr-10">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaFacebookF /></a>
        </div>
      </div>

      <div className="bg-[#000048] text-white text-sm font-medium py-2">
       <marquee behavior="scroll" direction="left" scrollamount="6">
  {services.map((service, idx) => (
    <span key={`1-${idx}`} className="mx-4">• {service}</span>
  ))}
    <span className="inline-block w-20"></span>
  {services.map((service, idx) => (
    <span key={`2-${idx}`} className="mx-4">• {service}</span>
  ))}
</marquee>
      </div>
      <nav className="bg-white px-6 py-3 sticky top-0 z-50 shadow-sm">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 pl-4">
            <img src={logo} alt="Nexiaquest Logo" className="h-16 w-auto" />
            <div className="leading-tight text-blue-900">
              <div className="text-xl font-extrabold tracking-wide">NEXIAQUEST</div>
              <div className="text-sm font-medium tracking-wider">VENTURES LLP</div>
            </div>
          </Link>

          <ul className="flex space-x-12 items-center text-gray-700 text-[17.5px] pr-16">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>

            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hover:text-blue-600"
              >
                Services ▾
              </button>
              {dropdownOpen && (
                <ul className="absolute bg-white shadow-lg rounded-md mt-2 py-2 w-64 z-10">
                  {services.map((service, idx) => (
                    <li key={idx}>
                      <Link
                        to={`/${service.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                        className="block px-4 py-2 hover:bg-blue-100"
                      >
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li><Link to="/careers" className="hover:text-blue-600">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">Contact Us</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
