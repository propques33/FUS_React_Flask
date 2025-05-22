import React, { useState } from "react";
import { Calendar, Users, Clock, Minus, Plus } from "lucide-react";

const ReserveDeskCard = () => {
  const [coworkers, setCoworkers] = useState(1);
  const [typeCount, setTypeCount] = useState(1);

  const baseRate = 498;
  const taxRate = 0.18;
  const tax = baseRate * taxRate;
  const total = baseRate + tax;

  return (
    <div className="max-w-sm w-full bg-white shadow-lg rounded-2xl p-6 space-y-6 border">
      {/* Title */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900">Book your space!</h2>
        <p className="text-sm text-gray-600">Tell us when you would like to book this property</p>
      </div>

      {/* CTA */}
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-3 rounded-xl transition">
        Schedule a Visit
      </button>

      {/* Date */}
      <div className="flex items-center gap-3 border rounded-xl px-4 py-3">
        <Calendar size={20} className="text-gray-500" />
        <div>
          <p className="text-sm font-medium text-gray-900">May 06 - May 06</p>
          <p className="text-xs text-gray-400">Check in - Check out</p>
        </div>
      </div>

      {/* Coworkers */}
      <div className="flex items-center justify-between border rounded-xl px-4 py-3">
        <div className="flex items-center gap-3">
          <Users size={20} className="text-gray-500" />
          <div>
            <p className="text-sm font-medium text-gray-900">{coworkers} Co-workers</p>
            <p className="text-xs text-gray-400">Co-workers</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCoworkers(Math.max(1, coworkers - 1))}
            className="w-8 h-8 border rounded-full grid place-content-center text-gray-700"
          >
            <Minus size={16} />
          </button>
          <span>{coworkers}</span>
          <button
            onClick={() => setCoworkers(coworkers + 1)}
            className="w-8 h-8 border rounded-full grid place-content-center text-gray-700"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Booking Type */}
      <div className="flex items-center justify-between border rounded-xl px-4 py-3">
        <div className="flex items-center gap-3">
          <Clock size={20} className="text-gray-500" />
          <div>
            <p className="text-sm font-medium text-gray-900">Booking Type</p>
            <p className="text-xs text-white bg-blue-500 px-3 py-1  font-semibold inline-block">DAILY </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTypeCount(Math.max(1, typeCount - 1))}
            className="w-8 h-8 border rounded-full grid place-content-center text-gray-700"
          >
            <Minus size={16} />
          </button>
          <span>{typeCount}</span>
          <button
            onClick={() => setTypeCount(typeCount + 1)}
            className="w-8 h-8 border rounded-full grid place-content-center text-gray-700"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Pricing Breakdown */}
      <div className="text-sm text-gray-800 space-y-1">
        <div className="flex justify-between">
          <span>₹{baseRate.toFixed(2)} x daily</span>
          <span>{baseRate.toFixed(0)}</span>
        </div>
        <div className="flex justify-between">
          <span>Taxes (18%)</span>
          <span>{tax.toFixed(2)}</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between font-semibold text-gray-900 text-base">
          <span>Total</span>
          <span>{total.toFixed(2)}</span>
        </div>
      </div>

      {/* Final Button */}
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-3 rounded-full transition">
        Reserve Desk - ₹{total.toFixed(2)}/day
      </button>
    </div>
  );
};

export default ReserveDeskCard;
