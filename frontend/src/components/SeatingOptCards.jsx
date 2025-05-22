import React from 'react'
import flexiImg from "../assets/cw2.png"; // Replace with your actual image
import { CheckCircle } from "lucide-react";

const SeatingOptCards = () => {
  return (
    <div>
      <div className="border rounded-md p-4 flex flex-col md:flex-row items-start gap-4 shadow-sm hover:shadow-md transition">
        {/* Image */}
        <img
          src={flexiImg}
          alt="Flexi Desk"
          className="w-full md:w-52 h-36 object-cover rounded-md"
        />

        {/* Content */}
        <div className="flex flex-col justify-between items-stretch gap-1 w-full">
          <h3 className="text-lg font-semibold text-gray-900">Flexi Desks</h3>
          <p className="text-sm text-gray-600 mb-2">
            Pay per use — bring your laptop, pick a spot and get working
          </p>

          <div className="flex items-center text-sm text-blue-500 font-medium mb-2 ">
            <CheckCircle className="w-4 h-4 mr-1 text-blue-500" />
            Pay per use
          </div>

          <div className="text-sm text-gray-800 ">
            {/* <span className="line-through text-gray-500 mr-2">₹1,400</span> */}
            <p>
            Price Starting At


            </p>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center  gap-">
              <div>
                {/* <p className="text-xs text-gray-500">Quoted price (negotiable)</p> */}
                <p className="text-xl font-semibold text-gray-800">
                  ₹500{" "}
                  <span className="text-xs text-gray-500 font-normal">
                    /desk/hour
                  </span>
                </p>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg text-xs font-medium w-full md:w-auto">
                Book Now
              </button>
            </div>{" "}
          </div>
        </div>

        {/* CTA */}
      </div>
    </div>
  )
}

export default SeatingOptCards
