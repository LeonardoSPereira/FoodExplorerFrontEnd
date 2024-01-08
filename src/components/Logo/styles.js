import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  img {
    width: 4.2rem;
    height: 4.2rem;
  }

  h1 {
    color: ${({ theme }) => theme.colors.light_100};
    font-size: 3.6rem;
    font-weight: 700;
  }

  @media (min-width: 768px) {
    img {
      width: 5rem;
      height: 5rem;
    }

    h1 {
      font-size: 4.2rem;
    }
  }
`
