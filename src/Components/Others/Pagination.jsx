const Pagination = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex space-x-2">
        <button className="px-4 py-2 border border-gray-300 rounded-lg bg-blue-600 text-white">
          1
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
          2
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
          3
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
          4
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
