import React from 'react'
import Navbar from "./Navbar"
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Footer from './Footer';

const Layout = () => {
  return (
    <div>
      <ToastContainer position="bottom-left"/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout