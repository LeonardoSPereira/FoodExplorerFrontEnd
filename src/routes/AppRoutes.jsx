import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Product } from '../pages/Product'
import { New } from '../pages/New'
import { Edit } from '../pages/Edit'
import { Favorites } from '../pages/Favorites'
import { Order } from '../pages/Order'
import { Orders } from '../pages/Orders'
import { NotFound } from '../pages/NotFound'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/new" element={<New />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/order" element={<Order />} />
      <Route path="/orders" element={<Orders />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
