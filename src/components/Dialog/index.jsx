import React from 'react'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { Button } from '../Button'
import {
  Flex,
  StyledContent,
  StyledDescription,
  StyledOverlay,
  StyledTitle,
} from './styles'

export function Dialog({ title, content, children, ...rest }) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>

      <AlertDialog.Portal>
        <StyledOverlay />

        <StyledContent>
          <StyledTitle>{title}</StyledTitle>

          <StyledDescription>{content}</StyledDescription>
          <Flex>
            <AlertDialog.Cancel asChild>
              <Button title="Cancelar" />
            </AlertDialog.Cancel>

            <AlertDialog.Action asChild>
              <Button title="Deletar" />
            </AlertDialog.Action>
          </Flex>
        </StyledContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
