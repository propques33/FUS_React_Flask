import React, { useState } from "react";
import { MapPin, Train } from "lucide-react";

const LocationDetails = () => {
    const [expanded, setExpanded] = useState(false);

    const content = `HelloWorld Sagar Avenue is a fully-furnished living space located in Vakola, Santacruz East. It is one of the most affordable, comfortable and convenient coliving spaces. It offers well-designed private, double and triple sharing rooms for students and working professionals living in the dream city away from their family. This stunning coliving property boasts state of the art facilities such as open kitchen, attached bathroom, air conditioning, power backup, housekeeping, refrigerator, board games, TV and much more. All these top-notch amenities are included within your monthly rent. You can even relax on the terrace and witness nature’s serene views. Wait no more, book now!`;
  
    const shortText = content.slice(0, 200) + "...";
  
  return (
    <section className=" px- md:px-0 bg-white">
      <h2 className="text-xl capitalize md:text-xl font-medium text-gray-700 border-l-4 border-zinc-500 pl-3 mb-4">
        Location Details
      </h2>

      <p className="text-gray-700 text-sm md:text-base mb-4 uppercase font-medium">
        Address
      </p>


    

      {/* Address */}
      <div className="mb-4 flex items-start gap-2">
        <MapPin className="text-zinc-500" size={20} />
        <p className="text-gray-800 text-xs md:text-sm">
          2nd Floor, Eldeco Centre, Block A, Shivalik Colony, Malviya Nagar, New Delhi, Delhi
        </p>
      </div>

      {/* Embedded Google Map */}
      <div className="rounded-md overflow-hidden mb-6 shadow">
        <iframe
          title="Malviya Nagar Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.1208994066576!2d77.21910527455427!3d28.593279575692954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1e69c5f9e9d%3A0x87577ed7a6b6254c!2sEldeco%20Centre%2C%20Malviya%20Nagar%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1714985595586!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Connectivity */}
      <h3 className="text-gray-700 text-sm md:text-base mb-4 uppercase font-medium">Connectivity</h3>
      <div className="flex flex-col md:flex-row gap-6 text-sm text-gray-700">
        {/* Metro 1 */}
        <div className="flex items-start gap-3">
          <Train className="text-yellow-500 mt-1" size={18} />
          <div>
            <p className="font-medium">Malviya Nagar Metro Station</p>
            <p className="text-gray-600">Yellow Line</p>
            <p className="text-gray-500">10 m away</p>
          </div>
        </div>

        {/* Metro 2 */}
        <div className="flex items-start gap-3">
          <Train className="text-pink-500 mt-1" size={18} />
          <div>
            <p className="font-medium">Hauz Khas Metro Station</p>
            <p className="text-gray-600">Magenta Line</p>
            <p className="text-gray-500">2.2 kms away</p>
          </div>
        </div>
      </div>

      <section className="py-8   md:px-0 bg-white">
      <h2 className="text-gray-700 text-sm md:text-base mb-4 uppercase font-medium">
        About this property
      </h2>
      <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
        {expanded ? content : shortText}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-blue-500 font-semibold mt-3 hover:underline text-sm"
      >
        {expanded ? "See Less" : "See More"}
      </button>
    </section>
    </section>
  );
};

export default LocationDetails;
