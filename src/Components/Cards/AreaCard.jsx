import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const AreaCard = ({ name, logo, link, desc }) => {
  return (
    <div className="flex shadow-md flex-col  rounded-md gap-2.5">
      <Link to={link}>
        <div className="  rounded-md   overflow-hidden h-[200px]   flex items-center justify-center ">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZTPB6t51iL_VxWSNlULDXnmbH7pvkwWRrQ&s"}
            alt={name}
            className=" w-full h-full "
          />
        </div>
        <div className="text-lg p-2 hover:text-[#F68537] cursor-pointer hover:underline font-semibold text-slate-800 flex items-center gap-2">
          <p className="font-semibold">{name}</p>
          <FaArrowUpRightFromSquare size={12} />
        </div>
        <p className="p-2">{desc.slice(0, 120)}..</p>
      </Link>
    </div>
  );
};

export default AreaCard;
