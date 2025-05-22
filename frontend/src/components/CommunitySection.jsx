import React from "react";
import communityImg from "../assets/cw4.png"; // Use your own image
import { Link } from "react-router-dom";

const CommunitySection = () => {
  return (
    <section className="max-w-7xl md:px-0 px-4 mx-auto  py-10 grid md:grid-cols-2 gap-12 items-center">
      {/* Text Content */}
      <div>
        <h2 className="text-4xl md:text-5xl capitalize  text-gray-900 leading-tight mb-6">
        Create, Collab, Cowork!
  
        </h2>

       
        <p className="text-gray-700 text-base mb-4">
          Whether you’re looking for a single desk, a private office for your
          team or a meeting room, you’ll feel inspired to produce your best work
          at Propques.
        </p>

        <ul className="text-gray-700 text-base list-disc list-inside space-y-1 mb-8">
  <li>Verified Workspaces You Can Trust</li>
  <li>Expert Support, Online and Offline</li>
  <li>Quick and Hassle-Free Bookings</li>
  <li>No Hidden Fees, Just Great Deals</li>
  <li>Solutions for Every Stage of Growth</li>
  <li>Flexible Plans for Teams of All Sizes</li>
  <li>Fully Managed End-to-End Services</li>
  <li>One-Stop Destination for All Your Needs</li>
</ul>


        <Link to='/view-all-projects' className="bg-[#20B1EE] hover:bg-sky-600 text-white  py-2 px-5 rounded-full">
        Explore Spaces
        </Link>
      </div>

      {/* Image Content */}
      <div className="relative">
        <img
          src={communityImg}
          alt="Community at Propques"
          className="rounded-xl shadow-md"
        />
        <div className="absolute top-4 left-4 w-full h-full border border-[#f0f0f0] rounded-xl -z-10 transform translate-x-4 translate-y-4" />
      </div>
    </section>
  );
};

export default CommunitySection;
