import React from "react";

const CouponMarquee = () => {
  return (
    <div className="relative overflow-hidden bg-yellow-100 py-2">
      {/* Marquee Track */}
      <div
        className="flex whitespace-nowrap animate-[scroll_30s_linear_infinite] text-sm sm:text-base font-medium text-gray-800"
        style={{ minWidth: "max-content" }}
      >
        {/* Repeat the message multiple times for smooth loop */}
        {Array(6)
          .fill(
            "🎉 Use code COWORK50 to get 50% OFF your first month!"
          )
          .map((text, i) => (
            <span className="mx-6" key={i}>
              {text}
            </span>
          ))}
      </div>

      {/* Keyframe animation (inline style) */}
      <style jsx="true">{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default CouponMarquee;
