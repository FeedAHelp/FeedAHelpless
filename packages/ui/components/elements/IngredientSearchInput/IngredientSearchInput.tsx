import React, { useEffect, useState } from 'react'
import { Styled } from './IngredientSearchInput.styled'
import { search } from 'react-icons-kit/fa/search'
import { Icon } from 'react-icons-kit'
import { uuidv4 } from '../../utils/uuid'

interface IngredientSearchInputProps {
  id: string
  imgSrc?: string
  imgAlt?: string
  searchIngredient: (searchTerm: string) => void
}

const SearchIcon = () => (
  <div className=''>
    <Icon icon={search} size={24} />
  </div>
)
const IngredientSearchInput = ({ id, imgSrc, imgAlt, searchIngredient }: IngredientSearchInputProps) => {
  // const id = `input-search-field-${uuidv4()}`
  const [searchTerm, setSearchTerm] = useState<string>('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    let value = event?.target?.value || ''
    setSearchTerm(value)
  }
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      searchIngredient && searchIngredient(searchTerm)
    }, 1000)
    return () => clearTimeout(timeoutId)
  }, [searchTerm])

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
