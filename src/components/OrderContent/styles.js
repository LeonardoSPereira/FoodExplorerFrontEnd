import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

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
  }
`

export const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
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
