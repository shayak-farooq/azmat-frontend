import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RiEyeCloseLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";

function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    const response = await fetch("http://localhost:3000/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
      }),
    });
    if (!response.ok) {
      setError("Email already registered");
    }
    navigate(`/verifysignup?email=${data.email}&name=${data.name}`);

    setData({ name: "", email: "", password: "", confirmPassword: "" });
  }
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="bg-brand shadow-xl rounded-xl p-8 w-full max-w-md">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Sign Up
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            {/* Username */}
            <label className="flex flex-col text-gray-700 text-sm font-medium">
              Full Name
              <input
                type="text"
                name="name"
                onChange={handleChange}
                className="mt-1 border bg-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter your Full Name"
                required
              />
            </label>

            {/* Email */}
            <label className="flex flex-col text-gray-700 text-sm font-medium">
              Email
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="mt-1 border bg-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter your email"
                required
              />
            </label>

            {/* Password */}
            <label className="relative flex flex-col text-gray-700 text-sm font-medium">
              Password
              <input
                type={show ? "text" : "password"}
                name="password"
                onChange={handleChange}
                className="mt-1 bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter your password"
                required
                minLength={8}
                maxLength={10}
                pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,10}$"
                title="Password must be 7-10 characters and include letters, numbers, and at least one symbol."
              />
              <button
                className="absolute right-3 bottom-3"
                type="button"
                onClick={() => {
                  setShow(!show);
                }}
              >
                {show ? <RiEyeLine /> : <RiEyeCloseLine />}
              </button>
            </label>
            <label className="relative flex flex-col text-gray-700 text-sm font-medium">
              Confirm Password
              <input
                type={show ? "text" : "password"}
                name="confirmPassword"
                onChange={handleChange}
                className="mt-1 bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter your password"
                required
                minLength={8}
                maxLength={10}
                pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,10}$"
                title="Password must be 7-10 characters and include letters, numbers, and at least one symbol."
              />
              <button
                className="absolute right-3 bottom-3"
                type="button"
                onClick={() => {
                  setShow(!show);
                }}
              >
                {show ? <RiEyeLine /> : <RiEyeCloseLine />}
              </button>
            </label>
            {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
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
            <NavLink to="/Login" className=" text-amber-600 text-l underline">
              Log in
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
