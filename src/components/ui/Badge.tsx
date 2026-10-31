import React from 'react';
import type { RoastLevel, Process } from '@/types';

interface BadgeProps {
  variant?: 'roast' | 'process' | 'family' | 'status';
  value: string;
  className?: string;
}

const ROAST_COLORS: Record<RoastLevel, string> = {
  light: 'bg-amber-100 text-amber-800',
  medium: 'bg-orange-100 text-orange-800',
  dark: 'bg-[#D7C6A8]/20 text-[#332A24]',
};

const PROCESS_COLORS: Record<Process, string> = {
  washed: 'bg-blue-100 text-blue-800',
  natural: 'bg-purple-100 text-purple-800',
  honey: 'bg-yellow-100 text-yellow-800',
  other: 'bg-gray-100 text-gray-800',
};

const capitalize = (s: string) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

export const Badge: React.FC<BadgeProps> = ({ variant = 'status', value, className = '' }) => {
  const base = 'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium';

  if (variant === 'roast') {
    const color = ROAST_COLORS[value as RoastLevel] ?? 'bg-gray-100 text-gray-800';
    return <span className={`${base} ${color} ${className}`}>{capitalize(value)}</span>;
  }

  if (variant === 'process') {
    const color = PROCESS_COLORS[value as Process] ?? 'bg-gray-100 text-gray-800';
    return <span className={`${base} ${color} ${className}`}>{capitalize(value)}</span>;
  }

  return <span className={`${base} bg-gray-100 text-gray-800 ${className}`}>{value}</span>;
};
