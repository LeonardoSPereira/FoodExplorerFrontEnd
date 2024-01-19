import { Container } from './styles'

export function TextArea({ label, onChange, ...rest }) {
  return (
    <Container>
      <label>{label}</label>
      <textarea onChange={onChange} {...rest} />
    </Container>
  )
}
