import { useEffect, useState } from "react";
import DeveloperHero from "../Components/Developer/DeveloperHero";
import ExploreIn from "../Components/Home/ExploreIn";
import LuxuryPropertyInfo from "../Components/Others/Description";
import SubscribeSection from "../Components/SubscribeSection";
 
import MainGrid2 from "../Components/Developer/MainGrid2";
import { PulseLoader } from "react-spinners";
import { developersDescription, propertyData } from "../Data";
import { PropertySwiperCard } from "../Components/Home/PropertySwiperCard";
import AreaCard from "../Components/Cards/AreaCard";

const Developers = () => {
  const [developers, setDevelopers] = useState([]);
  const [filteredDevelopers, setFilteredDevelopers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [path, setpath] = useState("");

  useEffect(() => {
    scrollTo(0, 0);

    const abortController = new AbortController(); // renamed to avoid conflict
    const signal = abortController.signal;

    const fetchDevelopers = async () => {
      try {
        const response = await fetch(
          "https://realestatebackend-2-v5e5.onrender.com/api/All-Developer",
          { signal }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch developers: ${response.status}`);
        }

        const result = await response.json();
        // console.log("Fetched developers:", result.data);

        if (!Array.isArray(result.data) || !result.data[0]?._id) {
          throw new Error("Invalid developers format returned");
        }

        setDevelopers(result.data);
        // console.log(developers)
        // setpath(developers);
        setFilteredDevelopers(result.data);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setError(
            err.message || "Unexpected error occurred while loading developers."
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDevelopers();

    return () => abortController.abort(); // ✅ now safe
  }, []);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setFilteredDevelopers(developers);
      return;
    }

    const term = searchTerm.toLowerCase().trim();

    const filtered = developers.filter((dev) =>
      dev.name?.toLowerCase().includes(term)
    );

    setFilteredDevelopers(filtered);
  };

  console.log(developers.slice(0, 9));

  return (
    <div className="min-h-screen mt-15 bg-[#f7f7f7] pt-10 px-6 md:px-20">
      {/* Hero Section */}
      <DeveloperHero
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      />

      <div className="mb-10">
        {loading ? (
          <div className="text-center text-blue-600 text-xl py-10">
            <PulseLoader />
          </div>
        ) : error ? (
          <div className="text-center text-red-600 text-xl py-10">
            Error: {error}
          </div>
        ) : filteredDevelopers.length === 0 ? (
          <div className="text-center text-yellow-600 text-xl py-10">
            <PulseLoader />
          </div>
        ) : (
          <MainGrid2 blog={false} data={filteredDevelopers} path="developers" />
        )}
      </div>

      {/* <ExploreIn
   
        PropertyType="developers"
      
      /> */}

      <ExploreIn
        Title="Top Developers in India"
        Enablebtn={false}
        data={developers.slice(0, 9)}
        CardComponent={AreaCard}
        cardProps={{ fr: "static", path: "developers" }}
      />

      {/* <ExploreIn Title="Popular Projects by Developers" /> */}
      <ExploreIn
        Title="Popular Projects by Developers"
        Enablebtn={false}
        data={propertyData}
        CardComponent={PropertySwiperCard}
        cardProps={{ fr: "static" }}
      />

      <LuxuryPropertyInfo content={developersDescription} />
      <SubscribeSection />
    </div>
  );
};

export default Developers;
 