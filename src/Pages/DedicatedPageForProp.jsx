import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import DoubleSwiper from "../Components/DoubleSwiper";
import { propertyData } from "../Data.js";

import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import { PulseLoader } from "react-spinners";

const PropertyDetails = () => {
  const { id } = useParams();

  const slicedId = id.split(" ")[0];
  const postfix = id.split(" ")[1];

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  let response;

  useEffect(() => {
    const fetchPropertyById = async () => {
      try {
        if (postfix == "rent") {
          response = await axios.get(
            `https://realestatebackend-2-v5e5.onrender.com/api/allProperty/${slicedId}`
          );
          setProperty(response.data.data);
        } else if (postfix == "sale") {
          response = await axios.get(
            `https://realestatebackend-2-v5e5.onrender.com/api/all-buyProperty/${slicedId}`
          );
          setProperty(response.data.data);
        } else if (postfix == "static") {
          response = propertyData.filter((items) => items.id == slicedId);
          setProperty(response[0]);
        } else if (postfix == "project") {
          response = await axios.get(
            `https://realestatebackend-2-v5e5.onrender.com/API/all-ProjectData/${slicedId}`
          );
          setProperty(response.data.data);

        }
      } catch (error) {
        console.error("Error fetching property by ID:", error);
      } finally {
        setLoading(false);
      }
    };

    scrollTo(0, 0);

    fetchPropertyById();
  }, [id]);

  if (loading)
    return (
      <div className="text-center flex items-center justify-center h-screen mt-20 text-lg">
        <PulseLoader size={25} />
      </div>
    );
  if (!property)
    return (
      <div className="text-center h-[80svh] flex items-center justify-center mt-20 text-red-600">
        Property not found 🙄
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-20 pt-20 pb-16">
      {/* Image Carousel */}
      <div className="mb-10">
        <DoubleSwiper images={property.images} />
      </div>

      {/* Title and Location */}
      <div className="mb-6 border-b pb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {property.title}
        </h1>
        <p className="text-gray-500 text-sm">📍 {property.location}</p>
      </div>

      {/* Property Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2 space-y-4">
          {/* Tags Section */}
          <div className="flex flex-wrap gap-4 text-gray-700 text-sm">
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md">
              <FaBed /> {property.beds == 0 ? property.bathroom : property.beds}{" "}
              Beds
            </div>
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md">
              <FaBath />
              {property.bathroom == 0  ? property.beds : property.bathroom} Baths
            </div>  
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md">
              <FaRulerCombined /> {property.area} sqft
            </div>
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md">
              🏷️ {property.status}
            </div>
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md">
              🏠 {property.type}
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl font-semibold mb-2 mt-4">
              Property Description
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Gallery */}
          {property.images && property.images.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold mt-8 mb-4">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {property.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Property-${index}`}
                    className="w-full h-56 object-cover rounded-xl shadow-sm hover:scale-[1.02] transition-transform"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Info */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm space-y-4">
          <div className="text-2xl font-bold text-blue-700">
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 0,
            }).format(property.price)}
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold text-gray-700 mb-1">
              Owner Information
            </h4>
            <p className="flex items-center gap-2 text-gray-600">
              <FaUser /> {property.owner || "Nexus "}
            </p>
            <p className="flex items-center gap-2 text-gray-600">
              <FaPhone /> {property.phoneNumber || "+91 9876543210"}
            </p>
          </div>

          <Link
            className="w-full block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            to={`tel:${property.phoneNumber}`}
          >
            Contact Owner
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
