import { useState } from 'react'
import BannerImg from '../../../assets/BannerImg.svg'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Container, Banner } from './styles'

export function Home() {
  const [search, setSearch] = useState('')

  return (
    <Container>
      <Header onChange={setSearch} />
      <Banner>
        <img src={BannerImg} alt="" />
        <div>
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </Banner>
    </Container>
  )
}
