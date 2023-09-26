import styled from '@emotion/styled'
import { ButtonUnstyled } from '@mui/core'
import SearchIcon from '@mui/icons-material/Search'

const SearchBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.5625rem;
`

const SearchBox = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
  cursor: pointer;
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
  background-color: ${({ theme }) => theme.colors.primary.green};
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
`

const SearchButton = styled(ButtonUnstyled)`
  width: 3.125rem;
  height: 3.125rem;
  border-style: none;
  font-size: 1.25rem;
  font-weight: bold;åååå
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  right: 0rem;
  color: #ed6c37;
  background-color: #ed6c3790;
  pointer-events: painted;

  &:focus + ${SearchInput} {
    width: 18.75rem;
    border-radius: 0rem;
    background-color: transparent;
    border-bottom: 0.0625rem solid rgba(255, 255, 255, 0.5);
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  }
`

const SearchIcons = styled(SearchIcon)`
  position: absolute;
  font-size: 2.1875rem;
  right: 0.5rem;
  top: 0.5625rem;
  color: #fff;
`

export const Styled = {
  SearchBoxContainer,
  SearchBox,
  SearchInput,
  SearchButton,
  SearchIcons
}
