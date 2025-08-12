import { FiMapPin } from "react-icons/fi";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { PiBedLight } from "react-icons/pi";

const ProjectCard = ({ property, fr, desc }) => {
  const navigate = useNavigate();

  return (
    <div
      key={property._id}
      className="rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
    >
      {/* Image Carousel */}
      <div className="relative z-20">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className="w-full overflow-hidden h-80"
        >
          {property.images?.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={property.title}
                className="w-full h-80  object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Project Status Badge */}
        {property.projectStatus && (
          <div
            className={`absolute z-50 top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white ${
              property.projectStatus === "upcoming"
                ? "bg-orange-500"
                : "bg-green-500"
            }`}
          >
            {property.projectStatus}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800 mb-1">
          {property.title}
        </h3>
        {property.owner && (
          <p className="text-sm mb-1">
            By{" "}
            <span className="text-gray-700 font-semibold">
              {property.developer || property.owner}
            </span>
          </p>
        )}

        {/* Price */}
        <div className="text-2xl font-bold text-blue-600 mb-4">
          {property.price ? (
            <p className="text-lg font-semibold text-slate-800">
              <span className="text-md font-thin">Starting Price </span>
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 0,
              }).format(property.price)}
            </p>
          ) : (
            <p className="text-lg font-semibold text-slate-800">
              <span className="text-md font-thin">Price Range </span>
              {property.priceRange}
            </p>
          )}
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-600 my-2">
          <FiMapPin className="mr-1" size={14} />
          <span className="text-sm">{property.location}</span>
        </div>

        {/* Description */}
        {desc && property.description && (
          <p className="text-md my-4 text-[#595959]">
            {property.description.slice(0, 150)}...
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

        {/* Beds/Baths/Area for ready properties */}
        {property.beds || property.area ? (
          <div className="flex justify-between gap-2 leading-4 text-gray-700 border-t border-b border-gray-100 py-3 mb-4">
            <div className="flex items-center">
              <PiBedLight className="mr-2 text-gray-500" />
              <span>{property.beds || 0} </span>
            </div>
          </div>
        ) : (
          // Completion date for ongoing/upcoming
          <div className="border-t border-b border-gray-100 py-3 mb-4 text-sm text-gray-700">
            <p>
              Launch Date:{" "}
              <span className="font-medium">{property.launchDate}</span>
            </p>
            <p>
              Completion:{" "}
              <span className="font-medium">{property.completionDate}</span>
            </p>
            {property.reraId && (
              <p>
                RERA ID: <span className="font-medium">{property.reraId}</span>
              </p>
            )}
          </div>
        )}

        {/* View Details Button */}
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

export default ProjectCard;
