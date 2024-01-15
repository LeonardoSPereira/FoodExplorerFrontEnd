import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
`

export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.light_300};

  @media (min-width: 768px) {
    font-size: 3.2rem;
  }
`
