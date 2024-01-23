import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  > img {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
  }
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > button {
    width: fit-content;
    background: transparent;
    border: 0;
    font-size: 1.4rem;
    line-height: 160%;
    color: ${({ theme }) => theme.colors.tomato_400};
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  > p,
  > h1 {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    font-weight: 500;
    line-height: 160%;
    color: ${({ theme }) => theme.colors.light_300};
  }

  > span {
    display: none;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 160%;
    color: ${({ theme }) => theme.colors.light_400};
  }

  @media (min-width: 768px) {
    > span {
      display: block;
    }
  }
`
