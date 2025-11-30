import React from "react";
import { HiMiniPhoneArrowUpRight } from "react-icons/hi2";
{
  /*Phone Icon*/
}
import { FaLocationDot } from "react-icons/fa6";
{
  /*location*/
}
import { AiOutlineMail } from "react-icons/ai";
{
  /*email*/
}
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
    <Navbar/>
      {/* === CONTACT CARDS SECTION === */}
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 py-12 px-4">
        {/* Contact Card Component */}
        <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 max-w-md">
          <a
            href="tel:+910123456789"
            className="flex items-center justify-center h-20 w-20 bg-brand rounded-full p-2"
          >
            <div className="flex items-center justify-center h-full w-full bg-white rounded-full">
              <HiMiniPhoneArrowUpRight className="text-4xl text-amber-500" />
            </div>
          </a>

          <div className="text-left md:text-center">
            <h3 className="text-2xl font-semibold">Phone Number</h3>
            <p>
              <a href="tel:+910123456789" className="hover:underline">
                (+91) 0123 4567 89
              </a>
            </p>
            <p>
              <a href="tel:+911234567890" className="hover:underline">
                (+91) 1234 5678 90
              </a>
            </p>
          </div>
        </div>

        {/* Address Card */}
        <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 max-w-md">
          <a
            href="#"
            className="flex items-center justify-center h-20 w-20 bg-brand rounded-full p-2"
          >
            <div className="flex items-center justify-center h-full w-full bg-white rounded-full">
              <FaLocationDot className="text-4xl text-amber-500" />
            </div>
          </a>

          <div className="text-left md:text-center">
            <h3 className="text-2xl font-semibold">Address</h3>
            <p className="text-gray-400 leading-relaxed">
              hcishcsafe, ehfuilwehf, dhuwiahd
            </p>
          </div>
        </div>

        {/* Email Card */}
        <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 max-w-md">
          <a
            href="mailto:abcxyz@123.com"
            className="flex items-center justify-center h-20 w-20 bg-brand rounded-full p-2"
          >
            <div className="flex items-center justify-center h-full w-full bg-white rounded-full">
              <AiOutlineMail className="text-4xl text-amber-500" />
            </div>
          </a>

          <div className="text-left md:text-center">
            <h3 className="text-2xl font-semibold">Email</h3>
            <p>
              <a href="mailto:abcxyz@123.com" className="hover:underline">
                abcxyz@123.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* === TEXT + IMAGE SECTION === */}
      <div className="bg-brand w-full flex flex-col md:flex-row items-center justify-between px-6 lg:px-20 py-12 gap-10">
        {/* Left text block */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 leading-tight">
            <i>We would love to talk with our great customer</i>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            <i>
              Give us a call or drop by anytime, we endeavour to answer all
              enquiries within 24 hours on business days. We draw from different
              inspirations to capture moments beautifully.
            </i>
          </p>

          <button className="bg-amber-400 hover:bg-amber-500 text-white text-xl font-semibold py-3 px-8 mt-6 rounded-lg transition-colors">
            Shop Now
          </button>
        </div>

        {/* Right image block */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="src/assets/Images/product.jpeg"
            alt="Product"
            className="w-full max-w-md rounded-3xl shadow-lg"
          />
        </div>
      </div>

      {/* === CONTACT FORM SECTION === */}
      <div className="py-12 px-4 sm:px-6 lg:px-20">
        <h3 className="text-3xl sm:text-4xl text-center font-semibold pb-8">
          Fill out the form and we'll get back soon!
        </h3>

        <form className="max-w-4xl mx-auto grid gap-6">
          {/* Two-column responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">First name</label>
              <input
                type="text"
                placeholder="first name"
                className="mt-1 border border-gray-300 rounded-lg px-4 py-2 
                     focus:ring-2 focus:ring-amber-400 outline-none"
              required/>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Last name</label>
              <input
                type="text"
                placeholder="last name"
                className="mt-1 border border-gray-300 rounded-lg px-4 py-2 
                     focus:ring-2 focus:ring-amber-400 outline-none"
              required/>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Phone number</label>
              <input
                type="tel"
                placeholder="enter your number"
                className="mt-1 border border-gray-300 rounded-lg px-4 py-2 
                     focus:ring-2 focus:ring-amber-400 outline-none" minLength={10} maxLength={10}
              required/>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Email address</label>
              <input
                type="email"
                placeholder="enter your email here"
                className="mt-1 border border-gray-300 rounded-lg px-4 py-2 
                     focus:ring-2 focus:ring-amber-400 outline-none"
               required/>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">
              Enter your message
            </label>
            <textarea
              rows="6"
              placeholder="Write your message..."
              className="mt-1 border border-gray-300 rounded-lg px-4 py-2 
                   focus:ring-2 focus:ring-amber-400 outline-none resize-y" minLength={20 }
            required></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-amber-400 hover:bg-amber-500 text-white 
                 text-lg sm:text-xl font-semibold py-3 px-8 rounded-lg 
                 transition-colors w-full md:w-auto mx-auto"
          >
            Send message
          </button>
        </form>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;
