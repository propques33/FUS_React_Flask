import { FaRupeeSign, FaSyncAlt, FaUserTie, FaMapMarkedAlt } from "react-icons/fa";

const reasons = [
  {
    icon: <FaRupeeSign className="text-2xl text-white" />,
    title: "No Hidden Fees",
    desc: "Access honest, upfront pricing with no brokerage or surprise charges.",
  },
  {
    icon: <FaSyncAlt className="text-2xl text-white" />,
    title: "Quick Setup & Onboarding",
    desc: "Seamless process from selection to move-in, so you’re ready to work faster.",
  },
  {
    icon: <FaMapMarkedAlt className="text-2xl text-white" />,
    title: "Nationwide Network",
    desc: "Workspaces in 30+ cities and 5000+ listings across India to choose from.",
  },
  {
    icon: <FaUserTie className="text-2xl text-white" />,
    title: "Dedicated Consultant",
    desc: "Get personalized support from experts to match the right workspace to your goals.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-blue-500 text-white py-8 rounded-xl px-4 md:px-8 md:mx-0 mx-2">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-2xl font- mb-8 text-">
          <span className="text-yellow-300 ">Why Choose Us {" "}</span>{" "} for Your Coworking Journey?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {reasons.map((item, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="bg-white-300 text-yellow-300 p-3 rounded-full">
                {item.icon}
              </div>
              <div>
                <h4 className="font- text-lg mb-1">{item.title}</h4>
                <p className="text-xs text-white/90">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
