import React from 'react'
import Navbar from '../Layout/Navbar/Navbar'
import {Outlet} from 'react-router-dom'
import Footer from '../Layout/Footer/Footer'
import {Toaster} from 'react-hot-toast'
const MainLayout = () => {
  return (
    <>
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default MainLayout