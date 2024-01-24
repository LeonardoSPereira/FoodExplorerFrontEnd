import { Container, Content, Wrapper } from './styles'
import { FaTimes } from 'react-icons/fa'
import { api } from '../../services/api'

export function OrderProduct({ product, isNew, onClick }) {
  console.log('product: ', product)
  // create product image URL
  const productImageURL = `${api.defaults.baseURL}/files/${product.image}`

  return (
    <Container>
      <img src={productImageURL} alt={product.title} />

      <Content>
        <Wrapper>
          <p>
            {product.quantity} <FaTimes />
          </p>
          <h1>{product.title}</h1>
          <span>
            {product.price_per_item &&
              (
                (product.price_per_item / 100) *
                product.quantity
              ).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}

            {product.price_in_cents &&
              (
                (product.price_in_cents / 100) *
                product.quantity
              ).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
          </span>
        </Wrapper>

        {isNew && <button onClick={onClick}>Excluir</button>}
      </Content>
    </Container>
  )
}
