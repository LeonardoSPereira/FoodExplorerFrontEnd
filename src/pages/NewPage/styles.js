import { styled } from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 10.4rem auto 7.7rem;
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2.4rem;
  padding: 1rem 3.2rem 6rem;

  > h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 140%;
    color: ${({ theme }) => theme.colors.light_300};
  }

  @media (min-width: 768px) {
    padding: 4rem 6rem 6rem;
  }
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.8rem;

  @media (min-width: 768px) {
    gap: 3.2rem;

    > button {
      width: 20%;
      align-self: end;
    }
  }
`

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  /* Styles to change the input type file */
  > div:first-child {
    height: fit-content;
    position: relative;
    overflow: hidden;
    display: inline-block;

    > div {
      margin-top: 1.6rem;
      height: 4.8rem;
    }

    > svg {
      color: ${({ theme }) => theme.colors.light_100};
    }

    input {
      opacity: 0;
      position: absolute;
      top: 42%;
      left: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 3.2rem;

    > div:first-child {
      width: 50%;
    }

    > div:last-child {
      width: 60%;
    }
  }
`

export const ProductInfoWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  @media (min-width: 768px) {
    flex-direction: row;

    > div:last-child {
      width: 30%;
    }
  }
`

export const IngredientsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  > label {
    color: ${({ theme }) => theme.colors.light_400};
  }

  > div {
    min-height: 4.8rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.6rem;
    padding: 0.4rem 0.8rem;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.colors.dark_900};
  }
`
