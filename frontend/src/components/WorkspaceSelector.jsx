import { useState } from "react";
import pc5 from '../assets/pc10.png'
import img1 from '../assets/w2.jpg'
import img2 from '../assets/pc12.png'
import img3 from '../assets/cc12.png'
import dp from '../assets/dp2.png'
import dp2 from '../assets/ws3.jpg'
const options = {
  coworking: {
    cards: [
      {
        title: "OPEN WORKSTATION",
        text:
          "Work where you want, when you want and meet new people every day.",
        image: pc5,
        button: "TELL ME MORE ABOUT COWORKING",
      },
      {
        title: "HOT DESK",
        text: "Flexible desks for individuals and teams on the move.",
        image: img1,
        button: "EXPLORE HOT DESKING",
      },
    ],
  },
  dedicated: {
    cards: [
      {
        title: "Enterprise Office",
        text:
          "Prefer consistency? Get a permanent desk without the home office hassle.",
        image: img2,
        button: "TELL ME MORE ABOUT DEDICATED DESK",
      },
      {
        title: "Private Office",
        text: "Secure, semi-private desk clusters for growing teams.",
        image: img3,
        button: "EXPLORE TEAM ZONES",
      },
    ],
  },
  day: {
    cards: [
      {
        title: "DAY PASS",
        text: "Need a desk for the day? Drop in and start working right away.",
        image: dp,
        button: "TELL ME MORE ABOUT DAY PASS",
      },
      {
        title: "MEETING ROOMS",
        text: "Book rooms by the hour for your client calls or brainstorms.",
        image: dp2,
        button: "BOOK A ROOM",
      },
    ],
  },
};

export default function WorkspaceSelector() {
  const [selected, setSelected] = useState("coworking");

  return (
    <div className="py-20 bg-gray-100 md:px-0 px-4 ">
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-4 py-2 text-base rounded-full font-mono ${
            selected === "coworking" ? "bg-[#20B1EE] text-white" : "bg-gray-200"
          }`}
          onClick={() => setSelected("coworking")}
        >
          COWORKING
        </button>
        <button
          className={`px-4 py-2 text-base rounded-full font-mono ${
            selected === "dedicated" ? "bg-[#20B1EE] text-white" : "bg-gray-200"
          }`}
          onClick={() => setSelected("dedicated")}
        >
          OFFICE
        </button>
        <button
          className={`px-4 py-2 text-base rounded-full font-mono ${
            selected === "day" ? "bg-[#20B1EE] text-white" : "bg-gray-200"
          }`}
          onClick={() => setSelected("day")}
        >
          FOR THE DAY
        </button>
      </div>

      <div className="grid grid-cols-2 md:gap-6 gap-2 max-w-6xl mx-auto">
        {options[selected].cards.map((card, index) => (
          <div
            key={index}
            className="bg-white md:p-4 p-2 rounded-xl shadow-md flex flex-col items-center text-center"
          >
            <img
              src={card.image}
              alt={card.title}
              className="rounded-xl w-full md:h-80 h-40 object-cover mb-4"
            />
            <h2 className=" mb-2 uppercase">{card.title}</h2>
            {/* <button className="bg-[#20B1EE] hover:bg-sky-500 text-sm px-6 py-2 rounded-full text-white font-semibold">
              {card.button}
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
}