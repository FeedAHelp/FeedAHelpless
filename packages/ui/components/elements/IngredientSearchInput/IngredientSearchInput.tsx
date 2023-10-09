import React from 'react'
import { Styled } from './IngredientSearchInput.styled'

type IngredientSearchInputProps = {
  id: string
  imgSrc?: string
  imgAlt?: string
}

const IngredientSearchInput = ({ id, imgSrc, imgAlt }: IngredientSearchInputProps) => {
  return (
    <Styled.SearchBoxContainer>
      <Styled.SearchBox>
        <label htmlFor={id}>
          <Styled.SearchIcons />
        </label>
        <Styled.SearchInput id={id} type='text' className='input-search' placeholder='Type to Search...' />
        <Styled.SearchFilters>
          <Styled.FilterContainer>
            <Styled.Cboxtags>
              <li>
                <input type='checkbox' id='checkboxOne' value='Rainbow Dash' />
                <label htmlFor='checkboxOne'>Rainbow Dash</label>
              </li>
            </Styled.Cboxtags>
          </Styled.FilterContainer>
        </Styled.SearchFilters>
      </Styled.SearchBox>
    </Styled.SearchBoxContainer>
  )
}

export default IngredientSearchInput
