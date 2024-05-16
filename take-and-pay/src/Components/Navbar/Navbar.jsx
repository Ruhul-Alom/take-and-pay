import React, { useState } from "react";
import { MdSearch, MdOutlineShoppingBag, MdMenu, MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleLogOut } from "../../redux/features/authentication/authSlice";
import { clearCart } from "../../redux/features/cart/cartSlice";

const Navbar = () => {
  const dispatch=useDispatch()
  const {user}=useSelector(state=>state.auth)
  const {carts} = useSelector((state) => state.carts);
  console.log(carts);
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
const logOut=()=>{
  dispatch(handleLogOut())
  dispatch(clearCart())
}
  const navOptions = [
    { route: '/', routeName: 'Home' },
    { route: 'shop', routeName: 'Shop' },
    { route: 'blog', routeName: 'Blog' },
    { route: 'contact', routeName: 'Contact' },
   
  ];
 

  return (
    <header class="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 dark:bg-neutral-800">
    <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
      <div class="flex items-center justify-between">
      <Link to="/" class="flex-none text-xl font-semibold dark:text-white">
              Take And Pay
            </Link>
        <div class="sm:hidden">
          <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none ">
          
          {isOpen?   <MdClose onClick={toggleMenu}></MdClose>: <MdMenu onClick={toggleMenu} MdMenu></MdMenu>
                      
  }
          </button>
        </div>
      </div>
      <div id="navbar-with-mega-menu" class={`hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block ${isOpen ? 'block' : 'hidden'}`}>
        <ul class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              {navOptions.map(option => (
                <li key={option.route}>
                  <Link to={option.route} class="font-medium text-gray-600 hover:text-gray-400 " >
                    {option.routeName}
                  </Link>
                </li>
              ))}
              <li>
             {
              user==null?
              <Link to='/register' class="font-medium text-gray-600 hover:text-gray-400" >
              LogIn/Register'
              </Link>:<Link onClick={logOut} to='/register' class="font-medium text-gray-600 hover:text-gray-400 " >
              Logout
              </Link>
             } 
              </li>
               
            <Link to="/cart" className=" justify-center items-center flex gap-2 text-green-400 hover:text-gray-600 px-4 py-2 rounded-lg text-sm">
              <MdOutlineShoppingBag />{carts.length}
            </Link>
        </ul>
      </div>
    </nav>
  </header> 
  );
};

export default Navbar;
