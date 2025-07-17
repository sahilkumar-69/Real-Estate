import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [phone, setPhone] = useState("");
  const [language, setLanguage] = useState("english");

  return (
    <div className="flex flex-col md:flex-row bg-[#d0eaf5] p-6 md:p-10 lg:p-20 w-full justify-center items-center">
      {/* Left: Form */}
      <div className="w-full md:w-1/2 bg-white rounded-md shadow-md hover:shadow-lg p-6 sm:p-8 md:p-10 space-y-6">
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
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-y-1">
            <label htmlFor="phone">Phone</label>
            <PhoneInput
              country={"in"}
              value={phone}
              id="phone"
              onChange={setPhone}
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
            <label htmlFor="select language">Preferred Language</label>
            <select
              id="select language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
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
              style={{
                resize: "none",
                overflow: "scroll",
              }}
              className="p-3 bg-white rounded-sm outline-[1px] outline-[#E5E4E2] focus:outline-[#C0C0C0]"
              placeholder="Share any additional information"
              name="message"
              id="message"
            />
          </div>
        </motion.div>
      </div>

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
          {/* WhatsApp */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex border-b-2 gap-3 items-center justify-start p-3 border-[#44362F]"
          >
            <FaWhatsapp className="w-8 h-8 text-green-600" />
            <div>
              <p className="text-md font-medium">WhatsApp</p>
              <Link className="text-[#F68537] hover:underline text-sm">
                Click to whatsapp
              </Link>
            </div>
          </motion.div>

          {/* Phone */}
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

          {/* Email */}
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
