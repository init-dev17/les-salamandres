import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { InstagramEmbed } from "react-social-media-embed";
import { ChevronRight, Clock, Users, MapPin, Trophy } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { SectionTitle } from "@/components/common/SectionTitle";

function extractYoutubeId(url: string): string | null {
  const patterns = [
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/,
    /youtu\.be\/([a-zA-Z0-9_-]+)/,
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

interface SportPageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  schedule?: string;
  category?: string;
  ages?: string;
  highlights: { icon: string; title: string; description: string }[];
  galleryImages: string[];
  instagramUrl?: string;
  location?: string;
  titleIcon?: string;
  accentColor?: string;
  videoUrl?: string;
  videoStart?: number;
  videoEnd?: number;
}

export function SportPage({
  title,
  subtitle,
  heroImage,
  description,
  schedule,
  category,
  ages,
  highlights,
  galleryImages,
  instagramUrl = "https://www.instagram.com/reel/DJoBItUiHVk/",
  location: sportLocation = "Le Havre",
  titleIcon,
  videoUrl,
  videoStart,
  videoEnd,
}: SportPageProps) {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} image={heroImage} titleIcon={titleIcon} />

      {/* Info Bar */}
      <section className="bg-packer-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock, label: "Entraînements", value: schedule || "À définir" },
              { icon: Users, label: "Catégories", value: category || "Tous niveaux" },
              { icon: MapPin, label: "Lieu", value: sportLocation },
              { icon: Trophy, label: "Âge", value: ages || "10-40 ans" },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`py-6 px-4 sm:px-6 flex items-center gap-3 ${
                  i < 3 ? "border-r border-white/10" : ""
                }`}
              >
                <item.icon className="w-6 h-6 text-packer-gold shrink-0" />
                <div>
                  <span className="font-subheading text-[10px] sm:text-xs text-white/40 tracking-[0.2em] uppercase block">
                    {item.label}
                  </span>
                  <span className="font-subheading text-sm sm:text-base text-white tracking-wide">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
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
                subtitle="Présentation"
                title={title}
                description={description}
                align="left"
                titleIcon={titleIcon}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${galleryImages[0]})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-packer-green-dark/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-packer-gold/10 rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Presentation */}
      {videoUrl && extractYoutubeId(videoUrl) && (
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              subtitle="Découvrir"
              title="EN VIDÉO"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
            >
              <iframe
                src={`https://www.youtube.com/embed/${extractYoutubeId(videoUrl)}${videoStart != null || videoEnd != null ? `?${videoStart != null ? `start=${videoStart}` : ""}${videoStart != null && videoEnd != null ? "&" : ""}${videoEnd != null ? `end=${videoEnd}` : ""}` : ""}`}
                title={`Vidéo ${title}`}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Highlights */}
      <section className="py-20 sm:py-28 bg-salamandre-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Points clés"
            title="POURQUOI NOUS REJOINDRE"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 sm:block sm:gap-0 sm:mb-4">
                  {item.icon.startsWith("/") ? (
                    <img src={item.icon} alt="" className="w-16 h-16 object-contain sm:mb-0" />
                  ) : (
                    <span className="text-4xl sm:mb-0">{item.icon}</span>
                  )}
                  <h3 className="font-heading text-2xl text-packer-green tracking-wider sm:mb-3">
                    {item.title}
                  </h3>
                </div>
                <p className="text-packer-green/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Galerie"
            title="NOS MOMENTS"
          />
          <div className="grid max-[725px]:grid-cols-1 grid-cols-2 min-[1090px]:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden min-[1090px]:col-span-2 min-[1090px]:row-span-2"
            >
              <div
                className="w-full h-full aspect-square bg-cover bg-center hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url(${galleryImages[1]})` }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden flex items-center justify-center min-[1090px]:row-span-2 min-[1090px]:h-full"
            >
              <InstagramEmbed url={instagramUrl} width={328} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden"
            >
              <div
                className="w-full aspect-video bg-cover bg-center hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url(${galleryImages[2]})` }}
              />
            </motion.div>
            {galleryImages.slice(3).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: (i + 3) * 0.05 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden"
              >
                <div
                  className="w-full aspect-video bg-cover bg-center hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url(${img})` }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-packer-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl text-white tracking-wider mb-6">
            ENVIE D'ESSAYER ?
          </h2>
          <p className="text-white/70 text-lg mb-8 font-subheading font-light">
            Contactez-nous pour venir assister à un entraînement ou pour plus d'informations.
          </p>
          <Link
            to="/contact"
            className="btn-primary group"
          >
            Nous contacter
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
