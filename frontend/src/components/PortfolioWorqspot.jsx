import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import pc1 from "../assets/ws.jpg";
import pc2 from "../assets/ws2.jpg";
import pc3 from "../assets/ws3.jpg";
import pc4 from "../assets/ws4.jpeg";
import pc5 from "../assets/ws5.jpg";
import pc6 from "../assets/ws6.jpg";
import cuni from "../assets/ws7.jpg";
import cuni2 from "../assets/ws8.jpg";
import cubivideo from "../assets/cubivideo.mp4";
import { Link } from "react-router-dom";
import ImageSlider2 from './ImageSlider2'
import WorqSpotTestimonialsMarquee from './WorqSpotTestimonialsMarquee.jsx'


import ppc6 from "../assets/ppc8.png";
import ppc7 from "../assets/ppc7.png";
import ppc8 from "../assets/ppc6.png";


const PortfolioCubispace = () => {
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
          img: pc2,
        },
        {
          team: "Private Office",
          oldPrice: "£575",
          newPrice: "£450",
          img: pc5,
        },
        {
          team: "Enterprise Office",
          oldPrice: "£650",
          newPrice: "£500",
          img: cuni,
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
  const images = [pc1, pc2, pc3, pc4, pc5, pc6];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto", 
    });

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
            <span className="text-[44px] leading-[10p] md:leading-none md:text-5xl font- text-zinc-100 capitalize">
              Work Connected,
              <p className="block md:hidden"></p>{" "}
              <span className="bg-[#20B1EE]  px-4 rounded-full text-nowrap">
                {" "}
                Grow Limitlessly
              </span>
            </span>
            <span className="text-xl md:text-2xl capitalize text-white md:mt-0 lg:mt-0 -mt-4">
              The Best Managed Workspace In Navi Mumbai{" "}
            </span>
          </h2>
        </div>
      </div>


    

      <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-10 bg-white py-12 px-6 lg:px-24">
        {/* Left Image */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={ppc6} // Replace with actual path
            alt="People working"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Text */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-semibold mb-6">
            A Prime Space with Untapped Potential
          </h1>
          <p className="text-gray-700 mb-4">
          Step into WorqSpot — a premium coworking space inside International Infotech Park, directly above Vashi Railway Station. Whether you're a solopreneur, scaling startup, or a remote team, this shared office space in Navi Mumbai offers seamless access, top-tier amenities, and a vibrant professional community.
          </p>

          <Link to='/properties/67f01d02de37405541d5e453' className="bg-[#20B1EE] w-48 text-white font-semibold text-sm py-3 px-6 rounded-full flex items-center hover:bg-sky-600 transition">
            ENQUIRE NOW <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      <section className=" py-12 px-6 lg:px-24 text-center">
        <h2 className="text-4xl font-semibold mb-4 capitalize">
          Built for the Modern Professional
        </h2>
        <p className="text-gray-800 max-w-3xl mx-auto mb-6">
          Today, WorqSpot Navi Mumbai offers everything the evolving workforce
          needs.
        </p>

     

        {/* Offers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {activeTab.offers.map((offer, idx) => (
            <div key={idx} className="relative rounded overflow-hidden ">
              <img
                src={offer.img}
                alt={offer.team}
                className="w-full h-96 object-cover rounded"
              />

              <p className="mt-4 text-base font-semibold">
                {offer.team}
              </p>
              {/* <Link to="/properties/67f01d02de37405541d5e453" className="bg-[#20B1EE] w-48 text-white font-semibold text-sm py-3 px-6 rounded-full flex items-center hover:bg-sky-600 transition mx-auto mt-4">
                ENQUIRE NOW <ArrowRight className="ml-2 w-5 h-5" />
              </Link> */}
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-10 bg-white py-12 px-6 lg:px-24">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-semibold mb-6">
            Why Navi Mumbai Chooses WorqSpot
          </h1>
          <p className="text-medium font-semibold mb-4">
            WorkDesq now offers everything a modern business needs:
          </p>
          <ul className="ml-4">
            <li className="text-gray-700 mb-4 list-disc">
              Location matters — and Vashi Navi Mumbai is booming.
            </li>
            <li className="text-gray-700 mb-4 list-disc">
              With unmatched connectivity via the Vashi Railway Station and
              major business hubs just minutes away, WorqSpot coworking space
              gives entrepreneurs and enterprises the ultimate advantage: less
              commute, more opportunity.{" "}
            </li>
            <li className="text-gray-700 mb-4 list-disc">
              Fast Wi-Fi, ergonomic workstations, natural lighting, 24/7 access,
              advanced security, and a vibrant design ethos make WorqSpot Vashi
              the address of choice for professionals seeking flexibility,
              convenience, and the ability to grow without the burden of
              long-term leases.
            </li>
          </ul>

          <Link to="/properties/67f01d02de37405541d5e453" className="w-48 bg-[#20B1EE] mb-4 md:mb-0 text-white font-semibold text-sm py-3 px-6 rounded-full flex items-center hover:bg-sky-600 transition">
            ENQUIRE NOW <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={ppc7} // Replace with actual path
            alt="People working"
            className=""
          />
        </div>
      </div>
      <WorqSpotTestimonialsMarquee />

      <section className="bg-white py-16 px-6 lg:px-24">
        

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Video Embed */}
          <div className="w-full aspect-video">
            <img src={ppc8} alt="" />
          </div>

          {/* Right Text Column */}
          <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-semibold  ">
          Space with Untapped Potential
        </h2>
        <p className="w-full  text-gray-800 font-semibold">
          Reimagining spaces. Redefining revenue.
        </p>
            <p className="text-gray-800 leading-relaxed">
              WorqSpot to design a workspace that not only tapped into the
              growing coworking trend in Navi Mumbai but also matched the
              professional aspirations of Navi Mumbai’s rising businesses.
              <br />
              <br />
              As demand for flexible neighborhood offices continues to rise,
              Propques's experienced team has collaborated to address this need
              and develop a promising solution. They transformed an unused floor
              into a fully equipped coworking hub. This space features modern
              meeting rooms, smart manager cabins, cozy boutique offices, and
              open workspaces—all designed for 24/7 operations to accommodate
              both day and night shift workers.
            </p>
          </div>
        </div>
      </section>




      <section className="relative w-full h-[70vh]">
        {/* Google Map Embed */}
        <iframe
          title="cubispace-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9920447343547!2d72.996918375076!3d19.064087382138016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d18d839f3e019%3A0xfe8110031897a08a!2sworqspot%20coworking!5e0!3m2!1sen!2sin!4v1744646604936!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border-0 absolute top-0 left-0 w-full h-full"
        ></iframe>

        <div className="bg-sky-100 p-6 md:right-20 md:top-20 bottom-0 right-0  absolute rounded-xl shadow-md max-w-sm leading-relaxed text-gray-800">
          <ul className="space-y-4">
            <li className="flex flex-wrap gap-2">
              <span className="font-bold text-base text-[#20B1EE] whitespace-nowrap">
                0.5 KM
              </span>
              <span>Railway Station</span>
            </li>
            <li className="flex flex-wrap gap-2">
              <span className="font-bold text-base text-[#20B1EE] whitespace-nowrap">
                11 KM
              </span>
              <span>Metro  Station</span>
            </li>
            <li className="flex flex-wrap gap-2">
              <span className="font-bold text-base text-[#20B1EE] whitespace-nowrap">
                10 KM
              </span>
              <span>  Airport</span>
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
          { image: pc4, name: "reception area" },
          { image: pc2, name: "conference room" },
          { image: pc5, name: "Private Office" },
          { image: pc3, name: "meeting room" },
          { image: cuni, name: "enterprise office" },
          { image: cuni2, name: "Hot desk" },
        
        ]}
/>



      <section
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center
       justify-center"
        style={{
          backgroundImage: `url(${pc4})`, // Replace with actual image path
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Centered Link */}
        <div className="relative z-10">
          <Link to="/properties/67f01d02de37405541d5e453" className="bg-[#20B1EE] w-48 text-white font-semibold text-sm py-3 px-6 rounded-full flex  hover:bg-sky-600 transition shadow-lg">
            ENQUIRE NOW <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PortfolioCubispace;
