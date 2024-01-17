import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.4rem;

  a {
    font-family: 'Poppins', sans-serif;
    font-size: 2.2rem;
    font-weight: 500;
    line-height: 160%;
    color: ${({ theme }) => theme.colors.light_300};
  }

  button {
    background: transparent;
    border: none;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 160%;
    color: ${({ theme }) => theme.colors.tomato_400};
  }
`
