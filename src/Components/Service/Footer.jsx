import { FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#002c6d] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-6">
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
        <div>
          <h3 className="font-semibold text-base mb-2">Explore On</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link
                className="hover:text-orange-500"
                to="/buy/properties-for-sale"
              >
                Buy
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-orange-500"
                to="/rent/properties-for-rent"
              >
                Rent
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-500" to="/areas">
                Areas
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-500" to="/developers">
                Developers
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-500" to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-500" to="/services">
                Services
              </Link>
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold text-base mb-2">About</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link className="hover:text-orange-500" to="/about-us">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-500" to="/meet-the-team">
                Meet The Team
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-500" to="/our-awards">
                Our Awards
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-500" to="/careers">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Others */}
        <div>
          <h3 className="font-semibold text-base mb-2">Others</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link className="hover:text-orange-500" to="/Guide to Selling">
                Sell Guide
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-500" to="/Guide to buying">
                Buy Guide
              </Link>
            </li>
            <li>
              <Link className="hover:text-orange-500" to="/list-property">
                List Property
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter + Social */}
        <div>
          <h3 className="font-semibold text-base mb-2">Join Our Community</h3>
          <div className="flex space-x-4 text-white text-xl mb-4">
            <a
              href="https://www.instagram.com/devnexussolutions/?igsh=NXUycjU4MHBpNDk3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61575914567317"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/DevNexusSol?t=YV_XZosMLVwNo6W0SvuB9Q&s=08"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/devnexus-solutions/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>

          <label className="block text-sm mb-1">
            Subscribe us for Latest News
          </label>
          <div className="flex bg-white">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 text-sm   outline-none border-none   text-black w-full"
            />
            <button className="bg-white text-blue-800 px-4 rounded-r-md text-sm">
              Submit
            </button>
          </div>
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