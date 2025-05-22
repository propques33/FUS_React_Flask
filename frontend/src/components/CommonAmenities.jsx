import React from "react";
import { Info, CheckCircle, XCircle } from "lucide-react";

const amenitiesAvailable = [
  { name: "2 wheeler parking", paid: true },
  { name: "4 wheeler parking", paid: true },
  { name: "Wifi" },
  { name: "Tea" },
  { name: "Coffee" },
  { name: "Chairs & Desks" },
  { name: "Separate Washroom" },
  { name: "Meeting Rooms", paid: true },
  { name: "Event Space", paid: true,  },
  { name: "Charging" },
  { name: "Power Backup" },
  { name: "Security Personnel" },
  { name: "First Aid Kit" },
  { name: "Breakout & Recreational Area",  },
  { name: "Lounge Area",  },
  { name: "Water" },
  { name: "Pantry Area" },
  { name: "Air Conditioners" },
  { name: "Fire Extinguisher" },
  { name: "Wellness Centre",  },
  { name: "Pet Friendly",  },
];

const notIncluded = ["Printer"];

const CommonAmenities = () => {
  return (
    <section className=" px-4 md:px-0 bg-white">
      <div className="flex items-center justify-between mb-2">
      

        <h2 className="text-xl capitalize md:text-xl font-medium text-gray-700 border-l-4 border-zinc-500 pl-3 mb-4">
        Common amenities
        </h2>
      
      </div>

      <p className="text-sm text-red-600 bg-red-100 p-3 rounded mb-6">
        Amenities like parking, phone booths are limited and subject to availability at the workspace.
      </p>

      {/* Available */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-800 flex items-center gap-2 mb-4">
          <CheckCircle size={18} className="text-green-600" /> AVAILABLE
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm mb-4 text-gray-800">
          {amenitiesAvailable.map((item, idx) => (
            <div key={idx} className="flex items-center gap-1">
              {item.isInfo ? (
                <Info size={16} className="text-blue-600" />
              ) : (
                <span className="text-blue-500">•</span>
              )}
              <span>{item.name}</span>
              {item.paid && (
                <span className="text-[10px] bg-yellow-100 text-yellow-600 rounded-full px-1.5">
                  ₹
                </span>
              )}
              {item.premier && (
                <span className="text-[10px] bg-slate-900 text-white rounded-sm px-1.5 font-bold">
                  P
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Not Included */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-800 flex items-center gap-2 mb-2">
          <XCircle size={18} className="text-red-500" /> NOT INCLUDED
        </h3>
        <ul className="list-disc pl-5 text-sm text-gray-500">
          {notIncluded.map((item, idx) => (
            <li key={idx} className="line-through">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <a
        href="#"
        className="text-zinc-900 font-semibold mt-4 inline-flex items-center gap-1 text-sm hover:underline"
      >
        View all amenities →
      </a>
    </section>
  );
};

export default CommonAmenities;
