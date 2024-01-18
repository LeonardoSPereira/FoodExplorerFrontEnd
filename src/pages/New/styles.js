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
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.8rem;

  /* Styles to change the input type file */
  > div:first-child {
    height: fit-content;
    position: relative;
    overflow: hidden;
    display: inline-block;

    div {
      margin-top: 1.6rem;
    }

    svg {
      color: ${({ theme }) => theme.colors.light_100};
    }

    input {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }
`
