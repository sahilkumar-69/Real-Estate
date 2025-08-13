import { FiMapPin, FiHeart, FiShare2 } from "react-icons/fi";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const PropertyListingCard = ({ property, fr, desc }) => {
  const navigate = useNavigate();

  return (
    <div
      key={property.id}
      className="  rounded-lg overflow-hidden z-10 shadow-lg   hover:shadow-2xl transition duration-300"
    >
      <div className="relative  z-20 ">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop="true"
          className="w-full overflow-hidden h-80"
        >
          {property.images.map((img, idx) => (
            <SwiperSlide key={property.idx}>
              <img
                src={img}
                alt={property.title}
                className="w-full  h-80 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="p-5">
        <h3 className="text-lg font- font-bold text-gray-800 mb-1">
          {property.title.slice(0,30)}...
        </h3>
        <p className="text-sm">
          By{" "}
          <span className="text-md text-gray-700 font-semibold">
            {property.owner}{" "}
          </span>{" "}
        </p>

        <div className="text-2xl font-bold text-blue-600 mb-4">
          <p className="text-lg font-semibold text-slate-800">
            <span className="text-md font-thin">Starting Price </span>
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 0,
            }).format(property.price)}
          </p>
        </div>

        <div className="flex items-center text-gray-600 my-2">
          <FiMapPin className="mr-1" size={14} />
          <span className="text-sm">{property.location}</span>
        </div>

        {desc && (
          <p className="text-md my-8 text-[#595959] font-stretch-ultra-expanded">
            {property.description.slice(0, 150)}...{" "}
            <span
              onClick={() => {
                navigate(`/property-details/${property._id + " " + fr}`);
              }}
              className="text-orange-500 cursor-pointer underline"
            >
              more
            </span>
          </p>
        )}

        <div className="flex justify-between gap-2 leading-4 text-gray-700 border-t border-b border-gray-100 py-3 mb-4">
          <div className="flex items-center">
            <FaBed className="mr-2 text-gray-500" />
            <span>
              {property.beds == 0 ? property.bathroom : property.beds} Beds
            </span>
          </div>
          <div className="flex items-center">
            <FaBath className="mr-2 text-gray-500" />
            <span>{property.bathroom || property.beds} Baths</span>
          </div>
          <div className="flex items-center">
            <FaRulerCombined className="mr-2 text-gray-500" />
            <span>{property.area || 1200} sq.ft</span>
          </div>
        </div>

        <button
          onClick={() => {
            navigate(`/property-details/${property._id + " " + fr}`);
          }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition duration-300"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyListingCard;
