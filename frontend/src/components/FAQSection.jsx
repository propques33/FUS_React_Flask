import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who uses co-working spaces?",
    answer:
      "Co-working spaces are popular among freelancers, startups, entrepreneurs, and even employees from larger companies who require flexible day passes, hourly rentals, monthly plans, and customized enterprise with a collaborative environment." },
  {
    question: " What types of office spaces can I find on Propques Space?",
    answer:
      "At Propques, you can discover coworking spaces, private office rentals, meeting rooms, day passes, and enterprise office solutions. Whether you need a short-term desk or a full-time office, we’ve got you covered.",
  },
  {
    question: "Can I find coworking spaces near me on with the help of Propques Space?",
    answer:
      " Yes! Propques offers location-based searches. Whether you're looking for coworking spaces in Lucknow, Pune,Mumbai, Bangalore, or any major city, you can easily find options near you.",},
  {
    question: "Why should I choose Propques for my office space needs?",
    answer:
      " We make it easy to discover, compare, and book the best office spaces at competitive rates. Our curated listings, personalized support, and extensive network ensure you find the right workspace without the hassle.",
  },
  {
    question: "How co-Working spaces promote productivity?",
    answer:
      " Co-working spaces boost productivity by offering convenient locations that reduce long commutes and save time. They provide flexible access, professional amenities, and a structured environment, making it easier to focus and work efficiently compared to rigid office setups.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white md:py-20 py-4 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl  mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 md:text-sm text-xs ">
            Have questions? We’ve got answers to help you choose the right coworking experience.
          </p>
        </div>

        {/* Right - Accordion */}
        <div className="space-y-4 w-full text-sm">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-blue-500 rounded-xl shadow-sm  bg-white transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-4 text-left  text-gray-900"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`px-4 overflow-hidden transition-all duration-300 text-sm text-gray-600 ${
                  openIndex === index
                    ? "max-h-40 opacity-100 pb-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
