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

    &:last-child {
      > button {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        border: none;
        cursor: pointer;
        text-decoration: underline;
        background-color: transparent;
        color: ${({ theme }) => theme.colors.cake_200};
      }
    }
  }
`

export const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > div {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;

    &[data-status='pending'] {
      background-color: ${({ theme }) => theme.colors.tomato_300};
    }

    &[data-status='preparing'] {
      background-color: ${({ theme }) => theme.colors.carrot};
    }

    &[data-status='delivered'] {
      background-color: ${({ theme }) => theme.colors.mint};
    }
  }
`
