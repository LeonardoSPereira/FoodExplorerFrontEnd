import { Routes, Route } from 'react-router-dom'

import { NotFound } from '../pages/NotFoundPage'
import { SignIn } from '../pages/SignInPage'
import { SignUp } from '../pages/SignUpPage'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
