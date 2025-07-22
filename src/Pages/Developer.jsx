import { useEffect } from "react";
import DeveloperCard from "../Components/Developer/DeveloperCard";
import DeveloperHero from "../Components/Developer/DeveloperHero";
import ContactForm from "../Components/Home/ContactForm";
import { deve, developers } from "../Data";
import LuxuryPropertyInfo from "../Components/Others/Description";
import SubscribeSection from "../Components/SubscribeSection";
import ExploreIn from "../Components/Home/ExploreIn";
import MainGrid from "../Components/Developer/MainGrid";

const Developers = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen mt-15   bg-[#f7f7f7] pt-10 px-6 md:px-20  ">
      {/* Hero Section */}
      <DeveloperHero />
      <MainGrid data={deve} />
      <ExploreIn Title={" Top Developers in India"} />
      <ExploreIn Title={" Popular Projects by Developers"} />
      {/* <ContactForm /> */}
      <LuxuryPropertyInfo />
      <SubscribeSection />
    </div>
  );
};

export default Developers;
