
import Advantages from "@/components/Advantages";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import PropertyOffers from "@/components/PropertyOffers";
import PropertyTypes from "@/components/PropertyTypes";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <PropertyTypes />
        <PropertyOffers />
        <Advantages />
        <Partners />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
