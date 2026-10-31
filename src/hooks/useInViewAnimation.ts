import { useEffect, useRef } from 'react';
import { animate, stagger, type StaggerFunction } from 'animejs';

export interface AnimationParams {
  duration?: number;
  delay?: number | StaggerFunction<any>;
  ease?: string;
  opacity?: [number, number];
  translateY?: [number, number];
  translateX?: [number, number];
  scale?: [number, number];
  rotate?: [number, number];
  [key: string]: any;
}

export interface UseInViewAnimationProps {
  animationConfig: AnimationParams;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export const useInViewAnimation = ({
  animationConfig,
  threshold = 0.1,
  rootMargin = '0px',
  once = true,
}: UseInViewAnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (once && hasAnimated.current) return;

          hasAnimated.current = true;

          animate(entry.target, animationConfig);

          if (once) {
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [animationConfig, threshold, rootMargin, once]);

  return elementRef;
};

// Preset animations
export const fadeInUp = (duration = 800): AnimationParams => ({
  opacity: [0, 1],
  translateY: [40, 0],
  duration,
  ease: 'outQuad',
});

export const fadeInDown = (duration = 800): AnimationParams => ({
  opacity: [0, 1],
  translateY: [-40, 0],
  duration,
  ease: 'outQuad',
});

export const fadeInLeft = (duration = 800): AnimationParams => ({
  opacity: [0, 1],
  translateX: [-40, 0],
  duration,
  ease: 'outQuad',
});

export const fadeInRight = (duration = 800): AnimationParams => ({
  opacity: [0, 1],
  translateX: [40, 0],
  duration,
  ease: 'outQuad',
});

export const scaleIn = (duration = 800): AnimationParams => ({
  opacity: [0, 1],
  scale: [0.9, 1],
  duration,
  ease: 'outQuad',
});

export const rotateIn = (duration = 800): AnimationParams => ({
  opacity: [0, 1],
  rotate: [-10, 0],
  scale: [0.9, 1],
  duration,
  ease: 'outQuad',
});

export const staggeredFadeInUp = (
  duration = 800,
  staggerDelay = 100
): AnimationParams => ({
  opacity: [0, 1],
  translateY: [40, 0],
  duration,
  delay: stagger(staggerDelay),
  ease: 'outQuad',
});
