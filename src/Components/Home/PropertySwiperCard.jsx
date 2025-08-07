import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FiHeart, FiShare2 } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiBedBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const PropertySwiperCard = ({
  id,
  _id,
  title,
  developer,
  price,
  location,
  beds,
  tags,
  year,
  images,
  fr,
}) => {
  const navigate = useNavigate();
  // console.log(data)
  return (
    <div className="bg-white  rounded-lg hover_img overflow-hidden  hover:shadow-lg transition duration-300 h-full flex flex-col">
      {/* Swiper Image Slider */}
      <div className="relative  h-48">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop="true"
          className="h-full w-full"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                onClick={() =>
                  navigate(`/property-details/${id || _id + " " + fr}`)
                }
                src={img}
                alt={title}
                className="w-full cursor-pointer  h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Tags */}
        <div className="absolute top-3 z-50 left-3 flex flex-wrap gap-2">
          {tags?.map((tag, i) => (
            <span
              key={i}
              className={`text-xs px-2 py-1 rounded font-medium ${
                i === 0 ? "bg-gray-800 text-white" : "bg-white text-blue-800"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Year Badge */}
        <span className="absolute bottom-3 right-3 bg-gradient-to-r from-[#c66e32] to-[#e2a968] text-white text-xs font-semibold px-2 py-1 rounded">
          {year}
        </span>
      </div>

      {/* Details */}
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-bold text-[#0A2C5C]">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">
          {developer && (
            <>
              by{" "}
              <span className="font-semibold text-[#0A2C5C]">{developer}</span>
            </>
          )}
        </p>
        <p className="text-sm text-gray-700 mt-2">
          Starting Price{" "}
          <span className="text-orange-600 text-base font-semibold">
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 0,
            }).format(price)}
          </span>
        </p>
        <div className="flex items-center mt-3 text-sm text-gray-500">
          <HiOutlineLocationMarker className="mr-1" />
          {location}
        </div>
        <div className="flex items-center mt-1 text-sm text-gray-500">
          <PiBedBold className="mr-1" />
          {beds}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-2 p-4 border-t border-gray-100">
        <Link
          to={`tel:${+918987898778}`}
          className="flex items-center justify-center gap-2 text-[#ff8243] bg-gray-100 rounded py-2 text-sm font-semibold hover:bg-gray-200 transition"
        >
          <FaPhoneAlt /> <span className="text-[#0C1844]">Call</span>
        </Link>
        <Link
          to={`https://wa.me/${+918987898778}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-green-600 bg-gray-100 rounded py-2 text-sm font-semibold hover:bg-gray-200 transition"
        >
          <FaWhatsapp /> <span className="text-[#0C1844]">WhatsApp</span>
        </Link>
      </div>
    </div>
  );
};
