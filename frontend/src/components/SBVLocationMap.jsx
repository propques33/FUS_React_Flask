import React from "react";
import { FaPlaneDeparture, FaTrain, FaSubway } from "react-icons/fa";

const data = [
  {
    icon: <FaPlaneDeparture className="w-6 h-6 text--500" />,
    distance: "19 KM",
    location: " International Airport",
  },
  {
    icon: <FaSubway className="w-6 h-6 text--500" />,
    distance: "5 KM",
    location: " Metro Station",
  },
  {
    icon: <FaTrain className="w-6 h-6 text--500" />,
    distance: "11 KM",
    location: "  Railway Station",
  },
];

export default function CoworkingHighlight() {
  return (
    <div className="bg-gray-0 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
          Best Coworking Spaces in Jankipuram, Lucknow
        </h2>
        <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
          Located in the prime area of the royal city Lucknow, the first-born of Cubispace family holds a special space and is spread over 8000 sq. ft. With biophilic elements and top connectivity via Aliganj, Vikas Nagar, Mahanagar, and Sitapur Road, this space is perfect for growth-focused individuals.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4 text-center md:flex-col md:space-x-0 md:space-y-2 md:text-center"
          >
            <div className="flex-shrink-0">{item.icon}</div>
            <div>
              <p className="text-xl font-medium text- -600">{item.distance}</p>
              <p className="text-gray-700 text-sm mt-1">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
