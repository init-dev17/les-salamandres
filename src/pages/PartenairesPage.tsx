import { motion } from "framer-motion";
import { ExternalLink, Mail } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { SectionTitle } from "@/components/common/SectionTitle";

const partners = [
  {
    name: "Mairie du Havre",
    description: "Soutien institutionnel et mise à disposition d'installations sportives pour les entraînements et matchs.",
    tier: "Or",
    website: "https://lehavre.fr",
  },
  {
    name: "FFFA - Fédération Française de Football Américain",
    description: "Organisation des championnats nationaux et encadrement des équipes licenciées.",
    tier: "Fédération",
    website: "https://fffa.org",
  },
  {
    name: "Normandie Sport",
    description: "Soutien au développement du sport en Normandie et promotion des disciplines américaines.",
    tier: "Argent",
    website: "https://www.normandie.fr/sport",
  },
  {
    name: "Ville du Havre - Service Sports",
    description: "Accès aux infrastructures municipales et subventions pour le développement de l'association.",
    tier: "Or",
    website: "https://www.lehavreseinemetropole.fr/amonservice/theme/culture-sports-loisirs",
  },
  {
    name: "Ligue de Normandie (LNFA)",
    description: "La Ligue de Normandie de Football Américain, Flag et Cheerleading est l'organisme régional réprésentant la Fédération Française de Football Américain (FFFA)",
    website: "https://lnfafc.assoconnect.com/page/3336678-a-propos",
  },
];

const tierColors: Record<string, string> = {
  Or: "bg-packer-gold text-packer-green",
  Argent: "bg-gray-300 text-gray-800",
  Bronze: "bg-orange-700 text-white",
  Fédération: "bg-packer-green text-white",
};

export function PartenairesPage() {
  return (
    <>
      <PageHero
        title="PARTENAIRES"
        subtitle="Ils nous soutiennent"
        image="/photos/foot-sections.jpg"
      />

      {/* Partners Grid */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Nos sponsors"
            title="ILS NOUS FONT CONFIANCE"
            description="Un grand merci à tous nos partenaires qui contribuent au développement de l'association Les Salamandres."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-salamandre-gray rounded-2xl p-8 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
              >
                {/* Tier Badge */}
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-subheading tracking-wider mb-4 ${tierColors[partner.tier] || ""}`}>
                  {partner.tier}
                </div>

                <h3 className="font-heading text-2xl text-packer-green tracking-wider mb-3">
                  {partner.name}
                </h3>
                <p className="text-packer-green/60 text-sm leading-relaxed mb-6">
                  {partner.description}
                </p>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-packer-gold font-subheading text-sm tracking-wider hover:gap-4 transition-all"
                >
                  Visiter
                  <ExternalLink className="w-4 h-4" />
                </a>
                <div className="absolute top-0 right-0 w-24 h-24 bg-packer-gold/5 rounded-bl-full transition-all duration-500 group-hover:w-32 group-hover:h-32" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become Partner CTA */}
      <section className="py-20 bg-packer-green-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            title="DEVENIR PARTENAIRE"
            subtitle="Rejoignez-nous"
            description="Vous souhaitez soutenir les Salamandres et gagner en visibilité ? Découvrez nos offres de partenariat."
            light
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:partenariat@les-salamandres.fr"
              className="btn-primary"
            >
              <Mail className="w-4 h-4" />
              Proposer un partenariat
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
