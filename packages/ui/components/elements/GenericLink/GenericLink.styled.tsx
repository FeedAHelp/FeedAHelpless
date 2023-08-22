import styled from 'styled-components';
type Props = {
  href: string,
  color: string,
  backgroundColor: string,
  fontSize: string
}

const GenericLink = styled.a<Props>`
  border-bottom: 1px solid ${({ color }) => color || '#453886'};
  color: ${({ color }) => color || '#453886'};
  padding-bottom: 0.25rem;
  text-decoration: none;
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: ${({ fontSize }) => fontSize || 'initial'};
  
  &:hover {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}%3C/style%3E%3Cpath fill='none' stroke='${props => props.color}'  stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
    background-position: bottom;
    background-repeat: repeat-x;
    background-size: 1rem;
    border-bottom: none;
    padding-bottom: 0.3rem;
    text-decoration: none;   
  }
`;

export const Styled = {
  GenericLink
}
