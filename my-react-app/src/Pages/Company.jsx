import React from 'react'

const Company = () => {
  return (
    <div className='w-full font-sans'>
      <h1 className='text-2xl font-bold text-gray-800 mb-3 tracking-wide'>Our Company</h1>
      <p className='text-sm md:text-base text-gray-600 leading-relaxed font-light mb-6'>
        Our company is focused on creating modern, user-friendly, 
        and responsive web applications. We work with creativity, 
        innovation, and technology to deliver high-quality digital 
        experiences for users around the world.
      </p> 
      <a className='inline-flex items-center gap-2 px-5 py-2.5 
      bg-blue-50 hover:bg-blue-100 text-blue-600 
      hover:text-blue-700 font-semibold text-xs tracking-wider uppercase rounded-xl border border-blue-100
       transition-all duration-300 cursor-pointer shadow-3xs'
       href='/Company_profile' rel='noopener noreferrer'>
      Click here to open Official Profile
      </a>
    </div>
  )
}

export default Company
