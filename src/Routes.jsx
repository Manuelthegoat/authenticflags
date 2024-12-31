import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ShopPage from './Pages/ShopPage'
import CartPage from './Pages/CartPage'
import Blog from './Pages/Blog'

const Routing = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/blog' element={<Blog />} />
    </Routes>
    </>
  )
}

export default Routing