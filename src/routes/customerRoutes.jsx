import { Routes, Route } from 'react-router-dom'

import { Favorites } from '../pages/Favorites'
import { NotFound } from '../pages/NotFound'
import { Product } from '../pages/Product'
import { Orders } from '../pages/Orders'
import { Order } from '../pages/Order'
import { Home } from '../pages/Home'

// create the customer routes
export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/order" element={<Order />} />
      <Route path="/order/:id" element={<Order />} />
      <Route path="/orders" element={<Orders />} />

      {/* if the user tries to access a route that doesn't exist, redirect to the not found page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
