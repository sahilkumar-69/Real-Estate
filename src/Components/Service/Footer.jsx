import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }, [message]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage({ type: "error", text: "Please enter your email." });
      return;
    }

    try {
      setLoading(true);
      setMessage(null);

      // Example API call
      const res = await axios.post(
        "https://realestatebackend-2-v5e5.onrender.com/api/subscribe-all",
        {
          email,
        }
      );
      console.log(res);

      if (res.status === 200) {
        setMessage({ type: "success", text: "Subscribed successfully!" });
        setEmail("");
      } else {
        setMessage({
          type: "error",
          text: res.data?.message || "Something went wrong.",
        });
      }
    } catch (err) {
      setMessage({
        type: "error",
        text: err.response?.data?.message || "Network error. Try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#002c6d] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {/* Company Info */}
        <div className="space-y-2">
          <Link to="/">
            <img
              src="/assets/nexuslogo.png"
              alt="Nexus Real Estate Logo"
              className="w-32 mb-2"
            />
          </Link>
          <p className="text-sm">INNOVATE • BUILD • GROW</p>
          <p className="text-sm">
            <strong>Email:</strong>{" "}
            <a href="mailto:contactus@devnexus.in" className="text-blue-300">
              contactus@devnexus.in
            </a>
          </p>
          <p className="text-sm">
            <strong>Phone:</strong>{" "}
            <a href="tel:+919211815556" className="text-blue-300">
              +91 9211815556
            </a>
          </p>
          <p className="text-sm">
            <strong>Location:</strong> 26-B, Spaze Itech Park, Sector-49,
            Gurgaon, 122018
          </p>
        </div>

        {/* Explore On */}
        <FooterSection
          title="Explore On"
          links={[
            { name: "Buy", to: "/buy/properties-for-sale" },
            { name: "Rent", to: "/rent/properties-for-rent" },
            { name: "Areas", to: "/areas" },
            { name: "Developers", to: "/developers" },
            { name: "Projects", to: "/projects" },
            { name: "Services", to: "/services" },
          ]}
        />

        {/* About */}
        <FooterSection
          title="About"
          links={[
            { name: "About Us", to: "/about-us" },
            { name: "Meet The Team", to: "/meet-the-team" },
            { name: "Our Awards", to: "/our-awards" },
            { name: "Careers", to: "/careers" },
          ]}
        />

        {/* Others */}
        <FooterSection
          title="Others"
          links={[
            { name: "Sell Guide", to: "/Guide to Selling" },
            { name: "Buy Guide", to: "/Guide to buying" },
            { name: "List Property", to: "/list-property" },
          ]}
        />

        {/* Newsletter + Social */}
        <div>
          <h3 className="font-semibold text-base mb-2">Join Our Community</h3>
          <div className="flex space-x-4 text-white text-xl mb-4">
            <SocialIcon
              href="https://www.instagram.com/devnexussolutions/?igsh=NXUycjU4MHBpNDk3"
              Icon={FaInstagram}
            />
            <SocialIcon
              href="https://www.facebook.com/profile.php?id=61575914567317"
              Icon={FaFacebookF}
            />
            <SocialIcon
              href="https://x.com/DevNexusSol?t=YV_XZosMLVwNo6W0SvuB9Q&s=08"
              Icon={FaXTwitter}
            />
            <SocialIcon
              href="https://www.linkedin.com/company/devnexus-solutions/"
              Icon={FaLinkedinIn}
            />
          </div>

          <label className="block text-sm mb-1">
            Subscribe us for Latest News
          </label>
          <form
            onSubmit={handleOnSubmit}
            className="flex  rounded-md overflow-hidden"
          >
            <input
              type="email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="p-2 text-sm bg-white text-black w-full outline-none"
              disabled={loading}
            />

            <button
              type="submit"
              disabled={loading}
              className="text-white bg-blue-800 px-4 text-sm"
            >
              {loading ? <ClipLoader size={20} /> : "Submit"}
            </button>
          </form>
          {message && (
            <p
              className={`text-sm mt-1 ${
                message.type === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {message.text}
            </p>
          )}
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-blue-600 mt-6 pt-3 text-center text-sm text-blue-200 px-4">
        <p>
          © 2025 Nexus Real Estate | All Rights Reserved.
          <Link to="/privacy-policy" className="ml-1 underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}

// Reusable Section Component
function FooterSection({ title, links }) {
  return (
    <div>
      <h3 className="font-semibold text-base mb-2">{title}</h3>
      <ul className="space-y-1 text-sm">
        {links.map((link, i) => (
          <li key={i}>
            <Link className="hover:text-orange-500" to={link.to}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Social Icon Component
function SocialIcon({ href, Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-orange-500"
    >
      <Icon />
    </a>
  );
}
