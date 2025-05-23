import React from "react";
import managedImg from "../assets/cc10.png"; // Replace with your image
import { Link } from "react-router-dom";
import mbl from '../assets/mbl.png'; // Replace with your image

const ManagedOfficeSection = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 md:px-0 bg-white flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-full md:w-1/2">
        <img
          src={mbl}
          alt="Managed Office"
          className="rounded-br-[80px] object-cover w-full "
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 text-left">
        <h2 className="text-2xl md:text-4xl font-medium text-blue-500 mb-4">
          Managed Office Solutions
        </h2>
        <p className="text-gray-500 mb-4 md:text-sm text-xs">
         Whether you’re a fast-growing startup or a scaling enterprise, our managed office space offers fully customized, ready-to-move office space solutions that evolve with your business. Move into fully furnished offices with ergonomic desks, high-speed internet, IT infrastructure, meeting rooms, breakout zones, a pantry, and 24/7 facility support. 
        </p>
        <p className="text-gray-500 mb-4 md:text-sm text-xs">
          At FindUrSpace, we specialize in end-to-end office space management — from plug-and-play offices to custom-fit-out office solutions tailored to your brand, workflow, and team size. Choose from flexible lease office solutions or long-term agreements with zero brokerage.
        </p>
        <p className="text-gray-500 mb-6 md:text-sm text-xs">
          Our private managed offices in India span major metros like Bangalore, Mumbai, Delhi, Hyderabad, and Tier-2 cities, delivering office space for startups and enterprise teams wherever you scale. 
        </p>
        <Link
          to="/managed-office"
          className="capitalize text-xs md:text-sm text-gray-800 px-6 py-2 rounded-full bg-yellow-300 hover:underline inline-flex items-center"
        >
          Explore managed office options →
        </Link>
      </div>
    </section>
  );
};

export default ManagedOfficeSection;
