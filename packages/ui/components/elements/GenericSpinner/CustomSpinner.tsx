import React from 'react'
import * as Styled from './CustomSpinner.styled'

interface CustomSpinnerProps {
  isLoading: boolean
  children?: React.ReactNode
}


const CustomSpinner: React.FC<CustomSpinnerProps> = ({ isLoading, children }) => {
  return isLoading ? (
    <> 
      <Styled.PanLoaderContainer>
      <Styled.Loader />
      <Styled.PanContainer>
        <Styled.Pan />
        <Styled.Handle />
      </Styled.PanContainer>
      <Styled.Shadow />
    </Styled.PanLoaderContainer>
    </>
  ) : (
    <>{children}</>
  )
}

export default CustomSpinner
