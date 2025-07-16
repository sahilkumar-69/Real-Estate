import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiBedBold } from "react-icons/pi";

const PropertySwiperCard = ({ data }) => {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow hover:shadow-lg transition duration-300  ">
      {/* Swiper Image Slider */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          navigation
          className="w-full overflow-hidden h-60"
        >
          {data.images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={data.title}
                className="w-full h-60 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {data.tags.map((tag, i) => (
            <span
              key={i}
              className={`text-xs px-2 py-2 rounded font-medium ${
                i === 0 ? "bg-gray-800/100 text-white" : "bg-white text-blue-800"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Year Badge */}
        <span className="absolute bottom-3 right-3 bg-gradient-to-r from-[#c66e32] to-[#e2a968] text-white text-sm font-semibold px-3 py-1 rounded">
          {data.year}
        </span>
      </div>

      {/* Details */}
      <div className="p-4   space-y-1">
        <h3 className="text-lg font-bold text-[#0A2C5C]">{data.title}</h3>
        <p className="text-sm text-gray-600">
          by{" "}
          <span className="font-semibold text-[#0A2C5C]">{data.developer}</span>
        </p>
        <p className="text-sm text-gray-700">
          Starting Price{" "}
          <span className="text-orange-600 text-lg font-semibold">
            {data.price}
          </span>
        </p>
        <div className="flex gap-3 text-sm text-gray-500 items-center mt-3">
          <HiOutlineLocationMarker />
          {data.location}
          <div className="flex gap-3 text-sm text-gray-500 items-center">
            <PiBedBold /> {data.beds.join(", ")}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 p-4 gap-3  ">
        <button className="flex callbutton items-center justify-center gap-2 text-[#ff8243] bg-gray-100 rounded py-3 font-semibold">
          <FaPhoneAlt /> <p className="target  text-[#0C1844] ">Call</p>
        </button>
        <button className="flex items-center wabutton justify-center gap-2 text-green-600 bg-gray-100 rounded py-2 font-semibold">
          <FaWhatsapp /> <p className=" target2  text-[#0C1844]">WhatsApp</p>
        </button>
      </div>
    </div>
  );
};

export default PropertySwiperCard;
