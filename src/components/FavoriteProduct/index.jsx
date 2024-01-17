import { Container, Wrapper } from './styles'
import { Link } from 'react-router-dom'
import { api } from '../../services/api'

export function FavoriteProduct({ product, onClick }) {
  const imageURL = `${api.defaults.baseURL}/files/${product.image}`

  return (
    <Container>
      <img src={imageURL} alt={product.title} />

      <Wrapper>
        <Link to={`/product/${product.id}`}>{product.title}</Link>
        <button onClick={onClick}>Remover dos Favoritos</button>
      </Wrapper>
    </Container>
  )
}
