import React, { useState } from "react";
import {
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineLock,
  AiOutlinePhone,
} from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
      style={{
        backgroundImage: `url('src/assets/background.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header className="absolute top-5 left-0 right-0 px-12 py-6 flex items-center justify-between">
        <div>
          <img
            src="src/assets/logo.png"
            alt="Logo"
            className="h-10 vw-20 mr-5"
          />
        </div>
      </header>
      <div className="mt-6 p-12 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Creat New Account
        </h2>
        <form className="flex flex-col w-full max-w-2xl">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <AiOutlineMail className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="pl-10 mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold" htmlFor="name">
              Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <AiOutlineUser className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="pl-10 mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold"
              htmlFor="museum"
            >
              Museum
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <AiOutlineUser className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="text"
                id="museum"
                name="museum"
                placeholder="Enter your museum name"
                className="pl-10 mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <AiOutlinePhone className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="pl-10 mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <AiOutlineLock className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                className="pl-10 mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash className="h-5 w-5 text-gray-400" />
                ) : (
                  <FaEye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 focus:outline-none focus:ring-1 focus:ring-green-500 mb-4"
          >
            Sign Up
          </button>
          <div className="text-sm text-center">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-green-500 hover:underline font-semibold"
            >
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
