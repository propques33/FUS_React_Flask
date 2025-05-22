import React from "react";
import microsoft from "../assets/client.svg";
import paypal from "../assets/client2.svg";
import fedex from "../assets/client3.svg";
import samsung from "../assets/client5.svg";
import spotify from "../assets/client6.svg";
import mcafee from "../assets/client7.svg";


const logos = [
  microsoft,
  paypal,
  fedex,
  samsung,
  spotify,
  mcafee,
 
];

export default function TrustedBy() {
  return (
    <section className="md:py-10 py-4  bg-white r">
      <h2 className="text-[1.3rem] md:text-4xl font-medium text-gray-800 mb-2">
        Trusted by the world’s largest companies<span className="text-blue-500">.</span>
      </h2>
      <div className="grid px-4 bg-zinc-400 grid-cols-2 py-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center  ">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company logo ${index + 1}`}
            className="md:h-10 h-3 object-contain mx-auto   transition duration-300"
          />
        ))}
      </div>
    </section>
  );
}


