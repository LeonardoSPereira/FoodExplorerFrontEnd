import { useState, useEffect } from 'react'
import { IoIosClose } from 'react-icons/io'
import * as ToastPrimitive from '@radix-ui/react-toast'
import {
  StyledClose,
  StyledDescription,
  StyledTitle,
  StyledToastRoot,
} from './styles'

export function Toast({ title, label, openToast, description, children }) {
  const [open, setOpen] = useState(openToast)

  function handleCloseToast() {
    setOpen(false)
  }

  useEffect(() => {
    setOpen(openToast)
  }, [openToast])

  return (
    <ToastPrimitive.Provider duration={3000} label={label}>
      {children}
      <StyledToastRoot open={open} duration={3000}>
        <StyledTitle>{title}</StyledTitle>

        <StyledDescription>{description}</StyledDescription>

        <StyledClose aria-label="Close" onClick={handleCloseToast}>
          <span aria-hidden>{<IoIosClose />}</span>
        </StyledClose>
      </StyledToastRoot>
      <ToastPrimitive.Viewport />
    </ToastPrimitive.Provider>
  )
}
