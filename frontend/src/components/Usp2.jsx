import React from "react";
import { Tag, RotateCcw, CalendarX, Zap } from "lucide-react";

const ServiceBenefitsBox = () => {
  const items = [
    { icon: <Tag className="text-yellow-300" />, label: "Lowest Price " },
    { icon: <RotateCcw className="text-yellow-300" />, label: "Free Rescheduling" },
    { icon: <CalendarX className="text-yellow-300" />, label: "Free Cancellation" },
    { icon: <Zap className="text-yellow-300" />, label: "Instant Confirmations" },
  ];

  return (
    <div className="border border-blue-500 mx-2 md:mx-0 bg-blue-500 rounded-xl px-4 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-100 whitespace-nowrap"
        >
          <p className="text-xl">{item.icon}</p>
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default ServiceBenefitsBox;
