import { styled } from 'styled-components'

export const Container = styled.div`
  position: relative;
  overflow: hidden;
`

export const Wrapper = styled.div`
  display: flex;
  gap: 1.6rem;

  @media (min-width: 768px) {
    gap: 2.4rem;
  }
`

export const ArrowStyled = styled.div.attrs((props) => ({
  className: props.className,
}))`
  width: 16rem;
  height: 44rem;
  font-size: 4rem;
  display: none;
  position: absolute;
  background: ${({ theme }) => theme.gradients.gradient_100};
  color: ${({ theme }) => theme.colors.light_100};
  top: 30%;
  transform: translateY(-30%);
  -webkit-transform: translateY(-30%);
  cursor: pointer;

  &.arrow-left {
    left: 0rem;
    justify-content: start;
  }

  &.arrow-right {
    right: 0rem;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: end;
  }
`
