import React from "react";

function ForgottenPasswordOtp() {
  return (
    <>
      <div className="bg-white flex justify-center items-center min-h-screen">
        <div className="p-6 bg-brand rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Forgotten password
          </h2>
          <h4 className=" text-gray-500 text-l text-center py-4">
            we will send you a mail to reset your password
          </h4>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            {/* Email input */}
            <label className="flex flex-col text-gray-700 text-m font-medium">
              Email
              <input
                type="email"
                name="email"
                className="mt-1 bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter your email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                required
              />
            </label>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgottenPasswordOtp;
