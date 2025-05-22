import React from "react";
import image1 from "../assets/w2.jpg"; // image of booth
import image2 from "../assets/w3.jpg"; // image of fabrics
import chair from "../assets/w4.jpg"; // image of the chair
import { FaCheck, FaChair } from "react-icons/fa";
import { PiSquaresFourLight, PiMonitorLight } from "react-icons/pi";
import { MdOutlineDesk, MdOutlineStorage } from "react-icons/md";

export default function OfficeSpacePlanningSection() {
  return (
    <section className="bg-white md:py-12    ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Text Content */}
        <div>
          <h2 className="text-[1.3rem] md:text-4xl font-medium text-gray-900 md:mb-6 mb-2 ">
            Office space planning, designed your way
            <span className="text-blue-500">.</span>
          </h2>
          <p className=" text-sm   text-gray-700 md:mb-8 mb-4">
            Creating the optimum layout for your office space design is vital to the success of your business. 
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-5 gap-4 text-gray-800">
            <Feature icon={<PiSquaresFourLight size={24} />} text="You can customise everything, including colours and branding" />
            <Feature icon={<PiMonitorLight size={24} />} text="A customised technology setup designed around you." />
            <Feature icon={<MdOutlineDesk size={24} />} text="Choose from a range of desk sizes and styles" />
            <Feature icon={<FaChair size={22} />} text="High-quality, ergonomic furniture from top brands" />
            <Feature icon={<FaCheck size={22} />} text="Select from a wide variety of stylish accessories" />
            <Feature icon={<MdOutlineStorage size={22} />} text="Storage options to suit your team’s requirements" />
          </div>
        </div>

        {/* Right: Images */}
        <div className="relative  w-full h-full flex justify-center ">
          <div className="relative w-full max-w-md ">
            <img
              src={image1}
              alt="Office Booth"
              className="rounded-md w-full object-cover shadow-md"
            />
            <img
              src={image2}
              alt="Fabric Samples"
              className="absolute md:block hidden top-1/2 left-[-50px] w-2/3 md:w-[240px] rounded-md border-white border-4 shadow-lg"
              style={{ transform: "translateY(-50%)" }}
            />
         
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, text }) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-blue-500 mt-1">{icon}</div>
      <p className="text-sm">{text}</p>
    </div>
  );
}
