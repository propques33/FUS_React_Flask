import React from "react";
import SeatingOptCards from './SeatingOptCards.jsx'

const SeatingOptionCard = () => {
  return (
    <section className="py- px-4 md:px-0 bg-white">
      <h2 className="text-xl capitalize md:text-xl font-medium text-gray-700 border-l-4 border-blue-500 pl-3 mb-4">
        Seating Options
      </h2>
<div className="flex flex-col  gap-4">
<SeatingOptCards />
<SeatingOptCards />
</div>
      
    </section>
  );
};

export default SeatingOptionCard;
