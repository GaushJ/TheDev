import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import data from '../Data'

const Categories = () => {
  return (
    <>
      <div className="relative p-4 text-3xl font light flex justify-center">
        <div className="relative bg-gray-300 text-gray-500 p-4 rounded-lg mt-20">Projects</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-20">
        {data.map((val, index) => {
          return (
            <ProjectCard
              Key={index}
              link={val.link}
              image={val.image}
              subject={val.subject}
              description={val.description}
              background ={val.background}
            />
          )
        })}

      </div>
    </>
  )
}

export default Categories
