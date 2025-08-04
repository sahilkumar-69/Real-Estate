// src/pages/LearnMore.jsx

const LearnMore = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        About Our Services
      </h1>

      <p className="text-gray-600 text-lg leading-relaxed mb-10">
        At DreamHome Real Estate, we are dedicated to making your home journey
        seamless, safe, and successful. Whether you're buying your first home,
        selling a property, or looking for premium rentals — we’ve got you
        covered. Our team brings unmatched market knowledge and personalized
        service to every client.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-orange-500">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            🏡 Buy Property
          </h2>
          <p className="text-gray-600 text-sm">
            Explore verified listings from top communities. From affordable to
            luxury, find a home that fits your lifestyle.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-green-500">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            📈 Sell Property
          </h2>
          <p className="text-gray-600 text-sm">
            Get your property seen by thousands. Our agents use the latest
            digital marketing tools to attract serious buyers.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-blue-500">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            🏠 Rent Property
          </h2>
          <p className="text-gray-600 text-sm">
            Whether you're a landlord or a tenant, we simplify the rental
            process with transparency and speed.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Why Choose Us?
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          With years of experience in the India market, our team is driven by
          trust, technology, and transparency. We offer 24/7 support,
          personalized guidance, and access to exclusive listings.
        </p>
      </div>

      <div className="mt-12 text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Contact Our Team
        </button>
      </div>
    </div>
  );
};

export default LearnMore;
