import styled from "@emotion/styled";

const InputField = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
`;

const DownFooter = styled.span`
  font-size: 0.8rem;
  color: #666362;
`;

const FooterButton = styled.button`
height: 50px;
  width: 150px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  margin-top: 20px;

  &:hover {
    box-shadow: .5px .5px 150px #252525;
  }

  &::after {
    content: "Donate Now";
    height: 50px;
    width: 150px;
    background-color:#e9ecef;
    color: #f24c00;
    position: absolute;
    top: 0%;
    left: 0%;
    transform: translateY(50px);
    font-size: 1.3rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0; 
    transition: all 0.5s ease-in-out;
    border-radius: 10px; 
    border: 3px solid #f24c00;
  }

  &::before {
    content: "Donate";
    height: 50px;
    width: 150px;
    background: linear-gradient(to right, red, orange);
    color: #ffff;
    position: absolute;
    top: 0%;
    left: 0%;
    transform: translateY(0px) scale(1.2);
    font-size: 1.3rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in-out;
    border-radius: 10px; 
  }

  &:hover::after {
    transform: translateY(0px);
    opacity: 1; 
  }
`;

export const Styled = {
  InputField,
  DownFooter,
  FooterButton,
};
