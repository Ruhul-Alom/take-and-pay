import React from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa';
import { removeItemFromcart } from '../../redux/features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const CartCard = ({cart}) => {
  const dispatch=useDispatch()
    console.log(cart);
    const {_id,productName,price,productImages}=cart
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm ">
    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
      <a href="#" className="shrink-0 md:order-1">
        <img className="h-20 w-20 dark:hidden" src={productImages[0]} alt="imac image" />
      </a>

    
      <div className="flex items-center justify-between md:order-3 md:justify-end">
       
        <div className="text-end md:order-4 md:w-32">
          <p className="text-base font-bold text-gray-900 dark:text-white">Tk.{price}</p>
        </div>
      </div>

      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md justify-center gap-4 items-center">
        <p className="text-base font-medium text-gray-900 hover:underline">{productName}</p>
          <button onClick={()=>dispatch(removeItemFromcart(_id))} type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline">
            Remove
          </button>
        </div>
      </div>
    </div>
 
  )
}

export default CartCard