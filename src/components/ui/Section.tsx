import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, dark = false, className = '', id }) => (
  <section
    id={id}
    className={`py-14 sm:py-20 md:py-24 ${dark ? 'bg-[#332A24] text-[#F3EDE2]' : 'bg-[#F3EDE2] text-[#332A24]'} ${className}`}
  >
    {children}
  </section>
);
