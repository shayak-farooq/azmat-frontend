import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";

function UpdatePassword() {
  const navigate = useNavigate();
  const { email } = useParams();
  const [message,setMessage] = useState('')
  const [password, setPassword] = useState({
    password: "",
    confirmpassword: "",
  });
  function handleChange(e) {
    setPassword({ ...password, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (password.password != password.confirmpassword) {
      setMessage('password does not match')
      setTimeout(()=>{setMessage(false)},2000)
      return;
    }
    const response = await fetch(
      "http://localhost:3000/api/user/updatepassword",
      {
        method: "POST",
        headers: { "content-type": "application/Json" },
        body: JSON.stringify({ email, password: password.password }),
      }
    );
    const data = await response.json();
    console.log(data);
    setMessage(data.message)
    setTimeout(()=>{navigate(`/login`)},2000)
    
  }

  return (
    <>
      <div className="bg-white flex justify-center items-center min-h-screen">
        <div className="p-6 bg-brand rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Update Password
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            {/* OTp input */}

            <label className="flex flex-col text-gray-700 text-sm font-medium">
              New Password
              <input
                type="password"
                name="password"
                className="mt-1 bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter New password"
                required
                onChange={handleChange}
                minLength={7}
                maxLength={10}
                pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,10}$"
                title="Password must be 7-10 characters and include letters, numbers, and at least one symbol."
              />
              <input
                type="password"
                name="confirmpassword"
                className="mt-1 bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Confirm New password"
                required
                onChange={handleChange}
                minLength={7}
                maxLength={10}
                pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,10}$"
                title="Password must be 7-10 characters and include letters, numbers, and at least one symbol."
              />
            </label>
            {message && (<div className="text-xs text-red-600">* {message}</div>)}
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
