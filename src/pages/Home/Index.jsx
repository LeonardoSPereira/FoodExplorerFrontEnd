import { useState } from 'react'
import BannerImg from '../../../assets/BannerImg.svg'
import { Header } from '../../components/Header'
import { Product } from '../../components/Product'
import { Container, Banner } from './styles'

export function Home() {
  const [search, setSearch] = useState('')
  console.log(search)

  const product = {
    name: 'Pizza de Calabresa',
    price: 2947,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.',
    image: 'https://source.unsplash.com/random',
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

      <Product product={product} />
    </Container>
  )
}
