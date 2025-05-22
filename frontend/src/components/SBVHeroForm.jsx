import React, { useState } from "react";
import { FiUser, FiPhone } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const HeroForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    coworkingType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
  const navigate = useNavigate(); // For redirecting after form submission

  // Regex for validating phone numbers (10 digits only, no letters)
  const phoneRegex = /^\d{10}$/;

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validate phone number dynamically
    if (name === "phone" && value && !phoneRegex.test(value)) {
      e.target.setCustomValidity(
        "Phone number must be 10 digits and contain no letters."
      );
    } else {
      e.target.setCustomValidity(""); // Clear the custom validity
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable the button

    // Add the current date dynamically
    const dataToSend = {
      ...formData,
      date: new Date().toLocaleDateString(), // Automatically add current date
    };

    try {
      const response = await fetch(
        "https://hook.eu2.make.com/qqye3i7whwnu8w9a0u1pre3j0dsz7et6",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      if (response.ok) {
        // Redirect to the Thank You page after successful submission
        navigate("/thankyou");
      } else {
        alert("Failed to submit the form. Please try again.");
        setIsSubmitting(false); // Re-enable the button
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
      setIsSubmitting(false); // Re-enable the button
    }
  };

  return (
    <div className="">
      <div className="container text-center">
        {/* Search Form */}
        <div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="flex items-center md:text-sm text-xs bg-gray-100 rounded-md p-2">
              <FiUser className="text-gray-500 text-xl mr-2" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500"
                required
              />
            </div>

            {/* Mobile Number Input */}
            <div className="flex items-center md:text-sm text-xs bg-gray-100 rounded-md p-2">
              <FiPhone className="text-gray-500 text-xl mr-2" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your mobile number"
                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500"
                pattern="^\d{10}$" // Regex for validation
                title="Phone number must be exactly 10 digits and contain no letters."
                required
              />
            </div>

            {/* Dropdown for Coworking Space Type */}
            <div className="bg-gray-100 rounded-md p-2 md:text-sm text-xs">
              <select
                name="coworkingType"
                value={formData.coworkingType}
                onChange={handleInputChange}
                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500"
                required
              >
                <option value="" disabled className="capitalized uppercase">
                  Select type of coworking space
                </option>
                <option value="private-cabin">Private Cabin</option>
                <option value="meeting-room">Meeting Room</option>
                <option value="open-desk">Open Desk</option>
                <option value="collaborative-desk">Collaborative Desk</option>
              </select>
            </div>

            {/* Get Started Button */}
            <button
              type="submit"
              disabled={isSubmitting} // Disable button when submitting
              className={`w-full md:text-sm text-xs ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : " bg-black"
              } text-white md:py-2 py-1 rounded-md transition duration-300`}
            >
              {isSubmitting ? "Submitting..." : "Let's Talk"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroForm;