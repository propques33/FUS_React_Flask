import React from 'react';
import { MapPin } from 'lucide-react';

const spaces = [
  {
    title: 'Incuspaze - BBD Viraj Towers',
    address: '8th Floor, Amar Shaheed Path, Vikrant Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
    img: 'https://path-to-your-image1.webp',
  },
  {
    title: 'Incuspaze - Experio',
    address: 'Gomti Nagar, Phase I, Vibuti Khand, Lucknow, Uttar Pradesh 226010',
    img: 'https://path-to-your-image2.webp',
  },
  {
    title: 'Incuspaze - Shalimar Iridium',
    address: 'Mandi Parishad Rd, opp. Indira Gandhi Pratishthan, Vijaipur Colony, Vibhu Khand, Gomti Nagar, Lucknow, UP 226010',
    img: 'https://path-to-your-image3.webp',
  },
];

const OfficeListing = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Explore Our Managed Office Solutions in <span className="text-gray-900">Lucknow</span>
        </h2>
        <p className="mt-2 text-gray-600">
          Our managed office spaces in Lucknow offer everything you need – from sleek workspaces to seamless support.
          <br />
          Find your perfect fit and hit the ground running!
        </p>
        <div className="h-1 w-20 mx-auto mt-4 bg-orange-500 rounded" />
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {spaces.map(({ title, address, img }, i) => (
          <div
            key={i}
            className="w-full sm:w-[300px] bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="relative">
              <img src={img} alt={title} className="w-full h-48 object-cover" />
              <div className="absolute bottom-2 left-2 bg-black/70 text-white text-sm px-3 py-1 rounded">
                Managed Office Space
              </div>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="font-semibold text-gray-800">{title}</h3>
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin size={16} className="mt-1" />
                <span>{address}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-4 mt-8">
        <button className="p-2 border rounded-md hover:bg-gray-100">
          <span>&larr;</span>
        </button>
        <button className="p-2 border rounded-md bg-orange-500 text-white hover:bg-orange-600">
          <span>&rarr;</span>
        </button>
      </div>
    </section>
  );
};

export default OfficeListing;
