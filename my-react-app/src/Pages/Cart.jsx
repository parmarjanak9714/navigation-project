import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const navigate = useNavigate();
  // cart item store 
  const [cartItems, setCartItems] = useState([]);

  // page open and show data
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  // item remove function
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart); 
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
  };

  // total price 
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className='w-full max-w-6xl mx-auto px-6 md:px-12 py-10 font-sans select-none box-border'>
      
      {/* page name and prev page open button */}
      <div className='flex justify-between items-center border-b border-gray-100 pb-5 mb-8 w-full'>
        <h2 className='text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight'>🛒 Shopping Cart</h2>
        <button onClick={() => navigate('/Products')}
        className='px-5 py-2.5 bg-gray-500 hover:bg-gray-600 text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer shrink-0'
          >
          ⬅️ Back to Shop
        </button>
      </div>

      {/* cart item availabale to show otherwise msg show your cart is emty */}
      {cartItems.length > 0 ? (
        <div className='w-full'>
          {/* cart grid 2 box */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-stretch'>
            {cartItems.map((item) => (
              <div key={item.id}
              className='w-full bg-white border border-gray-100 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all flex justify-between items-center box-border gap-4' 
              >
                <div className='min-w-0 flex-1'>
                  <h3 className='text-base font-bold text-gray-800 mb-1 tracking-wide truncate capitalize'>{item.name}</h3>
                  <p className='text-lg font-black text-green-600'>Price: ₹{item.price}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className='px-5 py-2 bg-red-50 hover:bg-red-500 text-red-600 hover:text-white font-medium text-xs rounded-lg transition-all duration-200 border border-red-100 hover:border-red-500 cursor-pointer text-center shrink-0'
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          
          {/* total bill box*/}
          <div className='mt-8 p-6 bg-gray-50 border border-gray-100 rounded-2xl text-right w-full box-border'>
            <h3 className='text-xl font-bold text-gray-800'>Total Amount: <span className='text-2xl font-black text-green-600 ml-1'>₹{totalPrice}</span></h3>
          </div>
        </div>
      ) : (
        <p className='text-center text-gray-400 font-medium text-lg mt-[50px] py-10 bg-gray-50 rounded-2xl border border-dashed border-gray-200'>Your Cart Is Emty!</p>
      )}
    </div>
  );
};

export default CartPage;
