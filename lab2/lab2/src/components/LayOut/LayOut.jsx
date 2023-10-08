import React from 'react'
import Navbar from '../Navbar/Navbar';
import Contact from '../Contact/Contact';
import { Outlet } from 'react-router-dom';
export default function LayOut() {
  return (
    <>
        <Navbar/>
        <Outlet/>




        
        <Contact/>
    </>
  )
}
