import React from 'react'
import { useNavigate } from 'react-router-dom';


const initialProducts = [
  { id: 101, name: "Samsung Galaxy S24", price: 75000 },
  { id: 102, name: "Apple iPhone 15", price: 80000 },
  { id: 103, name: "Sony Headphones WH-1000XM5", price: 30000 },
  { id: 104, name: "Apple iPad Air", price: 60000 },
  { id: 105, name: "Dell Inspiron Laptop", price: 55000 },
  { id: 106, name: "Boat Smartwatch Wave", price: 25000 },
  { id: 107, name: "JBL Bluetooth Speaker", price: 5000 },
  { id: 108, name: "Logitech Wireless Mouse", price: 1500 },
  { id: 109, name: "HP Wireless Keyboard", price: 2000 },
  { id: 110, name: "Seagate 1TB External HDD", price: 4500 }
];

const Products = () => {
    const navigate  = useNavigate();
  
  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const isAlreadyInCart = existingCart.some(item => item.id === product.id);

  
    if (isAlreadyInCart) {
      const updatedCart = existingCart.filter(item => item.id !== product.id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      alert(`${product.name} Removed from cart!`);
      window.location.reload(); 
      return;
    }

  
    const updatedCart = [...existingCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} Add to cart!`);
    window.location.reload();
  };
  return (
    <div className='w-full max-w-6xl mx-auto px-6 md:px-12 py-10 font-sans select-none box-border'>
      <div className='flex justify-between items-center border-b border-gray-100 pb-5 mb-8 w-full'>
        <h2 className='text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight'>🛍️ Products Shop</h2>
        <button className='flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold 
        text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 
        transform hover:-translate-y-0.5 cursor-pointer shrink-0' 
         onClick={()=>navigate('/Cart')}>
            Go to Cart 🛒
        </button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-stretch w-full'>
        {initialProducts.map((product)=>{
        const isInLocalStorage = (JSON.parse(localStorage.getItem("cart")) || []).some(item => item.id === product.id);
        return(
            <div className='w-full bg-white border border-gray-100 rounded-2xl p-6 
            shadow-xs hover:shadow-md transition-all flex flex-col justify-between box-border'>
                <h3 className='text-base font-bold text-gray-800 mb-2 tracking-wide line-clamp-2 min-h-[48px]'>{product.name}</h3>
                <p className='text-lg font-black text-gray-900 mb-5'>Price: ₹{product.price}</p>
                <button 
                className={`w-full py-2.5 font-semibold text-xs rounded-xl transition-all cursor-pointer border ${isInLocalStorage 
                    ? 'bg-red-50 hover:bg-red-500 text-red-600 hover:text-white border-red-100 hover:border-red-500' 
                    : 'bg-gray-50 hover:bg-blue-600 text-gray-700 hover:text-white border-gray-200 hover:border-blue-600'}`} 

                onClick={()=>addToCart(product)}>
                    {isInLocalStorage ? 'Remove' : 'Add to Cart'}   
                </button>
            </div>
        )
        })}
      </div>
    </div>
  )
}

export default Products
