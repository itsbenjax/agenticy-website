"use client";

import Link from "next/link";
import { type ReactNode } from "react";

type GlassButtonProps = {
  href?: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

const sizeClasses: Record<string, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-base gap-2",
  lg: "px-8 py-4 text-lg gap-2.5",
};

const variantClasses: Record<string, string> = {
  primary:
    "bg-accent text-white border-accent hover:bg-accent/90 shadow-lg shadow-accent/25",
  secondary:
    "glass-dark text-txt-inv border-white/10 hover:text-txt-inv hover:border-white/20",
  ghost: "bg-transparent text-txt-1 border-transparent hover:bg-black/5",
};

const baseClasses =
  "inline-flex items-center justify-center font-medium rounded-full border transition-all duration-300 select-none";

/**
 * GlassButton — Premium glass button with variant support.
 * Renders a Next.js Link when `href` is provided, a `<button>` otherwise.
 */
export default function GlassButton({
  href,
  children,
  className = "",
  variant = "primary",
  size = "md",
}: GlassButtonProps) {
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}