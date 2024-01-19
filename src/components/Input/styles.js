import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;

  label {
    color: ${({ theme }) => theme.colors.light_400};
  }
`

export const Wrapper = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  gap: 1.4rem;
  padding: 1.2rem 1.4rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.dark_900};
  color: ${({ theme }) => theme.colors.light_500};

  input {
    width: 100%;
    height: 100%;
    max-height: 5rem;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.light_400};

    &[type='number']::-webkit-outer-spin-button,
    &[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -moz-appearance: textfield;
      appearance: textfield;
    }
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: ${({ theme }) => theme.colors.light_400};
  }

  span {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.light_100};
  }
`
