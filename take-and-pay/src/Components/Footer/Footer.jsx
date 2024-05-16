import React from "react";
import { FaPinterest } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto bg-gray-900 w-full">
    <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
     
      <div className="grid grid-cols-2 md:grid-cols-3  gap-6">
        <div className="col-span-full lg:col-span-1">
          <Link to="/" className="flex-none text-xl font-semibold text-white">Take And Pay</Link>
          <div>
          <Link to="https://www.facebook.com"className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600">
          <FaFacebookF />
          </Link>
          <Link to="https://twitter.com" className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" >
          <FaTwitter />
          </Link>
          <Link to="https://www.youtube.com" className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" >
          <FaYoutube />
          </Link>
          <Link to="https://www.instagram.com/" className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" >
          <AiFillInstagram />
          </Link>
         
        </div>
        </div>
    
  
        <div className="col-span-1">
          <h4 className="font-semibold text-gray-100">Account</h4>
  
          <div className="mt-3 grid space-y-3">
          <p><Link to="/userinfo" className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#"> Fill Up User Info</Link></p>
            
            <p><Link to="/" className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">  Checkout</Link></p>

          </div>
        </div>
      
  
        <div className="col-span-1">
          <h4 className="font-semibold text-gray-100">QUICK LINKS</h4>
  
          <div className="mt-3 grid space-y-3">
            <p><Link to="contact" className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200" >About us</Link></p>
            <p><Link to="blog" className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Blog</Link></p>
            

          </div>
        </div>
      
  
       
     
      </div>
  
  
      <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-400 text-center"> All rights reserved Take And Pay.</p>
        </div>
       
        
     
      </div>
    </div>
  </footer>
  );
};

export default Footer;


