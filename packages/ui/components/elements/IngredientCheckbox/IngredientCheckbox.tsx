import React from 'react'
import { Styled } from './IngredientCheckbox.styled'
import Image from 'next/image'

type IngredientCheckboxProps = {
  id: string
  imgSrc?: string
  imgAlt?: string
}

const IngredientCheckbox = ({ id, imgSrc, imgAlt }: IngredientCheckboxProps) => {
  return (
    <div>
      <Styled.CheckboxInput type='checkbox' id={id} />
      <Styled.CheckboxLabel htmlFor={id}>
        <div style={{ width: '3rem', height: '3rem', position: 'relative' }}>
          <Image src={""} alt={imgAlt} fill={true} />
        </div>
      </Styled.CheckboxLabel>
    </div>
  )
}

export default IngredientCheckbox
