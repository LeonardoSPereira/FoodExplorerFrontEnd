import { useEffect, useState } from 'react'
import {
  Container,
  Content,
  Form,
  Wrapper,
  ProductInfoWrapper,
  IngredientsWrapper,
  ControlsWrapper,
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
import { Dialog } from '../../components/Dialog'
import { api } from '../../services/api'
import { useNavigate, useParams } from 'react-router-dom'

export function Edit() {
  // state to control the selected file
  const [selectedFile, setSelectedFile] = useState(null)
  const [selectedImageName, setSelectedImageName] = useState('Imagem')

  // states to control the product info
  const [title, setTitle] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const [rawPrice, setRawPrice] = useState('')
  const [price, setPrice] = useState('')
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
  const { id } = useParams()

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

  function formatPrice(price) {
    const formattedPrice = String(price).replace(/\D/g, '')
    setRawPrice(formattedPrice)
    return Number(formattedPrice)
  }

  // function to handle the create product
  async function handleUpdateProduct(e) {
    setOpenToast(false)
    let response

    try {
      // Update the product
      response = await api.put(`/products/${id}`, {
        title,
        category: selectedCategory,
        price_in_cents: price,
        description,
        ingredients,
      })

      // If selectedFile exists, update the image
      if (selectedFile !== null) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('image', selectedFile)

        const fileResponse = await api.put(
          `/products/image/${id}`,
          fileUploadForm,
        )

        // Show the toast and redirect to the home page after 2 seconds
        if (fileResponse.data.status === 'Success') {
          setToastTitle(response.data.status)
          setToastDescription(response.data.message)
          setOpenToast(true)

          setTimeout(() => {
            navigate('/')
          }, 2000)
        }
      } else {
        // Show the toast and redirect to the home page after 2 seconds
        setToastTitle(response.data.status)
        setToastDescription(response.data.message)
        setOpenToast(true)

        setTimeout(() => {
          navigate('/')
        }, 2000)
      }
    } catch (error) {
      console.error(error)
      setToastTitle(error.response.data.status)
      setToastDescription(error.response.data.message)
      setOpenToast(true)
    }
  }

  // function to handle the delete product
  async function handleDeleteProduct() {
    setOpenToast(false)

    try {
      const response = await api.delete(`/products/${id}`)
      setToastTitle(response.data.status)
      setToastDescription(response.data.message)
      setOpenToast(true)
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

  // useEffect to get the product info
  useEffect(() => {
    async function getProduct() {
      try {
        const response = await api.get(`/products/${id}`)
        setTitle(response.data.title)
        setSelectedCategory(response.data.category)
        setIngredients(
          response.data.ingredients.map((ingredient) => ingredient.name),
        )
        setRawPrice(response.data.price_in_cents)
        setDescription(response.data.description)
      } catch (error) {
        console.log(error.response.data)
      }
    }

    getProduct()
  }, [id])

  // useEffect to format the price
  useEffect(() => {
    setPrice(formatPrice(rawPrice))
  }, [price, rawPrice])

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
          <h1>Editar prato</h1>

          <Form>
            <Wrapper>
              <Input
                icon={FiUpload}
                name={selectedImageName}
                type="file"
                label="Imagem do prato"
                accept="image/*"
                onChange={handleFileChange}
              />

              <Input
                label="Nome"
                placeholder="Ex.: Salada Caesar"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <Select
                label="Categoria"
                title="Selecione uma categoria"
                value={selectedCategory}
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
                placeholder="R$ 00,00"
                value={rawPrice / 100}
                onChange={(e) => setRawPrice(e.target.value)}
              />
            </ProductInfoWrapper>

            <TextArea
              label="Descrição"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <ControlsWrapper>
              <Dialog
                title="Tem certeza que deseja excluir?"
                content="Ao clicar em 'Deletar' o produto será excluído. Essa ação não poderá ser desfeita"
                deleteConfirmation={handleDeleteProduct}
              >
                <Button deleteStyle title="Excluir prato" />
              </Dialog>

              <Button
                title="Salvar prato"
                disabled={
                  title === '' ||
                  selectedCategory === '' ||
                  ingredients.length === 0 ||
                  newIngredient !== '' ||
                  price === 0 ||
                  description === ''
                }
                onClick={handleUpdateProduct}
              />
            </ControlsWrapper>
          </Form>
        </Content>

        <Footer />
      </Container>
    </>
  )
}
