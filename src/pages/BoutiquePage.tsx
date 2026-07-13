import { motion } from "framer-motion";
import { ShoppingBag, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { SectionTitle } from "@/components/common/SectionTitle";

const products = [
  {
    name: "Maillot Home Vert",
    price: "45,00",
    image: "https://images.unsplash.com/photo-1580087256394-dc596e1c8f4f?w=600&q=80",
    category: "Maillots",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Maillot officiel de l'association, vert Salamandre avec logo brodé.",
  },
  {
    name: "Maillot Away Blanc",
    price: "45,00",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    category: "Maillots",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Maillot extérieur blanc avec finitions dorées et logo.",
  },
  {
    name: "Sweat à capuche",
    price: "65,00",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
    category: "Textile",
    sizes: ["S", "M", "L", "XL"],
    description: "Sweat Premium avec capuche, brodé Les Salamandres Le Havre.",
  },
  {
    name: "Tee-Shirt Polo",
    price: "25,00",
    image: "https://images.unsplash.com/photo-1625910513413-5fc42dec9387?w=600&q=80",
    category: "Textile",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Tee-shirt polo vert avec logo brodé sur poitrine.",
  },
  {
    name: "Casquette Officielle",
    price: "20,00",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=600&q=80",
    category: "Accessoires",
    sizes: ["Unique"],
    description: "Casquette ajustable avec logo brodé Les Salamandres.",
  },
  {
    name: "Bonnet Hiver",
    price: "18,00",
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&q=80",
    category: "Accessoires",
    sizes: ["Unique"],
    description: "Bonnet tricoté vert avec pompon et logo brodé.",
  },
  {
    name: "Pack Drapeau Flag",
    price: "35,00",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&q=80",
    category: "Équipement",
    sizes: ["Taille unique"],
    description: "Lot de 2 drapeaux officiels pour le flag football.",
  },
  {
    name: "Gants de Baseball",
    price: "55,00",
    image: "https://images.unsplash.com/photo-1529768167801-9173d94c2a42?w=600&q=80",
    category: "Équipement",
    sizes: ["11\"", "12\"", "12.5\""],
    description: "Gant de baseball cuir véritable, gravé logo Salamandre.",
  },
];

export function BoutiquePage() {
  return (
    <>
      <PageHero
        title="BOUTIQUE"
        subtitle="Équipement"
        image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
      />

      {/* Notice */}
      <section className="bg-packer-gold py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-subheading text-sm sm:text-base text-packer-green tracking-wide">
            <ShoppingBag className="w-5 h-5 inline-block mr-2" />
            Boutique en cours de mise en ligne. Contactez-nous pour commander !
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 sm:py-28 bg-salamandre-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Catalogue"
            title="NOTRE COLLECTION"
            description="Retrouvez l'équipement officiel des Salamandres pour afficher tes couleurs avec fierté."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-packer-green text-white text-xs font-subheading tracking-wider px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-xl text-packer-green tracking-wider mb-1">
                    {product.name.toUpperCase()}
                  </h3>
                  <p className="text-packer-green/50 text-sm mb-3 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-2 mb-3">
                    {product.sizes.map((size) => (
                      <span
                        key={size}
                        className="text-xs font-subheading text-packer-green/60 border border-packer-green/20 rounded px-2 py-1"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-2xl text-packer-gold">
                      {product.price}&euro;
                    </span>
                    <button className="btn-secondary text-xs tracking-wider px-4 py-2 rounded-full">
                      Commander
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            href="mailto:contact@les-salamandres.fr"
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
