const FilterDropDown = ({ data }) => {
  return (
    <div>
      <label className="block text-gray-700 mb-2">{data.label}</label>
      <div className="relative">
        <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          {data.options.length > 0 &&
            data.options.map((opt, index) => (
              <option key={index}>{opt}</option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default FilterDropDown;
