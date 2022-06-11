import React from 'react';
import { usePagination, DOTS } from './usePagination';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });
  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className='flex items-center space-x-5 justify-end mt-4'>
    
      <button onClick={onPrevious} disabled={currentPage === 1} className='text-base font-normal text-[#9E2629]'>
        <ChevronLeftIcon className="h-4 w-4" />
      </button>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <span className='text-base font-normal text-text_gray'>...</span>;
        }

        return (
            <span  className={classNames(currentPage===pageNumber ? "border-b border-[#9E2629] items-baseline text-[#9E2629]" : "text-text_gray", 'text-base font-normal')} onClick={() => onPageChange(pageNumber)}>{pageNumber}</span>
        );
      })}
      <button onClick={onNext} disabled={currentPage === lastPage} className='text-base font-normal text-[#9E2629]'>
       <ChevronRightIcon className="h-4 w-4" />
      </button>
    </ul>
  );
};

export default Pagination;