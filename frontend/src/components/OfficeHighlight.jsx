import React from 'react';
import { CheckCircle, Phone } from 'lucide-react';
import AutoCarousel from './AutoCarousel'; // Assuming you have an AutoCarousel component

const HeroOfficeMangaluru = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px- md:mt-10 mt-8 py-16 grid md:grid-cols-2 md:gap-12 gap-6 items-center">
        
        {/* Left Content */}
        <div className="md:space-y-6 space-y-4">
          <h1 className="text-[1.4rem] md:text-5xl font-medium text-gray-900 leading-tight relative">
            Discover 
            <span className='bg-yellow-300  px-2 ml-2 rotate-6'>
            Managed Office  <br />
            </span>
            Space {" "} <span className="bg-blue-500 ml-2 text-white px-4 absolute -rotate-5"> Near You</span>
          </h1>

          <div className="flex flex-wrap gap-3 md:text-sm text-xs font-medium text-gray-600  ">
            <span className="bg-blue-100 text-blue-800 px-3 py-1  -mt-1 md:mt-0 rounded-full">2 Locations</span>
            <span>/</span>
            <span>1 Desk to 100+</span>
            <span>/</span>
            <span>Flexible Terms</span>
          </div>

          <p className="text-gray-700 md:text-sm text-xs leading-relaxed">
            Find fully serviced offices with furniture, high-speed WiFi, and support staff — ready to move in. Scale from an hour to years, and focus on what matters most: growing your business.
          </p>

          <div className="space-y-3">
            <p className="text-gray-800 font-semibold">Here’s how we support your team:</p>
            <ul className="space-y-2">
              {[
                'Private offices for all team sizes',
                'Custom office layouts & branding',
                'Day offices with ultimate flexibility',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="text-blue-600 w-5 h-5" />
                  <span className='md:text-sm text-xs '>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className=" space-y-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white md:text-sm text-xs font-semibold px-6 py-3 rounded-full shadow transition">
              Enquire Now
            </button>
           
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative md:block hidden">
     

<AutoCarousel />

        </div>
      </div>
    </section>
  );
};

export default HeroOfficeMangaluru;
