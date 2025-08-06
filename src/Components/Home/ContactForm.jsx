import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    language: "english",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
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
        alert(
          "Failed to send message: " +
            (data?.message || data?.error || JSON.stringify(data))
        );
        return;
      }
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        language: "english",
        message: "",
      });
      // } else {
      //   alert("Failed to send message: " + data.message);
      // }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div
      id="contact-form"
      className="flex flex-col md:flex-row bg-[#d0eaf5] p-6 md:p-10 lg:p-20 w-full justify-center items-center"
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

          <p className="text-center md:text-right text-sm text-gray-600 mt-4">
            By clicking Submit, you agree to our{" "}
            <Link to="/terms-and-privacy" className="underline text-black">
              Terms & Conditions
            </Link>
           { " and "}
            <Link to="/Privacy-policy" className="underline text-black">
              Privacy Policy
            </Link>
          </p>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-md shadow hover:opacity-90 transition"
          >
            Submit Detail
          </button>
        </motion.div>
      </form>

      {/* Right: Contact Info */}
      <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 space-y-6">
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
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex border-b-2 gap-3 items-center justify-start p-3 border-[#44362F]"
          >
            <FaWhatsapp className="w-8 h-8 text-green-600" />
            <div>
              <p className="text-md font-medium">WhatsApp</p>
              <Link
                to={`https://wa.me/${+911234567890}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F68537] hover:underline text-sm"
              >
                Click to whatsapp
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex border-b-2 gap-3 items-center justify-start p-3 border-[#44362F]"
          >
            <FaPhoneAlt className="w-6 h-6 text-blue-600" />
            <div>
              <p className="text-md font-medium">Phone</p>
              <p className="text-sm">+91 1234567890</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex border-b-2 gap-3 items-center justify-start p-3 border-[#44362F]"
          >
            <MdOutlineEmail className="w-8 h-8 text-red-500" />
            <div>
              <p className="text-md font-medium">Email</p>
              <Link className="text-[#F68537] hover:underline text-sm">
                info@nexusrealestate.com
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
 