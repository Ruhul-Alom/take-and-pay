import React from 'react'
import { Link } from 'react-router-dom'

const Blog = ({blog}) => {
  
  return (
  
<Link to={`/blog/${blog._id}`} className="group" >
      <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src={blog.image} alt="Image Description"/>
      </div>

      <div className="mt-7">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
        {blog.title}
        </h3>
        <p className="mt-3 text-gray-800 dark:text-neutral-200">
        {blog.description.slice(0,50)}
        </p>
        <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
          Read more
        </p>
      </div>
    </Link>
    
  )}

export default Blog