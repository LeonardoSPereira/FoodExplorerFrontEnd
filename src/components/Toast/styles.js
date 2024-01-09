import * as Toast from '@radix-ui/react-toast'
import { styled, keyframes } from 'styled-components'

const hide = keyframes`
  from { 
    opacity: 1 
  }

  to { 
    opacity: 0 
  }
`

const slideIn = keyframes`
  from { 
    transform: translateX(calc(100% + 25px)) 
  }
  
  to { 
    transform: translateX(0) 
  }
`

const swipeOut = keyframes`
  from { 
    transform: translateX(var(--radix-toast-swipe-end-x)) 
  }
  
  to { 
    transform: translateX(calc(100% + 25px)) 
  }
`

export const StyledToastRoot = styled(Toast.Root)`
  width: 90%;
  max-width: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.dark_900};
  border-radius: 0.6rem;
  padding: 1rem;
  position: fixed;
  top: 2.5rem;
  right: 0.5rem;

  &[data-state='open'] {
    animation: ${slideIn} 150ms ease-in-out;
  }

  &[data-state='closed'] {
    animation: ${hide} 100ms ease-in;
  }

  &[data-swipe='move'] {
    transform: translateX(var(--radix-toast-swipe-move-x));
  }

  &[data-swipe='cancel'] {
    transform: translateX(0);
    transition: transform 200ms ease-out;
  }

  &[data-swipe='end'] {
    animation: ${swipeOut} 100ms ease-out;
  }

  @media (min-width: 768px) {
    width: 100%;
    right: 2.5rem;
  }
`

export const StyledTitle = styled(Toast.Title)`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: .5rem;
  color: ${({ theme }) => theme.colors.light_100};
`

export const StyledDescription = styled(Toast.Description)`
  font-size: 1.6rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.light_500};
`

export const StyledClose = styled(Toast.Close)`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: transparent;
  border: none;

  svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.light_300};
  }
`
