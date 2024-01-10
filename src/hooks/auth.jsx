import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services/api'

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  // function to make login
  async function signIn({ email, password }) {
    try {
      // make request to api
      const response = await api.post('/sessions', { email, password })

      // get user data from response
      const { user } = response.data

      // save user data in local storage
      localStorage.setItem('@FoodExplorer:user', JSON.stringify(user))

      // set user data in state
      setData({ user })

      // return success message
      return {
        status: 'Success',
        message: 'Login realizado com sucesso.',
      }
    } catch (error) {
      // if there is an error, return error message
      if (error.response) {
        return {
          status: error.response.data.status,
          message: error.response.data.message,
        }
        // if there is no error.response, return error message
      } else {
        return {
          status: 'Error',
          message: 'Erro ao fazer login, tente novamente.',
        }
      }
    }
  }

  // function to make logout
  async function signOut() {
    // remove user data from local storage
    localStorage.removeItem('@FoodExplorer:user')

    // clear user data from state
    setData({})
  }

  // get user data from local storage when the page loads
  useEffect(() => {
    // get user data from local storage
    const user = localStorage.getItem('@FoodExplorer:user')

    // if user exists, set user data in state
    if (user) {
      setData({ user: JSON.parse(user) })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
