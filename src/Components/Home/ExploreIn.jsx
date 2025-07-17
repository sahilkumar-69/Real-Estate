 
import PropertyList from "./PropertyList";

const ExploreIn = () => {
  return (
    <div className="px-6 md:px-20 py-16">
      <h2 className="text-2xltext-3xl md:text-4xl font-bold text-slate-800 mb-12 max-w-4xl">
        Explore Properties in India .
      </h2>
      <div className="flex  items-center justify-between">
        <div className="flex gap-4 items-center justify-between">
          <button className="   outline-2 outline-[#090040] px-3 py-2 font-semibold rounded-md hover:bg-[#090040] hover:text-white border-black">
            For Sale
          </button>
          <button className="border-[1px] px-3 py-2 font-semibold rounded-md hover:bg-[#090040] hover:text-white border-black">
            For Rent
          </button>
          <button className="border-[1px] px-3 py-2 font-semibold rounded-md hover:bg-[#090040] hover:text-white border-black">
            Off Plan
          </button>
        </div>
        <div>
          <button className="border-[1px] px-3 py-2 bg-[#FF9B17] font-semibold rounded-md hover:bg-[#EA7300] hover:border-[#EA7300] hover:text-white border-[#FF9B17] ">
            View More
          </button>
        </div>
      </div>

      <PropertyList />
    </div>
  );
};

export default ExploreIn;
