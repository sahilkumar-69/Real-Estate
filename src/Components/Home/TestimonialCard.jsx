import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function TestimonialSwiper() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

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
    male: "https://randomuser.me/api/portraits/men/32.jpg",
    female: "https://randomuser.me/api/portraits/women/44.jpg",
    default: "https://via.placeholder.com/80",
  };

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          "https://realestatebackend-2-v5e5.onrender.com/api/alltestimonials"
        );

        setTestimonials(response.data.data || []);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
        setTestimonials([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

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

  if (loading) {
    return (
      <div className="text-center py-10">
        <PulseLoader />
      </div>
    );
  }

  return (
    <div className="w-full pt-2 pb-16 relative bg-white">
      <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-2 max-w-4xl">
        Why Our Clients Trust Us?
      </h2>
      <p className="mb-10 text-gray-600">
        Discover what our customers are saying about their experiences.
      </p>
      <div className="container mx-auto px-4  relative">
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

        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={setSwiperInstance}
          // navigation={{
          //   enabled: window.innerWidth >= 768, // Only enable above md
          // }}
          autoplay={{ delay: 3000 }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 }, // mobile - column layout
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          // className="mySwiper"
        >
          {Array.isArray(testimonials) && testimonials.length > 0 ? (
            testimonials.map((testimonial, index) => {
              const gender = testimonial.gender?.toLowerCase();
              const avatar = avatars[gender] || avatars.default;

              return (
                <SwiperSlide key={index}>
                  <div className="bg-white shadow-lg border rounded-lg p-6 h-[255px] flex flex-col justify-between">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        width={80}
                        height={80}
                        src={avatar}
                        alt="User Avatar"
                        className="rounded-full object-cover"
                      />
                      <div className="text-start">
                        <p className="font-semibold text-blue-800">
                          {testimonial.name || "Anonymous"}
                        </p>
                        <p
                          className={`inline-block text-xs px-2 py-1 rounded-full ${
                            gender === "male"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-pink-100 text-pink-800"
                          }`}
                        >
                          {testimonial.gender || "Not specified"}
                        </p>

                        <p className="text-sm text-gray-500">
                          {testimonial.year || "N/A"}
                        </p>

                        <div className="flex gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>{starIcon}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">
                        {(testimonial.title &&
                          testimonial.title.slice(0, 20)) ||
                          "Customer Feedback"}
                      </h3>
                      <p className="text-gray-700 text-sm">
                        {testimonial.description
                          ? testimonial.description.slice(0, 120) + "..."
                          : "No feedback provided."}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })
          ) : (
            <div className="text-center text-gray-500 py-10">
              No testimonials available.
            </div>
          )}
        </Swiper>
      </div>
    </div>
  );
}
