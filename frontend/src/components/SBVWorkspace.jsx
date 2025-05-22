import React, { useState } from "react";
import HeroForm from "./SBVHeroForm"; // Import the HeroForm component

const MembershipOptions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const memberships = [
    {
      title: "Hot Desk",
      price: "₹5000 / Seat!",
      features: [
        "Sitting space",
        "12/6 access",
        "Unlimited wifi",
        "Electricity",
        "Unlimited tea coffee",
        "Drinking water",
        "Housekeeping services",
        "2 hours conference room",
      ],
      button: "Book Now",
    },
    {
      title: "Day Pass",
      price: "₹500 / Seat!",
      features: [
        "Sitting space",
        "12 hour access",
        "Unlimited wifi",
        "Electricity",
        "Unlimited tea coffee",
        "Drinking water",
        "Housekeeping services",
      ],
      button: "Book Now",
    },
    {
      title: "Conference",
      price: "₹800 / Hour",
      features: [
        "8 seater space",
        "Hourly access",
        "Unlimited wifi",
        "Electricity",
        "Screen connectivity",
        "Unlimited tea coffee",
        "Drinking water",
        "Housekeeping services",
      ],
      button: "Book Now",
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-b from-  to--500 pb-20  px-6">
        <div className="text-center mb-12 pt-10">
          <h2 className="text-4xl font-medium">
            <span className="text--500 font-medium">Seating</span>{" "}
            <span className="text- ">Options</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {memberships.map((membership, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-medium text-gray-800 mb-02">
                  {membership.title}
                </h3>
                <p className="mt-2  font-medium text-white bg-green-500 inline-block px-4 mb-6">
                  {membership.price}
                </p>
                <ul className="space-y-3 text-gray-600">
                  {membership.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="mr-2 text-green-500">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className="mt-6 bg-zinc-950 text-white font-n py-2 px-4 rounded-lg hover:bg-green-500 transition duration-300"
                onClick={() => setIsModalOpen(true)} // Open the modal
              >
                {membership.button}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Section */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-4xl text-black hover:text-red-500"
              onClick={() => setIsModalOpen(false)} // Close the modal
            >
              &times;
            </button>
            <div className="bg-white rounded-lg p-2 md:p-4 w-full max-w-md">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 text-center mb-6">
                Quickly Locate Your Next <br /> Coworking Space
              </h2>
              <HeroForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MembershipOptions;