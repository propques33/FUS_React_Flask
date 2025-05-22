import React from "react";
import { Headphones } from "lucide-react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const FreeConsultationBanner = () => {
  return (
    <div className="bg-blue-100 mx-0 md:mx-0 rounded-xl p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-4">
      {/* Left Content */}
      <div className="flex items-start gap-3">
        <Headphones className="text-gray-800 mt-1 shrink-0" size={25} />
        <div>
          <h4 className="text-base font-medium text-gray-900">
            Can't find the right fit?
          </h4>
          <p className="md:text-sm text-xs text-gray-700">
            Share your custom requirements with our team
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="w-full md:w-auto">
        <InteractiveHoverButton>Get free consultation</InteractiveHoverButton>
      </div>
    </div>
  );
};

export default FreeConsultationBanner;
