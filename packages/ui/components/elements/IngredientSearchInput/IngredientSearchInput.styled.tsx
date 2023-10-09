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

const SearchFilters = styled.div`
  position: absolute;
  opacity: 0;
  width: 100%;
  border-radius: 20px;
`

const SearchBox = styled.div`
  position: relative;
`

const SearchInput = styled.input`
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

  &:focus {
    width: 18.75rem;
    border-radius: 1rem;
    background-color: #ed6c37;
    border-bottom: 0.0625rem solid rgba(255, 255, 255, 0.5);
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  }

  &:focus ~ ${SearchFilters} {
    opacity: 1;
  }

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
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 13px;
  background: white;
`

const Cboxtags = styled.ul`
  list-style: none;
  padding: 20px;
`

export const Styled = {
  SearchBoxContainer,
  SearchBox,
  SearchInput,
  SearchIcons,
  SearchFilters,
  FilterContainer,
  Cboxtags
}
