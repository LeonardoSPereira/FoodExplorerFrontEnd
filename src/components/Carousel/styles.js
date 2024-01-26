import { styled } from 'styled-components'

export const Embla = styled.div`
  --slide-spacing: 1rem;
  --slide-size: auto;
  --slide-height: 19rem;
`

export const EmblaViewport = styled.div`
  overflow: hidden;
`

export const EmblaContainer = styled.div`
  backface-visibility: hidden;
  display: flex;
  gap: 2.8rem;
  /* touch-action: pan-y; */
`
