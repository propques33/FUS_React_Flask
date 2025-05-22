import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-gray-50">
      <CheckCircle className="w-20 h-20 text-sky-500 mb-6" />

      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Thank You!
      </h1>

      <p className="text-gray-600 text-base md:text-lg max-w-md mb-8">
        We've received your enquiry. Our workspace expert will reach out to you
        shortly with more details.
      </p>

      <Link
        to="/"
        className="inline-block bg-[#20B1EE] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#1aa1dd] transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ThankYou;
