import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const BlogCard = ({ _id, title, img, tag, createdAt, blogContent }) => {
  const plainText = blogContent ? blogContent.replace(/<[^>]+>/g, "") : "";
  const snippet =
    plainText.length > 120
      ? plainText.slice(0, plainText.lastIndexOf(" ", 120)) + "..."
      : plainText;

  const date = createdAt
    ? new Date(createdAt).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "Unknown";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col shadow-md   rounded-md gap-2.5"
    >
      <Link to={`/blogs/${_id}`}>
        {/* Image */}
        <div className="relative h-[200px] rounded-md overflow-hidden flex items-center justify-center">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            src={img}
            alt={`Blog image: ${title}`}
            className="w-full h-full object-cover"
          />
          {tag && (
            <p className="absolute top-2 left-2 bg-black/10 text-white p-1 rounded-sm backdrop-blur-md text-xs">
              {tag}
            </p>
          )}
        </div>

        {/* Title */}
        <div className="text-lg p-2 font-semibold text-slate-800 hover:text-[#F68537] cursor-pointer hover:underline flex items-center gap-2">
          <p>{title}</p>
          <FaArrowUpRightFromSquare size={12} />
        </div>

        {/* Snippet */}
        <p className="text-sm px-2 text-gray-600">{snippet}</p>

        {/* Date */}
        <p className="p-2 text-sm text-gray-500">{date}</p>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
