import { useEffect } from "react";
import Service_Hero from "../Components/Service/Service_Hero";

import Banner from "../Components/Service/Banner";
import MainGrid from "../Components/Developer/MainGrid";
import { deve } from "../Data";
import HotDealsBanner from "../Components/Service/HotDeals";
import SubscribeSection from "../Components/SubscribeSection";
import ContactForm from "../Components/Home/ContactForm";
import ChannelPartners from "../Components/Service/ChannerlPartners";
import PartnerSwiper from "../Components/Service/PartnerSwiper";

const Services = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Service_Hero />
      <div className="min-h-screen mt-15   bg-[#f7f7f7] pt-10 px-6 md:px-20  ">
        <Banner />
        <MainGrid data={deve} />
        <HotDealsBanner />
        <ChannelPartners />
      </div>
      <PartnerSwiper />
      <div className="min-h-screen mt-15   bg-[#f7f7f7] pt-10 px-6 md:px-20  ">
        <ContactForm />

        <SubscribeSection />
      </div>
    </div>
  );
};

export default Services;
