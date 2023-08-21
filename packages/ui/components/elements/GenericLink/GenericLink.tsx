import React, { ReactNode } from 'react';
import { Styled } from './Blabls.styled';

interface GenericLinkProps {
  children: ReactNode;
  href: string;
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
}

const GenericLink: React.FC<GenericLinkProps> = ({
  children,
  href,
  color,
  backgroundColor,
  fontSize,
}) => {

  return (
    <Styled.BlablsWrapper href={href} color={color} backgroundColor={backgroundColor} fontSize={fontSize}>
      {children}
    </Styled.BlablsWrapper>

  );
};

export default GenericLink;
