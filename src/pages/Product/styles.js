import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Content = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.6rem;
  padding-inline: 5.6rem;
  margin-block: 1.6rem 3.4rem;

  @media (min-width: 768px) {
    /* margin-top: -10rem; */
  }
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  img {
    width: 26.4rem;
    height: 26.4rem;
    border-radius: 9999px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 4.8rem;

    img {
      width: 40rem;
      height: 40rem;
    }
  }
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  > h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 2.8rem;
    font-weight: 500;
    line-height: 140%;
    color: ${({ theme }) => theme.colors.light_300};
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 140%;
    text-align: center;
    color: ${({ theme }) => theme.colors.light_300};
  }

  @media (min-width: 768px) {
    align-items: flex-start;
    gap: 2.4rem;

    > h1 {
      font-size: 4rem;
    }

    > p {
      font-size: 2rem;
      text-align: start;
    }
  }
`

export const Ingredients = styled.div`
  max-width: 32rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    max-width: 100%;
    justify-content: flex-start;
    gap: 1.2rem;
  }
`

export const CartSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-top: 3.2rem;

  @media (min-width: 768px) {
    gap: 3.4rem;
    margin-top: 2.4rem;
  }
`

export const Stepper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;

  > button {
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
