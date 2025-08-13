import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ContactCards() {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const contactItems = [
    {
      icon: <FaWhatsapp className="w-8 h-8 text-green-500" />,
      title: "WhatsApp",
      value: "+91 9211815556",
      link: "https://wa.me/911234567890",
      hoverColor: "hover:border-green-400 hover:shadow-green-400",
    },
    {
      icon: <FaPhoneAlt className="w-8 h-8 text-blue-500" />,
      title: "Phone",
      value: "+91 9211815556",
      link: "tel:+919211815556",
      hoverColor: "hover:border-blue-400 hover:shadow-blue-400",
    },
    {
      icon: <MdOutlineEmail className="w-8 h-8 text-red-500" />,
      title: "Email",
      value: "contactus@devnexus.in",
      link: "mailto:contactus@devnexus.in",
      hoverColor: "hover:border-orange-400 hover:shadow-orange-400",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      {contactItems.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4, delay: index * 0.1 }}
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className={`flex items-center gap-4 p-5 rounded-xl border border-gray-300 backdrop-blur-lg bg-white/40 shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-opacity-40 cursor-pointer ${item.hoverColor}`}
        >
          {item.icon}
          <div>
            <p className="text-lg font-semibold text-gray-800">{item.title}</p>
            <p className="text-sm text-gray-600">{item.value}</p>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
