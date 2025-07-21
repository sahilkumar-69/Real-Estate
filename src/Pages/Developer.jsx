import { useEffect } from "react";
import DeveloperCard from "../Components/Developer/DeveloperCard";
import DeveloperHero from "../Components/Developer/DeveloperHero";
import ContactForm from "../Components/Home/ContactForm";
import { deve, developers } from "../Data";
import LuxuryPropertyInfo from "../Components/Others/Description";
import SubscribeSection from "../Components/SubscribeSection";
import ExploreIn from "../Components/Home/ExploreIn";
import AreaCard from "../Components/Cards/AreaCard";

const Developers = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen mt-15   bg-[#f7f7f7] pt-10 px-4 md:px-16  ">
      {/* Hero Section */}
      <DeveloperHero />
      <div className="grid grid-cols-1 lg:overflow-visible  overflow-x-clip sm:grid-cols-2 my-3 md:grid-cols-3 lg:grid-cols-4  gap-6">
        {deve.map((dev) => (
          <AreaCard key={dev.id} {...dev} />
        ))}
      </div>
      <ExploreIn />
      <ExploreIn />
      <ContactForm />
      <LuxuryPropertyInfo />
      <SubscribeSection />
    </div>
  );
};

export default Developers;
