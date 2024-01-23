import { styled } from 'styled-components'
import * as Tabs from '@radix-ui/react-tabs'

export const TabsRoot = styled(Tabs.Root)`
  width: 36rem;
  height: 32rem;
`

export const TabsList = styled(Tabs.List)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.dark_600};
`

export const TabsTrigger = styled(Tabs.Trigger)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1.8rem 1.4rem;
  border-radius: 0.8rem 0rem 0rem 0rem;
  color: ${({ theme }) => theme.colors.light_100};
  background-color: transparent;

  svg:first-child {
    width: 2.4rem;
    height: 2.4rem;
  }

  svg:last-child {
    width: 2.4rem;
    height: 1.8rem;
  }

  &:first-child {
    border-radius: 0.8rem 0rem 0rem 0rem;
    border-top: 1px solid ${({ theme }) => theme.colors.light_600};
    border-left: 1px solid ${({ theme }) => theme.colors.light_600};
    border-right: 1px solid ${({ theme }) => theme.colors.light_600};
  }

  &:last-child {
    border-radius: 0rem 0.8rem 0rem 0rem;
    border-top: 1px solid ${({ theme }) => theme.colors.light_600};
    border-right: 1px solid ${({ theme }) => theme.colors.light_600};
    border-left: 1px solid ${({ theme }) => theme.colors.light_600};
  }

  &[data-state='active'] {
    background-color: ${({ theme }) => theme.colors.dark_800};
  }

  &[data-state='inactive'] {
    background-color: ${({ theme }) => theme.colors.dark_500};
  }
`

export const TabsContent = styled(Tabs.Content)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 0rem 0rem 0.6rem 0.6rem;
  border: 1px solid ${({ theme }) => theme.colors.light_600};

  > div {
    input {
      background-color: transparent;
    }
  }

  &[data-state='active'] {
    display: flex;
    padding: 1.8rem;
  }
`

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`
