import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

export const Banner = styled.div`
  margin: 0 1.6rem 0 3.6rem;
  height: 10rem;
  display: flex;
  background: ${({ theme }) => theme.gradients.gradient_200};
  border-radius: 0.8rem;

  img {
    width: 14rem;
    height: 12rem;
    object-fit: cover;
    margin-top: -2rem;
    margin-left: -2rem;
    overflow: visible;
    opacity: 0.8;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.3rem;

    h2 {
      font-family: 'Poppins', sans-serif;
      font-size: 1.4rem;
      font-weight: 600;
      line-height: 140%;
      color: ${({ theme }) => theme.colors.light_300};
    }

    p {
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
      font-weight: 400;
      line-height: 140%;
      color: ${({ theme }) => theme.colors.light_300};
    }

    @media (min-width: 425px) {
      h2 {
        font-size: 1.8rem;
      }

      p {
        font-size: 1.2rem;
      }
    }

    @media (min-width: 550px) {
      h2 {
        font-size: 3.2rem;
      }

      p {
        font-size: 1.4rem;
      }
    }

    @media (min-width: 768px) {
      h2 {
        font-size: 4rem;
      }

      p {
        font-size: 1.6rem;
      }
    }
  }

  @media (min-width: 425px) {
    height: 12rem;
    margin: 0 2rem;
    gap: 2rem;

    img {
      width: 20rem;
      height: 14rem;
      margin-top: -2rem;
    }
  }

  @media (min-width: 600px) {
    height: 18rem;
    margin: 0 4rem;
    gap: 2rem;

    img {
      width: 34rem;
      height: 20rem;
      margin-top: -2rem;
    }
  }

  @media (min-width: 800px) {
    height: 22rem;
    margin: 6rem 8rem 0;

    img {
      width: 40rem;
      height: 28rem;
      margin-top: -6rem;
      margin-left: -4rem;
    }
  }

  @media (min-width: 1000px) {
    margin-top: 8rem;
    img {
      margin-top: -8rem;
    }
  }

  @media (min-width: 1200px) {
    height: 24rem;
    margin: 18rem 10rem 0;

    img {
      width: 56rem;
      height: 32rem;
      margin-top: -14rem;
      margin-left: -6rem;
    }
  }
`
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  padding-inline: 2.4rem;
  margin-top: 6.2rem;

  @media (min-width: 768px) {
    gap: 4.8rem;
    padding-inline: 8rem;
  }
`
