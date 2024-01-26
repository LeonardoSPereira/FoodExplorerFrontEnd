import { Container, Title } from './styles'
import { Slider } from '../Slider'
import { Carousel } from '../Carousel'

export function Session({ title, products }) {
  const OPTIONS = { align: 'start', dragFree: true, loop: true }
  const SLIDE_COUNT = products.length
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <Container>
      <Title>{title}</Title>
      <Carousel slides={SLIDES} options={OPTIONS} products={products} />
    </Container>
  )
}
