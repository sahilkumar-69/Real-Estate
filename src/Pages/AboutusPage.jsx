import React from "react";
import AboutHero from "../Components/Aboutus/AboutHero";
import VideoCard from "../Components/Aboutus/videoCard";
import SubscribeSection from "../Components/SubscribeSection";
import AboutStatement from "../Components/Aboutus/AboutStatement";

const AboutusPage = () => {
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
