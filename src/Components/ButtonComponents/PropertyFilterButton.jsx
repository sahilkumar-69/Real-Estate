import React from "react";

const PropertyFilterButton = ({ title, activeFilter, setActiveFilter }) => {
  return (
    <button
      onClick={() => setActiveFilter(title)}
      className={`px-4 py-2 rounded-lg ${
        activeFilter === title
          ? "bg-blue-600 text-white"
          : "bg-gray-200 text-gray-700"
      }`}
    >
      {title}
    </button>
  );
};

export default PropertyFilterButton;
