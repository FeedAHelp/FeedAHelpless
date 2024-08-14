import styled from "styled-components";

const CustomCheckBoxHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;

const CustomCheckBoxInner = styled.div`
  font-size: 18px;
  font-weight: 900;
  pointer-events: none;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 300ms;
  transition-property: transform;
  transform: translateY(0px);
`;

const CustomCheckBox = styled.div`
  width: fit-content;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  padding: 2px 8px;
  background-color: rgba(0, 0, 0, 0.16);
  border-radius: 0px;
  color: rgba(255, 255, 255, 0.7);
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 300ms;
  transition-property: color, background-color, box-shadow;
  display: flex;
  height: 32px;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 1px 0px inset,
    rgba(255, 255, 255, 0.17) 0px 1px 1px 0px;
  outline: none;
  justify-content: center;
  min-width: 55px;

  &:hover {
    background-color: #2c2c2c;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.23) 0px -4px 1px 0px inset,
      rgba(255, 255, 255, 0.17) 0px -1px 1px 0px,
      rgba(0, 0, 0, 0.17) 0px 2px 4px 1px;
  }

  &:hover ${CustomCheckBoxInner} {
    transform: translateY(-2px);
  }
`;

const CustomCheckBoxWrapper = styled.label`
  transform: translateY(-2px);

  &:first-of-type ${CustomCheckBox} {
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    border-right: 0px;
  }

  &:last-of-type ${CustomCheckBox} {
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    border-left: 0px;
  }
`;

const CustomCheckBoxInput = styled.input`
  display: none;

  &:checked + ${CustomCheckBoxWrapper} ${CustomCheckBox} {
    background-color: #2d6737;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.23) 0px -4px 1px 0px inset,
      rgba(255, 255, 255, 0.17) 0px -1px 1px 0px,
      rgba(0, 0, 0, 0.17) 0px 2px 4px 1px;
  }

  &:checked
    + ${CustomCheckBoxWrapper}
    ${CustomCheckBox}
    ${CustomCheckBoxInner} {
    transform: translateY(-2px);
  }

  &:checked + ${CustomCheckBoxWrapper} ${CustomCheckBox}:hover {
    background-color: #34723f;
    box-shadow: rgba(0, 0, 0, 0.26) 0px -4px 1px 0px inset,
      rgba(255, 255, 255, 0.17) 0px -1px 1px 0px,
      rgba(0, 0, 0, 0.15) 0px 3px 6px 2px;
  }
`;

export const Styled = {
  CustomCheckBoxHolder,
  CustomCheckBoxInput,
  CustomCheckBoxWrapper,
  CustomCheckBox,
  CustomCheckBoxInner,
};
