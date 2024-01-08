import { Container, Wrapper } from './styles'

export function Input({ icon: Icon, label, ...rest }) {
  return (
    <Container>
      {/* If label exists, then render it */}
      {label && <label htmlFor={label}>{label}</label>}
      <Wrapper>
        {Icon && <Icon />} {/* If Icon exists, then render it */}
        <input type="text" id={label} name={label} {...rest} />
      </Wrapper>
    </Container>
  )
}
