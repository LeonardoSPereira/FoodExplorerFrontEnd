import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const Container = styled(Link)`
  display: flex;
  align-items: center;

  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: ${({ theme }) => theme.colors.light_100};
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 140%;
    color: ${({ theme }) => theme.colors.light_300};
  }

  &:hover {
    opacity: 0.8;
  }
`
