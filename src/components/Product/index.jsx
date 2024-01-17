import { useState, useEffect } from 'react'
import { IoMdHeart, IoMdHeartEmpty, IoMdAdd, IoMdRemove } from 'react-icons/io'
import { PiPencilSimpleLight } from 'react-icons/pi'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Toast } from '../Toast'
import { Button } from '../Button'
import { Container, ButtonMenu, Price, Stepper, Wrapper } from './styles'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { useCart } from '../../hooks/cart'
import { api } from '../../services/api'

export function Product({ product }) {
  const { user } = useAuth()
  const { addToCart } = useCart()
  const navigate = useNavigate()

  // state to control if the product is favorite or not
  const [isFavorite, setIsFavorite] = useState(false)
  const [favorites, setFavorites] = useState([])

  // state to control the stepper value
  const [stepperValue, setStepperValue] = useState(1)

  // state to control the toast
  const [openToast, setOpenToast] = useState(false)
  const [toastTitle, setToastTitle] = useState('')
  const [toastDescription, setToastDescription] = useState('')

  const productPath = `/product/${product.id}`
  const editPath = `/edit/${product.id}`

  // const to create a url to the product image
  const imageURL = `${api.defaults.baseURL}/files/${product.image}`

  // function to add the product to favorites and show the toast
  async function handleAddFavorite() {
    setOpenToast(false)

    // create the favorite
    try {
      const response = await api.post(`/favorites/${product.id}`)
      setIsFavorite(true)

      setToastTitle(response.data.status)
      setToastDescription(response.data.message)
      setOpenToast(true)
    } catch (error) {
      console.log(error)

      setToastTitle(error.response.data.status)
      setToastDescription(error.response.data.message)
      setOpenToast(true)
    }
  }

  // function to remove the product from favorites and show the toast
  async function handleRemoveFavorite() {
    setOpenToast(false)

    // remove the favorite
    try {
      const response = await api.delete(`/favorites/${product.id}`)
      setIsFavorite(false)

      setToastTitle(response.data.status)
      setToastDescription(response.data.message)
      setOpenToast(true)
    } catch (error) {
      console.error(error)

      setToastTitle(error.response.data.status)
      setToastDescription(error.response.data.message)
      setOpenToast(true)
    }
  }

  // function to add the product to cart and show the toast
  function handleAddProductToCart() {
    setOpenToast(false)

    const productToCart = {
      product_id: product.id,
      title: product.title,
      quantity: stepperValue,
      price_per_item: product.price_in_cents,
    }

    // add the product to cart
    const response = addToCart(productToCart)

    setToastTitle(response.status)
    setToastDescription(response.message)
    setOpenToast(true)
  }

  // useEffect to get the favorites from the api
  useEffect(() => {
    async function getFavorites() {
      const response = await api.get(`/favorites`)
      setFavorites(response.data)

      // check if the product is favorite
      const favorite = favorites.find((item) => item.id === product.id)
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
    }, 1500)
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
          {(product.price_in_cents / 100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
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
          {!user.isAdmin && (
            <Button title="Incluir" onClick={handleAddProductToCart} />
          )}
        </Wrapper>
      </Container>
    </>
  )
}
