import { PiReceipt } from 'react-icons/pi'
import { IoIosMenu } from 'react-icons/io'
import AdminLogoMobile from '../../../assets/AdminLogoMobile.svg'
import LogoMobile from '../../../assets/LogoMobile.svg'
import { Container, MenuMobile, Menu } from './styles'
import { useAuth } from '../../hooks/auth'

export function Header() {
  const { user } = useAuth()

  return (
    <Container>
      <MenuMobile>
        <Menu>
          <IoIosMenu />
        </Menu>

        {user.isAdmin ? (
          <img src={AdminLogoMobile} alt="Logo" />
        ) : (
          <img src={LogoMobile} alt="Logo" />
        )}

        {!user.isAdmin && (
          <Menu>
            <PiReceipt />
            <span>0</span>
          </Menu>
        )}
      </MenuMobile>
    </Container>
  )
}
