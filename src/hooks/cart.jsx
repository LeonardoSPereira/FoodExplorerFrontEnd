import { createContext, useContext, useState } from 'react'

const CartContext = createContext({})

function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  // function to add product to cart
  function addToCart(productToCart) {
    // check if product is already in cart
    const productInCart = cart.find(
      (item) => item.id === productToCart.product_id,
    )

    // if product is already in cart, throw error
    if (productInCart) {
      return {
        status: 'Error',
        message: 'Este produto já está no carrinho.',
      }
    }

    // if product is not in cart, add it to cart
    setCart((prevState) => [...prevState, productToCart])

    // return success message
    return {
      status: 'Success',
      message: 'Produto adicionado ao carrinho.',
    }
  }

  // function to remove product from cart
  function removeFromCart(productId) {
    // filter cart to remove product
    const newCart = cart.filter((item) => item.product_id !== productId)

    // set new cart
    setCart(newCart)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

function useCart() {
  const context = useContext(CartContext)

  return context
}

export { CartProvider, useCart }
