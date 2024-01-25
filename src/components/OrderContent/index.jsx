/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { Container, Wrapper, StatusWrapper } from './styles'
import { Select } from '../Select'

export function OrderContent({ order, user }) {
  const [selectedStatus, setSelectedStatus] = useState(order.status)

  // array of values to the select input
  const selectValues = [
    { status: 'pending', value: 'pending', name: 'Pendente' },
    { status: 'preparing', value: 'preparing', name: 'Preparando' },
    { status: 'delivered', value: 'delivered', name: 'Entregue' },
  ]

  // function to render formatted date
  function renderFormattedDate(createdAt) {
    const [date, time] = createdAt.split(' ')
    const [year, month, day] = date.split('-')
    const [hour, minute, seconds] = time.split(':')

    return `${day}/${month} às ${hour}:${minute}`
  }

  // function to render order items all together
  function renderOrderItems() {
    if (order && order.orderItems && order.orderItems.length > 0) {
      return order.orderItems.map((item, index) => (
        <span key={item.id}>
          {`${item.quantity} x ${item.title}${
            index === order.orderItems.length - 1 ? '' : ', '
          }`}
        </span>
      ))
    } else {
      return <span>No items in the order</span>
    }
  }

  return (
    <Container>
      <Wrapper to={`/order/${order.id}`}>
        <p>Nº: {order.id}</p>
        <p>Criado em: {renderFormattedDate(order.created_at)}</p>
        <p>Pedido: {renderOrderItems()}</p>
      </Wrapper>

      {user.isAdmin ? (
        <Select
          title="Selecione o status do pedido"
          value={selectedStatus}
          onChange={setSelectedStatus}
          values={selectValues}
        />
      ) : (
        <>
          {order.status === 'pending' && (
            <StatusWrapper>
              <div data-status={order.status}></div>
              <p>Pendente</p>
            </StatusWrapper>
          )}

          {order.status === 'preparing' && (
            <StatusWrapper>
              <div data-status={order.status}></div>
              <p>Preparando</p>
            </StatusWrapper>
          )}

          {order.status === 'delivered' && (
            <StatusWrapper>
              <div data-status={order.status}></div>
              <p>Entregue</p>
            </StatusWrapper>
          )}
        </>
      )}
    </Container>
  )
}
