import { PageHero } from "@/components/common/PageHero";
import { siteConfig } from "@/data/site";

export function PolitiqueConfidentialitePage() {
  return (
    <>
      <PageHero
        title="CONFIDENTIALITÉ"
        subtitle="Protection des données"
        image="/photos/lh2.webp"
      />

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="legal-content max-w-none">
            <h2 className="font-heading text-3xl text-packer-green tracking-wider">1. RESPONSABLE DU TRAITEMENT</h2>
            <div className="text-packer-green/70 font-body leading-relaxed">
              <p>
                Le responsable du traitement des données personnelles est l'association Les Salamandres, association loi 1901, dont le siège social est situé au Le Havre, France.
              </p>
            </div>

            <h2 className="font-heading text-3xl text-packer-green tracking-wider mt-12">2. DONNÉES COLLECTÉES</h2>
            <div className="text-packer-green/70 font-body leading-relaxed space-y-2">
              <p>Nous collectons les données suivantes :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Données d'identification</strong> : nom, prénom, email, téléphone</li>
                <li><strong>Données de connexion</strong> : adresse IP, navigateur, système d'exploitation</li>
                <li><strong>Données de navigation</strong> : pages visitées, durée de la visite</li>
                <li><strong>Données sportives</strong> : discipline choisie, niveau, catégorie</li>
              </ul>
            </div>

            <h2 className="font-heading text-3xl text-packer-green tracking-wider mt-12">3. FINALITÉ DU TRAITEMENT</h2>
            <div className="text-packer-green/70 font-body leading-relaxed space-y-2">
              <p>Vos données sont collectées pour :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>La gestion des inscriptions et licenciés</li>
                <li>L'organisation des entraînements et compétitions</li>
                <li>La communication relative à l'association</li>
                <li>L'amélioration de nos services</li>
                <li>Le respect de nos obligations légales</li>
              </ul>
            </div>

            <h2 className="font-heading text-3xl text-packer-green tracking-wider mt-12">4. BASE LÉGALE</h2>
            <div className="text-packer-green/70 font-body leading-relaxed">
              <p>
                Le traitement de vos données repose sur votre consentement, l'exécution de nos obligations contractuelles (adhésion à l'association) et notre intérêt légitime à communiquer avec nos membres.
              </p>
            </div>

            <h2 className="font-heading text-3xl text-packer-green tracking-wider mt-12">5. DURÉE DE CONSERVATION</h2>
            <div className="text-packer-green/70 font-body leading-relaxed">
              <p>
                Vos données personnelles sont conservées pendant la durée de votre adhésion à l'association, puis pendant une durée de 3 ans après votre dernier contact avec nous, sauf obligation légale de conservation plus longue.
              </p>
            </div>

            <h2 className="font-heading text-3xl text-packer-green tracking-wider mt-12">6. VOS DROITS</h2>
            <div className="text-packer-green/70 font-body leading-relaxed space-y-2">
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
                <li><strong>Droit de rectification</strong> : corriger des données inexactes</li>
                <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
                <li><strong>Droit à la limitation</strong> : demander la limitation du traitement</li>
                <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
                <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
              </ul>
              <p>
                Pour exercer ces droits, contactez-nous à : <a href={`mailto:${siteConfig.social.emailClub}`} className="text-packer-gold hover:underline">{siteConfig.social.emailClub}</a>
              </p>
            </div>

            <h2 className="font-heading text-3xl text-packer-green tracking-wider mt-12">7. SÉCURITÉ</h2>
            <div className="text-packer-green/70 font-body leading-relaxed">
              <p>
                Nous mettons en œuvre toutes les mesures techniques et organisationnelles nécessaires pour protéger vos données contre la perte, l'utilisation non autorisée, l'accès, la divulgation, l'altération ou la destruction.
              </p>
            </div>

            <h2 className="font-heading text-3xl text-packer-green tracking-wider mt-12">8. CONTACT</h2>
            <div className="text-packer-green/70 font-body leading-relaxed">
              <p>
                Pour toute question relative à la protection de vos données personnelles, contactez-nous à :<br />
                <a href={`mailto:${siteConfig.social.emailClub}`} className="text-packer-gold hover:underline">{siteConfig.social.emailClub}</a>
              </p>
              <p>
                Vous pouvez également adresser une réclamation à la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-packer-gold hover:underline">www.cnil.fr</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
