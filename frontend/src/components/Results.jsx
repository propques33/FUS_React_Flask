import React, { useState } from "react";
import CoworkingFilterBar from "../components/CoworkingFilterBar.jsx";
import WorkspaceCard from "../components/WorkspaceCard.jsx";
import Usp1 from "../components/Usp1.jsx";
import Usp2 from "../components/Usp2.jsx";
import Usp3 from "../components/Usp3.jsx";
import ResultsBlogSection from "../components/ResultsBlogSection.jsx";
import FAQSection from "../components/FAQSection.jsx";
import cc3 from "../assets/cc3.png";
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
import ResultCouponMarquee from "../components/ResultCouponMarquee.jsx";

const Results = () => {
  const [viewMode, setViewMode] = useState("grid"); // grid | list | map

  const sample = {
    title: "Awfis - Allied House",
    location: "Vasant Kunj, Delhi",
    hours: "Open Now, 08:00 to 20:00",
    rating: "4.4",
    reviews: "92",
    image: cc3,
    services: ["Dedicated Desks", "Private Cabins", "Managed Office"],
    features: [
      { icon: <Users size={12} />, label: "Meeting Rooms" },
      { icon: <ShieldCheck size={12} />, label: "Assured Security" },
      { icon: <Train size={12} />, label: "Metro Nearby" },
    ],
    price: "10,999",
  };
  

  return (
    <div className="max-w-7xl mx-auto overflow-hidden px-4 md:px-0 md:mt-4">
      <CoworkingFilterBar />
      <div className="flex mt-5  ">
      <ResultCouponMarquee />
      <div className="hidden lg:flex ml-4  ">
          <div className="flex justify-end gap-2 ">
            {["grid", "list" ].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-5 py-1 rounded-full text-sm border ${
                  viewMode === mode
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* View Toggle */}

      <div className="flex ">
        <div className="flex flex-col items-center w-full mt-6 ">
          {/* Views */}
          <div className=" w-full">
            {viewMode === "grid" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                <WorkspaceCard data={sample} />
                <WorkspaceCard data={sample} />
                <WorkspaceCard data={sample} />
              </div>
            )}

            {viewMode === "list" && (
              <div className="w-full flex flex-col gap-4">
                <WorkspaceCard data={sample} layout="list" />
                <WorkspaceCard data={sample} layout="list" />
                <WorkspaceCard data={sample} layout="list" />
              </div>
            )}

            {viewMode === "map" && (
              <div className="w-full h-[500px] mt-4 rounded-xl overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.7661153930503!2d80.94388567543942!3d26.91091687664818"
                  allowFullScreen
                  loading="lazy"
                  title="Workspace Map"
                ></iframe>
              </div>
            )}
          </div>

          {/* USPs */}
          {/* <div className="my-10 space-y-6">
            <Usp1 />
            <Usp2 />
            <Usp3 />
          </div> */}
        </div>


      </div>

      <hr className="my-10" />

      <ResultsBlogSection />
      <FAQSection />
    </div>
  );
};

export default Results;
