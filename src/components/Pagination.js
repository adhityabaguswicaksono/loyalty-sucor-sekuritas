import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "./usePagination";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // For Logic Next Page
  const onNext = () => {
    if (currentPage < paginationRange.length) {
      onPageChange(currentPage + 1);
    }
  };

  // For Logic Previous Page
  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // For Calculate Last Page
  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="0"
      className={classnames("text-center mt-8", {
        [className]: className,
      })}
    >
      {/* Pagination Start */}
      <ul
        className={classnames("inline-flex -space-x-px cursor-pointer", {
          [className]: className,
        })}
      >
        {/* For Previous Page */}
        <li
          key="left"
          className={classnames("px-2 md:px-3 py-2 leading-tight", {
            "opacity-25 text-gray-500 bg-white border border-gray-300 rounded-l-md duration-150 hover:ease-in-out hover:bg-white hover:text-gray-500":
              currentPage === 1,
            "text-gray-500 bg-white border border-gray-300 rounded-l-md duration-150 hover:ease-in-out hover:bg-gray-100 hover:text-gray-700":
              currentPage !== 1,
          })}
          onClick={onPrevious}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </li>

        {paginationRange.map((pageNumber) => {
          // For More Page in intiate with DOTS (...)
          if (pageNumber === DOTS) {
            return (
              <li
                key="dots"
                className="px-2 md:px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 duration-150 hover:ease-in-out hover:bg-gray-100 hover:text-gray-700"
              >
                &#8230;
              </li>
            );
          }

          // For More Page in Number
          return (
            <li
              key={pageNumber}
              className={classnames("px-2 md:px-3 py-2 leading-tight", {
                "text-white bg-sucor-500 border border-gray-300 duration-150 hover:text-white hover:bg-sucor-700 hover:ease-in-out":
                  pageNumber === currentPage,
                "text-gray-500 bg-white border border-gray-300 duration-150 hover:ease-in-out hover:bg-gray-100 hover:text-gray-700":
                  pageNumber !== currentPage,
              })}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}

        {/* For Next Page */}
        <li
          key="right"
          className={classnames("px-2 md:px-3 py-2 leading-tight", {
            "opacity-25 text-gray-500 bg-white border border-gray-300 rounded-r-md duration-150 hover:ease-in-out hover:bg-white hover:text-gray-500":
              currentPage === lastPage,
            "text-gray-500 bg-white border border-gray-300 rounded-r-md duration-150 hover:ease-in-out hover:bg-gray-100 hover:text-gray-700":
              currentPage !== lastPage,
          })}
          onClick={onNext}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </li>
      </ul>
      {/* Pagination End */}
    </div>
  );
};

export default Pagination;
