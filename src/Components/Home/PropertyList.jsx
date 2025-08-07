// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { useRef, useEffect, useState } from "react";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import PropertySwiperCard from "./PropertySwiperCard"; // keep your card separate for cleanliness

// import "swiper/css";
// import "swiper/css/navigation";
// import { PropertySwiperCard } from "./PropertySwiperCard";
// import { propertyData } from "../../Data";
// import AreaCard from "../Cards/AreaCard";

// export default function PropertyList({ PropertyType, data }) {
//   const navigationPrevRef = useRef(null);
//   const navigationNextRef = useRef(null);
//   const [swiperInstance, setSwiperInstance] = useState(null);

//   let data1;
//   //  const renderCard = (property) => {
//   switch (PropertyType) {
//     case "developers":
//       data1 = data;
//       break;
//     // case "rent":
//     //   data1 = propertiesForRent;
//     default:
//       data1 = propertyData;
//   }
//   // };

//   useEffect(() => {
//     if (
//       swiperInstance &&
//       navigationPrevRef.current &&
//       navigationNextRef.current
//     ) {
//       swiperInstance.params.navigation.prevEl = navigationPrevRef.current;
//       swiperInstance.params.navigation.nextEl = navigationNextRef.current;
//       swiperInstance.navigation.init();
//       swiperInstance.navigation.update();
//     }
//   }, [swiperInstance]);

//   // console.log(data)

//   return (
//     <section className="py-12 rounded-2xl  relative">
//       <div className="container   mx-auto px-4 relative">
//         {/* Nav Buttons */}
//         <button
//           ref={navigationPrevRef}
//           className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white shadow-lg text-gray-700 rounded-full hover:bg-gray-100"
//         >
//           <FiChevronLeft size={22} />
//         </button>
//         <button
//           ref={navigationNextRef}
//           className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white shadow-lg text-gray-700 rounded-full hover:bg-gray-100"
//         >
//           <FiChevronRight size={22} />
//         </button>

//         {/* Swiper */}
//         <Swiper
//           onSwiper={setSwiperInstance}
//           modules={[Navigation]}
//           breakpoints={{
//             640: { slidesPerView: 1, spaceBetween: 20 },
//             768: { slidesPerView: 2, spaceBetween: 20 },
//             1024: { slidesPerView: 3, spaceBetween: 24 },
//           }}
//         >
//           {data1 &&
//             data1.map((property, index) => (
//               <SwiperSlide key={index}>
//                 {PropertyType == "developers" ? (
//                   <AreaCard key={index} {...property} path="developers" />
//                 ) : (
//                   <PropertySwiperCard fr={"static"} data={property} />
//                 )}
//               </SwiperSlide>
//             ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";

export default function PropertyList({
  data = [],
  CardComponent,
  cardProps = {},
  swiperBreakpoints = {
    640: { slidesPerView: 1, spaceBetween: 20 },
    768: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 24 },
  },
}) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

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

  return (
    <section className="py-12 rounded-2xl relative">
      <div className="container mx-auto px-4 relative">
        {/* Navigation Buttons */}
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

        {/* Swiper */}
        <Swiper
          onSwiper={setSwiperInstance}
          modules={[Navigation]}
          breakpoints={swiperBreakpoints}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <CardComponent {...item} {...cardProps} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
