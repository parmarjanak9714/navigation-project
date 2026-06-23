import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  //open close state use
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-[#222] font-sans relative z-50 shadow-md">
    
      <div className="w-full max-w-7xl mx-auto px-4 min-[1141px]:px-12 py-4 flex flex-col min-[1141px]:flex-row min-[1141px]:items-center justify-between">
        
        
        <div className="flex justify-between items-center w-full min-[1141px]:w-auto">
          <span className="text-white font-extrabold text-lg tracking-wider uppercase select-none">Menu</span>
          
          
          <button 
            type="button"
            onClick={() => setIsOpen(!isOpen)} 
            className="min-[1141px]:hidden text-white text-2xl focus:outline-none cursor-pointer w-10 h-10 flex justify-center items-center bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors select-none"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        
        <nav className={`w-full min-[1141px]:w-auto flex flex-col min-[1141px]:flex-row min-[1141px]:items-center gap-[6px] min-[1141px]:gap-[10px] mt-4 min-[1141px]:mt-0 transition-all duration-300 ${isOpen ? 'flex' : 'hidden min-[1141px]:flex'}`}>
          <Link onClick={() => setIsOpen(false)} className='text-white no-underline text-[15px] min-[1141px]:text-[16px] font-medium py-[8px] px-[12px] min-[1141px]:px-[14px] rounded-[6px] transition duration-300 hover:bg-white hover:text-[#222] whitespace-nowrap block min-[1141px]:inline-block text-left min-[1141px]:text-center' to='/'>Home</Link>
          <Link onClick={() => setIsOpen(false)} className='text-white no-underline text-[15px] min-[1141px]:text-[16px] font-medium py-[8px] px-[12px] min-[1141px]:px-[14px] rounded-[6px] transition duration-300 hover:bg-white hover:text-[#222] whitespace-nowrap block min-[1141px]:inline-block text-left min-[1141px]:text-center' to='/about'>About</Link>
          <Link onClick={() => setIsOpen(false)} className='text-white no-underline text-[15px] min-[1141px]:text-[16px] font-medium py-[8px] px-[12px] min-[1141px]:px-[14px] rounded-[6px] transition duration-300 hover:bg-white hover:text-[#222] whitespace-nowrap block min-[1141px]:inline-block text-left min-[1141px]:text-center' to='/contact'>Contact</Link>
          <Link onClick={() => setIsOpen(false)} className='text-white no-underline text-[15px] min-[1141px]:text-[16px] font-medium py-[8px] px-[12px] min-[1141px]:px-[14px] rounded-[6px] transition duration-300 hover:bg-white hover:text-[#222] whitespace-nowrap block min-[1141px]:inline-block text-left min-[1141px]:text-center' to='/faq'>FAQ</Link>
          <Link onClick={() => setIsOpen(false)} className='text-white no-underline text-[15px] min-[1141px]:text-[16px] font-medium py-[8px] px-[12px] min-[1141px]:px-[14px] rounded-[6px] transition duration-300 hover:bg-white hover:text-[#222] whitespace-nowrap block min-[1141px]:inline-block text-left min-[1141px]:text-center' to='/users'>Users</Link>
          <Link onClick={() => setIsOpen(false)} className='text-white no-underline text-[15px] min-[1141px]:text-[16px] font-medium py-[8px] px-[12px] min-[1141px]:px-[14px] rounded-[6px] transition duration-300 hover:bg-white hover:text-[#222] whitespace-nowrap block min-[1141px]:inline-block text-left min-[1141px]:text-center' to='/weather'>Weather</Link>
          <Link onClick={() => setIsOpen(false)} className='text-white no-underline text-[15px] min-[1141px]:text-[16px] font-medium py-[8px] px-[12px] min-[1141px]:px-[14px] rounded-[6px] transition duration-300 hover:bg-white hover:text-[#222] whitespace-nowrap block min-[1141px]:inline-block text-left min-[1141px]:text-center' to='/products'>Products</Link>
          <Link onClick={() => setIsOpen(false)} className='text-white no-underline text-[15px] min-[1141px]:text-[16px] font-medium py-[8px] px-[12px] min-[1141px]:px-[14px] rounded-[6px] transition duration-300 hover:bg-white hover:text-[#222] whitespace-nowrap block min-[1141px]:inline-block text-left min-[1141px]:text-center' to='/cart'>Cart</Link>
          <Link onClick={() => setIsOpen(false)} className='text-white no-underline text-[15px] min-[1141px]:text-[16px] font-medium py-[8px] px-[12px] min-[1141px]:px-[14px] rounded-[6px] transition duration-300 hover:bg-white hover:text-[#222] whitespace-nowrap block min-[1141px]:inline-block text-left min-[1141px]:text-center' to='/loadmore'>LodeMore</Link>
          <Link onClick={() => setIsOpen(false)} className='text-white no-underline text-[15px] min-[1141px]:text-[16px] font-medium py-[8px] px-[12px] min-[1141px]:px-[14px] rounded-[6px] transition duration-300 hover:bg-white hover:text-[#222] whitespace-nowrap block min-[1141px]:inline-block text-left min-[1141px]:text-center' to='/userlodemore'>UserLoadMore</Link>
          <Link onClick={() => setIsOpen(false)} className='text-white no-underline text-[15px] min-[1141px]:text-[16px] font-medium py-[8px] px-[12px] min-[1141px]:px-[14px] rounded-[6px] transition duration-300 hover:bg-white hover:text-[#222] whitespace-nowrap block min-[1141px]:inline-block text-left min-[1141px]:text-center' to='/blogGrid'>BlogGRID</Link>
        </nav>

      </div>
    </div>
  )
}

export default Navbar
