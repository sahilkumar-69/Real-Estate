import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const BlogCard = ({ title, date, tag, img, desc }) => {
  return (
    <div className="flex shadow-md flex-col  rounded-md gap-2.5">
      <Link to={title}>
        <div className=" relative  rounded-md   overflow-hidden h-[200px]   flex items-center justify-center ">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            src={img}
            alt={title}
            className=" w-full h-full "
          />
          <p className="absolute top-2 left-2 rounded-sm  p-1 backdrop-blur-md bg-black/10  text-white">
            {tag}
          </p>
        </div>
        <div className="text-lg p-2 hover:text-[#F68537] cursor-pointer hover:underline font-semibold text-slate-800 flex items-center gap-2">
          <p className="font-semibold">{title}</p>
          <FaArrowUpRightFromSquare size={12} />
        </div>
        <p className="p-2">{date}</p>
      </Link>
    </div>
  );
};

export default BlogCard;
