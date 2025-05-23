import React from "react";
import img1 from "../assets/client.svg";
import img2 from "../assets/client2.svg";
import img3 from "../assets/client3.svg";
import img5 from "../assets/client5.svg"; // Add or replace with your own brand logos
import img6 from "../assets/client6.svg"; // Add or replace with your own brand logos

const images = [
  img1,
  img2,
  img3,
  img5,
  img6,
  img1,
  img2,
  img3,
  img5,
  img6,
  img1,
  img2,
  img3,
  img5,
  img6,
  img1,
  img2,
  img3,
  img5,
  img6,
  img1,
  img2,
  img3,
  img5,
  img6,
  img1,
  img2,
  img3,
  img5,
  img6,
  img1,
  img2,
  img3,
  img5,
  img6,
  img1,
  img2,
  img3,
  img5,
  img6,
  img1,
  img2,
  img3,
  img5,
  img6,
  img1,
  img2,
  img3,
  img5,
  img6,
];

const BrandMarquee = () => {
  return (
    <div>
      <div className="relative mb-10 text-center">
        <h1 className="text-2xl md:text-4xl font-medium text-gray-800 relative z-10 inline-block">
          Our Clients
         </h1>
        <div className="h-1 w-24 bg-blue-600 mx-auto mt-4 rounded"></div>
      </div>
      <div className="overflow-hidden bg-zinc-300 py-2 mb-12">
        {/* Marquee track */}
        <div className="flex gap-10 animate-marquee whitespace-nowrap">
          {[...images, ...images].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`brand-${idx}`}
              className=" md:w-60 w-32 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandMarquee;
