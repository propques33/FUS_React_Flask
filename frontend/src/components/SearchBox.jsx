import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaChair,
  FaUsers,
  FaDoorClosed,
  FaBuilding,
} from "react-icons/fa";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

const SearchBox = () => {
  const [activeTab, setActiveTab] = useState("Hot desk");
  const [location, setLocation] = useState("");
  const [seats, setSeats] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const tabs = [
    { label: "Hot desk", icon: <FaChair /> },
    { label: "Meeting rooms", icon: <FaUsers /> },
    { label: "Private cabin", icon: <FaDoorClosed /> },
    { label: "Managed office", icon: <FaBuilding /> },
  ];

  useEffect(() => {
    if (location.trim().length > 1) {
      const dummyLocations = [
        "Bangalore",
        "Delhi",
        "Mumbai",
        "Pune",
        "Hyderabad",
      ];
      setSuggestions(
        dummyLocations.filter((loc) =>
          loc.toLowerCase().includes(location.toLowerCase())
        )
      );
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [location]);

  return (
    <div className="relative z-10 bg-white/90 backdrop-blur-md shadow-2xl md:shadow-[#96bbff] rounded-2xl p-4 max-w-4xl mx-auto flex flex-col gap-4 items-center justify-center w-full">
       <h1 className="text-3xl md:text-4xl font-seibold leading-tight text-blue-500 bg-     rounded   ">
          Find Your Perfect{" "}
          <span className=" bg-yellow-300 px-6 text-[#333333d7]  font-light rounded-full">
            Working Spot
          </span>
        </h1>
      
      {/* Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:gap-2 w-full mb-0">
        {tabs.map(({ label, icon }) => (
          <button
            key={label}
            className={`flex flex-col items-center transition-all ease-in-out justify-center gap-1 py-2 px-3 text-xs sm:text-xs md:text-base font-medium ${
              activeTab === label
                ? "text-blue-500 border-b-2 border-blue-500 transition-all ease-in-out"
                : "text-gray-500 transition-all ease-in-out"
            }`}
            onClick={() => setActiveTab(label)}
          >
            {icon}
            <span className="text-xs sm:text-sm"> {label}</span>
          </button>
        ))}
      </div>

      {/* Inputs Section */}
      <div className="w-full flex flex-col md:flex-row items-center gap-4 justify-center flex-wrap">
        {/* Location Input */}
        <div className="relative w-full md:w-[30%]">
          <div className="flex items-center gap-2 px-4 py-2 border rounded-md bg-white">
            <FaMapMarkerAlt className="text-blue-500" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
              className="outline-none w-full text-sm"
            />
          </div>
          {showSuggestions && (
            <ul className="absolute z-50 bg-white shadow-md mt-1 w-full rounded-md text-sm">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-blue-100 cursor-pointer"
                  onClick={() => {
                    setLocation(suggestion);
                    setShowSuggestions(false);
                  }}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Date Picker */}
        <div className="relative w-full md:w-[30%]">
          <div
            onClick={() => setShowCalendar(!showCalendar)}
            className="flex items-center gap-2 px-4 py-2 border rounded-md bg-white cursor-pointer"
          >
            <FaCalendarAlt className="text-blue-500" />
            <span className="text-sm">
              {`${format(range[0].startDate, "dd MMM")} - ${format(
                range[0].endDate,
                "dd MMM"
              )}`}
            </span>
          </div>
          {showCalendar && (
            <div className="absolute z-50 mt-2">
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setRange([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={range}
                rangeColors={["#3b82f6"]}
              />
            </div>
          )}
        </div>

        {/* Seats Input */}
        {/* <div className="relative w-full md:w-[20%]">
          <div className="flex items-center gap-2 px-4 py-2 border rounded-md bg-white">
            <FaUser className="text-blue-500" />
            <input
              type="number"
              min="1"
              placeholder="No. of Seats"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              className="outline-none w-full text-sm"
            />
          </div>
        </div> */}

        {/* Search Button */}
        <button className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md flex items-center justify-center gap-2 text-sm">
          <FaSearch />
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
