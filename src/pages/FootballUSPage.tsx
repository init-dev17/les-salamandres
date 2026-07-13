import { SportPage } from "./SportPage";

export function FootballUSPage() {
  return (
    <SportPage
      title="FOOTBALL AMÉRICAIN"
      subtitle="Discipline"
      heroImage="/photos/foot-senior.jpg"
      description="Le football américain, sport roi aux États-Unis, est pratiqué avec passion et intensité au sein de l'association Les Salamandres. Que tu sois un joueur confirmé ou que tu découvres ce sport, nos entraîneurs t'accompagnent pour progresser. L'association évolue en championnat régional et participe à de nombreux tournois en Normandie et en France."
      schedule="Mardi & Jeudi 19h-21h"
      category="U15, U18 & Séniors"
      ages="15 - 40 ans"
      highlights={[
        {
          icon: "🏈",
          title: "Excellence sportive",
          description: "Entraînement de haut niveau avec des coachs qualifiés. Technique individuelle, jeu collectif et condition physique.",
        },
        {
          icon: "🛡️",
          title: "Esprit d'équipe",
          description: "Le football américain est avant tout un sport collectif. Solidarité, entraide et dépassement de soi sont nos valeurs.",
        },
        {
          icon: "🏆",
          title: "Compétitions",
          description: "Participation au championnat régional et tournois à travers toute la France. Vivez l'émotion du game day.",
        },
        {
          icon: "💪",
          title: "Condition physique",
          description: "Un programme complet de préparation physique adapté à chaque joueur pour atteindre son potentiel maximum.",
        },
        {
          icon: "🎓",
          title: "Formation",
          description: "Des clinics et stages réguliers pour apprendre les bases ou perfectionner ta technique, quel que soit ton niveau.",
        },
        {
          icon: "🤝",
          title: "Convivialité",
          description: "Au-delà du terrain, nous sommes une famille. Soirées, événements et moments de partage tout au long de la saison.",
        },
      ]}
      galleryImages={[
        "/photos/foot2.jpg",
        "/photos/foot-senior2.jpg",
        "/photos/foot-timeout.jpg",
        "/photos/foot1.jpg",
        "/photos/foot3.jpg",
        "/photos/foot-couloir.jpg",
      ]}
    />
  );
}
