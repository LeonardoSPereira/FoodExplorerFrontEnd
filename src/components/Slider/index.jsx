import React, { useState } from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { Container, Wrapper, ArrowStyled } from './styles'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export function Slider({ children }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 'auto',
      spacing: 5,
    },
    renderMode: 'performance',
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })
  return (
    <Container>
      <Wrapper ref={sliderRef}>{children}</Wrapper>
      {loaded && instanceRef.current && (
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
