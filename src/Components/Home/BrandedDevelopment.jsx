export default function BrandedDevelopments() {
  return (
    <section className="bg-[#F3F8FB]   px-4  py-16   rounded-xl">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Text Content */}
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2C5C] leading-tight mb-6">
            Nexus's Top Branded <br /> Developments in the India Coffee <br />{" "}
            Table Book
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            The first-ever dedicated platform for branded developments in the
            India. Discover an exclusive collection of the finest properties in
            Nexus's branded projects coffee table book.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-md transition">
            Download the Digital Edition
          </button>
        </div>

        {/* Image */}
        <div className="mt-8 lg:mt-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScVcesfTgRVrBj8zXs8QJrX9KMIEnNNdsWmg&s" // replace with your actual path
            alt="Coffee Table Book"
            className="w-72 md:w-96 rounded shadow-lg rotate-[10deg]   hover:rotate-0 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
