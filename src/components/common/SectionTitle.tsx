interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionTitle({ subtitle, title, description, align = "center", light = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 sm:mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      {subtitle && (
        <span className={`font-subheading text-sm tracking-[0.4em] uppercase mb-3 block ${light ? "text-packer-gold" : "text-packer-gold"}`}>
          {subtitle}
        </span>
      )}
      <h2
        className={`font-heading text-4xl sm:text-5xl lg:text-6xl tracking-wider leading-[0.95] ${light ? "text-white" : "text-packer-green"}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg max-w-2xl leading-relaxed ${align === "center" ? "mx-auto" : ""} ${light ? "text-white/70" : "text-packer-green/60"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
