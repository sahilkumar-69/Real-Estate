import { FaBuilding, FaHouseUser } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { GiHouseKeys } from "react-icons/gi";
import { FaHouseChimney } from "react-icons/fa6";
import { RiBuilding2Fill } from "react-icons/ri";
import { Navigation } from "swiper/modules";
const IconSwiper = () => {
  return (
    <div className="w-full bg-[#AFDBF5]">
      <Swiper
        modules={[Navigation]}
        navigation
        autoplay={true}
        spaceBetween={30}

        // breakpoints={{
        //   640: { slidesPerView: 1 },
        //   768: { slidesPerView: 2 },
        //   1024: { slidesPerView: 3 },
        // }}
        // className="mySwiper"
      >
        <SwiperSlide>
          <marquee scrollamount={30} loop >
            <div className="flex gap-20" >
              <FaHouseUser className="w-25 h-25" />
              <FaHouseChimney className="w-25 h-25" />
              <GiHouseKeys className="w-25 h-25" />
              <FaBuilding className="w-25 h-25" />
              <RiBuilding2Fill className="w-25 h-25" />
              <FaHouseUser className="w-25 h-25" />
              <FaHouseChimney className="w-25 h-25" />
              <GiHouseKeys className="w-25 h-25" />
              <FaBuilding className="w-25 h-25" />
              <RiBuilding2Fill className="w-25 h-25" />
            </div>
          </marquee>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default IconSwiper;
