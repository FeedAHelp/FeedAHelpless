import React from 'react'
import * as Styled from './CustomSpinner.styled'

interface CustomSpinnerProps {
  isLoading: boolean
  Children?: React.ReactNode
}

const CustomSpinner: React.FC<CustomSpinnerProps> = ({ isLoading, Children }) => {
  return isLoading ? (
    <Styled.PanLoaderContainer>
      <Styled.Loader />
      <Styled.PanContainer>
        <Styled.Pan />
        <Styled.Handle />
      </Styled.PanContainer>
      <Styled.Shadow />
    </Styled.PanLoaderContainer>
  ) : (
    <>{Children}</>
  )
}

export default CustomSpinner
