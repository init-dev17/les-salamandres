import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { InstagramEmbed } from "react-social-media-embed";
import { ChevronRight, Users, Calendar, MapPin } from "lucide-react";
import { HeroCarousel } from "@/components/common/HeroCarousel";
import { SportCard } from "@/components/common/SportCard";
import { SectionTitle } from "@/components/common/SectionTitle";
import { siteConfig } from "@/data/site";

const stats = [
  { icon: Calendar, label: "Depuis", value: "1990" },
  { icon: Users, label: "Nombre de licenciés", value: "140+" },
  { icon: Users, label: "Coachs et bénévoles", value: "30" },
  { icon: MapPin, label: "Normandie, France", value: "Le Havre" },
];

export function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroCarousel />

      {/* Stats Bar */}
      <section className="bg-packer-green relative z-20 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-8 sm:py-10 px-6 flex items-center gap-4 ${
                  i < stats.length - 1 ? "border-r border-white/10" : ""
                }`}
              >
                <stat.icon className="w-8 h-8 text-packer-gold shrink-0" />
                <div>
                  <span className="font-subheading text-xs text-white/50 tracking-[0.2em] uppercase">
                    {stat.label}
                  </span>
                  <span className="font-heading text-3xl sm:text-4xl text-white tracking-wider block leading-none">
                    {stat.value}
                  </span>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Grid */}
      <section className="py-20 sm:py-28 bg-salamandre-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Nos disciplines"
            title="CHOISIS TON SPORT"
            description="Trois disciplines américaines, une seule passion. Trouve celle qui te correspond."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {siteConfig.sports.map((sport, i) => (
              <motion.div
                key={sport.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <SportCard {...sport} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                subtitle="À propos"
                title="REJOINS LA FAMILLE"
                align="center"
              />
              <div className="space-y-4 text-packer-green/70 text-base sm:text-lg leading-relaxed text-center">
                <p>
                  Fondée au Havre, notre association propose trois disciplines : le Football Américain,
                  le Flag Football & le Cheerleading.
                </p>
                <p>
                  Les Salamandres, c'est bien plus qu'une association sportive. C'est une famille unie
                  par la passion des sports américains. 
                </p>
                <p>Que tu sois débutant ou expérimenté, tu trouveras ta place. Rejoins-nous et fais partie de cette aventure unique en Normandie.
                </p>
              </div>
              <div className="mt-8 flex justify-center">
              <Link
                to="/contact"
                className="btn-secondary group"
              >
                Nous contacter
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url(/photos/foot-senior3.jpg)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-packer-green-dark/60 to-transparent" />
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-packer-gold/10 rounded-2xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-packer-gold/30 rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=1920&q=80)",
          }}
        >
          <div className="absolute inset-0 bg-packer-green-dark/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="font-subheading text-packer-gold text-sm tracking-[0.4em] uppercase mb-4 block">
              Prêt à jouer ?
            </span>
            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white tracking-wider leading-[0.9] mb-6">
              REJOINS LES<br />SALAMANDRES
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 font-subheading font-light">
              Joueur, cheerleader, coach, bénévole ou spectateur, il y a une place pour toi et vivre cette expérience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/inscription"
                className="btn-primary group"
              >
                S'inscrire maintenant
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/boutique"
                className="btn-outline"
              >
                Visiter la boutique
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 sm:py-28 bg-salamandre-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Vidéos"
            title="L'ESPRIT SALAMANDRES"
            description="Découvre nos meilleurs moments en vidéo."
            light
          />
          <div className="flex flex-wrap justify-center gap-8 lg:gap-32 max-w-[750px] lg:max-w-[1000px] mx-auto">
            <div className="w-[279px] h-[392px] overflow-hidden">
              <div style={{ transform: "scale(0.85)", transformOrigin: "top left" }}>
                <InstagramEmbed url="https://www.instagram.com/reel/DJoBItUiHVk/" width={328} />
              </div>
            </div>
            <div className="w-[279px] h-[392px] overflow-hidden">
              <div style={{ transform: "scale(0.85)", transformOrigin: "top left" }}>
                <InstagramEmbed url="https://www.instagram.com/reel/DQ7W7emArQr/" width={328} />
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Voir plus sur Instagram
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
