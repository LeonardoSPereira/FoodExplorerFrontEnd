import { useState, useEffect } from 'react'
import { Container, Content, Wrapper } from './styles'
import { FavoriteProduct } from '../../components/FavoriteProduct'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Toast } from '../../components/Toast'
import { api } from '../../services/api'

export function Favorites() {
  // favorites state
  const [favorites, setFavorites] = useState([])

  // toast state
  const [openToast, setOpenToast] = useState(false)
  const [toastTitle, setToastTitle] = useState('')
  const [toastDescription, setToastDescription] = useState('')

  // handle remove favorite product
  async function handleRemoveFavoriteProduct(id) {
    setOpenToast(false)

    try {
      await api.delete(`/favorites/${id}`)

      setToastTitle('Success')
      setToastDescription('Produto removido dos favoritos')
      setOpenToast(true)
    } catch (error) {
      setToastTitle('Error')
      setToastDescription('Erro ao remover produto dos favoritos')
      setOpenToast(true)
    }
  }

  // useEffect to load all favorites
  useEffect(() => {
    async function getFavorites() {
      const response = await api.get('/favorites')
      setFavorites(response.data)
    }
    getFavorites()
  }, [favorites])

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

        {favorites.length === 0 && (
          <Content>
            <h3>Você não possui favoritos</h3>
            <p>Adicione favoritos clicando no coração, na página inicial</p>
          </Content>
        )}

        {favorites.length !== 0 && (
          <Content>
            <h1>Meus favoritos</h1>
            <Wrapper>
              {favorites &&
                favorites.map((product) => (
                  <FavoriteProduct
                    key={product.id}
                    product={product}
                    onClick={() => handleRemoveFavoriteProduct(product.id)}
                  />
                ))}
            </Wrapper>
          </Content>
        )}

        <Footer />
      </Container>
    </>
  )
}
