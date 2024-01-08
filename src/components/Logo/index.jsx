import logoImg from '../../../assets/Logo.svg'
import { Container } from './styles'

export function Logo() {
  return (
    <Container>
      <img src={logoImg} alt="Logo" />
      <h1>Food Explorer</h1>
    </Container>
  )
}
