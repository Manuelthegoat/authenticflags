import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ShopPage from './Pages/ShopPage'
import CartPage from './Pages/CartPage'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Admin from './Pages/Admin'
import Login from './Pages/Login'
import ProductsTable from './Pages/ProductsTable'

const Routing = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/login' element={<Login />} />
        <Route path="/admin-products" element={<ProductsTable />} />
        <Route path="/edit-product" element={<ProductsTable />} />

    </Routes>
    </>
  )
}

export default Routing