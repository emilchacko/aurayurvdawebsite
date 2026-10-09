type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";
  const Heading = as;

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#496d56]">{eyebrow}</p>
      <Heading className="font-serif text-3xl text-[#1d3026] sm:text-4xl">{title}</Heading>
      {description ? <p className="mt-4 text-base leading-7 text-[#536260]">{description}</p> : null}
    </div>
  );
}
