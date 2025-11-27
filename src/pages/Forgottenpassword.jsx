import React from "react";
import { NavLink } from "react-router-dom";

function Otp() {
  return (
    <>
      <div className="bg-white flex justify-center items-center min-h-screen">
        <div className="p-6 bg-brand rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Forgotten password
          </h2>
          <h4 className=" text-gray-500 text-l text-center py-4">we will send you a mail to reset your password</h4>

          <form className="flex flex-col space-y-4">
            {/* Email input */}
            <label className="flex flex-col text-gray-700 text-m font-medium">
              Email
              <input
                type="email"
                className="mt-1 bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="enter your email"
                required
              />
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2 rounded-lg transition-colors"
            >
              Submit
            </button>
          <NavLink to="/Login" className=" text-gray-400 hover:text-amber-600 text-l text-center underline">cancel</NavLink>
          </form>
        </div>
      </div>
    </>
  );
}

export default Otp;
