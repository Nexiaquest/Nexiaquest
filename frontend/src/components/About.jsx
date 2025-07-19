import React from 'react';
import thermostat from '/src/assets/video.mp4'; // Ensure correct path
import happyWoman from '/src/assets/lisa.jpg';

const About = () => {
  return (
    <section className="bg-[#efefef] text-gray-900 py-20 px-6 md:px-20">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Section */}
        <div>
          <p className="text-xl text-blue-900 font-semibold mb-2">About Nexiaquest</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Multi-Sector Innovation,<br /> One Unified Vision
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Nexiaquest Ventures LLP is reshaping industries with smart, scalable solutions across Real Estate, Finance, Insurance, Legal, Education, and Marketing — all under one trusted brand.
          </p>

          <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
            <video
              src={thermostat}
              className="w-full md:w-[400px] md:h-[260px] rounded-xl object-cover shadow-lg"
            controls
              autoPlay
            />

            <ul className="text-sm text-gray-800 space-y-3 pt-2">
              {[
                "One Platform, Multiple Industries",
                "Tech-Enabled Real Estate & Smart Finance",
                "Client-Centric Solutions Across Sectors",
                "Trusted Advisors for Insurance & Legal",
                "Empowering Growth in Education & Marketing"
              ].map((point, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#d0e0e3] text-xl mr-2">✔</span>{point}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-gray-500 mb-4">
            Watch our story — a blend of purpose, expertise, and technology driving progress in every domain we touch.
          </p>

          <button className="bg-sky-600 text-white px-6 py-2 rounded-full hover:bg-sky-700 transition">
            Read More
          </button>
        </div>

        {/* Right Section */}
        <div className="relative">
          <img
            src={happyWoman}
            alt="Happy Woman"
            className="rounded-2xl w-full object-cover"
          />

          {/* Quote Box */}
          <div className="mt-6">
            <p className="text-lg italic text-gray-800 leading-snug pr-4">
              “A Smart Future Isn’t About Devices <br />
              It’s About Empowerment, Simplicity, and Growth.”
            </p>
            <p className="mt-2 text-sm text-gray-600">Team Nexiaquest</p>
          </div>

          {/* Stat Box */}
          <div className="absolute bottom-[10px] right-[-40px] bg-[#d0e0e3] p-6 rounded-2xl text-gray-900 shadow-lg w-48 text-center">
            <p className="text-3xl font-bold">1,200+</p>
            <p className="text-sky-900 font-semibold">Projects Delivered</p>
            <p className="text-xs text-gray-600 mt-1">Across 6 sectors and growing.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
