import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import ExploreIn from "../Components/Home/ExploreIn";
import { PropertySwiperCard } from "../Components/Home/PropertySwiperCard";
import { findPropertiesByLocation } from "../Functions";
import BlogContext from "../context/Property";

const AreaDetailPage = () => {
  const { id } = useParams();
  const [areaData, setAreaData] = useState(null);
  const [propertyInArea, setPropertyInArea] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFetching, setShowFetching] = useState(false);

  const { buyProperty, loading1 } = useContext(BlogContext);

  // 1️⃣ Fetch Area Detail
  useEffect(() => {
    scrollTo(0, 0);

    const fetchArea = async () => {
      try {
        const res = await fetch(
          `https://realestatebackend-2-v5e5.onrender.com/api/All-Area/${id}`
        );
        const json = await res.json();
        setAreaData(json.data || json);
      } catch (err) {
        console.error("Error fetching area:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArea();
  }, [id]);

  // 2️⃣ When areaData + buyProperty.data is ready, filter properties
  useEffect(() => {
    if (areaData && buyProperty?.data?.length) {
      const filtered = findPropertiesByLocation(
        buyProperty.data,
        areaData.name
      );
      setPropertyInArea(filtered);

      if (filtered.length === 0) {
        setShowFetching(true);
        setTimeout(() => {
          setShowFetching(false);
        }, 3000); // 3 seconds
      }
    }
  }, [areaData, buyProperty]);

  // 🔄 Loading state
  if (loading)
    return (
      <div className="text-center flex items-center justify-center h-screen mt-20 text-lg">
        <PulseLoader size={25} />
      </div>
    );

  // 🚫 Area not found
  if (!areaData) return <p>Area not found</p>;

  // ✅ UI Render
  return (
    <>
      <div className="p-6 max-w-3xl my-20 mx-auto bg-white rounded shadow">
        <h1 className="text-3xl font-bold mb-4">
          {areaData.name || "No Name"}
        </h1>

        {areaData.image && (
          <img
            src={areaData.image}
            alt={areaData.name}
            className="w-full h-auto rounded mb-4"
          />
        )}

        {areaData.logo && (
          <img
            src={areaData.logo}
            alt={`${areaData.name} logo`}
            className="w-20 h-20 object-contain mb-4"
          />
        )}

        <div
          dangerouslySetInnerHTML={{ __html: areaData.description }}
          className="text-gray-700"
        ></div>
      </div>
      {/* Show filtered properties */}
      <div className="px-6 md:px-10 lg:px-20">
        {loading1 ? (
          <div className="w-full h-[20vh] flex items-center justify-center">
            <PulseLoader size={25} />
          </div>
        ) : propertyInArea?.length > 0 ? (
          <ExploreIn
            Title={`Property in ${areaData.name}`}
            Enablebtn={false}
            data={propertyInArea}
            CardComponent={PropertySwiperCard}
            cardProps={{ fr: "sale" }}
          />
        ) : showFetching ? (
          <div className="w-full h-[20vh] flex items-center justify-center text-lg">
            <PulseLoader size={25} />
          </div>
        ) : (
          <div className="w-full h-[20vh] flex items-center justify-center text-lg">
            No Property Found
          </div>
        )}
      </div>
    </>
  );
};

export default AreaDetailPage;
