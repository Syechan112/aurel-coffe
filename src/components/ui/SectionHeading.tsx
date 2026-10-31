import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  dark = false,
  className = '',
}) => (
  <div className={`mb-10 md:mb-14 ${className}`}>
    {eyebrow && (
      <p
        className={`text-xs uppercase tracking-widest font-mono font-medium mb-3 ${
          dark ? 'text-[#D7C6A8]' : 'text-[#77765B]'
        }`}
      >
        {eyebrow}
      </p>
    )}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal leading-tight tracking-tight">
      {title}
    </h2>
    {description && (
      <p
        className={`mt-4 text-base sm:text-lg max-w-2xl font-light leading-relaxed ${
          dark ? 'text-[#D7C6A8]/80' : 'text-[#71675D]'
        }`}
      >
        {description}
      </p>
    )}
  </div>
);
