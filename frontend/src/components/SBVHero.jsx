import React, { useState, useEffect } from "react";
import SBVHeroForm from "./SBVHeroForm.jsx";
import heroimg from "../assets/cc3.png";

const SBVHero = () => {
  const [dynamicWord, setDynamicWord] = useState("Opportunity");
  const [animate, setAnimate] = useState(false);

  const words = ["Opportunity", "Success", "Innovation", "Collaboration", "Growth"];

  useEffect(() => {
    let wordIndex = 0;
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        wordIndex = (wordIndex + 1) % words.length;
        setDynamicWord(words[wordIndex]);
        setAnimate(false);
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row relative h-screen bg-gray-900"
      style={{
        backgroundImage: `url(${heroimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 to-black/80 md:bg-gradient-to-t md:from-black/100   md:to-transparent"></div>

      {/* Content Wrapper */}
      <div className="relative z-20 max-w-7xl mx-auto flex flex-col md:flex-row w-full px-4 md:px-0">
        {/* Left Section */}
        <div className="md:w-1/2 h-1/2 md:h-full flex flex-col justify-center pt-20 md:pt-0">
          <div className="bg-white bg-opacity-30 px-4 py-1 rounded-lg font-medium text-sm text--500 w-fit mb-4">
            Coworking Space
          </div>
          <h1 className="text-4xl md:text-6xl font-medium text-white mb-4">
            A Space For <br />
            <span
              className={`inline-block font-medium mt-1 text--400 transform transition-all duration-500 ${
                animate ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
              }`}
            >
              {dynamicWord}
            </span>
          </h1>
          <p className="text-white text-sm md:text-base max-w-2xl">
            Coworking spaces offer cost savings and foster collaboration, making them ideal for small and growing businesses.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 w-full flex items-center justify-end py-10 md:py-0">
          <div className="bg-white shadow-xl rounded-lg p-5 md:p-8 w-full max-w-md">
            <h2 className="text-base md:text-xl font-medium text-gray-800 text-center mb-6">
              Quickly Locate Your Next <br /> Coworking Space
            </h2>
            <SBVHeroForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SBVHero;
