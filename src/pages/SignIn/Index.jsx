import { useState } from 'react'
import { Container, Form } from './styles'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  console.log('email: ', email)
  console.log('password: ', password)

  return (
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

        <Button title="Entrar" disabled={email === '' || password === ''} />

        <Link to="/register">Criar conta</Link>
      </Form>
    </Container>
  )
}
