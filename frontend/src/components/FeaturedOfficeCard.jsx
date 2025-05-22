import React from "react";
import { MapPin, Users } from "lucide-react";

const FeaturedOfficeCard = ({
  image,
  floor,
  title,
  description,
  desks,
  location,
  fullTimePrice,
  partTimePrice,
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-white text-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 mb-8 group">
      {/* Image */}
      <div className="relative w-full md:w-1/4">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <span className="absolute top-4 left-4 bg-blue-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
          {floor}
        </span>
      </div>

      {/* Content */}
      <div className="md:p-6 p-5 flex flex-col justify-between w-full md:w-3/4">
        <div>
          <h3 className="text-base md:text-xl font-semibold mb-2 group-hover:text-blue-500 transition">{title}</h3>
          <p className="text-sm md:text-base text-gray-600 md:mb-4 mb-2">{description}</p>
        </div>

        <div className="text-sm md:text-base text-gray-700 space-y-1 md:mb-4 mb-2">
          <div className="flex items-center gap-2">
            <Users size={16} /> {desks} desks
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} /> {location}
          </div>
        </div>

        <div className="flex justify-between items-center flex-wrap gap-3">
          <div className="text-sm md:text-base text-gray-700 space-y-1">
            <p>
              <span className="font-medium">Full Time:</span> {fullTimePrice}
            </p>
            <p>
              <span className="font-medium">Part Time:</span> {partTimePrice}
            </p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base font-medium px-5 py-2 rounded-full transition">
            Book a Tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedOfficeCard;
