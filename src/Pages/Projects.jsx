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

   const heroProps = {
     title: "Discover Your Future Home Project",
     desc: "Explore premium residential and commercial spaces tailored to modern lifestyles. From luxury apartments to smart investment properties, find your perfect match in our latest real estate projects.",
     video: "/assets/Project_Hero_Video.mp4",
   };

   return (
     <div className="mt-5">
       <Hero {...heroProps} />
       {/* <SearchAndFilter {...SearchAndFilterProps} /> */}
       <ProjectGrid />
       <div className=" px-10 p-4">
         <LuxuryPropertyInfo content={projectDescription} />
         <WhyChoose />
         {/* <FaqSection faqs={} /> */}
         <SubscribeSection />
       </div>
     </div>
   );
};

export default Projects;
