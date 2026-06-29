type SectionHeadingProps = {
  /** Small uppercase label above the heading (optional) */
  eyebrow?: string;
  /** Main heading text */
  title: string;
  /** Subtitle / description below the heading (optional) */
  description?: string;
  /** Text alignment */
  align?: "left" | "center";
};

/**
 * SectionHeading — Consistent section header.
 * Pure Server Component.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const descMaxWidth =
    align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl";

  return (
    <div className={alignClass}>
      {eyebrow && (
        <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-3 text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1] text-txt-1">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg text-txt-2 ${descMaxWidth}`}>
          {description}
        </p>
      )}
    </div>
  );
}