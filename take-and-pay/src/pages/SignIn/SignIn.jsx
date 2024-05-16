import React, { useState } from 'react'
import { AiFillGooglePlusCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { signInWithEmailPassword } from '../../redux/features/authentication/authSlice';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const SignIn = () => {
  const location=useLocation()
    const auth=useSelector(state=>state.auth.user)
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    // console.log(from);
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
      dispatch(signInWithEmailPassword({email:userInfo.email, password:userInfo.password}))
        .then(result => {
          const user = result.user;
          console.log(user);
          Swal.fire({
              title: 'User Login Successful.',
              showClass: {
                  popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
              }
          });
          navigate(from, { replace: true });
      })
        .catch(err=>console.log(err.message))
        
      }
      const gogleSigIn=(event)=>{
        event.preventDefault()
      dispatch(signInWithGoogle())
        .then(result=>{
          console.log(result.user);
        })
        .catch(err=>console.log(err.message))
        
      }
  return (
    <>
    <Helmet>
    <title>sign in</title>
   
</Helmet>
    <div className=" max-w-xl mx-auto mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
  <div className="p-4 sm:p-7">
    <div className="text-center">
      <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign up</h1>
      <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
        Are You New Here?
        <Link to='/register' className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" >
          Sign in here
        </Link>
      </p>
    </div>

    <div className="mt-5">
      <button onClick={gogleSigIn} type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50">
       <AiFillGooglePlusCircle></AiFillGooglePlusCircle>
        Sign In with Google
      </button>

      <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 ">Or</div>

  
      <form onSubmit={handleSubmit}>
        <div className="grid gap-y-4">
       
          <div>
            <label for="email" className="block text-sm mb-2 dark:text-white">Email address</label>
            <div className="relative">
              <input onChange={onChangeHandele} type="email" id="email" name="email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"/>
              <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
              
              </div>
            </div>
            <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
          </div>
        
          <div>
            <label for="password" className="block text-sm mb-2 dark:text-white">Password</label>
            <div className="relative">
              <input onChange={onChangeHandele} type="password" id="password" name="password" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"/>
              <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
              </div>
            </div>
            <p className="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
          </div>
          <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Sign up</button>
        </div>
      </form>
   
    </div>
  </div>
</div>
</>
  )
}

export default SignIn