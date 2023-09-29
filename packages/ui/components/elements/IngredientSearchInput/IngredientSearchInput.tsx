import React from 'react'
import { Styled } from './IngredientSearchInput.styled'
import { search } from 'react-icons-kit/fa/search'
import { Icon } from 'react-icons-kit'
import { uuidv4 } from '../../utils/uuid'

type IngredientSearchInputProps = {
  id: string
  imgSrc?: string
  imgAlt?: string
  onIngredientSearchInputChange: (searchTerm: string) => void
}

const SearchIcon = () => (
  <div className=''>
    <Icon icon={search} size={24} />
  </div>
)
const IngredientSearchInput = ({ id, imgSrc, imgAlt, onIngredientSearchInputChange }: IngredientSearchInputProps) => {
  // const id = `input-search-field-${uuidv4()}`
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const searchTerm = event.target.value
    onIngredientSearchInputChange(searchTerm)
  }

  return (
    <Styled.SearchBoxContainer>
      <Styled.SearchBox>
        <label htmlFor={id}>
          <Styled.SearchIcons />
        </label>
        <Styled.SearchInput
          id={id}
          type='text'
          className='input-search'
          placeholder='Type to Search...'
          onChange={handleChange}
        />
      </Styled.SearchBox>
    </Styled.SearchBoxContainer>
  )
}

export default IngredientSearchInput
