import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import ViewProduct from "../Components/ViewProduct/ViewProduct";
import Shop from "../pages/Shop/Shop";
import Contact from "../pages/Contact/Contact";
import Blogs from "../pages/Blog/Blogs";
import BlogDetails from "../pages/Blog/BlogDetails";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import Cart from "../pages/Cart/Cart";
import UserInfo from "../pages/UserInfo/UserInfo";
import Checkout from "../pages/Checkout/Checkout";
import PrivataRoute from "./PrivataRoute";




const router=createBrowserRouter([
{ path:"/" ,
element:<MainLayout />,
children:[
{
    path:"/" ,
    element:<Home />,
},
{
    path:"product/:id" ,
    element:<ViewProduct />,
},
{
    path:"shop" ,
    element:<Shop />,
},

{
    path:"contact" ,
    element:<Contact/>,
},
{
    path:"blog" ,
    element:<Blogs/>,
},
{
    path:"blog/:id" ,
    element:<BlogDetails/>,
},
{
    path:"register" ,
    element:<Register/>,
},
{
    path:"login" ,
    element:<SignIn/>,
},
{
    path:"cart" ,
    element:<PrivataRoute><Cart/></PrivataRoute>,
},
{
    path:"userinfo" ,
    element:<UserInfo/>,
},
{
    path:"checkout" ,
    element:<PrivataRoute><Checkout/></PrivataRoute>,
},

]
},





])
export default router;


   