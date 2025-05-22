import React from "react";
import {
  Building2,
  Settings,
  Lightbulb,
  TrendingUp,
  Rocket,
  BadgeCheck,
  Users,
  ClipboardCheck,
} from "lucide-react";

// Local image imports
import cw1 from '../assets/cw1.png';
import cw2 from '../assets/cw2.png';
import cw3 from '../assets/cw3.png';
import cw4 from '../assets/cw4.png';

const featureImages = [cw1, cw2, cw3];
const whyImages = [cw1, cw2, cw3];

export default function PropquesOverview() {
  return (
    <section className="max-w-7xl mx-auto md:px-0 px-4 text-center  ">
      {/* <div className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#20B1EE]">
          Traditional Spaces to Managed Spaces
        </h2>
        <p className="text-xl text-gray-700">
          Propques Powers the Future of Workspaces
        </p>
      </div>

      <div>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <FeatureCard
            image={featureImages[0]}
            icon={<Building2 className="w-8 h-8 text-[#20B1EE]" />}
            title="Managed Workspaces Transformation"
            desc="We convert underutilized spaces into high-performance coworking hubs."
          />
          <FeatureCard
            image={featureImages[1]}
            icon={<Settings className="w-8 h-8 text-[#20B1EE]" />}
            title="End-to-End Management"
            desc="We handle everything — ops, marketing, community, and growth."
          />
          <FeatureCard
            image={featureImages[2]}
            icon={<Lightbulb className="w-8 h-8 text-[#20B1EE]" />}
            title="Strategic Consulting"
            desc="Get insights, strategy, and market-backed advice for space optimization."
          />
        </div>
      </div> */}

      {/* Why Choose Propques */}
      <div className="space-y-6 pt-12">
        <h3 className="text-4xl font-semibold text-[#20B1EE]">
          Why Choose Propques?
        </h3>

        <p className="text- text-gray-700 max-w-2xl mx-auto">
          Our spaces aren’t just about desks and Wi-Fi. We build environments
          where community, creativity, and business growth come together.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <div className="text-center space-y-4">
            <img
              src={whyImages[0]}
              alt="Connect, Create, Collaborate"
              className="w-full h-64 object-cover rounded-xl"
            />
            <h4 className="text-lg font-semibold text-gray-900">
            Connect, Create, Collaborate
            </h4>
            {/* <p className="text-gray-600 text-sm">
              With like-minded people and innovative thinkers, you’ll be part of a
              community that inspires creativity and drives success. Collaboration is
              built into every corner of our spaces.
            </p> */}
          </div>

          {/* Card 2 */}
          <div className="text-center space-y-4">
            <img
              src={whyImages[1]}
              alt="Everything in One Place"
              className="w-full h-64 object-cover rounded-xl"
            />
            <h4 className="text-lg font-semibold text-gray-900">Everything in One Place</h4>
            {/* <p className="text-gray-600 text-sm">
              Get access to everything you need in an environment designed for
              productivity—tech, amenities, refreshments, and decor that fuels your
              growth, all under one roof.
            </p> */}
          </div>

        {/* Card 3 */}
<div className="text-center space-y-4">
  <img
    src={whyImages[2]}
    alt="Supportive Team"
    className="w-full h-64 object-cover rounded-xl"
  />
  <h4 className="text-lg font-semibold text-gray-900">
  Supportive Team
  </h4>
  {/* <p className="text-gray-600 text-sm">
    Our community team is always within reach — helping you settle in, organize,
    and stay focused. No unanswered questions. Just proactive, people-first support.
  </p> */}
</div>

        </div>
      </div>

      {/* Our Promise */}
      <div className="bg-[#f0faff] py-10 px-6 rounded-xl space-y-3 mt-20">
        <h3 className="text-2xl font-semibold text-[#20B1EE]">
          Your Space. Our Expertise.
        </h3>
        <p className="text-gray-700 md:text-lg text-sm">
        Turning every square foot into spaces where teams grows, ideas flows, and success follows
        </p>
      </div>

      {/* The Propques Advantage */}
      {/* <div className="space-y-6">
        <h3 className="text-3xl md:text-4xl font-semibold text-[#20B1EE]">
          The Propques Advantage
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-700 mt-12 text-sm">
          <MiniFeature icon={<TrendingUp />} text="Higher Yields" />
          <MiniFeature icon={<Settings />} text="Expert Ops Management" />
          <MiniFeature icon={<Rocket />} text="Faster Setup & Launch" />
          <MiniFeature icon={<BadgeCheck />} text="Strong Brand Identity" />
          <MiniFeature icon={<Users />} text="Engaged Communities" />
          <MiniFeature icon={<ClipboardCheck />} text="End-to-End Support" />
        </div>
      </div> */}
    </section>
  );
}

const FeatureCard = ({ image, icon, title, desc }) => (
  <div className="bg-white rounded-xl shadow-md p-5 space-y-4 border border-gray-100">
    <img
      src={image}
      alt={title}
      className="rounded-md w-full h-40 object-cover"
    />
    <div className="flex items-center gap-3">
      {icon}
      <h4 className="text-lg font-semibold">{title}</h4>
    </div>
    <p className="text-gray-500 text-sm">{desc}</p>
  </div>
);

const MiniFeature = ({ icon, text }) => (
  <div className="text-center space-y-3">
    <div className="flex items-center justify-center gap-2 text-[#20B1EE]">
      {icon}
      <span className="text-gray-800">{text}</span>
    </div>
  </div>
);
