import { Container } from './styles'

export function Button({ icon: Icon, title, items, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      <h1>{title}</h1>
      {items && <p>({items})</p>}
    </Container>
  )
}
