import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Productcard from '../../Components/ProductCard/Productcard';
import Pagination from '../../Components/Pagination/Pagination';



const Product = () => {
  const products = useSelector((state) => state.product.products);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // Number of products to display per page

  // Logic to calculate the index of the first and last product on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Function to handle pagination change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

 
  return (
  <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentProducts.map(product=><Productcard product={product}/>)
           
        }
    </div>
    <div className='flex justify-center items-center my-6'>
    <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
   
    </div>
    
  )
}

export default Product