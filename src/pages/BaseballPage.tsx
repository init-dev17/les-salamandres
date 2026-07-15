import { SportPage } from "./SportPage";

export function BaseballPage() {
  return (
    <SportPage
      title="BASEBALL"
      subtitle="Discipline"
      heroImage="/photos/baseball.jpg"
      description="Le baseball, un classique incontournable du sport américain, trouve sa place au sein de l'association Les Salamandres. Précision du lancer, stratégie de jeu et esprit d'équipe sont les piliers de cette discipline. Notre équipe évolue en championnat régional et offre une atmosphère conviviale et compétitive aux joueurs de tous niveaux."
      schedule="-"
      category="Seniors"
      ages="12-45 ans"
      highlights={[
        {
          icon: "⚾",
          title: "Technique pure",
          description: "Lancer, frappe, crochetage, glissade. Le baseball exige une précision technique que nos entraîneurs t'aideront à développer.",
        },
        {
          icon: "🧠",
          title: "Stratégie",
          description: "Le baseball est un sport d'échecs sur le terrain. Chaque lance, chaque positionnement est réfléchi et calculé.",
        },
        {
          icon: "🏟️",
          title: "Ambiance stadium",
          description: "Vivez la magie du baseball dans une ambiance chaleureuse. Snacks, chants et camaraderie sur les gradins.",
        },
        {
          icon: "🏆",
          title: "Championnat régional",
          description: "Notre équipe participe au championnat de Normandie. Représente les Salamandres avec passion et détermination.",
        },
        {
          icon: "🤝",
          title: "Esprit communautaire",
          description: "Le baseball rapproche les generations. Des matchs interclubs et événements festifs tout au long de la saison.",
        },
        {
          icon: "⭐",
          title: "Détection et formation",
          description: "Pas besoin d'expérience pour commencer. Nos entraîneurs encadrent les débutants et perfectionnent les joueurs confirmés.",
        },
      ]}
      instagramUrl="https://www.instagram.com/reel/DSlq05rAipK/"
      location="Stade Youri Gagarine - Le Havre"
      galleryImages={[
        "https://images.unsplash.com/photo-1529768167801-9173d94c2a42?w=800&q=80",
        "/photos/baseball3.jpg",
        "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&q=80",
        "https://images.unsplash.com/photo-1461896836934-bd45ba8a0bca?w=800&q=80",
      ]}
    />
  );
}
