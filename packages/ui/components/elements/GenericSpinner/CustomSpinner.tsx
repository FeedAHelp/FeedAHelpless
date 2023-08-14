import React from 'react'
import * as Styled from './CustomSpinner.styled'

interface CustomSpinnerProps {
  isLoading: boolean
  children?: React.ReactNode
}

const CustomSpinner: React.FC<CustomSpinnerProps> = ({ isLoading, children }) => {
  return isLoading ? (
    <>
      <Styled.Container>
        <Styled.Preloader>
          <Styled.Shape1 />
          <Styled.Shape2 />
          <Styled.Shape3 />
        </Styled.Preloader>
        <Styled.Shadow />
      </Styled.Container>
    </>
  ) : (
    <>{children}</>
  )
}

export default CustomSpinner
