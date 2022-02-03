import React from 'react'
import Content from '../Components/Content';
import { subCategories } from '../Data'
import ProjectCard from '../Components/ProjectCard'

const Blockchain = () => {
  return (
    <>
      <Content
        heading="Blockchain Development"
        track="true"
        description="Get started with Blockchain Development with Solidity and create amazing DApps . Learn about the future of web3 and Decentralization using these FREE resources"
        lottieSrc="https://assets8.lottiefiles.com/packages/lf20_dt0twxk1.json"
      />
      <div className="grid grid-cols-2 gap-4 xl:mx-64 my-20">

        {subCategories.blockchain.map((val, index) => {
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

export default Blockchain
