import { styled } from 'styled-components'

export const Container = styled.div`
  height: 4.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;

  label {
    color: ${({ theme }) => theme.colors.light_400};
  }
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1.4rem;
  padding: 1.2rem 1.4rem;
  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.dark_900};
  color: ${({ theme }) => theme.colors.light_500};
  input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.light_500};
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: ${({ theme }) => theme.colors.light_400};
  }
`
