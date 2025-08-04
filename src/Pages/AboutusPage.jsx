import React, {useEffect} from "react";
import AboutHero from "../Components/Aboutus/AboutHero";
import VideoCard from "../Components/Aboutus/videoCard";
import SubscribeSection from "../Components/SubscribeSection";
import AboutStatement from "../Components/Aboutus/AboutStatement";

const AboutusPage = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <AboutHero />
      <VideoCard />
      <AboutStatement />
      <SubscribeSection />
    </main>
  );
};

export default AboutusPage;
