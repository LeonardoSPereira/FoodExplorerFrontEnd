import { useState } from 'react'
import { Container, Form } from './styles'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Toast } from '../../components/Toast'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

export function SignIn() {
  // instance the auth hook
  const { signIn } = useAuth()

  // state to control the user data
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // state to control the toast
  const [openToast, setOpenToast] = useState(false)
  const [toastTitle, setToastTitle] = useState('')
  const [toastDescription, setToastDescription] = useState('')

  // function to handle the sign in
  async function handleSignIn(e) {
    e.preventDefault()
    setOpenToast(false)

    const response = await signIn({ email, password })

    setToastTitle(response.status)
    setToastDescription(response.message)
    setOpenToast(true)
  }

  return (
    <>
      {openToast && (
        <Toast
          label="Realizar login"
          title={toastTitle}
          description={toastDescription}
          openToast={openToast}
        />
      )}

      <Container>
        <Logo />

        <Form>
          <h2>Faça login</h2>

          <Input
            label="Email"
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
            title="Entrar"
            disabled={email === '' || password === ''}
            onClick={(e) => handleSignIn(e)}
          />

          <Link to="/register">Criar conta</Link>
        </Form>
      </Container>
    </>
  )
}
