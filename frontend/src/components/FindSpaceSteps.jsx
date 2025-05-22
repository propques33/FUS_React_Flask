import React from "react";
import step1 from "../assets/w1.jpg";
import step2 from "../assets/w2.jpg";
import step3 from "../assets/w3.jpg";
import step4 from "../assets/w4.jpg";
import step5 from "../assets/w5.jpg";
import search from '../assets/steps/search.webp'
import search2 from '../assets/steps/search2.webp'
import search3 from '../assets/steps/search3.webp'
import search4 from '../assets/steps/search4.webp'
import search5 from '../assets/steps/search5.webp'

const steps = [
  { label: "Search for a Space", image: search2 },
  { label: "Shortlist Spaces", image: search },
  { label: "Schedule a Visit", image: search3 },
  { label: "Finalize the Deal", image: search4 },
  { label: "Move In & Start Working", image: search5 },
];

const FindSpaceSteps = () => {
  return (
    <section className="pb-20 pt-20 bg-white relative">
      {/* Heading */}
      <div className="text-center px-4 relative mb-12">
        <h2 className="text-2xl md:text-4xl font-medium relative z-10 inline-block">
          Find your space in{" "}
          <span className="bg-blue-500 px-3 py-1 rounded-full text-white inline-block">
            5
          </span>{" "}
          simple steps
        </h2>
        <span className="absolute -top-4 -left-6 w-16 h-16 bg-yellow-300/40 rounded-full -z-10"></span>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:gap-8 gap-4 max-w-7xl mx-auto px-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex md:flex-col border-[1px] md:border-[0px] rounded-2xl gap-4 items-center text-center group transition-transform duration-300 hover:scale-105"
          >
            {/* Image */}
            <img
              src={step.image}
              alt={step.label}
              className="w-28 h-28 md:w-44 md:h-44 object-cover rounded-lg  "
            />

            {/* Number circle */}
            <div className="bg-yellow-400 text-zinc-700 w-8 h-8 md:w-10 md:h-10 md:flex hidden items-center justify-center rounded-full text-sm md:text-base font-semibold mt-">
              {index + 1}
            </div>

            {/* Step text */}
            <p className="text-gray-800 font-medium text-sm md:text-base mt- max-w-[160px]">
              {step.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FindSpaceSteps;
