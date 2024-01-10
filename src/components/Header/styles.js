import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 10.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.8rem;
  background-color: ${({ theme }) => theme.colors.dark_700};
`

export const MenuMobile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: none;
  }
`

export const Menu = styled.button`
  width: 2.4rem;
  height: 1.8rem;
  background-color: transparent;
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
