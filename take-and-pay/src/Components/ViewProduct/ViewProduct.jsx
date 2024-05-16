import {React,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useLocation, useNavigate, useParams} from 'react-router-dom'
import { addToCart } from '../../redux/features/cart/cartSlice';
import Swal from 'sweetalert2';
import StarRating from '../StarRating/StarRating';

const ViewProduct = () => {
  
  let { id } = useParams();
  const { products } = useSelector((state) => state.product);
  console.log(products);
  // Find the product by id
  const search = products.find(item => item._id === id);
  
  const navigate=useNavigate()
  const location=useLocation()
  console.log(location.state);
  const {user}=useSelector(state=>state.auth)
    const dispatch=useDispatch()
    const handeAddTocart=()=>{
      if(user && user.email){
     
        const product={
          ...search,
          productId:search._id,
          email:user.email
        }
        dispatch(addToCart(product))
      }
      else{
        Swal.fire({
          title: "Yoy Are Not Log In",
          text: "You won't be able to add cart!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, want to log in!"
        }).then((result) => {
          if (result.isConfirmed) {
          
              navigate('/login',{state:{from:location}})
          
          }
        });

      }
    }
  
  // Check if search and productImages exist
  if (!search || !search.productImages) {
    return <div>Error: Product not found or missing images</div>;
  }

  // Get the first image
  const firstImage = search.productImages[0];
  
  const [currentImg,setCurrentImg]=useState(firstImage)
  
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
  
    <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
     
      {
        search.productImages.map(img=> 
<img onClick={()=>setCurrentImg(img)}src={img} className="h-auto max-w-full rounded-lg "  alt="" />
    )
  }

     </div>
     <div className='flex justify-center items-center '>
     <div >
<img src={currentImg} alt="" />
     </div>
     </div>
     </div> 
   
      <div className='grid justify-center items-center'>
        <h1 className="block text-xl font-bold text-gray-800 sm:text-2xl lg:text-4xl lg:leading-tight dark:text-white">{search.productName} </h1>
          <StarRating rating={search.rating}/>
         
        <span className="text-blue-600">Tk :{search.price} </span>
        <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">{search.description}</p>
  
     
        <div className="mt-7 grid gap-3 w-full sm:inline-flex">
        <button onClick={handeAddTocart} className="w-full  outline-primary py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" href="#">
          Add To Cart
        </button>
         
        </div>
      
   
  </div>
  
</div>


  )
}

export default ViewProduct