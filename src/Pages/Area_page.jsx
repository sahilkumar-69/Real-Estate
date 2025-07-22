import { useEffect } from "react";
import TopCommunities from "../Components/Areas/Component1";
import { area, areaDescription } from "../Data";
import ExploreIn from "../Components/Home/ExploreIn";
import MainGrid from "../Components/Developer/MainGrid";
import SubscribeSection from "../Components/SubscribeSection";
import Description from "../Components/Others/Description";


const Area_page = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-15 px-6 md:px-10 lg:px-20 ">
      <TopCommunities />
      <MainGrid data={area} />
      <ExploreIn Enablebtn={false} Title={"Popular Area in India"} />
      <Description content={areaDescription} />
      <SubscribeSection />
    </div>
  );
};

export default Area_page;
