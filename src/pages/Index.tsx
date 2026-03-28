import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";
import SubmitNewsModal from "@/components/SubmitNewsModal";
import ApplicationModal from "@/components/ApplicationModal";
import ConceptModal from "@/components/ConceptModal";

const Index = () => {
  const [newsModalOpen, setNewsModalOpen] = useState(false);
  const [appModalOpen, setAppModalOpen] = useState(false);
  const [conceptModalOpen, setConceptModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Header onSubmitNews={() => setNewsModalOpen(true)} onAbout={() => setConceptModalOpen(true)} />
      <Hero onSubmitNews={() => setNewsModalOpen(true)} />
      <Featured onSubmitNews={() => setNewsModalOpen(true)} onApply={() => setAppModalOpen(true)} />
      <Promo />
      <Footer />
      <SubmitNewsModal open={newsModalOpen} onClose={() => setNewsModalOpen(false)} />
      <ApplicationModal open={appModalOpen} onClose={() => setAppModalOpen(false)} />
      <ConceptModal open={conceptModalOpen} onClose={() => setConceptModalOpen(false)} />
    </main>
  );
};

export default Index;
