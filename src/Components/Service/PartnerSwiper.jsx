import { FaBuilding, FaHouseUser } from "react-icons/fa";
import { GiHouseKeys } from "react-icons/gi";
import { FaHouseChimney } from "react-icons/fa6";
import { RiBuilding2Fill } from "react-icons/ri";

import { Swiper, SwiperSlide } from "swiper/react";
import { GiProfit } from "react-icons/gi";
import { BiSolidLandscape } from "react-icons/bi";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const partners = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTllwb9iH24PlwcXfH9BefIZRR-G9fg45PboQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWEX_GJAAEYYwwXGNyP4VpWwjXKOcfAOQmwA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjjPSwU9bGOk1nBuy2ynVNBC6W6ScgDOOxYabAK2cZSBqOLyKlNDRIPRCMwzWtz8yxpY0&usqp=CAU",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Max_Estates_logo.svg/512px-Max_Estates_logo.svg.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1wrzHgd5hycmyqaw5Ugh6alpVDbmOgXB2Gg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1QJJOB1Y7h4dWqhfn1aGXY11dj7RAlVlLVg71HVsnHrYLG7xY95CZEQGNVSIOxK3ZthQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbUzCyp9rko4Ux-avMNO76EgRFr1paATWuIA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_yvBbyE4ydw5rsr-PUzz1W-1I9fZDAiMEQQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeAnD7RYRuMkcT43JuyUp8-fI7UeNJh0Kq0w&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLvglac3b5w4R-d9ghj4HxL9ULuSVK79mFSIougYeM_9DXFLfhZ4rnKo_GWsArzRlnUjY&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUB2Sms74C7R2e7uzeQEFT1OIePf9EDl_Hig&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJTd0QDKuc94MoEEgW9Yc8Zgk97f-ygExnng&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3SaAreUUDwsOs2AE7L-aha5faz_4xu_SP_w&s",
];

const PartnerSwiper = () => {
  return (
    <div className="w-full   bg-blue-50 pt-6">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={2000}
        slidesPerView={5}
        breakpoints={{
          640: { slidesPerView: 4 },
          768: { slidesPerView: 6 },
          1024: { slidesPerView: 8 },
        }}
        spaceBetween={30}
       
      >
        {partners.map((src, index) => (
          <SwiperSlide className=" " key={index}>
            <div className="    ">
              <img
                src={src}
                className="text-5xl md:text-6xl w-full h-full  transition duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnerSwiper;
