import React from "react";
import botImage from "../assets/signup.webp"; // Replace with your robot image

const Login = () => {
  return (
    <div className="min-h-screen flex mt-10 md:mt-0">
      {/* Left Section */}
      <div className="w-1/2 md:flex hidden  flex-col justify-center items-end text-white px-10">
        <img src={botImage} alt="Bot" className="w-full h-full object-contain" />
        {/* <p className="text-2xl font-semibold text-center max-w-sm">
          Simply tell us the workspace you need, and Desklinq will handle the
          rest—<span className="font-bold">effortlessly</span>
        </p> */}
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 w-full bg-white flex justify-center items-center px-10">
        <div className="w-full max-w-sm space-y-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900">Sign In</h2>
            <p className="text-sm text-gray-500 mt-1">to Findurspace</p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 flex justify-between">
                Password
                <a href="#" className="text-sm text-gray-500 hover:underline">
                  Forgot password?
                </a>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 rounded-full font-semibold shadow-md hover:from-blue-700"
            >
              Login
            </button>
          </form>

          {/* Account Links */}
          <p className="text-sm text-center">
            New user?{" "}
            <a href="#" className="font-medium underline">
              Create an account
            </a>
          </p>

          {/* Divider */}
          <div className="flex items-center gap-2">
            <div className="h-px bg-gray-300 w-full"></div>
            <span className="text-sm text-gray-500">or</span>
            <div className="h-px bg-gray-300 w-full"></div>
          </div>

          {/* Gmail Auth */}
          <button className="w-full border rounded-full flex items-center justify-center gap-2 py-2 text-sm font-medium hover:bg-gray-50">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
              alt="gmail"
              className="w-5 h-5"
            />
            Continue with Gmail
          </button>

          {/* Footer */}
          <div className="text-xs text-gray-400 text-center pt-6">
            © 2025 Desklinq. All Rights Reserved. <br />
            <a href="#" className="underline mr-3">
              Terms of Use
            </a>
            <a href="#" className="underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
