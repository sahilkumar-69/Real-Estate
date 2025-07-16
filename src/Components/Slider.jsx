import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function SwiperSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
    //   pagination={{ clickable: true }}
      autoplay={{ delay: 2500 }}    
      loop={true}
      className="w-full max-w-[600px] mx-auto"
    >
      <SwiperSlide>
        <img src="https://picsum.photos/id/1005/600/400" alt="1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/id/1006/600/400" alt="2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/id/1008/600/400" alt="3" />
      </SwiperSlide>
    </Swiper>
  );
}
