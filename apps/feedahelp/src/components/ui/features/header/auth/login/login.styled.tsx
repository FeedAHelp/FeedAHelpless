import styled, { createGlobalStyle } from "styled-components";
import { ReactNode } from "react";
const GlobalStyles = createGlobalStyle`
   /* Import the Google Font URL */
  
   @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap');

`

export const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  font-family: "Nunito", sans-serif;
  @media screen  and (min-width: 986px){
    grid-template-columns: 1fr 1fr;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 1.5rem;
  text-align: left;
  .text-primary {
    color: #ed500d;
  }
  .text-secondary {
    color: #424242;
  }
  .title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .formHading {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  .formLabel {
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 0.25rem;
  }
  .formInput {
    width: 100%;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 1px solid #d8d8d8;
    border-radius: 0.25rem;
    margin-bottom: 0.5rem;

    &:focus {
      outline: none;
    }
  }

  .inputContainer {
    margin-bottom: 1rem;
  }

  @media screen  and (min-width: 986px){
    padding: 2.5rem;
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  @media screen  and (min-width: 986px){
    display: block;
  }
`;

export const LoginImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -10;
`;

export const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #d8d8d8;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  padding: 0 1rem;

  & input {
    flex: 1;
    padding: 0.5rem 0;

    &:focus {
      outline: none;
    }
  }
`;

interface CheckboxProps {
  className?: string;
  checked: boolean;
  onChange: () => void;
  children: ReactNode;
  bg: string;
}

const CheckboxContainer = styled.label`
  display: inline-block;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  font-size: 16px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const StyledCheckmark = styled.span<{ checked: boolean; bg: string }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: ${({ checked, bg }) => (checked ? bg : "#fff")};
  border: 1px solid #aaa;

  &:hover {
    background-color: #ed500d;
  }
`;

const CheckmarkIcon = styled.span<{ checked: boolean }>`
  position: absolute;
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  display: ${(props) => (props.checked ? "block" : "none")};
`;

export const Checkbox: React.FC<CheckboxProps> = ({
  className,
  checked,
  onChange,
  children,
  bg,
}) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} onChange={onChange} />
    <StyledCheckmark checked={checked} bg={bg} />
    <CheckmarkIcon checked={checked} />
    {children}
  </CheckboxContainer>
);

export const SubmitButton = styled.button`
  background: #ed500d;
  border-radius: 5px;
  padding: 1rem 0;
  text-align: center;
  width: 100%;
  color: white;
  font-family: Nunito;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 2.5rem;
  margin-bottom: 1.25rem;
`;
export const PlaceCenter = styled.div`
display:flex;
align-items: center;
justify-content: center;
`
export const ForgetPasswordLink = styled.a`
  color: #ed500d !important;
  font-family: Nunito;
  font-size: 15px;
  text-decoration-line: underline;
  text-align: center;
`;

export const SocialLogin =  styled.div`
display:flex;
align-items:center;
justify-content: space-between;
& p{
font-family: Nunito;
font-size: 15px;
}
.socialLink{
  display:flex;
  align-items:center;
  justify-content: flex-end; 
  gap:1rem;
  .socialImage{
    width: 2.2rem;
  }
}

`