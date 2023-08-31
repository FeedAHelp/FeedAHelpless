import React from 'react'
import { Styled } from './IngredientSearchInput.styled'

type IngredientSearchInputProps = {
  id: string
  imgSrc: string
  imgAlt: string
}

const IngredientSearchInput = () => {
  return (
    <Styled.SearchBoxContainer>
      <Styled.SearchBox>
        <Styled.SearchInput type='text' className='input-search' placeholder='Type to Search...' />
      </Styled.SearchBox>
    </Styled.SearchBoxContainer>
  )
}

export default IngredientSearchInput
