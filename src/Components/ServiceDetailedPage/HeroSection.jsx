
import { Link } from "react-router-dom";

const HeroSectionForService = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
  buttonLink = "#",
}) => {
  return (
    <section
      className="relative w-full   h-[80vh] mt-15 bg-cover bg-center pb-10 flex items-end-safe"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-white">
        {/* Breadcrumbs */}

        {/* Heading & Text */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg max-w-xl mb-6">{subtitle}</p>

        {/* Button */}
        {buttonText && (
          <Link
            to={buttonLink}
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded transition duration-300"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
};

export default HeroSectionForService;
