const RentAndBuyHeroSection = ({ PageFor, description }) => {
  return (
    <div className="relative bg-blue-900 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Properties For {PageFor}
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl">{description}</p>
      </div>
    </div>
  );
};

export default RentAndBuyHeroSection;
