import { useNavigate } from "react-router-dom";

const Professional = () => {
  const navigate = useNavigate()
  return (
    <section className="bg-[#d0eaf5]   py-12 px-4 p-6 md:p-10 lg:p-20 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left - Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/assets/pexels-weirdfish-2640604.jpg"
            alt="Dream House"
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>

        {/* Right - Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Helping You Reach Your Dream Home
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Discover a seamless journey to finding your perfect home. Whether
            you're buying, selling, or renting, our team of professionals is
            here to make your dream a reality with trust, transparency, and
            ease.
          </p>
          <button
            onClick={() => navigate("/Guide to buying")}
            className="px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Professional;
