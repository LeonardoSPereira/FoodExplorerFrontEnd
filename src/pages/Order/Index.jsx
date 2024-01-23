import { useState, useEffect } from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Tabs } from '../../components/Tabs'
import { OrderProduct } from '../../components/OrderProduct'
import { Container, Content } from './styles'
import { useCart } from '../../hooks/cart'
import { Button } from '../../components/Button'

export function Order() {
  // initializing cart hook
  const { cart, removeFromCart } = useCart()
  console.log(cart)

  // initializing page state
  const [page, setPage] = useState('order')

  // calculating total
  const total = cart.reduce((sum, item) => {
    return sum + item.quantity * item.price_per_item
  }, 0)

  // function to handle remove item from cart
  function handleRemoveFromCart(productId) {
    removeFromCart(productId)
  }

  // function to handle page change
  function handlePageChange(page) {
    setPage(page)
  }

  return (
    <Container>
      <Header />
      {cart.length === 0 && (
        <Content>
          <h3>Seu pedido está vazio.</h3>
          <p>
            Adicione produtos clicando no botão{' '}
            <strong>&quot;Incluir&quot;</strong> na página inicial ou do
            produto.
          </p>
        </Content>
      )}

      {cart.length !== 0 && page === 'order' && (
        <Content>
          <h1>Meu pedido</h1>
          {cart.map((product) => (
            <OrderProduct
              key={product.product_id}
              product={product}
              onClick={() => handleRemoveFromCart(product.product_id)}
            />
          ))}
          <h2>
            Total:{' '}
            {(total / 100).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </h2>

          <Button title="Avançar" onClick={() => handlePageChange('payment')} />
        </Content>
      )}

      {cart.length !== 0 && page === 'payment' && (
        <Content>
          <h1>Pagamento</h1>
          <Tabs />
        </Content>
      )}
      <Footer />
    </Container>
  )
}
