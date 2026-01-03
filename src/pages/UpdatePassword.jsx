import React from "react";

function UpdatePassword() {
  return (
      <>
        <div className="bg-white flex justify-center items-center min-h-screen">
          <div className="p-6 bg-brand rounded-xl shadow-md w-full max-w-md">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
              Update Password
            </h2>

            <form className="flex flex-col space-y-4">
              {/* OTp input */}

              <label className="flex flex-col text-gray-700 text-sm font-medium">
                New Password
                <input
                  type="password"
                  name="password"
                  className="mt-1 bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Enter New password"
                  required
                  minLength={7}
                maxLength={10}
                pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,10}$"
                title="Password must be 7-10 characters and include letters, numbers, and at least one symbol."
                />
                <input
                  type="password"
                  name="password"
                  className="mt-1 bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Confirm New password"
                  required
                  minLength={7}
                maxLength={10}
                pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,10}$"
                title="Password must be 7-10 characters and include letters, numbers, and at least one symbol."
                />
              </label>
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

export default UpdatePassword;
