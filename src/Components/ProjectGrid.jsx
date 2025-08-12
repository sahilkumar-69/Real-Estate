import { properties } from "../Data";
import PropertyListingCard from "../Components/Cards/PropertyListingCard";
import { useContext } from "react";
import BlogContext from "../context/Property";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { PulseLoader } from "react-spinners";
import ProjectCard from "./Cards/ProjectCard";
// import { SwiperSlide } from "swiper/react";

const ProjectGrid = () => {
  const { project, loading } = useContext(BlogContext);

  if (loading)
    return (
      <div className="text-center flex items-center justify-center h-screen mt-20 text-lg">
        <PulseLoader size={25} />
      </div>
    );

  // console.log(project);

  return (
    <div className="bg-gray-100 min-h-screen px-4 md:px-6 lg:px-10 p-4">
      <div className="max-w-7xl   mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Main Cards Section */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* 4 square cards */}
          {project.data.map((property, i) => (
            <ProjectCard
              desc={true}
              fr={"project"}
              key={i}
              property={property}
            />
          ))}
        </div>

        {/* Sidebar Section */}
        <div className="relative">
          <div className="bg-white sticky overflow-y-scroll h-[88vh]  top-18 rounded-xl shadow p-1 flex items-center justify-center text-gray-700 font-semibold">
            <Swiper
              modules={[Autoplay]}
              // pagination={{ clickable: true }}
              autoplay={{ delay: 8000, disableOnInteraction: false }}
              loop="true"
              // className="w-full overflow-hidden h-80"
            >
              {properties.map((prop, idx) => (
                <SwiperSlide key={idx}>
                  <ProjectCard
                    desc={false}
                    fr={"upcomming"}
                    key={idx}
                    property={prop}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
