import React from 'react';
import { Card, CardContent } from './ui/card';

const Partners = () => {
  // В реальном проекте здесь будут логотипы партнеров
  const partners = [
    { name: "Компания 1", logo: "/placeholder.svg" },
    { name: "Компания 2", logo: "/placeholder.svg" },
    { name: "Компания 3", logo: "/placeholder.svg" },
    { name: "Компания 4", logo: "/placeholder.svg" },
    { name: "Компания 5", logo: "/placeholder.svg" },
    { name: "Компания 6", logo: "/placeholder.svg" }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Наши партнеры</h2>
        <div className="accent-line mx-auto"></div>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Мы гордимся сотрудничеством с ведущими компаниями, которые доверяют нам
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((partner, index) => (
            <Card key={index} className="border border-gray-200 hover:border-estate-accent transition-colors duration-300">
              <CardContent className="flex items-center justify-center p-6">
                <img src={partner.logo} alt={partner.name} className="h-16 max-w-full grayscale hover:grayscale-0 transition-all duration-300" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;