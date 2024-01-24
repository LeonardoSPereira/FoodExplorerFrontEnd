import {
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
  Form,
  Wrapper,
} from './styles'
import qrCode from '../../../assets/qrCode.svg'
import { PiCreditCard, PiForkKnife } from 'react-icons/pi'
import { FaRegCheckCircle } from 'react-icons/fa'
import { MdOutlinePix } from 'react-icons/md'
import { CiClock2 } from 'react-icons/ci'
import { Input } from '../Input'
import { Button } from '../Button'

export function Tabs({ page, onClick }) {
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

      {page === 'payment' && (
        <>
          <TabsContent value="pix">
            <img src={qrCode} alt="qr code" />
            <Button title="Finalizar pagamento" onClick={onClick} />
          </TabsContent>

          <TabsContent value="card">
            <Form>
              <Input
                label="Número do Cartão"
                placeholder="0000 0000 0000 0000"
              />

              <Wrapper>
                <Input label="Validade" placeholder="00/00" />
                <Input label="CVV" placeholder="000" />
              </Wrapper>

              <Button title="Finalizar pagamento" onClick={onClick} />
            </Form>
          </TabsContent>
        </>
      )}

      {page === 'pending' && (
        <>
          <TabsContent value="pix">
            <CiClock2 />
            <h2>Aguardando pagamento no caixa</h2>
          </TabsContent>

          <TabsContent value="card">
            <CiClock2 />
            <h2>Aguardando pagamento no caixa</h2>
          </TabsContent>
        </>
      )}

      {page === 'preparing' && (
        <>
          <TabsContent value="pix">
            <FaRegCheckCircle />
            <h2>Pagamento aprovado!</h2>
          </TabsContent>

          <TabsContent value="card">
            <FaRegCheckCircle />
            <h2>Pagamento aprovado!</h2>
          </TabsContent>
        </>
      )}

      {page === 'delivered' && (
        <>
          <TabsContent value="pix">
            <PiForkKnife />
            <h2>Pedido entregue!</h2>
          </TabsContent>

          <TabsContent value="card">
            <PiForkKnife />
            <h2>Pedido entregue!</h2>
          </TabsContent>
        </>
      )}
    </TabsRoot>
  )
}
