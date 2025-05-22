import React from 'react'
import ManagedOfficeListing from './ManagedOfficeListing'
import OfficeHighlight from './OfficeHighlight'
import ManagedOfficeAmenities from './ManagedOfficeAmenities'
import FAQSection from './FAQSection'
import ManagedOfficeTabs from './ManagedOfficeTabs'
import ManagedOfficeTrustedBy from './ManagedOfficeTrustedBy'
import ManagedOfficeFlexibilitySection from './ManagedOfficeFlexibilitySection'
import ManagedOfficeSpacePlanning from './ManagedOfficeSpacePlanning'

const ManagedOffice = () => {
  return (
    <div className='max-w-7xl mx-auto overflow-hidden px-4 md:px-0 '>
        <OfficeHighlight />
        <ManagedOfficeTabs />
        <ManagedOfficeTrustedBy />
        <ManagedOfficeFlexibilitySection />
        <ManagedOfficeSpacePlanning />



        {/* <ManagedOfficeListing /> */}
        <ManagedOfficeAmenities />
        <FAQSection />
      
    </div>
  )
}

export default ManagedOffice
