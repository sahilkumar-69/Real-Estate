import { Link } from "react-router-dom";

const HeroSectionListProperty = () => {
  return (
    <section className="relative mt-13 px-10 w-full h-[85vh] md:h-[80vh] overflow-hidden">
      {/* Fullscreen background image */}
      <img
        src="https://t3.ftcdn.net/jpg/10/04/19/62/360_F_1004196225_q7gtiEbZD2OQEDFsqL82Kt5t104sa82G.jpg"
        alt="Trophies"
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
      />
      <div className="absolute inset-0 bg-black/30 bg-opacity-40 z-0"></div>

      <div className="relative z-20 h-full w-full flex flex-col justify-center text-white">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl  md:text-5xl font-bold leading-tight max-w-5xl">
          List your property in best price all over India with Nexus real estate
        </h1>

        {/* Subheading */}
        <p className="text-lg my-4">
          With the most awarded Real Estate Agency in the India
        </p>

        {/* CTA */}
        <Link className="cursor-default">
          <button
            onClick={() => {
              scrollTo({
                behavior: "smooth",
                top: 1000,
                left: 0,
              });
            }}
            className="bg-orange-600  hover:bg-orange-700 text-white px-6 py-3 rounded-md text-base transition shadow-md"
          >
            List Your Property →
          </button>
        </Link>

        {/* Ratings */}
        <div className="flex items-center space-x-6 mt-6 text-sm">
          <div className="flex items-center space-x-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/640px-Gold_Star.svg.png"
              alt="Google"
              className="w-6 h-6"
            />
            <span>★ ★ ★ ★ ★ 4.8</span>
          </div>
          <div className="flex items-center space-x-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/640px-Gold_Star.svg.png"
              alt="Trustpilot"
              className="w-6 h-6"
            />
            <span>TrustPilot 4.9/5</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionListProperty;
