import { useState } from 'react'
import {
  Container,
  Content,
  Form,
  Wrapper,
  ProductInfoWrapper,
  IngredientsWrapper,
} from './styles'
import { FiUpload } from 'react-icons/fi'
import { IngredientItem } from '../../components/IngredientItem'
import { BackButton } from '../../components/BackButton'
import { TextArea } from '../../components/TextArea'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Select } from '../../components/Select'
import { Input } from '../../components/Input'
import { Toast } from '../../components/Toast'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function New() {
  // state to control the selected file
  const [selectedFile, setSelectedFile] = useState(null)
  const [selectedImageName, setSelectedImageName] = useState('Imagem')

  // states to control the product info
  const [title, setTitle] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')

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

  // hook to navigate between pages
  const navigate = useNavigate()

  // function to handle the file change
  function handleFileChange(event) {
    const file = event.target.files[0]
    setSelectedFile(file)
    setSelectedImageName(file.name)
  }

  // function to handle the add ingredient
  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient])
    setNewIngredient('')
  }

  // function to handle the delete ingredient
  function handleDeleteIngredient(ingredient) {
    setIngredients((prevState) =>
      prevState.filter((item) => item !== ingredient),
    )
  }

  // function to handle the create product
  async function handleCreateProduct(e) {
    e.preventDefault()
    setOpenToast(false)

    try {
      // create the product
      const response = await api.post('/products', {
        title,
        category: selectedCategory,
        price_in_cents: price,
        description,
        ingredients,
      })

      const { productId } = response.data

      // upload the image
      const fileUploadForm = new FormData()
      fileUploadForm.append('image', selectedFile)

      const fileResponse = await api.put(
        `/products/image/${productId}`,
        fileUploadForm,
      )

      // show the toast and redirect to the home page after 2 seconds
      if (fileResponse.data.status === 'Success') {
        setToastTitle(response.data.status)
        setToastDescription(response.data.message)
        setOpenToast(true)
      }

      setTimeout(() => {
        navigate('/')
      }, 2000)
    } catch (error) {
      console.error(error)
      setToastTitle(error.response.data.status)
      setToastDescription(error.response.data.message)
      setOpenToast(true)
    }
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
            <Wrapper>
              <Input
                icon={FiUpload}
                name={selectedImageName}
                type="file"
                label="Imagem do prato"
                accept="image/*"
                placeholder="Selecione uma imagem"
                onChange={handleFileChange}
              />

              <Input
                label="Nome"
                placeholder="Ex.: Salada Caesar"
                onChange={(e) => setTitle(e.target.value)}
              />

              <Select
                label="Categoria"
                title="Selecione uma categoria"
                onChange={setSelectedCategory}
                values={selectValues}
              />
            </Wrapper>

            <ProductInfoWrapper>
              <IngredientsWrapper>
                <label htmlFor="ingredient">Ingredientes</label>
                <div>
                  {ingredients.map((ingredient, index) => (
                    <IngredientItem
                      key={index}
                      value={ingredient}
                      onClick={() => handleDeleteIngredient(ingredient)}
                    />
                  ))}
                  <IngredientItem
                    isNew
                    placeholder="Adicionar"
                    value={newIngredient}
                    onChange={(e) => setNewIngredient(e.target.value)}
                    onClick={handleAddIngredient}
                  />
                </div>
              </IngredientsWrapper>

              <Input
                label="Preço"
                placeholder="R$ 00.00"
                onChange={(e) => setPrice(e.target.value)}
              />
            </ProductInfoWrapper>

            <TextArea
              label="Descrição"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
            />

            <Button
              title="Salvar produto"
              disabled={
                selectedFile === null ||
                title === '' ||
                selectedCategory === '' ||
                ingredients.length === 0 ||
                newIngredient !== '' ||
                price === 0 ||
                description === ''
              }
              onClick={handleCreateProduct}
            />
          </Form>
        </Content>

        <Footer />
      </Container>
    </>
  )
}
