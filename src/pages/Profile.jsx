import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {
  return (
    <>
      <Navbar />
        <section className="pt-24 flex flex-col justify-center items-center">
          <div className="mb-12">
            <h6 className="text-amber-600 text-center text-xl pb-4">welcome</h6>
            <h1 className="text-4xl font-medium text-center">
              Firstname Lastname
            </h1>
          </div>
          <div className="p-8 flex w-[80%] border border-dotted border-zinc-300">
            <div className=" w-1/2">
              <h4 className="text-xl font-normal">My account</h4>
              {/* Links */}
              <div className="mt-2.5">
                <p className="mt-2.5">
                  View addresses <span>(1)</span>
                </p>
                <button className="mt-2.5">Logout</button>
              </div>
            </div>
            <div className=" w-1/2">
              <h4 className="text-xl font-normal">Account details</h4>
              {/* Links */}
              <div className="mt-2.5">
                <p className="mt-2.5">firstname Lastname</p>
                <p className="mt-2.5">Email</p>
              </div>
            </div>
          </div>
          <div className="w-[80%] mt-8">
            <h4 className="mb-1.5 text-xl font-normal">Order history</h4>
            <div className="p-8 flex border border-dotted border-zinc-300">
                <span className="text-red-500">You haven't placed any orders yet. </span>
            </div>
          </div>
        </section>
        <Footer/>
    </>
  );
}

export default Profile;
