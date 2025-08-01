import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";

const AreaDetailPage = () => {
  const { id } = useParams();
  const [areaData, setAreaData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArea = async () => {
      try {
        const res = await fetch(
          `https://realestatebackend-2-v5e5.onrender.com/api/All-Area/${id}`
        );
        const json = await res.json();
        console.log("Fetched area detail:", json); // 🔍 Debug
        setAreaData(json.data || json);
      } catch (err) {
        console.error("Error fetching area:", err);
      } finally {
        setLoading(false);
      }
    };

    getArea();
  }, [id]);

  if (loading)
    return (
      <div className="text-center flex items-center justify-center h-screen mt-20 text-lg">
        <PulseLoader size={25} />
      </div>
    );
  if (!areaData) return <p>Area not found</p>;

  return (
    <div className="p-6 max-w-3xl my-20 mx-auto bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-4">{areaData.name || "No Name"}</h1>

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

      <p className="text-gray-700">
        {areaData.description || "No description available."}
      </p>
      {/* Add more fields here if you want */}
    </div>
  );
};

export default AreaDetailPage;
