import FooterLogo from '../../../assets/FooterLogo.svg'
import { Container } from './styles'

export function Footer() {
  return (
    <Container>
      <img src={FooterLogo} alt="Logo" />
      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  )
}
