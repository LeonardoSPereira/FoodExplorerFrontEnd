import { Container } from './styles'

export function Button({ icon: Icon, title, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />} {/* if Icon exists, render it */}
      <h1>{title}</h1>
    </Container>
  )
}
