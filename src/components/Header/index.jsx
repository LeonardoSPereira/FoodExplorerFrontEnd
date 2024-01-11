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

export function Header({ onChange }) {
  const { user, signOut } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigate = useNavigate()

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

        {!user.isAdmin && (
          <ButtonMenu onClick={() => navigate('/order')}>
            <PiReceipt />
            <span>0</span>
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

      <DesktopMenu>
        {user.isAdmin ? (
          <img src={AdminLogo} alt="Logo" />
        ) : (
          <img src={LogoMobile} alt="Logo" />
        )}

        <Input
          icon={IoIosSearch}
          placeholder="Busque por pratos ou ingredientes"
          onChange={(e) => onChange(e.target.value)}
        />

        {!user.isAdmin && <Link to="/favorites">Favoritos</Link>}

        {user.isAdmin ? (
          <Button title="Novo Prato" onClick={() => navigate('/new')} />
        ) : (
          <Button
            title="Pedidos"
            icon={PiReceipt}
            items={0}
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
