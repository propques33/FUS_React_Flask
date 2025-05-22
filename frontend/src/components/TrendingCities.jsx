import React from "react";

const cities = [
  {
    name: "Pune",
    workspaces: 377,
    image: "https://findurspace.tech/static/images/PuneAsset%2017.svg",
  },
  {
    name: "Kolkata",
    workspaces: 121,
    image: "https://findurspace.tech/static/images/BangaloreAsset%2013.svg",
  },
  {
    name: "Hyderabad",
    workspaces: 284,
    image: "https://findurspace.tech/static/images/MumbaiAsset%2014.svg",
  },
  {
    name: "Lucknow",
    workspaces: 62,
    image: "https://findurspace.tech/static/images/PuneAsset%2017.svg",
  },
  {
    name: "Gurgaon",
    workspaces: 385,
    image: "https://findurspace.tech/static/images/BangaloreAsset%2013.svg",
  },
  {
    name: "Noida",
    workspaces: 306,
    image: "https://findurspace.tech/static/images/MumbaiAsset%2014.svg",
  },
  {
    name: "Indore",
    workspaces: 96,
    image: "https://findurspace.tech/static/images/PuneAsset%2017.svg",
  },
  {
    name: "Jaipur",
    workspaces: 139,
    image: "https://findurspace.tech/static/images/BangaloreAsset%2013.svg",
  },
  {
    name: "Chennai",
    workspaces: 271,
    image: "https://findurspace.tech/static/images/MumbaiAsset%2014.svg",
  },
  {
    name: "Ghaziabad",
    workspaces: 103,
    image: "https://findurspace.tech/static/images/PuneAsset%2017.svg",
  },
];

const TrendingCities = () => {
  return (
    <section className="pb-16 px-4 text-center bg-white">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4 relative">
        <h2 className=" px-3 py-1 rounded-full mr-2 text-black relative inline-block mt-12">
          Trending Cities
          <p className="h-16 w-16 bg-yellow-300/50 absolute  rounded-full top-0  -left-4 z-0"></p>
        </h2>
      </h2>

      <p className="text-gray-600 max-w-4xl mx-auto mt-2">
        Explore dynamic coworking hubs in India’s trending cities, designed for
        freelancers, startups, and corporates.
      </p>

      <div className="h-[2px] w-32 bg-blue-600 mx-auto my-4 rounded" />

      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {cities.map((city, idx) => (
          <div
            key={idx}
            className="border border--300 border-[0.8px] rounded-xl w-48 px-4 py-6 flex flex-col items-center hover:shadow-md transition"
          >
            <img
              src={city.image}
              alt={city.name}
              className="h-24 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-blue-600">{city.name}</h3>
            <p className="text-sm text-gray-600 mt-1">
              {city.workspaces} Workspaces
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingCities;
