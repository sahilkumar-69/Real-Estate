import { useEffect } from "react";
import Service_Hero from "../Components/Service/Service_Hero";
import Banner from "../Components/Service/Banner";
import HotDealsBanner from "../Components/Service/HotDeals";
import ChannelPartners from "../Components/Service/ChannerlPartners";
import PartnerSwiper from "../Components/Service/PartnerSwiper";
import ContactForm from "../Components/Home/ContactForm";
import SubscribeSection from "../Components/SubscribeSection";
import { CardDesign } from "../Components/ServiceDetailedPage/Card";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Service_Hero />

      <div className="min-h-screen mt-15 bg-[#f7f7f7] pt-10 px-4 md:px-20">
        <Banner />

        <CardDesign />

        <HotDealsBanner />
        <ChannelPartners />
      </div>

      <PartnerSwiper />

      <div className="min-h-screen mt-15 bg-[#f7f7f7] pt-10 px-6 md:px-20">
        <ContactForm />
        <SubscribeSection />
      </div>
    </div>
  );
};

export default Services;
