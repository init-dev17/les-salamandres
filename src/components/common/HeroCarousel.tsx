import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/data/site";

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const slides = siteConfig.heroSlides;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-packer-green-dark/90 via-packer-green-dark/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-packer-green-dark/80 via-transparent to-packer-green-dark/30" />
          </div>

          {/* Content */}
          <div className="relative z-20 h-full flex items-center max-lg:justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-lg:text-center">
              <div className="max-w-2xl max-lg:mx-auto">
                <span className="inline-block font-subheading text-packer-gold text-sm tracking-[0.4em] uppercase mb-4 animate-fade-in">
                  {siteConfig.location}
                </span>
                <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-white leading-[0.9] mb-6 tracking-wider">
                  {slide.title}
                </h1>
                <p className="font-subheading text-xl sm:text-2xl text-white/80 mb-8 tracking-wide font-light">
                  {slide.subtitle}
                </p>
                <Link
                  to={slide.link}
                  className="btn-primary group max-lg:mx-auto"
                >
                  {slide.cta}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-packer-gold hover:text-packer-green hover:border-packer-gold transition-all duration-300"
        aria-label="Précédent"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-packer-gold hover:text-packer-green hover:border-packer-gold transition-all duration-300"
        aria-label="Suivant"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current
                ? "w-12 bg-packer-gold"
                : "w-6 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-10 z-30 hidden lg:flex flex-col items-center gap-2">
        <span className="font-subheading text-xs text-white/50 tracking-[0.3em] rotate-90 origin-center mb-8">
          SCROLL
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-packer-gold to-transparent animate-pulse" />
      </div>
    </section>
  );
}
