import React from "react";
import {
  MapPin,
  Clock,
  ChevronLeft,
  ChevronRight,
  Users,
  Train,
  Star,
  ShieldCheck,
  Plus,
} from "lucide-react";
import cc3 from "../assets/cc3.png";

const WorkspaceCard = ({ data }) => {

  return (
    <div className="bg-white rounded-xl shadow-sm border flex flex-col md:flex-row overflow-hidden w-full">
      {/* Image Section */}
      <div className="relative md:w-[320px] w-full h-60 md:h-auto">
        <img src={data.image || cc3} alt={data.title} className="w-full h-full object-cover" />
        {/* Arrows */}
        <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow hover:bg-gray-100">
          <ChevronLeft size={16} />
        </button>
        <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow hover:bg-gray-100">
          <ChevronRight size={16} />
        </button>
        {/* Popular Badge */}
        <span className="absolute top-3 left-3 bg-white text-yellow-500 font-medium text-xs px-2 py-1 rounded shadow">
          ★ Popular
        </span>
      </div>

      {/* Details Section */}
      <div className="flex flex-col justify-between p-4 flex-1">
        <div>
          {/* Ratings */}
       

          {/* Title & Info */}
          <h3 className="text-base font-semibold text-gray-800 mt-1">
            {data.title}
          </h3>
          <p className="text-xs text-gray-500 flex items-center gap-1 mt-2">
            <MapPin size={12} /> {data.location}
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-1 mt-2">
            <Clock size={12} /> {data.hours}
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-1 mt-2">
            <Train size={12} /> Metro/Rail Connectivity
          </p>

          {/* Services */}
          {/* <div className="flex flex-wrap gap-2 mt-3 text-xs font-medium text-gray-800">
            {data.services.map((tag, i) => (
              <span key={i} className="bg-gray-100 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div> */}

          {/* Features */}
          <div className="flex flex-wrap gap-2 mt-3 items-center text-xs font-medium text-gray-600">
            {data.features.slice(0, 2).map((feat, i) => (
              <span
                key={i}
                className="border px-2 py-1 rounded-full flex items-center gap-1"
              >
                {feat.icon}
                {feat.label}
              </span>
            ))}
            {data.features.length > 2 && (
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Plus size={12} />
                {data.features.length - 2}
              </span>
            )}
          </div>
        </div>

        {/* Price + CTA */}
        <div className="flex gap-4 md:flex-row justify-between items-start md:items-center mt-4 gap-">
          <div className="flex gap-4">
            {/* <p className="text-xs text-gray-500">Quoted price (negotiable)</p> */}
            <p className="text-xl flex items-center justify-center gap- font-semibold text-gray-800">
              ₹{data.price} <span className="text-xs text-gray-500 font-normal">/desk/hour</span>
            </p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg text-xs font-medium w-full md:w-auto">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceCard;
