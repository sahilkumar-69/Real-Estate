const Started = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-[#002147] mb-6">
            It All Started in <span className="text-[#002147]">2008.</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Nexus Real Estate was founded with a vision to revolutionize
            Dubai’s real estate market. As one of the best real estate brokers
            in Dubai, our success is built on the trust our real estate agents
            have earned from our clients and the region’s top-tier property
            developers.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Specializing in a comprehensive range of real estate services,
            Nexus Real Estate continues to set benchmarks in innovation,
            customer service, and market expertise, ensuring our clients receive
            the best opportunities in Dubai’s dynamic property market.
          </p>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="src/assets/meetteam/trophy.jpg" // Replace with your image path
            alt="Trophies & Awards"
            className="w-full rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Started;
