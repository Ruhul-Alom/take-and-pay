import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { addToCart } from '../../redux/features/cart/cartSlice';
import StarRating from '../StarRating/StarRating';

const Productcard = ({product}) => {
  console.log(product);
  const navigate=useNavigate()
  const location=useLocation()
  console.log(location.state);
  const {user}=useSelector(state=>state.auth)
    const dispatch=useDispatch()
    const handeleAddToCart=()=>{
      if(user && user.email){
        const productInfo={
          ...product,
          productId:product._id,
          email:user.email
        }
        dispatch(addToCart(productInfo))
      }
      else{
        Swal.fire({
          title: "Yoy Are Not Log In",
          text: "You won't be able to add cart!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, want to log in!"
        }).then((result) => {
          if (result.isConfirmed) {
          
              navigate('/login',{state:{from:location}})
          
          }
        });

      }

    }
  return (
<div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <div class="flex flex-col justify-center items-center  rounded-t-xl">
        <img  className="h-52 object-cover"src={product.productImages[0]} alt="" />
      </div>
      <div class="p-4 md:p-6">
        <span class="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
          {product.productName}
        </span>
        <StarRating rating= {product.rating}>
         
        </StarRating>
        <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
        TK:{product.price}
        </h3>
        
      </div>
      <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
        <Link to={`/product/${product._id}`} class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" href="#">
          View Product
        </Link>
        <button onClick={handeleAddToCart}class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" href="#">
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default Productcard