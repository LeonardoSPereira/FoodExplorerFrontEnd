import { styled } from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 10.4rem auto 7.7rem;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin: 5.6rem 2.8rem 4rem;
  gap: 2.4rem;

  > h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 140%;
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

  @media (min-width: 768px) {
    margin: 3.6rem 12rem 0;
  }
`

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2.4rem;
  }
`
