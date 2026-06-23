import React from 'react'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Faq from './Pages/Faq'
import Users from './Pages/Users'
import Company from './Pages/Company'
import History from './Pages/History'
import Company_profile from './Pages/Company_profile'
import Weather from './Pages/Weather'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import LodeMore from './Pages/LodeMore'
import UserLodeMore from './Pages/UserLodeMore'
import BlogGrid from './Pages/BlogGrid'
import BlogDetails from './Pages/BlogDetails'

const App = () => {
  return (
    <div>
<Navbar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}>
<Route path='company' element={<Company/>}/>
<Route path='history' element={<History/>}/>
</Route>
<Route path='/Company_profile' element={<Company_profile/>}/>
<Route path='/weather' element={<Weather/>}/>
<Route path='/products' element={<Products/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/faq' element={<Faq/>}/>
<Route path='/users' element={<Users/>}/>
<Route path='/Cart' element={<Cart/>}/>
<Route path='/loadmore' element={<LodeMore/>}/>
<Route path='/userlodemore' element={<UserLodeMore/>}/>
<Route path='/blogGrid' element={<BlogGrid/>}/>
<Route path='/blod-detail/:blogId' element={<BlogDetails/>}/>
</Routes>
<Footer/>
    </div>
  )
}

export default App
