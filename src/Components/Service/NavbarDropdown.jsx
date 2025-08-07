// --- MegaMenu.jsx ---
import { useRef } from "react";
import { Link } from "react-router-dom";

const NavbarDropdown = ({
  setFilterOptions,
  setFilterOptionsForRent,
  open,
  content,
  className = "",
}) => {
  if (!open) return null;
  const scrollRef = useRef(null);

  return (
    <div className="absolute top-full   -left-[20vw] w-[750px] bg-[#F5F5F5] shadow-xl rounded-xl p-5 flex gap-10 z-50">
      {/* Left Column: Links */}
      <div className="flex-1 w-2/3">
        <h4 className="text-lg font-semibold text-[#0b2c50] mb-4">
          {content.title}
        </h4>
        <div className="grid grid-cols-2 gap-y-3 text-gray-700 text-sm">
          {content.sections.map((section, idx) => (
            <div key={idx}>
              <h5 className="text-gray-400 font-semibold mb-2">
                {section.heading}
              </h5>
              <ul className="space-y-3 text-md font-semibold ">
                {section.items.map((item) => (
                  <li ref={scrollRef} key={item.to}>
                    <Link
                      to={item.to}
                      onClick={() => {
                        content?.name == "rent"
                          ? (setFilterOptionsForRent({
                              beds: "Any",
                              bathroom: "Any",
                              minArea: "",
                              maxArea: "",
                              location: "",
                              type: "",
                              status: "",
                            }),
                            setFilterOptionsForRent((prev) => ({
                              ...prev,
                              [section.type]: item.value,
                            })))
                          : (setFilterOptions({
                              beds: "Any",
                              bathroom: "Any",
                              minArea: "",
                              maxArea: "",
                              location: "",
                              type: "",
                              status: "",
                            }),
                            setFilterOptions((prev) => ({
                              ...prev,
                              [section.type]: item.value,
                            })));

                        content.scroll &&
                          setTimeout(() => {
                            window.scrollTo({
                              top: 600,
                              behavior: "smooth",
                            });
                          }, 300);
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
      <div className="hidden lg:block h-70 w-1/2 relative shrink-0">
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
