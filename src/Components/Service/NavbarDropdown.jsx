// --- MegaMenu.jsx ---
import { useRef } from "react";
import { Link } from "react-router-dom";

const NavbarDropdown = ({
  setFilterOptions,
  open,
  content,
  className = "",
}) => {
  if (!open) return null;
  const scrollRef = useRef(null);

  return (
    <div className="absolute top-full  left-0 w-[550px] bg-white shadow-xl rounded-xl p-6 flex gap-6 z-50">
      {/* Left Column: Links */}
      <div className="flex-1 w-1/2">
        <h4 className="text-lg font-semibold text-[#0b2c50] mb-4">
          {content.title}
        </h4>
        <div className="grid grid-cols-1 gap-y-3 text-gray-700 text-sm">
          {content.sections.map((section, idx) => (
            <div key={idx}>
              <h5 className="text-gray-400 font-semibold mb-2">
                {section.heading}
              </h5>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li ref={scrollRef} key={item.to}>
                    <Link
                      to={item.to}
                      onClick={() => {
                        setFilterOptions((prev) => ({
                          ...prev,
                          type: item.value,
                        }));

                        content.scroll &&
                          setTimeout(() => {
                            window.scrollTo({
                              top: 600,
                              behavior: "smooth",
                            });
                          }, 200);
                      }}
                      className="hover:text-blue-600"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Image with CTA */}
      <div className="hidden lg:block h-50 w-1/2 relative shrink-0">
        <img
          src={content.image.src}
          alt={content.image.title}
          className="rounded-xl w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 rounded-xl flex flex-col items-center justify-center text-white text-center p-2">
          <h4 className="text-sm font-semibold mb-2">{content.image.title}</h4>
          <Link
            to={content.image.to}
            className="bg-orange-500 px-3 py-1 rounded hover:bg-orange-600 text-xs"
          >
            {content.image.label}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarDropdown;
