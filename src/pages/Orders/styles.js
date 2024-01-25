import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 10.4rem auto 7.7rem;
`

export const Content = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 6rem;
  padding: 5.6rem 3.2rem;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 140%;
    color: ${({ theme }) => theme.colors.light_300};
  }
`

export const MobileWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  @media (min-width: 768px) {
    display: none;
  }
`

export const DesktopWrapper = styled.table`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.dark_1000};
  border-top-right-radius: 0.8rem;
  border-collapse: collapse;

  th {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 160%;
    text-align: left;
    padding: 1.6rem 2.4rem;
    color: ${({ theme }) => theme.colors.light_300};
    border: 2px solid ${({ theme }) => theme.colors.dark_1000};
  }
`
