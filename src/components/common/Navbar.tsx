import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "./SocialIcons";
import { siteConfig } from "@/data/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", label: "Accueil" },
    {
      label: "Sports",
      children: [
        { to: "/football-americain", label: "Football Américain" },
        { to: "/flag-football", label: "Flag Football" },
        { to: "/cheerleading", label: "Cheerleading" },
        { to: "/baseball", label: "Baseball" },
      ],
    },
    { to: "/boutique", label: "Boutique" },
    { to: "/partenaires", label: "Partenaires" },
    { to: "/contact", label: "Contact" },
  ];

  const [sportsOpen, setSportsOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-packer-green/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/photos/logo-salavec.png"
              alt="Les Salamandres"
              className="h-12 w-25 object-contain rounded-full group-hover:scale-110 transition-transform"
            />
            <div className="hidden sm:block">
              <span className="font-heading text-2xl text-white tracking-wider">
                LES SALAMANDRES
              </span>
              <span className="block text-xs text-packer-gold font-subheading tracking-[0.3em]">
                LE HAVRE
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setSportsOpen(true)}
                  onMouseLeave={() => setSportsOpen(false)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-subheading font-medium text-white hover:text-packer-gold transition-colors tracking-wide uppercase">
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${sportsOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {sportsOpen && (
                    <div className="absolute top-full left-0 mt-0 w-56 bg-packer-green-dark border border-packer-green-light/30 rounded-lg shadow-xl py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                  className="block px-4 py-3 text-sm font-subheading text-white/80 hover:text-packer-gold hover:bg-packer-green-light/50 transition-colors tracking-wide"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 text-sm font-subheading font-medium transition-colors tracking-wide uppercase ${
                    location.pathname === link.to
                      ? "text-packer-gold"
                      : "text-white hover:text-packer-gold"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Social + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white hover:text-packer-gold transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white hover:text-packer-gold transition-colors"
              aria-label="YouTube"
            >
              <YoutubeIcon className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:text-packer-gold transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-packer-green-dark/98 backdrop-blur-lg border-t border-packer-green-light/20 px-4 py-6 space-y-2">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <span className="block px-4 py-2 text-xs font-subheading text-packer-gold/60 tracking-[0.2em] uppercase">
                  {link.label}
                </span>
                {link.children.map((child) => (
                  <Link
                    key={child.to}
                    to={child.to}
                    className="block px-4 py-3 text-base font-subheading text-white/80 hover:text-packer-gold transition-colors tracking-wide"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-3 text-base font-subheading font-medium tracking-wide ${
                  location.pathname === link.to
                    ? "text-packer-gold"
                    : "text-white/80 hover:text-packer-gold"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
