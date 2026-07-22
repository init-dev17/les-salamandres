import { motion } from "framer-motion";
import { ShoppingBag, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { SectionTitle } from "@/components/common/SectionTitle";
import { siteConfig } from "@/data/site";

export function BoutiquePage() {
  return (
    <>
      <PageHero
        title="BOUTIQUE"
        subtitle="Équipement"
        image="/photos/stade2.jpg"
      />

      {/* Products */}
      <section className="py-20 sm:py-28 bg-salamandre-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            subtitle="Catalogue"
            title="NOTRE COLLECTION"
            description="Retrouvez toute la collection officielle des Salamandres pour afficher tes couleurs avec fierté : Sweat, T-shirt, lycra et bien plus."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-10 sm:p-14 shadow-sm"
          >
            <ShoppingBag className="w-16 h-16 text-packer-gold mx-auto mb-6" />
            {/* <img
                      src="/photos/partenaires/r.avif"
                      alt="logo raso store"
                      className=" h-16 text-packer-gold mx-auto mb-6"
                    /> */}
            <h3 className="font-heading text-3xl sm:text-4xl text-packer-green tracking-wider mb-4">
               BOUTIQUE OFFICIELLE {/*RASO STORE */}
            </h3> 
            <a
              href="https://rasostore.fr/collections/salamandres"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              Accéder à la boutique
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Custom Order */}
      <section className="py-20 bg-packer-green-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            title="COMMANDE SUR MESURE"
            subtitle="Personnalisation"
            description="Tu souhaites un maillot avec ton numéro ou un article personnalisé ? Contacte-nous directement."
            light
          />
          <a
            href={`mailto:${siteConfig.social.emailClub}`}
            className="btn-primary"
          >
            Nous contacter
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
