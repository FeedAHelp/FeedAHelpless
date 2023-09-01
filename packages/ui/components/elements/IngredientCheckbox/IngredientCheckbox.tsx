import React from 'react'
import { Styled } from './IngredientCheckbox.styled'
import Image from 'next/image'

type IngredientCheckboxProps = {
  id: string
  imgSrc: string
  imgAlt: string
}

const IngredientCheckbox = ({ id, imgSrc, imgAlt }: IngredientCheckboxProps) => {
  return (
    <div>
      <Styled.CheckboxInput type='checkbox' id={id} />
      <Styled.CheckboxLabel htmlFor={id}>
        <Image src={imgSrc} alt={imgAlt} className='h-36 w-36 rounded-full object-cover' width={80} height={80} />
      </Styled.CheckboxLabel>
    </div>
  )
}

export default IngredientCheckbox