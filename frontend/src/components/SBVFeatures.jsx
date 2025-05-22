import React from "react";
import {
  FaMapMarkerAlt,
  FaLeaf,
  FaBullseye,
  FaSun,
  FaSmile,
  FaPiggyBank,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaMapMarkerAlt size={40} />,
      title: "Prime Location",
      description: "Located in Sapna Sangeeta Mall Indore",
    },
    {
      icon: <FaLeaf size={40} />,
      title: "Ultimate Comfort",
      description:
        "Relax with our large desks, ergonomic chairs, and open layouts",
    },
    {
      icon: <FaBullseye size={40} />,
      title: "Focus & Collaborate",
      description:
        "Private spaces blend solitude and collaboration effortlessly",
    },
    {
      icon: <FaSun size={40} />,
      title: "Bright & Inviting",
      description: "Extensive windows boost workspace well-being and energy",
    },
    {
      icon: <FaSmile size={40} />,
      title: "Serene Workspace",
      description: "Enjoy a serene environment without the need for headphones",
    },
    {
      icon: <FaPiggyBank size={40} />,
      title: "Smart Savings",
      description:
        "Pay only for what you use in Orchard’s cost-effective coworking space",
    },
  ];

  return (
    <div className="bg-black p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center text-white"
          >
            <div className="text--500 mb-4">{feature.icon}</div>
            <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
            <p className="text-sm max-w-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;