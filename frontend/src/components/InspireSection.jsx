import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Import your image array
import img1 from "../assets/cw5.png";
import img2 from "../assets/cw6.png";
import img3 from "../assets/cw1.png";

const images = [img1, img2, img3];

const InspireSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-7xl mx-auto  py-20 grid md:grid-cols-2 gap-12 items-center md:px-0 px-4">
      {/* Text Block */}
      <div>
        <h2 className="text-4xl md:text-5xl capitalize text-gray-900 leading-tight mb-6">
          where community 
          and connections 
          ignite better 
          work experiences
        </h2>

        <p className="text-gray-700 text-base mb-4">
          At Propques, workspaces are more than just desks — they’re ecosystems
          for collaboration, learning, and meaningful growth.
        </p>
        <p className="text-gray-700 text-base mb-8">
          Whether you need a private cabin, meeting room, or hot desk, you’ll
          thrive in a professional environment surrounded by creators, founders,
          and future leaders. We curate not just space — we craft the right
          experience.
        </p>

        <Link
          to="/view-all-projects"
          className="bg-[#20B1EE] hover:bg-sky-600 text-white py-2 px-5 rounded-full"
        >
          View Spaces
        </Link>
      </div>

      {/* Image Block */}
      <div className="relative">
      <div className="relative overflow-hidden h-[390px] rounded-xl shadow-md">

      <div
          className="flex transition-transform duration-700 ease-in-out overflow-hidde"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Coworking"
              className="w-full object-cover rounded-xl"
            />
          ))}
        </div>

        </div>

        <div className="absolute top-4 left-4 w-full h-full border border-[#f0f0f0] rounded-xl -z-10 transform translate-x-4 translate-y-4" />
      </div>
    </section>
  );
};

export default InspireSection;
