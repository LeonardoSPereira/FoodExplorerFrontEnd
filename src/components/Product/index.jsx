import { useState, useEffect } from 'react'
import { IoMdHeart, IoMdHeartEmpty, IoMdAdd, IoMdRemove } from 'react-icons/io'
import { PiPencilSimpleLight } from 'react-icons/pi'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Toast } from '../Toast'
import { Button } from '../Button'
import { Container, ButtonMenu, Price, Stepper, Wrapper } from './styles'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

export function Product({ product }) {
  const { user } = useAuth()

  // state to control if the product is favorite or not
  const [isFavorite, setIsFavorite] = useState(false)
  const [favorites, setFavorites] = useState([])

  // state to control the stepper value
  const [stepperValue, setStepperValue] = useState(1)

  // state to control the toast
  const [openToast, setOpenToast] = useState(false)
  const [toastTitle, setToastTitle] = useState('')
  const [toastDescription, setToastDescription] = useState('')

  const navigate = useNavigate()
  const productPath = `/product/${product.id}`
  const editPath = `/edit/${product.id}`

  // const to create a url to the product image
  const imageURL = `${api.defaults.baseURL}/files/${product.image}`

  // function to add the product to favorites and show the toast
  function handleAddFavorite() {
    setOpenToast(false)
    setIsFavorite(true)
    setToastTitle('Success')
    setToastDescription('Produto adicionado aos favoritos com sucesso!')
    setOpenToast(true)
  }

  // function to remove the product from favorites and show the toast
  function handleRemoveFavorite() {
    setOpenToast(false)
    setIsFavorite(false)
    setToastTitle('Success')
    setToastDescription('Produto removido aos favoritos com sucesso!')
    setOpenToast(true)
  }

  useEffect(() => {
    async function getFavorites() {
      const response = await api.get(`/favorites`)
      setFavorites(response.data)

      // check if the product is favorite
      const favorite = response.data.find((item) => item.id === product.id)
      if (favorite) {
        setIsFavorite(true)
      }
    }
    getFavorites()
  })

  // useEffect to close the toast after 2 seconds
  useEffect(() => {
    setTimeout(() => {
      setOpenToast(false)
    }, 2000)
  }, [isFavorite])

  return (
    <>
      {/* render the toast */}
      {openToast && (
        <Toast
          title={toastTitle}
          description={toastDescription}
          setOpenToast={setOpenToast}
        />
      )}

      <Container className="keen-slider__slide">
        {/* check if user is admin and render the edit button. If not render the favorite button based if the product is favorite or not */}
        {user.isAdmin ? (
          <ButtonMenu onClick={() => navigate(editPath)}>
            <PiPencilSimpleLight />
          </ButtonMenu>
        ) : (
          <ButtonMenu>
            {isFavorite ? (
              <IoMdHeart onClick={handleRemoveFavorite} />
            ) : (
              <IoMdHeartEmpty onClick={handleAddFavorite} />
            )}
          </ButtonMenu>
        )}

        <img src={imageURL} alt={product.title} />

        {/* render the name of the product */}
        <Link to={productPath}>
          {product.title}
          <MdKeyboardArrowRight />
        </Link>

        <p>{product.description}</p>

        {/* render the price of the product */}
        <Price>
          <span>R$ </span>
          <span>{String(product.price_in_cents / 100).replace('.', ',')}</span>
        </Price>

        <Wrapper>
          {/* stepper to control the quantity of the product */}
          {!user.isAdmin && (
            <Stepper>
              <button
                onClick={() => setStepperValue((prevState) => prevState - 1)}
              >
                <IoMdRemove />
              </button>

              <span>{String(stepperValue).padStart(2, '0')}</span>

              <button
                onClick={() => setStepperValue((prevState) => prevState + 1)}
              >
                <IoMdAdd />
              </button>
            </Stepper>
          )}

          {/* button to add the product to the cart */}
          {!user.isAdmin && <Button title="Incluir" />}
        </Wrapper>
      </Container>
    </>
  )
}
