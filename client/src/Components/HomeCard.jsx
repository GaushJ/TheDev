import React from 'react';

const homeCard = (props) => {
  return <>
    <div
      key={props.Key}
      className=" rounded-xl shadow-xl h-auto w-full  flex flex-col "
      id={props.background}
    >

      <div className="flex flex-col w-full h-full p-2 justify-center">

          <div className="w-full h-1/2 flex justify-center ">
            <img src={props.image} alt="ProjectCard" className="w-1/2 h-full" />
          </div>

          <div className="h-2/5 flex-col justify-center">

                <div className="text-3xl font-bold text-white    m-4  ">
                  {props.subject}
                </div>

                <div className="font-normal text-left text-xl text-white p-4">
                  {props.description}
                </div>

          </div>

      </div>

    </div>

  </>
};

export default homeCard;
