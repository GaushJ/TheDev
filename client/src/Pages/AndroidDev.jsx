import React from 'react'
import Content from '../Components/Content';
import {subCategories} from '../Data'
import ProjectCard from '../Components/ProjectCard'

function AndroidDev() {
  return (
    <>
      <Content
        heading="Android Development"
        track="true"
        description="Get started with Android Development using 
      latest technologies like React Native , Flutter and the building
      blocks of all Kotlin. Tailwind CSS or Bootstrap
      , learn anything and its all FREE"
        lottieSrc="https://assets9.lottiefiles.com/private_files/lf30_xvszazyd.json"
      />
<div className="grid grid-cols-2 gap-4 xl:m-64 p-4">

{subCategories.androidDevelopment.map((val,index)=>{return(
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

export default AndroidDev;
