import { useState } from "react";
import AreaCard from "../Cards/AreaCard";
import Pagination from "../Others/Pagination";
import BlogCard from "../Cards/BlogCard";

const MainGrid = ({ data, blog }) => {
  const itemsPerPage = 12;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const paginateProps = { totalPages, currentPage, handlePageChange };

  return (
    <>
      <div className="grid grid-cols-1 lg:overflow-visible  overflow-x-clip sm:grid-cols-2 my-3 md:grid-cols-3 lg:grid-cols-4  gap-6">
        {currentItems.map((dev) =>
          blog ? (
            <BlogCard key={dev.id} {...dev} />
          ) : (
            <AreaCard key={dev.id} {...dev} />
          )
        )}
      </div>
      <Pagination {...paginateProps} />
    </>
  );
};

export default MainGrid;
