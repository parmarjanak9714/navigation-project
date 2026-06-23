import React from 'react'

const Home = () => {
  return (
    <div className='w-full min-h-[70vh] bg-white flex flex-col justify-center items-center px-6 py-16 text-center select-none'>
      <h1 className='text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 drop-shadow-sm'>Welcome to our website!</h1>
      <p className='max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed font-light mb-10'>
        We provide simple, modern, 
and user-friendly solutions to help you learn, grow, and explore new opportunities.
Our goal is to create a smooth and enjoyable experience for every visitor with clean design, 
useful features, and quality content. Stay connected and discover something amazing with us.
      </p>
    </div>
  )
}

export default Home
