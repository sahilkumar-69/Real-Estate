import { useEffect, useState } from "react";
import Service_Hero from "../Components/Service/Service_Hero";
import Banner from "../Components/Service/Banner";
import MainGrid3 from "../Components/Developer/MainGrid3";
import HotDealsBanner from "../Components/Service/HotDeals";
import ChannelPartners from "../Components/Service/ChannerlPartners";
import PartnerSwiper from "../Components/Service/PartnerSwiper";
import ContactForm from "../Components/Home/ContactForm";
import SubscribeSection from "../Components/SubscribeSection";
import { PulseLoader } from "react-spinners";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    scrollTo(0, 0);

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

        {loading ? (
          <div className="text-center flex items-center justify-center h-screen mt-20 text-lg">
            <PulseLoader size={25} />
          </div>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : servicesData.length > 0 ? (
          <MainGrid3 data={servicesData} />
        ) : (
          <p className="text-center text-gray-500">No services found.</p>
        )}

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
