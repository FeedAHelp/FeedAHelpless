import React, { useEffect, useState } from 'react'
import { Styled } from './IngredientSearchInput.styled'
import searchFilter from './searchFilter'

interface IngredientSearchInputProps {
  id: string
  imgSrc?: string
  imgAlt?: string
  searchIngredient: (searchTerm: string) => void
}

const IngredientSearchInput = ({ id, imgSrc, imgAlt, searchIngredient }: IngredientSearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)

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
          isSearchOpen={isSearchOpen}
          id={id}
          type='text'
          className='input-search'
          placeholder='Type to Search...'
          onChange={handleChange}
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        />

        <Styled.SearchFilters isSearchOpen={isSearchOpen}>
          <Styled.FilterContainer>
            <Styled.CustomCheckWrapper>
              {searchFilter.map((sf, index) => {
                return (
                  <Styled.CustomCheck key={sf.id}>
                    <Styled.CustomCheckInput id={sf.id} type='checkbox' />
                    <Styled.CustomCheckLabel htmlFor={sf.id}>{sf.label}</Styled.CustomCheckLabel>
                  </Styled.CustomCheck>
                )
              })}
            </Styled.CustomCheckWrapper>
          </Styled.FilterContainer>
        </Styled.SearchFilters>
      </Styled.SearchBox>
    </Styled.SearchBoxContainer>
  )
}

export default IngredientSearchInput
