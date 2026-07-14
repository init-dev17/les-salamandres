import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { SectionTitle } from "@/components/common/SectionTitle";

export function InscriptionPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => setFormStatus("sent"), 1500);
  };

  return (
    <>
      <PageHero
        title="INSCRIPTIONS"
        subtitle="Rejoins l'aventure"
        image="/photos/team2.jpg"
      />

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                subtitle="Formulaire"
                title="INSCRIS-TOI"
                align="left"
              />

              {formStatus === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-salamandre-gray rounded-2xl p-10 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-packer-gold mx-auto mb-4" />
                  <h3 className="font-heading text-3xl text-packer-green tracking-wider mb-3">
                    INSCRIPTION REÇUE
                  </h3>
                  <p className="text-packer-green/60 font-body leading-relaxed">
                    Merci pour ton inscription ! Nous te contacterons très bientôt
                    pour finaliser ta demande et t'inviter à un entraînement d'essai.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-subheading text-sm text-packer-green/60 tracking-wider mb-2 uppercase">
                        Nom *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-salamandre-gray border border-packer-green/10 rounded-lg focus:outline-none focus:border-packer-gold focus:ring-1 focus:ring-packer-gold transition-colors font-body text-packer-green"
                        placeholder="Ton nom"
                      />
                    </div>
                    <div>
                      <label className="block font-subheading text-sm text-packer-green/60 tracking-wider mb-2 uppercase">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-salamandre-gray border border-packer-green/10 rounded-lg focus:outline-none focus:border-packer-gold focus:ring-1 focus:ring-packer-gold transition-colors font-body text-packer-green"
                        placeholder="Ton prénom"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-subheading text-sm text-packer-green/60 tracking-wider mb-2 uppercase">
                        Date de naissance *
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full px-4 py-3 bg-salamandre-gray border border-packer-green/10 rounded-lg focus:outline-none focus:border-packer-gold focus:ring-1 focus:ring-packer-gold transition-colors font-body text-packer-green"
                      />
                    </div>
                    <div>
                      <label className="block font-subheading text-sm text-packer-green/60 tracking-wider mb-2 uppercase">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 bg-salamandre-gray border border-packer-green/10 rounded-lg focus:outline-none focus:border-packer-gold focus:ring-1 focus:ring-packer-gold transition-colors font-body text-packer-green"
                        placeholder="06 00 00 00 00"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-subheading text-sm text-packer-green/60 tracking-wider mb-2 uppercase">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-salamandre-gray border border-packer-green/10 rounded-lg focus:outline-none focus:border-packer-gold focus:ring-1 focus:ring-packer-gold transition-colors font-body text-packer-green"
                      placeholder="ton@email.com"
                    />
                  </div>

                  <div>
                    <label className="block font-subheading text-sm text-packer-green/60 tracking-wider mb-2 uppercase">
                      Sport souhaité *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 bg-salamandre-gray border border-packer-green/10 rounded-lg focus:outline-none focus:border-packer-gold focus:ring-1 focus:ring-packer-gold transition-colors font-body text-packer-green appearance-none"
                    >
                      <option value="">Choisir un sport</option>
                      <option value="football-us">Football Américain</option>
                      <option value="flag">Flag Football</option>
                      <option value="cheer">Cheerleading</option>
                      <option value="baseball">Baseball</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-subheading text-sm text-packer-green/60 tracking-wider mb-2 uppercase">
                      Expérience sportive
                    </label>
                    <select className="w-full px-4 py-3 bg-salamandre-gray border border-packer-green/10 rounded-lg focus:outline-none focus:border-packer-gold focus:ring-1 focus:ring-packer-gold transition-colors font-body text-packer-green appearance-none">
                      <option value="debutant">Débutant</option>
                      <option value="confirme">Confirmé</option>
                      <option value="competition">Compétition</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-subheading text-sm text-packer-green/60 tracking-wider mb-2 uppercase">
                      Message (optionnel)
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-salamandre-gray border border-packer-green/10 rounded-lg focus:outline-none focus:border-packer-gold focus:ring-1 focus:ring-packer-gold transition-colors font-body text-packer-green resize-none"
                      placeholder="Des questions ? Dis-nous tout..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="btn-primary group disabled:opacity-50"
                  >
                    {formStatus === "sending" ? "Envoi en cours..." : "S'inscrire"}
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-heading text-3xl text-packer-green tracking-wider mb-4">
                  COMMENT ÇA MARCHE ?
                </h3>
                <div className="space-y-6">
                  {[
                    { step: "1", title: "Remplis le formulaire", desc: "Indique tes informations et le sport qui t'intéresse." },
                    { step: "2", title: "On te contacte", desc: "Notre équipe te recontacte sous 48h pour convenir d'un rendez-vous." },
                    { step: "3", title: "Essai gratuit", desc: "Viens découvrir un entraînement d'essai, sans engagement." },
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
              </div>

              <div className="bg-salamandre-gray rounded-2xl p-6">
                <h4 className="font-heading text-xl text-packer-green tracking-wider mb-3">
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
          </div>
        </div>
      </section>
    </>
  );
}
