import { SportPage } from "./SportPage";

export function CheerleadingPage() {
  return (
    <SportPage
      title="CHEERLEADING"
      subtitle="Discipline"
      heroImage="/photos/cheer6.jpg"
      description="Le cheerleading chez Les Salamandres, c'est le mélange parfait entre sport et spectacle. Acrobies aériennes, chorégraphies énergiques et esprit d'équipe sont au programme. Notre équipe de cheerleaders accompagne les équipes de football lors des matchs et se produit lors de compétitions et événements. Un sport exigeant qui développe force, souplesse et confiance en soi."
      schedule="Mardi, Mercredi, Vendredi"
      category=" Minimes, Cadets, Juniors & Séniors"
      ages="À partir de 7 ans"
      highlights={[
        {
          icon: "🤸",
          title: "Acrobaties",
          description: "Tumble, stunt et pyramides. Développe ta souplesse, ta force et ta coordination dans un cadre sécurisé.",
        },
        {
          icon: "🎵",
          title: "Chorégraphies",
          description: "Numéros synchronisés sur de la musique entraînante. L'expression artistique au service de la performance sportive.",
        },
        {
          icon: "🏈",
          title: "Animation matchs",
          description: "Soutiens les équipes de football lors des matchs à domicile. Crée l'ambiance et montre l'esprit Salamandre.",
        },
        {
          icon: "🏆",
          title: "Compétitions",
          description: "Participe à des concours de cheerleading à travers la France. Représente Le Havre avec style et énergie.",
        },
        {
          icon: "👧​",
          title: "École de cheer",
          description: "Un programme pour les jeunes dès 6 ans. Apprends les bases du cheerleading de manière ludique et progressive.",
        },
        {
          icon: "💪",
          title: "Développement personnel",
          description: "Confiance en soi, discipline et travail en équipe. Le cheerleading transforme autant sur le plan personnel que sportif.",
        },
      ]}
      instagramUrl="https://www.instagram.com/reel/DYKwfGFRLsH/"
      location="Gymnases Claude Bernard & Jules Deschaseaux - Le Havre"
      galleryImages={[
        "/photos/cheer5.jpg",
        "/photos/cheer.jpg",
        "/photos/cheer4.jpg",
        "/photos/cheer7.jpg",
      ]}
      /* https://www.paris-normandie.fr/id277026/article/2022-02-08/video-vous-aimez-le-sport-et-lesprit-dequipe-au-havre-le-club-de-cheerleading */
      /*https://www.youtube.com/shorts/CPe5YwrHSG8*/
    />
  );
}
