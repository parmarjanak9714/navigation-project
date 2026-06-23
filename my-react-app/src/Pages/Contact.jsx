import React from 'react'

const Contact = () => {
  return (
    <div className='p-8 max-w-lg mx-auto bg-white rounded-2xl shadow-md border border-gray-100 my-10 font-sans'>
      <h1 className='text-3xl font-extrabold text-gray-800 mb-6'>Contact Us</h1>
      <form>
        <label htmlFor='name' className='text-sm font-semibold text-gray-700'>Name</label>
        <br/>
        <input type='text' placeholder='Enter Your Name' className='w-full mt-1 mb-4 px-4 py-3 bg-gray-50 
        border border-gray-200 rounded-xl outline-none text-gray-800 
        transition-all focus:border-blue-500 focus:bg-white' required/>
        <br/>
        <label className='text-sm font-semibold text-gray-700' htmlFor='email'>Email</label>
        <br/>
        <input type='email' placeholder='Enter Your Email'className='w-full mt-1 mb-4 px-4 py-3 bg-gray-50 
        border border-gray-200 rounded-xl outline-none text-gray-800 
        transition-all focus:border-blue-500 focus:bg-white' required/>
        <br/>
        <label className='text-sm font-semibold text-gray-700' htmlFor='message'>Message</label>
        <br/>
        <textarea className='w-full mt-1 mb-4 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl 
        outline-none text-gray-800 h-32 resize-none transition-all focus:border-blue-500 focus:bg-white' 
        placeholder='Write your message here...'>

        </textarea>
        <br/>
<button type='submit' className='w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600
 hover:from-blue-700 hover:to-indigo-700 text-white 
 font-medium rounded-xl shadow-md transition-all cursor-pointer'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
