import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const AnimatedDropDown = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative  ">
      <label className="block text-gray-700 mb-2 font-medium">{label}</label>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-3 border border-gray-300 rounded-lg bg-white shadow-sm hover:border-blue-500 transition"
      >
        <span>{value || `Select ${label}`}</span>
        <FiChevronDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-2 z-50 max-h-60 overflow-y-auto"
          >
            {options.map((opt, idx) => (
              <li
                key={idx}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`p-3 cursor-pointer hover:bg-blue-50 ${
                  opt.value === value ? "bg-blue-100 text-blue-700" : ""
                }`}
              >
                {opt.op}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedDropDown;
