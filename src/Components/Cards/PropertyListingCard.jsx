import { FiMapPin, FiHeart, FiShare2 } from "react-icons/fi";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const PropertyListingCard = ({ property, fr }) => {
  const navigate = useNavigate();

  return (
    <div
      key={property.id}
      className="bg-white rounded-lg overflow-hidden  hover:shadow-lg transition duration-300"
    >
      <div className="relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop="true"
          className="w-full overflow-hidden h-64"
        >
          {property.images.map((img, idx) => (
            <SwiperSlide key={property.idx}>
              <img
                src={img}
                alt={property.title}
                className="w-full h-64 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {property.status === "off-plan" && (
          <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            Off-Plan
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-1">
          {property.title.slice(0, 24)}...
        </h3>
        <div className="flex items-center text-gray-600 mb-3">
          <FiMapPin className="mr-1" size={14} />
          <span className="text-sm">{property.location}</span>
        </div>
        <div className="text-2xl font-bold text-blue-600 mb-4">
          {property.price.toString().slice(0, 2)}
          {"."}
          {property.price.toString().slice(2, 4)} Lakhs
        </div>

        <div className="flex justify-between gap-2 leading-4 text-gray-700 border-t border-b border-gray-100 py-3 mb-4">
          <div className="flex items-center">
            <FaBed className="mr-2 text-gray-500" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center">
            <FaBath className="mr-2 text-gray-500" />
            <span>{property.beds} Baths</span>
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
