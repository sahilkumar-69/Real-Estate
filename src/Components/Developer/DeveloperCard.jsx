import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const DeveloperCard = ({ name, image, logo, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.09 }}
      className="flex shadow-md flex-col  rounded-md gap-2.5"
    >
      <Link to={logo}>
        <div className="  rounded-t-md overflow-hidden h-[140px]   flex items-center justify-center ">
          <img src={image} alt={name} className="  w-full h-full " />
        </div>
        <div className="text-lg p-2 hover:text-[#F68537] cursor-pointer hover:underline font-semibold text-slate-800 flex items-center gap-2">
          <p className="font-semibold">{name}</p>
          <FaArrowUpRightFromSquare size={12} />
        </div>
      </Link>
      <p className="p-2">{description}..</p>
    </motion.div>
  );
};

export default DeveloperCard;
