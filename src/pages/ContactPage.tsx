import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Clock } from "lucide-react";
import { InstagramIcon, YoutubeIcon, FacebookIcon, TiktokIcon } from "@/components/common/SocialIcons";
import { PageHero } from "@/components/common/PageHero";
import { SectionTitle } from "@/components/common/SectionTitle";
import { siteConfig } from "@/data/site";

export function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const [formData, setFormData] = useState({ user_lastname: '', user_firstname: '', user_email: '', value: '', message: '' });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log("Données récupérées :", formData);
    setFormStatus("sending");

  try {
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      alert('Email sent successfully!');
    } else {
      throw new Error(result.error);
    }
    
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email.');
    }

  };

  return (
    <>
      <PageHero
        title="CONTACT"
        subtitle="Rejoignez-nous"
        image="/photos/lh.webp"
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
                      name="user_lastname"
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
                      name="user_firstname"
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
                    name="user_email"
                    required
                    className="w-full px-4 py-3 bg-salamandre-gray border border-packer-green/10 rounded-lg focus:outline-none focus:border-packer-gold focus:ring-1 focus:ring-packer-gold transition-colors font-body text-packer-green"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block font-subheading text-sm text-packer-green/60 tracking-wider mb-2 uppercase">
                    Sport souhaité
                  </label>
                  <select name="sport" className="w-full px-4 py-3 bg-salamandre-gray border border-packer-green/10 rounded-lg focus:outline-none focus:border-packer-gold focus:ring-1 focus:ring-packer-gold transition-colors font-body text-packer-green appearance-none">
                    <option value="">Choisir un sport</option>
                    <option value="football-us">Football Américain</option>
                    <option value="flag">Flag Football</option>
                    <option value="cheer">Cheerleading</option>
                    {/* <option value="baseball">Baseball / Softball</option> */}
                    <option value="autre">Autre / Général</option>
                  </select>
                </div>
                <div>
                  <label className="block font-subheading text-sm text-packer-green/60 tracking-wider mb-2 uppercase">
                    Message
                  </label>
                  <textarea
                    name="message"
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
                  ) : formStatus === "error" ? (
                    "Erreur d'envoi, réessayez"
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
                      Emails
                    </h4>
                    <a href={`mailto:${siteConfig.social.emailClub}`} className="font-body text-packer-green hover:text-packer-gold transition-colors">
                      {siteConfig.social.emailClub}
                    </a>
                    <p></p>
                    <a href={`mailto:${siteConfig.social.emailCheer}`} className="font-body text-packer-green hover:text-packer-gold transition-colors">
                      {siteConfig.social.emailCheer}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-packer-gold/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-packer-gold" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-subheading text-sm text-packer-green/40 tracking-[0.2em] uppercase mb-1">
                      Instagram
                    </h4>
                    <a href="https://www.instagram.com/salamandres_lh/" target="_blank" rel="noopener noreferrer" className="font-body text-packer-green hover:text-packer-gold transition-colors">
                      @Salamandres_LH
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
                      Football US : Mardi & Jeudi - à partir de 18h30<br />
                      Flag Football : Mercredi & Vendredi - à partir de 18h30<br />
                      Cheerleading : Mardi, Mercredi & Vendredi - à partir de 17h30<br />
                      {/* Baseball : - */}
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
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2589.9526190470847!2d0.0855586!3d49.5231702!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e028ab7eaaaaab%3A0x48372f90d919cab7!2sStade%20Youri%20Gagarine!5e0!3m2!1sfr!2sfr!4v1784040545332!5m2!1sfr!2sfr"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
