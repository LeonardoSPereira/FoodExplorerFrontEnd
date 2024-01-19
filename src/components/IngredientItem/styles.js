import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border-radius: 0.8rem;
  padding: 1rem 1.6rem;
  background-color: ${({ theme, $isnew }) =>
    $isnew ? 'transparent' : theme.colors.light_600};
  color: ${({ theme, $isnew }) =>
    $isnew ? theme.colors.light_500 : theme.colors.light_100};
  border: ${({ theme, $isnew }) =>
    $isnew ? `1px dashed ${theme.colors.light_500}` : 'none'};

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.colors.light_100};
  }

  .button-add {
    color: ${({ theme }) => theme.colors.light_500};
  }

  > input {
    max-width: 8rem;
    color: ${({ theme }) => theme.colors.light_100};
    background: transparent;
    border: none;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.light_500};
    }
  }
`
