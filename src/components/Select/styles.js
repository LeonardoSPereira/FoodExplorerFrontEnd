import { styled } from 'styled-components'
import * as Select from '@radix-ui/react-select'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  label {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;
    color: ${({ theme }) => theme.colors.light_400};
  }
`

export const SelectTrigger = styled(Select.SelectTrigger)`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.8rem;
  padding: 1.6rem;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.colors.dark_900};
  color: ${({ theme }) => theme.colors.light_400};
`

export const SelectIcon = styled(Select.SelectIcon)`
  height: 2.2rem;
  width: 2.2rem;
  font-size: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.light_100};
`

export const SelectContent = styled(Select.Content)`
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.dark_800};
  border-radius: 0.8rem;
`

export const SelectViewport = styled(Select.Viewport)`
  padding: 0.5rem;
`

export const StyledItem = styled(Select.Item)`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.light_100};
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  padding: 0 3.4rem 0 2.4rem;
  position: relative;
  line-height: 3.2rem;
  user-select: none;

  &[data-highlighted] {
    outline: none;
    background-color: ${({ theme }) => theme.colors.dark_1000};
    color: ${({ theme }) => theme.colors.light_300};
  }
`

export const SelectLabel = styled(Select.Label)`
  padding: 0 2.4rem;
  font-size: 1.6rem;
  line-height: 2.8rem;
  color: ${({ theme }) => theme.colors.light_400};
`

export const SelectSeparator = styled(Select.Separator)`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.light_600};
  margin: 0.5rem;
`

export const StyledItemIndicator = styled(Select.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 2.4rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`
