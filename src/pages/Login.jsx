import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Login() {
  const [data, setData] = useState({email: "", password: ""})
  function handleChange(e){
    setData({...data,[e.target.name]:e.target.value})
  }
  async function handleSubmit(e){
    e.preventDefault();
    const response = await fetch ("http://localhost:5000/api/user/login",{
      method: 'POST',
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({...data})

    })
    console.log(response)
    setData({email: "", password: ""})
  }

  return (
    <>
<<<<<<< HEAD
=======
    
>>>>>>> c50aec245ec182ec3db61a251003ad24177adc1e
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="bg-brand shadow-xl rounded-xl p-8 w-full max-w-md">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            {/* Email */}
            <label className="flex flex-col text-gray-700 text-sm font-medium">
              Email
              <input
                type="email"  name="email"
                className="mt-1 bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter your email" value={data.email} onChange={handleChange}
                required
              />
            </label>

            {/* Password */}
            <label className="flex flex-col text-gray-700 text-sm font-medium">
              Password
              <input
                type="password" name="password" onChange={handleChange}
                className="mt-1 bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter your password" value={data.password}
                required
              />
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-amber-400 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg transition-colors"
            >
              Login
            </button>
            <NavLink
              to="/forgottenpassword"
              className=" text-gray-400 hover:text-amber-600 text-l text-center underline"
            >
              forgotten password
            </NavLink>
          </form>

          <div className="flex flex-col my-6">
            <h3 className="text-center font-bold text-lg">
              Don't have an account?
            </h3>
            <NavLink
              to="/signup"
              className="text-center text-amber-600 text-xl underline"
            >
              create account?
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
