import React from "react";
import avatar from "../assets/adarsh.png";

const testimonials = [
  { name: "John D.", text: "This coworking space completely changed the way I work. Highly recommend!" },
  { name: "Aarti S.", text: "Great vibe, super friendly staff, and awesome coffee too!" },
  { name: "Carlos M.", text: "Flexible, modern, and ideal for small teams. 10/10." },
  { name: "Nina R.", text: "Perfect for freelancers. Quiet and professional with creative energy." },
  { name: "Dev K.", text: "Moving here was the best decision—my productivity doubled!" },
];

const TestimonialsMarquee = () => {
  return (
    <section className="bg-blue-50 py-16 overflow-hidde">

      <h2 className="text-2xl md:text-4xl font-medium text-center mb-4 relative">
        <h2 className=" px- py-1 rounded-full mr-2 text-black relative capitalize inline-block ">
        What our members say
        <p className="md:h-16 h-12 md:w-16 w-12 bg-yellow-300/50 absolute rounded-full top-0 -left-4 z-0"></p>
        </h2>
      </h2>
      <div className="h-[2px] w-32 bg-blue-600 mx-auto my-4 rounded" /> 

      <div className="relative w-full overflow-hidden mt-12">
        <div className="flex animate-scroll-marquee gap-8 w-max">
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div
              key={idx}
              className="min-w-[300px] max-w-[300px] bg-white rounded-xl  p-5 flex-shrink-0"
            >
              <div className="flex items-center gap-3 mb-2">
                <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full" />
                <h4 className="font-semibold text-blue-500">{t.name}</h4>
              </div>
              <p className="text-sm text-gray-700">{t.text}</p>
              <p className="text-xs text-gray-400 mt-2">
                Posted on <span className="text-sm">🌐</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMarquee;
