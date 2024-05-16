import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import CartCard from './CartCard';
import OrderSummury from './OrderSummury';
import { useSelector } from 'react-redux';

const Cart = () => {
  const {carts} = useSelector((state) => state.carts);
  console.log(carts);
  return (
    <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
       <Helmet>
    <title>cart</title>
   
</Helmet>
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>
  
      <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
        <div class="mx-auto w-full flex-none lg:max-w-xl xl:max-w-3xl">
          <div class="space-y-6">
            {
              carts.map(cart=> <CartCard cart={cart}></CartCard>)
            }
         
          </div>

        </div>
  
        <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
        <OrderSummury carts={carts}></OrderSummury>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Cart