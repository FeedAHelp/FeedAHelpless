import styled from "styled-components";

const CardWrapper = styled.div`
  display: block;
  top: 0px;
  position: relative;
  background-color: #f2f8f9;
  border-radius: 4px;
  text-decoration: none;
  min-width:2.2rem;
  z-index: 0;
  overflow: hidden;
  border: 1px solid #f2f8f9;

  &:hover {
    transition: all 0.2s ease-out;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
    top: -4px;
    border: 1px solid rgba(86, 215, 116, 0.598);
    background-color: white;
  }

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 32px;
    right: -16px;
    height: 30px;
    width: 0px;
    border-radius: 10px;
    transform: scale(2);
    transition: 0.5s ease-out;
  }
  &:hover:before {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 32px;
    right: -16px;
    background: rgba(86, 215, 116, 0.292);
    height: 30px;
    width: 60px;
    border-radius: 10px;
  }

  &:hover:before {
    transform: scale(2.15);
  }
`;

export const Styled={
    CardWrapper
}
