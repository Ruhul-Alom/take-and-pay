import {useEffect} from 'react'
import Hero from './Hero'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductData } from '../../redux/features/product/productSlice';
import { fetchProductSliderData } from '../../redux/features/product/productSliderSlice';
import Product from './Product';
import { Helmet } from 'react-helmet';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';





const Home = () => {
  return (
    <div>
       <Helmet>
    <title>home</title>
   
</Helmet>
        <Hero></Hero>
        <SectionTitle heading="Quality Product with Affordable Price" subHeading="Buy Anything What do you want"></SectionTitle>
        <Product></Product>
    
    
       
       
    </div>
  )
}

export default Home