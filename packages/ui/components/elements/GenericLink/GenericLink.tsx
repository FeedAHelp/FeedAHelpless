import React, { ReactNode } from 'react';
import { Styled } from './GenericLink.styled';

interface GenericLinkProps {
  children: ReactNode;
  href?: string;
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
    <Styled.GenericLink href={href} color={color} backgroundColor={backgroundColor} fontSize={fontSize}>
      {children}
    </Styled.GenericLink>
  );
};

export default GenericLink;
