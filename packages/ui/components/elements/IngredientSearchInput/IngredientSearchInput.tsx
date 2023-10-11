import React, { useState } from 'react'
import { Styled } from './IngredientSearchInput.styled'

type IngredientSearchInputProps = {
  id: string
  imgSrc?: string
  imgAlt?: string
}

const IngredientSearchInput = ({ id, imgSrc, imgAlt }: IngredientSearchInputProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
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
              <Styled.CustomCheckInput id="check_01" type='checkbox' />
              <Styled.CustomCheckLabel htmlFor='check_01'>
                Check
              </Styled.CustomCheckLabel>
            </Styled.CustomCheckWrapper>
          </Styled.FilterContainer>
        </Styled.SearchFilters>
      </Styled.SearchBox>
    </Styled.SearchBoxContainer>
  )
}

export default IngredientSearchInput
