 
import PropertyOptButton from "../ButtonComponents/PropertyOptButton";
import PropertyList from "./PropertyList";

const ExploreIn = ({ Title, Enablebtn }) => {
  const buttonTitle = ["For Sale", "For Rent", "Off Plan"];
  return (
    <div className="py-10">
      <h2
        className={`text-2xl   md:text-4xl font-bold text-slate-800 ${
          Enablebtn && "mb-10"
        }  max-w-4xl`}
      >
        Explore Properties in India
      </h2>
      {Enablebtn && (
        <div className="flex mb-10 items-center justify-between">
          <div className="flex gap-4 items-center justify-between">
            {buttonTitle.map((Title, index) => (
              <PropertyOptButton key={index} Title={Title} />
            ))}
          </div>
          <div>
            <button className="border-[1px] px-3 py-2 bg-[#FF9B17] font-semibold rounded-md hover:bg-[#EA7300] hover:border-[#EA7300] hover:text-white border-[#FF9B17] ">
              View More
            </button>
          </div>
        </div>
      )}

      <PropertyList Cardtype={"Property"} />
    </div>
  );
};

export default ExploreIn;
