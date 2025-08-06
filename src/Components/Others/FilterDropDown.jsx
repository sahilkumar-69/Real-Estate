// --- FilterDropDown.jsx ---

const FilterDropDown = ({ label, options = [], value = "", onChange }) => {
  return (
    <div>
      <label className="block text-gray-700 mb-2">{label}</label>
      <div className="relative">
        <select
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">Select {label}</option>
          {options.length > 0 &&
            options.map((opt, index) => (
              <option key={index} value={opt}>
                {opt}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default FilterDropDown;
