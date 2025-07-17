import React from 'react'
import { assets } from '../assets/assets';

const Footer=()=>{
 return (
     <div className='w-full bg-gray-900 lg:px-32 md:px-20 px-4 pt-10 overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo_dark} alt="" />
                <p className='text-gray-400 mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard
               dummy text.</p>
            </div>
            <div className='w-full mb-8 md:mb-0 md:w-1/5'>
                <h3 className='text-white font-bold text-lg mb-4'>Company</h3>
                <ul className='flex flex-col gap-2 text-gray-400'> 
                    <a className='hover:text-white' href="#Home">Home</a>
                    <a className='hover:text-white' href="#About">About</a>
                    <a className='hover:text-white' href="#Contact">Contact Us</a>
                    <a className='hover:text-white' href="#">Privacy Policy</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3'>
                <h3 className='text-white font-bold text-lg mb-4'>Subscribe to our newsletter</h3>
                <p className='max-w-80 text-gray-400 mb-4'>The Latest news, articles, and resources sent to your inbox quickly</p>
                <div className='flex gap-2'>
                    <input type="email" placeholder='Enter Your Email' className='p-2 rounded bg-gray-800 text-gray-400 
                    border border-gray-700 focus:outline-none w-full md:w-auto'/>
                    <button className='rounded bg-blue-500 text-white px-4 py-2'>Subscribe</button>
                </div>
            </div>
        </div>
        <div className='border-gray-700 text-center text-gray-500 py-4 mt-10 border-t'>Copyright 2024 @ GreatStack All Rights Reserved</div>
     </div>
  );
};

export default Footer;