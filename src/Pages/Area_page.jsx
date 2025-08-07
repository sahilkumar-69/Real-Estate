import { useEffect, useState } from "react";
import TopCommunities from "../Components/Areas/Component1";
import ExploreIn from "../Components/Home/ExploreIn";
import MainGrid from "../Components/Developer/MainGrid";
import SubscribeSection from "../Components/SubscribeSection";
import Description from "../Components/Others/Description";
import { PulseLoader } from "react-spinners";
import { areaDescription } from "../Data";
import { PropertySwiperCard } from "../Components/Home/PropertySwiperCard";
import AreaCard from "../Components/Cards/AreaCard";

const Area_page = () => {
  const [areaData, setAreaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    scrollTo(0, 0);

    const fetchAreas = async () => {
      try {
        const response = await fetch(
          "https://realestatebackend-2-v5e5.onrender.com/api/All-Area"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setAreaData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAreas();
  }, []);

  return (
    <div className="mt-15 px-6 md:px-10 lg:px-20">
      <TopCommunities />

      {loading ? (
        <div className="text-center text-yellow-600 text-xl py-10">
          <PulseLoader />
        </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <MainGrid data={areaData.data} />
      )}

      <ExploreIn
        Title={"Popular Area in India"}
        Enablebtn={false}
        data={ areaData.data && areaData.data.slice(7,15)}
        CardComponent={AreaCard}
        cardProps={{ path: "areas" }}
      />
      <Description content={areaDescription} />
      <SubscribeSection />
    </div>
  );
};

export default Area_page;
