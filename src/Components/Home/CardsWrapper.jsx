// import React from "react";
// import Card from "./Card";
import { motion } from "motion/react";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { solutions } from "../../Data";

export default function RealEstateSolutions() {
  return (
    <section className="px-6 md:px-20 py-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 max-w-4xl">
        India real estate solutions focused around excellent customer service.
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {solutions.map((item, index) => (
          <motion.div
            // whileTap={{
            //   scale: 0.9,
            //   transition: {
            //     duration: 0.1,
            //   },
            // }}
            initial={{
              x: -2000,
            }}
            animate={{
              x: 0,
            }}
            key={index}
            className="rounded-xl border border-gray-200 p-6 hover:shadow-xl transition duration-300 bg-white"
          >
            <img src={item.icon} alt={item.title} className="h-12 w-12 mb-4" />
            <h3 className="text-lg hover:text-[#F68537] cursor-pointer hover:underline font-semibold text-slate-800 flex items-center gap-2">
              {item.title} <FaArrowUpRightFromSquare size={12} />
            </h3>
            <p className="text-sm text-gray-600 mt-2">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// export default CardWrapper;
