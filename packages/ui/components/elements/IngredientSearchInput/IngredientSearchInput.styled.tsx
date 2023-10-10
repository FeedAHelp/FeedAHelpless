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
  width: 18.125rem;
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
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 5px;
  border-radius: 4px;
  box-shadow: 2px 2px 8px 0px #999;
`

const CustomCheckLabel = styled.label`
  background-color: #ccc;
  color: #fff;
  padding: 5px 10px;
  font-family: sans-serif;
  cursor: pointer;
  user-select: none;
  border-radius: 4px;
  display: inline-block;
  margin: 0 10px 10px 0;
  backface-visibility: hidden;
  transition: all 0.6s ease;
`

const CustomCheckInput = styled.input`
  display: none;
`

CustomCheckInput.displayName = 'CustomCheckInput'

const CustomCheckWrapper = styled.div`
  position: relative;

  & ${CustomCheckLabel} {
    background-color: #ccc;
    color: #fff;
    padding: 5px 10px;
    font-family: sans-serif;
    cursor: pointer;
    user-select: none;
    border-radius: 4px;
    display: inline-block;
    margin: 0 10px 10px 0;
    backface-visibility: hidden;
    transition: all 0.6s ease;
  }

  & ${CustomCheckInput}:checked + ${CustomCheckLabel} {
    background-color: #0a0;
    backface-visibility: hidden;
    transform: rotateY(360deg);
  }
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
  CustomCheckLabel
}
