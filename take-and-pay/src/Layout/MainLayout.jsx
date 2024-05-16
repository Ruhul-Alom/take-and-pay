import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'

const MainLayout = () => {
  return (
    <div className='max-w-6xl mx-auto font-fontPhilo'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default MainLayout