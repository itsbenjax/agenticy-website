"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type AnimatedCounterProps = {
  /** Target number to animate to */
  value: number;
  /** Optional suffix (e.g. "%", "M+") */
  suffix?: string;
  /** Animation duration in ms (default: 2000) */
  duration?: number;
  className?: string;
};

/**
 * AnimatedCounter — Counts from 0 to target value when scrolled into view.
 * Uses IntersectionObserver + requestAnimationFrame with ease-out cubic easing.
 */
export default function AnimatedCounter({
  value,
  suffix = "",
  duration = 2000,
  className = "",
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number>(0);

  const animate = useCallback(() => {
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(eased * value));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
  }, [value, duration]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animate();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [hasAnimated, animate]);

  return (
    <span
      ref={ref}
      className={`font-mono font-bold tracking-tight tabular-nums ${className}`}
    >
      {displayValue}
      {suffix}
    </span>
  );
}