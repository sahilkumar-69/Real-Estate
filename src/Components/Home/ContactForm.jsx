import { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import ContactCards from "../Slider";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    language: "english",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const [isAgreed, setIsAgreed] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }, [message]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage(null);
      const res = await fetch(
        "https://realestatebackend-2-v5e5.onrender.com/api/Contact-Us",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      console.log("Status:", res.status);
      console.log("Response body:", data);
      if (!res.ok) {
        setMessage({
          type: "error",
          text: res.data?.message || "Something went wrong.",
        });
        return;
      }
      setMessage({ type: "success", text: "Submitted successfully!" });
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        language: "english",
        message: "",
      });
    } catch (error) {
      setMessage({
        type: "error",
        text: err.response?.data?.message || "Network error. Try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact-form"
      className="flex flex-col    md:flex-row bg-[#d0eaf5] p-6 md:p-10 lg:px-20 w-full  items-start"
    >
      {/* Left: Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 bg-white rounded-md shadow-md hover:shadow-lg p-6 sm:p-8 md:p-10 space-y-6"
      >
        <motion.div
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-5"
        >
          {/* Name */}
          <div className="flex flex-col gap-y-1">
            <label htmlFor="name">Name</label>
            <input
              className="p-3 bg-white rounded-sm outline-[1px] outline-[#E5E4E2] focus:outline-[#C0C0C0]"
              placeholder="Name"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              disabled={loading}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-y-1">
            <label htmlFor="email">Email</label>
            <input
              className="p-3 bg-white rounded-sm outline-[1px] outline-[#E5E4E2] focus:outline-[#C0C0C0]"
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              disabled={loading}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-y-1">
            <label htmlFor="phone">Phone</label>
            <PhoneInput
              country={"in"}
              value={formData.phone}
              onChange={(phone) => setFormData((prev) => ({ ...prev, phone }))}
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
              disabled={loading}
            />
          </div>

          {/* Language */}
          <div className="flex flex-col gap-y-1">
            <label htmlFor="language">Preferred Language</label>
            <select
              id="language"
              name="language"
              value={formData.language}
              onChange={handleChange}
              disabled={loading}
              className="w-full bg-white outline-[1px] outline-[#E5E4E2] focus:outline-[#C0C0C0] p-3 rounded-sm text-md"
            >
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="french">French</option>
              <option value="german">German</option>
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-y-1">
            <label htmlFor="message">Message</label>
            <textarea
              rows={5}
              className="p-3 bg-white rounded-sm resize-none outline-[1px] outline-[#E5E4E2] focus:outline-[#C0C0C0]"
              placeholder="Share any additional information"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading || !isAgreed}
            style={
              !isAgreed
                ? {
                    cursor: "not-allowed",
                  }
                : {
                    cursor: "pointer",
                  }
            }
            className={`w-full sm:w-auto px-6 py-3 bg-gradient-to-r  text-white font-semibold rounded-md shadow hover:opacity-90 transition ${
              !isAgreed ? "bg-gray-500   " : "from-orange-500 to-orange-600  "
            }`}
          >
            {loading ? <ClipLoader size={20} /> : "Submit"}
          </button>
          {message && (
            <p
              className={`text-sm mt-1 ${
                message.type === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {message.text}
            </p>
          )}
          <p className="flex flex-col sm:flex-row sm:items-center sm:justify-center  lg:justify-start px-2 gap-1 text-sm text-gray-600 mt-4">
            {/* Checkbox + Terms */}
            <span className="flex items-center flex-wrap">
              <input
                type="checkbox"
                checked={isAgreed}
                onChange={handleCheckboxChange}
                className="mx-1"
                name="terms"
                id="terms"
              />
              <span>By clicking, you agree to our&nbsp;</span>
              <Link to="/terms-and-privacy" className="underline text-black">
                Terms & Conditions
              </Link>
              <span>&nbsp;and&nbsp;</span>
            </span>

            {/* Privacy Policy */}
            <Link to="/Privacy-policy" className="underline text-black">
              Privacy Policy
            </Link>
          </p>
        </motion.div>
      </form>

      {/* Right: Contact Info */}
      <div className="w-full  md:w-1/2 py-8 md:px-12 lg:py-0 space-y-6">
        <div className="flex flex-col gap-y-3 mb-7">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Speak with our Real Estate specialists today
          </h1>
          <p className="text-sm md:text-base text-gray-700">
            Get in touch for tailored guidance from our expert team. We’re
            committed to assisting you through each phase of your journey.
          </p>
        </div>

        <div className="flex flex-col gap-y-4">
          <ContactCards />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
