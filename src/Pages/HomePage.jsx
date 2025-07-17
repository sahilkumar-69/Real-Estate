import DoubleSwiper from "../Components/DoubleSwiper";
import BrandedDevelopments from "../Components/Home/BrandedDevelopment";
import RealEstateSolutions from "../Components/Home/CardsWrapper";
import ContactForm from "../Components/Home/ContactForm";
import ExploreIn from "../Components/Home/ExploreIn";
import Home_Hero_section from "../Components/Home/Home_Hero_section";
import Professional from "../Components/Home/Professional";
import TestimonialCard from "../Components/Home/TestimonialCard";
import IconSwiper from "../Components/Home/IconSwiper";

const HomePage = () => {
  return (
    <>
      <Home_Hero_section />
      <IconSwiper />
      <RealEstateSolutions />
      <BrandedDevelopments />
      <ExploreIn />
      {/* <div className="p-4">
        <h1 className="text-3xl font-bold text-center mb-8">
        Property Gallery
        </h1>
        <DoubleSwiper />
        </div> */}
      <TestimonialCard />
      <ContactForm />
      <Professional />
    </>
  );
};

export default HomePage;
