import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";
import SubmitNewsModal from "@/components/SubmitNewsModal";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Header onSubmitNews={() => setModalOpen(true)} />
      <Hero onSubmitNews={() => setModalOpen(true)} />
      <Featured onSubmitNews={() => setModalOpen(true)} />
      <Promo />
      <Footer />
      <SubmitNewsModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
};

export default Index;
