import React from "react";
import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="bg-brand shadow-xl rounded-xl p-8 w-full max-w-md">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Sign Up
          </h2>

          <form className="flex flex-col space-y-4">
            {/* Username */}
            <label className="flex flex-col text-gray-700 text-sm font-medium">
              Username
              <input
                type="text"
                className="mt-1 border bg-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter your username"
                required
              />
            </label>

            {/* Email */}
            <label className="flex flex-col text-gray-700 text-sm font-medium">
              Email
              <input
                type="email"
                className="mt-1 border bg-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter your email"
                required
              />
            </label>

            {/* Password */}
            <label className="flex flex-col text-gray-700 text-sm font-medium">
              Password
              <input
                type="password"
                className="mt-1 bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter your password"
                required
                minLength={7}
                maxLength={10}
                pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,10}$"
                title="Password must be 7-10 characters and include letters, numbers, and at least one symbol."
              />
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2 rounded-lg transition-colors"
            >
              Sign Up
            </button>
          </form>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold pt-3">Already an account?</h3>
            <NavLink to='' className=" text-amber-600 text-l underline">Log in</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
