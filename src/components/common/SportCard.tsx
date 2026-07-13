import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface SportCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
}

export function SportCard({ id, name, description, image, icon }: SportCardProps) {
  return (
    <Link
      to={`/${id}`}
      className="group relative overflow-hidden rounded-2xl aspect-[4/5] sm:aspect-[3/4] block"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-packer-green-dark via-packer-green-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8">
        <span className="text-4xl mb-3">{icon}</span>
        <h3 className="font-heading text-3xl sm:text-4xl text-white tracking-wider mb-2">
          {name.toUpperCase()}
        </h3>
        <p className="text-white/70 text-sm font-body leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>
        <span className="inline-flex items-center gap-2 text-packer-gold font-subheading text-sm font-medium tracking-[0.15em] uppercase group-hover:gap-4 transition-all duration-300">
          Découvrir
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>

      {/* Gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-packer-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </Link>
  );
}
