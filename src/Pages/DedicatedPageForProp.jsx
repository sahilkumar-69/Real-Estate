import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import DoubleSwiper from "../Components/DoubleSwiper";
const DedicatedPageForProp = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  const { propertyId } = useParams();
  console.log(propertyId);
  return (
    <div>
      <div className=" bg-black mt-10">
        <DoubleSwiper />
      </div>
    </div>
  );
};

export default DedicatedPageForProp;
