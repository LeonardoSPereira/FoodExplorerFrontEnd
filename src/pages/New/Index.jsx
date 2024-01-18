import { useState } from 'react'
import { Container, Content, Form } from './styles'
import { FiUpload } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { BackButton } from '../../components/BackButton'
import { Footer } from '../../components/Footer'
import { Toast } from '../../components/Toast'
import { Select } from '../../components/Select'

export function New() {
  // state to control the selected file
  const [selectedFile, setSelectedFile] = useState(null)
  const [selectedName, setSelectedName] = useState('Selecione uma imagem')

  // state to control the selected category
  const [selectedCategory, setSelectedCategory] = useState('')
  console.log(selectedCategory)

  // state to control the toast
  const [openToast, setOpenToast] = useState(false)
  const [toastTitle, setToastTitle] = useState('')
  const [toastDescription, setToastDescription] = useState('')

  // array of values to the select input
  const selectValues = [
    { value: 'food', name: 'Refeição' },
    { value: 'dessert', name: 'Sobremesa' },
    { value: 'drink', name: 'Bebida' },
  ]

  // function to handle the file change
  function handleFileChange(event) {
    const file = event.target.files[0]
    setSelectedFile(file)
    setSelectedName(file.name)
  }

  return (
    <>
      {openToast && (
        <Toast
          title={toastTitle}
          description={toastDescription}
          open={openToast}
        />
      )}

      <Container>
        <Header />

        <Content>
          <BackButton />
          <h1>Novo prato</h1>

          <Form>
            <Input
              icon={FiUpload}
              name={selectedName}
              type="file"
              label="Imagem do prato"
              accept="image/*"
              placeholder="Selecione uma imagem"
              onChange={handleFileChange}
            />

            <Input label="Nome" placeholder="Ex.: Salada Caesar" />

            <Select
              label="Categoria"
              title="Selecione uma categoria"
              onChange={setSelectedCategory}
              values={selectValues}
            />
          </Form>
        </Content>

        <Footer />
      </Container>
    </>
  )
}
