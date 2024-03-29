import React from 'react'
import { Product } from '../Product'
import useEmblaCarousel from 'embla-carousel-react'
import { Embla, EmblaContainer, EmblaViewport } from './styles'

export function Carousel({
  slides,
  options,
  products,
  addFavorite,
  removeFavorite,
  addProductToCart,
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  return (
    <Embla>
      <EmblaViewport ref={emblaRef}>
        <EmblaContainer>
          {slides.map(() =>
            products.map((product) => (
              <Product
                key={product.id}
                product={product}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                addProductToCart={addProductToCart}
              />
            )),
          )}
        </EmblaContainer>
      </EmblaViewport>
    </Embla>
  )
}
