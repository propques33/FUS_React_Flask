import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import cc3 from "../assets/cc3.png";
import m1 from "../assets/m1.png";
import m2 from "../assets/m2.png";
import m3 from "../assets/m3.png";
import m4 from "../assets/m4.png";
import m5 from "../assets/m5.png";

const CoworkingPromo = () => {
  return (
    <section className="bg-blue-600 text-white md:pb-32 pb-16 pt-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative z-10">
        {/* Left: Cards */}
        <div className="relative md:flex flex-col items-center md:items-start hidden">
          {/* Card 1 */}
          <div className="bg-white text-black p-4 rounded-2xl w-[90%] sm:w-[280px] shadow-2xl transition-transform hover:scale-[1.02] z-10">
            <span className="text-xs font-semibold bg-zinc-100 text-zinc-800 px-2 py-1 rounded">
              Day Pass in Lucknow
            </span>
            <img src={cc3} alt="Cubispace" className="rounded-lg mt-3 w-full" />
            <h4 className="font-semibold mt-2">Cubispace</h4>
            <p className="text-sm text-gray-500">2nd Floor, JSV Hyundai, Lucknow, Uttar Pradesh</p>
            <p className="font-bold mt-1 text-blue-600">
              ₹500 <span className="font-normal text-sm">/ day</span>
            </p>
          </div>

          {/* Card 2 Overlapping */}
          <div className="absolute top-40 left-8 sm:left-32 bg-white text-black p-4 rounded-2xl w-[90%] sm:w-[300px] md:w-[400px] shadow-2xl scale-95 z-0 transition-transform hover:scale-100 hidden sm:block">
            <span className="text-xs font-semibold bg-zinc-100 text-zinc-800 px-2 py-1 rounded">
              Coworking in Indore
            </span>
            <img
              src="https://www.workdesq.com/wp-content/uploads/2024/01/DSC_3303-scaled.jpg"
              alt="Workdesq"
              className="rounded-lg mt-3 w-full"
            />
            <h4 className="font-semibold mt-2">Worqspot</h4>
            <p className="text-sm text-gray-500">Tower 4, 5, Vashi Railway Station Rd, Navi Mumbai, Maharashtra</p>
            <p className="font-bold mt-1 text-blue-600">
              ₹600 <span className="font-normal text-sm">/ Day</span>
            </p>
          </div>
        </div>

        {/* Right: Text & Trust Section */}
        <div className="flex flex-col justify-between space-y-10">
          {/* Headline */}
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold leading-snug">
              Discover The   {" "} <br />
              <span className="text-yellow-300">Best Coworking Locations </span> &
              <br className="hidden md:block" />
              Office Rental In India
            </h2>
            <p className="mt-4 text-lg">
              India’s{" "}
              <span className="font-semibold underline underline-offset-2">
                #1 Most Trusted  
              </span>{" "}
             Coworking Space Discovery Platform

            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 w-full text-center">
            {[
              { label: "Live Spaces", value: "100,000+" },
              { label: "Locations", value: "1,000+" },
              { label: "Cities", value: "25+" },
            ].map((item, idx) => (
              <div key={idx}>
                <p className="text-xl md:text-2xl font-semibold">{item.value}</p>
                <p className="text-sm text-white/80">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Trust Section */}
          <div className="bg-white text-black rounded-3xl p-6 md:p-10 shadow-xl">
            <div className="flex flex-col items-center gap-6 text-center">
              {/* Stars */}
              <div className="flex items-center gap-2 flex-wrap justify-center">
                {[...Array(4)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
                <FaStarHalfAlt className="text-yellow-500" />
                <p className="ml-2 text-sm md:text-base font-medium">
                  Featured in 20+ Esteemed Media
                </p>
              </div>

              {/* Logos - Marquee */}
              <div className="overflow-hidden w-full">
                <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
                  {[m1, m2, m3, m4, m5, m1, m2, m3, m4, m5].map((logo, i) => (
                    <img
                      key={i}
                      src={logo}
                      alt="media logo"
                      className="h-6 object-contain"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoworkingPromo;
