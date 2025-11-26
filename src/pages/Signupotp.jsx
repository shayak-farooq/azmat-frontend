import React from "react";

function Otp() {
  return (
    <>
      <div className="bg-white flex justify-center items-center min-h-screen">
        <div className="p-6 bg-brand rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            OTP Verification
          </h2>

          <form className="flex flex-col space-y-4">
            {/* OTP Input */}
            <label className="flex flex-col text-gray-700 text-sm font-medium">
              Enter OTP
              <input
                type="text"
                className="mt-1 bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="6-digit OTP"
                required
                pattern="\d{6}"
                maxLength={6}
                title="OTP must be a 6-digit number"
              />
            </label>

            {/* Hidden Email (if needed programmatically) */}
            <input type="email" className="hidden" />

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2 rounded-lg transition-colors"
            >
              Submit
            </button>
          </form>
          
        </div>
      </div>
    </>
  );
}

export default Otp;
