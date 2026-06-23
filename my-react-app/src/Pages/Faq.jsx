import React, { useState } from 'react'

const Faq = () => {
  const [openQuestion,setOpenQuestion] = useState(null);
   const faqData = [
    { 
      q: "1. How can I contact the support team?", 
      a: "You can contact us by filling out the form on our Contact Me page." 
    },
    { 
      q: "2. Is this service free or paid?", 
      a: "Our basic services are completely free, but advanced features require a subscription." 
    },
    { 
      q: "3. How long does it take to get a response after submission?", 
      a: "Usually, our team will review your message and reply via email within 24 hours." 
    },
    { 
      q: "4. Can I update my password after registration?", 
      a: "Yes, you can securely change your password anytime from your profile settings." 
    },
    { 
      q: "5. What should I do if my image upload fails?", 
      a: "Please ensure that your image format is PNG or JPG and the file size is less than 2MB." 
    }
  ];
  const handleToggle = (index) => {
    // ૩. જો એ જ સવાલ ફરી ક્લિક થાય તો બંધ (null) કરો, નહિતર નવો ઇન્ડેક્સ સેટ કરો
    setOpenQuestion(openQuestion === index ? null : index);
  };
  return (
    <div className='p-8 max-w-2xl mx-auto my-10 font-sans select-none'>
      <h1 className='text-3xl font-extrabold text-gray-800 text-center mb-8'>Frequently Asked Questions</h1>
      {faqData.map((item,index)=>(
        <div key={index} className='mb-4 bg-white border border-gray-200 rounded-xl shadow-xs overflow-hidden'>
          <div className='flex justify-between items-center p-5 cursor-pointer bg-gray-50/50 hover:bg-gray-50 transition-colors'>
          <span className='text-base font-semibold text-gray-800 pr-4'>{item.q}</span>
          <button className='text-xl font-bold text-blue-600 cursor-pointer w-8 h-8 flex justify-center 
          items-center bg-blue-50 rounded-full 
          transition-transform duration-200' type='button' onClick={()=>handleToggle(index)}>
            +
          </button>
          </div>
          {openQuestion===index&&(
            <div className='p-5 border-t border-gray-100 bg-white animate-fadeIn'>
              <p className='text-sm leading-relaxed text-gray-600'>{item.a}</p>
            </div>
          )}

        </div>
        
      ))}
    </div>
  )
}

export default Faq
