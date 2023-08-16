import styled, { keyframes } from 'styled-components'

const rem = (px) => `${px / 16}rem` // Conversion function

export const rotate = keyframes`
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(720deg);
  }
`

export const shape_1 = keyframes`
  60% {
    transform: scale(0.4);
  }
`

export const shape_2 = keyframes`
  40% {
    transform: scale(0.4);
  }
`

export const shape_3 = keyframes`
  50% {
    border-radius: 100%;
    transform: scale(0.5) rotate(-45deg);
  }
  100% {
    transform: scale(0.98) rotate(-45deg);
  }
`

export const shadow = keyframes`
  50% {
    transform: translateX(-50%) scale(0.5);
    border-color: #f2f2f2;
  }
`

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Preloader = styled.div`
  animation: ${rotate} 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
`

export const PreloaderSpan = styled.span`
  --c: #f23f3f;
  position: absolute;
  display: block;
  height: ${rem(64)};
  width: ${rem(64)};
  background: var(--c);
  border: ${rem(1)} solid var(--c);
  border-radius: 100%;
`

export const Shape1 = styled(PreloaderSpan)`
  transform: translate(${rem(-28)}, ${rem(-28)});
  animation: ${shape_1} 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
`

export const Shape2 = styled(PreloaderSpan)`
  transform: translate(${rem(28)}, ${rem(-28)});
  animation: ${shape_2} 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
`

export const Shape3 = styled(PreloaderSpan)`
  position: relative;
  border-radius: 0;
  transform: scale(0.98) rotate(-45deg);
  animation: ${shape_3} 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
`

export const Shadow = styled.div`
  position: relative;
  top: ${rem(30)};
  left: 50%;
  transform: translateX(-50%);
  display: block;
  height: ${rem(16)};
  width: ${rem(64)};
  border-radius: 50%;
  background-color: #d9d9d9;
  border: ${rem(1)} solid #d9d9d9;
  animation: ${shadow} 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
`
