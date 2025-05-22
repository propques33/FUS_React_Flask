import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const HeroWithTrustedSection = () => {
  return (
    <>
      {/* Blue Hero Section */}
      <section className="bg-blue-600 text-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Cards */}
          <div className="relative flex justify-center md:justify-start">
            {/* Card 1 */}
            <div className="bg-white text-black p-4 rounded-2xl w-[260px] shadow-xl z-10">
              <span className="text-xs font-semibold bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                Coworking
              </span>
              <img
                src="https://via.placeholder.com/260x140"
                alt="Coworking"
                className="rounded-lg mt-2"
              />
              <h4 className="font-semibold mt-2">WeWork Forum</h4>
              <p className="text-sm text-gray-500">DLF Cyber City, Gurugram</p>
              <p className="font-bold mt-1 text-blue-600">
                ₹ 28,000 <span className="font-normal text-sm">/ month</span>
              </p>
            </div>

            {/* Card 2 */}
            <div className="absolute top-24 left-32 bg-white text-black p-4 rounded-2xl w-[240px] shadow-xl scale-95">
              <span className="text-xs font-semibold bg-green-100 text-green-800 px-2 py-1 rounded">
                Coliving
              </span>
              <img
                src="https://via.placeholder.com/240x130"
                alt="Coliving"
                className="rounded-lg mt-2"
              />
              <h4 className="font-semibold mt-2">Stanza Living Dunkirk House</h4>
              <p className="text-sm text-gray-500">Sector 48, Gurugram</p>
              <p className="font-bold mt-1 text-blue-600">
                ₹ 11,799 <span className="font-normal text-sm">/ month</span>
              </p>
            </div>
          </div>

          {/* Right: Text & CTA */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Boost your{" "}
              <span className="text-yellow-300">Revenue, Visibility & Leads</span> with Cofynd Plans
            </h2>
            <p className="mt-4 text-lg">
              India’s{" "}
              <span className="font-semibold text-white underline underline-offset-2">
                #1 online platform
              </span>{" "}
              for Coworking & Coliving Spaces
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
              <button className="bg-white text-blue-600 px-5 py-2 rounded-md font-semibold hover:bg-blue-100 transition">
                List Your Space
              </button>
              <button className="border border-white px-5 py-2 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition">
                Business Plans
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-10 text-center">
              <div>
                <p className="text-2xl font-bold">100,000+</p>
                <p className="text-sm text-white/80">Live Spaces</p>
              </div>
              <div>
                <p className="text-2xl font-bold">1,000+</p>
                <p className="text-sm text-white/80">Locations</p>
              </div>
              <div>
                <p className="text-2xl font-bold">25+</p>
                <p className="text-sm text-white/80">Cities</p>
              </div>
            </div>
          </div>
        </div>

        {/* White Curve Divider */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-white rounded-t-[100px] z-0"></div>
      </section>

      {/* Trusted Companies Section */}
      <section className="bg-white text-black -mt-16 pt-24 pb-12 px-4 md:px-10 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Stars + Heading */}
          <div className="flex justify-center items-center gap-1 text-yellow-500 text-xl mb-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
            Trusted by more than 500+ Companies
          </h3>

          {/* Logos */}
          <div className="flex flex-wrap justify-center items-center gap-10 mt-4">
            <img src="/logos/ble.png" alt="BLE" className="h-8 object-contain" />
            <img src="/logos/hector.png" alt="Hector Beverages" className="h-8 object-contain" />
            <img src="/logos/purple.png" alt="Purple" className="h-8 object-contain" />
            <img src="/logos/fyp.png" alt="Fyp" className="h-8 object-contain" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroWithTrustedSection;
