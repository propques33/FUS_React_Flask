import React from "react";
import SBVHero from "./SBVHero.jsx";
import SBVFeatures from "./SBVFeatures.jsx";
import SBVAmenities from "./SBVAmenities.jsx";
import SBVWorkspace from "./SBVWorkspace.jsx";
import SBVTeamOffices from "./SBVTeamOffices.jsx";
import SBVTestimonial from "./SBVTestimonial.jsx";
import FAQSection from "./FAQSection.jsx";
import SBVMembershipOptions from "./SBVMembershipOptions.jsx";
import SBVFooterHeroSection from "./SBVFooterHeroSection.jsx";
import SBVLocationMap from "./SBVLocationMap.jsx";
import LocationDetails from "./LocationDetails.jsx";
import CommonAmenities from "./CommonAmenities.jsx";
import OfficeTiming from "./OfficeTiming.jsx";
import SBVBooking from "./SBVBooking.jsx";



const SBV = () => {
  return (
    <div className="">
      <SBVHero />
      <SBVFeatures />
      <SBVWorkspace />
      <div className="max-w-7xl mx-auto">
      <SBVAmenities />
      <SBVTeamOffices />
      <SBVMembershipOptions />
      <SBVTestimonial />
      <SBVLocationMap />
      <OfficeTiming />

      <LocationDetails />
      <CommonAmenities />

      {/* <FAQSection /> */}
      <SBVFooterHeroSection />
      <SBVBooking />
      </div>
    </div>
  );
};

export default SBV;
