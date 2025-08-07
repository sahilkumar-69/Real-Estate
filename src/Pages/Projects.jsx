import { useEffect } from "react";

import ProjectGrid from "../Components/ProjectGrid";
 
import Hero from "../Components/Home/Home_Hero_section";
import LuxuryPropertyInfo from "../Components/Others/Description";

import WhyChoose from "../Components/Others/WhyChoose";

import SubscribeSection from "../Components/SubscribeSection";
import { projectDescription } from "../Data";

const Projects = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

 

  return (
    <>
      <Hero video={"src/assets/Project_Hero_Video.mp4"} />
      {/* <SearchAndFilter {...SearchAndFilterProps} /> */}
      <ProjectGrid />
      <div className=" px-10 p-4">
        <LuxuryPropertyInfo content={projectDescription} />
        <WhyChoose />
        {/* <FaqSection faqs={} /> */}
        <SubscribeSection />
      </div>
    </>
  );
};

export default Projects;
