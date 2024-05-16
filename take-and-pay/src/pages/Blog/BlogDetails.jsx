import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const BlogDetails = () => {
    const {id}=useParams()
    const blogs = useSelector((state) => state.blog.blogs);
    const blogFilter=blogs.find(blog=>blog._id===id)
    console.log(blogFilter)
  return (
    <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
    <div className="max-w-2xl">
    <div className="group block">
    <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
      <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl" src={blogFilter.image} alt="Image Description"/>
    </div>
    <div className="pt-4">
      <h3 className=" text-center font-semibold relative inline-block text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100s">
     {blogFilter.title}
      </h3>
      </div>
    
      <div className="mt-1 text-gray-600 dark:text-neutral-400">
       <p>{blogFilter.description}</p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default BlogDetails


