import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const Container = styled(Link)`
  display: flex;
  align-items: center;

  svg {
    width: 3.2rem;
    height: 3.2rem;
    color: ${({ theme }) => theme.colors.light_100};
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 140%;
    color: ${({ theme }) => theme.colors.light_300};
  }
`
