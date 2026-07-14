import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon, YoutubeIcon, FacebookIcon, TiktokIcon } from "./SocialIcons";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-packer-green-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <img
              src="/photos/logo-sala3.png"
              alt="Les Salamandres"
              className="h-48 w-48 object-contain rounded-full mb-6"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
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
                <Link to="/mentions-legales" className="text-white/60 hover:text-packer-gold transition-colors text-sm font-subheading tracking-wide">
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-xl text-packer-gold tracking-wider mb-6">
              CONTACT
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-packer-gold mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">
                  Le Havre<br />Normandie, France
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-packer-gold shrink-0" />
                <a href="mailto:contact@les-salamandres.fr" className="text-white/60 hover:text-packer-gold transition-colors text-sm">
                  contact@les-salamandres.fr
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-packer-gold shrink-0" />
                <a href="tel:+33600000000" className="text-white/60 hover:text-packer-gold transition-colors text-sm">
                  06 00 00 00 00
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
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
