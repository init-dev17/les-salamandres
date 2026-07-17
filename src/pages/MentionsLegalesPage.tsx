import { PageHero } from "@/components/common/PageHero";
import { siteConfig } from "@/data/site";

export function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        title="MENTIONS LÉGALES"
        subtitle="Informations légales"
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80"
      />

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="legal-content max-w-none">
            <h2 className="font-heading text-3xl text-packer-green tracking-wider">1. ÉDITEUR DU SITE</h2>
            <div className="text-packer-green/70 font-body leading-relaxed space-y-2">
              <p>
                <strong>Association Les Salamandres</strong><br />
                Association loi 1901<br />
                Siège social : Le Havre, France<br />
                SIRET : {siteConfig.siret}<br />
                Président : {siteConfig.president}
              </p>
              <p>
                Directeur de la publication : Le Président de l'association
              </p>
            </div>

            <h2 className="font-heading text-3xl text-packer-green tracking-wider mt-12">2. HÉBERGEUR</h2>
            <div className="text-packer-green/70 font-body leading-relaxed">
              <p>
                Ce site est hébergé par [Nom de l'hébergeur]<br />
                [Adresse de l'hébergeur]<br />
                [Téléphone de l'hébergeur]
              </p>
            </div>

            <h2 className="font-heading text-3xl text-packer-green tracking-wider mt-12">3. PROPRIÉTÉ INTELLECTUELLE</h2>
            <div className="text-packer-green/70 font-body leading-relaxed space-y-2">
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos, graphismes, logos, icônes, sons, logiciels) est la propriété exclusive de l'association Les Salamandres ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, transmission ou dénaturation du site ou de son contenu, par quelque procédé que ce soit, est interdite sans autorisation préalable écrite de l'association.
              </p>
            </div>

            <h2 className="font-heading text-3xl text-packer-green tracking-wider mt-12">4. DONNÉES PERSONNELLES</h2>
            <div className="text-packer-green/70 font-body leading-relaxed space-y-2">
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez de droits sur vos données personnelles :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement (droit à l'oubli)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d'opposition</li>
              </ul>
              <p>
                Pour exercer ces droits, contactez-nous à : <a href={`mailto:${siteConfig.social.emailClub}`} className="text-packer-gold hover:underline">{siteConfig.social.emailClub}</a>
              </p>
            </div>

            <h2 className="font-heading text-3xl text-packer-green tracking-wider mt-12">5. COOKIES</h2>
            <div className="text-packer-green/70 font-body leading-relaxed">
              <p>
                Ce site utilise des cookies pour améliorer l'expérience utilisateur. Les cookies sont de petits fichiers textes stockés sur votre appareil qui permettent de reconnaître votre navigateur. Vous pouvez paramétrer votre navigateur pour refuser les cookies ou être averti lorsqu'un cookie est déposé.
              </p>
            </div>

            <h2 className="font-heading text-3xl text-packer-green tracking-wider mt-12">6. RESPONSABILITÉ</h2>
            <div className="text-packer-green/70 font-body leading-relaxed">
              <p>
                L'association Les Salamandres s'efforce de fournir des informations aussi précises que possible sur son site. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour. Toutes les informations sont données à titre indicatif et sont susceptibles d'évoluer.
              </p>
            </div>

            <h2 className="font-heading text-3xl text-packer-green tracking-wider mt-12">7. LIENS HYPERTEXTES</h2>
            <div className="text-packer-green/70 font-body leading-relaxed">
              <p>
                Le site peut contenir des liens hypertextes vers d'autres sites. L'association Les Salamandres n'exerce aucun contrôle sur le contenu de ces sites tiers et décline toute responsabilité quant à leur contenu ou leurs pratiques en matière de protection des données personnelles.
              </p>
            </div>

            <h2 className="font-heading text-3xl text-packer-green tracking-wider mt-12">8. DROIT APPLICABLE</h2>
            <div className="text-packer-green/70 font-body leading-relaxed">
              <p>
                Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </div>

            <h2 className="font-heading text-3xl text-packer-green tracking-wider mt-12">9. CONTACT</h2>
            <div className="text-packer-green/70 font-body leading-relaxed">
              <p>
                Pour toute question relative aux mentions légales, contactez-nous à :<br />
                <a href={`mailto:${siteConfig.social.emailClub}`} className="text-packer-gold hover:underline">{siteConfig.social.emailClub}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
