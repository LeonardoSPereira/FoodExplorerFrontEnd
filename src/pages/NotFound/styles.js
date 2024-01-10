import { keyframes, styled } from 'styled-components'

const show = keyframes`
  from {
    opacity: 0;
    scale: 0
  }

  to {
    opacity: 1;
    scale: 1
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  > h1 {
    font-size: 2.8rem;
    font-weight: 700;
    text-align: center;
    margin-top: 2rem;
    color: ${({ theme }) => theme.colors.tomato_200};
    animation: ${show} 0.7s ease-in-out;
  }

  a {
    font-size: 1.6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.light_400};
    text-decoration: none;
    animation: ${show} 0.7s ease-in-out;
  }

  @media (min-width: 768px) {
    > h1 {
      font-size: 3.2rem;
    }

    a {
      font-size: 2rem;
    }
  }
`
