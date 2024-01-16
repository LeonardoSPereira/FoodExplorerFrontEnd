import { useState, useEffect } from 'react'
import { BackButton } from '../../components/BackButton'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Toast } from '../../components/Toast'
import { useParams } from 'react-router-dom'
import { Container, Content } from './styles'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'
import { useCart } from '../../hooks/cart'

export function Product() {
  const { user } = useAuth()
  const { addToCart } = useCart()
  const { id } = useParams()

  // state to control the toast
  const [openToast, setOpenToast] = useState(false)
  const [toastTitle, setToastTitle] = useState('')
  const [toastDescription, setToastDescription] = useState('')

  // to close the toast after 2 seconds
  useEffect(() => {
    setTimeout(() => {
      setOpenToast(false)
    }, 2000)
  })
  return (
    <>
      {openToast && (
        <Toast
          title={toastTitle}
          description={toastDescription}
          setOpenToast={setOpenToast}
        />
      )}

      <Container>
        <Header />

        <Content>
          <BackButton />
        </Content>

        <Footer />
      </Container>
    </>
  )
}
