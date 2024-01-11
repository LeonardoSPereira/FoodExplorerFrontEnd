import { useState } from 'react'
import AdminLogoMobile from '../../../assets/AdminLogoMobile.svg'
import LogoMobile from '../../../assets/LogoMobile.svg'
import { Container, MenuMobile, Button, SideMenu, Wrapper } from './styles'
import { PiReceipt } from 'react-icons/pi'
import { IoIosMenu, IoMdClose, IoIosSearch } from 'react-icons/io'
import { Input } from '../Input'
import { ItemMenu } from '../ItemMenu'
import { Footer } from '../Footer'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

export function Header() {
  const { user, signOut } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigate = useNavigate()

  function handleSignOut() {
    signOut()
    navigate('/')
  }

  return (
    <Container>
      <MenuMobile>
        <Button onClick={() => setIsMenuOpen(true)}>
          <IoIosMenu />
        </Button>

        {user.isAdmin ? (
          <img src={AdminLogoMobile} alt="Logo" />
        ) : (
          <img src={LogoMobile} alt="Logo" />
        )}

        {!user.isAdmin && (
          <Button>
            <PiReceipt />
            <span>0</span>
          </Button>
        )}
      </MenuMobile>

      <SideMenu $isOpen={isMenuOpen}>
        <header>
          <Button onClick={() => setIsMenuOpen(false)}>
            <IoMdClose />
          </Button>

          <p>Menu</p>
        </header>

        <Wrapper>
          <Input
            icon={IoIosSearch}
            placeholder="Busque por pratos ou ingredientes"
          />

          <ItemMenu title="Home" onClick={() => navigate('/')} />

          {user.isAdmin ? (
            <ItemMenu title="Novo Prato" onClick={() => navigate('/new')} />
          ) : (
            <ItemMenu
              title="Meus Favoritos"
              onClick={() => navigate('/favorites')}
            />
          )}

          <ItemMenu title="Sair" onClick={handleSignOut} />
        </Wrapper>

        <Footer />
      </SideMenu>
    </Container>
  )
}
