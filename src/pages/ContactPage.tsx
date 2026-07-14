import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { InstagramIcon, YoutubeIcon, FacebookIcon, TiktokIcon } from "@/components/common/SocialIcons";
import { PageHero } from "@/components/common/PageHero";
import { SectionTitle } from "@/components/common/SectionTitle";
import { siteConfig } from "@/data/site";

export function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => setFormStatus("sent"), 1500);
  };

  return (
    <>
      <PageHero
        title="CONTACT"
        subtitle="Rejoignez-nous"
        image="/photos/lh.jpg"
      />

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                subtitle="Écrivez-nous"
                title="PRENEZ CONTACT"
                align="left"
              />
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-subheading text-sm text-packer-green/60 tracking-wider mb-2 uppercase">
                      Nom
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-salamandre-gray border border-packer-green/10 rounded-lg focus:outline-none focus:border-packer-gold focus:ring-1 focus:ring-packer-gold transition-colors font-body text-packer-green"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block font-subheading text-sm text-packer-green/60 tracking-wider mb-2 uppercase">
                      Prénom
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-salamandre-gray border border-packer-green/10 rounded-lg focus:outline-none focus:border-packer-gold focus:ring-1 focus:ring-packer-gold transition-colors font-body text-packer-green"
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-subheading text-sm text-packer-green/60 tracking-wider mb-2 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-salamandre-gray border border-packer-green/10 rounded-lg focus:outline-none focus:border-packer-gold focus:ring-1 focus:ring-packer-gold transition-colors font-body text-packer-green"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block font-subheading text-sm text-packer-green/60 tracking-wider mb-2 uppercase">
                    Sport souhaité
                  </label>
                  <select className="w-full px-4 py-3 bg-salamandre-gray border border-packer-green/10 rounded-lg focus:outline-none focus:border-packer-gold focus:ring-1 focus:ring-packer-gold transition-colors font-body text-packer-green appearance-none">
                    <option value="">Choisir un sport</option>
                    <option value="football-us">Football Américain</option>
                    <option value="flag">Flag Football</option>
                    <option value="cheer">Cheerleading</option>
                    <option value="baseball">Baseball</option>
                    <option value="autre">Autre / Général</option>
                  </select>
                </div>
                <div>
                  <label className="block font-subheading text-sm text-packer-green/60 tracking-wider mb-2 uppercase">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-salamandre-gray border border-packer-green/10 rounded-lg focus:outline-none focus:border-packer-gold focus:ring-1 focus:ring-packer-gold transition-colors font-body text-packer-green resize-none"
                    placeholder="Votre message..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="btn-secondary group disabled:opacity-50"
                >
                  {formStatus === "sent" ? (
                    "Message envoyé !"
                  ) : formStatus === "sending" ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Envoyer
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                subtitle="Coordonnées"
                title="NOS INFORMATIONS"
                align="left"
              />
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-packer-gold/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-packer-gold" />
                  </div>
                  <div>
                    <h4 className="font-subheading text-sm text-packer-green/40 tracking-[0.2em] uppercase mb-1">
                      Adresse
                    </h4>
                    <p className="font-body text-packer-green">
                      {siteConfig.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-packer-gold/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-packer-gold" />
                  </div>
                  <div>
                    <h4 className="font-subheading text-sm text-packer-green/40 tracking-[0.2em] uppercase mb-1">
                      Email
                    </h4>
                    <a href="mailto:contact@les-salamandres.fr" className="font-body text-packer-green hover:text-packer-gold transition-colors">
                      contact@les-salamandres.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-packer-gold/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-packer-gold" />
                  </div>
                  <div>
                    <h4 className="font-subheading text-sm text-packer-green/40 tracking-[0.2em] uppercase mb-1">
                      Téléphone
                    </h4>
                    <a href="tel:+33600000000" className="font-body text-packer-green hover:text-packer-gold transition-colors">
                      06 00 00 00 00
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-packer-gold/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-packer-gold" />
                  </div>
                  <div>
                    <h4 className="font-subheading text-sm text-packer-green/40 tracking-[0.2em] uppercase mb-1">
                      Horaires d'entraînement
                    </h4>
                    <p className="font-body text-packer-green text-sm leading-relaxed">
                      Football US : Mardi & Jeudi 19h-21h<br />
                      Flag Football : Mercredi & Vendredi 18h-20h<br />
                      Cheerleading : Lundi & Vendredi 18h-20h30<br />
                      Baseball : Samedi 10h-13h & Dimanche 14h-17h
                    </p>
                  </div>
                </div>

                {/* Social */}
                <div className="pt-6 border-t border-packer-green/10">
                  <h4 className="font-subheading text-sm text-packer-green/40 tracking-[0.2em] uppercase mb-4">
                    Suivez-nous
                  </h4>
                  <div className="flex gap-4">
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-salamandre-gray rounded-xl flex items-center justify-center text-packer-green hover:bg-packer-gold hover:text-packer-green transition-all"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-5 h-5" />
                    </a>
                    <a
                      href={siteConfig.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-salamandre-gray rounded-xl flex items-center justify-center text-packer-green hover:bg-packer-gold hover:text-packer-green transition-all"
                      aria-label="YouTube"
                    >
                      <YoutubeIcon className="w-5 h-5" />
                    </a>
                    <a
                      href={siteConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-salamandre-gray rounded-xl flex items-center justify-center text-packer-green hover:bg-packer-gold hover:text-packer-green transition-all"
                      aria-label="Facebook"
                    >
                      <FacebookIcon className="w-5 h-5" />
                    </a>
                    <a
                      href={siteConfig.social.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-salamandre-gray rounded-xl flex items-center justify-center text-packer-green hover:bg-packer-gold hover:text-packer-green transition-all"
                      aria-label="TikTok"
                    >
                      <TiktokIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 bg-packer-green/10 relative">
        <iframe
          title="Localisation Les Salamandres"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41579.40904368468!2d0.08039655!3d49.4943701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e0023f1c4e304d%3A0x406cdd6942a13d0!2sLe%20Havre!5e0!3m2!1sfr!2sfr!4v1"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
