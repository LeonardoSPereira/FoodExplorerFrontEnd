import { styled } from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 10.4rem auto 7.7rem;
`
export const Content = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 5.6rem 3.5rem 8rem;
  gap: 2.4rem;

  > h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 140%;
    color: ${({ theme }) => theme.colors.light_300};
  }

  > h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    font-weight: 500;
    line-height: 160%;
    color: ${({ theme }) => theme.colors.light_300};
  }

  > h3 {
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 140%;
    color: ${({ theme }) => theme.colors.tomato_300};
  }

  > p {
    font-size: 2rem;
    font-weight: 500;
    line-height: 160%;
    color: ${({ theme }) => theme.colors.light_300};
  }
`
