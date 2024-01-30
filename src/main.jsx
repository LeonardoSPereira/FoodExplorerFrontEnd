import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.js'
import GlobalStyles from './styles/global'
import { Routes } from './routes/router'
import { AuthProvider } from './hooks/auth'
import { CartProvider } from './hooks/cart'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <AuthProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
