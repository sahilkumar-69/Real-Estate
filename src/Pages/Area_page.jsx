import { useEffect } from "react";
import TopCommunities from "../Components/Areas/Component1";
import { area } from "../Data";
import AreaCard from "../Components/Cards/AreaCard";
import ExploreIn from "../Components/Home/ExploreIn";

const Area_page = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-15 px-6 md:px-10 lg:px-20 ">
      <TopCommunities />
      <div className="grid grid-cols-1 lg:overflow-visible  overflow-x-clip sm:grid-cols-2 my-3 md:grid-cols-3 lg:grid-cols-4  gap-6">
        {area.map((dev) => (
          <AreaCard key={dev.id} {...dev} />
        ))}
      </div>
      <ExploreIn />
    </div>
  );
};

export default Area_page;
