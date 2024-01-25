import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.8rem 2rem;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.dark_1000};

  p {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 160%;
    color: ${({ theme }) => theme.colors.light_400};

    span {
      color: ${({ theme }) => theme.colors.light_300};
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.4rem;
  margin-bottom: 1.6rem;

  > button {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.cake_200};
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
