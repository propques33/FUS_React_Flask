import React from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ritika V.",
    text: "WorkDesq just gets what freelancers need — no rigid timings, no boring cubicles, just pure flexibility and good vibes. Plus, their coffee is dangerously good! It feels less like ‘going to work’ and more like joining a creative community.",
  },
  {
    name: "Mohit K.",
    text: "Our startup moved into WorkDesq a few months ago and it’s been amazing. The team here is super helpful, and the space has this buzz that keeps you motivated. Plus, the conference rooms are seriously slick for client meetings",
  },
  {
    name: "Sanya Goswami",
    text: "Managing a distributed team isn’t easy, but WorkDesq made it a breeze. They gave us private office options when needed and open desks when we wanted to collaborate. Totally stress-free, totally professional!",
  },
  {
    name: "Ankit Rai",
    text: "I started using WorkDesq for a few days a week, and now I’m here almost daily! It’s clean, hygienic, well-designed, and there’s a great mix of people around — from founders to designers. Perfect spot if you’re serious about growing your hustle.",
  },
  {
    name: "Ritika V.",
    text: "WorkDesq just gets what freelancers need — no rigid timings, no boring cubicles, just pure flexibility and good vibes. Plus, their coffee is dangerously good! It feels less like ‘going to work’ and more like joining a creative community.",
  },
  {
    name: "Mohit K.",
    text: "Our startup moved into WorkDesq a few months ago and it’s been amazing. The team here is super helpful, and the space has this buzz that keeps you motivated. Plus, the conference rooms are seriously slick for client meetings",
  },
  {
    name: "Sanya Goswami",
    text: "Managing a distributed team isn’t easy, but WorkDesq made it a breeze. They gave us private office options when needed and open desks when we wanted to collaborate. Totally stress-free, totally professional!",
  },
  {
    name: "Ankit Rai",
    text: "I started using WorkDesq for a few days a week, and now I’m here almost daily! It’s clean, hygienic, well-designed, and there’s a great mix of people around — from founders to designers. Perfect spot if you’re serious about growing your hustle.",
  },
  {
    name: "Ritika V.",
    text: "WorkDesq just gets what freelancers need — no rigid timings, no boring cubicles, just pure flexibility and good vibes. Plus, their coffee is dangerously good! It feels less like ‘going to work’ and more like joining a creative community.",
  },
  {
    name: "Mohit K.",
    text: "Our startup moved into WorkDesq a few months ago and it’s been amazing. The team here is super helpful, and the space has this buzz that keeps you motivated. Plus, the conference rooms are seriously slick for client meetings",
  },
  {
    name: "Sanya Goswami",
    text: "Managing a distributed team isn’t easy, but WorkDesq made it a breeze. They gave us private office options when needed and open desks when we wanted to collaborate. Totally stress-free, totally professional!",
  },
  {
    name: "Ankit Rai",
    text: "I started using WorkDesq for a few days a week, and now I’m here almost daily! It’s clean, hygienic, well-designed, and there’s a great mix of people around — from founders to designers. Perfect spot if you’re serious about growing your hustle.",
  },
  {
    name: "Ritika V.",
    text: "WorkDesq just gets what freelancers need — no rigid timings, no boring cubicles, just pure flexibility and good vibes. Plus, their coffee is dangerously good! It feels less like ‘going to work’ and more like joining a creative community.",
  },
  {
    name: "Mohit K.",
    text: "Our startup moved into WorkDesq a few months ago and it’s been amazing. The team here is super helpful, and the space has this buzz that keeps you motivated. Plus, the conference rooms are seriously slick for client meetings",
  },
  {
    name: "Sanya Goswami",
    text: "Managing a distributed team isn’t easy, but WorkDesq made it a breeze. They gave us private office options when needed and open desks when we wanted to collaborate. Totally stress-free, totally professional!",
  },
  {
    name: "Ankit Rai",
    text: "I started using WorkDesq for a few days a week, and now I’m here almost daily! It’s clean, hygienic, well-designed, and there’s a great mix of people around — from founders to designers. Perfect spot if you’re serious about growing your hustle.",
  },
  {
    name: "Ritika V.",
    text: "WorkDesq just gets what freelancers need — no rigid timings, no boring cubicles, just pure flexibility and good vibes. Plus, their coffee is dangerously good! It feels less like ‘going to work’ and more like joining a creative community.",
  },
  {
    name: "Mohit K.",
    text: "Our startup moved into WorkDesq a few months ago and it’s been amazing. The team here is super helpful, and the space has this buzz that keeps you motivated. Plus, the conference rooms are seriously slick for client meetings",
  },
  {
    name: "Sanya Goswami",
    text: "Managing a distributed team isn’t easy, but WorkDesq made it a breeze. They gave us private office options when needed and open desks when we wanted to collaborate. Totally stress-free, totally professional!",
  },
  {
    name: "Ankit Rai",
    text: "I started using WorkDesq for a few days a week, and now I’m here almost daily! It’s clean, hygienic, well-designed, and there’s a great mix of people around — from founders to designers. Perfect spot if you’re serious about growing your hustle.",
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
