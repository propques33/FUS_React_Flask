import React, { useEffect, useState } from "react";
import ResultsBlogCard from "./ResultsBlogCard";
import { getBlogs } from "../utils/api";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

// import cc4 from "../assets/cc2.png";
// import cc3 from "../assets/cc3.png";

// const blogData = [
//   {
//     image: cc4,
//     category: "Workspace Solutions",
//     title: "How Flexible Workspaces can meet the demands of today and tomorrow",
//     excerpt:
//       "A workspace is not just about the work. It's also about providing flexibility in where and how employees work.",
//     author: "Swithin Thomas",
//     link: "#",
//   },
//   {
//     image: cc3,
//     category: "Resources",
//     title: "How to find the right coworking space for you and your team",
//     excerpt:
//       "Coworking spaces cater to startups, enterprises, and everyone in between. Here's how to pick the best one.",
//     author: "Adarsh M. Dixit",
//     link: "#",
//   },
//   {
//     image: cc4,
//     category: "Resources",
//     title: "Why planning your office space is a necessity?",
//     excerpt:
//       "Creating a productive layout is as important as finding the perfect location. Here's what to consider.",
//     author: "Swithin Thomas",
//     link: "#",
//   },
// ];

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs()
      .then(setBlogs)
      .catch(console.error);
  }, []);

  return (
    <section className="max-w-7xl  mx-auto mt-4 md:pt-0 py-0 mb-8">
      <div className="px-2 md:px-0">
        <div className="flex justify-between  items-center mb-6">
          <h2 className="text-2xl capitalize">Blogs & case studies</h2>
          <InteractiveHoverButton>

            View All Blogs

          </InteractiveHoverButton>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.slice(0, 3).map((blog, i) => (
            <ResultsBlogCard
              key={i}
              image={blog.featuredImage || "/fallback.jpg"}
              category={blog.category || "Blog"}
              title={blog.pageTitle || "Untitled Blog"}
              excerpt={
                blog.metaDescription ||
                blog.contentBody?.replace(/<[^>]+>/g, "").slice(0, 100) + "..."
              }
              author={blog.author || "Findurspace"}
              link={`/blog/${blog.urlSlug || ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
