import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { OrderProduct } from '../../components/OrderProduct'
import { Container, Content } from './styles'
import { useCart } from '../../hooks/cart'

export function Order() {
  const { cart, removeFromCart } = useCart()
  console.log(cart)

  function handleRemoveFromCart(productId) {
    removeFromCart(productId)
  }

  return (
    <Container>
      <Header />
      <Content>
        <h1>order</h1>
        {cart.map((product) => (
          <OrderProduct
            key={product.product_id}
            product={product}
            onClick={() => handleRemoveFromCart(product.product_id)}
          />
        ))}
      </Content>
      <Footer />
    </Container>
  )
}
