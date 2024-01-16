import { MdArrowBackIosNew } from 'react-icons/md'
import { Container } from './styles'

export function BackButton() {
  return (
    <Container to={-1}>
      <MdArrowBackIosNew />
      <p>Voltar</p>
    </Container>
  )
}
