import { FaBuilding, FaHouseUser } from "react-icons/fa";
import { GiHouseKeys } from "react-icons/gi";
import { FaHouseChimney } from "react-icons/fa6";
import { RiBuilding2Fill } from "react-icons/ri";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"; // Important

const icons = [
  FaHouseUser,
  FaHouseChimney,
  GiHouseKeys,
  FaBuilding,
  RiBuilding2Fill,
  FaHouseUser,
  FaHouseChimney,
  GiHouseKeys,
  FaBuilding,
  RiBuilding2Fill,
  FaHouseUser,
  FaHouseChimney,
  GiHouseKeys,
  FaBuilding,
  RiBuilding2Fill,
];

const IconSwiper = () => {
  return (
    <div className="w-full border bg-[#AFDBF5] py-6">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={2000}
        slidesPerView={5}
        breakpoints={{
          640: { slidesPerView: 4 },
          768: { slidesPerView: 6 },
          1024: { slidesPerView: 8 },
        }}
        spaceBetween={30}
      >
        {icons.map((Icon, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center">
              <Icon className="text-5xl md:text-6xl   hover:text-blue-600 transition duration-300" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IconSwiper;
