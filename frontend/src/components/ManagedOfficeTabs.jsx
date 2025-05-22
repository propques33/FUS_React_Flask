import React, { useState } from "react";
import { Calendar, Users, CreditCard, Clock } from "lucide-react";
import cc1 from "../assets/cc1.png";
import cc2 from "../assets/cc2.png";
import cc3 from "../assets/cc3.png";
import cc4 from "../assets/cc4.png";

const tabs = ["Office Space", "Coworking", "Virtual Offices", "Meeting rooms"];

const officeOptions = [
  {
    title: "Managed Office In Lucknow",
    desc: "A range of ready-to-use, fully equipped offices with everything you need to get started.",
    duration: "By month or year",
    team: "Teams of any size",
    price: "From INR 10,450 per person per month",
    img: cc1,
  },
  {
    title: "Managed Office In Bangalore",
    desc: "Customise all aspects of your space, including furniture and branding.",
    duration: "By month or year + customised",
    team: "Teams of any size",
    price: "From INR 10,450 per person per month",
    img: cc2,
  },
  {
    title: "Managed Office In Delhi",
    desc: "Professional on-demand space. Perfect when you need to get your head down and work.",
    duration: "By the hour or day",
    team: "Teams of any size",
    price: "",
    img: cc3,
  },
  {
    title: "Managed Office In Hyderabad",
    desc: "Flexible access to Day Offices where and when you choose.",
    duration: "5, 10 or unlimited days per month",
    team: "",
    price: "",
    img: cc4,
  },
];

const OfficeTabs = () => {
  const [activeTab, setActiveTab] = useState("Office Space");

  return (
    <section className="md:py-10 ">
      <p className="text-[1.3rem] md:text-4xl font-medium text-gray-800 mb-2">
        Flexible workspace designed around your needs
      </p>
      <div className="  text-gray-600   mb-2">
        <p className="text-xs md:text-sm ">
          Our flexible, fully-customisable office rentals are available by the
          hour, day, or as long{" "}
          <p className="bg-yellow-300 px-1 inline">as you need</p>
        </p>
      </div>
      {/* Tabs */}
      {/* <div className="pt-2  flex flex-wrap gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full text-sm font-medium ${
              activeTab === tab
                ? 'bg-blue-500 text-white shadow'
                : 'bg-white border text-gray-700 hover:bg-gray-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div> */}

      {/* Description */}

      {/* Card Grid */}
      <div className="overflow-x-auto">
        <div className="flex gap-4 min-w-full pb-4 mt-4">
          {officeOptions.map((item, i) => (
            <div
              key={i}
              className="min-w-[280px] max-w-sm bg-white rounded-xl shadow hover:shadow-md transition duration-200"
            >
              <img
                src={item.img}
                alt={item.title}
                className="  w-full object-contain rounded-t-xl"
              />
              <div className="p-4 md:space-y-2 space-y-1">
                <h4 className="font-semibold md:text-base text-sm text-gray-800">{item.title}</h4>
                <p className="md:text-sm text-xs text-gray-600">{item.desc}</p>
                <div className="md:text-sm text-xs text-gray-700 space-y-1 mt-2">
                  {item.duration && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> {item.duration}
                    </div>
                  )}
                  {item.team && (
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" /> {item.team}
                    </div>
                  )}
                </div>
                {item.price && (
                  <p className="text-sm font-semibold text-teal-700 pt-2">
                    {item.price}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeTabs;
