import React from "react";

function Login() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>

          <form className="flex flex-col space-y-4">
            {/* Email */}
            <label className="flex flex-col text-gray-700 text-sm font-medium">
              Email
              <input
                type="email"
                className="mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter your email"
                required
              />
            </label>

            {/* Password */}
            <label className="flex flex-col text-gray-700 text-sm font-medium">
              Password
              <input
                type="password"
                className="mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter your password"
                required
              />
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2 rounded-lg transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
