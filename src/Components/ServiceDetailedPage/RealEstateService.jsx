// RealEstateServices.jsx
import ServiceCard from "./ServiceCard";

const RealEstateServices = ({data}) => {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0f172a] mb-8">
          Our Real Estate Services in India
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealEstateServices;
