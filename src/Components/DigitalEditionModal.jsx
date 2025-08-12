import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import PhoneInput from "react-phone-input-2";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const DigitalEditionModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }, [message]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    console.log(formData);
    try {
      const res = await fetch(
        "https://realestatebackend-2-v5e5.onrender.com/api/digital-Edition",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error("Failed to submit");

      const data = await res.json();
      setMessage("✅ Successfully submitted! Check your email.");
      setFormData({ name: "", email: "", phoneNumber: "" });
    } catch (err) {
      setMessage("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              disabled={loading}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
            />
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              disabled={loading}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>

          <div className="w-full">
            <div className="flex flex-col gap-y-1">
              <label htmlFor="phone">Phone</label>
              <PhoneInput
                country={"in"}
                value={formData.phoneNumber}
                onChange={(phoneNumber) =>
                  setFormData((prev) => ({ ...prev, phoneNumber }))
                }
                inputStyle={{
                  paddingTop: "14px",
                  paddingBottom: "14px",
                  paddingLeft: "56px",
                  fontSize: "16px",
                  border: "1px solid #E5E4E2",
                  borderRadius: "4px",
                  width: "100%",
                }}
                containerStyle={{ width: "100%" }}
                buttonStyle={{
                  borderTopLeftRadius: "4px",
                  borderBottomLeftRadius: "4px",
                }}
                dropdownStyle={{ zIndex: 9999 }}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-orange-600 text-white font-semibold py-3 rounded-md transition ${
              loading ? "opacity-70 cursor-not-allowed" : "hover:bg-orange-700"
            }`}
          >
            {loading ? <ClipLoader size={20} /> : "Access to Digital Edition"}
          </button>

          {message && (
            <p className="text-center text-sm mt-2 text-gray-600">{message}</p>
          )}

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
