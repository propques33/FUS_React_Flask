import React, { useEffect, useRef, useState  } from "react";
import cc3 from "../assets/cc3.png";
import cc4 from "../assets/cc4.png";
import cc7 from "../assets/cc7.png";
import cc10 from "../assets/cc10.png";
import ws5 from "../assets/ws5.jpg";
import ws7 from "../assets/ws7.jpg";
import w2 from "../assets/w2.jpg";
import w4 from "../assets/w4.jpg";
import { getCities } from "../utils/api";
import { ChevronLeft, ChevronRight } from "lucide-react";
import defaultImage from "../assets/adarsh.png";

const cityData  = [
  { name: "Gurugram", subtitle: "Millennium City", image: w4, workspaces: 385 },
  { name: "Hyderabad", subtitle: "City of Pearls", image: w2, workspaces: 284 },
  {
    name: "Bangalore",
    subtitle: "India's Silicon Valley",
    image: cc4,
    workspaces: 830,
  },
  { name: "Mumbai", subtitle: "City of Dreams", image: ws7, workspaces: 263 },
  {
    name: "Pune",
    subtitle: "Queen of the Deccan",
    image: cc7,
    workspaces: 377,
  },
  {
    name: "Delhi",
    subtitle: "The Nation's Capital",
    image: cc10,
    workspaces: 388,
  },
  { name: "Noida", subtitle: "The Hi-tech City", image: ws5, workspaces: 306 },
  { name: "Lucknow", subtitle: "City of Nawabs", image: cc3, workspaces: 62 },
];

const TopCoworkingCities = () => {
  const [cities, setCities] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    getCities()
      .then((data) => {
        const enriched = data.map((city) => {
          const info = cityData[city] || {};
          return {
            name: city,
            subtitle: info.subtitle || "Explore Spaces",
            image: info.image || defaultImage,
            workspaces: info.workspaces || 99, // fallback count
          };
        });
        setCities(enriched);
      })
      .catch(console.error);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 max-w-7xl mx-auto bg-white text-center relative">
      {/* Heading */}
      <div className="text-center mb-12 relative inline-block">
        {/* Yellow circle in background */}

        <h2 className=" text-2xl md:text-4xl font-medium relative z-10">
          Top Coworking Cities In <span className="text-blue-600">India</span>
        </h2>
        <div className="absolute -top-4 -left-6 w-14 h-14 bg-yellow-300/50 rounded-full z-0"></div>

        <div className="h-[2px] w-24 bg-blue-600 mx-auto mt-3 rounded" />
      </div>

      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute hidden md:block bg-white left-0 top-80 -translate-y-1/2 z-10 bg-red-00 shadow-md rounded-full p-2"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute hidden md:block bg-white right-0 top-80 -translate-y-1/2 z-10 bg-red-00 shadow-md rounded-full p-2"
      >
        <ChevronRight size={20} />
      </button>

      {/* Grid */}
      <div
  ref={scrollRef}
  className="flex overflow-x-auto space-x-4 pb-2 scroll-smooth scrollbar-hide px-6"
>
        {cities.map((city, index) => (
          <div
            key={index}
            className="relative rounded-xl   group   transition-all duration-300 min-w-[300px] max-w-[300px] flex-shrink-0 rounded-xl overflow-hidden shadow bg-white  transition border border-gray-200"
          >
            <img
              src={city.image}
              alt={city.name}
              className="w-full md:h-80 h-52 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-blue-600/100 via-blue-500/100 to-transparent md:p-4 p-2 text-left text-white">
              <h4 className="font-semibold text-lg">{city.name}</h4>
              <p className="text-sm text-white/70 ">
                {city.workspaces} Workspaces
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCoworkingCities;
