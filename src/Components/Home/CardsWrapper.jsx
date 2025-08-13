
import { motion } from "motion/react";
{
  /* <PiHandshakeLight /> */
}
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { PiHandshakeLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { PiBuildingOfficeThin } from "react-icons/pi";
import { PiDownloadSimpleLight } from "react-icons/pi";

const solutions = [
  {
    title: "Connect with a Specialist",
    description:
      "Access our dedicated team of over 400+ expert agents ready to assist you.",
    icon: CiUser,
    to: "contact-form",
  },
  {
    title: "List Your Property",
    description:
      "Achieve optimal value by listing your property with our expert marketing strategies.",
    icon: PiHandshakeLight,
    to: "/list-property",
  },
  {
    title: "Download Report",
    description:
      "Download the latest Comprehensive India Real Estate Market Report Q1 2025",
    icon: PiDownloadSimpleLight,
    to: "/download-brochure",
  },
  {
    title: "Explore India Projects",
    description:
      "Browse and find your ideal property from our extensive portfolio of India projects.",
    icon: PiBuildingOfficeThin,
    to: "/projects",
  },
];

export default function RealEstateSolutions() {
  const scrollToTarget = () => {
    const target = document.getElementById("contact-form");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="   py-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 max-w-4xl">
        India real estate solutions focused around excellent customer service.
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {solutions.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              initial={{
                x: -2000,
              }}
              animate={{
                x: 0,
              }}
              key={index}
              className="rounded-xl border border-gray-200 p-6 hover:shadow-xl transition duration-300 bg-white"
            >
              <IconComponent className="h-10 w-10 mb-4 text-gray-700" />
              {item.to == "contact-form" ? (
                <Link
                  onClick={scrollToTarget}
                  className="text-lg hover:text-[#F68537] cursor-pointer hover:underline font-semibold text-slate-800 flex items-center gap-2"
                >
                  {item.title} <FaArrowUpRightFromSquare size={12} />
                </Link>
              ) : (
                <Link
                  to={item.to}
                  className="text-lg hover:text-[#F68537] cursor-pointer hover:underline font-semibold text-slate-800 flex items-center gap-2"
                >
                  {item.title} <FaArrowUpRightFromSquare size={12} />
                </Link>
              )}
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

// export default CardWrapper;
