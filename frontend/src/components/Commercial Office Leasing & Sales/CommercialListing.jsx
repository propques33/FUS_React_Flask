import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import w1 from "../../assets/w1.jpg";
import ws4 from "../../assets/ws4.jpeg";
import pc4 from "../../assets/pc4.png";
import worqspotouter from "../../assets/worqspotouter.png";
import workdeskouter from "../../assets/workdeskouter.png";
const data = {
  Lucknow: [
    {
      name: "Cubispace",
      image: pc4,
      link: "/cubispace-portfolio",
      text: "Best For Startup",
    },
  ],

  Indore: [
    {
      name: "Workdesq",
      image: workdeskouter,
      link: "/workdesq-portfolio",
      text: "Best For freelance office",
    },
  ],

  Mumbai: [
    {
      name: "Worqspot",
      image: worqspotouter,
      link: "/worqspot-portfolio",
      text: "Best For enterprise office ",
    },
  ],
};

const allProjects = Object.values(data).flat();

const CommercialListing = () => {
  const [selectedCity, setSelectedCity] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  // Return either all projects or filtered by city
  const getProjects = () =>
    selectedCity === "All" ? allProjects : data[selectedCity] || [];

  const paginatedProjects = getProjects().slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(getProjects().length / itemsPerPage);

  return (
    <div className="max-w-7xl mx-auto  pb-12 relative md:px-0 px-4">
      {/* City Dropdown & Filter Button */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 relative">
          <h2 className=" px-3 py-1 rounded-full mr-2 text-black relative inline-block mt-12">
            Inspiring Workspaces,  Built for Connection
            <p className="h-16 w-16 bg-yellow-300/50 absolute  rounded-full top-0  -left-4 z-0"></p>
          </h2>
         
        </h2>

        <p className="text-gray-600 max-w-4xl mx-auto mt-2">
          Discover beautifully designed coworking spaces tailored to the spirit
          of each neighborhood. 
        </p>

      <div className="h-[2px] w-32 bg-blue-600 mx-auto my-4 rounded" />

      </div>

      <div className="flex justify-between mb-10 items-center">
        <h2 className="text-2xl font-semibold  text-zinc-800">
          Explore Spaces
        </h2>
        <p>
          <select
            className="text-base border border-[#20B1EE]  px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm rounded-full"
            value={selectedCity}
            onChange={(e) => {
              setSelectedCity(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="All">All Locations</option>
            {Object.keys(data).map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </p>
      </div>

      {/* Project Cards */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-black/50 bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-2xl font- text-center px-4">
                    {project.name}
                  </h3>
                </div> */}

                <p className="absolute bottom-2 left-2 bg-white text-sm capitalize font-medium px-3 py-1 rounded-full shadow">
                  {project.text}
                </p>
              </div>

              <div className="flex-grow flex flex-col justify-between items-center py-4 px-3">
                <p className="text-center font-semibold text-lg">
                  {project.name} <br />
                </p>

                <Link
                  to={project.link}
                  className="mt-4 inline-block bg-blue-500 text-white text-sm font-semibold py-2 px-6 rounded-full hover:bg-sky-600 transition"
                >
                  EXPLORE {project.name.toUpperCase()}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Arrows */}
        {totalPages > 1 && (
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:px-0">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 bg-white shadow rounded-full hover:bg-blue-100 disabled:opacity-30"
            >
              <ArrowLeft className="text-blue-600 w-5 h-5" />
            </button>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="p-2 bg-white shadow rounded-full hover:bg-blue-100 disabled:opacity-30"
            >
              <ArrowRight className="text-blue-600 w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommercialListing;
