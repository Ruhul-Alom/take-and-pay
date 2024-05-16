import React from 'react'
import { useSelector } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const Hero = () => {
 
  const slider = useSelector((state) => state.slider.sliders);
  console.log(slider);

  return (
    
   
    
      <div className='grid grid-cols-1'>
        <Carousel infiniteLoop>
      {
            slider.map(slider=>
              <div className="h-[30rem] md:h-[calc(100vh-106px)]  flex flex-col  bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${slider.image})`}}>
            <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
              <span className="block text-white">{slider.tag}</span>
              <span className="block text-blue-700 text-xl md:text-3xl">Buy Products With Affordable price And Authentic  Seller </span>
              <div className="mt-5">
                <Link to="shop" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" >
                  See More Products
                </Link>
              </div>
            </div>
          </div>)
          }
          </Carousel>
          </div>
          
           
       
       
       
    
       

      
         
       
  )
}

export default Hero