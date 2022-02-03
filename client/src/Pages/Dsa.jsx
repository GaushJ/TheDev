import React from 'react'
import Content from '../Components/Content'
import { subCategories } from '../Data'
import ProjectCard from '../Components/ProjectCard'

const Dsa = () => {
  return (
    <>
      <Content
        heading="Data Structures and Algorithms"
        track="true"
        description="Get started with DSA  using 
      C++ or JAVA and strenghthen your problem solving skills to crack FAAMG interviews easily"
        lottieSrc="https://assets2.lottiefiles.com/packages/lf20_eoiuzkfc.json"
      />
      <div className="grid grid-cols-2 gap-4 xl:m-64 p-4">

        {subCategories.dsa.map((val, index) => {
          return (
            <ProjectCard
              key={index}
              link={val.link}
              image={val.image}
              subject={val.subject}
              description={val.description}
              background={val.background}
            />
          )


        })}
      </div>
    </>
  )
}

export default Dsa
