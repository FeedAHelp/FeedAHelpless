import React from 'react'
import * as Styled from './GenericScrollbar.styled'

interface GenericScrollbarProps {
  children?: React.ReactNode
  height?: string
  bg_color?: string
  width?: string
}

export const GenericScrollbar = ({ children, height, bg_color, width }: GenericScrollbarProps): JSX.Element => {
  return (
    <Styled.Scrollbar color={bg_color} width={width} height={height}>
      {children}
    </Styled.Scrollbar>
  )
}
