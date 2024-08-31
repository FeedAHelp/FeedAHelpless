import styled from "styled-components";
import { DeshiShareIcon, BoxShadow } from "../DeshiMenus.styled";
import { baseTheme } from "~/ui/components/foundations/theming/theming";

const DonateHover = () => `
  &:hover ${RangeBox} {
    opacity: 1;
    transition: transform 0.5s;
    transition-delay: 0.5ms;
  }

  &:hover ${DonateAmount} {
    left: 0;
    padding-bottom: 25px;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 1.2em;
  }

  &:hover ${DonateButton} {
    right: 0;
    transform: scale(1);
  }
`;

const DeshiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15.625rem, 21.875rem));
  grid-gap: 0.9375rem 0.9375rem;
  justify-content: center;
  align-items: baseline;
`;

const BoxDown = styled.div`
  width: 100%;
  height: 2.5rem;
  position: relative;
  overflow: hidden;
`;

const Cart = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font-family: "Lato", sans-serif;
  font-weight: 700;
`;

const DonateAmount = styled.div`
  -webkit-transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
  -moz-transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
  -o-transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
  transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -moz-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -o-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -webkit-transition-delay: 100ms;
  -o-transition-delay: 100ms;
  transition-delay: 100ms;
  display: block;
  position: absolute;
  top: 50%;
  left: 110%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: ${baseTheme.colors.primary.blue};
`;

const DonateButton = styled.span`
  transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
  transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  transition-delay: 100ms;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.9375rem;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  transform: scale(0);
`;

const ElWrapper = styled.div`
  width: 16.25rem;
  padding: 0.625rem;
  margin: 10.0625rem auto;
  cursor: pointer;
  transition: transform 0.5s;

  ${DonateHover}
`;

const DonateButtonIcon = styled.div`
  background: ${baseTheme.colors.neutrals.full_white};
  border-radius: 50%;
  padding: 0.5rem;
  z-index: 99;
  ${BoxShadow}
`;

const RangeBox = styled.div`
  top: 80%;
  height: 20px;
  width: 200px;
  margin-top: -13px;
  -webkit-box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  position: absolute;
  background: #27ae60;
  display: flex;
  opacity: 0;
`;

const RangeInput = styled.input`
  position: relative;
  outline: none;
  margin: 7px 0px;
  width: 50%;
  color: #fff;
  left: 50%;
  margin-left: -47.5%;
  background: #e74c3c;
  text-align: center;
  background: #2ecc71;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-appearance: none;
  border-radius: 25px;

  &:before {
    display: flex;
    text-align: center;
    justify-content: center;
    align-item: center;
    font-size: 20px;
    position: absolute;
    left: 120%;
    top: -200%;
    content: attr(value);
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background: #ecf0f1;
    position: relative;
    z-index: 3;
    cursor: pointer;
  }
`;

export const Styled = {
  DeshiShareIcon,
  DeshiGrid,
  ElWrapper,
  BoxDown,
  Cart,
  DonateAmount,
  DonateButton,
  DonateButtonIcon,
  RangeBox,
  RangeInput,
};
