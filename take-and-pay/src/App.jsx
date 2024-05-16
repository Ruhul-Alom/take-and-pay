
import {RouterProvider} from 'react-router-dom'
import router from './router/Router'
import { Provider, useDispatch, useSelector} from 'react-redux'
import store from './redux/app/store'
import { useEffect } from 'react';
import { fetchProductData } from './redux/features/product/productSlice';
import { fetchProductSliderData } from './redux/features/product/productSliderSlice';
import { fetchBlogs } from './redux/features/blog/blogSlice';
import { fetchCartData } from './redux/features/cart/cartSlice';
import auth from './firebase/firebase.config';
import { handleLogOut, signInuser } from './redux/features/authentication/authSlice';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const dispatch = useDispatch();
  const slider= useSelector((state) => state.slider.slider);
  const {user}=useSelector(state=>state.auth)
  const {carts}=useSelector(state=>state.carts)

  
  useEffect(() => {
    dispatch(fetchProductData());
    dispatch(fetchProductSliderData())
    dispatch(fetchBlogs())

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(signInuser(user));
        const email=user.email
        dispatch(fetchCartData(email))
      } else {
        dispatch(handleLogOut());
      }
    });

    return () => unsubscribe();
  }, [dispatch,user,carts]);
     
    
  



  return (
   
      <RouterProvider router={router}>
       </RouterProvider>
    
  )
}

export default App
