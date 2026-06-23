import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full bg-[#222] text-white py-[30px] px-[20px] text-center mt-[50px]'>
        <div className='flex justify-center items-center gap-[25px] flex-wrap mb-[20px]'>
            <h2 className='w-full text-[30px] mb-[10px]'>My Website</h2>
            <Link className='text-white no-underline text-[18px] py-[5px] px-[10px] 
            transition duration-300 hover:text-lightgray' to='/'>Home</Link>
            <Link className='text-white no-underline text-[18px] py-[5px] px-[10px] 
            transition duration-300 hover:text-lightgray' to='/about'>About</Link>
            <Link className='text-white no-underline text-[18px] py-[5px] px-[10px] 
            transition duration-300 hover:text-lightgray' to='/profile'>Profile</Link>
            <Link className='text-white no-underline text-[18px] py-[5px] px-[10px] 
            transition duration-300 hover:text-lightgray' to='/contact'>Contact</Link>
        </div>
        <p className='text-[14px]'>© 2026 All Rights Reserved</p>
    </footer>
  )
}

export default Footer
