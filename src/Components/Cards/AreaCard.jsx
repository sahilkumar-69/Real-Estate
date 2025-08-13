import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const AreaCard = ({
  _id,
  name = "Unnamed Area",
  image,
  logo,
  description,
  path,
  desc
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex shadow-md  flex-col rounded-md gap-2.5 overflow-hidden bg-white">
      <div
        className="h-[200px] w-full overflow-hidden"
        onClick={() => navigate(`/${path}/${_id}`)}
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={image || "/fallback-image.jpg"}
          alt={`${name} image`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name and Logo */}
      <div className="flex items-center justify-between p-3">
        <Link
          to={`/${path}/${_id}`}
          className="text-lg font-semibold text-slate-800 hover:text-[#F68537] flex items-center gap-2"
        >
          {name}
          <FaArrowUpRightFromSquare className="w-12" size={12} />
        </Link>

        {logo && (
          <img
            src={logo}
            alt={`${name} logo`}
            className="w-8 h-8 object-contain"
            loading="lazy"
          />
        )}
      </div>

      {/* Description */}
      {desc != "show" && <p className="text-sm text-gray-700 px-3 pb-4">
        {description?.length
          ? description.slice(0, 120) + "..."
          : "No description available."}
      </p>}
    </div>
  );
};

export default AreaCard;
