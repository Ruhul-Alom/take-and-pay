import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/product/productSlice'
import productSliderReducer from "../features/product/productSliderSlice";
import blogReducer from "../features/blog/blogSlice";
import authReducer from "../features/authentication/authSlice";
import cartReducer from "../features/cart/cartSlice";
const store=configureStore({
    reducer: {
        product:productReducer,
        slider:productSliderReducer,
        blog:blogReducer,
        auth:authReducer,
        carts:cartReducer
    }
  })
  export default store