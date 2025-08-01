import BrandedDevelopments from "../Components/Home/BrandedDevelopment";
import RealEstateSolutions from "../Components/Home/CardsWrapper";
import ContactForm from "../Components/Home/ContactForm";
import ExploreIn from "../Components/Home/ExploreIn";
import Home_Hero_section from "../Components/Home/Home_Hero_section";
import Professional from "../Components/Home/Professional";
import TestimonialCard from "../Components/Home/TestimonialCard";
import IconSwiper from "../Components/Home/IconSwiper";
import SubscribeSection from "../Components/SubscribeSection";
import { useEffect } from "react";
import PropertyMarketplace from "../Components/Home/NexusMarketPlace";

const HomePage = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <>
           <Home_Hero_section Hidebtn={false} />
     
      <IconSwiper />
      <div className="px-6 md:px-10 lg:px-20">
        <RealEstateSolutions />
        <BrandedDevelopments />
        <ExploreIn Enablebtn={false} Title={" Explore Properties in India"} />

        {/* <div className="p-4">
        <h1 className="text-3xl font-bold text-center mb-8">
        Property Gallery
        </h1>
        <DoubleSwiper />
        </div> */}
      </div>
      <ContactForm />
      <div className="p-6 md:px-10 lg:px-20">
        <TestimonialCard />
      </div>

      <Professional />
      <PropertyMarketplace />
      <div className="px-6 md:px-10 lg:px-20">
        <SubscribeSection />
      </div>
    </>
  );
};

export default HomePage;
