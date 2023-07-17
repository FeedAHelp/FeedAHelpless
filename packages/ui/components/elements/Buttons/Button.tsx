import { Styled } from './Button.styled'
import { ButtonPropsType } from '../../../types/types'

export const GenericButton = ({
  isdisabled = false,
  variant = 'filled',
  size = 'large',
  backgroundcolor,
  textcolor,
  shape,
  children,
  type,
  shadowcolor,
  activebgcolor,
  width,
  onClick
}: ButtonPropsType) => {
  return (
    <Styled.Button
      onClick={onClick}
      variant={variant}
      size={size}
      backgroundcolor={backgroundcolor}
      textcolor={textcolor}
      isdisabled={isdisabled}
      shape={shape}
      shadowcolor={shadowcolor}
      activebgcolor={activebgcolor}
      width={width}
    >
      {children}
    </Styled.Button>
  )
}
