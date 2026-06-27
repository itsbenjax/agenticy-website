"use client";

import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

type RevealWrapperProps = {
  children: ReactNode;
  className?: string;
  /** Delay index (0-5) — maps to .d1 through .d5 classes */
  delay?: number;
  /** HTML element to render (default: "div") */
  as?: ElementType;
};

/**
 * RevealWrapper — On-scroll reveal via IntersectionObserver.
 * Adds `.reveal` initially, then `.in-view` (and optional `.d{delay}`)
 * once the element enters the viewport.
 */
export default function RevealWrapper({
  children,
  className = "",
  delay,
  as: Tag = "div",
}: RevealWrapperProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const delayClass =
    delay !== undefined && delay >= 1 && delay <= 5 ? `d${delay}` : "";

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? `in-view ${delayClass}` : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}