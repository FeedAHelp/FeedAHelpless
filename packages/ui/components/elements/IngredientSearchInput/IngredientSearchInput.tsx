import React, { useState } from 'react'
import { Styled } from './IngredientSearchInput.styled'
import searchFilter from './searchFilter'

type IngredientSearchInputProps = {
  id: string
  imgSrc?: string
  imgAlt?: string
}

const IngredientSearchInput = ({ id, imgSrc, imgAlt }: IngredientSearchInputProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  console.log(isSearchOpen)
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
