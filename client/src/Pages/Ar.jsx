import React from 'react'
import Content from '../Components/Content'
import { subCategories } from '../Data'
import ProjectCard from '../Components/ProjectCard'

const Ar = () => {
  return (
    <>
      <Content
        heading="Augmented Reality"
        track="true"
        link="#content"
        description="Get started with Augmented Reality and Virtual Reality using 
      latest technologies Unity and various SDKs like Vuforia ,ARCore, ARkit . CReate Immersive experience with unity using C# with the learning resources"
        lottieSrc="https://assets2.lottiefiles.com/packages/lf20_eoiuzkfc.json"
      />
      <div className="grid grid-cols-2 gap-4 xl:m-64 p-4" id="content">

        {subCategories.ARDevelopment.map((val, index) => {
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

export default Ar
