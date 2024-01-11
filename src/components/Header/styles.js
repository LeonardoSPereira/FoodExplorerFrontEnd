import { styled } from 'styled-components'

export const Container = styled.div`
  height: 10.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.8rem;
  background-color: ${({ theme }) => theme.colors.dark_700};
`

export const MenuMobile = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: none;
  }
`

export const Button = styled.button`
  width: 2.4rem;
  height: 1.8rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  position: relative;

  svg {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.light_100};
  }

  span {
    width: 1.6rem;
    height: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    background-color: ${({ theme }) => theme.colors.tomato_200};
    color: ${({ theme }) => theme.colors.light_100};
    border-radius: 50%;
    font-family: Poppins;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem;
  }
`

export const SideMenu = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 9999;
  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.2s ease-in-out;

  header {
    width: 100%;
    height: 10.4rem;
    display: flex;
    align-items: center;
    gap: 1.6rem;
    padding: 4.8rem 2.8rem;
    background-color: ${({ theme }) => theme.colors.dark_700};

    p {
      font-size: 2.2rem;
    }
  }
`

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 10.4rem);
  padding: 3.6rem 2.8rem 1.4rem;
  background-color: ${({ theme }) => theme.colors.dark_400};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
