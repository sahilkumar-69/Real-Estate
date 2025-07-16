// import PropertySwiperCard from "../SliderCard";
// import { Swiper, SwiperSlide } from "swiper/react";

// const propertyData = [
//   {
//     title: "Rosehill",
//     developer: "Emaar Properties",
//     price: "AED 1.60M",
//     location: "Dubai Hills Estate",
//     beds: [1, 2, 3],
//     tags: ["Apartment", "Future Launch"],
//     year: 2029,
//     images: [
//       "src/assets/swiper.jpg",
//       "src/assets/swiper.jpg",
//       "src/assets/swiper.jpg",
//       "src/assets/swiper.jpg",
//       "src/assets/swiper.jpg",
//     ],
//   },
//   {
//     title: "Bay Grove Residences",
//     developer: "Nakheel",
//     price: "AED 2.00M",
//     location: "Dubai Islands",
//     beds: [1, 2, 3, 4],
//     tags: ["Apartment, Penthouse", "New Phase"],
//     year: 2029,
//     images: [
//       "src/assets/swiper.jpg",
//       "src/assets/swiper.jpg",
//       "src/assets/swiper.jpg",
//       "src/assets/swiper.jpg",
//       "src/assets/swiper.jpg",
//     ],
//   },
//   {
//     title: "Crestlane",
//     developer: "Meraas",
//     price: "AED 2.62M",
//     location: "City Walk",
//     beds: [1, 2, 3, 4, 5],
//     tags: ["Apartment, Penthouse, Duplex"],
//     year: 2028,
//     images: [
//       "src/assets/swiper.jpg",
//       "src/assets/swiper.jpg",
//       "src/assets/swiper.jpg",
//       "src/assets/swiper.jpg",
//       "src/assets/swiper.jpg",
//     ],
//   },
//   {
//     title: "Rosehill",
//     developer: "Emaar Properties",
//     price: "AED 1.60M",
//     location: "Dubai Hills Estate",
//     beds: [1, 2, 3],
//     tags: ["Apartment", "Future Launch"],
//     year: 2029,
//     images: [
//       "src/assets/swiper.jpg",
//       "src/assets/swiper.jpg",
//       "src/assets/swiper.jpg",
//       "src/assets/swiper.jpg",
//       "src/assets/swiper.jpg",
//     ],
//   },
//   {
//     title: "Bay Grove Residences",
//     developer: "Nakheel",
//     price: "AED 2.00M",
//     location: "Dubai Islands",
//     beds: [1, 2, 3, 4],
//     tags: ["Apartment, Penthouse", "New Phase"],
//     year: 2029,
//     images: [
//       "src/assets/swiper.jpg",
//       "src/assets/swiper.jpg",
//       "src/assets/swiper.jpg",
//       "src/assets/swiper.jpg",
//       "src/assets/swiper.jpg",
//     ],
//   },
//   {
//     title: "Crestlane",
//     developer: "Meraas",
//     price: "AED 2.62M",
//     location: "City Walk",
//     beds: [1, 2, 3, 4, 5],
//     tags: ["Apartment, Penthouse, Duplex"],
//     year: 2028,
//     images: [
//       "src/assets/swiper.jpg",
//       "src/assets/swiper.jpg",
//       "src/assets/swiper.jpg",
//       "src/assets/swiper.jpg",
//       "src/assets/swiper.jpg",
//     ],
//   },
// ];

// export default function PropertyList() {
//   return (
//     <section className=" my-3   py-3 bg-white">
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
//         {propertyData.map((property, index) => (
//           <PropertySwiperCard key={index} data={property} />
//         ))}
//       </div>
//     </section>
//   );
// }


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiBedBold } from "react-icons/pi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const propertyData = [
  {
    title: "Crestlane",
    developer: "Meraas",
    price: "AED 2.62M",
    location: "City Walk",
    beds: ["1", "2", "3", "4", "5"],
    tags: ["Apartment", "Ponthouse", "Duelux"],
    year: "2024",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    title: "Bayfront Marina Residences",
    developer: "Sobha Realty",
    price: "AED 1.33M",
    location: "Sobha Siniya Island",
    beds: ["1", "2", "3"],
    tags: ["Apartment"],
    year: "2023",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    title: "Binghamton Circle",
    developer: "Binghamton",
    price: "AED 675K",
    location: "Jumeirah Village Circle (JVC)",
    beds: ["1", "2", "3"],
    tags: ["Apartment", "Studio", "Offices"],
    year: "2025",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    title: "Crestlane",
    developer: "Meraas",
    price: "AED 2.62M",
    location: "City Walk",
    beds: ["1", "2", "3", "4", "5"],
    tags: ["Apartment", "Ponthouse", "Duelux"],
    year: "2024",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    title: "Bayfront Marina Residences",
    developer: "Sobha Realty",
    price: "AED 1.33M",
    location: "Sobha Siniya Island",
    beds: ["1", "2", "3"],
    tags: ["Apartment"],
    year: "2023",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    title: "Binghamton Circle",
    developer: "Binghamton",
    price: "AED 675K",
    location: "Jumeirah Village Circle (JVC)",
    beds: ["1", "2", "3"],
    tags: ["Apartment", "Studio", "Offices"],
    year: "2025",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
];

const PropertySwiperCard = ({ data }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-full flex flex-col">
      {/* Swiper Image Slider */}
      <div className="relative h-48">
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          navigation
          className="h-full w-full"
        >
          {data.images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={data.title}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {data.tags.map((tag, i) => (
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
          {data.year}
        </span>
      </div>

      {/* Details */}
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-bold text-[#0A2C5C]">{data.title}</h3>
        <p className="text-sm text-gray-600 mt-1">
          by <span className="font-semibold text-[#0A2C5C]">{data.developer}</span>
        </p>
        <p className="text-sm text-gray-700 mt-2">
          Starting Price{" "}
          <span className="text-orange-600 text-base font-semibold">
            {data.price}
          </span>
        </p>
        <div className="flex items-center mt-3 text-sm text-gray-500">
          <HiOutlineLocationMarker className="mr-1" />
          {data.location}
        </div>
        <div className="flex items-center mt-1 text-sm text-gray-500">
          <PiBedBold className="mr-1" />
          {data.beds.join(", ")}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-2 p-4 border-t border-gray-100">
        <button className="flex items-center justify-center gap-2 text-[#ff8243] bg-gray-100 rounded py-2 text-sm font-semibold hover:bg-gray-200 transition">
          <FaPhoneAlt /> <span className="text-[#0C1844]">Call</span>
        </button>
        <button className="flex items-center justify-center gap-2 text-green-600 bg-gray-100 rounded py-2 text-sm font-semibold hover:bg-gray-200 transition">
          <FaWhatsapp /> <span className="text-[#0C1844]">WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default function PropertyList() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Main Swiper for Cards */}
        <Swiper
          modules={[Navigation, FreeMode]}
          navigation
          freeMode={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {propertyData.map((property, index) => (
            <SwiperSlide key={index}>
              <PropertySwiperCard data={property} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}