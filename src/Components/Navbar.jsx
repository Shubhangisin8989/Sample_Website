import React, { useEffect, useState } from 'react'
import {assets} from "../assets/assets"

export const Navbar = () => {
  const [ShowMobileMenu,setShowMobileMenu]=useState(false)
  useEffect(()=>{
    if (setShowMobileMenu){
      document.body.style.overflow="y-scroll"
    }else{document.body.style.overflow="auto"}
    return()=>{
      document.body.style.overflow="auto"
    }
  },[setShowMobileMenu])
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent '>
            <img src={assets.logo} alt="" />
            <ul className='hidden md:flex gap-7 text-white'>
                <a href="#Home" className='cursor-pointer hover:text-gray-300'>Home</a>
                <a href="#About" className='cursor-pointer hover:text-gray-300'>About</a>
                <a href="#Projects" className='cursor-pointer hover:text-gray-300'>Project</a>
                <a href="#Testimonials" className='cursor-pointer hover:text-gray-300'>Testimonials</a>
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Signup</button>
            <img onClick={()=>{setShowMobileMenu(true)}} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
        </div>
        {/* for phones */}
          <div className={`md:hidden ${ShowMobileMenu?"fixed w-full":"h-0 w-0"} top-0 bottom-0 right-0 overflow-hidden bg-white transition-all`}> 
          <div className='flex justify-end p-6 cursor-pointer' >
            <img onClick={()=>{setShowMobileMenu(false)}} src={assets.cross_icon} className='w-6' alt="" />
          </div>
          <ul className='flex flex-col gap-2 items-center mt-5 px-5 text-lg font-medium'>
            <a onClick={()=>{setShowMobileMenu(false)}} href="#Home" className='px-4 py-2 inline-block rounded-full'>Home</a>
            <a onClick={()=>{setShowMobileMenu(false)}} href="#About" className='px-4 py-2 inline-block rounded-full'>About</a>
            <a onClick={()=>{setShowMobileMenu(false)}} href="#Projects" className='px-4 py-2 inline-block rounded-full'>Projects</a>
            <a onClick={()=>{setShowMobileMenu(false)}} href="#Testimonials" className='px-4 py-2 inline-block rounded-full'>Testimonials</a>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
