/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react'
import { Container, Wrapper, StatusWrapper } from './styles'
import { IoIosArrowForward } from 'react-icons/io'
import { Select } from '../Select'
import { Toast } from '../Toast'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

export function OrderContent({ order, user }) {
  // state to control select input and update order status
  const [initialStatus, setInitialStatus] = useState(order.status)
  const [selectedStatus, setSelectedStatus] = useState(order.status)

  // toast state
  const [openToast, setOpenToast] = useState(false)
  const [toastTitle, setToastTitle] = useState('')
  const [toastDescription, setToastDescription] = useState('')

  // array of values to the select input
  const selectValues = [
    { status: 'pending', value: 'pending', name: 'Pendente' },
    { status: 'preparing', value: 'preparing', name: 'Preparando' },
    { status: 'delivered', value: 'delivered', name: 'Entregue' },
  ]

  // instance of navigate hook
  const navigate = useNavigate()

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

  // useEffect to update order status
  useEffect(() => {
    async function updateStatus() {
      setOpenToast(false)
      try {
        const response = await api.patch(`/orders/${order.id}`, {
          status: selectedStatus,
        })

        setToastTitle(response.data.status)
        setToastDescription(response.data.message)
        setOpenToast(true)
      } catch (error) {
        console.log(error)

        setToastTitle(error.response.data.status)
        setToastDescription(error.response.data.message)
        setOpenToast(true)
      }
    }

    if (selectedStatus !== initialStatus) {
      updateStatus()
      setInitialStatus(selectedStatus)
    }
  }, [selectedStatus, initialStatus, order.id])

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
        <Wrapper to={`/order/${order.id}`}>
          <p>
            Pedido: <span>{order.id}</span>
          </p>
          <p>
            Criado em: <span>{renderFormattedDate(order.created_at)}</span>
          </p>
          <p>
            Pedido: <span>{renderOrderItems()}</span>
          </p>
          <button onClick={() => navigate(`/order/${order.id}`)}>
            Detalhes {<IoIosArrowForward />}
          </button>
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
    </>
  )
}
