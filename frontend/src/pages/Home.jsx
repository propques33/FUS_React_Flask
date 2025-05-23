import React, { useEffect, useState } from 'react'
import Banner from '../components/Commercial Office Leasing & Sales/Banner'
import CommercialListing from '../components/Commercial Office Leasing & Sales/CommercialListing'
import LocationFilter from '../components/Commercial Office Leasing & Sales/LocationFilter'
import ViewAllPropertiesButton from '../components/Commercial Office Leasing & Sales/ViewAllPropertiesButton.jsx'
import CoworkingCentersBanner from '../components/CoworkingCentersBanner.jsx'
import CoworkingHighlight from '../components/CoworkingHighlight.jsx'
import CoworkingBenefits from '../components/CoworkingBenefits.jsx'
import FAQSection from '../components/FAQSection.jsx'
import PropquesOverview from '../components/PropquesOverview.jsx'
import PortfolioCubispace from '../components/PortfolioCubispace.jsx'
import CommunitySection from '../components/CommunitySection.jsx'
import InspireSection from '../components/InspireSection'
import WorkspaceSelector from '../components/WorkspaceSelector'
import CoworkingPromo from '../components/CoworkingPromo.jsx'
import TrustedBySection from '../components/TrustedBySection.jsx'
import TopCoworkingCities from '../components/TopCoworkingCities.jsx'
import TrendingSpaces from '../components/TrendingSpaces.jsx'
import FindSpaceSteps from '../components/FindSpaceSteps.jsx'
import TrendingCities from '../components/TrendingCities.jsx'
import AutoCarousel from '../components/AutoCarousel.jsx'
import TestimonialsMarquee from '../components/TestimonialsMarquee.jsx'
import ResultsBlogSection from '../components/ResultsBlogSection.jsx'
import WhyChooseFindUrSpace from '../components/WhyChooseFindUrSpace.jsx'
import BrandMarquee from '../components/BrandMarquee.jsx'
import FeaturedManagedOffices from '../components/FeaturedManagedOffices.jsx'
import ManagedOfficeSection from '../components/ManagedOfficeSection.jsx'
import { getBackendStatus } from '../utils/api';

const Home = (setFilters) => {
  const [backendStatus, setBackendStatus] = useState("");

  useEffect(() => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "auto" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });

    // ✅ Call centralized API function
    getBackendStatus()
      .then((data) => {
        console.log("Flask Response:", data);
        setBackendStatus(data.message);
      })
      .catch((err) => console.error("Backend Error:", err));
  }, []);

  return (
    <div className='overflow-hidden'>
      <p className="text-sm text-green-600 text-center mt-2">
        {backendStatus && `Backend says: ${backendStatus}`}
      </p>
      <Banner setFilters={setFilters}  />
      <FindSpaceSteps />

      <TrendingSpaces />
      

      <TopCoworkingCities />
      <WhyChooseFindUrSpace />
      <CoworkingPromo />

      <ManagedOfficeSection />




      <LocationFilter />
      <FeaturedManagedOffices />

      {/* <ViewAllPropertiesButton /> */}


      {/* <InspireSection /> */}
      {/* <TrendingCities /> */}
      <CoworkingBenefits />
      {/* <CommercialListing /> */}



      <BrandMarquee />

      <AutoCarousel />


      {/* <CommunitySection /> */}
      {/* <WorkspaceSelector /> */}
      {/* <PropquesOverview /> */}
      <div className='px-4 py-10 md:py-0'>
      <FAQSection />

      </div>
      <ResultsBlogSection />
      <TestimonialsMarquee />

    </div>
  )
}

export default Home
