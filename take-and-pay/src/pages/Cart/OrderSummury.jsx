import React from 'react'
import { Link } from 'react-router-dom'

const OrderSummury = ({carts}) => {
    const total = carts.reduce(
        (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue.price),
        0)
  return (
    <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm  sm:p-6">
    <p class="text-xl font-semibold text-gray-900">Order summary</p>

    <div class="space-y-4">
      <div class="space-y-2">
        <dl class="flex items-center justify-between gap-4">
          <dt class="text-base font-normal text-gray-500 ">Original price</dt>
          <dd class="text-base font-medium text-gray-900 ">Tk{total}</dd>
        </dl>

        <dl class="flex items-center justify-between gap-4">
          <dt class="text-base font-normal text-gray-500">Savings</dt>
          <dd class="text-base font-medium text-green-600">00</dd>
        </dl>

        <dl class="flex items-center justify-between gap-4">
          <dt class="text-base font-normal text-gray-500 ">Tax</dt>
          <dd class="text-base font-medium text-gray-900 ">Tk.00</dd>
        </dl>
      </div>

      <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
        <dt class="text-base font-bold text-gray-900 ">Total</dt>
        <dd class="text-base font-bold text-gray-900 ">{total}</dd>
      </dl>
    </div>

    <Link to="/checkout" class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-green-500  hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 ">Proceed to Checkout</Link>

  </div>
  )
}

export default OrderSummury