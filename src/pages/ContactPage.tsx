import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ContactCard } from "@/components/common/ContactCard";
import { siteConfig } from "@/data/site";
import { InstagramIcon, YoutubeIcon, FacebookIcon, TiktokIcon } from "@/components/common/SocialIcons";

export function ContactPage() {
  return (
    <>
      <PageHero
        title="CONTACT"
        subtitle="Rejoignez-nous"
        image="/photos/lh.webp"
      />

      <section className="py-20 sm:py-28 bg-salamandre-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Coordonnées"
            title="NOS INFORMATIONS"
            description="Retrouvez toutes les informations de contact pour chaque section de l'association."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {siteConfig.contactSections.map((section, i) => (
              <ContactCard key={section.id} section={section} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            subtitle="Réseaux"
            title="SUIVEZ-NOUS"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4"
          >
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-salamandre-gray rounded-xl flex items-center justify-center text-packer-green hover:bg-packer-gold hover:text-packer-green transition-all"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-salamandre-gray rounded-xl flex items-center justify-center text-packer-green hover:bg-packer-gold hover:text-packer-green transition-all"
              aria-label="YouTube"
            >
              <YoutubeIcon className="w-6 h-6" />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-salamandre-gray rounded-xl flex items-center justify-center text-packer-green hover:bg-packer-gold hover:text-packer-green transition-all"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-6 h-6" />
            </a>
            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-salamandre-gray rounded-xl flex items-center justify-center text-packer-green hover:bg-packer-gold hover:text-packer-green transition-all"
              aria-label="TikTok"
            >
              <TiktokIcon className="w-6 h-6" />
            </a>
          </motion.div>
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
