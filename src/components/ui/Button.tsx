import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'text';
  dark?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  dark = false,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const base =
    'inline-flex items-center justify-center font-medium transition-all duration-200 text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed';

  let style = '';
  if (variant === 'primary') {
    style = dark
      ? 'bg-[#D7C6A8] text-[#332A24] hover:bg-[#FFFCF7] px-6 py-3 rounded-full'
      : 'bg-[#332A24] text-[#F3EDE2] hover:bg-[#71675D] px-6 py-3 rounded-full';
  } else if (variant === 'outline') {
    style = dark
      ? 'border border-[#D7C6A8] text-[#D7C6A8] hover:bg-[#D7C6A8] hover:text-[#332A24] px-6 py-3 rounded-full'
      : 'border border-[#332A24] text-[#332A24] hover:bg-[#332A24] hover:text-[#F3EDE2] px-6 py-3 rounded-full';
  } else {
    style = dark
      ? 'text-[#D7C6A8] hover:text-[#FFFCF7] underline underline-offset-4 p-0'
      : 'text-[#332A24] hover:text-[#77765B] underline underline-offset-4 p-0';
  }

  return (
    <button
      type={type}
      className={`${base} ${style} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
