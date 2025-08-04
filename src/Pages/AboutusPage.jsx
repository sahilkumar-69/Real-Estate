import { useEffect } from "react";
import AboutHero from "../Components/Aboutus/AboutHero";
import VideoCard from "../Components/Aboutus/videoCard";
import SubscribeSection from "../Components/SubscribeSection";
import AboutStatement from "../Components/Aboutus/AboutStatement";

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
