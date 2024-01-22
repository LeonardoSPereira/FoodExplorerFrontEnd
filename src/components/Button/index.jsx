// Import necessary modules from React
import React, { forwardRef } from 'react'
import { Container } from './styles'

export const Button = forwardRef(
  ({ icon: Icon, title, items, deleteStyle, ...rest }, ref) => {
    return (
      <Container ref={ref} $delete={deleteStyle} {...rest}>
        {Icon && <Icon />}
        <h1>{title}</h1>
        {items && <p>({items})</p>}
      </Container>
    )
  },
)

Button.displayName = 'Button'
