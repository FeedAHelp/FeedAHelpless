import styled from "styled-components";

const CardWrapper = styled.div`
  display: block;
  top: 0rem;
  position: relative;
  background-color: #f2f8f9;
  border-radius: 0.25rem;
  text-decoration: none;
  min-width:2.2rem;
  z-index: 0;
  overflow: hidden;
  border: 0.0625rem solid #f2f8f9;

  &:hover {
    transition: all 0.2s ease-out;
    box-shadow: 0rem 0.25rem 0.5rem rgba(38, 38, 38, 0.2);
    top: -0.25rem;
    border: 0.0625rem solid rgba(86, 215, 116, 0.598);
    background-color: white;
  }

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 2rem;
    right: -1rem;
    height: 1.875rem;
    width: 0rem;
    border-radius: 0.625rem;
    transform: scale(2);
    transition: 0.5s ease-out;
  }
  &:hover:before {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 2rem;
    right: -1rem;
    background: rgba(86, 215, 116, 0.292);
    height: 1.875rem;
    width: 3.75rem;
    border-radius: 0.625rem;
  }

  &:hover:before {
    transform: scale(2.15);
  }
`;

export const Styled={
    CardWrapper
}
