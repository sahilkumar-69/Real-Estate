import { useEffect, useState } from "react";
import Service_Hero from "../Components/Service/Service_Hero.jsx";
import Banner from "../Components/Service/Banner.jsx";
import HotDealsBanner from "../Components/Service/HotDeals.jsx";
import ChannelPartners from "../Components/Service/ChannerlPartners.jsx";
import PartnerSwiper from "../Components/Service/PartnerSwiper.jsx";
import ContactForm from "../Components/Home/ContactForm.jsx";
import SubscribeSection from "../Components/SubscribeSection.jsx";
import { CardDesign } from "../Components/ServiceDetailedPage.jsx";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchServices = async () => {
      try {
        const res = await fetch(
          "https://realestatebackend-2-v5e5.onrender.com/api/All-Services"
        );
        const data = await res.json();
        console.log("API response:", data);

        if (Array.isArray(data)) {
          setServicesData(data);
        } else if (Array.isArray(data.services)) {
          setServicesData(data.services);
        } else if (Array.isArray(data.data)) {
          setServicesData(data.data);
        } else {
          console.warn("Unexpected API response structure:", data);
          setServicesData([]);
        }
      } catch (err) {
        console.error("Failed to fetch services:", err);
        setError("Unable to load services at the moment.");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div>
      <Service_Hero />

      <div className="min-h-screen mt-15 bg-[#f7f7f7] pt-10 px-6 md:px-20">
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
