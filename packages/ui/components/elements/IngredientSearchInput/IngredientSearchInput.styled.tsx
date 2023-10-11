import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
import { baseTheme } from '../../foundations/theming/theming'

const SearchBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 1.5625rem;
`

const SearchFilters = styled.div<{ isSearchOpen?: boolean }>`
  position: absolute;
  opacity: 0;
  width: 100%;
  border-radius: 20px;

  ${({ isSearchOpen }) =>
    isSearchOpen &&
    `
    opacity: 1;
  `}
`

const SearchBox = styled.div`
  position: relative;
`

const SearchInput = styled.input<{ isSearchOpen?: boolean }>`
  height: 3.125rem;
  width: 3.125rem;
  border-style: none;
  padding: 0.625rem;
  font-size: 1.125rem;
  letter-spacing: 0.125rem;
  outline: none;
  border-radius: 1.5625rem;
  transition: all 0.5s ease-in-out;
  background-color: ${baseTheme.colors.primary.green};
  padding-right: 2.5rem;
  color: #fff;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.125rem;
    letter-spacing: 0.125rem;
    font-weight: 100;
  }

  ${({ isSearchOpen }) =>
    isSearchOpen &&
    `
    width: 18.75rem;
    border-radius: 1rem;
    background-color: #ed6c37;
    border-bottom: 0.0625rem solid rgba(255, 255, 255, 0.5);
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  `}

  &:focus-within {
    background: #444;
  }
`

const SearchIcons = styled(SearchIcon)`
  position: absolute;
  font-size: 2.1875rem;
  right: 0.5rem;
  top: 0.5625rem;
  color: #fff;
`

const FilterContainer = styled.div`
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 2px 2px 8px 0px #999;
`

const CustomCheckLabel = styled.label`
  font-size: 0.8rem;
`
const CustomCheckInput = styled.input`
  appearance: none;
  overflow: hidden;
  min-width: 30px;
  aspect-ratio: 1/1;
  border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
  border: 2px solid rgb(255, 102, 0);
  position: relative;
  transition: all 0.2s ease-in-out;

  &::before {
    position: absolute;
    inset: 0;
    content: '';
    font-size: 35px;
    transition: all 0.2s ease-in-out;
  }

  &:checked {
    border: 2px solid rgb(255, 212, 59);
    background: linear-gradient(135deg, rgb(255, 212, 59) 0%, rgb(255, 102, 0) 100%);
    box-shadow: -5px -5px 30px rgba(255, 212, 59, 1), 5px 5px 30px rgba(255, 102, 0, 1);
  }

  &:checked::before {
    background: linear-gradient(135deg, rgb(255, 212, 59) 0%, rgb(255, 102, 0) 100%);
  }
`

const CustomCheckWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  padding: 15px;
`

const CustomCheck = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const Styled = {
  SearchBoxContainer,
  SearchBox,
  SearchInput,
  SearchIcons,
  SearchFilters,
  FilterContainer,
  CustomCheckWrapper,
  CustomCheckInput,
  CustomCheckLabel,
  CustomCheck
}
