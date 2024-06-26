import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { clearCart } from '../../redux/features/cart/cartSlice';


const Checkout = () => {
  const dispatch=useDispatch()
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: ` Payment hase been successfull`,
      showConfirmButton: false,
      timer: 1500
    });
    reset()
  }

  const {carts} = useSelector((state) => state.carts);
  const total = carts.reduce(
    (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue.price),
    0)
  return (
    <div className="font-[sans-serif] bg-white p-4 min-h-screen">
    <div className="lg:max-w-6xl max-w-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className='lg:border-r-4'>
          <h2 className="text-3xl font-extrabold text-[#333]">Make a payment</h2>
          <p className="text-[#333] text-base mt-6">Complete your transaction swiftly and securely with our easy-to-use payment process.</p>
          <form className="mt-12 max-w-lg" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6">
              <input required type="text"  {...register("Name")} placeholder="Cardholder's Name"
                className="px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-purple-500 outline-none" />
              <div className="flex bg-gray-100 border rounded-md focus-within:border-purple-500 overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 ml-3" viewBox="0 0 32 20">
                  <circle cx="10" cy="10" r="10" fill="#f93232" data-original="#f93232" />
                  <path fill="#fed049"
                    d="M22 0c-2.246 0-4.312.75-5.98 2H16v.014c-.396.298-.76.634-1.107.986h2.214c.308.313.592.648.855 1H14.03a9.932 9.932 0 0 0-.667 1h5.264c.188.324.365.654.518 1h-6.291a9.833 9.833 0 0 0-.377 1h7.044c.104.326.186.661.258 1h-7.563c-.067.328-.123.66-.157 1h7.881c.039.328.06.661.06 1h-8c0 .339.027.67.06 1h7.882c-.038.339-.093.672-.162 1h-7.563c.069.341.158.673.261 1h7.044a9.833 9.833 0 0 1-.377 1h-6.291c.151.344.321.678.509 1h5.264a9.783 9.783 0 0 1-.669 1H14.03c.266.352.553.687.862 1h2.215a10.05 10.05 0 0 1-1.107.986A9.937 9.937 0 0 0 22 20c5.523 0 10-4.478 10-10S27.523 0 22 0z"
                    className="hovered-path" data-original="#fed049" />
                </svg>
                <input required type="number"  {...register("cardNumber")} placeholder="Card Number"
                  className="px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <input required type="number" placeholder="EXP."
                  className="px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-purple-500 outline-none" />
                <input  required type="number" placeholder="CVV"  {...register("cvv")}
                  className="px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-purple-500 outline-none" />
              </div>
            </div>
            <input  type="submit" className="mt-6 w-40 py-3.5 text-sm bg-purple-500 text-white rounded-md hover:bg-purple-600"/>
          </form>
        </div>
        <div classNameName='lg:p-7 md:border-t-4'>
          <h2 className="text-2xl font-extrabold text-[#333]"> Total Price Tk {total}</h2>
          <ul class="text-[#333] mt-10 space-y-6">
            {
              carts.map(cart=> <li class="flex flex-wrap gap-4 text-base">{cart.productName}<span class="ml-auto font-bold">Tk {cart.price}</span></li>)
            }
           
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Checkout