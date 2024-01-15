import { useState, useEffect } from 'react'
import BannerImg from '../../../assets/BannerImg.svg'
import { Toast } from '../../components/Toast'
import { Header } from '../../components/Header'
import { Product } from '../../components/Product'
import { Session } from '../../components/Session'
import { Footer } from '../../components/Footer'
import { Container, Banner, Wrapper } from './styles'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

export function Home() {
  const { user } = useAuth()
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState([])

  // state to control the toast
  const [openToast, setOpenToast] = useState(false)
  const [toastTitle, setToastTitle] = useState('')
  const [toastDescription, setToastDescription] = useState('')

  useEffect(() => {
    async function getProducts() {
      const response = await api.get(`/products?filter=${search}`)
      setProducts(response.data)
    }
    getProducts()
  }, [search])

  useEffect(() => {
    setOpenToast(false)
    setToastTitle('Success')
    setToastDescription(`Login efetuado com sucesso! Bem-vindo ${user.name}!`)
    setOpenToast(true)
    // to close the toast after 2 seconds
    setTimeout(() => {
      setOpenToast(false)
    }, 2000)
  }, [user.name])

  return (
    <Container>
      {openToast && (
        <Toast
          title={toastTitle}
          description={toastDescription}
          setOpenToast={setOpenToast}
        />
      )}

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
        {/* render the session only if there is any product with the following category. And for each product render the product component */}
        {products.filter((product) => product.category === 'food').length >
          0 && (
          <Session title="Refeições">
            {products.map(
              (product) =>
                product.category === 'food' && (
                  <Product key={product.id} product={product} />
                ),
            )}
          </Session>
        )}

        {products.filter((product) => product.category === 'dessert').length >
          0 && (
          <Session title="Sobremesas">
            {products.map(
              (product) =>
                product.category === 'dessert' && (
                  <Product key={product.id} product={product} />
                ),
            )}
          </Session>
        )}

        {products.filter((product) => product.category === 'drink').length >
          0 && (
          <Session title="Bebidas">
            {products.map(
              (product) =>
                product.category === 'drink' && (
                  <Product key={product.id} product={product} />
                ),
            )}
          </Session>
        )}
      </Wrapper>

      <Footer />
    </Container>
  )
}
