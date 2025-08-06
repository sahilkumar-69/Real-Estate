import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const ServiceCard = ({
  _id,
  name = "Unnamed Area",
  image,
  logo,
  description,
  path,
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
          <FaArrowUpRightFromSquare size={12} />
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
 
    </div>
  );
};

export default ServiceCard;
