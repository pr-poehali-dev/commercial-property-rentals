import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PropertyTypes from '@/components/PropertyTypes';
import PropertyOffers from '@/components/PropertyOffers';
import Advantages from '@/components/Advantages';
import Partners from '@/components/Partners';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
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