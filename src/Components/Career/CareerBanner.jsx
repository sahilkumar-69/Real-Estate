
const CareerBanner = () => {
  return (
    <div
      className="bg-cover bg-center overflow-hidden text-center h-70 w-[90svw]  py-6 px-6 md:px-12 rounded-xl text-white"
      style={{
        backgroundImage: "url('/src/assets/CareerImages/bannerimg.jpg')", // Replace with your image path
      }}
    >
      <div className="max-w-5xl mx-auto bg-black/40 p-8 rounded-lg">
        <p className="text-sm uppercase font-semibold text-blue-400 mb-2">
          Staff Thoughts
        </p>
        <p className="text-xl md:text-2xl font-light leading-relaxed">
          “Working at Nexus Real Estate has been a rewarding experience filled
          with learning, collaboration, and impact. The team's support and
          growth mindset make it an exceptional place to thrive professionally.”
        </p>

        <div className="mt-6">
          <p className="font-bold text-lg">Riya Kapoor</p>
          <p className="text-sm text-gray-300">Talent Acquisition Specialist</p>
        </div>
      </div>
    </div>
  );
};

export default CareerBanner;
