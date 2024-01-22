import { styled } from 'styled-components'

export const Container = styled.button`
  width: 100%;
  display: flex;
  padding: 1.2rem 3.2rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border-radius: 0.5rem;
  border: 0;
  background-color: ${({ theme, $delete }) =>
    $delete ? theme.colors.dark_800 : theme.colors.tomato_100};
  color: ${({ theme }) => theme.colors.light_100};

  svg {
    width: 2rem;
    height: 2rem;
  }

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem;
  }

  &:hover {
    background-color: ${({ theme, $delete }) =>
      $delete ? theme.colors.dark_900 : theme.colors.tomato_200};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.tomato_400};
    cursor: not-allowed;
  }
`
