import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";

const images = new Array(10).fill(1);

const CareerImageSlider = () => {
  return (
    <div className="py-10  bg-white">
      <Swiper
        slidesPerView={1.5}
        spaceBetween={16}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        loop={true}
        autoplay={{
          delay: 1500, // 2.5 seconds between slides
          disableOnInteraction: false,
        }}
        freeMode={true}
        modules={[FreeMode, Autoplay]}
        className="w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src={`  /assets/CareerImages/p (${index + 1}).jpg`}
                alt={`slide-${index}`}
                className="w-full h-100 object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CareerImageSlider;
