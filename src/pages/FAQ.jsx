import React from "react";

function FAQ() {
  return (
    <>
      <div className="h-40 bg-cover bg-center bg-[url('src/assets/Images/about-us-1.webp')]">
        <div className="h-full w-4/5 m-auto flex justify-between items-center">
          <h1 className="font-bold text-5xl">AZMAT</h1>
          <h2 className="font-semibold text-2xl">Home</h2>
        </div>
      </div>
      <div className="py-26 flex justify-center items-center  bg-brand">
        <div className="h-full w-[90%] flex">
          <div className="h-screen flex justify-end item-center w-1/2 items-center">
            <img
              src="src/assets/Images/about-us-1.webp"
              alt="null"
              className="h-full w-full rounded-l-2xl"
            />
          </div>
          <div className="h-screen w-1/2 flex flex-col justify-center items-center rounded-r-2xl bg-amber-900">
            <div className="w-[80%]">
              <h2 className="text-4xl font-semibold mb-12">
                Yes, everything a the side from pre-orders
              </h2>
              <ul className="w-full">
                <li className="p-4 flex justify-between items-center h-20 rounded-2xl bg-white ">
                  <span className="flex items-center h-10 bg-white">
                    What do you mean by item ?
                  </span>{" "}
                  <span>+</span>
                </li>
                <li className="p-4 mt-4 flex justify-between items-center h-20 rounded-2xl bg-white ">
                  <span className="flex items-center h-10 bg-white">
                    What do you mean by item ?
                  </span>{" "}
                  <span>+</span>
                </li>
                <li className="p-4 mt-4 flex justify-between items-center h-20 rounded-2xl bg-white ">
                  <span className="flex items-center h-10 bg-white">
                    What do you mean by item ?
                  </span>{" "}
                  <span>+</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center  py-7">
        <div className="w-1/2 h-screen">
        <h2>jksdfnjkns</h2>
        <h3>njfejrnf</h3>
        </div>
        <div className="w-1/2 h-screen">
        <h2>ihshdfiuaesh</h2>
        </div>
      </div>
    </>
  );
}

export default FAQ;
