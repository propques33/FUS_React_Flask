import React, { useEffect, useState } from "react";
import img1 from "../assets/cc1.png";
import img2 from "../assets/cc2.png";
import img3 from "../assets/cc3.png";
import img4 from "../assets/cc4.png";
import img5 from "../assets/cc5.png";


const slides = [
  {
    title: "Soho breakout area",
    image: img1,
  },
  {
    title: "Creative workspace lounge",
    image: img2,
  },
  {
    title: "Soho breakout area",
    image: img3,
  },
  {
    title: "Creative workspace lounge",
    image: img4,
  },
  {
    title: "Soho breakout area",
    image: img5,
  },
];

const AutoCarousel = () => {
  const [index, setIndex] = useState(0);

  // auto change every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative pt-0   w-full max-w-7xl mx-auto overflow-hidden h-[500px] bg-red-60 rounded-xl shadow-lg">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-[500px] object-cover"
          />
          {/* <div className="absolute top-6 left-1/2 text-sm text-center transform z-40 -translate-x-1/2 bg-white px-6 py-2 rounded-full text-blue-500  capitalize shadow-md">
            {slide.title}
          </div> */}
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`w-5 h-1 rounded-full ${
              i === index ? "bg-blue-500 z-20" : "bg-white"
            } transition-all duration-300`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel;
