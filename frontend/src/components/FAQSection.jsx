import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question:
      "What types of coworking and office spaces can I find on FindUrSpace?",
    answer:
      "FindUrSpace offers a wide range of flexible workspace options, including coworking desks, private offices, managed office spaces, meeting rooms, and conference halls across major Indian cities.",
  },
  {
    question: "How do I book a coworking space or office through FindUrSpace?",
    answer:
      "Simply browse available spaces by city or workspace type, select your preferred option, and book instantly online with transparent pricing—no brokerage fees involved.",
  },
  {
    question:
      "Can I rent office space for short-term or flexible lease durations?",
    answer:
      " Yes, FindUrSpace provides flexible lease terms including hourly, daily, monthly, and long-term rentals, tailored to startups, freelancers, and enterprises.",
  },
  {
    question: "Are the listed workspaces fully furnished and ready to use?",
    answer:
      "All the spaces on FindUrSpace are fully furnished and equipped with essential amenities like high-speed internet, meeting rooms, and 24/7 support to ensure a seamless work experience.",
  },
  {
    question: "Which cities does FindUrSpace cover for coworking and office rentals?",
    answer:
      "FindUrSpace covers major metros like Bangalore, Mumbai, Delhi, Hyderabad, and expanding Tier-2 cities, including Jaipur, Pune, Indore & Lucknow.",
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
            Have questions? We’ve got answers to help you choose the right
            coworking experience.
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
