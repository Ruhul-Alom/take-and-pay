import React from 'react'
import ConatctInfo from './ConatctInfo'
import ConatctForm from './ConatctForm'

const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
     <ConatctInfo></ConatctInfo>

    <ConatctForm></ConatctForm>
    </div>
    
  )
}

export default Contact


