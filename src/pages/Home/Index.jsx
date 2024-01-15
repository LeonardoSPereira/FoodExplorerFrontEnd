import { useState } from 'react'
import BannerImg from '../../../assets/BannerImg.svg'
import { Header } from '../../components/Header'
import { Product } from '../../components/Product'
import { Session } from '../../components/Session'
import { Container, Banner, Wrapper } from './styles'

export function Home() {
  const [search, setSearch] = useState('')
  console.log(search)

  const product = {
    id: 1,
    name: 'Spaguetti Gambe',
    price: 2947,
    description: 'Massa fresca com camarões e pesto. ',
    image: 'https://github.com/leonardospereira.png',
  }

  return (
    <Container>
      <Header onChange={setSearch} />
      <Banner>
        <img src={BannerImg} alt="Imagem do banner" />
        <div>
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </Banner>

      <Wrapper>
        <Session title="Refeições">
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
        </Session>
      </Wrapper>
    </Container>
  )
}
