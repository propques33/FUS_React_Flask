import React from "react";
import image1 from "../assets/cc5.png"; // top image (workspace)
import image2 from "../assets/cc4.png"; // bottom image (woman smiling)

export default function FlexibilitySection() {
  return (
    <section className="bg-[#f9f8f5] rounded-xl shadow-md p-4 md:p-12   my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-[1.3rem] md:text-4xl font-semibold text-gray-900 md:mb-4 mb-2">
            Prefer even more <br className="hidden md:block" /> flexibility?
          </h2>
          <p className="text-gray-700 md:text-sm text-xs md:mb-6 mb-4">
            A Regus Office Membership package helps you work the way you choose at over 4000 locations worldwide. Access Day Offices for 5, 10 or unlimited days each month, for one simple price.
          </p>
          <a
            href="#"
            className="text-blue-500 text-base font-medium underline inline-flex items-center hover:text-blue-600 transition"
          >
            View membership plans <span className="ml-1">→</span>
          </a>
        </div>

        {/* Image Section */}
        <div className="relative md:block hidden  flex justify-end">
          <div className="relative w-full max-w-xs">
            <img
              src={image1}
              alt="Workspace"
              className="rounded-md w-full object-cover shadow-md"
            />
      
          </div>
        </div>
      </div>
    </section>
  );
}
