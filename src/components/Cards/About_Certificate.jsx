import React from "react";

function About_Certificate(props) {
  return (
    <>
      <div className="h-full w-full bg-brand border-b-2 border-gray-300">
        <div className="flex-row md:flex justify-center items-center h-full ">
          <div className="flex flex-wrap mx-auto md:m-6 p-3 h-96 w-[90%] md:w-1/2 rounded-lg shadow-lg order-2 md:order-1">
            <img
              src={props.src}
              alt="nill"
              className="mx-auto h-auto w-1/3 pr-1 rounded-lg"
            />
            <img
              src={props.src}
              alt="nill"
              className="mx-auto h-auto w-1/3 pl-1 rounded-lg"
            />
            <img
              src={props.src}
              alt="nill"
              className="mx-auto h-auto w-1/3 pl-1 rounded-lg"
            />
          </div>
          <div className="h-full md:h-96 md:text-center p-3 md:mx-6 md:p-6 w-[90%] md:w-1/2 rounded-lg shadow-lg mx-auto order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl pl-5 pb-2 md:py-4 inline-block font-medium text-start md:text-center">
              <i>{props.title}</i>
            </h2>
            <p className="text-gray-500 p-5">
              {props.desc}
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout the
              point of using
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About_Certificate;
