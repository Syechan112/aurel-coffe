import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => (
  <div className={`max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 ${className}`}>{children}</div>
);
