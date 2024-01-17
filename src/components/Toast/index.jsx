import { useState, useEffect } from 'react'
import { IoIosClose } from 'react-icons/io'
import { FaCheckCircle } from 'react-icons/fa'
import * as ToastPrimitive from '@radix-ui/react-toast'
import {
  StyledClose,
  StyledDescription,
  StyledTitle,
  StyledToastRoot,
} from './styles'

export function Toast({ label, title, openToast, description }) {
  const [open, setOpen] = useState(openToast)

  // function to close the toast
  function handleCloseToast() {
    setOpen(false)
  }

  // function to close the toast after 3 seconds
  // function closeToastAfterDelay() {
  //   setTimeout(() => {
  //     setOpen(false)
  //   }, 2000)
  // }

  // useEffect to update the state of the toast
  // useEffect(() => {
  //   setOpen(openToast)

  //   if (openToast) {
  //     closeToastAfterDelay()
  //   }
  // }, [openToast])

  return (
    <ToastPrimitive.Provider label={label}>
      <StyledToastRoot open={open} duration={2000}>
        {
          <StyledTitle>
            {title === 'Success' ? (
              <FaCheckCircle className="success" />
            ) : (
              <IoIosClose className="error" />
            )}
            {title}
          </StyledTitle>
        }

        <StyledDescription>{description}</StyledDescription>

        <StyledClose aria-label="Close" onClick={handleCloseToast}>
          <span aria-hidden>{<IoIosClose />}</span>
        </StyledClose>
      </StyledToastRoot>
      <ToastPrimitive.Viewport />
    </ToastPrimitive.Provider>
  )
}
