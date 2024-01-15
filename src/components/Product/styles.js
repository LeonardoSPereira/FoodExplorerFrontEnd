import { styled } from 'styled-components'

export const Container = styled.div`
  width: 22rem;
  max-height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  padding: 2.4rem;
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.dark_300};
  background-color: ${({ theme }) => theme.colors.dark_200};
  position: relative;

  img {
    display: flex;
    width: 8.8rem;
    height: 8.8rem;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    border-radius: 9999px;
  }

  a {
    display: flex;
    align-items: center;
    font-family: Poppins;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.light_300};

    svg {
      width: 1.4rem;
      height: 1.4rem;
    }
  }

  p {
    display: none;
    font-size: 1.4rem;
    line-height: 160%;
    text-align: center;
    color: ${({ theme }) => theme.colors.light_400};
  }

  @media (min-width: 768px) {
    width: 30rem;
    max-height: 46rem;
    gap: 1.5rem;

    img {
      width: 18rem;
      height: 18rem;
    }

    a {
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 140%;

      svg {
        width: 2.4rem;
        height: 2.4rem;
        font-size: 2.4rem;
      }
    }

    p {
      display: block;
    }
  }
`

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1.6rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.cake_200};
  }

  @media (min-width: 768px) {
    span {
      font-size: 3.2rem;
    }
  }
`

export const Stepper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;

  button {
    width: 2.4rem;
    height: 2.4rem;
    background-color: transparent;
    border: none;

    svg {
      width: 2.4rem;
      height: 2.4rem;
      color: ${({ theme }) => theme.colors.light_100};
    }
  }

  span {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.light_300};
  }

  @media (min-width: 768px) {
    span {
      font-size: 2rem;
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const ButtonMenu = styled.button`
  width: 2.4rem;
  height: 2.2rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  position: absolute;
  right: 1.6rem;
  top: 1.6rem;

  svg {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.light_300};
  }
`
