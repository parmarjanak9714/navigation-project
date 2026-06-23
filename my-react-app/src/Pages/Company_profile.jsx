import React from 'react'

const Company_profile = () => {
  return (
    <div className='p-8 max-w-2xl mx-auto my-10 bg-white 
    border border-gray-100 rounded-2xl shadow-md font-sans select-none'>
      <h1 className='text-2xl md:text-3xl font-extrabold 
      text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2 drop-shadow-xs'>
        TechSol India - Verified Business Profile
        </h1>
      <h3 className='text-xs font-bold text-blue-600 bg-blue-50/80 px-2.5 py-1 rounded-md
       inline-block mb-6 tracking-wider'>
        Registration No: #987654321
        </h3>
      <p className='text-sm font-medium text-amber-600 bg-amber-50 border border-amber-100 p-4 rounded-xl leading-relaxed mb-6'>
        This is a private hidden page that only opens from the Company section.
        </p>
      <br />
      <h3 className='text-lg font-bold text-gray-800 mb-4 tracking-wide'>Our Corporate Services:</h3>
      <ul className='space-y-3'>

        <li className='flex items-center gap-3 text-sm md:text-base text-gray-600 
        font-light bg-gray-50/50 p-3 rounded-xl border border-gray-100/70'>
          Enterprise React Applications
          </li>

        <li className='flex items-center gap-3 text-sm md:text-base text-gray-600 
        font-light bg-gray-50/50 p-3 rounded-xl border border-gray-100/70'>
          Advanced Form Validation Ecosystems
          </li>

        <li className='flex items-center gap-3 text-sm md:text-base text-gray-600 
        font-light bg-gray-50/50 p-3 rounded-xl border border-gray-100/70'>
          Cloud Infrastructure Setup
          </li>
      </ul>
    </div>
  )
}

export default Company_profile
