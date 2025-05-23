import React, { useState, useRef } from "react";
import w4 from "../assets/cc4.webp";
import w2 from "../assets/w2.jpg";
import ws5 from "../assets/ws5.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample category-wise data
const spaceData = {
  "Coworking Space": [
    {
      title: "Meeting Room in Cubispace",
      description: "Book a meeting room for your next big idea.",
      location: "Lucknow",
       image: w4,
    },
    {
      title: "Day Pass in Worqspot",

      description: "Book for a Day—flexibility redefined for your dynamic work needs.",
      location: "Vashi, Navi Mumbai",
      image: w2,
    },
    {
      title: "Private Cabin in Workdesq",
      description: "A perfect blend of privacy and productivity for teams of any size.",
      location: "Indore",
      image: ws5,
    },
     
  ],

  "Managed Office": [
    {
      title: "Business Address",
      description: "Get a premium address without renting physical space.",
      image: w4,
    },
  ],
};

const TrendingSpaces = () => {
  const [selectedCategory, setSelectedCategory] = useState("Coworking Space");
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="pb-16 max-w-7xl mx-auto px-4 md:px-0 bg-gradient-to-b   text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-medium mb-2 relative inline-block">
        <span className="px-2 py-1 rounded-full text-black relative z-10">
          Featured
         </span>{" "}
        Workspaces
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto  mt-0 text-xs md:text-base">
Browse and book Top-Rated Coworking Spaces Near You. Perfect for freelancers, startups, and teams alike

      </p>
      <div className="h-[2px] w-32 bg-blue-600 mx-auto my-4 rounded" />

      {/* Category Tabs */}
      <div className="flex   justify-center gap-2 md:gap-4 mt-6">
        {Object.keys(spaceData).map((cat) => (
          <button
            key={cat}
            className={`md:px-4 px-2  py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === cat
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            <p className="text-xs md:text-sm">{cat}</p>
          </button>
        ))}
      </div>

      {/* Scrollable Cards with Arrows */}
      <div className="relative mt-10">
        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute hidden md:block left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute hidden md:block right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
        >
          <ChevronRight size={20} />
        </button>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 pb-2 scroll-smooth scrollbar-hide px-6"
        >
          {spaceData[selectedCategory].map((space, idx) => (
            <div
              key={idx}
              className="min-w-[300px] max-w-[300px] flex-shrink-0 rounded-xl overflow-hidden shadow bg-white  transition border border-gray-200"
            >
              <img
                src={space.image}
                alt={space.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-left flex flex-col gap-">
                <h3 className="text-lg font-medium text-gray-800">
                  {space.title}
                </h3>
                <p className="text-  text-gray-500  flex inline-block">{space.location}</p>
                <div className="  items-center gap-2 mt-1">
                  <p className="text-xs mt-2 text-gray-500">Starting From</p>
                  <p className="text-xl font-semibold text-blue-500">
                    ₹500 <span className="text-xs text-gray-500 font-normal">/desk/hour</span>
                  </p>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full mt-4 transition">
                  <p className="text-sm font-   ">
                    Book Now
                  </p>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSpaces;
