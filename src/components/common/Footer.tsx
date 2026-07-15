import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { InstagramIcon, YoutubeIcon, FacebookIcon, TiktokIcon } from "./SocialIcons";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-packer-green-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/photos/logo-sala3.png"
              alt="Les Salamandres"
              className="h-48 w-48 object-contain mb-6 mx-auto md:mx-0"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-6 text-center md:text-left">
              {siteConfig.description}
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-packer-gold hover:text-packer-green transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-packer-gold hover:text-packer-green transition-all"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-packer-gold hover:text-packer-green transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-packer-gold hover:text-packer-green transition-all"
                aria-label="TikTok"
              >
                <TiktokIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Sports */}
          <div>
            <h3 className="font-heading text-xl text-packer-gold tracking-wider mb-6">
              NOS DISCIPLINES
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/football-americain" className="text-white/60 hover:text-packer-gold transition-colors text-sm font-subheading tracking-wide">
                  Football Américain
                </Link>
              </li>
              <li>
                <Link to="/flag-football" className="text-white/60 hover:text-packer-gold transition-colors text-sm font-subheading tracking-wide">
                  Flag Football
                </Link>
              </li>
              <li>
                <Link to="/cheerleading" className="text-white/60 hover:text-packer-gold transition-colors text-sm font-subheading tracking-wide">
                  Cheerleading
                </Link>
              </li>
              <li>
                <Link to="/baseball" className="text-white/60 hover:text-packer-gold transition-colors text-sm font-subheading tracking-wide">
                  Baseball
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading text-xl text-packer-gold tracking-wider mb-6">
              LIENS UTILES
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/boutique" className="text-white/60 hover:text-packer-gold transition-colors text-sm font-subheading tracking-wide">
                  Boutique
                </Link>
              </li>
              <li>
                <Link to="/partenaires" className="text-white/60 hover:text-packer-gold transition-colors text-sm font-subheading tracking-wide">
                  Partenaires
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/60 hover:text-packer-gold transition-colors text-sm font-subheading tracking-wide">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/inscription" className="text-white/60 hover:text-packer-gold transition-colors text-sm font-subheading tracking-wide">
                  Inscriptions
                </Link>
              </li> 
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-heading text-xl text-packer-gold tracking-wider mb-6">
              CONTACT
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="w-5 h-5 text-packer-gold mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">
                  Stade Youri Gagarine - Le Havre<br />Normandie, France
                </span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="w-5 h-5 text-packer-gold shrink-0" />
                <a href="mailto:contact@les-salamandres.fr" className="text-white/60 hover:text-packer-gold transition-colors text-sm">
                  salamandres.club@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <svg className="w-5 h-5 text-packer-gold shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                <a href="https://www.instagram.com/salamandres_lh/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-packer-gold transition-colors text-sm">
                  @Salamandres_LH
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 text-center">
          <p className="text-white/40 text-xs font-subheading tracking-wider">
            &copy; {new Date().getFullYear()} LES SALAMANDRES. TOUS DROITS RÉSERVÉS.
          </p>
          <div className="flex gap-6">
            <Link to="/mentions-legales" className="text-white/40 hover:text-packer-gold text-xs font-subheading tracking-wider transition-colors">
              MENTIONS LÉGALES
            </Link>
            <Link to="/politique-de-confidentialite" className="text-white/40 hover:text-packer-gold text-xs font-subheading tracking-wider transition-colors">
              CONFIDENTIALITÉ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
