interface SectionLabelProps {
  text: string;
  className?: string;
  centered?: boolean;
}

export function SectionLabel({
  text,
  className = "",
  centered = true,
}: SectionLabelProps) {
  return (
    <p
      className={`text-xs font-medium uppercase tracking-[0.3em] text-gold ${
        centered ? "text-center" : ""
      } ${className}`}
    >
      {text}
    </p>
  );
}
