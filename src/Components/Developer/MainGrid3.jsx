import { useEffect, useState } from "react";
import AreaCard from "../Cards/AreaCard";
import Pagination from "../Others/Pagination";
import BlogCard from "../Cards/BlogCard";

const MainGrid3 = ({ data, blog }) => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1); // Reset to first page if data changes
  }, [data]);

  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="text-center text-gray-500 text-lg py-10">
        No results found.
      </div>
    );
  }

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:overflow-visible overflow-x-clip sm:grid-cols-2 my-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentItems.map((dev) =>
          blog ? (
            <BlogCard key={dev._id} {...dev} />
          ) : (
            <AreaCard key={dev._id} {...dev} path="services" />
          )
        )}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default MainGrid3;
