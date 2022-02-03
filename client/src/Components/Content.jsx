import React from "react";
import { NavLink } from "react-router-dom";

const Content = (props) => {
  return (
    <>
      <div className=" flex flex-row text-left justify-center   mx-auto bg-white max-w-7xl  mb-28">
        <div className=" p-10 web_dev_page_heading font-bold md:text-4xl md:w-1/2  w-full  sm:w-full lg:text-7xl  grid place-content-center">
          <div>
            <span className="text-gradient">{props.heading} </span>
            {props.track ? <span>Track</span> : <span>{props.header}</span>}
            <p className="text-xl text-gray-500 font-extralight my-8 ">
              {props.description}
            </p>
          </div>
          <div
            className="text-xl rounded-r-full rounded-l-full 
            flex justify-center font-light w-48 text-white p-2 bg-gradient-to-r 
            from-purple-400 transition duration-300 via-pink-500 to-red-500 
            hover:from-pink-500 hover:to-purple-500  rounded-xl cursor-pointer shadow-2xl"
          >
            <NavLink to="/categories">Get Started</NavLink>
          </div>
        </div>
        <div className="w-1/2">
          <lottie-player
            src={props.lottieSrc}
            background="transparent"
            speed="1"
            style={{ height: `${props.height}%`, width: `${props.width}%` }}
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </>
  );
};

export default Content;
