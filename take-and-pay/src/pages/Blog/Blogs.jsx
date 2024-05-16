import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Blog from './Blog';
import { Helmet } from 'react-helmet';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const Blogs = () => {
    const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);
  return (
   
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
       <Helmet>
    <title>blog</title>
</Helmet>

  <div className='my-6'>
   <SectionTitle heading={`Stay in the know with insights from industry experts`} subHeading={`Insights`}></SectionTitle>
  </div>
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 space-x-5 space-y-10">
    {
blogs.map(blog=><Blog blog={blog}></Blog>)
    }
    </div>
    </div>
  )
}

export default Blogs