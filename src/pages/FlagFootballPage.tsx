import { SportPage } from "./SportPage";

export function FlagFootballPage() {
  return (
    <SportPage
      title="FLAG FOOTBALL"
      subtitle="Discipline"
      heroImage="/photos/flag5.jpg"
      titleIcon="/photos/JO512-2.png"
      description="Le flag football est la version sans contact du football américain. Accessible à tous, il développe les mêmes qualités techniques et tactiques tout en étant plus sûr. C'est le sport idéal pour débuter ou pour jouer en toute convivialité. L'association propose des équipes mixtes et des participations à des tournois regionaux et nationaux."
      schedule="Mardi & Vendredi"
      category="Mixte - Tous niveaux"
      ages="15 - 40 ans"
      highlights={[
        {
          icon: "🤾🏻",
          title: "Accessible à tous",
          description: "Pas besoin de matériel coûteux ni d'expérience. Le flag football est ouvert à tous, dès 8 ans, sans contact physique.",
        },
        {
          icon: "⚡",
          title: "Rapide et technique",
          description: "Un sport dynamique qui développe l'agilité, la dextérité, la tactique et la stratégie. Idéal pour s'améliorer rapidement.",
        },
        {
          icon: "👫",
          title: "Mixte et inclusif",
          description: "Des équipes mixtes pour favoriser l'inclusion. Les hommes et les femmes jouent ensemble sur le même terrain.",
        },
        {
          icon: "/photos/JO512-3.png",
          title: "Compétitions",
          description: "Participe à des tournois régionaux et nationaux. Représente les Salamandres avec fierté sur le terrain.",
        },
        {
          icon: "👨‍👩‍👧‍👦​​",
          title: "École de flag",
          description: "Un programme dédié aux jeunes dès 8 ans pour apprendre les bases du football de manière ludique et encadrée.",
        },
        {
          icon: "🏈",
          title: "Passerelle vers le foot US",
          description: "Le flag football est une excellente porte d'entrée vers le football américain pour ceux qui souhaitent découvrir les placages et le contact.",
        },
      ]}
      instagramUrl="https://www.instagram.com/reel/DJUM7sGiCoB/"
      location="Stade Youri Gagarine - Le Havre"
      galleryImages={[
        "/photos/flag4.jpg",
        "/photos/flag3.jpg",
        "/photos/flag2.jpg",
        "/photos/flag6.jpg",
      ]}
    />
  );
}
