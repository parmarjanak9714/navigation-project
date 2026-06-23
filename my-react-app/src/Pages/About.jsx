import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Company from './Company'
import History from './History'
const About = () => {
  return (
    <div className='w-full min-h-[70vh] bg-white flex flex-col justify-center items-center px-6 py-16 text-center select-none'>
      <h1 className='text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 drop-shadow-sm'>About Us</h1>
      <p className='max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed font-light mb-10'>We are passionate about creating simple and creative digital experiences. 
        Our mission is to provide quality services, modern designs,
         and helpful solutions that make things easier and better for everyone.
         We believe in innovation, learning, and delivering the best experience to our users</p>
         <div className='flex gap-4 p-1.5 bg-gray-50 border border-gray-200 rounded-2xl shadow-2xs'>
          <Link 
          className='px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600
           hover:from-blue-700 hover:to-indigo-700 text-white font-medium text-sm rounded-xl shadow-xs
            transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer'
          to='company'>
          Company
          </Link>
          <Link 
          className='px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600
           hover:from-blue-700 hover:to-indigo-700 text-white font-medium text-sm rounded-xl shadow-xs 
           transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer'
          to='history'>
          History
          </Link>
         </div>
         <div className='w-full max-w-2xl mt-8 text-left p-6 bg-gray-50/50 border border-gray-100 rounded-2xl'>
            <Outlet/>
         </div>
    </div>
    
  )
}

export default About
