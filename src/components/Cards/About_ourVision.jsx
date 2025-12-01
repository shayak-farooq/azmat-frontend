import React from "react";

function About_ourVision(props) {
  return (
    <>
      <div className="rounded-lg w-full shadow-lg md:w-[32%] p-6 inline-block">
        <h4 className="text-xl font-semibold">
            {props.title}
        </h4>
        <p className="text-gray-500 flex flex-wrap">
          {props.desc}
        </p>
      </div>
    </>
  );
}

export default About_ourVision;
