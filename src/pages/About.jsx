import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About_ourVision from "../components/Cards/About_ourVision";
import About_product from "../components/Cards/About_product";
import About_Certificate from "../components/Cards/About_Certificate";

function About() {
  return (
    <>
      <div className=" w-full flex flex-col justify-center items-center py-5">
        <h2 className="text-5xl font-medium text-center pt-10">
          <u>About us</u>
        </h2>
        <div className=" flex flex-col md:flex-row md:gap-1 justify-center items-center w-[96%] gap-6 flex-wrap">
          <About_ourVision
            title="01. Ourvision"
            desc="  It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout the
              point of using"
          />
          <About_ourVision
            title="01. Ourvision"
            desc="  It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout the
              point of using"
          />
          <About_ourVision
            title="01. Ourvision"
            desc="  It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout the
              point of using"
          />
          <About_ourVision
            title="01. Ourvision"
            desc="  It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout the
              point of using"
          />
            </div>
            </div>
          
      <About_Certificate title="Certifications"
        desc="It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout the
              point of using"
        src="https://qx-honee.myshopify.com/cdn/shop/files/about-us.jpg"/>
    </>
  );
}

export default About;
