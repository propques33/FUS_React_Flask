import React, { useState, useRef } from "react";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import img1 from "../assets/ws.jpg";
import img2 from "../assets/ws2.jpg";
import img3 from "../assets/ws3.jpg";
import img4 from "../assets/ws5.jpg";
import img5 from "../assets/ws6.jpg";

const tabs = ["Spaces Nearby", "Spaces in Delhi"];

const workspaceData = {
  "Spaces Nearby": [
    {
      title: "Barista - Basant Lok",
      type: "WORKCAFE",
      location: "Saket, South Delhi",
      time: "10:00 to 18:00 - Monday to Saturday",
      price: 300,
      image: img1,
    },
    {
      title: "Effingut Brewpub - MGF",
      type: "WORKCAFE",
      location: "Saket, South Delhi",
      time: "12:00 to 19:00 - Monday to Sunday",
      price: 300,
      image: img2,
    },
    {
      title: "Zo Space - Plot no.5",
      type: "COWORKING",
      location: "Saket, South Delhi",
      time: "10:00 to 18:30 - Monday to Friday",
      price: 400,
      image: img3,
    },
    {
      title: "MIO Coworks",
      type: "COWORKING",
      location: "Saiyad Ul Ajaib Extension, South Delhi",
      price: 0,
      image: img4,
    },
    {
      title: "HUBHIVE11",
      type: "COWORKING",
      location: "Saket, South Delhi",
      time: "Saket (0.55 Kms away)",
      price: 0,
      image: img5,
    },
  ],
  "Spaces in Delhi": [
    // Duplicate or add different data here
  ],
};

const SimilarLocations = () => {
  const [activeTab, setActiveTab] = useState("Spaces Nearby");
  const scrollRef = useRef(null);

  return (
    <section className=" md:py-8 py-0 bg-white">
      <h2 className="text-xl capitalize md:text-xl font-medium text-gray-700 border-l-4 border-blue-500 pl-3 mb-4">
        Similar Location
      </h2>

      {/* Tabs */}
      <div className="flex mb-6 border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition ${
              activeTab === tab
                ? "text-blue-600 border-blue-500"
                : "text-gray-500 border-transparent hover:text-blue-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Card Scroll */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 scrollbar-hide"
      >
        {workspaceData[activeTab].map((space, idx) => (
          <div
            key={idx}
            className="min-w-[260px] max-w-[280px] bg-white rounded-lg border shadow-sm flex-shrink-0"
          >
            <img
              src={space.image}
              alt={space.title}
              className="w-full h-40 object-cover rounded-t-md"
            />
            <div className="p-4">
              <h4 className="text-md font-semibold text-gray-800">
                {space.title}
              </h4>
              <p className="text-xs text-blue-400 font-semibold mb-2">{space.type}</p>
              <div className="text-gray-600 text-sm flex items-start gap-1 mb-1">
                <MapPin size={14} /> {space.location}
              </div>
              {space.time && (
                <div className="text-gray-600 text-sm flex items-start gap-1 mb-2">
                  <Clock size={14} /> {space.time}
                </div>
              )}
              {space.price > 0 && (
                <p className="text-sm text-gray-900 font-medium mb-2">
                  ₹ {space.price} <span className="text-xs text-gray-500">/ day / person</span>
                </p>
              )}
              <a
                href="#"
                className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm inline-flex items-center gap-1"
              >
                Book Desk 
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimilarLocations;
