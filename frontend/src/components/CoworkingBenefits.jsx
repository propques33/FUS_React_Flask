import {
  CalendarDays,
  Users,
  Wifi,
  Coffee,
  DollarSign,
  Briefcase,
} from "lucide-react";
import cc1 from '../assets/cc1.png'

const stats = [
  { value: "+15", label: "Centers" },
  { value: "+2000", label: "Members" },
  { value: "1", label: "Million Sq. Ft." },
];

const features = [
  {
    icon: <CalendarDays size={28} className="text-blue-500" />,
    title: "Flexible Plans",
    desc: "Choose from daily, monthly, or yearly options.",
  },
  {
    icon: <Users size={28} className="text-blue-500" />,
    title: "Vibrant Community",
    desc: "Collaborate with diverse professionals.",
  },
  {
    icon: <Wifi size={28} className="text-blue-500" />,
    title: "High-Speed Internet",
    desc: "Stay connected at all times.",
  },
  {
    icon: <Coffee size={28} className="text-blue-500" />,
    title: "Unlimited Coffee",
    desc: "Enjoy fresh brews to fuel productivity.",
  },
  {
    icon: <DollarSign size={28} className="text-blue-500" />,
    title: "Cost-Effective",
    desc: "Pay only for the space and services you need.",
  },
  {
    icon: <Briefcase size={28} className="text-blue-500" />,
    title: "Professional Environment",
    desc: "Boost credibility with modern, well-equipped spaces.",
  },
];

export default function CoworkingOverview() {
  return (
    <section className="bg-white text-gray-800 py-16 md:pt-10 md:pb-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section - Image + Stats */}
        <div className="space-y-6">
          <img
            src={cc1}
            alt="Coworking Space"
            className="rounded-xl shadow-md w-full h-64 object-cover"
          />

          <h1 className="md:text-4xl text-2xl font-medium  leading-snug">
            Level Up Your Work at{" "}
            <span className="bg-yellow-300 text-zinc-800 px-2">
              India’s Best Managed Workspaces
            </span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Whether you're a freelancer, startup, or enterprise team, discover
            vibrant managed workspaces built for productivity and connection.
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="md:text-3xl text-xl font-medium text-blue-500">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300"
            >
              {feature.icon}
              <h3 className="text-lg font-medium mt-3">{feature.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
