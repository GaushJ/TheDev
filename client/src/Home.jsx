import React from "react";
import Content from "./Components/Content";
import IMAGES from "./Components/Images/Images";
import Marquee from "react-fast-marquee";
import Testimonial from "./Components/Testimonial";
import TeamComponent from "./Components/Team";
import { homeData } from "./Data";
import HomeCard from "./Components/HomeCard";



const Home = () => {
  return (
    <>
      {/* Header content */}
      <Content
        heading="Get started"
        header="with Tech"
        height="100"
        width="100"
        link="/categories"
        description="If you're a someone that's curious about tech but not sure where to start -- this is the spot for you. Learn + start building cool stuff right now."
        lottieSrc="https://assets9.lottiefiles.com/packages/lf20_vnikrcia.json"
      />

      {/* Donation section starts */}
      <div className="flex flex-col justify-center h-auto xl:my-44 lg:my-36">
       

        {/*  */}
        <div className="grid place-content-center h-auto xl:my-20 my-8">
          <div className="grid place-content-center text-center p-4 font-extrabold xl:text-6xl md:text-5xl sm:text-4xl text-3xl">
            <span>Donations from world&apos;s &nbsp;</span>
            <span className="text-gradient">top companies</span>
          </div>
          <div className="xl:text-2xl md:text-xl text-gray-500 flex justify-center mt-4  font-medium mb-20 text-xl">
            You&apos;re in good hands.
            <span className="text-gray-600 font-bold"> Promise.</span>
          </div>
        </div>

        {/* Marquee Section starts here */}

        <div className="flex justify-center mt-20">
          <Marquee gradient={false}>
            <img src={IMAGES.DigitalOcean} className="h-32 w-72" />
            <img src={IMAGES.IBM} className="h-32 w-72" />
            <img src={IMAGES.Microsoft} className="h-32 w-72" />
            <img src={IMAGES.Oracle} className="h-32 w-72" />
            <img src={IMAGES.Wolfram} className="h-32 w-72" />
            <img src={IMAGES.Intel} className="h-32 w-72" />
            <img src={IMAGES.Microsoft} className="h-32 w-72" />
          </Marquee>
        </div>
        {/* Marquee Section ends here */}
      </div>

      {/* testimonial section starts */}
      <div className="grid place-content-center h-auto my-20">
        <div className="grid place-content-center text-center p-4 font-extrabold xl:text-6xl md:text-5xl sm:text-4xl text-3xl">
          <span>Some people think we&apos;re &nbsp;</span>
          <span className="text-gradient">pretty awesome</span>
        </div>
      </div>

      <Testimonial />

      {/* Learn by making stuff */}
      <div className="grid place-content-center h-auto xl:my-20 my-8">
        <div className="grid place-content-center text-center p-4 font-extrabold xl:text-6xl md:text-5xl sm:text-4xl text-3xl">
          <span>Learn by</span>
          <span className="text-gradient ">making stuff</span>
          <div className="xl:text-2xl md:text-xl text-gray-500 flex justify-center my-6 px-8 font-medium text-xl">
            Say goodbye to 30-hour long recorded courses that no one ever
            finishes. Say hello to courses that focus on actually making stuff.

          </div>
        </div>
      </div>
      <div className="grid mx-20 md:mx-0 md:grid-cols-3 gap-4 xl:m-20  p-4">
      {homeData.map((val,index)=>{return(
          <HomeCard
          key={index}
          image={val.image}
          subject={val.subject}
          description={val.description}
          background={val.background}
        />
)
 

})}
      </div>

      {/* Team component starts here */}
      <TeamComponent />





    </>
  );
};

export default Home;
