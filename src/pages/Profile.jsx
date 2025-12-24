import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  // if backend is not running handle that
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: [],
    role: "",
  });
  const Navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("bearer");
    if (token == null) {
      Navigate("/login");
      return;
    }

    fetch("http://localhost:3000/api/user/profile", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("Backend response:", response);
        console.log(response.status);
        
        return response.json();
      })
      .then((data) => {
        console.log("backend data:", data);
        setUserData(data);
      })
      .catch((err) => {
        console.error("error",err);
        Navigate("/login");
      });
  }, []);
  function handleLogout() {
    localStorage.removeItem("bearer");
    return Navigate("/login");
  }
  return (
    <>
      <section className="pt-24 flex flex-col justify-center items-center">
        <button
          onClick={() => {
            Navigate("/admin");
          }}
          className={
            userData.role == "ADMIN"
              ? `bg-black p-2 rounded-xl text-white hover:cursor-pointer absolute top-28 right-10`
              : "hidden"
          }
        >
          ADMIN PANEL
        </button>
        <div className="mb-12">
          <h6 className="text-amber-600 text-center text-xl pb-4">welcome</h6>
          <h1 className="text-4xl font-medium text-center uppercase">
            {userData.name}
          </h1>
        </div>
        <div className="p-8 flex w-[80%] border border-dotted border-zinc-300">
          <div className=" w-1/2">
            <h4 className="text-xl font-normal">My account</h4>
            {/* Links */}
            <div className="mt-2.5">
              {/* Todo Add logic */}
              <div>
              <button onClick={()=>{Navigate('/addresses')}} className="mt-2.5 hover:cursor-pointer">
                View Addresses <span>({userData.address.length})</span>
              </button>
              </div>
              <button
                onClick={() => {
                  handleLogout();
                }}
                className="mt-2.5 hover:cursor-pointer"
              >
                Logout
              </button>
            </div>
          </div>
          <div className=" w-1/2">
            <h4 className="text-xl font-normal">Account details</h4>
            {/* Links */}
            <div className="mt-2.5">
              <p className="mt-2.5">{userData.name}</p>
              <p className="mt-2.5">{userData.email}</p>
            </div>
          </div>
        </div>
        <div className="w-[80%] mt-8">
          <h4 className="mb-1.5 text-xl font-normal">Order history</h4>
          <div className="p-8 flex border border-dotted border-zinc-300">
            <span className="text-red-500">
              You haven't placed any orders yet.{" "}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
