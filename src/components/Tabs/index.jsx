import { useState } from 'react'
import {
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
  Form,
  Wrapper,
} from './styles'
import qrCode from '../../../assets/qrCode.svg'
import { MdOutlinePix } from 'react-icons/md'
import { PiCreditCard } from 'react-icons/pi'
import { Input } from '../Input'
import { Button } from '../Button'

export function Tabs({ page }) {
  return (
    <TabsRoot defaultValue="pix">
      <TabsList>
        <TabsTrigger value="pix">
          {' '}
          <MdOutlinePix /> PIX
        </TabsTrigger>

        <TabsTrigger value="card">
          {' '}
          <PiCreditCard /> Crédito
        </TabsTrigger>
      </TabsList>
      <TabsContent value="pix">
        <img src={qrCode} alt="qr code" />
      </TabsContent>

      <TabsContent value="card">
        <Form>
          <Input label="Número do Cartão" placeholder="0000 0000 0000 0000" />

          <Wrapper>
            <Input label="Validade" placeholder="00/00" />
            <Input label="CVV" placeholder="000" />
          </Wrapper>

          <Button title="Finalizar pagamento" />
        </Form>
      </TabsContent>
    </TabsRoot>
  )
}
