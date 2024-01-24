import { useState, useEffect } from 'react'
import { Container, Content } from './styles'
import { useParams, useNavigate } from 'react-router-dom'
import { OrderProduct } from '../../components/OrderProduct'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { Toast } from '../../components/Toast'
import { Tabs } from '../../components/Tabs'
import { useCart } from '../../hooks/cart'
import { api } from '../../services/api'

export function Order() {
  // initializing cart hook
  const { cart, removeFromCart, removeAllFromCart } = useCart()

  // initializing page state
  const [page, setPage] = useState('order')

  // initializing order state
  const [order, setOrder] = useState({})
  console.log(order)

  // state to control the toast
  const [openToast, setOpenToast] = useState(false)
  const [toastTitle, setToastTitle] = useState('')
  const [toastDescription, setToastDescription] = useState('')

  // calculating total
  const total = cart.reduce((sum, item) => {
    return sum + item.quantity * item.price_per_item
  }, 0)

  // getting id from url
  const { id } = useParams()
  // initializing navigate hook
  const navigate = useNavigate()

  // function to handle remove item from cart
  function handleRemoveFromCart(productId) {
    removeFromCart(productId)
  }

  // function to handle new order
  async function handleNewOrder() {
    setOpenToast(false)

    try {
      const response = await api.post('/orders', { orderItems: cart })
      setToastTitle(response.data.status)
      setToastDescription(response.data.message)
      setOpenToast(true)

      setTimeout(() => {
        removeAllFromCart()
        navigate('/orders')
      }, 2000)
    } catch (error) {
      console.error(error)

      setToastTitle(error.response.data.status)
      setToastDescription(error.response.data.message)
      setOpenToast(true)
    }
  }

  // useEffect to get order from api if id is present
  useEffect(() => {
    if (id) {
      async function fetchOrder() {
        const response = await api.get(`/orders/${id}`)
        setOrder(response.data)
        setPage(response.data.order.status)
      }
      fetchOrder()
    }
  }, [id])

  return (
    <>
      {openToast && (
        <Toast
          title={toastTitle}
          description={toastDescription}
          open={openToast}
        />
      )}

      <Container>
        <Header />
        {cart.length === 0 && !id && (
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

            <Button title="Avançar" onClick={() => setPage('payment')} />
          </Content>
        )}

        {(cart.length !== 0 || id) &&
          (page === 'payment' ||
            page === 'pending' ||
            page === 'preparing' ||
            page === 'delivered') && (
            <Content>
              <h1>Pagamento</h1>
              <Tabs page={page} onClick={handleNewOrder} />
            </Content>
          )}

        <Footer />
      </Container>
    </>
  )
}
