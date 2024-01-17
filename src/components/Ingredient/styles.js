import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.dark_1000};

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.light_100};
  }
`
