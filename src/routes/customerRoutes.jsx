import { Routes, Route } from 'react-router-dom'

import { Favorites } from '../pages/FavoritesPage'
import { NotFound } from '../pages/NotFoundPage'
import { Product } from '../pages/ProductPage'
import { Orders } from '../pages/OrdersPage'
import { Order } from '../pages/OrderPage'
import { Home } from '../pages/HomePage'

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
