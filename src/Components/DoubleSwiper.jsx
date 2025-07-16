import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const DoubleSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const mainImages = [
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  ];

  const thumbImages = mainImages; // Using same images for thumbs in this example

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Main Swiper */}
      <div className="relative mb-4 group">
        <Swiper
          spaceBetween={10}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Navigation, Thumbs]}
          className="rounded-lg shadow-lg"
        >
          {mainImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={image}
                  alt={`Property ${index + 1}`}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <button
          ref={navigationPrevRef}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/80 text-gray-800 rounded-full shadow-md hover:bg-white transition-all opacity-0 group-hover:opacity-100"
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          ref={navigationNextRef}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/80 text-gray-800 rounded-full shadow-md hover:bg-white transition-all opacity-0 group-hover:opacity-100"
        >
          <FiChevronRight size={24} />
        </button>
      </div>

      {/* Thumbnail Swiper */}
      {/* <div className="px-8">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumb-swiper"
        >
          {thumbImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="cursor-pointer">
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-20 object-cover rounded-md opacity-70 hover:opacity-100 transition-opacity border-2 border-transparent hover:border-blue-500"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
    </div>
  );
};

export default DoubleSwiper;
