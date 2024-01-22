import { forwardRef } from 'react'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { Button } from '../Button'
import {
  Flex,
  StyledContent,
  StyledDescription,
  StyledOverlay,
  StyledTitle,
} from './styles'

export const Dialog = forwardRef(
  ({ title, content, deleteConfirmation, children }, ref) => {
    return (
      <AlertDialog.Root>
        <AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>

        <AlertDialog.Portal ref={ref}>
          <StyledOverlay />

          <StyledContent>
            <StyledTitle>{title}</StyledTitle>

            <StyledDescription>{content}</StyledDescription>
            <Flex>
              <AlertDialog.Cancel asChild>
                <Button deleteStyle title="Cancelar" />
              </AlertDialog.Cancel>

              <AlertDialog.Action asChild>
                <Button title="Deletar" onClick={deleteConfirmation} />
              </AlertDialog.Action>
            </Flex>
          </StyledContent>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    )
  },
)

Dialog.displayName = 'Dialog'
