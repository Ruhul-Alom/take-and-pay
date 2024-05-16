import React, { useState } from 'react'
import {AiFillGooglePlusCircle} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import {signInWithGoogle, signUpWithEmailPassword } from '../../redux/features/authentication/authSlice'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Swal from 'sweetalert2'

const Register = () => {
    const auth=useSelector(state=>state.auth.user)
    console.log(auth);
    const dispatch=useDispatch()
    const [userInfo,setUserInfo]=useState()
    const onChangeHandele=(e)=>{
        const form=e.target
        setUserInfo({
    ...userInfo,
          [form.name]:form.value
        })
    
      }
      const handleSubmit=(event)=>{
        event.preventDefault()
      dispatch(signUpWithEmailPassword({email:userInfo.email, password:userInfo.password}))
        .then(result=>{
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: 'User Registration Successful.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
        })
        .catch(err=>console.log(err.message))
        
      }
      const gogleSignUp=(event)=>{
        event.preventDefault()
      dispatch(signInWithGoogle())
        .then(result=>{
          Swal.fire({
            title: 'User Registration Successful.',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
    })
        .catch(err=>console.log(err.message))
        
      }
  return (
    <>
     <Helmet>
    <title>sign up</title>
   
</Helmet>
  
    <div class=" max-w-xl mx-auto mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
  <div class="p-4 sm:p-7">
    <div class="text-center">
      <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Sign up</h1>
      <p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
        Already have an account?
        <Link to='/login' class="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="../examples/html/signin.html">
          Sign in here
        </Link>
      </p>
    </div>

    <div class="mt-5">
      <button onClick={gogleSignUp} type="button" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none ">
       <AiFillGooglePlusCircle></AiFillGooglePlusCircle>
        Sign up with Google
      </button>

      <div class="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 ">Or</div>

  
      <form onSubmit={handleSubmit}>
        <div class="grid gap-y-4">
       
          <div>
            <label for="email" class="block text-sm mb-2 dark:text-white">Email address</label>
            <div class="relative">
              <input onChange={onChangeHandele} type="email" id="email" name="email" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="email-error"/>
              <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
              
              </div>
            </div>
            <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
          </div>
        
          <div>
            <label for="password" class="block text-sm mb-2 dark:text-white">Password</label>
            <div class="relative">
              <input onChange={onChangeHandele} type="password" id="password" name="password" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " />
              <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
              </div>
            </div>
            <p class="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
          </div>
       
          <div>
            <label for="confirm-password" class="block text-sm mb-2 dark:text-white">Confirm Password</label>
            <div class="relative">
              <input onChange={onChangeHandele} type="password" id="confirm-password" name="confirm-password" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"/>
              <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
              
              </div>
            </div>
            <p class="hidden text-xs text-red-600 mt-2" id="confirm-password-error">Password does not match the password</p>
          </div>
       
          <div class="flex items-center">
            <div class="flex">
              <input id="remember-me" name="remember-me" type="checkbox" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500"/>
            </div>
            <div class="ms-3">
              <label for="remember-me" class="text-sm dark:text-white">I accept the <a class="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="#">Terms and Conditions</a></label>
            </div>
          </div>
      

          <button type="submit" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Sign up</button>
        </div>
      </form>
   
    </div>
  </div>
</div>
</>
  )
}

export default Register