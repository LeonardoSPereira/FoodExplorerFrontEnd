import { Container, Title } from './styles'
import { Carousel } from '../Carousel'

export function Session({
  title,
  products,
  addFavorite,
  removeFavorite,
  addProductToCart,
}) {
  const OPTIONS = { align: 'start', dragFree: true, loop: true }
  const SLIDE_COUNT = products.length
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <Container>
      <Title>{title}</Title>
      <Carousel
        slides={SLIDES}
        options={OPTIONS}
        products={products}
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
        addProductToCart={addProductToCart}
      />
    </Container>
  )
}
