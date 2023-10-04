import React from 'react'
import * as Styled from './CustomLoader.styled'

interface CustomLoaderProps {
  isLoading: boolean
  children?: React.ReactNode
}

const CustomLoader: React.FC<CustomLoaderProps> = ({ isLoading, children }) => {
  return isLoading ? (
    <Styled.CardContainer/>
  ) : (
    <>{children}</>
  )
}

export default CustomLoader
