import { useState } from 'react'
import { Container, Form } from './styles'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Toast } from '../../components/Toast'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

export function SignUp() {
  // states to handle the user creation
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // states to handle the toast
  const [openToast, setOpenToast] = useState(false)
  const [toastTitle, setToastTitle] = useState('')
  const [toastDescription, setToastDescription] = useState('')

  // variable to check if the password is empty or less than 6 characters
  const passwordFormat = password === '' || password.length < 6

  // variable to navigate between pages
  const navigate = useNavigate()

  // function to navigate to the home page after 2 seconds
  function navigateToHomeAfterDelay() {
    setTimeout(() => {
      navigate('/')
    }, 2000)
  }

  // function to handle the user creation
  async function handleCreateAccount(e) {
    e.preventDefault()

    // for each time that the user clicks on the button, close the toast state
    setOpenToast(false)

    // create the user and show the toast with the response
    await api
      .post('/users', {
        name,
        email,
        password,
      })
      .then((response) => {
        setToastTitle(response.data.status)
        setToastDescription(response.data.message)
        setOpenToast(true)

        navigateToHomeAfterDelay()
      })
      .catch((error) => {
        console.log(error)
        setToastTitle(error.response.data.status)
        setToastDescription(error.response.data.message)
        setOpenToast(true)
      })
  }

  return (
    <Container>
      <Toast
        label="Criar conta"
        title={toastTitle}
        description={toastDescription}
        openToast={openToast}
      />

      <Logo />

      <Form>
        <h2>Crie sua conta</h2>

        <Input
          label="Seu nome"
          placeholder="Maria da Silva"
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          label="Email"
          type="email"
          placeholder="exemplo@exemplo.com.br"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          title="Criar conta"
          disabled={name === '' || email === '' || passwordFormat}
          onClick={(e) => handleCreateAccount(e)}
        />

        <Link to={-1}>Já tenho uma conta</Link>
      </Form>
    </Container>
  )
}
