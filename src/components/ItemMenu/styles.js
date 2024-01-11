import { styled } from 'styled-components'

export const Container = styled.button`
  width: 100%;
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  font-weight: 300;
  line-height: 140%;
  text-align: left;
  padding: 1rem;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark_1000};
  color: ${({ theme }) => theme.colors.light_300};
`
