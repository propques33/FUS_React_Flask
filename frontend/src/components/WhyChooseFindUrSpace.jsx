import React from "react";
import {
  BadgeCheck,
  Landmark,
  Lightbulb,
  PhoneCall,
  MapPin,
  Building2,
  Users,
  Smile,
} from "lucide-react";

const reasons = [
  {
    icon: <BadgeCheck className="w-8 h-8 text-blue-600" />,
    title: "Zero Brokerage",
    description:
      "Book your workspace directly with no hidden costs or broker fees.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
    title: "AI-Powered Matching",
    description: "Let our AI match your needs with the best spaces in seconds.",
  },
  {
    icon: <PhoneCall className="w-8 h-8 text-blue-600" />,
    title: "AI Bot Assistance",
    description:
      "Get a call from our AI bot for instant updates & walkthroughs.",
  },
  {
    icon: <MapPin className="w-8 h-8 text-blue-600" />,
    title: "All Major Cities Covered",
    description: "From Goa to Gurgaon—access 15+ major coworking destinations.",
  },
  {
    icon: <Building2 className="w-8 h-8 text-blue-600" />,
    title: "Tailored Office Options",
    description:
      "Freelancers, startups or enterprises—we serve every team size.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Trusted by Big Brands",
    description:
      "Used by teams from Hitachi, Bridgestone, Tata, Finolex and more.",
  },
  {
    icon: <Landmark className="w-8 h-8 text-blue-600" />,
    title: "Prime Locations",
    description:
      "Spaces located in business hubs with connectivity and amenities.",
  },
  {
    icon: <Smile className="w-8 h-8 text-blue-600" />,
    title: "Real-Time Support",
    description:
      "Speak to center managers or our team any time during the process.",
  },
];

const WhyChooseFindUrSpace = () => {
  return (
    <section className="pb-16 px-4 md:px-12 bg-white text-center">
      <div className="text-center relative inline-block">
        {/* Yellow Circle Background */}

        <h2 className="text-3xl md:text-4xl font-medium text-gray-800 relative z-10 mb-4">
          Why Choose <span className="text-blue-600">FindUrSpace</span>?


        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-10 text-xs md:text-base">
          Discover a better, smarter way to find coworking spaces tailored to
          your work style, location, and budget—without brokerage.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="bg-blue-50  rounded-xl p-6 shadow-sm hover:shadow-md transition text-left"
          >
            {item.icon}
            <h3 className="mt-4 font-medium text-gray-800 text-lg">
              {item.title}
            </h3>
            <p className="text-gray-600 text-xs mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseFindUrSpace;
