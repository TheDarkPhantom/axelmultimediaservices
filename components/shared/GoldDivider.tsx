interface GoldDividerProps {
  className?: string;
  centered?: boolean;
}

export function GoldDivider({
  className = "",
  centered = true,
}: GoldDividerProps) {
  return (
    <hr
      className={`h-px border-0 bg-gold/30 ${
        centered ? "mx-auto max-w-[80px]" : "max-w-[80px]"
      } ${className}`}
    />
  );
}
