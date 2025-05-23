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
          Whether you're a growing startup or a scaling enterprise, our managed office
          spaces are built to adapt. Move into ready-to-use offices fully equipped with
          desks, IT setup, breakout zones, and facility support — all tailored to your
          branding and workflow.
        </p>
        <p className="text-gray-500 mb-4 md:text-sm text-xs">
          From flexible lease terms to 24/7 support, we handle the backend while you focus
          on business growth. Our presence spans across Bangalore, Mumbai, Delhi, and
          Tier-2 hubs, offering local teams everything they need to operate with confidence.
        </p>
        <p className="text-gray-500 mb-6 md:text-sm text-xs">
          Prefer plug-and-play or customized fit-outs? We manage it end-to-end — ensuring
          your team gets a productive, secure, and inspiring workplace from day one.
        </p>
        <Link
          to="/managed-office"
          className=" text-xs md:text-sm text-gray-800 px-6 py-2 rounded-full bg-yellow-300 hover:underline inline-flex items-center"
        >
          Explore managed office options →
        </Link>
      </div>
    </section>
  );
};

export default ManagedOfficeSection;
