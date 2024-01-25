import { useState } from 'react'
import AdminLogoMobile from '../../../assets/AdminLogoMobile.svg'
import AdminLogo from '../../../assets/AdminLogo.svg'
import LogoMobile from '../../../assets/LogoMobile.svg'
import {
  Container,
  MobileMenu,
  ButtonMenu,
  SideMenu,
  Wrapper,
  DesktopMenu,
} from './styles'
import { PiReceipt } from 'react-icons/pi'
import { GoSignOut } from 'react-icons/go'
import { IoIosMenu, IoMdClose, IoIosSearch } from 'react-icons/io'
import { Input } from '../Input'
import { ItemMenu } from '../ItemMenu'
import { Footer } from '../Footer'
import { Button } from '../Button'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { useCart } from '../../hooks/cart'

export function Header({ onChange }) {
  const { user, signOut } = useAuth()
  const { cart } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigate = useNavigate()

  // function to handle navigation and close menu
  function handleNavigate(path = '') {
    if (path) {
      navigate(`/${path}`)
    } else {
      navigate('/')
    }
    setIsMenuOpen(false)
  }

  // function to handle sign out
  function handleSignOut() {
    signOut()
    navigate('/')
  }

  return (
    <Container>
      <MobileMenu>
        <ButtonMenu onClick={() => setIsMenuOpen(true)}>
          <IoIosMenu />
        </ButtonMenu>

        {user.isAdmin ? (
          <img src={AdminLogoMobile} alt="Logo" />
        ) : (
          <img src={LogoMobile} alt="Logo" />
        )}

        {user.isAdmin ? (
          <div></div>
        ) : (
          <ButtonMenu onClick={() => handleNavigate('order')}>
            <PiReceipt />
            <span>{cart.length}</span>
          </ButtonMenu>
        )}
      </MobileMenu>

      <SideMenu $isOpen={isMenuOpen}>
        <header>
          <ButtonMenu onClick={() => setIsMenuOpen(false)}>
            <IoMdClose />
          </ButtonMenu>

          <p>Menu</p>
        </header>

        <Wrapper>
          <Input
            icon={IoIosSearch}
            placeholder="Busque por pratos ou ingredientes"
            onChange={(e) => onChange(e.target.value)}
          />

          <ItemMenu title="Home" onClick={() => handleNavigate()} />

          {user.isAdmin ? (
            <ItemMenu
              title="Novo Prato"
              onClick={() => handleNavigate('new')}
            />
          ) : (
            <ItemMenu
              title="Meus Favoritos"
              onClick={() => handleNavigate('favorites')}
            />
          )}

          {user.isAdmin ? (
            <ItemMenu
              title="Pedidos"
              onClick={() => handleNavigate('orders')}
            />
          ) : (
            <ItemMenu
              title="Histórico"
              onClick={() => handleNavigate('orders')}
            />
          )}

          <ItemMenu title="Sair" onClick={handleSignOut} />
        </Wrapper>

        <Footer />
      </SideMenu>

      <DesktopMenu>
        {user.isAdmin ? (
          <Link to="/">
            <img src={AdminLogo} alt="Logo" />
          </Link>
        ) : (
          <Link to="/">
            <img src={LogoMobile} alt="Logo" />
          </Link>
        )}

        <Input
          icon={IoIosSearch}
          placeholder="Busque por pratos ou ingredientes"
          onChange={(e) => onChange(e.target.value)}
        />

        {user.isAdmin ? (
          <Link to="/orders">Pedidos</Link>
        ) : (
          <Link to="/orders">Histórico</Link>
        )}
        {!user.isAdmin && <Link to="/favorites">Favoritos</Link>}

        {user.isAdmin ? (
          <Button title="Novo Prato" onClick={() => navigate('/new')} />
        ) : (
          <Button
            title="Pedidos"
            icon={PiReceipt}
            items={cart.length}
            onClick={() => navigate('/order')}
          />
        )}

        <ButtonMenu onClick={handleSignOut}>
          <GoSignOut />
        </ButtonMenu>
      </DesktopMenu>
    </Container>
  )
}
