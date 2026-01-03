import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { RiEyeCloseLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";

export default function Login() {
  const [error,setError] = useState('')
  const [data, setData] = useState({ email: "", password: "" });
  const [show ,setShow] = useState(false)
  const navigate = useNavigate()

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  useEffect(()=>{
    const bearer = localStorage.getItem('bearer')
    if(bearer){
      navigate('/profile')
    }
  },[])
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data }),
    });
    const result = await response.json()
    
    if(response.status == 401 ){
      setError("invalid email or password")
    }
    if(response.status == 200){
      localStorage.setItem("bearer",result.token)
      console.log(result.token)
      if(result.role == 'ADMIN') {
        return navigate("/admin")
      }
      navigate('/profile')
      setData({ email: "", password: ""});
    }
  }
  return (
    <>
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
                type="email"
                name="email"
                className="mt-1 bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </label>
            
            {/* Password */}
            <label className="relative flex flex-col  text-gray-700 text-sm font-medium">
              Password
              <input
                type={show ? 'text' : 'password'}
                name="password"
                className=" mt-1 bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter your password"
                onChange={handleChange}
                required
              />
              <button type="button" className="absolute right-3 bottom-3" onClick={()=>{setShow(!show)}}>
                {
                  show ? <RiEyeLine/> : <RiEyeCloseLine/>
                }
              </button>
            </label>
            {error? <span className="text-red-400 text-xs">*{error}</span> : ""}
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-amber-400 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg transition-colors"
            >
              Login
            </button>
            <NavLink
              to="/Forgottenpassword"
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
              to="/Signup"
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


