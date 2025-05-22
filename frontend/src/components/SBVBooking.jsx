import { CalendarDays, Clock, Check, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import cc1 from "../assets/cc1.png";
import cc2 from "../assets/cc2.png";

export default function DeskBooking() {
  const [seats, setSeats] = useState(1);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const price = 400;
  const tax = 72;
  const total = seats * price + tax;

  return (
    <div className="max-w-7xl mx-auto py-6 bg-white text-black font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left */}
        <div className="md:col-span-2 space-y-4">
          <div>
           <div className="flex items-center justify-between">
           <h1 className="text-3xl font-medium">
             <span className="bg-black text-white px-2 "> Day Pass</span> in Cubispace
            </h1>
            <p className="text-xl font-semibold mt-2">
              ₹ {price}/<span className="text-sm font-medium">day</span>
            </p>
           </div>
            <p className="text-gray-600 mt-2">
            2nd Floor, JSV Hyundai Building CP-53, near Engineering College Chauraha, near CNG Petrol Pump, Lucknow, Uttar Pradesh 226021
            </p>
          
          </div>
          <div className=" flex gap-2 overflow-hidden  ">
          <img
              src={cc1}
              alt="Coworking"
              className="w-full h-96  object-cover rounded-xl"
            />
           
          </div>
        </div>

   {/* Right */}
<div className="bg-gray-100 p-6 rounded-xl shadow-md space-y-6 relative">
  <div className="flex justify-between text-lg font-semibold">
    <span>Total Payable Amount</span>
    <span>₹ {total.toFixed(2)}</span>
  </div>

  {/* Date & Time */}
  <div className="space-y-3">
    <div className="flex items-center justify-between cursor-pointer">
      <div className="flex items-center space-x-2">
        <CalendarDays size={20} />
        <span className="text-sm">
          {format(selectedDate[0].startDate, "dd MMM yyyy")}
        </span>
      </div>
      <p
        onClick={() => setCalendarOpen(!calendarOpen)}
        className="text-sm text-gray-500 hover:text-black transition duration-200"
      >
        Edit Date
      </p>
    </div>

    {calendarOpen && (
      <div className="absolute z-50 mt-2">
        <DateRange
          ranges={selectedDate}
          onChange={(item) => setSelectedDate([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          rangeColors={["#000"]}
          minDate={new Date()}
        />
      </div>
    )}
  </div>

  {/* Day Booking */}
  <div>
    <p className="font-medium mb-1">Day Booking</p>
    <div className="bg-black text-white w-9 h-9 flex items-center justify-center rounded">
      <Check size={20} />
    </div>
  </div>

  {/* Seats */}
  <div>
    <p className="font-medium mb-1">Seats</p>
    <div className="flex items-center space-x-4">
      <button
        className="w-8 h-8 border border-gray-400 rounded flex items-center justify-center"
        onClick={() => setSeats(Math.max(1, seats - 1))}
      >
        <Minus size={16} />
      </button>
      <span className="text-lg font-medium">{seats}</span>
      <button
        className="w-8 h-8 border border-gray-400 rounded flex items-center justify-center"
        onClick={() => setSeats(seats + 1)}
      >
        <Plus size={16} />
      </button>
    </div>
  </div>

  {/* Coupon Code */}
  <div>
    <label className="block text-sm font-medium mb-1">Coupon Code</label>
    <input
      type="text"
      placeholder="Enter coupon code"
      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black text-sm"
    />
  </div>

  {/* GST Number */}
  <div>
    <label className="block text-sm font-medium mb-1">GST Number</label>
    <input
      type="text"
      placeholder="Enter GST No (optional)"
      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black text-sm"
    />
  </div>

  {/* Login Button */}
  <button className="w-full bg-black text-white py-3 rounded-md text-center font-semibold hover:opacity-90 transition">
    Login
  </button>
</div>

      </div>
    </div>
  );
}
