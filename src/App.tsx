import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/common/Layout";
import { HomePage } from "@/pages/HomePage";
import { FootballUSPage } from "@/pages/FootballUSPage";
import { FlagFootballPage } from "@/pages/FlagFootballPage";
import { CheerleadingPage } from "@/pages/CheerleadingPage";
import { BaseballPage } from "@/pages/BaseballPage";
import { BoutiquePage } from "@/pages/BoutiquePage";
import { PartenairesPage } from "@/pages/PartenairesPage";
import { ContactPage } from "@/pages/ContactPage";
import { MentionsLegalesPage } from "@/pages/MentionsLegalesPage";
import { PolitiqueConfidentialitePage } from "@/pages/PolitiqueConfidentialitePage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/football-americain" element={<FootballUSPage />} />
          <Route path="/flag-football" element={<FlagFootballPage />} />
          <Route path="/cheerleading" element={<CheerleadingPage />} />
          <Route path="/baseball" element={<BaseballPage />} />
          <Route path="/boutique" element={<BoutiquePage />} />
          <Route path="/partenaires" element={<PartenairesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
          <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialitePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
