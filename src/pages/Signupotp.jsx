import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Otp() {
  const params = new URLSearchParams(location.search);
  const initialEmail = params.get("email") || "";
  const initialName = params.get("name") || "";
  const navigate = useNavigate()

  const [data, setData] = useState({
    otp: "",
    email: initialEmail,
    name: initialName,
  });
  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:3000/api/user/verifysignupotp",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data }),
      }
    );
    const result = await response.json();
    console.log(result);
    if (response.status == 409) {
      console.log("Email already registered");
    }
    if (response.status == 200) {
       localStorage.setItem("bearer",result.token)
        navigate(`/login`);
    }
  }
  return (
    <>
      <div className="bg-white flex justify-center items-center min-h-screen">
        <div className="p-6 bg-brand rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            OTP Verification
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            {/* OTP Input */}
            <label className="flex flex-col text-gray-700 text-sm font-medium">
              Enter OTP
              <input
                type="text"
                name="otp"
                onChange={handleChange}
                className="mt-1 bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="6-digit OTP"
                required
                pattern="\d{6}"
                maxLength={6}
                title="OTP must be a 6-digit number"
              />
            </label>

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
