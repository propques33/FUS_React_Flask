import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MapPin, ImageIcon } from "lucide-react";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [uniqueCities, setUniqueCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://propques-space-backend-i8etb.ondigitalocean.app/api/properties/")
      .then((res) => {
        const data = res.data;
        setProperties(data);
        const cities = [...new Set(data.map((p) => p.cityName))];
        setUniqueCities(cities);
        if (cities.length > 0) setSelectedCity(cities[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  const filteredProperties = properties.filter(
    (p) => p.cityName === selectedCity
  );

  const handleCardClick = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto pt-4 px-4 md:px-6">
      {/* Section Heading */}
      <div className="relative mb-10 text-center">
        <h1 className="text-2xl md:text-4xl font-medium text-gray-800 relative z-10 inline-block">
        Featured Managed Office Spaces
        <span className="absolute -top-3 -left-5 md:-top-4 md:-left-6 w-12 h-12 md:w-14 md:h-14 bg-yellow-300/40 rounded-full -z-0"></span>
        </h1>
        <div className="h-1 w-24 bg-blue-600 mx-auto mt-4 rounded"></div>
      </div>

      {/* City Filter */}
      {/* <div className="flex flex-wrap gap-3 items-center justify-center md:justify-start mb-8">
        <label htmlFor="city" className="font-medium text-gray-700">
          Select City:
        </label>
        <select
          id="city"
          className="border border-gray-300 rounded-full px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          {uniqueCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div> */}

      {/* Property Cards */}
      {/* <div className="grid grid-cols-1 gap-6">
        {filteredProperties.map((property) => (
          <div
            key={property._id}
            onClick={() => handleCardClick(property._id)}
            className="cursor-pointer border border-gray-200 rounded-xl p-4 bg-white hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row gap-5">
              <div className="w-full md:w-1/2">
                {property.thumbnails ? (
                  <img
                    src={property.thumbnails}
                    alt={property.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-full h-64 bg-gray-100 flex items-center justify-center rounded-lg">
                    <ImageIcon className="text-gray-400 w-12 h-12" />
                  </div>
                )}
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-blue-600">
                    {property.name}
                  </h2>
                  <p className="mt-2 text-gray-600 flex items-center text-sm">
                    <MapPin className="mr-2 w-4 h-4" />
                    {property.address}
                  </p>
                </div>

                {property.details?.mapLocation && (
                  <div className="mt-4">
                    <iframe
                      src={property.details.mapLocation}
                      frameBorder="0"
                      className="w-full h-56 rounded-lg"
                      allowFullScreen
                      title="Map"
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default PropertyList;
