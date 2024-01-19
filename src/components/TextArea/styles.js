import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  label {
    color: ${({ theme }) => theme.colors.light_400};
  }

  textarea {
    min-height: 16rem;
    padding: 1.4rem;
    border-radius: 0.8rem;
    border: 0;
    outline: none;
    resize: vertical;
    color: ${({ theme }) => theme.colors.light_400};
    background-color: ${({ theme }) => theme.colors.dark_900};
  }
`
