import React from 'react'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { sendUserQuery } from '../../redux/features/contact/contactSlice'
const ConatctForm = () => {
  const dispatch=useDispatch()
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        dispatch(sendUserQuery(data))
        reset()
      }
  return (
    <div className="mt-12 max-w-lg mx-auto">
 
    <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8">
      <h2 className="mb-8 text-xl font-semibold text-gray-800">
        Fill in the form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 lg:gap-6">
   
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">First Name</label>
              <input required type="text"  {...register("firstName")} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"/>
            </div>

            <div>
              <label  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Last Name</label>
              <input required type="text"  {...register("lastName")}  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"/>
            </div>
          </div>
       
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Email</label>
              <input  required type="email" {...register("email")}  autocomplete="email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"/>
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Phone Number</label>
              <input required type="text"  {...register("phone")} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"/>
            </div>
          </div>
     

          <div>
            <label  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Details</label>
            <textarea required  {...register("description")}  rows="4" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"></textarea>
          </div>
        </div>
  

        <div className="mt-6 grid">
          <input type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" value="Send inquiry"/>
        </div>

        <div className="mt-3 text-center">
          <p className="text-sm text-gray-500 dark:text-neutral-500">
            We'll get back to you in 1-2 business days.
          </p>
        </div>
      </form>
    </div>
    </div>  
  )
}

export default ConatctForm