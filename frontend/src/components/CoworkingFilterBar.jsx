import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { RotateCcw } from "lucide-react";
import CustomDropdown from "./CustomDropdown";

const filters = {
  product: ["Coworking Space", "Meeting Room", "Private Office"],
  city: ["Lucknow", "Delhi", "Bangalore"],
  locations: ["All Locations", "Hazratganj", "Gomti Nagar", "Aminabad"],
  sort: ["Popularity", "Price Low to High", "Price High to Low"],
  date: ["Any", "Today", "Tomorrow"],
  // parking: ["Any", "Yes", "No"],
  // metro: ["Any", "Yes", "No"],
};

const CoworkingFilterBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [showSticky, setShowSticky] = useState(false);

  const getInitialValue = (key, fallback) => searchParams.get(key) || fallback;

  const [selectedFilters, setSelectedFilters] = useState({
    product: getInitialValue("product", "Coworking Space"),
    city: getInitialValue("city", "Lucknow"),
    locations: getInitialValue("locations", "All Locations"),
    sort: getInitialValue("sort", "Popularity"),
    brands: getInitialValue("brands", "Any"),
    parking: getInitialValue("parking", "Any"),
    metro: getInitialValue("metro", "Any"),
  });

  useEffect(() => {
    const params = new URLSearchParams();
    Object.entries(selectedFilters).forEach(([key, value]) => {
      if (value && value !== "Any" && value !== "All Locations") {
        params.set(key, value);
      }
    });
    setSearchParams(params);
  }, [selectedFilters, setSearchParams]);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (key, value) => {
    setSelectedFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setSelectedFilters({
      product: "Coworking Space",
      city: "Lucknow",
      locations: "All Locations",
      sort: "Popularity",
      brands: "Any",
      parking: "Any",
      metro: "Any",
    });
    navigate("/coworking/lucknow");
  };

  return (
    <>
      {/* Full filter bar */}
      <div className="bg-white border-b mt-16 py-4 px- md:px-0">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Coworking Space In{" "}
              <span className="text-blue-500">{selectedFilters.city}</span>
            </h2>
            <p className="md:text-sm text-xs text-gray-500 mt-1 font-medium uppercase tracking-wide">
              Quick Filters
            </p>
          </div>

          {/* Filters */}
          <div className="flex items-center  justify-between">
            <div className="flex gap-3 text-xs overflow-x-auto whitespace-nowrap scrollbar-hide md:py-2 py-0">
              {Object.entries(filters).map(([key, options]) => (
                <CustomDropdown
                  key={key}
                  label={key.charAt(0).toUpperCase() + key.slice(1)}
                  value={selectedFilters[key]}
                  options={options}
                  onChange={(val) => handleChange(key, val)}
                />
              ))}
            </div>

            <button
              onClick={resetFilters}
              className="flex items-center gap-1 text-blue-500 text-sm font-semibold hover:underline transition"
            >
              <RotateCcw size={16} />
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Sticky bottom filter bar */}
      {showSticky && (
  <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-md">
    <div className="max-w-7xl flex mx-auto w-full md:px-0 px-2 py-3   sm:flex-row items-center justify-between gap-4">
      
      {/* Heading */}
    <h2 className="text-base font-semibold text-gray-800 px-2 bg-yellow-300 " >
      Filters
    </h2>

      {/* Filter Dropdowns */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide w-full sm:w-auto py-1">
        {["product", "city", "locations", "sort"].map((key) => (
          <div key={key} className="min-w-[140px] sm:min-w-[160px] shrink-0">
            <select
              value={selectedFilters[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              className="w-full border border-gray-300 md:text-sm text-xs px-3 py-2 rounded-md bg-white focus:outline-none"
            >
              {filters[key].map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        ))}

        {/* Reset Button */}
        <button
          onClick={resetFilters}
          className="text-blue-600 text-sm flex items-center gap-1 font-medium whitespace-nowrap shrink-0"
        >
          <RotateCcw size={14} />
          Reset
        </button>
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default CoworkingFilterBar;
