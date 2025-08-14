import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

// Reusable dropdown
const FilterDropDown = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openUp, setOpenUp] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    if (isOpen && btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;

      // Open upwards if space below is smaller than dropdown height
      const dropdownHeight = Math.min(options.length * 48, 240); // 48px per item
      setOpenUp(spaceBelow < dropdownHeight && spaceAbove > spaceBelow);
    }
  }, [isOpen, options.length]);

  return (
    <div className="relative w-full">
      <button
        ref={btnRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-3 border border-gray-300 rounded-lg bg-white   hover:border-blue-500 transition text-sm sm:text-base"
      >
        <span>
          {options.find((opt) => opt.value === value)?.label ||
            `Select ${label}`}
        </span>
        <FiChevronDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: openUp ? 10 : -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: openUp ? 10 : -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute left-0 right-0 bg-white border border-gray-200 rounded-lg  z-50 max-h-60 overflow-y-auto ${
              openUp ? "bottom-full mb-2" : "mt-2"
            }`}
          >
            {options.map((opt) => (
              <li
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`p-3 cursor-pointer hover:bg-blue-50 ${
                  opt.value === value ? "bg-blue-100 text-blue-700" : ""
                }`}
              >
                {opt.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

const budgetOptions = [
  { value: "under-20l", label: "Under ₹20 Lakh" },
  { value: "20l-50l", label: "₹20 Lakh - ₹50 Lakh" },
  { value: "50l-1cr", label: "₹50 Lakh - ₹1 Crore" },
  { value: "1cr-2cr", label: "₹1 Crore - ₹2 Crore" },
  { value: "2cr-plus", label: "Above ₹2 Crore" },
];

const interestOptions = [
  { value: "buy", label: "Buying a Property" },
  { value: "rent", label: "Renting a Property" },
];

const PopupForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    lookingFor: "buy",
    budget: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  // Show popup after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setAnimate(true), 100);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setTimeout(() => {
        setStatus(null)
    }, 3000);
  }, )
  

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  // ESC to close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(
        "https://realestatebackend-2-v5e5.onrender.com/api/popup-form",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      console.log("data", data);

      if (!data.success) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        lookingFor: " ",
        budget: "",
      });
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className={`bg-white rounded-2xl overflow-hidden shadow-2xl w-[80%] max-w-lg relative transform transition-all duration-300 ${
          animate ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        {/* Header */}
        <div className="from-orange-500 to-orange-600 bg-gradient-to-r p-6 text-start text-white">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Find Your Dream Property
          </h2>
          <p className="text-white/90 mt-1 text-sm sm:text-base">
            Get in touch with our real estate specialists today
          </p>
          <button
            onClick={handleClose}
            className="absolute top-0 m-4 right-0 text-white text-3xl hover:opacity-80"
          >
            &times;
          </button>
        </div>

        {/* Form */}
        <form className="p-6 space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Full Name"
              required
              className="h-[49px] px-3 text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Email Address"
              required
              className="h-[49px] px-3 text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full"
            />

            <input
              type="tel"
              name="phone"
              maxLength={10}
              value={formData.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
              required
              placeholder="9876543210"
              className="h-[49px] px-3 text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full"
            />

            <FilterDropDown
              label=" "
              options={interestOptions}
              value={formData.lookingFor}
              onChange={(val) => handleChange("lookingFor", val)}
            />

            <div className="lg:col-span-2">
              <FilterDropDown
                label=" "
                options={budgetOptions}
                value={formData.budget}
                onChange={(val) => handleChange("budget", val)}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full from-orange-500 to-orange-600 bg-gradient-to-r text-white py-3 rounded-lg hover:bg-yellow-600 transition font-semibold text-lg disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Request"}
          </button>

          {status === "success" && (
            <p className="text-green-600 text-center">
              Request sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center">
              Failed to send. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
