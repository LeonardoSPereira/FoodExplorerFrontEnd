import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { Container, Wrapper, ArrowStyled } from './styles'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'

export function Slider({ children }) {
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    drag: true,
    slides: {
      perView: 'auto',
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <Container>
      <Wrapper ref={sliderRef}>{children}</Wrapper>
      {loaded && instanceRef.current && children.length > 3 && (
        <>
          <Arrow
            left
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
          />

          <Arrow
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
          />
        </>
      )}
    </Container>
  )
}

function Arrow({ left, onClick }) {
  return (
    <ArrowStyled
      onClick={onClick}
      className={`arrow ${left ? 'arrow-left' : 'arrow-right'}`}
    >
      {left && <MdArrowBackIosNew />}
      {!left && <MdArrowForwardIos />}
    </ArrowStyled>
  )
}
