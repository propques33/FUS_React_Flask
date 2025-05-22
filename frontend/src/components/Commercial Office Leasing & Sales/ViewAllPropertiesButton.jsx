import React from "react";
import { Link } from "react-router-dom";
const ViewAllPropertiesButton = () => {
  return (
    <Link to="/view-all-projects" className=" md:px-0 px-4">
      <p className=" max-w-4xl py-3 mx-auto flex items-center justify-center bg-blue-500 hover:bg-blue-600 transition-all ease-in-out my-8 text-white rounded ">View All Projects</p>
    </Link>
  );
};

export default ViewAllPropertiesButton;
