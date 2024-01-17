import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 7.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.colors.dark_600};

  img {
    width: 10.4rem;
    height: 2.4rem;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.light_200};
  }

  @media (min-width: 425px) {
    padding: 0 2.8rem;

    p {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 768px) {
    padding: 0 6rem;

    img {
      width: 18rem;
      height: 3.2rem;
    }
  }
`
