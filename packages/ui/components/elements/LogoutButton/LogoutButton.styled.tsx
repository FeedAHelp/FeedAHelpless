import styled from '@emotion/styled'

const Sign = styled.div`
  width: 100%;
  transition-duration: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 17px;
  }

  svg path {
    fill: white;
  }
`

const TextField = styled.div`
  position: absolute;
  right: 0%;
  width: 0%;
  opacity: 0;
  color: white;
  font-size: 1.2em;
  font-weight: 600;
  transition-duration: 0.3s;
`

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition-duration: 0.3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
  background-color: rgb(178, 59, 59);

  &:hover {
    width: 50px;
    border-radius: 40px;
    transition-duration: 0.3s;
    background-color: rgb(162, 178, 35);
  }
`

export const Styled = {
  LogoutButton,
  Sign,
  TextField
}
