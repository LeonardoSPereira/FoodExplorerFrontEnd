import { useState, useEffect } from 'react'
import { Container, Content, MobileWrapper, DesktopWrapper } from './styles'
import { OrderContent } from '../../components/OrderContent'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { TableRow } from '../../components/TableRow'

export function Orders() {
  // instance of auth hook
  const { user } = useAuth()

  // state to control orders
  const [orders, setOrders] = useState([])

  // useEffect to load all orders
  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('/orders')
      setOrders(response.data.orders)
    }
    loadOrders()
  }, [])

  return (
    <Container>
      <Header />
      <Content>
        <h1>Pedidos</h1>

        <MobileWrapper>
          {orders &&
            orders.map((order) => (
              <OrderContent key={order.id} order={order} user={user} />
            ))}
        </MobileWrapper>

        <DesktopWrapper>
          <thead>
            <tr>
              <th>Status</th>
              <th>Código</th>
              <th>Itens</th>
              <th>Data e hora</th>
              <th>Detalhes</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order) => <TableRow key={order.id} order={order} />)}
          </tbody>
        </DesktopWrapper>
      </Content>
      <Footer />
    </Container>
  )
}
