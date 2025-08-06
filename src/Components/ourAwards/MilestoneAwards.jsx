 


const MilestoneAwards = ({year,awards,title,desc}) => {
  return (
    <section className="px-4 py-16 bg-white text-center">
      <h3 className="text-4xl font-bold text-orange-500 mb-2">{year}</h3>
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#002653]">
        {title}
      </h2>
      <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
       {desc}
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {awards.map((award, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-md p-6 pt-12 text-[#002653]"
          >
            {/* Circle Number */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-500 text-white text-lg font-bold shadow">
                {award.number}
              </div>
            </div>
            <p className="font-semibold mt-4">{award.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MilestoneAwards;
