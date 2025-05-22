const BlogCard = ({ image, category, title, excerpt, author, link }) => {
    return (
      <div className="bg-white border  rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div className="p-4">
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wide border-b pb-2">
            {category}
          </p>
          <h3 className="text-lg font-sem=ibold mt-2 hover:underline">
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h3>
          <p className="text-xs text-gray-600 mt-2">{excerpt}</p>
          <p className="text-sm text-gray-400 mt-4">By {author}</p>
        </div>
      </div>
    );
  };

  export default BlogCard