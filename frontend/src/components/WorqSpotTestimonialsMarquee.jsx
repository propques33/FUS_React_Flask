import React from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sumedha Singh",
    text: "WorqSpot has been a total game-changer for me. I used to jump between cafés to get work done — now I finally have a space that feels creative and professional. Plus, their flexible plans fit my crazy freelance schedule perfectly!",
  },
  {
    name: "Pranjal Mehta",
    text: "We set up our first team desk at WorqSpot, and honestly, I don’t know why we didn’t do it sooner. Great vibe, super-fast Wi-Fi, and those cozy breakout zones are perfect for brainstorming sessions.",
  },
  {
    name: "Priya Devadiga",
    text: "WorqSpot gave me the work-life balance I was missing while working from home. No more awkward kitchen meetings or loud background noise on calls. It feels like my second home but way more productive.",
  },
  {
    name: "Sameer T.",
    text: "Love the energy at WorqSpot! It's stylish, lively, and full of inspiring people. From client meetings to quiet work hours, everything just clicks here. Highly recommend it if you want to feel pumped about work again.",
  },
  {
    name: "Sumedha Singh",
    text: "WorqSpot has been a total game-changer for me. I used to jump between cafés to get work done — now I finally have a space that feels creative and professional. Plus, their flexible plans fit my crazy freelance schedule perfectly!",
  },
  {
    name: "Pranjal Mehta",
    text: "We set up our first team desk at WorqSpot, and honestly, I don’t know why we didn’t do it sooner. Great vibe, super-fast Wi-Fi, and those cozy breakout zones are perfect for brainstorming sessions.",
  },
  {
    name: "Priya Devadiga",
    text: "WorqSpot gave me the work-life balance I was missing while working from home. No more awkward kitchen meetings or loud background noise on calls. It feels like my second home but way more productive.",
  },
  {
    name: "Sameer T.",
    text: "Love the energy at WorqSpot! It's stylish, lively, and full of inspiring people. From client meetings to quiet work hours, everything just clicks here. Highly recommend it if you want to feel pumped about work again.",
  },
  {
    name: "Sumedha Singh",
    text: "WorqSpot has been a total game-changer for me. I used to jump between cafés to get work done — now I finally have a space that feels creative and professional. Plus, their flexible plans fit my crazy freelance schedule perfectly!",
  },
  {
    name: "Pranjal Mehta",
    text: "We set up our first team desk at WorqSpot, and honestly, I don’t know why we didn’t do it sooner. Great vibe, super-fast Wi-Fi, and those cozy breakout zones are perfect for brainstorming sessions.",
  },
  {
    name: "Priya Devadiga",
    text: "WorqSpot gave me the work-life balance I was missing while working from home. No more awkward kitchen meetings or loud background noise on calls. It feels like my second home but way more productive.",
  },
  {
    name: "Sameer T.",
    text: "Love the energy at WorqSpot! It's stylish, lively, and full of inspiring people. From client meetings to quiet work hours, everything just clicks here. Highly recommend it if you want to feel pumped about work again.",
  },
  {
    name: "Sumedha Singh",
    text: "WorqSpot has been a total game-changer for me. I used to jump between cafés to get work done — now I finally have a space that feels creative and professional. Plus, their flexible plans fit my crazy freelance schedule perfectly!",
  },
  {
    name: "Pranjal Mehta",
    text: "We set up our first team desk at WorqSpot, and honestly, I don’t know why we didn’t do it sooner. Great vibe, super-fast Wi-Fi, and those cozy breakout zones are perfect for brainstorming sessions.",
  },
  {
    name: "Priya Devadiga",
    text: "WorqSpot gave me the work-life balance I was missing while working from home. No more awkward kitchen meetings or loud background noise on calls. It feels like my second home but way more productive.",
  },
  {
    name: "Sameer T.",
    text: "Love the energy at WorqSpot! It's stylish, lively, and full of inspiring people. From client meetings to quiet work hours, everything just clicks here. Highly recommend it if you want to feel pumped about work again.",
  },
  {
    name: "Sumedha Singh",
    text: "WorqSpot has been a total game-changer for me. I used to jump between cafés to get work done — now I finally have a space that feels creative and professional. Plus, their flexible plans fit my crazy freelance schedule perfectly!",
  },
  {
    name: "Pranjal Mehta",
    text: "We set up our first team desk at WorqSpot, and honestly, I don’t know why we didn’t do it sooner. Great vibe, super-fast Wi-Fi, and those cozy breakout zones are perfect for brainstorming sessions.",
  },
  {
    name: "Priya Devadiga",
    text: "WorqSpot gave me the work-life balance I was missing while working from home. No more awkward kitchen meetings or loud background noise on calls. It feels like my second home but way more productive.",
  },
  {
    name: "Sameer T.",
    text: "Love the energy at WorqSpot! It's stylish, lively, and full of inspiring people. From client meetings to quiet work hours, everything just clicks here. Highly recommend it if you want to feel pumped about work again.",
  },
];

export default function CubispaceTestimonialsMarquee() {
  return (
    <div className="overflow-hidden py-12 bg-gray-50">
      <div className="flex animate-marquee gap-8 w-max">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="md:w-[600px] w-[300px] bg-white shadow-md rounded-xl p-6 flex-shrink-0 overflow-hidden text-ellipsis"
          >
            <Quote className="text-[#20B1EE] mb-3" />
            <p className="text-gray-700 text-sm mb-4 break-words">
              {item.text}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
            </div>

            <p className="text-sm font-semibold text-gray-800">— {item.name}</p>
          </div>
        ))}
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 400s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
