import React from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Iyer",
    text: "As a freelancer, finding a professional yet flexible workspace was always a challenge until I discovered Cubbispace. Great location, comfortable seating, and super fast Wi-Fi have made it my go-to spot for working and meeting clients.",
  },
  {
    name: "Amit Sinha",
    text: "Cubbispace gave our startup the perfect launchpad — collaborative environment, well-equipped meeting rooms, and flexible conference rooms as per our needs, no hassle, no heavy investment.",
  },
  {
    name: "Nisha Kapoor",
    text: "We needed a subsidiary office without the burden of setting up infrastructure. Cubbispace was the ideal solution — modern, efficient, and ready-to-use. It’s a smart choice for enterprises looking to expand quickly.",
  },
  {
    name: "Rahul Deshmukh",
    text: "Whether it’s a quick meeting or a full workday, Cubbispace has the flexibility I need. Booking is easy, the ambiance is excellent, and the amenities are truly good. I highly recommend it for modern professionals!",
  },
  {
    name: "Ramesh Iyer",
    text: "As a freelancer, finding a professional yet flexible workspace was always a challenge until I discovered Cubbispace. Great location, comfortable seating, and super fast Wi-Fi have made it my go-to spot for working and meeting clients.",
  },
  {
    name: "Amit Sinha",
    text: "Cubbispace gave our startup the perfect launchpad — collaborative environment, well-equipped meeting rooms, and flexible conference rooms as per our needs, no hassle, no heavy investment.",
  },
  {
    name: "Nisha Kapoor",
    text: "We needed a subsidiary office without the burden of setting up infrastructure. Cubbispace was the ideal solution — modern, efficient, and ready-to-use. It’s a smart choice for enterprises looking to expand quickly.",
  },
  {
    name: "Rahul Deshmukh",
    text: "Whether it’s a quick meeting or a full workday, Cubbispace has the flexibility I need. Booking is easy, the ambiance is excellent, and the amenities are truly good. I highly recommend it for modern professionals!",
  },
  {
    name: "Ramesh Iyer",
    text: "As a freelancer, finding a professional yet flexible workspace was always a challenge until I discovered Cubbispace. Great location, comfortable seating, and super fast Wi-Fi have made it my go-to spot for working and meeting clients.",
  },
  {
    name: "Amit Sinha",
    text: "Cubbispace gave our startup the perfect launchpad — collaborative environment, well-equipped meeting rooms, and flexible conference rooms as per our needs, no hassle, no heavy investment.",
  },
  {
    name: "Nisha Kapoor",
    text: "We needed a subsidiary office without the burden of setting up infrastructure. Cubbispace was the ideal solution — modern, efficient, and ready-to-use. It’s a smart choice for enterprises looking to expand quickly.",
  },
  {
    name: "Rahul Deshmukh",
    text: "Whether it’s a quick meeting or a full workday, Cubbispace has the flexibility I need. Booking is easy, the ambiance is excellent, and the amenities are truly good. I highly recommend it for modern professionals!",
  },
  {
    name: "Ramesh Iyer",
    text: "As a freelancer, finding a professional yet flexible workspace was always a challenge until I discovered Cubbispace. Great location, comfortable seating, and super fast Wi-Fi have made it my go-to spot for working and meeting clients.",
  },
  {
    name: "Amit Sinha",
    text: "Cubbispace gave our startup the perfect launchpad — collaborative environment, well-equipped meeting rooms, and flexible conference rooms as per our needs, no hassle, no heavy investment.",
  },
  {
    name: "Nisha Kapoor",
    text: "We needed a subsidiary office without the burden of setting up infrastructure. Cubbispace was the ideal solution — modern, efficient, and ready-to-use. It’s a smart choice for enterprises looking to expand quickly.",
  },
  {
    name: "Rahul Deshmukh",
    text: "Whether it’s a quick meeting or a full workday, Cubbispace has the flexibility I need. Booking is easy, the ambiance is excellent, and the amenities are truly good. I highly recommend it for modern professionals!",
  },
  {
    name: "Ramesh Iyer",
    text: "As a freelancer, finding a professional yet flexible workspace was always a challenge until I discovered Cubbispace. Great location, comfortable seating, and super fast Wi-Fi have made it my go-to spot for working and meeting clients.",
  },
  {
    name: "Amit Sinha",
    text: "Cubbispace gave our startup the perfect launchpad — collaborative environment, well-equipped meeting rooms, and flexible conference rooms as per our needs, no hassle, no heavy investment.",
  },
  {
    name: "Nisha Kapoor",
    text: "We needed a subsidiary office without the burden of setting up infrastructure. Cubbispace was the ideal solution — modern, efficient, and ready-to-use. It’s a smart choice for enterprises looking to expand quickly.",
  },
  {
    name: "Rahul Deshmukh",
    text: "Whether it’s a quick meeting or a full workday, Cubbispace has the flexibility I need. Booking is easy, the ambiance is excellent, and the amenities are truly good. I highly recommend it for modern professionals!",
  },
];

export default function CubispaceTestimonialsMarquee() {
  return (
    <div className="overflow-hidden py-12 bg-gray-50">
      <div className="flex animate-marquee gap-8 w-max">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="md:w-[600px] w-[300px] bg-white shadow-md rounded-xl p-6 flex-shrink-0 overflow-hidden text-ellipsis"
          >
            <Quote className="text-[#20B1EE] mb-3" />
            <p className="text-gray-700 text-sm mb-4 break-words">
              {item.text}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
            </div>

            <p className="text-sm font-semibold text-gray-800">— {item.name}</p>
          </div>
        ))}
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 400s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
