import { useEffect } from "react";
import Service_Hero from "../Components/Service/Service_Hero";

const Services = () => {
    useEffect(() => { 
      scrollTo(0,0)
     },[])
    
  return (
    <div>
      <Service_Hero />
    </div>
  );
};

export default Services;
