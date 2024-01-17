import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { styled, keyframes } from 'styled-components'

const overlayShow = keyframes` 
  from { 
    opacity: 0 
  }

  to { 
    opacity: 1 
  }
`

const contentShow = keyframes`
  from { 
    opacity: 0; 
    scale: 0; 
  }

  to { 
    opacity: 1; 
    scale: 1; 
  }
`

export const StyledOverlay = styled(AlertDialog.Overlay)`
  background: ${({ theme }) => theme.colors.dark_100};
  opacity: 0.5;
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 0.2s ease-in-out;
`

export const StyledContent = styled(AlertDialog.Content)`
  width: 28rem;
  max-width: 50rem;
  padding: 2.4rem;
  position: fixed;
  top: 50%;
  right: 50%;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.dark_600};
  transform: translate(50%, -50%);
  animation: ${contentShow} 0.2s ease-in-out;

  &:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`

export const StyledTitle = styled(AlertDialog.Title)`
  font-family: 'Poppins', sans-serif;
  font-size: 2.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.light_100};
`

export const StyledDescription = styled(AlertDialog.Description)`
  font-family: 'Poppins', sans-serif;
  margin-block: 2rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.light_400};
`

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
