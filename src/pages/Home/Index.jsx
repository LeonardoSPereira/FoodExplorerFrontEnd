import { useState, useEffect } from 'react'
import BannerImg from '../../../assets/BannerImg.svg'
import { Header } from '../../components/Header'
import { Product } from '../../components/Product'
import { Session } from '../../components/Session'
import { Footer } from '../../components/Footer'
import { Container, Banner, Wrapper } from './styles'
import { api } from '../../services/api'

export function Home() {
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState([])

  const filteredFoodProducts = products.filter(
    (product) => product.category === 'food',
  )

  const filteredDessertProducts = products.filter(
    (product) => product.category === 'dessert',
  )

  const filteredDrinkProducts = products.filter(
    (product) => product.category === 'drink',
  )

  useEffect(() => {
    async function getProducts() {
      const response = await api.get(`/products?filter=${search}`)
      setProducts(response.data)
    }
    getProducts()
  }, [search])

  return (
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

      {/* render the session only if there is any product with the following category. And for each product render the product component */}
      <Wrapper>
        {filteredFoodProducts.length > 0 && (
          <Session title="Refeições" products={filteredFoodProducts} />
        )}

        {filteredDessertProducts.length > 0 && (
          <Session title="Refeições" products={filteredDessertProducts} />
        )}

        {filteredDrinkProducts.length > 0 && (
          <Session title="Refeições" products={filteredDrinkProducts} />
        )}

        {/*
        {products.filter((product) => product.category === 'food').length >
          0 && <Session title="Refeições" products={products}></Session>}

         {products.filter((product) => product.category === 'dessert').length >
          0 && <Session title="Sobremesas" products={products}></Session>}

        {products.filter((product) => product.category === 'drink').length >
          0 && <Session title="Bebidas" products={products}></Session>} */}
      </Wrapper>

      <Footer />
    </Container>
  )
}
