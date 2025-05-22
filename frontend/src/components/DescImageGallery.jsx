import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DescImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const scrollThumbnails = (direction) => {
    const container = thumbnailRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -200 : 200;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full md:mt-16">
      {/* Main Image Display */}
      <div className="relative w-full md:h-[500px] h-[400px] md:rounded-xl overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black md:p-2 p-1 rounded-full shadow hover:bg-gray-100 z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black md:p-2 p-1 rounded-full shadow hover:bg-gray-100 z-10"
        >
          <ChevronRight size={24} />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded md:text-sm text-xs ">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Scrollable Row */}
      {images.length > 1 && (
        <div className="relative mt-4">
          {/* Thumbnail Left Arrow */}
          <button
            onClick={() => scrollThumbnails("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white md:p-2 p-1 rounded-full shadow hover:bg-gray-100"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Thumbnails */}
          <div
            ref={thumbnailRef}
            className="flex gap-3 overflow-x-auto no-scrollbar px-10"
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
                className={`md:h-20 md:w-28 h-16 w-20 rounded object-cover cursor-pointer transition ring-2 ${
                  currentIndex === index ? "ring-blue-500" : "ring-transparent"
                }`}
              />
            ))}
          </div>

          {/* Thumbnail Right Arrow */}
          <button
            onClick={() => scrollThumbnails("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white md:p-2 p-1 rounded-full shadow hover:bg-gray-100"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default DescImageGallery;
