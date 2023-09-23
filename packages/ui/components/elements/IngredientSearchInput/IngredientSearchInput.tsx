import React from 'react'
import { Styled } from './IngredientSearchInput.styled'
import { search } from 'react-icons-kit/fa/search'
import { Icon } from 'react-icons-kit'
import { uuidv4 } from '../../utils/uuid'

type IngredientSearchInputProps = {
  id: string
  imgSrc: string
  imgAlt: string
}

const SearchIcon = () => (
  <div className=''>
    <Icon icon={search} size={24} />
  </div>
)
const IngredientSearchInput = () => {
  const id = `input-search-field-${uuidv4()}`
  return (
    <Styled.SearchBoxContainer>
      <Styled.SearchBox>
        <label htmlFor="input-search-field"><Styled.SearchIcons /></label>
        <Styled.SearchInput id="input-search-field" type='text' className='input-search' placeholder='Type to Search...' />
      </Styled.SearchBox>
    </Styled.SearchBoxContainer>
  )
}

export default IngredientSearchInput
