import React from "react";


const Content = (props) => {
  return (
    <>
      <div className=" flex  flex-row text-left justify-center   mx-auto bg-white max-w-7xl  mb-28">
        <div className=" p-10 web_dev_page_heading font-bold text-4xl md:text-6xl md:w-1/2  w-full  sm:w-full lg:text-7xl  grid place-content-center">
          <div>
            <span className="text-gradient">{props.heading} </span>
            {props.track ? <span>Track</span> : <span>{props.header}</span>}
            <p className="text-base md:text-xl text-gray-500 font-extralight my-8 ">
              {props.description}
            </p>
          </div>
          <div
            className="text-sm md:text-xl rounded-r-full rounded-l-full 
            flex justify-center font-light w-48 text-white p-2 bg-gradient-to-r 
            from-purple-400 transition duration-300 via-pink-500 to-red-500 
            hover:from-pink-500 hover:to-purple-500  rounded-xl cursor-pointer shadow-2xl"
          >
            <a href={props.link} className="transition duration-200">Get Started</a>
          </div>
        </div>
        <div className="w-1/2 hidden sm:inline-block">
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
