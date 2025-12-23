import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ProductShowcase } from "@/components/ProductShowcase";
import { StatsSection } from "@/components/StatsSection";

export default function Home() {
  return (
    <div className="bg-white text-mega-dark">
      <Navbar />
      <main
        id="conteudo-principal"
        className="space-y-6 sm:space-y-8"
        aria-label="Pagina inicial MEGA Poliuretanos"
      >
        <HeroSection />
        <StatsSection />
        <ProductShowcase />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
