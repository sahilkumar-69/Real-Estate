import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const DigitalEditionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-[90%] md:w-[500px] p-6 relative shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <IoClose size={24} />
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">
          Download the Digital Edition
        </h2>

        {/* Form */}
        <form className="space-y-5">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              required
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>

          <div className="w-full">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <div className="flex items-center justify-center w-14 bg-gray-100 border-r border-gray-300 px-2">
                🇮🇳
              </div>
              <input
                required
                type="tel"
                placeholder="+91"
                className="w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white font-semibold py-3 rounded-md hover:bg-orange-700 transition"
          >
            Access to Digital Edition
          </button>

          <p className="text-sm text-center text-gray-500">
            By clicking Submit, you agree to our{" "}
            <Link to="/terms-and-privacy" className="text-gray-700 underline">
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link to="/Privacy-policy" className="text-gray-700 underline">
              Privacy Policy
            </Link>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default DigitalEditionModal;
