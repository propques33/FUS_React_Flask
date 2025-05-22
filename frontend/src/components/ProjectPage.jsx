import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import adarsh from "../assets/adarsh.png";
import { useNavigate } from "react-router-dom";
import DescImageGallery from "./DescImageGallery";
import cc1 from "../assets/cc1.png";
import cc2 from "../assets/cc2.png";
import cc3 from "../assets/cc3.png";
import cc4 from "../assets/cc4.png";
import Usp1 from "./Usp1";
import LocationDetails from "./LocationDetails";
import CommonAmenities from "./CommonAmenities";
import SeatingOptionCard from "./SeatingOptionCard";
import SimilarLocations from "./SimilarLocations";
import ReserveDeskCard from "./ReserveDeskCard";

// Lucide icons
import {
  MapPin,
  Building,
  UserCircle,
  FileText,
  GalleryHorizontal,
  Phone,
} from "lucide-react";
import InventoryTable from "./InventoryTable";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    enquiryFor: "",
  });

  const galleryImages = [cc1, cc2, cc3, cc4, cc1, cc2, cc3, cc4];

  const navigate = useNavigate();

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "auto",
  //   });

  //   document.documentElement.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }, []);

  useEffect(() => {
    axios
      .get(
        `https://propques-space-backend-i8etb.ondigitalocean.app/api/properties/${id}`
      )
      .then((res) => setProperty(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!property) return <div className="p-6">Loading...</div>;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedPhone = formData.phone.startsWith("+91")
      ? formData.phone
      : `+91${formData.phone}`;

    const payload = {
      ...formData,
      phone: formattedPhone,
      date: new Date().toISOString(),
    };

    try {
      const response = await axios.post(
        "https://hook.eu2.make.com/ydtu5kldv6kva987wq8sl4m8trfzdgp1",
        payload
      );
      console.log("Response:", response.data);
      navigate("/thankyou");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Error submitting form!");
    }
  };

  // Contact content (appears as a right panel on desktop and inside modal on mobile)
  const contactContent = (
    <div className="max-w-md w-full bg-blue-50 p-5 rounded shadow space-y-5 text-gray-800 relative">
      {/* Close button for mobile modal */}
      <button
        onClick={() => setShowContactModal(false)}
        className="md:hidden absolute top-2 right-4 text-red-600 text-2xl "
      >
        x
      </button>
      {/* Property Name */}
      <h2 className="text-2xl font-semibold">Book your space!</h2>
      {/* Address */}
      <div className="flex items-start gap-2 text-sm">
        Tell us when you would like to book this property
      </div>
      <hr className="border-gray-300" />
      {/* Manager Info */}
      <div className="flex items-center gap-4">
        {property.details.manager.managerImageUrl && (
          <img
            src={property.details.manager.managerImageUrl}
            alt="Manager"
            className="w-16 h-16 rounded-full  object-cover border-zinc-100 border-[2px] p-1"
          />
        )}
        <div>
          <p className="font-medium">{property.details.manager.managerName}</p>
          <div className="flex items-center gap-2 mt-1">
            <Phone size={16} className="text-gray-500" />
            <span className="text-[#20B1EE] font-semibold text-lg">
              +91 87929 29704
            </span>
          </div>
        </div>
      </div>
      {/* Enquiry Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 bg-">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full border border-gray-300 p-2 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          required
        />
        <input
          type="text"
          placeholder="Phone number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full border border-gray-300 p-2 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          required
        />
        <select
          className="border rounded p-2 text-sm"
          value={formData.enquiryFor}
          onChange={(e) =>
            setFormData({ ...formData, enquiryFor: e.target.value })
          }
          required
        >
          <option value="">Enquiry For</option>
          <option value="Office Space">Office Space</option>
        </select>
        <button
          type="submit"
          className="w-full bg-[#20B1EE] text-white p-2 rounded hover:bg-[#20a2ee]"
        >
          Book Now
        </button>
      </form>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 ">
      {/* Left Section */}
      <div className="w-full flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row w-full gap-6 max-w-7xl">
          <div className="w-full lg:w-3/4 flex flex-col gap-8 md:mt-4 mt-0">
            <DescImageGallery images={galleryImages} />

            <div className="flex flex-col px-4 md:px-0 ">
              <div className="md:flex flex items-centr gap-4 justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-medium text-blue-500">
                    Cubispace
                  </h2>
                  <p className="md:mt-2 mt-0">
                    <span className="text-gray-800  bg-yellow-300 px-4 rounded-xl text-base uppercase font-semibold">
                      Day Pass
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 flex md:flex-row flex-col md:items-center justify-center md:gap-2  gap-0 text-2xl">
                    <span className=" text-sm md:text-base text-gray-600">
                      Price:
                    </span>{" "}
                    <span className="text-xl md:text-2xl text-blue-500 font-semibold">
                      ₹500/hour
                    </span>
                  </p>
                </div>
              </div>
              <p className="flex items-center text-sm text-gray-600 mt-2 gap-2">
                <MapPin size={14} />
                Jankipuram Extension, Lucknow
              </p>
            </div>

            <SeatingOptionCard />
            <div className="px-4 md:px-0 ">
              <LocationDetails />
              <Usp1 />
            </div>
            <CommonAmenities />
          </div>

          {/* Desktop Right Panel */}
          <div className="hidden md:block md:w-1/4 relative right-0">
            <p className="sticky top-20">
              <ReserveDeskCard />
            </p>
          </div>
        </div>

        <div className="px-4 md:px-0">
          <SimilarLocations />
        </div>
      </div>

      {/* Mobile "Call Now" Button */}
      <div className="md:hidden">
        <div className="fixed inset-x-0 bottom-0 p-4 bg-white shadow-t z-50">
          <button
            onClick={() => setShowContactModal(true)}
            className="w-full bg-blue-500 text-white p-3 rounded"
          >
            Book Now{" "}
          </button>
        </div>
      </div>

      {/* Mobile Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-[#0000009f] bg-opacity-50 flex justify-center items-center z-50 md:hidden">
          <div className="bg- p-4 w-11/12 max-w-md rounded-lg relative">
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-2 right-2 text-red-600 hidden"
            >
              x
            </button>
            {contactContent}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
