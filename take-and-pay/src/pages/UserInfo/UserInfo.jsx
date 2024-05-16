import React from 'react'
import { Link } from 'react-router-dom'

const UserInfo = () => {
  return (

    <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-700">
      <h2 class="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-200">
        Fill in the form
      </h2>

      <form>
        <div class="grid gap-4 lg:gap-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label  class="block mb-2 text-sm text-gray-700 font-medium dark:text-white">First Name</label>
              <input type="text" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm"/>
            </div>

            <div>
              <label  class="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Last Name</label>
              <input type="text"  class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm"/>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label class="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Email</label>
              <input type="email"   class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm"/>
            </div>

            <div>
              <label  class="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Phone Number</label>
              <input type="text" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm"/>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label  class="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Address </label>
              <input type="text"  class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm"/>
            </div>

            <div>
              <label  class="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Postal Code</label>
              <input type="text" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm"/>
            </div>
          </div>
          
          <Link to="/userinfo" class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-green-500  hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed to Checkout</Link>  
        
         </div>
      </form>
    </div>
  
  )
}

export default UserInfo