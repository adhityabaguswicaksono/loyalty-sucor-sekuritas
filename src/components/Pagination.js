import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';

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

  const onNext = () => {
    if (currentPage < paginationRange.length) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div
      className={classnames('text-center mt-8', {
        [className]: className,
      })}
    >
      <ul
        className={classnames('inline-flex -space-x-px cursor-pointer', {
          [className]: className,
        })}
      >
        <li
          key="left"
          className={classnames('px-2 md:px-3 py-2 leading-tight', {
            'opacity-25 text-gray-500 bg-white border border-gray-300 rounded-l-md duration-150 hover:ease-in-out hover:bg-white hover:text-gray-500':
              currentPage === 1,
            'text-gray-500 bg-white border border-gray-300 rounded-l-md duration-150 hover:ease-in-out hover:bg-gray-100 hover:text-gray-700':
              currentPage !== 1,
          })}
          onClick={onPrevious}
        >
          <p class="inline-block">
            <svg class="h-4 w-4 inline-block"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"> 
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </p>
        </li>
        {paginationRange.map((pageNumber) => {
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

          return (
            <li
              key={pageNumber}
              className={classnames('px-2 md:px-3 py-2 leading-tight', {
                'text-white bg-sucorblue-1 border border-gray-300 duration-150 hover:bg-sucorblue-2 hover:text-white hover:ease-in-out':
                  pageNumber === currentPage,
                'text-gray-500 bg-white border border-gray-300 duration-150 hover:ease-in-out hover:bg-gray-100 hover:text-gray-700':
                  pageNumber !== currentPage,
              })}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
        <li
          key="right"
          className={classnames('px-2 md:px-3 py-2 leading-tight', {
            'opacity-25 text-gray-500 bg-white border border-gray-300 rounded-r-md duration-150 hover:ease-in-out hover:bg-white hover:text-gray-500':
              currentPage === lastPage,
            'text-gray-500 bg-white border border-gray-300 rounded-r-md duration-150 hover:ease-in-out hover:bg-gray-100 hover:text-gray-700':
              currentPage !== lastPage,
          })}
          onClick={onNext}
        >
          <p className="inline-block">
            <svg className="h-4 w-4 inline-block"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </p>  
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
