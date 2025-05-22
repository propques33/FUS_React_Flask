import React from "react";
import FeaturedOfficeCard from "./FeaturedOfficeCard.jsx";
import img1 from "../assets/cc1.png";
import img2 from "../assets/cc5.png";

const FeaturedManagedOffices = () => {
  const offices = [
    {
      image: img1,
      floor: "2nd Floor",
      title: "Balcony View Office | Natural Light",
      description:
        "Bright, balcony-equipped office for high-performing teams. Natural light, breakout zones, and pantry access. Ideal for early-stage to mid-sized startups.",
      desks: 20,
      location: "Indiranagar, Bangalore",
      fullTimePrice: "₹1,45,000 per month",
      partTimePrice: "POA",
    },
    {
      image: img2,
      floor: "1st Floor",
      title: "Executive Suite Office | Private Meeting Room",
      description:
        "Fully-managed office space with 23 workstations, private conference room, and collaborative zones. Suited for growing teams looking for convenience and brand-ready spaces.",
      desks: 23,
      location: "BKC, Mumbai",
      fullTimePrice: "₹1,25,000 per month",
      partTimePrice: "POA",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-16 px-4 md:px-10">
    

      <div className="max-w-6xl mx-auto">
        {offices.map((office, idx) => (
          <FeaturedOfficeCard key={idx} {...office} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedManagedOffices;
