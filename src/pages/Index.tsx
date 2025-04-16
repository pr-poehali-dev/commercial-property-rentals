import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PropertyTypes from '@/components/PropertyTypes';
import AboutCompany from '@/components/AboutCompany';
import Stats from '@/components/Stats';
import ContactForm from '@/components/ContactForm';
import BuildingIllustration from '@/components/BuildingIllustration';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PropertyTypes />
        <AboutCompany />
        <Stats />
        <ContactForm />
        <BuildingIllustration />
      </main>
      <Footer />
    </div>
  );
};

export default Index;