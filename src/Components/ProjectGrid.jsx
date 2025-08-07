import { properties } from "../Data";
import PropertyListingCard from "../Components/Cards/PropertyListingCard";
import { useContext } from "react";
import BlogContext from "../context/Property";
import { PulseLoader } from "react-spinners";

const ProjectGrid = () => {
  const { project, loading } = useContext(BlogContext);

  if (loading)
    return (
      <div className="text-center flex items-center justify-center h-screen mt-20 text-lg">
        <PulseLoader size={25} />
      </div>
    );

    console.log(project)

  return (
    <div className="bg-gray-100 min-h-screen   px-10 p-4">
      <div className="max-w-7xl   mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Main Cards Section */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* 4 square cards */}
          {project.data.map((property, i) => (
            <PropertyListingCard fr={"project"} key={i} property={property} />
          ))}
        </div>

        {/* Sidebar Section */}
        <div className="relative   ">
          <div className="bg-white sticky  top-18 rounded-xl shadow p-6 flex items-center justify-center text-gray-700 font-semibold">
            <PropertyListingCard fr={"static"} key={"2"} property={properties[0]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
