import { useState } from "react";

export default function ImageSlider({ slides, ctaLabel = "Book a Tour", onCTAClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const { image, name } = slides[currentIndex];

  return (
    <div className="w-full  py-10">
      <div className="relative max-w-7xl mx-auto overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-[500px] object-cover rounded-xl shadow"
        />
        <div className="absolue bg-white bottom-0 w-full flex justify-between items-center px-6 py-4">
          <p className="text-black font-bold text-xl">
            {String(currentIndex + 1).padStart(2, "0")}/<span className="text-sm font-normal">{slides.length}</span>
          </p>
          <p className="text-black text-xl font-semibold capitalize">{name}</p>
          <div className="flex space-x-4">
            <button
              onClick={prevSlide}
              className="text-sky-400 text-4xl hover:text-sky-500"
            >
              «
            </button>
            <button
              onClick={nextSlide}
              className="text-sky-400 text-4xl hover:text-sky-500"
            >
              »
            </button>
          </div>
        </div>
      </div>
      {/* <div className="text-center mt-6">
        <button
          onClick={onCTAClick}
          className="bg-[#20B1EE] text-white px-6 py-3 rounded-full text-sm font-semibold shadow hover:bg-[#1a9bd3] transition"
        >
          {ctaLabel}
        </button>
      </div> */}
    </div>
  );
}
