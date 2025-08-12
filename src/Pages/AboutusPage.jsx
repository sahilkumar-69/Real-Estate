
import React, {useEffect} from "react";
import AboutHero from "../Components/Aboutus/AboutHero.jsx";
import VideoCard from "../Components/Aboutus/videoCard.jsx";
import SubscribeSection from "../Components/SubscribeSection.jsx";
import AboutStatement from "../Components/Aboutus/AboutStatement.jsx";

const AboutusPage = () => {
  
  useEffect(() => {
    scrollTo(0, 0);

  }, []);
  return (
    <main>
      <AboutHero />
      <VideoCard />
      <AboutStatement />
      <div className="px-6 md:px-10 lg:px-20">
        <SubscribeSection />
      </div>
    </main>
  );
};

export default AboutusPage;
