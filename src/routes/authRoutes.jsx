import { Routes, Route } from 'react-router-dom'

import { SignIn } from '../pages/SignIn/index'
import { SignUp } from '../pages/SignUp/index'
import { NotFound } from '../pages/NotFound/index'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
