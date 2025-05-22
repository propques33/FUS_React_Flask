import React, { useEffect, useState } from "react";
import { ArrowRight, Train } from "lucide-react";
import ImageSlider2 from './ImageSlider2.jsx'

import pc1 from "../assets/pc7.png";
import pc2 from "../assets/pc2.png";
import pc3 from "../assets/pc9.png";
import pc4 from "../assets/pc4.png";
import pc5 from "../assets/pc5.png";
import pc6 from "../assets/pc6.png";
import cuni from "../assets/cuni.png";
import cubivideo from "../assets/cubivideo.mp4";


import ppc from "../assets/ppc.png";
import ppc2 from "../assets/ppc2.png";
import ppc4 from "../assets/ppc4.png";





import cc1 from "../assets/cc1.png";
import cc2 from "../assets/cc2.png";
import cc3 from "../assets/cc3.png";
import cc4 from "../assets/cc4.png";
import cc5 from "../assets/cc5.png";
import cc6 from "../assets/cc6.png";
import cc7 from "../assets/cc7.png";

import cc10 from "../assets/cc10.png";
import cc11 from "../assets/cc11.png";
import cc12 from "../assets/cc12.png";



import { Link } from "react-router-dom";
import CubispaceTestimonialsMarquee from "./CubispaceTestimonialsMarquee";

