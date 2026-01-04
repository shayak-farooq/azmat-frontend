import React, { useState } from "react";
import { data, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ForgottenPasswordOtp() {
  const {email} = useParams()
  const navigate = useNavigate()
  const[otp,setOTP]=useState(0)
  const [error,setError] = useState(false)
  function handleChange(e) {
    setOTP(e.target.value)
    
  }
   async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:3000/api/user/verifyforgetotp",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email,otp }),
        
      }
    );
    const data = await response.json(); // <--- read JSON
    // console.log(data);
    
    if (!response.ok){
      setError(data.err)
      setTimeout(()=>{setError(false)},2000)
      return
    }
    navigate(`/updatepassword/${email}`);
    
  }
  return (
    <>
      <div className="bg-white flex justify-center items-center min-h-screen">
        <div className="p-6 bg-brand rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            OTP verification
          </h2>
          <h4 className=" text-gray-500 text-l text-center py-4">
            OTP is sent to your registere email: {email}.
          </h4>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            {/* OTp input */}
            
              <input
                type="text"
                name="otp"
                className="mt-1 bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter your OTP"
                onChange={handleChange}
                minLength={6}
                maxLength={6}
                required
              />
              {error && (<div className="text-xs text-red-600">* {error}</div>)}
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

export default ForgottenPasswordOtp;
