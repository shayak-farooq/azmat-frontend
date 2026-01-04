import LOGO from "../assets/Images/azmat_logo.png";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [swipeSlider, setSwipeSlider] = useState(false);
  return (
    <>
      <div className="bg-brand shadow-lg sticky top-0 z-50">
        {swipeSlider && (
          <div
            onClick={() => setSwipeSlider(false)}
            className="fixed inset-0 bg-black/50 z-20 md:hidden"
          />
        )}
        <nav className="flex justify-between py-4">
          <button
            className="md:hidden ml-3"
            onClick={() => {
              setSwipeSlider(!swipeSlider);
            }}
          >
            <GiHamburgerMenu />
          </button>
          {/* links */}
          <ul
            className={`z-30 text-xl md:flex md:flex-row md:static md:bg-transparent md:h-auto  md:w-auto md:items-center md:gap-6 pl-3 ${
              swipeSlider
                ? "flex flex-col fixed top-0 left-0 bg-white w-1/2 h-dvh p-3"
                : "hidden"
            } *:border-b *:border-b-zinc-400 *:p-3 md:p-0 md:*:border-0`}
          >
            {/* <ul className={`lg:flex justify-center items-center lg:ml-2 text-xl lg:*:px-5 ${swipeSlider? 'flex-col absolute bg-white w-1/2 h-dvh top-0 left-0 *:border-b *:border-b-zinc-400 *:p-3' : 'hidden'}`}> */}
            <li
              className={`${
                swipeSlider ? "" : "hidden"
              } flex justify-end items-center`}
            >
              {" "}
              <button
                onClick={() => {
                  setSwipeSlider(!swipeSlider);
                }}
              >
                <RxCross2 className="m-2 md:hidden" />
              </button>
            </li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          {/* LOGO */}
          <div className="flex items-center pl-2">
            <NavLink to="/">
              <img className="h-10 w-auto object-contain" src={LOGO} alt="" />
            </NavLink>
          </div>
          <div className="flex gap-x-8 px-10 justify-center items-center text-2xl">
            <NavLink to="/profile">
              <VscAccount />
            </NavLink>
            <NavLink to="/cart">
              <MdOutlineShoppingCart />
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
