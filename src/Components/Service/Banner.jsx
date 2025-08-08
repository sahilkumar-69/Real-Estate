import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="   py-12   p-6    ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left - Image */}

        {/* Right - Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Experience a Career That Builds Communities
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            At Nexus Real Estate, we don’t just develop properties — we develop
            people. Our culture thrives on integrity, innovation, and impact.
            Whether you're an experienced agent, a fresh graduate, or a
            visionary leader, your journey here is supported by a team that
            values growth, mentorship, and collaboration. With every home we
            sell, every neighborhood we revitalize, and every client we serve —
            we’re shaping the future of real estate, together.
          </p>
          <Link
            to={"/guide to buying"}
            className="px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition duration-300"
          >
            Buy property with Nexus Guide
          </Link>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src="public/assets/service_banner.jpg"
            alt="Dream House"
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
