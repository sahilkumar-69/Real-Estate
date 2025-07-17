import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { testimonials } from "../../Data";

export default function TestimonialSwiper() {


  const starIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#f97316"
      viewBox="0 0 24 24"
      className="w-5 h-5"
    >
      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.4 8.168L12 18.896l-7.334 3.864 1.4-8.168L.132 9.21l8.2-1.192z" />
    </svg>
  );

  const avatars = {
    male: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT58-VVT8Wch6ligqL9BVGs4hHtZ2ChZeURvA&s",
    female:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT58-VVT8Wch6ligqL9BVGs4hHtZ2ChZeURvA&s",
  };

  return (
    <div className="w-full px-6 md:px-20 pt-2 pb-16 bg-white">
      <h2 className="text-2xltext-3xl md:text-4xl font-bold text-slate-800 mb-2  max-w-4xl">
        Why Our Client Trust Us?
      </h2>
      <p className="mb-10">
        Discover what our customers are saying about their experiences.
      </p>
      <Swiper
        modules={[Navigation]}
        navigation
        autoplay={true}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white  shadow-lg border rounded-lg p-6 h-full flex flex-col justify-between">
              <div className="flex items-center justify-start gap-2 py-3 ">
                <img
                  className="mb-4"
                  width={80}
                  height={80}
                  src={avatars[testimonial.gender]}
                  alt=""
                />

                <div className="  text-start mb-4">
                  <p className="font-semibold text-blue-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.time}</p>
                  <div className="flex justify-center gap-1 my-2">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <span key={i}>{starIcon}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">{testimonial.title}</h3>
                <p className="text-gray-700 text-sm">
                  {testimonial.content.slice(0, 120)}...
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
