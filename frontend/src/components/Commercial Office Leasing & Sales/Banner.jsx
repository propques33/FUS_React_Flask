import React from "react";
import { FaUsers, FaRegBuilding } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { PiDesktopThin } from "react-icons/pi";
import SearchBox from "../SearchBox";
import illu from "../../assets/illu.png";
import illu2 from "../../assets/illu2.png";
import illu3 from "../../assets/illu3.png";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";

const CoworkingSearch = () => {
  return (
    <section className="relative  h-screen mx-auto flex flex-col items-center justify-end overflow- px-4 md:py-24 py-20 text-center bg-transparent">
      {/* Animated Grid Background */}

      {/* Animated Grid Background (centered) */}

      <video
        className="absolute inset-0 w-full md:h-full h-[340px] object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://cdn.sanity.io/files/uqxwe2qj/production/acb3cdaddddd9a53c21e3b65d9ee71ce8985d157.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 z-0 overflow-hidden ">
        <InteractiveGridPattern
          width={60}
          height={60}
          squares={[30, 30]} // Adjust based on density
          className="opacity-50"
        />
      </div>

      {/* Floating Icons */}
      {/* <div className="absolute top-32 left-[10%] bg-white p-4 rounded-full shadow-lg z-10 float-anim md:block hidden">
        <FaUsers className="text-blue-500 text-2xl " />
      </div> */}
      {/* <div className="absolute bottom-16 left-[10%] bg-white p-4 rounded-full shadow-lg z-10 float-anim-slow md:block hidden">
        <FaRegBuilding className="text-blue-500 text-2xl" />
      </div> */}
      {/* <div
        className="absolute bottom-48 left-[5%] bg-white p-4 rounded-full shadow-lg z-10 overflow-hidden
       float-anim-fast md:block hidden"
      >
        <img
          src={illu2}
          alt=""
          className="h-40 w-40 object-cover overflow-hidden"
        />
      </div> */}
      {/* <div className="absolute top-32 right-[5%] bg-white p-4 rounded-full shadow-lg z-10 float-anim md:block hidden">
        <img src={illu} alt="" className="h-32 w-32 object-cover" />
      </div> */}
      {/* <div className="absolute bottom-0 right-[10%] bg-white p-4 rounded-full shadow-lg z-10 float-anim overflow-hidden md:block hidden">
        <img
          src={illu3}
          alt=""
          className="h-32 w-32 overflow-hidden  object-cover"
        />
      </div> */}

      {/* <div className="absolute bottom-10 right-[50%] bg-white p-4 rounded-full shadow-lg z-10 float-anim md:block hidden">
        <PiDesktopThin className="text-blue-500 text-4xl font-semibold" />
      </div> */}

      {/* Heading */}
      {/* <div className="relative z-20 max-w-7xl text-blue-500 mb-0">
       
       
      </div> */}

      {/* Search Box */}
      <div className="relative z-20 w-full max-w-7xl flex justify-end">
        <SearchBox />
      </div>
    </section>
  );
};

export default CoworkingSearch;
