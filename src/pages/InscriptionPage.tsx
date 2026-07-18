import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { SectionTitle } from "@/components/common/SectionTitle";

export function InscriptionPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      const iframe = iframeRef.current;
      if (!iframe) return;
      const dataHeight = e.data.height;
      if (dataHeight && dataHeight > parseFloat(iframe.style.height || "0")) {
        iframe.style.height = dataHeight + "px";
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <>
      <PageHero
        title="INSCRIPTIONS"
        subtitle="Rejoins l'aventure"
        image="/photos/team2.jpg"
      />

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* COMMENT ÇA MARCHE ? */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h3 className="font-heading text-3xl text-packer-green tracking-wider mb-6 text-center">
                COMMENT ÇA MARCHE ?
              </h3>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Contacte-nous", desc: "Dis-nous ce qui te plaît et on t'indique les horaires d'entrainements." },
                  { step: "2", title: "Essai gratuit", desc: "Viens découvrir lors d'un ou plusieurs entraînements d'essai, sans engagement." },
                  { step: "3", title: "Remplis le formulaire", desc: "Indique tes informations et le sport qui t'intéresse." },
                  { step: "4", title: "Inscription finale", desc: "Si ça te plaît, finalise ton inscription et deviens Salamandre !" },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-packer-gold rounded-full flex items-center justify-center shrink-0">
                      <span className="font-heading text-xl text-packer-green">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-subheading text-base text-packer-green font-semibold tracking-wide mb-1">
                        {item.title}
                      </h4>
                      <p className="text-packer-green/60 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* LICENCE & TARIFS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-salamandre-gray rounded-2xl p-8 text-center">
                <h4 className="font-heading text-2xl text-packer-green tracking-wider mb-4">
                  LICENCE & TARIFS
                </h4>
                <p className="text-packer-green/60 text-sm leading-relaxed mb-4">
                  La licence inclut l'assurance, l'accès aux entraînements et à toutes les compétitions.
                  Des facilités de paiement sont disponibles.
                </p>
                <p className="text-packer-green/60 text-sm leading-relaxed">
                  Contacte-nous pour en savoir plus sur les tarifs et les modalités d'inscription.
                </p>
              </div>
            </motion.div>

            {/* INSCRIS-TOI + Iframe HelloAsso */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                subtitle="Formulaire"
                title="INSCRIS-TOI"
                align="center"
              />

              <iframe
                id="haWidget"
                ref={iframeRef} 
                scrolling="auto"
                src="https://www.helloasso.com/associations/les-salamandres-du-havre/adhesions/adhesion-2026-2027/widget"
                style={{ width: "100%", height: "750px", border: "none" }}
                className="rounded-xl overflow-hidden mt-8"
              />
            </motion.div>

            
          </div>
        </div>
      </section>
    </>
  );
}
