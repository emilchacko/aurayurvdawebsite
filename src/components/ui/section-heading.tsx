type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#496d56]">{eyebrow}</p>
      <h2 className="font-serif text-3xl text-[#1a2a2a] sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-[#536260]">{description}</p> : null}
    </div>
  );
}
