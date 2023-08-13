import styled, { keyframes } from "styled-components";

// Define keyframes
export const unfoldIn = keyframes`
  0% {
    transform: scaleY(.005) scaleX(0);
  }
  50% {
    transform: scaleY(.005) scaleX(1);
  }
  100% {
    transform: scaleY(1) scaleX(1);
  }
`;

export const unfoldOut = keyframes`
  0% {
    transform: scaleY(1) scaleX(1);
  }
  50% {
    transform: scaleY(.005) scaleX(1);
  }
  100% {
    transform: scaleY(.005) scaleX(0);
  }
`;

export const zoomIn = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

export const zoomOut = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

// Styled Components for the modal
export const ModalContainer = styled.div`
  position: fixed;
  display: table;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  transform: scale(0);
  z-index: 1;

  &.one {
    transform: scaleY(0.01) scaleX(0);
    animation: ${unfoldIn} 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

    .modal-background {
      .modal {
        transform: scale(0);
        animation: ${zoomIn} 0.5s 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)
          forwards;
      }
    }
  }

  &.out {
    transform: scale(1);
    animation: ${unfoldOut} 1s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

    .modal-background {
      .modal {
        animation: ${zoomOut} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      }
    }
  }
`;

export const ModalBackground = styled.div`
  display: table-cell;
  background: rgba(0, 0, 0, 0.8);
  text-align: center;
  vertical-align: middle;

  .modal {
    background: white;
    padding: 50px;
    display: inline-block;
    border-radius: 3px;
    font-weight: 300;
    position: relative;

    h2 {
      font-size: 25px;
      line-height: 25px;
      margin-bottom: 15px;
    }

    p {
      font-size: 18px;
      line-height: 22px;
    }

    .modal-svg {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border-radius: 3px;

      rect {
        stroke: #fff;
        stroke-width: 2px;
        stroke-dasharray: 778;
        stroke-dashoffset: 778;
      }
    }
  }
`;

export const ModalContent = styled.div`
  min-height: 100%;
  height: 100%;
  background: white;
  position: relative;
  z-index: 0;

  h1 {
    padding: 75px 0 30px 0;
    text-align: center;
    font-size: 30px;
    line-height: 30px;
  }

  .buttons {
    max-width: 800px;
    margin: 0 auto;
    padding: 0;
    text-align: center;

    .button {
      display: inline-block;
      text-align: center;
      padding: 10px 15px;
      margin: 10px;
      background: red;
      font-size: 18px;
      background-color: #efefef;
      border-radius: 3px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      cursor: pointer;

      &:hover {
        color: white;
        background: #009bd5;
      }
    }
  }
`;