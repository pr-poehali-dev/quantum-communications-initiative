import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";
import SubmitNewsModal from "@/components/SubmitNewsModal";
import ApplicationModal from "@/components/ApplicationModal";
import ConceptModal from "@/components/ConceptModal";
import CorrespondentsModal from "@/components/CorrespondentsModal";

const Index = () => {
  const [newsModalOpen, setNewsModalOpen] = useState(false);
  const [appModalOpen, setAppModalOpen] = useState(false);
  const [conceptModalOpen, setConceptModalOpen] = useState(false);
  const [corrModalOpen, setCorrModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Header
        onSubmitNews={() => setNewsModalOpen(true)}
        onAbout={() => setConceptModalOpen(true)}
        onCorrespondents={() => setCorrModalOpen(true)}
      />
      <Hero onSubmitNews={() => setNewsModalOpen(true)} />
      <Featured onSubmitNews={() => setNewsModalOpen(true)} onApply={() => setAppModalOpen(true)} />
      <Promo />
      <Footer />
      <SubmitNewsModal open={newsModalOpen} onClose={() => setNewsModalOpen(false)} />
      <ApplicationModal open={appModalOpen} onClose={() => setAppModalOpen(false)} />
      <ConceptModal open={conceptModalOpen} onClose={() => setConceptModalOpen(false)} />
      <CorrespondentsModal open={corrModalOpen} onClose={() => setCorrModalOpen(false)} />
    </main>
  );
};

export default Index;
