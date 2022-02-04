/* eslint-disable react/prop-types */
import { React } from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = (props) => {
  return (
    <>
      <div
        key={props.Key}
        className=" rounded-xl shadow-xl h-full w-full  flex flex-col "
        id={props.background}
      >

        <div className="flex flex-col w-full h-full p-2 justify-center">
          <div className="w-full h-1/2  flex justify-center">
            <img src={props.image} alt="ProjectCard" className="w-1/2 h-full" />
          </div>
          <div className="h-1/2 w-full flex flex-col justify-center">
            
              <div className="text-3xl font-bold text-gray-800 flex  justify-center text-center  ">
                {props.subject}
              </div>
              <div className="font-medium text-xl text-gray-700 p-4">
                {props.description}
              </div>

            
          </div>
          <Link to= {props.link} className="cursor-pointer">
            <div className="  p-2  text-xl font-normal align-middle justify-center flex bg-purple-500  hover:bg-purple-600 w-full h-auto transition duration-300 text-white rounded-lg">
              View Contents
            </div>
          </Link>
        </div>
      </div>

    </>
  )
}

export default ProjectCard
