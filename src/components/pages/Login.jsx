import React from "react";
import Image from "next/image";

export default function Login() {
  return (
    <div className="min-h-screen pt-33 w-full bg-[#E8F0FE] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
       
        <div className="flex flex-col items-center justify-center bg-[#F2F6FF] p-10 text-center">
          <Image
            src="/img/login.png"
            width={300}
            height={300}
            alt="Login Illustration"
            className="mb-6"
          />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Login to access the courses and materials
          </h2>
          <p className="text-gray-600 max-w-sm">
            Create account and access all the courses, test and study materials.
          </p>
        </div>

      
        <div className="flex flex-col justify-center p-10">
          <div className="mb-8">
            <Image src="/img/Kgslogo.png" width={60} height={60} alt="KGS Logo" />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-1">Welcome back!</h2>
          <p className="text-gray-600 mb-6">Please login to continue</p>

        
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter your Phone Number"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="text-right mt-1">
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot Password?
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-sm text-gray-700">Remember me</span>
            </div>

            <button className="w-full bg-[#2E3192] text-white py-3 rounded-lg font-semibold hover:bg-[#252876] transition-all">
              Login
            </button>
          </form>

          <p className="mt-6 text-center text-gray-700 text-sm">
            Don’t have an account?{' '}
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
