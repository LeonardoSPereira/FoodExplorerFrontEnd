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

export function Product({
  product,
  addFavorite,
  removeFavorite,
  addProductToCart,
}) {
  const { user } = useAuth()
  const navigate = useNavigate()

  // state to control if the product is favorite or not
  const [isFavorite, setIsFavorite] = useState(false)
  const [favorites, setFavorites] = useState([])

  // state to control the stepper value
  const [stepperValue, setStepperValue] = useState(1)

  // create the paths to the product and edit pages navigation
  const productPath = `/product/${product.id}`
  const editPath = `/edit/${product.id}`

  // const to create a url to the product image
  const imageURL = `${api.defaults.baseURL}/files/${product.image}`

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
  }, [isFavorite, favorites, product.id])

  return (
    <Container>
      {user.isAdmin ? (
        <ButtonMenu onClick={() => navigate(editPath)}>
          <PiPencilSimpleLight />
        </ButtonMenu>
      ) : (
        <ButtonMenu>
          {isFavorite ? (
            <IoMdHeart
              onClick={() => {
                removeFavorite(product)
                setIsFavorite(false)
              }}
            />
          ) : (
            <IoMdHeartEmpty
              onClick={() => {
                addFavorite(product)
                setIsFavorite(true)
              }}
            />
          )}
        </ButtonMenu>
      )}

      <img src={imageURL} alt={product.title} />

      <Link to={productPath}>
        {product.title}
        <MdKeyboardArrowRight />
      </Link>

      <p>{product.description}</p>

      <Price>
        {(product.price_in_cents / 100).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </Price>

      <Wrapper>
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

        {!user.isAdmin && (
          <Button
            title="Incluir"
            onClick={() => addProductToCart(product, stepperValue)}
          />
        )}
      </Wrapper>
    </Container>
  )
}
