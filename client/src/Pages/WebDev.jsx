import React from "react";
import "@lottiefiles/lottie-player";
import Content from "../Components/Content";
import {subCategories} from '../Data'
import ProjectCard from '../Components/ProjectCard'
// import data from '../Data'
// import IMAGES from "../Components/Images/Images";

function WebDev() {
  return (
    <>
      <Content
        heading="Web Development"
        track="true"
        link="#content"
        description="Get started with Web Development using 
    latest technologies like React , Angular and the building
    blocks of all HTML CSS and Javascript. Tailwind CSS or Bootstrap
    , learn anything and its all FREE"
        lottieSrc="https://assets8.lottiefiles.com/packages/lf20_hntzYU.json"
      />
      <div className="grid md:m-36 sm:grid-cols-2 gap-4 xl:mx-64 mb-64 p-4" id="content">

{subCategories.webDevelopment.map((val,index)=>{return(
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
  );
}

export default WebDev;
