import { styled } from 'styled-components'

export const Container = styled.tr`
  border: 2px solid ${({ theme }) => theme.colors.dark_1000};

  td {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 160%;
    padding: 1.6rem 2.4rem;
    color: ${({ theme }) => theme.colors.light_400};
    border: 2px solid ${({ theme }) => theme.colors.dark_1000};
  }
`
