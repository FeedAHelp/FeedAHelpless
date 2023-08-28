import styled, { keyframes } from 'styled-components'

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
`

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
`

export const zoomIn = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`

export const zoomOut = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`
export const ModalContainer = styled.div`
  position: fixed;
  display: table;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  transform: scale(0);
  z-index: 5;

  &.one {
    transform: scaleY(0.01) scaleX(0);
    animation: ${unfoldIn} 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

    .modal-background {
      .modal {
        transform: scale(0);
        animation: ${zoomIn} 0.5s 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
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
`

export const ModalBackground = styled.div`
  display: table-cell;
  background: rgba(0, 0, 0, 0.8);
  text-align: center;
  vertical-align: middle;

  .modal {
    background: white;
    padding-top: 0.125rem;
    padding-bottom: 0.125rem;
    padding-left: 0.125rem;
    padding-right: 0.125rem;
    display: inline-block;
    border-radius: 0.1875rem;
    font-weight: 300;
    position: relative;
  }

  .close-button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
    font-size: 1.25rem;
    color: #333;
  }
`

export const ModalContent = styled.div`
  background: white;
  position: relative;
  z-index: 0;
`
