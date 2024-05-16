import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Pagination=({ productsPerPage, totalProducts, paginate,currentPage}) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      pageNumbers.push(i);
    }
  return (
    <nav className="flex items-center gap-x-1 my-8">
      <button type="button" className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" disabled="">
       <FaArrowLeft></FaArrowLeft>
        <button onClick={() => paginate(currentPage-1)}>Previous</button>
      </button>
      <div className="flex items-center gap-x-1">
      {
      pageNumbers.map((number) => <button onClick={() => paginate(number)} type="button" className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500" aria-current="page">{number}</button> )}
       
      </div>
      <button type="button" className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
        <button onClick={() => paginate(currentPage+1)}>Next</button>
       <FaArrowRight></FaArrowRight>
      </button>
    </nav>
  
  )
}

export default Pagination