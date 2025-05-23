import React from "react";

const ResultsBlogCard = ({ image, category, title, excerpt, author, link, readTime = 3 }) => {
// Trim description to ~140 characters
const trimmedExcerpt =
  excerpt?.replace(/<[^>]+>/g, "").slice(0, 140).trim() + "...";
  
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 group">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-2xl"
        />
      </div>

      <div className="p-5 flex flex-col justify-between">
        <div className="flex justify-between items-center text-xs text-blue-600 font-semibold uppercase tracking-wide mb-2">
          <span>{category}</span>
          <span className="text-gray-400 font-medium">{readTime} min read</span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2 hover:text-blue-700 transition-colors">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>

        <p className="text-sm text-gray-600">{trimmedExcerpt}</p>

      </div>
        <div className="bg-blue-600 text-white text-center rounded-full py-2  w-[90%] mx-auto mb-2">Read More →</div>

    </div>
  );
};

  export default ResultsBlogCard