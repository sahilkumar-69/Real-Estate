import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
 

import "swiper/css";
import "swiper/css/navigation";
// import { PropertySwiperCard } from "./PropertySwiperCard";
import { propertyData } from "../../Data";
import ConsultantCard from "../Cards/MeetExpertCard";

export default function ExpertCardsWraper() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (
      swiperInstance &&
      navigationPrevRef.current &&
      navigationNextRef.current
    ) {
      swiperInstance.params.navigation.prevEl = navigationPrevRef.current;
      swiperInstance.params.navigation.nextEl = navigationNextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className="py-12 bg-gray-50 relative">
      <div className="container mx-auto px-4 relative">
        {/* Nav Buttons */}
        <button
          ref={navigationPrevRef}
          className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white shadow-lg text-gray-700 rounded-full hover:bg-gray-100"
        >
          <FiChevronLeft size={22} />
        </button>
        <button
          ref={navigationNextRef}
          className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white shadow-lg text-gray-700 rounded-full hover:bg-gray-100"
        >
          <FiChevronRight size={22} />
        </button>

        {/* Swiper */}
        <Swiper
          onSwiper={setSwiperInstance}
          modules={[Navigation]}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
        >
          {propertyData.map((property, index) => (
            <SwiperSlide key={index}>
              <ConsultantCard key={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