const PortfolioCubispace = () => {
  const tabsData = [
    {
      name: "PRIVATE OFFICE",
      type: "private",
      color: "bg-green-200",
      offers: [
        {
          team: "SMALL TEAMS",
          oldPrice: "£500",
          newPrice: "£400",
          img: cc5,
          title: "Private Office",
        },
        {
          team: "MEDIUM TEAMS",
          oldPrice: "£575",
          newPrice: "£450",
          img: cc12,
          title: "Enterprise Office",
        },
        {
          team: "LARGE TEAMS",
          oldPrice: "£650",
          newPrice: "£500",
          img: cc4,
          title: "Conference Room",
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
  const images = [ cc2, cc3, cc4, cc5, cc6];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    navigate(`/results?city=${city}&center=${center}`);
  };

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

  return (
    <div className="mt-12">
      <div className=" relative md:h-[600px] h-screen max-wxl mx-auto overflow-hidden">
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
            <span className="text-[49px] leading-[10p] md:leading-none md:text-5xl font- text-zinc-100 capitalize">
              From ideal to
              <p className="block md:hidden"></p>{" "}
              <span className="bg-[#20B1EE]  px-4 rounded-full text-nowrap">
                {" "}
                Iconic
              </span>
            </span>
            <span className="text-xl md:text-2xl capitalize text-white md:mt-0 lg:mt-0 -mt-4">
              The Best Managed Workspace In Lucknow{" "}
            </span>
          </h2>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-10 bg-white py-12 px-6 lg:px-24">
        {/* Left Image */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={ppc} // Replace with actual path
            alt="People working"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Text */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-semibold mb-6">
            When a space has potential, it deserves to shine.
          </h1>
          <p className="text-gray-700 mb-4">
            At Cubispace, enterprise teams find the flexibility they need to
            scale, startups discover a launchpad for innovation, freelancers
            excel within a supportive network, and businesses enjoy private
            cabins designed for focus and growth. With thoughtfully designed
            spaces and a buzzing work culture, Cubispace has become the go-to
            hub for those who want more from their workspace.
          </p>

          <Link
            to="/properties/67efd7b5de37405541d5dc5c"
            className="bg-[#20B1EE] text-white font-semibold text-sm py-3 px-6 rounded-full flex items-center  w-48 hover:bg-sky-600 transition"
          >
            ENQUIRE NOW <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      <section className=" py-12 px-6 lg:px-24 text-center">
        <h2 className="text-4xl font-bold mb-4 capitalize">
          Work The Way You Want
        </h2>
        <p className="text-gray-800 max-w-3xl mx-auto mb-6">
          We offer a range of membership options so that you can choose how and
          when you work. Whether you want to hotdesk a few times a month or need
          a one-off meeting room, we’ve got the right space for you.
        </p>

        {/* Offers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {activeTab.offers.map((offer, idx) => (
            <div
              key={idx}
              className="relative rounded overflow-hidden bg-white hover:shadow transition-all ease-in-out"
            >
              <img
                src={offer.img}
                alt={offer.team}
                className="w-full h-96 object-cover rounded-t"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {offer.title}
                </h3>

                {/* <Link
                  to="/properties/67efd7b5de37405541d5dc5c"
                  className="bg-[#20B1EE] text-white font-semibold text-sm py-3 px-6 rounded-full flex items-center justify-center w-48 hover:bg-sky-600 transition mx-auto"
                >
                  ENQUIRE NOW{" "}
                  <ArrowRight className="ml-2 w-5 h-5 inline-block" />
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-10 bg-white py-12 px-6 lg:px-24">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-semibold mb-6">
            The Story Behind Cubispace
          </h1>
          <p className="text-gray-700 mb-4">
            In a world reshaped by remote work, we saw opportunity. <br />{" "}
            <br />
            It all started with a conversation. <br /> <br />
            Mr. Jatin, the visionary behind the renowned JSV Automobile Group in
            Lucknow, partnered with Propques to unlock new value from his
            standalone showroom building, where the second floor sat empty and
            underutilized.
            <br /> <br />
            Propques’s expert team stepped in to meet the growing demand for
            flexible workspaces — and together, we set out to transform untapped
            potential into a powerful opportunity.
          </p>

          <Link
            to="/properties/67efd7b5de37405541d5dc5c"
            className="bg-[#20B1EE] text-white font-semibold text-sm mb-8 py-3 px-6 rounded-full flex items-center  w-48 hover:bg-sky-600 transition"
          >
            ENQUIRE NOW <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={ppc2} // Replace with actual path
            alt="People working"
            className="rounded-md"
          />
        </div>
      </div>

      <section className="bg-white py-16 px-6 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-4 ">
          The Cubispace Solution
        </h2>
        <p className="w-full text-center text-gray-800 mb-12 text-xl">
          Reimagining spaces. Redefining revenue.
        </p>

        <div className="grid md:grid-cols-1 gap-10 items-start">
          <CubispaceTestimonialsMarquee />

    
        </div>
      </section>

      <section className="bg-[#f5f5f5] py-20 px-6 lg:px-24">
        {/* Section Title */}

        {/* Flexible Work Future Block */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-semibold mb-4">
              Work Smarter, Closer, and On Your Terms
            </h3>
            <p className="text-gray-800 mb-4 leading-relaxed">
              The future of work is flexible, and so is Cubispace. Skip the long
              commute and work from a premium coworking space or fully serviced
              private office closer to home.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Our smart mix of flexible office spaces, private cabins, shared
              coworking areas, and modern meeting rooms allows your team to
              scale easily — saving costs, reducing stress, and boosting
              productivity.
              <br />
              <br />
              Perfect for hybrid work models and remote-first companies,
              Cubispace creates a professional workspace near you — designed for
              the way you live, work, and grow today.
            </p>
          </div>

          {/* Right Image */}
          <div className={"order-1 md:order-2"}>
            <img
              src={ppc4} // Replace with real image
              alt="Flexible workspace"
              className="w-full rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="relative w-full h-[70vh]">
        {/* Google Map Embed */}
        <iframe
          title="cubispace-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.7661153930503!2d80.94388567543942!3d26.91091687664818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957732a46274b%3A0xe09917f505f98e8f!2sCubispace!5e0!3m2!1sen!2sin!4v1744641663069!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border-0 absolute top-0 left-0 w-full h-full"
        ></iframe>

        <div className="bg-sky-100 p-6 md:right-20 md:top-20 bottom-0 right-0   absolute rounded-xl shadow-md max-w-sm leading-relaxed text-gray-800">
          <ul className="space-y-4">
            <li className="flex flex-wrap gap-2">
              <span className="font-bold text-base text-[#20B1EE] whitespace-nowrap">
                5 KM
              </span>
              <span>Metro Station</span>
            </li>
            <li className="flex flex-wrap gap-2">
              <span className="font-bold text-base text-[#20B1EE] whitespace-nowrap">
                11 KM
              </span>
              <span> Railway Station</span>
            </li>
            <li className="flex flex-wrap gap-2">
              <span className="font-bold text-base text-[#20B1EE] whitespace-nowrap">
                19 KM
              </span>
              <span> International Airport</span>
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
    { image: cc1, name: "reception area" },
    { image: cc3, name: "cafeteria" },
    { image: cc4, name: "conference room" },
    { image: cc5, name: "Private Office" },
    { image: cc6, name: "meeting room" },
    { image: cc7, name: "discussion room" },
    { image: cc10, name: "enterprise office" },
    { image: cc11, name: "Hot desk" },
  
  ]}
  // ctaLabel="Schedule a Visit"
  // onCTAClick={() => console.log("CTA Clicked")}
/>



      

      <section
        className="relative w-full h-[50vh] bg-cover bg-center flex items-center
       justify-center"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/p/AF1QipOtRcMmXyfGGqJJ747z61V2RNuhH5-O4hNmFzol=s1360-w1360-h1020')`, // Replace with actual image path
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Centered Link */}
        <div className="relative z-10">
          <Link
            to="/properties/67efd7b5de37405541d5dc5c"
            className="bg-[#20B1EE] text-white font-semibold text-sm py-3 px-6 rounded-full flex  w-48 hover:bg-sky-600 transition shadow-lg"
          >
            ENQUIRE NOW <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PortfolioCubispace;
