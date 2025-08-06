import { useEffect } from "react";
import CareerBanner from "../Components/Career/CareerBanner";
import CareersHero from "../Components/Career/CareerHero";
import CareerImageSlider from "../Components/Career/ImageSlider";
import MakeADifference from "../Components/Career/MakeADif";
import PerksBenefitsSection from "../Components/Career/PerksBenefitsSection";
import TeamCultureSection from "../Components/Career/TeamCultureSection";
import SubscribeSection from "../Components/SubscribeSection";

const CareerPage = () => {

  useEffect(() => {
    scrollTo(0,0)
  
  }, [])
  
  
  
  return (
    <>
      <CareersHero />
      <MakeADifference />
      <CareerImageSlider />
      <TeamCultureSection />
      <div className="w-screen flex justify-center my-10 align-middle">
        <CareerBanner />
      </div>
      <PerksBenefitsSection />
      <div className="px-6 md:px-10 lg:px-20">
        <SubscribeSection />
      </div>
    </>
  );
};

export default CareerPage;
