import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import pc1 from "../assets/w1.jpg";
import pc2 from "../assets/w2.jpg";
import pc3 from "../assets/w3.jpg";
import pc4 from "../assets/w4.jpg";
import pc5 from "../assets/w5.jpg";
import pc6 from "../assets/w6.png";
import pc12 from "../assets/pc12.png";
import xv from "../assets/xv.png";
import cuni from "../assets/w1.jpg";
import { Link } from "react-router-dom";
import WorkdesqTestimonialsMarquee from "./WorkdesqTestimonialsMarquee.jsx";
import ImageSlider2 from "./ImageSlider2.jsx";


import ppc3 from "../assets/ppc3.png";
import ppc5 from "../assets/ppc5.png";


const PortfolioCubispace = () => {

  const points = [
    "Located in prime Mahalaxmi Nagar",
    "Backed by Propques, a leading coworking consultancy",
    "Strategically designed for maximum efficiency",
    "Flexible pricing and plans for every budget",
    "A supportive community of like-minded professionals",
    "Designed to scale with your business",
    "If you're searching for the best coworking space near me, WorkDesq delivers a workspace that grows with your business."
  ];
  const tabsData = [
    {
      name: "PRIVATE OFFICE",
      type: "private",
      color: "bg-green-200",
      offers: [
        {
          team: "Meeting Room",
          oldPrice: "£500",
          newPrice: "£400",
          img: pc4,
        },
        {
          team: "Dedicated Desk",
          oldPrice: "£575",
          newPrice: "£450",
          img: pc3,
        },
        {
          team: "Hot Desk",
          oldPrice: "£650",
          newPrice: "£500",
          img: pc12,
        },
      ],
    },
    {
      name: "COWORKING",
      type: "coworking",
      color: "bg-orange-200",
      offers: [
        // Add your coworking images and pricing here
      ],
    },
    {
      name: "FOR THE DAY",
      type: "day",
      color: "bg-orange-200",
      offers: [
        // Add your day access options here
      ],
    },
    {
      name: "MEETING ROOMS",
      type: "meeting",
      color: "bg-orange-200",
      offers: [
        // Add your meeting rooms here
      ],
    },
  ];

  const [selectedTab, setSelectedTab] = useState("private");

  const activeTab = tabsData.find((tab) => tab.type === selectedTab);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [pc1, pc2, pc3, pc4, pc5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Ensure scrolling to the top of the document when the component is mounted
    window.scrollTo({
      top: 0,
      behavior: "auto", // You can use "auto" for instant scroll
    });

    // As a fallback, scroll the root element
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleSearch = () => {
    navigate(`/results?city=${city}&center=${center}`);
  };

  return (
    <div className="mt-12">
      <div className="relative md:h-[600px] h-screen max-wxl mx-auto overflow-hidden">
        {/* Slider container */}
        <div
          className="absolute top-0 left-0 h-full w-full flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="w-full h-full object-cover flex-shrink-0"
              alt={`slide-${index}`}
            />
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0000006b] bg-opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#20b0ee5b] to-[#fff0] bg-opacity-40"></div>

        {/* Foreground content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h2 className="flex flex-col items-center gap-5">
            <span className="text-[30px] -20 md:leading-none md:text-5xl font- text-zinc-100 capitalize">
              WorkDesq{" "}
              <span className="bg-[#20B1EE] mt-0 px-4 rounded-full text-nowrap">
                Work from Here
              </span>
            </span>
          </h2>
          <p className=" text-white mt-6 text-2xl">
            The Best Managed Workspace In Indore
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-10 bg-white py-12 px-6 lg:px-24">
        {/* Left Image */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={pc1} // Replace with actual path
            alt="People working"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Text */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-semibold mb-6">
            Setting A New Benchmark In Coworking{" "}
          </h1>
          <p className="text-gray-700 mb-4">
            Welcome to WorkDesq, a modern coworking space in Mahalaxmi Nagar
            crafted for today’s professionals. Whether you're a startup, a
            freelancer, an enterprise or part of a remote team, this is where
            productivity meets flexibility in the heart of Indore.
          </p>

          <Link
            to="/properties/67f01189de37405541d5ded2"
            className="bg-[#20B1EE] w-48 text-white font-semibold text-sm py-3 px-6 rounded-full flex items-center hover:bg-sky-600 transition"
          >
            ENQUIRE NOW <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      <section className=" py-12 px-6 lg:px-24 text-center">
        <h2 className="text-4xl font-semibold mb-4 capitalize">
          A Space Waiting to Be Reimagined
        </h2>
        <p className="text-gray-800 max-w-4xl mx-auto mb-6">
          The property in Mahalaxmi Nagar had all the right ingredients — a
          prime location, good structure, and tons of potential. But it needed a
          bold new vision to become the best co-workspace near me that
          businesses actually wanted.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {activeTab.offers.map((offer, idx) => (
            <div key={idx} className="relative rounded overflow-hidden ">
              <img
                src={offer.img}
                alt={offer.team}
                className="w-full h-96 object-cover rounded"
              />
              <p className="mt-4 text-base font-semibold">{offer.team}</p>
              {/* <Link
                to="/properties/67f01189de37405541d5ded2"
                className="w-48 bg-[#20B1EE] text-white font-semibold text-sm py-3 px-6 rounded-full flex items-center hover:bg-sky-600 transition mx-auto mt-2"
              >
                ENQUIRE NOW <ArrowRight className="ml-2 w-5 h-5" />
              </Link> */}
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-10 bg-white py-12 px-6 lg:px-24">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-semibold mb-2 capitalize">
            Flexible Workspaces That Adapt to Your Needs
          </h1>
          <p className="text-medium font-semibold my-4 ">
            At WorkDesq, we offer flexible coworking solutions designed to meet
            the diverse needs of today's professionals and businesses:
          </p>
          <ul className="ml-4">
            <li className="text-gray-700 mb-4 list-disc">
              Private offices for focused work
            </li>
            <li className="text-gray-700 mb-4 list-disc">
              Collaborative coworking zones for dynamic teams
            </li>
            <li className="text-gray-700 mb-4 list-disc">
              Fully equipped meeting rooms for pitches and strategy sessions
            </li>
          </ul>

          <Link
            to="/properties/67f01189de37405541d5ded2"
            className="bg-[#20B1EE] my-4 text-white font-semibold text-sm py-3 px-6 w-48 rounded-full flex items-center hover:bg-sky-600 transition"
          >
            ENQUIRE NOW <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={ppc5} // Replace with actual path
            alt="People working"
            className="rounded"
          />
        </div>
      </div>

      {/* <section className="bg-white py-16 px-6 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-10 ">
          Powered by Propques, Built for You
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full rounded-md"
              src="https://www.youtube.com/embed/00jalJg6xZ8"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-gray-800 leading-relaxed">
              Propques, a leading coworking consultancy, partnered with WorkDesq
              to transform an underutilized 5,000 sq. ft. property in Mahalaxmi
              Nagar into a thriving coworking space designed for startups,
              professionals, and small businesses.
              <br />
              <br />
              At Propques, we don’t just build workspaces — we create business
              ecosystems. WorkDesq is a perfect example of how we transform
              underused properties into spaces that drive real growth.{" "}
            </p>
          </div>
        </div>
      </section> */}

      {/* <section className="bg-[#f5f5f5] py-20 px-6 lg:px-24">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <img
              src={pc5} 
              alt="Transformed coworking space"
              className="w-full rounded-xl shadow-md"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-8">The Transformation</h2>
            <p className="text-gray-800 mb-4 leading-relaxed">
              Reimagined the property with open desks, private cabins, meeting
              rooms, collaborative zones, and high-speed internet.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Introduced flexible membership plans to cater to hourly, daily,
              and monthly users.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-8">The Results</h2>
            <p className="text-gray-800 mb-4 leading-relaxed">
              Achieved a 12% occupancy rate within the first year.
            </p>
            <p className="text-gray-800 mb-4 leading-relaxed">
              Delivered consistent revenue at ₹120 per sq. ft., outperforming
              expectations.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Positioned WorkDesq as a recognized coworking brand in Mahalaxmi
              Nagar.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <img
              src={pc6} 
              alt="Coworking success"
              className="w-full rounded-xl shadow-md"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">The Impact</h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            This successful property transformation showcased how strategic
            coworking consultancy can unlock long-term value, generate
            sustainable growth, and help owners tap into emerging business hubs
            like Mahalaxmi Nagar.
            <br />
            <br />
            Looking to turn your space into the next big coworking success?{" "}
            <strong>We’re ready when you are.</strong>
          </p>
        </div>
      </section> */}

      <section className="bg-white py-16 px-6 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-4 ">
          The Workdesq Solution
        </h2>
        <p className="w-full text-center text-gray-800 mb-12 text-xl">
          Reimagining spaces. Redefining revenue.
        </p>

        <div className="grid md:grid-cols-1 gap-10 items-start">
          <WorkdesqTestimonialsMarquee />
        </div>
      </section>

      <section className="bg-[#f5f5f5] py-20 px-6 lg:px-24">
        {/* Section Title */}

        {/* Flexible Work Future Block */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-semibold mb-4">
            Why WorkDesq Stands Out

            </h3>
            <ul className="ml-4">
            <li className="text-gray-700 mb-4 list-disc">
            Located in prime Mahalaxmi Nagar
            </li>
            <li className="text-gray-700 mb-4 list-disc">
            Backed by Propques, a leading coworking consultancy
            </li>
            <li className="text-gray-700 mb-4 list-disc">
            Strategically designed for maximum efficiency
            </li>
            <li className="text-gray-700 mb-4 list-disc">
            Flexible pricing and plans for every budget
            </li>
            <li className="text-gray-700 mb-4 list-disc">
            A supportive community of like-minded professionals

            </li>
            <li className="text-gray-700 mb-4 list-disc">
            Designed to scale with your business

            </li>
          </ul>
          <p className="text-gray-700 ">
          If you're searching for the best coworking space near me, WorkDesq delivers a workspace that grows with your business.
          </p>
          </div>

          {/* Right Image */}
          <div className={"order-1 md:order-2"}>
            <img
              src={ppc3} // Replace with real image
              alt="Flexible workspace"
              className="w-full rounded shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="relative w-full h-[70vh]">
        {/* Google Map Embed */}
        <iframe
          title="cubispace-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.322614457088!2d75.90900577517995!3d22.75340567936334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d70c3b7dc65%3A0xa8a8d20f65164ce4!2sWorkdesq%20Coworking!5e0!3m2!1sen!2sin!4v1744646433937!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border-0 absolute top-0 left-0 w-full h-full"
        ></iframe>

        <div className="bg-sky-100 p-6 right-20 top-20  absolute rounded-xl shadow-md max-w-sm leading-relaxed text-gray-800">
          <ul className="space-y-4">
            <li className="flex flex-wrap gap-2">
              <span className="font-bold text-base text-[#20B1EE] whitespace-nowrap">
                1.5 KM
              </span>
              <span>Metro Station</span>
            </li>
            <li className="flex flex-wrap gap-2">
              <span className="font-bold text-base text-[#20B1EE] whitespace-nowrap">
                7.5 KM
              </span>
              <span> Railway Station</span>
            </li>
            <li className="flex flex-wrap gap-2">
              <span className="font-bold text-base text-[#20B1EE] whitespace-nowrap">
                20 KM
              </span>
              <span> Airport</span>
            </li>
          </ul>

          <hr className="my-5 border-black/30" />

          <div>
            <p className="mb-1 font-bold text-gray-900 text-base">
              +91 87929 29704
            </p>
            <p className="text-gray-700">info@propques.com</p>
          </div>
        </div>
      </section>

      <ImageSlider2
        slides={[
          { image: pc1, name: "reception area" },
          { image: pc3, name: "dedicated desk" },
          { image: pc4, name: "meeting room" },
          { image: pc2, name: "enterprise office" },
          { image: pc5, name: "Hot desk" },
        
        ]}/>

      <section
        className="relative w-full h-[50vh] bg-cover bg-center flex items-center
       justify-center"
        style={{
          backgroundImage: `url(${pc2})`, // Replace with your image path
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Centered Link */}
        <div className="relative z-10">
          <Link
            to="/properties/67f01189de37405541d5ded2"
            className="bg-[#20B1EE] text-white font-semibold text-sm py-3 px-6 rounded-full flex  hover:bg-sky-600 transition shadow-lg"
          >
            ENQUIRE NOW <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PortfolioCubispace;
