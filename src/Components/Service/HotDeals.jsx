import { Link } from "react-router-dom";

const HotDealsBanner = () => {
  const img =
    "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg";

  return (
    <div className="max-w-7xl mx-auto py-12">
      <div
        style={{
          backgroundImage: `url(${img})`,
        }}
        className="relative rounded-xl bg-cover bg-no-repeat bg-center overflow-hidden p-8 md:p-10 lg:p-12"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-3xl md:text-4xl text-white font-bold mb-4">
            Explore our hot deals!
          </h1>

          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            Connect with our seasoned agents to find out more about our services
            and exclusive offers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to={"/download-brochure"}
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-md transition"
            >
              Download the Digital Edition
            </Link>
            <Link
              to={"/buy/properties-for-sale"}
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-md transition"
            >
              Explore our properties
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDealsBanner;
