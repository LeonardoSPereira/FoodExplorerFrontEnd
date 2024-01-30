import { BrowserRouter } from 'react-router-dom'
import { useAuth } from '../hooks/auth'
import { AuthRoutes } from './auth.routes'
import { AdminRoutes } from './admin.routes'
import { CustomerRoutes } from './customer.routes'

export function Routes() {
  // get the user from the auth context
  const { user } = useAuth()

  // check if the user is admin or customer and return the correct routes
  function AccessRoutes() {
    if (user.isAdmin) {
      return <AdminRoutes />
    } else {
      return <CustomerRoutes />
    }
  }

  return (
    // if the user is logged in, return the routes that match the user's role if not, return the auth routes
    <BrowserRouter>{user ? <AccessRoutes /> : <AuthRoutes />}</BrowserRouter>
  )
}
