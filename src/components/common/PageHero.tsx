interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  titleIcon?: string;
}

export function PageHero({ title, subtitle, image, titleIcon }: PageHeroProps) {
  return (
    <section className="relative h-[50vh] sm:h-[60vh] flex items-end overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-packer-green-dark via-packer-green-dark/50 to-packer-green-dark/20" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 w-full">
        {subtitle && (
          <span className="font-subheading text-packer-gold text-sm tracking-[0.4em] uppercase mb-3 block">
            {subtitle}
          </span>
        )}
        <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white tracking-wider leading-[0.9] flex items-center gap-4">
          {title}
          {titleIcon && <img src={titleIcon} alt="" className="h-[53px] w-[53px] sm:h-[70px] sm:w-[70px] lg:h-[88px] lg:w-[88px] object-contain" />}
        </h1>
        <div className="w-24 h-1 bg-packer-gold mt-6" />
      </div>
    </section>
  );
}
