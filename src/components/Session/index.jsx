import { Container, Title } from './styles'
import { Slider } from '../Slider'

export function Session({ title, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Slider>{children}</Slider>
    </Container>
  )
}
