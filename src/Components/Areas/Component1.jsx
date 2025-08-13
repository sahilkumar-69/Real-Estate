export default function TopCommunities({ searchTerm, setSearchTerm }) {
  return (
    <section className="bg-white    py-16 ">
      <div className="max-w-5xl   mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#0b2c50] mb-4">
          Top India Communities
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
          Discover vibrant living in India through our comprehensive area guide,
          offering insights into top communities, attractions, and things to do.
          Explore the best restaurants, must-visit places, and top-rated
          apartments, while uncovering the finest properties for the community
          that best fits you.
        </p>

        {/* Search & Filter */}
        <div className="flex w-full  flex-col     sm:flex-row justify-center items-center gap-4 mt-6">
          {/* Search Input */}
          <div className="relative w-full lg:w-[90%]">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-[80%] outline-none pl-7 p-3 border-2 rounded-4xl border-black text-lg"
              placeholder="Search Communities . . . "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
