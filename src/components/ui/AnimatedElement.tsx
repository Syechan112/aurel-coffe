import React from 'react';
import { useInViewAnimation, type AnimationParams } from '@/hooks/useInViewAnimation';

interface AnimatedElementProps {
  children: React.ReactNode;
  animation: AnimationParams;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation,
  threshold = 0.1,
  rootMargin = '0px',
  once = true,
  className = '',
  as: Component = 'div',
}) => {
  const ref = useInViewAnimation({
    animationConfig: animation,
    threshold,
    rootMargin,
    once,
  });

  return React.createElement(
    Component,
    { ref, className },
    children
  );
};
