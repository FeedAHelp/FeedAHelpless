import styled from 'styled-components'

interface ScrollbarProps {
  height?: string
  width?: string
  color?: string
}

export const Scrollbar = styled.div<ScrollbarProps>`
  float: left;
  height: ${(props) => (props?.height ? props?.height : '200px')};
  width: ${(props) => (props?.width ? props?.width : 'auto')};
  background: ${(props) => (props?.color ? props?.color : '#F5F5F5')};
  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  /* Scrollbar */
  &::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
  }

  /* Thumb */
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background: linear-gradient(180deg, #d0368a, #708ad4);
  }
`

export const ForceOverflow = styled.div`
  min-height: 450px;
`

export const ScrollbarStyles = styled.div`
  /* Track */
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  /* Scrollbar */
  &::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
  }

  /* Thumb */
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #d62929;
  }
`
