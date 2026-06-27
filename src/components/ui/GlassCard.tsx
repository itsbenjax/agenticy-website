"use client";

import { useRef, useCallback, type ElementType, type ReactNode } from "react";

type GlassCardProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  [key: string]: unknown;
};

/**
 * GlassCard — Premium glass card with mouse-tracking spotlight effect.
 * Uses CSS custom properties --mx and --my for the radial gradient position.
 */
export default function GlassCard({
  as: Tag = "div",
  children,
  className = "",
  ...props
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  }, []);

  return (
    <Tag
      ref={ref}
      className={`glass-card card-spotlight ${className}`}
      onMouseMove={handleMouseMove}
      {...props}
    >
      {children}
    </Tag>
  );
}