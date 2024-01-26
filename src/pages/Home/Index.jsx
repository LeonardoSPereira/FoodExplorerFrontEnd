import { useState, useEffect } from 'react'
import BannerImg from '../../../assets/BannerImg.svg'
import { Header } from '../../components/Header'
import { Session } from '../../components/Session'
import { Footer } from '../../components/Footer'
import { Toast } from '../../components/Toast'
import { Container, Banner, Wrapper } from './styles'
import { useCart } from '../../hooks/cart'
import { api } from '../../services/api'

export function Home() {
  const { addToCart } = useCart()

  const [search, setSearch] = useState('')
  const [products, setProducts] = useState([])

  // state to control the toast
  const [openToast, setOpenToast] = useState(false)
  const [toastTitle, setToastTitle] = useState('')
  const [toastDescription, setToastDescription] = useState('')

  const filteredFoodProducts = products.filter(
    (product) => product.category === 'food',
  )

  const filteredDessertProducts = products.filter(
    (product) => product.category === 'dessert',
  )

  const filteredDrinkProducts = products.filter(
    (product) => product.category === 'drink',
  )

  // function to add the product to favorites and show the toast
  async function handleAddFavorite(product) {
    setOpenToast(false)

    // create the favorite
    try {
      const response = await api.post(`/favorites/${product.id}`)

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

  // function to remove the product from favorites and show the toast
  async function handleRemoveFavorite(product) {
    setOpenToast(false)

    // remove the favorite
    try {
      const response = await api.delete(`/favorites/${product.id}`)

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
  function handleAddProductToCart(product, stepperValue) {
    setOpenToast(false)

    const productToCart = {
      product_id: product.id,
      image: product.image,
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

  useEffect(() => {
    async function getProducts() {
      const response = await api.get(`/products?filter=${search}`)
      setProducts(response.data)
    }
    getProducts()
  }, [search])

  return (
    <>
      {openToast && (
        <Toast
          title={toastTitle}
          description={toastDescription}
          setOpenToast={setOpenToast}
        />
      )}

      <Container>
        <Header onChange={setSearch} />
        {search === '' && (
          <Banner>
            <img src={BannerImg} alt="Imagem do banner" />
            <div>
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </Banner>
        )}

        <Wrapper>
          {filteredFoodProducts.length > 0 && (
            <Session
              title="Refeições"
              products={filteredFoodProducts}
              addFavorite={handleAddFavorite}
              removeFavorite={handleRemoveFavorite}
              addProductToCart={handleAddProductToCart}
            />
          )}

          {filteredDessertProducts.length > 0 && (
            <Session
              title="Sobremesas"
              products={filteredDessertProducts}
              addFavorite={handleAddFavorite}
              removeFavorite={handleRemoveFavorite}
              addProductToCart={handleAddProductToCart}
            />
          )}

          {filteredDrinkProducts.length > 0 && (
            <Session
              title="Bebidas"
              products={filteredDrinkProducts}
              addFavorite={handleAddFavorite}
              removeFavorite={handleRemoveFavorite}
              addProductToCart={handleAddProductToCart}
            />
          )}
        </Wrapper>

        <Footer />
      </Container>
    </>
  )
}
