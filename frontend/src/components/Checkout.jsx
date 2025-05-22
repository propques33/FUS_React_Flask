import React, { useState, useRef, useEffect } from "react";
import { Pencil, Info, CheckCircle, Clock, AlertTriangle } from "lucide-react";
import {
  MapPin,
  ChevronLeft,
  ChevronRight,
  Users,
  Train,
  Star,
  ShieldCheck,
  Plus,
} from "lucide-react";
import { CalendarDays } from "lucide-react";
import Usp1 from "./Usp1";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

import img from "../assets/w5.jpg"; // Replace with your workspace image
import WorkspaceCard from "./WorkspaceCard";
import cc3 from "../assets/cc3.png";
import { ScratchToReveal } from "@/components/magicui/scratch-to-reveal";

const ConfirmBooking = () => {
  const sample = {
    title: "Awfis - Allied House",
    location: "Vasant Kunj, Delhi",
    hours: "Open Now, 08:00 to 20:00",
    rating: "4.4",
    reviews: "92",
    image: cc3,
    services: ["Dedicated Desks", "Private Cabins", "Managed Office"],
    features: [
      { icon: <Users size={12} />, label: "Meeting Rooms" },
      { icon: <ShieldCheck size={12} />, label: "Assured Security" },
      { icon: <Train size={12} />, label: "Metro Nearby" },
    ],
    price: "10,999",
  };

  const offers = [
    {
      text: (
        <>
          ✅ <strong>Get 20% OFF</strong> on this workspace every Saturday. Use
          code <span className="font-bold text-green-800">SATURDAYS20</span>
          <br />
          <span className="text-xs italic">*Click for Details</span>
        </>
      ),
    },
    {
      text: (
        <>
          🎉 <strong>Flat ₹100 OFF</strong> on bookings above ₹500. Use code{" "}
          <span className="font-bold text-green-800">FLAT100</span>
          <br />
          <span className="text-xs italic">*Applicable once per user</span>
        </>
      ),
    },
    {
      text: (
        <>
          💼 <strong>Extra 10% cashback</strong> for corporate accounts.
          <br />
          <span className="text-xs italic">*Contact us for setup</span>
        </>
      ),
    },
  ];

  const basePrice = 900;
  const taxRate = 0.18;

  const [coupon, setCoupon] = useState("");
  const [gst, setGst] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleApplyCoupon = () => {
    if (coupon.trim().toUpperCase() === "SATURDAYS20") {
      setDiscount(basePrice * 0.2);
    } else {
      setDiscount(0);
    }
  };

  const discountedPrice = basePrice - discount;
  const tax = discountedPrice * taxRate;
  const total = discountedPrice + tax;

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [showMemberEditor, setShowMemberEditor] = useState(false);
  const [memberCount, setMemberCount] = useState(1);
  const [slot, setSlot] = useState("Full Day"); // Default slot
  const [selectedSlots, setSelectedSlots] = useState([]);

  const calendarRef = useRef(null);

  const generateTimeSlots = (start = 8, end = 20) => {
    const slots = [];
    for (let hour = start; hour < end; hour++) {
      const startTime = `${hour.toString().padStart(2, "0")}:00`;
      const endTime = `${(hour + 1).toString().padStart(2, "0")}:00`;
      slots.push(`${startTime} - ${endTime}`);
    }
    return slots;
  };

  const toggleSlot = (slot) => {
    setSelectedSlots((prev) =>
      prev.includes(slot) ? prev.filter((s) => s !== slot) : [...prev, slot]
    );
  };

  const allTimeSlots = generateTimeSlots();

  const [activeIndex, setActiveIndex] = useState(0);

  const [showScratchPopup, setShowScratchPopup] = useState(true);
  const [scratched, setScratched] = useState(false);

  // Auto rotate offers every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % offers.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowDatePicker(false);
      }
    };
    if (showDatePicker) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDatePicker]);

  return (
    <div className="md:mt-16 mt-12 max-w-7xl mx-auto min-h-screen relative py-8 text-sm text-gray-800">
      {showScratchPopup && (
        <div className="fixed inset-0 bg-black/60 z-[999] flex items-center justify-center transition-all ease-in-out duration-300">
          <div className="relative bg-white rounded-xl p-8 shadow-lg flex flex-col items-center transition-all ease-in-out duration-300">
            <button
              onClick={() => setShowScratchPopup(false)}
              className="absolute transition-all ease-in-out duration-300 top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
            >
              ✕
            </button>
            <ScratchToReveal
              width={300}
              height={300}
              minScratchPercentage={50}
              onComplete={() => setShowScratchPopup(false)}
            >
              <div className="w-full h-full transition-all ease-in-out duration-300 flex items-center justify-center text-center text-xl font-bold">
                🎉 20% OFF Coupon Revealed!
              </div>
            </ScratchToReveal>
            <p className="text-sm text-gray-600 transition-all ease-in-out duration-300 mt-4">
              Scratch to reveal your offer
            </p>
          </div>
        </div>
      )}

      {/* <h2 className="text-2xl font-medium mb-6 mx-4">Confirm Booking</h2> */}

      <div className="md:flex flex-row gap-4 px-2 md:px-0">
        {/* Left: Booking Summary */}
        <div className="md:w-2/3 space-y-4">
          {/* Workspace Header */}
          <WorkspaceCard data={sample} />

          {/* Booking Dates */}
          <div className="bg-white border rounded-xl p-5 space-y-3 shadow-sm relative">
            <div className="flex items-center gap-2 text-blue-500">
              <CalendarDays size={18} />
              <h4 className="font-semibold text-sm text-gray-800">
                Booking Dates
              </h4>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-700">
                {format(dateRange[0].startDate, "dd MMM yyyy")} –{" "}
                {format(dateRange[0].endDate, "dd MMM yyyy")}
              </p>
              <button
                onClick={() => setShowDatePicker(!showDatePicker)}
                className="text-blue-500 hover:underline flex items-center gap-1 text-xs font-medium"
              >
                <Pencil size={14} /> Edit Dates
              </button>
            </div>

            {/* Calendar Dropdown */}
            {showDatePicker && (
              <div ref={calendarRef} className="mt-2 z-40 w-80 overflow-hidden">
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDateRange([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={dateRange}
                  className="w-80 overflow-hidden"
                />
              </div>
            )}

            {/* Slot selection */}
            <div className="pt-0">
              <div className="">
                <h4 className="text-sm font-medium mb-2 text-gray-700">
                  Select Time Slots
                </h4>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {allTimeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => toggleSlot(slot)}
                      className={`text-xs border px-3 py-2 rounded-full transition ${
                        selectedSlots.includes(slot)
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      <p className="md:text-xs text-[0.7rem]">{slot}</p>
                    </button>
                  ))}
                </div>
              </div>

              {selectedSlots.length > 0 && (
                <div className="mt-2 text-sm text-gray-700">
                  <span className="font-medium">Selected Time:</span>{" "}
                  {selectedSlots.join(", ")}
                </div>
              )}
            </div>

            <div className="bg-orange-100 text-orange-800 text-xs p-3 rounded-xl flex items-start gap-2 mt-2">
              <AlertTriangle size={14} className="mt-0.5" />
              <span>
                We've selected the next available date for this workspace.
                Please edit if needed.
              </span>
            </div>
          </div>

          {/* Members */}
          <div className="bg-white border rounded-xl p-5 space-y-3 shadow-sm">
            <div className="flex items-center gap-2 text-blue-500">
              <Users size={18} />
              <h4 className="font-semibold text-sm text-gray-800">Members</h4>
            </div>

            {!showMemberEditor ? (
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-700">{memberCount} (self)</p>
                <button
                  onClick={() => setShowMemberEditor(true)}
                  className="text-blue-500 hover:underline flex items-center gap-1 text-xs font-medium"
                >
                  <Pencil size={14} /> Edit Members
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <button
                    onClick={() =>
                      setMemberCount((prev) => Math.max(1, prev - 1))
                    }
                    className="px-2 py-1 border rounded"
                  >
                    –
                  </button>
                  <span>{memberCount}</span>
                  <button
                    onClick={() => setMemberCount((prev) => prev + 1)}
                    className="px-2 py-1 border rounded"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => setShowMemberEditor(false)}
                  className="text-xs text-blue-500 underline"
                >
                  Done
                </button>
              </div>
            )}
          </div>

          {/* Cancellation Policy */}
          <Usp1 />
        </div>

        {/* Right: Price & Offers */}
        <div className="md:w-1/3">
          <div className="space-y-4 mt-4">
            {/* Offers */}
            <div className="bg-green-50 text-green-700 text-sm p-4 rounded-xl shadow-sm relative overflow-hidden">
              {/* Offer Content */}
              <div className="transition-all duration-500 ease-in-out min-h-[60px]">
                {offers[activeIndex].text}
              </div>

              {/* Dot Navigation */}
              <div className="absolute bottom-2 right-3 flex gap-2 mt-3">
                {offers.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === activeIndex ? "bg-green-700" : "bg-green-300"
                    }`}
                    aria-label={`Switch to offer ${i + 1}`}
                  />
                ))}
              </div>
            </div>
            {/* Coupon Input */}
            <div className="bg-white border rounded-xl p-4 shadow-sm space-y-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Apply Coupon Code
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter Code"
                  className="border px-3 py-2 rounded w-full text-sm"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button
                  onClick={handleApplyCoupon}
                  className="bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600"
                >
                  Apply
                </button>
              </div>
            </div>

            {/* GST Input */}
            <div className="bg-white border rounded-xl p-4 shadow-sm space-y-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                GST Code
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter GST Code"
                  className="border px-3 py-2 rounded w-full text-sm"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button
                  onClick={handleApplyCoupon}
                  className="bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600"
                >
                  Apply
                </button>
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-white border rounded-xl p-4 space-y-3 shadow-sm">
              <h4 className="font-semibold">Price Breakup</h4>
              <div className="flex justify-between text-sm">
                <span>Price per member/day</span>
                <span className="text-gray-800">₹{basePrice}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Discount</span>
                <span className="text-green-600">– ₹{discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Tax (18%)</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              <hr />
              <div className="flex justify-between font-semibold">
                <span>Total amount</span>
                <span className="text-blue-500">₹{total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 w-full bg-white border-t px-4 py-3 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex  items-center justify-between gap-4">
          {/* Booking Summary Text */}
          <div className="text-sm text-gray-700  md:text-left">
            <p>
              <span className="font-medium">Day(s):</span> <strong>1</strong> |{" "}
              <span className="font-medium">Member(s):</span>{" "}
              <strong>1 </strong>
            </p>
            <p>
              <span className="font-medium">Booking Amount:</span>{" "}
              <span className="text-blue-500 font-semibold">₹900</span>
            </p>
          </div>

          {/* Confirm Button */}
          <button className="w-  md:w-auto bg-yellow-300 text-zinc-700 py-3 px-8 inline rounded-xl font-medium hover:bg-blue-500 transition-all duration-200">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBooking;
