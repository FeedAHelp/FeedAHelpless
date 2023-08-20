

import React, { ReactNode } from 'react';
import styles from './GenericLinkEffects.module.css'; 

interface GenericLinkEffectsProps {
  children: ReactNode;
  href: string;
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
}

const GenericLinkEffects: React.FC<GenericLinkEffectsProps> = ({
  children,
  href,
  color = 'text-purple-600',
  backgroundColor = '',
  fontSize = 'text-base',
}) => {
  return (
    <a
      href={href}
      className={`${styles['generic-link']} ${color} ${backgroundColor} ${fontSize} no-underline`}
    >
      {children}
    </a>
  );
};

export default GenericLinkEffects;
