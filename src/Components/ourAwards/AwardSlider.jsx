import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const images = [
  "src/assets/meetteam/award1.jpg",
  "src/assets/meetteam/award2.jpg",
  "src/assets/meetteam/award3.jpg",
  "src/assets/meetteam/award4.jpg",
  "src/assets/meetteam/award5.jpg",
];

const AwardSlider = () => {
  return (
    <div className="py-10 bg-white">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        navigation
        modules={[Navigation]}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-8"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`award-${idx}`}
              className="rounded-lg shadow-lg w-full object-cover h-[400px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AwardSlider;
